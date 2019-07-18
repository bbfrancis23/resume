import { Component } from '@angular/core'
import { AppConfigService } from '../app-config.service'
import { Unsubscriber } from '../../unsubscriber/unsubscriber'

@Component({
  selector: 'app-config-dialog',
  templateUrl: 'app-config-dialog.component.html',
  styleUrls: ['app-config-dialog.component.scss']
})
export class AppConfigDialogComponent extends Unsubscriber {



  constructor(protected appConfigService: AppConfigService) {
    super()

  }


}
