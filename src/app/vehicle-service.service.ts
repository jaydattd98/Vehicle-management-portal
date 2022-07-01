import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {vehicle} from "./vehicle"

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor( private http:HttpClient) { }

  public doAddVehicle(vehicle:vehicle){

    return this.http.post("http://localhost:8080/add-vehicle",vehicle,{responseType :"text" as"json"})
  }

  public getAllVehicle(){

    return this.http.get("http://localhost:8080/all-vehicle")
  }

  public getVehicleByModelName(modelName :String){

    return this.http.get("http://localhost:8080/search-vehicle/"+modelName);

  }

  public deleteVehicleByModelName(modelName :String){

    return this.http.get("http://localhost:8080/delete-vehicle/"+modelName);

  }
}
