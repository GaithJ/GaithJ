import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { equipement } from '../model/equipement';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
  equipements: equipement[] = [];
  
 
  
  
  

  constructor(private equipementservice: EquipementService ,private router:Router) {
    
   }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  this.liste()
  }
  liste(){
    this.equipementservice.getall().subscribe(res =>
      {
        this.equipements=res
      })
  }
  deleteequipement(id:number){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
    this.equipementservice.deleteequipement(id).subscribe((res)=>{
     //this.getall()
     this.liste()
    })
    } 
}
}