export interface Genre {
  id: number;
  name: string;
  bands: number[];
}

export interface NavigationItem {
  title: string;
  isOpen?: boolean;
  subnav?: NavigationItem[];
}
