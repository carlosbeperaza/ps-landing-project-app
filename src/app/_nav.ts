import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard/home',
    icon: 'icon-home'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'User',
    url: '/register',
    icon: 'icon-user',
    children: [
      {
        name: 'Register',
        url: '/register/register',
        icon: 'icon-user'
      },
      {
        name: 'Userlist',
        url: '/userlist/userlist',
        icon: 'icon-user'
      }
    ]
  },
  {
    name: 'Roles',
    url: '/roles',
    icon: 'icon-wrench'
  },
  {
    name: 'Module',
    url: '/registerModule',
    icon: 'icon-user',
    children: [
      {
        name: 'RegisterModule',
        url: '/registerModule/registerModule',
        icon: 'icon-user'
      },
      {
        name: 'ModuleList',
        url: '/registerModule/list-module',
        icon: 'icon-user'
      }
    ]
  }
];
