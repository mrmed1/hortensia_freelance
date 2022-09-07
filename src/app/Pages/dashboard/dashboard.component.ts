import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from "../../Service/Form/form.service";
import {FormControl} from "@angular/forms";

declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  inputProj: string = 'raf'
  @ViewChild('dataTable', {static: false}) table;
  dataTable: any;
  tableparent = []
  Table = [[],['-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-']]
  Tablemonth: string[] = ['Date','-','-','-','-','-','-','-','-'];
  simulationName: string;

  constructor(private renderer: Renderer2,
              public formService: FormService) {
    this.renderer.setStyle(document.body, 'background',
      'none');

  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      paging: false,
      ordering: false,
      info: false,
      searching: false,

    });

  }

  receiveMessage($event) {
    console.log($event)
    this.tableparent = $event;
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#example').DataTable({
        paging: false,
        ordering: true,
        info: false,
        searching: false,

      });
    });
  }


  receiveDataTable($event: any) {
    this.Table = $event;
    console.log(this.Table)
    this.Tablemonth = ['Date'];
    console.log(this.Table[0])
    this.Table[0].map(x => "Mois " + x)
    console.log(this.Tablemonth)

  }


  saveSimulation() {
    //add api save Sigmoid
  }

  getSimulationByUser() {
    //add api get Rafs anf sigmoid
  }

}
