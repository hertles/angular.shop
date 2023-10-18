import {Pipe, PipeTransform} from '@angular/core';
import {DistanceUnit} from "../../../core/models/distance";
import {DecimalPipe} from "@angular/common";

const metersInUnit = {
  [DistanceUnit.Meters]: 1,
  [DistanceUnit.Kilometers]: 1000,
  [DistanceUnit.Centimeters]: 0.01,
  [DistanceUnit.Millimeters]: 0.001,
  [DistanceUnit.Feet]: 0.3048,
  [DistanceUnit.Inches]: 0.0254,
  [DistanceUnit.Miles]: 1609.34,
  [DistanceUnit.Yards]: 0.9144,
}

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(
    value: number,
    fromUnit: DistanceUnit,
    toUnit: DistanceUnit = DistanceUnit.Meters,
    digitInfo: string = '1.0-2'
  ): string | null {
    const result = value * metersInUnit[fromUnit] / metersInUnit[toUnit]
    return this.decimalPipe.transform(result, digitInfo) + toUnit
  }

}
