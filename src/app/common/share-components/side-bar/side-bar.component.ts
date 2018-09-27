import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  showMenu: string;
  route: string;
    toggle: boolean;
    chartToggle: boolean;

  constructor(private location: Location) {
  }

  ngOnInit() {
    if(_.intersection(['/employee-list', '/employee'],[ this.location.path()]).length > 0){
        this.toggle = true;
    }else if(_.intersection(['/high-chart', '/d3-chart'],[ this.location.path()]).length > 0){
        this.chartToggle = true;
    }
  }
}
