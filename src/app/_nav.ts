import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
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
    url: '/register-module/list-module',
    icon: 'icon-wrench'
    
  },
  {
    name: 'SubModule',
    url: '/register-submodule/list-submodule',
    icon: 'icon-wrench',
    
  }
];
