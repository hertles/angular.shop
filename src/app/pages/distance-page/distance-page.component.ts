import { Component } from '@angular/core';
import {DistanceUnit} from "../../core/models/distance";

@Component({
  selector: 'app-distance-page',
  templateUrl: './distance-page.component.html',
  styleUrls: ['./distance-page.component.scss']
})
export class DistancePageComponent {
  public distanceUnitsArray: string[] = Object.values(DistanceUnit)
  public fromValue: number = 0
  public fromUnit: DistanceUnit = DistanceUnit.Meters
  public toUnit: DistanceUnit = DistanceUnit.Miles
}
