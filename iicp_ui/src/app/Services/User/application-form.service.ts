import { Injectable } from '@angular/core';

export class Tab {
  id: number;

  text: string;

  icon: string;

  content: string;
}

// export class Longtab {
//   text: string;
// }

const tabs: Tab[] = [
  {
    id: 0,
    text: 'Step 1',
    icon: 'chevrondoubleright',
    content: '1',
  },
  {
    id: 1,
    text: 'Step 2',
    icon: 'chevrondoubleright',
    content: '2',
  },
  {
    id: 2,
    text: 'Step 3',
    icon: 'chevrondoubleright',
    content: '3',
  },
  {
    id: 3,
    text: 'Step 4',
    icon: 'chevrondoubleright',
    content: '4',
  },
  {
    id: 4,
    text: 'Step 5',
    icon: 'chevrondoubleright',
    content: '5',
  },
  {
    id: 5,
    text: 'Step 6',
    icon: 'chevrondoubleright',
    content: '6',
  },
];

// const longtabs: Longtab[] = [
//   { text: 'user' },
//   { text: 'analytics' },
//   { text: 'customers' },
//   { text: 'search' },
//   { text: 'favorites' },
//   { text: 'additional' },
//   { text: 'clients' },
//   { text: 'orders' },
//   { text: 'shipment' },
// ];

@Injectable()
export class Service {
  getTabs(): Tab[] {
    return tabs;
  }

//   getLongtabs(): Longtab[] {
//     return longtabs;
//   }
}
