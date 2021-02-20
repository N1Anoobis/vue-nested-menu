export interface Genre {
  id: number;
  name: string;
  bands: number[];
}

export interface NavigationItem {
  title: string;
  open?: boolean;
  subnav?: NavigationItem[];
}
