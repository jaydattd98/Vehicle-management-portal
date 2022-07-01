import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AllVehicleComponent } from './all-vehicle/all-vehicle.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {path:"all-vehicle", component:AllVehicleComponent},
  {path:"search-vehicle", component:SearchComponent},
  {path:"update-vehicle/update", component:AddVehicleComponent},
  {path:"add-vehicle", component:AddVehicleComponent},
  {path:"", component:AllVehicleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
