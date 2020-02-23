import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  logs: any;
  logsPerPage: any;
  itemsPerPage = 5;
  currentPage = 1;
  switcher = false;
  isTransitioning = true;
  constructor() { }

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

}
