import { NbMenuItem } from '@nebular/theme';





export const MENU_ITEMS_GUEST: NbMenuItem[] = [
  {
    title: 'Usuário - Consulta de Passagem',
    group: true
  },
  {
    title: 'Sobre',
    icon: 'nb-info',
    link: '/auth/login'
  },{
    title: 'Administração',
    icon: 'nb-locked',
    link: '/auth/login'
  }
];




export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'Administração',
    group: true
  },
  {
    title: 'Voos',

    icon: 'nb-grid-a-outline',
    children: [
      {
        title: 'Novo',
        link: '/pages/voo/create',
      },{
        title: 'Ver Todos',
        link: '/pages/voo/list',
      },

    ]

  },
  {
    title: 'Passageiros',

    icon: 'nb-person',
    children: [
      {
        title: 'Novo',
        link: '/pages/passageiro/create',
      },
      {
        title: 'Ver Todos',
        link: '/pages/passageiro/list',
      },

    ]

  },
  {
    title: 'Planetas',

    icon: 'nb-compose',
    children: [
      {
        title: 'Novo',
        link: '/pages/planeta/create',
      },
      {
        title: 'Ver Todos',
        link: '/pages/planeta/list',
      },

    ]

  },
  {
    title: 'Aeroportos',

    icon: 'nb-grid-a-outline',
    children: [
      {
        title: 'Novo',
        link: '/pages/Aeroportos/create',
      },{
        title: 'Ver Todos',
        link: '/pages/Aeroportos/list',
      },

    ]

  },
  {
    title: 'Pilotos e Aviões',

    icon: 'nb-gear',
    children: [
      {
        title: 'Novo',
        link: '/pages/pilotoAviao/create',
      },
      {
        title: 'Ver Todos',
        link: '/pages/pilotoAviao/list',
      }

    ]

  },
];


