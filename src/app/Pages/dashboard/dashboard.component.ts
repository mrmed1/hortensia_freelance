import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from "../../Service/Form/form.service";
import {FormControl} from "@angular/forms";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {NotificationService} from "../../Service/Notification/notification.service";
import {Router} from "@angular/router";

declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  inputProj: string = 'raf'
  @ViewChild('dataTable', {static: false}) table;
  @ViewChild('table', {static: false}) tablehtml;
  tabletodisplayrafmoids = [];
  dataTable: any;
  tableparent = []
  Table = [['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-']]
  Tablemonth: string[] = ['-', '-', '-', '-', '-', '-', '-', '-'];
  simulationName: string;
  rafmoidtodelete = "";

  constructor(private renderer: Renderer2,
              public formService: FormService,
              private tokenstorage: TokenstorageService,
              private webRequest: WebRequestService,
              private notificationService: NotificationService,
              private router: Router) {
    this.renderer.setStyle(document.body, 'background',
      'none');

  }

  ngAfterViewInit(): void {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable({
    //   paging: false,
    //   ordering: false,
    //   info: false,
    //   searching: false,
    //
    // });
    this.dataTable = $(this.tablehtml.nativeElement);

  }

  receiveMessage($event) {

    this.tableparent = $event;
  }

  ngOnInit(): void {


  }


  receiveDataTable($event: any) {
    this.Table = $event;
    console.log(this.Table)
    this.Tablemonth = [];
    console.log(this.Table[0])
    this.Table[0].forEach(x => this.Tablemonth.push("Mois" + x))
    console.log(this.Tablemonth)

  }


  saveSimulation() {
    //if user in raf section
    if (this.inputProj == "raf") {
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
      this.webRequest.post("sigmoids", body).subscribe(
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
        setTimeout(() => {
          $('#openbtn').prop('disabled', true)

          var table = $('#datatable').DataTable({
            paging: false,
            bFilter: false,
            ordering: true,
            searching: true,
            dom: 't'         // This shows just the table
          });
          $('#searchinput').on('keyup', function () {
            table.search(this.value).draw();
          });

          $('#datatable tbody').on('click', 'tr', function () {
            if ($(this).hasClass('selected')) {
              $(this).removeClass('selected');

            } else {
              table.$('tr.selected').removeClass('selected');
              $(this).addClass('selected');
              $('#openbtn').prop('disabled', false)
            }
          });
          $('#openbtn').click(function () {
            console.log(table.rows('.selected').data());
          });
        }, 1000);

      },
      error => console.error(error)
    )

  }

  saveid(id, title) {

    localStorage.setItem("rafmoid_id", id);
    localStorage.setItem("rafmoid_title", title);
  }

  deleterafmoids() {


    if (this.rafmoidtodelete === localStorage.getItem("rafmoid_title")) {
      this.webRequest.delete("sigmoids/" + localStorage.getItem("rafmoid_id")).subscribe(
        data => {
          this.notificationService.success("la suppression est effectué avec succès")
          this.router.navigateByUrl("dashboard")
        },
        error => console.log(error)
      )
    }
  }

  openSimulation() {
    this.webRequest.get("sigmoids/" + localStorage.getItem("rafmoid_id")).subscribe(
      data => {
        console.log(data)
        this.formService.mu.patchValue(data["tangent"])
        this.formService.sig.patchValue(data["offset"])
        this.formService.nbOfMonthsPassed.patchValue(data["month_count"])
        this.router.navigateByUrl("dashboard")
        this.inputProj = "sigmoid"

      },
      error => console.log(error)
    )
  }


  selectNode(node) {
    let range = document.createRange();
    range.selectNodeContents(node)
    let select = window.getSelection()
    select.removeAllRanges()
    select.addRange(range)
  }


  copyTable() {
    var table = document.getElementById('table');

    if (navigator.clipboard) {
      var text = table.innerText.trim();
      navigator.clipboard.writeText(text).catch(function () {
      });
    }
  }

  consolelog() {
    console.log(this.formService.chartType.value)
  }
}
