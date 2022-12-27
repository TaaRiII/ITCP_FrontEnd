import {
  Injectable,
} from '@angular/core';

export class ChartOneService {
  country: string;

  medals: number;
}

const medals: ChartOneService[] = [{
  country: 'USA',
  medals: 112,
}, {
  country: 'China',
  medals: 100,
}, {
  country: 'Russia',
  medals: 60,
}, {
  country: 'Britain',
  medals: 49,
}, {
  country: 'Australia',
  medals: 46,
}, {
  country: 'France',
  medals: 43,
}, {
  country: 'Germany',
  medals: 41,
}, {
  country: 'South Korea',
  medals: 32,
}, {
  country: 'Cuba',
  medals: 29,
}, {
  country: 'Italy',
  medals: 27,
}, {
  country: 'Japan',
  medals: 25,
}, {
  country: 'Ukraine',
  medals: 22,
}, {
  country: 'Canada',
  medals: 20,
}, {
  country: 'Spain',
  medals: 19,
}];


export class Area {
  country: string;

  area: number;
}

const areas: Area[] = [{
  country: 'Russia',
  area: 12,
}, {
  country: 'Canada',
  area: 7,
}, {
  country: 'USA',
  area: 7,
}, {
  country: 'China',
  area: 7,
}, {
  country: 'Brazil',
  area: 6,
}, {
  country: 'Australia',
  area: 5,
}, {
  country: 'India',
  area: 2,
}, {
  country: 'Others',
  area: 55,
}];

export class UserData {
  age: string;

  number: number;
}

const userData: UserData[] = [
  { age: '13-17', number: 6869661 },
  { age: '18-24', number: 40277957 },
  { age: '25-34', number: 53481235 },
  { age: '35-44', number: 40890002 },
  { age: '45-54', number: 31916371 },
  { age: '55-64', number: 13725406 },
  { age: '65+', number: 16732183 },
];


export class Data {
  day: string;

  oranges: number;
}

const data: Data[] = [{
  day: 'Monday',
  oranges: 3,
}, {
  day: 'Tuesday',
  oranges: 2,
}, {
  day: 'Wednesday',
  oranges: 3,
}, {
  day: 'Thursday',
  oranges: 4,
}, {
  day: 'Friday',
  oranges: 6,
}, {
  day: 'Saturday',
  oranges: 11,
}, {
  day: 'Sunday',
  oranges: 4,
}];

export class Population {
  year: string;

  africa: number;

  asia: number;

  europe: number;

  latinamerica: number;

  northamerica: number;

  oceania: number;

  total: number;
}
const populatinData: Population[] = [{
  year: '1750',
  africa: 106000000,
  asia: 502000000,
  europe: 163000000,
  latinamerica: 16000000,
  northamerica: 2000000,
  oceania: 2000000,
  total: 791000000,
}, {
  year: '1800',
  africa: 107000000,
  asia: 635000000,
  europe: 203000000,
  latinamerica: 24000000,
  northamerica: 7000000,
  oceania: 2000000,
  total: 978000000,
}, {
  year: '1850',
  africa: 111000000,
  asia: 809000000,
  europe: 276000000,
  latinamerica: 38000000,
  northamerica: 26000000,
  oceania: 2000000,
  total: 1262000000,
}, {
  year: '1900',
  africa: 133000000,
  asia: 947000000,
  europe: 408000000,
  latinamerica: 74000000,
  northamerica: 82000000,
  oceania: 6000000,
  total: 1650000000,
}, {
  year: '1950',
  africa: 229895000,
  asia: 1403388000,
  europe: 547287000,
  latinamerica: 167368000,
  northamerica: 171614000,
  oceania: 12675000,
  total: 2532227000,
}, {
  year: '2000',
  africa: 811101000,
  asia: 3719044000,
  europe: 726777000,
  latinamerica: 521419000,
  northamerica: 313289000,
  oceania: 31130000,
  total: 6122770000,
}, {
  year: '2050',
  africa: 2191599000,
  asia: 5142220000,
  europe: 719257000,
  latinamerica: 750956000,
  northamerica: 446862000,
  oceania: 55223000,
  total: 9306128000,
}];

export class OilProductionItem {
  state: string;

  month: string;

  year: string;

  value: number;
}

const oilProductionData: OilProductionItem[] = [
  // {
  //   state: 'Alaska', month: 'Jan', year: '2016', value: 15985000,
  // },
  // {
  //   state: 'Alaska', month: 'Feb', year: '2016', value: 14713000,
  // },
  // {
  //   state: 'Alaska', month: 'Mar', year: '2016', value: 15842000,
  // },
  // {
  //   state: 'Alaska', month: 'Apr', year: '2016', value: 14665000,
  // },
  // {
  //   state: 'Alaska', month: 'May', year: '2016', value: 15658000,
  // },
  // {
  //   state: 'Alaska', month: 'Jun', year: '2016', value: 14103000,
  // },
  // {
  //   state: 'Alaska', month: 'Jul', year: '2016', value: 13584000,
  // },
  // {
  //   state: 'Alaska', month: 'Aug', year: '2016', value: 14265000,
  // },
  // {
  //   state: 'Alaska', month: 'Sep', year: '2016', value: 13598000,
  // },
  // {
  //   state: 'Alaska', month: 'Oct', year: '2016', value: 15383000,
  // },
  // {
  //   state: 'Alaska', month: 'Nov', year: '2016', value: 15433000,
  // },
  // {
  //   state: 'Alaska', month: 'Dec', year: '2016', value: 16148000,
  // },
  {
    state: 'Alaska', month: 'Jan', year: '2017', value: 16055000,
  },
  {
    state: 'Alaska', month: 'Feb', year: '2017', value: 14434000,
  },
  {
    state: 'Alaska', month: 'Mar', year: '2017', value: 16300000,
  },
  {
    state: 'Alaska', month: 'Apr', year: '2017', value: 15759000,
  },
  {
    state: 'Alaska', month: 'May', year: '2017', value: 15734000,
  },
  {
    state: 'Alaska', month: 'Jun', year: '2017', value: 13843000,
  },
  {
    state: 'Alaska', month: 'Jul', year: '2017', value: 13102000,
  },
  {
    state: 'Alaska', month: 'Aug', year: '2017', value: 13971000,
  },
  {
    state: 'Alaska', month: 'Sep', year: '2017', value: 14465000,
  },
  {
    state: 'Alaska', month: 'Oct', year: '2017', value: 15705000,
  },
  {
    state: 'Alaska', month: 'Nov', year: '2017', value: 15297000,
  },
  {
    state: 'Alaska', month: 'Dec', year: '2017', value: 15883000,
  },
  {
    state: 'Alaska', month: 'Jan', year: '2018', value: 15739000,
  },
  {
    state: 'Alaska', month: 'Feb', year: '2018', value: 14367000,
  },
  {
    state: 'Alaska', month: 'Mar', year: '2018', value: 15878000,
  },
  {
    state: 'Alaska', month: 'Apr', year: '2018', value: 14922000,
  },
  {
    state: 'Alaska', month: 'May', year: '2018', value: 15367000,
  },
  {
    state: 'Alaska', month: 'Jun', year: '2018', value: 13521000,
  },
  {
    state: 'Alaska', month: 'Jul', year: '2018', value: 12237000,
  },
  {
    state: 'Alaska', month: 'Aug', year: '2018', value: 13259000,
  },
  {
    state: 'Alaska', month: 'Sep', year: '2018', value: 14143000,
  },
  {
    state: 'Alaska', month: 'Oct', year: '2018', value: 15083000,
  },
  {
    state: 'Alaska', month: 'Nov', year: '2018', value: 14919000,
  },
  {
    state: 'Alaska', month: 'Dec', year: '2018', value: 15366000,
  },

  {
    state: 'Colorado', month: 'Jan', year: '2017', value: 9297000,
  },
  {
    state: 'Colorado', month: 'Feb', year: '2017', value: 8386000,
  },
  {
    state: 'Colorado', month: 'Mar', year: '2017', value: 9568000,
  },
  {
    state: 'Colorado', month: 'Apr', year: '2017', value: 9841000,
  },
  {
    state: 'Colorado', month: 'May', year: '2017', value: 10487000,
  },
  {
    state: 'Colorado', month: 'Jun', year: '2017', value: 10147000,
  },
  {
    state: 'Colorado', month: 'Jul', year: '2017', value: 10980000,
  },
  {
    state: 'Colorado', month: 'Aug', year: '2017', value: 12039000,
  },
  {
    state: 'Colorado', month: 'Sep', year: '2017', value: 12187000,
  },
  {
    state: 'Colorado', month: 'Oct', year: '2017', value: 12951000,
  },
  {
    state: 'Colorado', month: 'Nov', year: '2017', value: 13095000,
  },
  {
    state: 'Colorado', month: 'Dec', year: '2017', value: 13918000,
  },
  {
    state: 'Colorado', month: 'Jan', year: '2018', value: 13962000,
  },
  {
    state: 'Colorado', month: 'Feb', year: '2018', value: 12467000,
  },
  {
    state: 'Colorado', month: 'Mar', year: '2018', value: 13966000,
  },
  {
    state: 'Colorado', month: 'Apr', year: '2018', value: 13924000,
  },
  {
    state: 'Colorado', month: 'May', year: '2018', value: 14215000,
  },
  {
    state: 'Colorado', month: 'Jun', year: '2018', value: 13119000,
  },
  {
    state: 'Colorado', month: 'Jul', year: '2018', value: 13986000,
  },
  {
    state: 'Colorado', month: 'Aug', year: '2018', value: 16075000,
  },
  {
    state: 'Colorado', month: 'Sep', year: '2018', value: 15951000,
  },
  {
    state: 'Colorado', month: 'Oct', year: '2018', value: 16890000,
  },
  {
    state: 'Colorado', month: 'Nov', year: '2018', value: 16487000,
  },
  {
    state: 'Colorado', month: 'Dec', year: '2018', value: 16775000,
  },
 
  {
    state: 'North Dakota', month: 'Jan', year: '2017', value: 30264000,
  },
  {
    state: 'North Dakota', month: 'Feb', year: '2017', value: 28714000,
  },
  {
    state: 'North Dakota', month: 'Mar', year: '2017', value: 31509000,
  },
  {
    state: 'North Dakota', month: 'Apr', year: '2017', value: 31208000,
  },
  {
    state: 'North Dakota', month: 'May', year: '2017', value: 31840000,
  },
  {
    state: 'North Dakota', month: 'Jun', year: '2017', value: 30693000,
  },
  {
    state: 'North Dakota', month: 'Jul', year: '2017', value: 32255000,
  },
  {
    state: 'North Dakota', month: 'Aug', year: '2017', value: 33437000,
  },
  {
    state: 'North Dakota', month: 'Sep', year: '2017', value: 32883000,
  },
  {
    state: 'North Dakota', month: 'Oct', year: '2017', value: 36309000,
  },
  {
    state: 'North Dakota', month: 'Nov', year: '2017', value: 35482000,
  },
  {
    state: 'North Dakota', month: 'Dec', year: '2017', value: 36085000,
  },
  {
    state: 'North Dakota', month: 'Jan', year: '2018', value: 36057000,
  },
  {
    state: 'North Dakota', month: 'Feb', year: '2018', value: 32501000,
  },
  {
    state: 'North Dakota', month: 'Mar', year: '2018', value: 35538000,
  },
  {
    state: 'North Dakota', month: 'Apr', year: '2018', value: 36290000,
  },
  {
    state: 'North Dakota', month: 'May', year: '2018', value: 38137000,
  },
  {
    state: 'North Dakota', month: 'Jun', year: '2018', value: 36479000,
  },
  {
    state: 'North Dakota', month: 'Jul', year: '2018', value: 39005000,
  },
  {
    state: 'North Dakota', month: 'Aug', year: '2018', value: 39648000,
  },
  {
    state: 'North Dakota', month: 'Sep', year: '2018', value: 40274000,
  },
  {
    state: 'North Dakota', month: 'Oct', year: '2018', value: 42674000,
  },
  {
    state: 'North Dakota', month: 'Nov', year: '2018', value: 41442000,
  },
  {
    state: 'North Dakota', month: 'Dec', year: '2018', value: 43485000,
  },
 
  {
    state: 'New Mexico', month: 'Jan', year: '2017', value: 12979000,
  },
  {
    state: 'New Mexico', month: 'Feb', year: '2017', value: 12391000,
  },
  {
    state: 'New Mexico', month: 'Mar', year: '2017', value: 13700000,
  },
  {
    state: 'New Mexico', month: 'Apr', year: '2017', value: 13423000,
  },
  {
    state: 'New Mexico', month: 'May', year: '2017', value: 14369000,
  },
  {
    state: 'New Mexico', month: 'Jun', year: '2017', value: 13318000,
  },
  {
    state: 'New Mexico', month: 'Jul', year: '2017', value: 13859000,
  },
  {
    state: 'New Mexico', month: 'Aug', year: '2017', value: 14257000,
  },
  {
    state: 'New Mexico', month: 'Sep', year: '2017', value: 15043000,
  },
  {
    state: 'New Mexico', month: 'Oct', year: '2017', value: 16202000,
  },
  {
    state: 'New Mexico', month: 'Nov', year: '2017', value: 15853000,
  },
  {
    state: 'New Mexico', month: 'Dec', year: '2017', value: 17204000,
  },
  {
    state: 'New Mexico', month: 'Jan', year: '2018', value: 16691000,
  },
  {
    state: 'New Mexico', month: 'Feb', year: '2018', value: 16345000,
  },
  {
    state: 'New Mexico', month: 'Mar', year: '2018', value: 19171000,
  },
  {
    state: 'New Mexico', month: 'Apr', year: '2018', value: 19320000,
  },
  {
    state: 'New Mexico', month: 'May', year: '2018', value: 20002000,
  },
  {
    state: 'New Mexico', month: 'Jun', year: '2018', value: 19471000,
  },
  {
    state: 'New Mexico', month: 'Jul', year: '2018', value: 20354000,
  },
  {
    state: 'New Mexico', month: 'Aug', year: '2018', value: 22052000,
  },
  {
    state: 'New Mexico', month: 'Sep', year: '2018', value: 22029000,
  },
  {
    state: 'New Mexico', month: 'Oct', year: '2018', value: 24024000,
  },
  {
    state: 'New Mexico', month: 'Nov', year: '2018', value: 23796000,
  },
  {
    state: 'New Mexico', month: 'Dec', year: '2018', value: 25704000,
  },
  
  {
    state: 'Oklahoma', month: 'Jan', year: '2017', value: 12555000,
  },
  {
    state: 'Oklahoma', month: 'Feb', year: '2017', value: 11806000,
  },
  {
    state: 'Oklahoma', month: 'Mar', year: '2017', value: 13570000,
  },
  {
    state: 'Oklahoma', month: 'Apr', year: '2017', value: 12822000,
  },
  {
    state: 'Oklahoma', month: 'May', year: '2017', value: 13296000,
  },
  {
    state: 'Oklahoma', month: 'Jun', year: '2017', value: 13485000,
  },
  {
    state: 'Oklahoma', month: 'Jul', year: '2017', value: 13696000,
  },
  {
    state: 'Oklahoma', month: 'Aug', year: '2017', value: 14104000,
  },
  {
    state: 'Oklahoma', month: 'Sep', year: '2017', value: 13749000,
  },
  {
    state: 'Oklahoma', month: 'Oct', year: '2017', value: 14736000,
  },
  {
    state: 'Oklahoma', month: 'Nov', year: '2017', value: 14872000,
  },
  {
    state: 'Oklahoma', month: 'Dec', year: '2017', value: 15215000,
  },
  {
    state: 'Oklahoma', month: 'Jan', year: '2018', value: 16434000,
  },
  {
    state: 'Oklahoma', month: 'Feb', year: '2018', value: 14768000,
  },
  {
    state: 'Oklahoma', month: 'Mar', year: '2018', value: 16820000,
  },
  {
    state: 'Oklahoma', month: 'Apr', year: '2018', value: 15941000,
  },
  {
    state: 'Oklahoma', month: 'May', year: '2018', value: 16330000,
  },
  {
    state: 'Oklahoma', month: 'Jun', year: '2018', value: 15682000,
  },
  {
    state: 'Oklahoma', month: 'Jul', year: '2018', value: 16700000,
  },
  {
    state: 'Oklahoma', month: 'Aug', year: '2018', value: 17431000,
  },
  {
    state: 'Oklahoma', month: 'Sep', year: '2018', value: 17200000,
  },
  {
    state: 'Oklahoma', month: 'Oct', year: '2018', value: 17861000,
  },
  {
    state: 'Oklahoma', month: 'Nov', year: '2018', value: 17406000,
  },
  {
    state: 'Oklahoma', month: 'Dec', year: '2018', value: 18113000,
  },
  
  {
    state: 'Texas', month: 'Jan', year: '2017', value: 98907000,
  },
  {
    state: 'Texas', month: 'Feb', year: '2017', value: 92400000,
  },
  {
    state: 'Texas', month: 'Mar', year: '2017', value: 102564000,
  },
  {
    state: 'Texas', month: 'Apr', year: '2017', value: 99595000,
  },
  {
    state: 'Texas', month: 'May', year: '2017', value: 105298000,
  },
  {
    state: 'Texas', month: 'Jun', year: '2017', value: 102763000,
  },
  {
    state: 'Texas', month: 'Jul', year: '2017', value: 106940000,
  },
  {
    state: 'Texas', month: 'Aug', year: '2017', value: 103967000,
  },
  {
    state: 'Texas', month: 'Sep', year: '2017', value: 106077000,
  },
  {
    state: 'Texas', month: 'Oct', year: '2017', value: 115887000,
  },
  {
    state: 'Texas', month: 'Nov', year: '2017', value: 115741000,
  },
  {
    state: 'Texas', month: 'Dec', year: '2017', value: 121005000,
  },
  {
    state: 'Texas', month: 'Jan', year: '2018', value: 120488000,
  },
  {
    state: 'Texas', month: 'Feb', year: '2018', value: 112244000,
  },
  {
    state: 'Texas', month: 'Mar', year: '2018', value: 129348000,
  },
  {
    state: 'Texas', month: 'Apr', year: '2018', value: 126677000,
  },
  {
    state: 'Texas', month: 'May', year: '2018', value: 130717000,
  },
  {
    state: 'Texas', month: 'Jun', year: '2018', value: 130759000,
  },
  {
    state: 'Texas', month: 'Jul', year: '2018', value: 135682000,
  },
  {
    state: 'Texas', month: 'Aug', year: '2018', value: 140226000,
  },
  {
    state: 'Texas', month: 'Sep', year: '2018', value: 139019000,
  },
  {
    state: 'Texas', month: 'Oct', year: '2018', value: 146462000,
  },
  {
    state: 'Texas', month: 'Nov', year: '2018', value: 145691000,
  },
  {
    state: 'Texas', month: 'Dec', year: '2018', value: 151761000,
  },
];

export class CountryInfo {
  country: string;

  hydro: number;

  oil: number;

  gas: number;

  coal: number;

  nuclear: number;
}

export class EnergyDescription {
  value: string;

  name: string;
}

const energySources: EnergyDescription[] = [
  { value: 'hydro', name: 'Hydro-electric' },
  { value: 'oil', name: 'Oil' },
  { value: 'gas', name: 'Natural gas' },
  { value: 'coal', name: 'Coal' },
  { value: 'nuclear', name: 'Nuclear' },
];

const countriesInfo: CountryInfo[] = [{
  country: 'USA',
  hydro: 71.2,
  oil: 910.4,
  gas: 483.2,
  coal: 564.3,
  nuclear: 216.1,
}, {
  country: 'China',
  hydro: 72.5,
  oil: 223.6,
  gas: 36,
  coal: 956.9,
  nuclear: 11.3,
}, {
  country: 'Russia',
  hydro: 47.7,
  oil: 149.4,
  gas: 432.3,
  coal: 105,
  nuclear: 29.3,
}, {
  country: 'Japan',
  hydro: 17.9,
  oil: 283.6,
  gas: 61.8,
  coal: 120.8,
  nuclear: 52.8,
}, {
  country: 'India',
  hydro: 14.4,
  oil: 86.4,
  gas: 25.1,
  coal: 204.8,
  nuclear: 3.8,
}, {
  country: 'Germany',
  hydro: 6.6,
  oil: 101.7,
  gas: 92.7,
  coal: 85.7,
  nuclear: 30.8,
}];

export class PopulationByRegion {
  region: string;

  val: number;
}

const populationByRegions: PopulationByRegion[] = [{
  region: 'Asia',
  val: 4119626293,
}, {
  region: 'Africa',
  val: 1012956064,
}, {
  region: 'Northern America',
  val: 344124520,
}, {
  region: 'Latin America',
  val: 590946440,
}, {
  region: 'Europe',
  val: 727082222,
}, {
  region: 'Oceania',
  val: 35104756,
}];

@Injectable()
export class Service {
  getMedalsData(): ChartOneService[] {
    return medals;
  }
  getAreas(): Area[] {
    return areas;
  }
  getUserData(): UserData[] {
    return userData;
  }
  getData(): Data[] {
    return data;
  }
  getPopulationData(): Population[] {
    return populatinData;
  }
  getOilProductionData(): OilProductionItem[] {
    return oilProductionData;
  }
  getEnergySources(): EnergyDescription[] {
    return energySources;
  }

  getCountriesInfo(): CountryInfo[] {
    return countriesInfo;
  }
  getPopulationByRegions(): PopulationByRegion[] {
    return populationByRegions;
  }
}
