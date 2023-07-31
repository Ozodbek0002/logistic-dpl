import { Component } from '@angular/core';

@Component({
  selector: 'app-truck-container',
  templateUrl: './truck-container.component.html',
  styleUrls: ['./truck-container.component.scss']
})
export class TruckContainerComponent {
  user_truck: TruckModel[] = [{ id: 1, image: "20st.svg", type: "20' STANDART" }];

  container_list: TruckModel[] = [
    { id: 1, image: "20st.svg", type: "20' STANDART" },
    { id: 2, image: "20st.svg", type: "40' STANDART" },
    { id: 3, image: "20st.svg", type: "40' HIGH-CUBE" },
    { id: 4, image: "20op.svg", type: "20' OPEN TOP" },
    { id: 5, image: "20op.svg", type: "40' OPEN TOP" },
    { id: 6, image: "20p.svg", type: "20' PLATFORM" },
    { id: 7, image: "20p.svg", type: "40' PLATFORM" },
    { id: 8, image: "20ref.svg", type: "20' REFRIGERATED" },
    { id: 9, image: "20ref.svg", type: "40' REFRIGERATED" },
    { id: 10, image: "20bulk.svg", type: "20' BULK" },
    { id: 11, image: "20tank.svg", type: "20' TANK" },
    { id: 12, image: "20st.svg", type: "CUSTOM CONTAINERS" }
  ];

  truck_list: TruckModel[] = [
    { id: 13, image: "tautliner.svg", type: "TAUTLINER" },
    { id: 14, image: "refrigerated.svg", type: "REFRIGERATED TRUCK" },
    { id: 15, image: "isotherm.svg", type: "ISOTHERM TRUCK" },
    { id: 16, image: "tautliner.svg", type: "MEGA-TRAILER" },
    { id: 17, image: "jumbo.svg", type: "JUMBO" },
    { id: 18, image: "tautliner.svg", type: "CUSTOM TRUCK" }
  ];


  constructor() {
    this.load();
  }


  load() {
    let localTruck = localStorage.getItem('truck');
    if (localTruck != null)
      this.user_truck = JSON.parse(localTruck);


    localStorage.setItem('truck', JSON.stringify(this.user_truck));
  }



  selectedTruck(id: number) {

    let oldData: TruckModel[] = [];

    this.container_list.forEach(item => {
      if (item.id == id)
        oldData.push(item);
    });

    this.truck_list.forEach(item => {
      if (item.id == id)
        oldData.push(item);
    });

    this.user_truck = oldData;

    localStorage.setItem('truck', JSON.stringify(this.user_truck));
  }

}


export interface TruckModel {
  id: number,
  image: string,
  type: string,
}
