import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { AddEquipementComponent } from './add-equipement/add-equipement.component';
import { FormsModule } from '@angular/forms';
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







@NgModule({
  declarations: [
    AppComponent,
    EquipementsComponent,
    AddEquipementComponent,
    UpdateEquipementComponent,
    AccueilComponent,
    LoginComponent,
   
    
 
    ProfilComponent,
    ServicesComponent,
    InterventionComponent,
     
    ExpertiseComponent,
 
    ReparationComponent,
    ControleComponent,
    DepannageComponent,
    DevisComponent,
    EquipementParServiceComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
