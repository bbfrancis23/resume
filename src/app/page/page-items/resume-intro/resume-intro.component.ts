import { Component } from '@angular/core'
import { UnSubscriber } from '../../../unsubscriber/unsubscriber'

export interface PhoneNumber {
  countryCode: number
  areaCode: number
  prefix: number
  lineNumber: number
}

export interface ResumeIntro {
  name: string
  title: string
  subTitle?: string
  email: string
  phone: PhoneNumber
  phoneString?: string
  text: string
}

@Component({
  selector: 'resume-intro',
  templateUrl: 'resume-intro.component.html'
})
export class ResumeIntroComponent extends UnSubscriber {

  // noinspection LongLine
  resumeIntro: ResumeIntro = {
    name: 'Brian Francis',
    title: 'Full Stack Software Engineer',
    subTitle: 'Angular Specialist',
    email: 'bbfrancis23@gmail.com',
    phone: { countryCode: 1, areaCode: 801, prefix: 867, lineNumber: 1885 },
    phoneString: '',
    // tslint:disable-next-line:max-line-length until this gets put into database
    text: 'I have had over 15 year experience in Web Development and Programming. I studied Computer Science at Weber State University. I was responsible for the “Marine Classifieds” program at iboats.com. This program collects, edits, displays marine advertisements (mainly boats for sale) on boats.iboats.com, from boat dealers, brokers and individual users. This included “For Sale By Owner”, “New Boat research”, “Dealer Locator” and various backend administration programs. During my tenure at iboats classifieds ads went from a few thousand to nearly fifty thousand. I have worked various freelance job. I worked at Arizona Department of Environmental Quality at first as a Contractor and then was hired as an Angular Specialist.'
  }

  constructor() {
    super()
    // tslint:disable-next-line:max-line-length
    this.resumeIntro.phoneString = `${this.resumeIntro.phone.countryCode}-${this.resumeIntro.phone.areaCode}-${this.resumeIntro.phone.prefix}-${this.resumeIntro.phone.lineNumber}`
  }
}
