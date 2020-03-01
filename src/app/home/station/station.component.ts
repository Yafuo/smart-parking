import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  faTimes = faTimes;
  station: any;
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.station.slots);
  }

  close() {
    this.modalRef.hide();
  }

}
