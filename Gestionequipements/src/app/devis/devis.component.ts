import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { devis } from '../model/devis';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  Newdevis = new devis(0,'',new Date)

  devis!: devis[];

  constructor(private equipementservice:EquipementService,private router:Router) { }

  ngOnInit(): void {
  }
  
  
  
  adddevis(){   
    return this.equipementservice.adddevis(this.Newdevis).subscribe(
      (res)=>{
        this.devis=res 
        this.router.navigate(['/accueil'])
     }) 

    }

}
