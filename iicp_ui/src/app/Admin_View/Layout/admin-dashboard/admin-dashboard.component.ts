import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { PercentPipe } from '@angular/common';
import {
   UserData,
   Area,
    ChartOneService,
    Data,
    Population,
    OilProductionItem,
    CountryInfo,
     EnergyDescription,
     PopulationByRegion,
     Service } from '../../../Services/AdminServices/chart-one.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [Service],
  preserveWhitespaces: true,
})

export class AdminDashboardComponent {
  olympicMedals: ChartOneService[];
  areas: Area[];
  userData: UserData[];
  resolveOverlappingTypes = ['shift', 'hide', 'none'];
  dataSource: Data[];
  populationData: Population[];
  OildataSource: OilProductionItem[];
  types: string[] = ['line', 'stackedline', 'fullstackedline'];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  pipe: any = new PercentPipe('en-US');
  populationByRegions: PopulationByRegion[];

  constructor(service: Service) {
    this.olympicMedals = service.getMedalsData();
    this.areas = service.getAreas();
    this.userData = service.getUserData();
    this.dataSource = service.getData();
    this.populationData = service.getPopulationData();
    this.OildataSource = service.getOilProductionData();
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
    this.populationByRegions = service.getPopulationByRegions();
    
  }

  customizeLabel(arg) {
    return `${arg.argumentText} (${arg.percentText})`;
  }
  

//2nd
  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

//3rd
  customizeTooltip(arg: any) {
    const items = arg.valueText.split('\n');
    const color = arg.point.getColor();
    items.forEach((item, index) => {
      if (item.indexOf(arg.seriesName) === 0) {
        const element = document.createElement('span');

        element.textContent = item;
        element.style.color = color;
        element.className = 'active';

        items[index] = element.outerHTML;
      }
    });
    return { text: items.join('\n') };
  }

//4
customizeTooltip1 = (arg: any) => ({
  text: `${arg.valueText} - ${this.pipe.transform(arg.percent, '1.2-2')}`,
});

  
}
