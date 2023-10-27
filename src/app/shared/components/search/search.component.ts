import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchTerm: string='';
 @Output()countryToSearch=new EventEmitter<any>();

 search() {
this.countryToSearch.emit(this.searchTerm);
}

}
