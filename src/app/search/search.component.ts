import { Component, OnInit } from '@angular/core';
import {VehicleServiceService} from "../vehicle-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  modelName:any;
  vehicle:any;
  constructor(private service:VehicleServiceService) { }

  ngOnInit(): void {

     
  }
  public findByModelName(){
    let response=this.service.getVehicleByModelName(this.modelName);
    response.subscribe(data=>this.vehicle=data);

  }
  public deleteVehicle(modelName:String){
    let response=this.service.deleteVehicleByModelName(modelName);
    response.subscribe(data=>this.vehicle=data);
  }

}
