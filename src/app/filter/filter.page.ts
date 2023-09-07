import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filters = {
    "meal_type": "lunch",
    "cuisine": "indian",
    "distance": 5,
    "popular": true,
    "priceByOrder": "highToLow",
    "price": {
      "lower": "5",
      "upper": "10"
    }
  }

  constructor() { }

  ngOnInit() {
  }

  changeValue(name: string, ev: any) {
    const value = ev.detail.value;
    if (name === 'meal_type') {
      this.filters.meal_type = value;
    }
    else if (name === 'cuisine') {
      this.filters.cuisine = value;
    }
    else if (name === 'distance') {
      this.filters.distance = value;
    }
    else if (name === 'popular') {
      const data = ev.detail.checked;
      this.filters.popular = data;
    }
    else if (name === 'priceByOrder') {
      this.filters.priceByOrder = value;
    }
    else if (name === 'price') {
      this.filters.price = value;
    }
  }

  resetFilters() {
    this.filters = {
      "meal_type": "lunch",
      "cuisine": "indian",
      "distance": 5,
      "popular": true,
      "priceByOrder": "highToLow",
      "price": {
        "lower": "5",
        "upper": "10"
      }
    }
  }

}
