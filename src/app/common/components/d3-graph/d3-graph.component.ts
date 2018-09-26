import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-graph',
  templateUrl: './d3-graph.component.html',
  styleUrls: ['./d3-graph.component.css']
})
export class D3GraphComponent implements OnInit {

  public donutChartData = [{
    id: 0,
    label: 'water',
    value: 20,
    color: 'red',
  }, {
    id: 1,
    label: 'land',
    value: 20,
    color: 'blue',
  }, {
    id: 2,
    label: 'sand',
    value: 30,
    color: 'green',
  }, {
    id: 3,
    label: 'grass',
    value: 20,
    color: 'yellow',
  }, {
    id: 4,
    label: 'earth',
    value: 10,
    color: 'pink',
  }];

  public colors = ['red', 'green', 'blue']
public  dataColumns = [1]; // Single Bar Chart

  public barChartData = [{
    id: 0, // number
    label: 'label name',  // string
    value1: 100,  // number
    value2: 200,  // number
    value3: 345,  // number
 },{
    id: 1, // number
    label: 'label name2',  // string
    value1: 500,  // number
    value2: 600,  // number
    value3: 700,  // number
 } ]

  constructor() { }

  ngOnInit() {
  }

}
