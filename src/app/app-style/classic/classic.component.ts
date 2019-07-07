import { Component, OnInit } from '@angular/core';

import { AppStyle } from '../app-style'
import { AppConfigDialogComponent } from '../../app-config/app-config-dialog/app-config-dialog.component'
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';


@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent extends AppStyle implements OnInit {

  constructor(public dialog: MatDialog) {
    super()
  }

  ngOnInit() {
  }

  openAppSettings() {
    let position: DialogPosition = { top: '20px', right: '25px' }
    let dialogRef = this.dialog.open(AppConfigDialogComponent, { 'position': position, hasBackdrop: false })
  }
}
