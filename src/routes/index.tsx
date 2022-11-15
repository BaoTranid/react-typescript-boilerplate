export interface OptionalRoute {
  path: string;
  pageName: string;
  status?: number;
  privateRouter: boolean;
  hideLayout?: boolean;
}

export const routes: OptionalRoute[] = [
  {
    path: '/',
    pageName: 'HomePage',
    privateRouter: false,
  },
  {
    path: '/dang-nhap',
    pageName: 'Login',
    privateRouter: false,
  },
  {
    path: '*',
    pageName: 'NotFoundPage',
    privateRouter: false,
    hideLayout: true,
  },
];
