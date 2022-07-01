import { Component, OnInit } from '@angular/core';
import {VehicleServiceService} from "../vehicle-service.service";
@Component({
  selector: 'app-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent implements OnInit {

  vehicles:any;
  constructor( private service: VehicleServiceService) { }

  ngOnInit(): void {
    let response=this.service.getAllVehicle();
    response.subscribe(data=>this.vehicles=data)
  }

  public deleteVehicle(modelName:String){
    let response=this.service.deleteVehicleByModelName(modelName);
    response.subscribe(data=>this.vehicles=data);
    
  }
}
