import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 
  {
    name: 'Module',
    url: '/registerModule',
    icon: 'icon-user',
    children: [
      {
        name: 'RegisterModule',
        url: '/registerModule/registerModule',
        icon: 'icon-user'
      }
    ]
  }
  
 
];
