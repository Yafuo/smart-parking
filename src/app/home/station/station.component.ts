import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  station: any;
  constructor() { }

  ngOnInit() {
    console.log(this.station.slots);
  }

}
