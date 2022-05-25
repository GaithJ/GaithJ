import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { intervention } from '../model/intervention';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  Newintervention  = new intervention(0,0,0,'','','','',0,'','','','','','',new Date);
  intervention: intervention[]| undefined;
  message: string | undefined;
  

  constructor(private equipementservice: EquipementService,private router:Router ) { }

  ngOnInit(): void {
  // this.addintervention()
  }
  addintervention(){   
    return this.equipementservice.addintervention(this.Newintervention).subscribe(res=>{this.intervention=res 
      this.router.navigate(['/accueil'])
     }) }
    
  }


