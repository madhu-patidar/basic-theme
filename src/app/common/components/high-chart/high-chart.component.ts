import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HC_map from 'highcharts/modules/map';
HC_map(Highcharts);

@Component({
  selector: 'app-hight-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {
      series: [{
        data: [1, 2, 3]
      }]
    }; // required
  chartCallback = function (chart) {  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  constructor() { }

  ngOnInit() {
  }

}
