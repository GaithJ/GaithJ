import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { intervention } from '../model/intervention';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  fiches: intervention[] = [];
  // interventions: intervention[] = [];

  constructor(private equipementservice: EquipementService ) { }

  ngOnInit(): void {
    this.listefiches()
    
  }
  listefiches(){
    this.equipementservice.getallfiche().subscribe(res =>
      {
        this.fiches=res
      })
  }

}
