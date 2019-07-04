export interface PageConfig {
  type?: "Classic" | "Manager" | "Form" | "StepForm" | "Documentation"
  menuType?: "Top" | "Right" | "Left" | "Bottom"
  sideBarType?: "Over" | "Push"
}



export class PageConfig implements PageConfig {


  constructor(pageConfig: PageConfig) {
    this.type = pageConfig.type || 'Classic'
  }
}
