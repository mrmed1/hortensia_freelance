import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import moment from "moment";
import {FuncsService} from "../../../Service/Utils/funcs.service";
import {getFirstDayOfMonth} from "../../../Utils/funcs";
import {Observable, Subject} from "rxjs";
import Chart from "chart.js";



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  @Output() sendDataTable = new EventEmitter<any>();
  @Input() tabledata = [];
  subject = new Subject<any>();
  data : Array<any> = [];
  get subject$(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor(private funcsService:FuncsService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.tabledata.currentValue){
      this.funcsService.calculateSigmoidOutputs(this.tabledata);
      // Replace this.form.value by what you want
      this.funcsService.subject$.subscribe(
        data => this.funcsService.getSigmoidDisplayableValues(data[0],data[1])
      );
      this.funcsService.displayedDataSigmoid$.subscribe(
        data => {
          this.disp([],[])
          this.sendDataTable.emit(data);
          this.disp(this.getData(data[1],data[2])["dataset2"],this.getData(data[1],data[2])["dataset1"]);
        }
      )

    }
  }
  ngOnInit(): void {

  }

  getData = (tab1?,tab2?) => {
    console.log(tab1,tab2)
    const firstDayOfCurrentMonth = getFirstDayOfMonth(new Date());

    let labels, dataset1, dataset2;



    labels = Array.from({ length: 10 }).map(
      (_el, idx) => `${'Mois'} ${idx + 1}`
    );

    dataset1 = tab1?.map(
      (el: string) => +el.slice(0, el.length - 1)
    );
    dataset2 = tab2?.map(
      (el: string) => +el.slice(0, el.length - 1)
    );

    console.log(dataset1,dataset2)

    return { dataset1, dataset2, labels };
  }


  public options = {


    "legend": {
      "text": "You awesome chart with average line",
      "display": false,
    },
    "scales": {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        id: 'b',
        type: 'linear',

        position: 'left',
      }, { ticks: {
          beginAtZero: true
        },
        id: 'a',
        type: 'linear',
        "beginAtZero": true,
        position: 'right',

      }],
      "xAxes": [{
        "ticks": {
          "min": "Monday",
          "max": "Sunday",
        }
      }],
    }
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.disp([],[])
  }
  disp(tab1,tab2) {
    console.log(tab1,tab2)
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Line Dataset',
          data: tab2,
          type: 'line',
          borderColor: '#0B69FF',
          fill:'0B69FF',
          // this dataset is drawn on top
          order: 1,
          yAxisID:"a"
        },
          {
          label: 'Bar Dataset',
          data: tab1,
          borderColor: 'white',
          backgroundColor: '#14D193',
          fill:'0B69FF',
          // this dataset is drawn below
          order: 2,
            yAxisID:"b"
        }],
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout", "September", "October", "November", "December"]
      },
      options: this.options



    });
  }
}

