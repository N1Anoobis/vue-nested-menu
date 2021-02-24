export interface Genre {
  id: number;
  name: string;
  bands: number[];
}

export interface NavigationItem {
  id: number;
  title: string;
  isOpen?: boolean;
  subnav?: NavigationItem[];
}
