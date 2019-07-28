import {OnDestroy} from '@angular/core'
import {Subscription} from 'rxjs'

export abstract class UnSubscriber implements OnDestroy {

  subs: Subscription[] = []

  ngOnDestroy() {
     this.subs.forEach( sub => { sub.unsubscribe()} )
  }
}
