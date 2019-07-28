import { Component } from '@angular/core'
import { AppConfigService } from '../app-config.service'
import { UnSubscriber } from '../../unsubscriber/unsubscriber'

@Component({
  selector: 'app-config-dialog',
  templateUrl: 'app-config-dialog.component.html',
  styleUrls: ['app-config-dialog.component.scss']
})
export class AppConfigDialogComponent extends UnSubscriber {
  constructor(protected appConfigService: AppConfigService) { super() }
}
