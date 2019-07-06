import { Injectable } from '@angular/core';

export interface PageConfig {
  type?: "Classic" | "Manager" | "Form" | "StepForm" | "Documentation"
  menuType?: "Top" | "Right" | "Left" | "Bottom"
  sideBarType?: "Over" | "Push"
}



export class PageConfig implements PageConfig {


  constructor(pageConfig: PageConfig) {
    this.type = pageConfig.type || 'Classic'
    this.menuType = pageConfig.menuType || 'Top'
    this.sideBarType = pageConfig.sideBarType || 'Over'
  }
}

@Injectable({
  providedIn: 'root'
})
export class PageConfigService {

  constructor() { }
}
