import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DogBreedListModel} from "@models/dog-breed-list-model";
import {DogModel} from "@models/dog.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http: HttpClient) { }
  public getAllBreeds(): Observable<DogBreedListModel> {
    return this.http.get<DogBreedListModel>('https://dog.ceo/api/breeds/list/all')
  }
  public getDogsOfBreed(breed: string, limit: number = 5): Observable<DogModel> {
    return this.http.get<DogModel>(`https://dog.ceo/api/breed/${breed}/images/random/${limit}`)
  }
}
