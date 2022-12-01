import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <section>
    <input type="text" placeholder="Filter by city">
    <button type="button">Search</button>
  </section>
  <section class="results">
  <app-housing-location housingLocation="this.onlyHouse"></app-housing-location>
  </section>
`,
  styles: [
    `input, button {
      font-size: 18pt;
      width: 60%;
      padding: 8px;
      border-radius: 10px;
      border: solid .05em #4468e8
    }`,
    `button {
      margin-left: .2em;
      width: auto;
    }`,
    `.results {
      display: flex;
      flex-wrap: wrap;
      margin-top: 4em;
    }`
  ]
})
export class HomeComponent {

  onlyHouse : HousingLocation;

  constructor() {
    this.onlyHouse = {
      id: 9999,
      name: "Test Home",
      city: "Test city",
      state: "ST",
      photo: "photo URL goes here",
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };
  }

}
