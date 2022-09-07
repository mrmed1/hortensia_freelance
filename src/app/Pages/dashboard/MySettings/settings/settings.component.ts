import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private renderer: Renderer2,
  ) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }

  ngOnInit(): void {
  }

}
