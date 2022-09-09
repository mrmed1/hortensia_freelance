import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from "../../Service/Form/form.service";
import {FormControl} from "@angular/forms";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";

declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  inputProj: string = 'raf'
  @ViewChild('dataTable', {static: false}) table;
  tabletodisplayrafmoids = [];
  dataTable: any;
  tableparent = []
  Table = [[],['-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-']]
  Tablemonth: string[] = ['Date','-','-','-','-','-','-','-','-'];
  simulationName: string;


  constructor(private renderer: Renderer2,
              public formService: FormService,
              private tokenstorage: TokenstorageService,
              private webRequest:WebRequestService) {
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

    $('#openbtn').prop('disabled', true)
    var table = $('#datatable').DataTable({
      paging: false,
      bFilter: false,
      ordering: true,
      searching: true,
      dom: 't'         // This shows just the table
    });
    $('#searchinput').on( 'keyup', function () {
      table.search( this.value ).draw();
    } );
    $('#datatable tbody').on('click', 'tr', function () {
      $(this).toggleClass('selected');
      $('#openbtn').prop('disabled', false)
    });

    $('#openbtn').click(function () {
      console.log(table.rows('.selected').data());
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
    //if user in raf section
    if (this.inputProj == "raf")
    {
      console.log("raf")
    } else
      //if user in sigmoids section
    {
      const body = {
        "title": this.simulationName,
        "tangent": this.formService.mu.value,
        "offset": this.formService.sig.value,
        "month_count": this.formService.nbOfMonthsPassed.value
      }
      this.webRequest.post("sigmoids",body).subscribe(
        data => console.log(data),
        error => console.error(error)
      )
    }

  }

  getSimulationByUser() {

    //add api get Rafs anf sigmoid
    this.webRequest.get("rafmoids").subscribe(
      data => {

        this.tabletodisplayrafmoids.push(data["sigmoids"])
        this.tabletodisplayrafmoids.push(data["rafs"])
        console.log(this.tabletodisplayrafmoids)

      },
      error => console.error(error)
    )
  }

}
