import {Component, OnInit, ViewChild} from '@angular/core';
import moment from "moment";
import {FuncsService} from "../../../Service/Utils/funcs.service";
import {getFirstDayOfMonth} from "../../../Utils/funcs";



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

  resultTab1: number[]
  resultTab2: number[]
  constructor(private funcsService:FuncsService) {
  }

  ngOnInit(): void {
    console.log(this.getData()["dataset1"])

  }

  getData = () => {
    const firstDayOfCurrentMonth = getFirstDayOfMonth(new Date());

    let labels, dataset1, dataset2;



    labels = Array.from({ length: 10 }).map(
      (_el, idx) => `${'Mois'} ${idx + 1}`
    );

    dataset1 = ['1.83%', '5.84%', '13.25%', '24.84%', '40.15%', '57.26%', '73.42%', '86.32%', '95.03%', '100.00%']
      .map(
      (el: string) => +el.slice(0, el.length - 1)
    );
    dataset2 = ['1.83%', '4.01%', '7.41%', '11.59%', '15.31%', '17.11%', '16.16%', '12.90%', '8.71%', '4.97%'].map(
      (el: string) => +el.slice(0, el.length - 1)
    );



  return { dataset1, dataset2, labels };
  }



/*const data = {
  labels,
  datasets: [
    {
      type: 'bar' as const,
      label: t('Percentage of progress per month'),
      data: dataset2,
      borderColor: 'white',
      backgroundColor: '#14D193',
      yAxisID: 'y',
      order: 2,
    },
    {
      type: 'line' as const,
      label: "Percentage of cumulative progress",
      data: dataset1,
      borderColor: '#0B69FF',
      backgroundColor: '#0B69FF',
      yAxisID: 'y1',
      order: 1,
    },
  ],
};*/

  public chart = {
    "datasets": [
      { "data":this.getData()["dataset2"],  "label": "Line", "type": "line",borderColor: '#0B69FF',order: 1 },
      { "data":this.getData()["dataset1"] , "label": "Bar 1" ,borderColor: 'white',
        backgroundColor: '#14D193',order: 2},


    ],
    "labels": ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "September", "October", "November", "December"],
    "options": {
      "legend": {
        "text": "You awesome chart with average line",
        "display": false,
      },
      "scales": {
        "yAxes": [{
          "ticks": {
            "beginAtZero": true
          }
        }],
        "xAxes": [{
          "ticks": {
            "min": "Monday",
            "max": "Sunday",
          }
        }],
      }
    }
  };



}

