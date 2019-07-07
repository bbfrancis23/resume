export interface MenuItem {
  title: string
  tooltip?: string
  icon?: string
  link?: string
  dialog?: boolean
}


export interface Menu {
  home: MenuItem,
  pageLinks?: MenuItem[]
  managers?: MenuItem[]
}
