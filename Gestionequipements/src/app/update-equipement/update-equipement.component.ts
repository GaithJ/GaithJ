import { Component, OnInit } from '@angular/core';
import { equipement } from '../model/equipement';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipementService } from '../services/equipement.service';
import { service } from '../model/service';

@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent implements OnInit {
  // currentEquipement = new equipement();
  currentEquipement!:equipement[] 
  id!: number
  equipement: any
  service!:service[]
  selectedValue! :service[] ;
  lservice!:service[];


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
              private equipementservice : EquipementService) { }

  ngOnInit(): void {
    this.getservice()
 
    this.currentEquipement=[{NInv : 0,
      Famille: '' ,
      Nom:'' ,
      Marque : '' ,
      Modele : '' ,
      Nserie : 0 ,
      Fournisseur : '' ,
      Mser :new Date ,
      ModAcq : '' ,
      Origine : '' ,
      idCat:0 ,
      service:''
      
    }]
      this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
      
      console.log (this.id)
      this.getEquipementById()
    }
    getEquipementById(){
      return this.equipementservice.getbyid(this.id).subscribe(res=>{
        this.currentEquipement=res
        console.log(this.currentEquipement);
        
      })
    }
    
    updateequipement(){
      console.log('data ts : ',this.currentEquipement[0]);
      return this.equipementservice.updateequipement(this.currentEquipement[0]).subscribe((res)=>{

          this.redirect()
         })
        } 
        redirect(){
          this.router.navigate(['equipements']);
      }
      getservice(){
        this.equipementservice.getallser().subscribe((res)=>{this.service=res}
            
        )}
        
    
    }  
    
    
    
  
        



function selected() {
  throw new Error('Function not implemented.');
}
// function getservice() {
//   throw new Error('Function not implemented.');
// }
      //  return this.equipementservice.updateequipement(this.currentEquipement ).subscribe(res=>{this.currentEquipement=res
      //  console.log(this.currentEquipement);
      //  this.equipementservice.updateequipement(this.currentEquipement);
      //  this.router.navigate(["equipements"])

    

  
