import { Component, OnInit } from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  faTimes = faTimes;
  logs: any;
  logsPerPage: any;
  itemsPerPage = 5;
  currentPage = 1;
  switcher = false;
  isTransitioning = true;
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    this.gotoPage(this.currentPage);
  }

  gotoPage(currentPage) {
    this.isTransitioning = true;
    setTimeout(() =>{
      this.isTransitioning = false;
    }, 100);
    this.currentPage = currentPage;
    this.logsPerPage = this.logs.slice((this.currentPage-1)*this.itemsPerPage, this.currentPage*this.itemsPerPage);
  }

  close() {
    this.modalRef.hide();
  }

}
