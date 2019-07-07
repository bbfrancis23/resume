import { Component, OnInit } from '@angular/core';

import { AppType } from '../app-type'

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent extends AppType implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

  openAppSettings() {

  }
}
