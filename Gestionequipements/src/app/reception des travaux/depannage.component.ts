import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { travaux } from '../model/travaux';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-depannage',
  templateUrl: './depannage.component.html',
  styleUrls: ['./depannage.component.css']
})
export class DepannageComponent implements OnInit {
  Newtravaux = new travaux(0,'','','','','',0,new Date)
  travaux!: travaux[];

  constructor(private equipementservice:EquipementService ,private router:Router) { }

  ngOnInit(): void {
    // this.addtra()
  }
  addtra(){   
    return this.equipementservice.addtra(this.Newtravaux).subscribe(
      (res)=>{
        this.travaux=res 
        this.router.navigate(['/accueil'])
        
     }) 

    }

}
