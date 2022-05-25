import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Categorie } from '../model/categorie';
import { equipement } from '../model/equipement';
import {  service } from '../model/service';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.css']
})
export class AddEquipementComponent implements OnInit {
  newEquipement = new equipement(0,'','','','',0,'',new Date,'','',0,'');
  message  : string | undefined;
   selectedValue! :service[] ;
  // categories : Categorie[] | undefined;
  newIdCat : any
  // newCategorie : Categorie | undefined
  equipements: equipement[] | undefined;
  lservice!:service[];
 service!:service[]
 
  constructor(private equipementservice: EquipementService, private router :Router) { }
  

   ngOnInit(): void {
 this.getservice()
  //   this.categories=this.equipementservice.listeCategories();
  }
  selected(){
    // this.newEquipement.service = this.selectedValue.valueOf()
    // console.log(this.selectedValue.indexOf);
    console.log(this.lservice);
    // return this.newEquipement.service
  }
 
  addequipement(){
    //this.selected()
    // this.newCategorie = this.equipementservice.consulterCategorie(this.newIdCat);
  return this.equipementservice.addequipement(this.newEquipement).subscribe(res=>{this.equipements=res
    // this.equipementservice.ajouetrequipement(this.newEquipement);
    this.message = "Equipement "+ this.newEquipement.Nom+" ajouté avec succès";
    this.router.navigate(['/equipements'])
    }) 
    
    
    }
    getservice(){
      this.equipementservice.getallser().subscribe((res)=>{this.service=res
          console.log(res)}
      )}
    
  
    }

