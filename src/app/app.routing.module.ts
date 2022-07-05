import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes:Routes=[



  //Se establece la ruta por defecto, por defecto el componente que se mostrara de forma principal es el componente llamado PorPaisComponent
  {
    path:"",
    component:PorPaisComponent ,
    pathMatch:"full"
  },
  {
    path:"region",
    component:PorRegionComponent
  },
  {
    path:"capital",
    component:PorCapitalComponent
  },
  {
    path:"pais/:id",
    component:VerPaisComponent
  },
  {
    //Si se coloca cualquier otra ruta se redirige a la ruta principal
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
