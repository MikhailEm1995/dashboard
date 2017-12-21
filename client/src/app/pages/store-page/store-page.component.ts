import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  optionsOpened = false;

  toggleOptions() {
    this.optionsOpened = !this.optionsOpened;
  }

  constructor() { }

  ngOnInit() {
  }

}
