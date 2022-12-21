import { Injectable } from '@angular/core';

export class UserDashboardTableServiceService {
  ID: number;

  MDA: number;

  ProjectName: string;

  Classification: string;

  Cost: number;

  Durations: string;

  EntryUser: string;

  Status: string;
}


const orders: UserDashboardTableServiceService[] = [
  {
  ID: 1,
  MDA : 35703,
  ProjectName: 'Clean Water Supply ',
  Classification: 'Hardware/5000 Gallon',
  Cost: 5000,
  Durations: '15 Days',
  EntryUser: 'Kings lao',
  Status: 'Approved',
  
}, 
{
  ID: 2,
  MDA : 35708,
  ProjectName: 'Clean Water Supply ',
  Classification: 'Hardware/5000 Gallon',
  Cost: 5000,
  Durations: '20 Days',
  EntryUser: 'Kings lao',
  Status: 'Declined',
  
}, 
{
  ID: 3,
  MDA : 36703,
  ProjectName: 'Clean Water Supply ',
  Classification: 'Hardware/5000 Gallon',
  Cost: 5000,
  Durations: '16 Days',
  EntryUser: 'Kings lao',
  Status: 'Required',
  
}, 
];

@Injectable()
export class Service {
  getOrders(): UserDashboardTableServiceService[] {
    return orders;
  }
}
