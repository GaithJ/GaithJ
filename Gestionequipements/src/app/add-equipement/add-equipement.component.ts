import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { equipement } from '../model/equipement';
import {  service } from '../model/service';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.css']
})
export class AddEquipementComponent implements OnInit {
  newEquipement = new equipement(0,'','','','','','','',new Date,'','',0,'');
  message  : string | undefined;
   selectedValue! :service[] ;
 
  equipements: equipement[] | undefined;
  lservice!:service[];
 service!:service[]
 
  constructor(private equipementservice: EquipementService, private router :Router) { }
  

   ngOnInit(): void {
 this.getservice()

  }
  selected(){
    // this.newEquipement.service = this.selectedValue.valueOf()
    // console.log(this.selectedValue.indexOf);
    console.log(this.lservice);
    // return this.newEquipement.service
  }
 
  addequipement(){
    //this.selected()
    
  return this.equipementservice.addequipement(this.newEquipement).subscribe(res=>{this.equipements=res
   
    this.message = "Equipement "+ this.newEquipement.Nom+" ajouté avec succès";
    this.router.navigate(['/equipements'])
    }) 
    
    
    }
    getservice(){
      this.equipementservice.getallser().subscribe((res)=>{this.service=res
          console.log(res)}
      )}
    
  
    }

