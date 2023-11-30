import { Component } from '@angular/core';
import { DistanceUnit } from "@models/distance.model";

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent {
  public distanceUnitsArray: string[] = Object.values(DistanceUnit)
  public fromValue: number = 0
  public fromUnit: DistanceUnit = DistanceUnit.Meters
  public toUnit: DistanceUnit = DistanceUnit.Miles
}
