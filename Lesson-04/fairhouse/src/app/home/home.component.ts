import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

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
    <app-housing-location></app-housing-location>
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

}
