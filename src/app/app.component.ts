import {Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core';

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
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pet';
  inputs = ["",""]
  output = ""
  interval: ReturnType<typeof setInterval>
  date: Date = new Date()
  ngOnInit() {
    this.interval = setInterval(()=>{
      this.date = new Date()
    },1000)
  }
  ngOnDestroy() {
    clearInterval(this.interval)
  }

  clearInput = () => {
    this.inputs = ["",""]
    this.output = ""
  }
  inputTyped = (newInput: string) => {
    if (newInput === "123") {
      this.output = " правильно!!"
    } else {
      this.output = ""
    }
  }
  inputChanged = (event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement
      if (target.value==="123") {
        this.output = " сохранено!!!!"
      }
    }
  }
  trackByInputs: TrackByFunction<string> = (index, _) => index
  trackByProducts: TrackByFunction<Product> = (_, item) => item.title
  products: Product[] = [
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145
      }
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146
      }
    },
  ]
}
