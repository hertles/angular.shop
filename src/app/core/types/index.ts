export enum DistanceUnit {
  Meters = 'm',
  Kilometers = 'km',
  Centimeters = 'cm',
  Millimeters = 'mm',
  Feet = 'ft',
  Inches = 'in',
  Miles = 'mi',
  Yards = 'yd',
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  chosen: boolean
}
