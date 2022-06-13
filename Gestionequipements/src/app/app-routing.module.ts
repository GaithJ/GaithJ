import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementsComponent } from './equipements/equipements.component';
import { AddEquipementComponent } from './add-equipement/add-equipement.component';
import { UpdateEquipementComponent } from './update-equipement/update-equipement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

import { ProfilComponent } from './profil/profil.component';
import { ServicesComponent } from './services/services.component';
import { InterventionComponent } from './intervention/intervention.component';
 
import { ExpertiseComponent } from './expertise/expertise.component';

import { ReparationComponent } from './reparation/reparation.component';
import { ControleComponent } from './controle/controle.component';
import { DepannageComponent } from './reception des travaux/depannage.component';
import { DevisComponent } from './devis/devis.component';
import { EquipementParServiceComponent } from './equipement-par-service/equipement-par-service.component';
import { FichesComponent } from './fiches/fiches.component';
import { MesaagesComponent } from './mesaages/mesaages.component';


const routes: Routes = [
  {path: "equipements", component : EquipementsComponent},
  {path: "add-equipement", component : AddEquipementComponent},
  {path: "updateEquipement/:id", component: UpdateEquipementComponent},
  {path: "accueil", component : AccueilComponent},
  {path:"login",component :LoginComponent},
  
  {path:"profil",component:ProfilComponent},
  {path:"services",component:ServicesComponent},
  {path:"intervention",component:InterventionComponent},
   
  {path:"expertise",component:ExpertiseComponent},
 
  {path:"reparation",component:ReparationComponent},
  {path:"controle",component:ControleComponent},
  {path:"depannage",component:DepannageComponent},
  {path:"devis",component:DevisComponent},
  {path:"equip",component:EquipementParServiceComponent},
  {path:"fiches",component:FichesComponent},
  {path:"messages",component:MesaagesComponent}



 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
