import { Component, OnInit } from '@angular/core';
import {VehicleServiceService} from "../vehicle-service.service";
import {vehicle} from "../vehicle";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle: vehicle=new vehicle();
  message:any;

  constructor( private service:VehicleServiceService ) { }

  ngOnInit(): void {
  }

  public addvehicleNow(){

    let response= this.service.doAddVehicle(this.vehicle);
    response.subscribe(data=>{
      this.message=data;
    })
  }

}
