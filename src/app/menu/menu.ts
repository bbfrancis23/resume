export interface MenuItem {
  title: string
  tooltip?: string
  icon?: string
  link?: string
}


export interface Menu {
  home: MenuItem,
  pageLinks?: MenuItem[]
  managers?: MenuItem[]
}
