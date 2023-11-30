import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {forkJoin, map, mergeMap, Observable, scan} from "rxjs";
import {DogBreedListModel} from "@models/dog-breed-list-model";
import {DogsService} from "@services/dogs/dogs.service";
import {DogModel} from "@models/dog.model";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-constants',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit, AfterViewInit {
  @ViewChild('breedSelect') breedSelect: MatSelect
  public breeds$: Observable<DogBreedListModel>
  public dogs$: Observable<DogModel>

  constructor(private dogsService: DogsService) {
  }

  ngOnInit() {
    this.breeds$ = this.dogsService.getAllBreeds()
  }

  ngAfterViewInit() {
    console.log(this.breedSelect)
    this.breedSelect.selectionChange.pipe(
      mergeMap((event) => {
        return forkJoin(event.value.map((breed: string) => this.dogsService.getDogsOfBreed(breed)))
      }),
      map(dogsOfBreed => {
        if (dogsOfBreed instanceof DogModel) {
          return dogsOfBreed.message
        }
        return dogsOfBreed
      }),
      scan((acc, value) => {
        return [...acc, ...value]
      })
    ).subscribe(value => {
      console.log(value)
    })
  }
}
