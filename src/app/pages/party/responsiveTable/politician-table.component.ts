import {Component, Input} from '@angular/core';
import {Politician} from "../../model/politician.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'politician-table',
  templateUrl: './politician-table.html',
  styleUrls: ['./politician-table.scss']
})
export class PoliticianTable {

  @Input() politicians: Observable<Politician[]>;

  constructor() {

  }
}
