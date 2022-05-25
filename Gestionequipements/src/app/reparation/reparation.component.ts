import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reparation } from '../model/reparation';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css']
})
export class ReparationComponent implements OnInit {
  Newreparation = new reparation(0,'','','','','',0,new Date)
  reparation!: reparation[];

  constructor(private equipementservice:EquipementService ,private router:Router) { }

  ngOnInit(): void {
  }
  addrep(){   
    return this.equipementservice.addrep(this.Newreparation).subscribe(
      (res)=>{
        this.reparation=res 
        this.router.navigate(['/accueil'])
        
     }) 

    }

}
