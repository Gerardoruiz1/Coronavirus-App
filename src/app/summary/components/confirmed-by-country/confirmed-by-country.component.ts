import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.css']
})
export class ConfirmedByCountryComponent {

@Output() country = new EventEmitter<string>();

passCountryData(searchTerm: string) {

this.country.emit(searchTerm);
}
}