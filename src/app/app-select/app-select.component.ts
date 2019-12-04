import {Component, Input, NgZone, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {
  @Input() items: any;

  constructor(private vcr: ViewContainerRef, private zone: NgZone) {
  }

  ngOnInit() {
  }
}
