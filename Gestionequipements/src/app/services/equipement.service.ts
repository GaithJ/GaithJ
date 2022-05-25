import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devis } from '../model/devis';
//import { Categorie } from '../model/categorie';
import { equipement } from '../model/equipement';
import { intervention } from '../model/intervention';
import { reparation } from '../model/reparation';
import { service } from '../model/service';
import { travaux } from '../model/travaux';

const httpOptions = {
  headers: new HttpHeaders
    ({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class EquipementService {
  supprimerEquipement(element: any) {
    throw new Error('Method not implemented.');
  }
 
  equipements!: equipement[];
  equipement: any;
  
  // categories: Categorie[] = []
  // categorie: any


  nomCat: string | undefined

  url = 'http://localhost:3000/mylist'
  url1 = 'http://localhost:3000/service'
  url2='http://localhost:3000/intervention'
  url3='http://localhost:3000/devis'
  url4='http://localhost:3000/reparation'
  url5='http://localhost:3000/travaux'
  url6='http://localhost:3000/mylistbyservice'


  
  
  


  constructor(private http: HttpClient) { }

  getall(): Observable<equipement[]> {
    return this.http.get<equipement[]>(`${this.url}`)

  }
  getallser(): Observable<service[]> {
    return this.http.get<service[]>(`${this.url1}`)
  }
  addequipement(data: equipement): Observable<equipement[]> {
    // console.log(data);
    
    return this.http.post<equipement[]>(`${this.url}`, data, httpOptions)
  }
  



getbyid(id:number): Observable<equipement[]> {
  return this.http.get<equipement[]>(`${this.url}/${id}`)
}
getbyser(ser:string): Observable<equipement[]> {
  return this.http.get<equipement[]>(`${this.url6}/${ser}`)
}
updateequipement(data:equipement): Observable<equipement> {
  console.log('data : ',data);
  
  return this.http.put<equipement>(`${this.url}/${data.NInv}`,data,httpOptions)
}
deleteequipement(id:number): Observable<equipement>{
  console.log
  return this.http.delete<equipement>(`${this.url}/${id}`)
}
getintervention(): Observable<intervention[]> {
  return this.http.get<intervention[]>(`${this.url2}`)

}

addintervention(data:intervention ): Observable<intervention[]> {
  // console.log(data);
  
  return this.http.post<intervention[]>(`${this.url2}`, data, httpOptions)
}
getdevis(): Observable<devis[]> {
  return this.http.get<devis[]>(`${this.url3}`)

}
adddevis(data:devis ): Observable<devis[]> {
  // console.log(data);
  
  return this.http.post<devis[]>(`${this.url3}`, data, httpOptions)
  


    //   listeEquipement():equipement[]{
    //     return this.equipements;
    //   }
    //   ajouetrequipement (equipement: equipement){
    //     this.equipements.push(equipement);
    //  }
    //supprimerEquipement(element: equipement){
    // const index = this.equipements.indexOf(element,0)
    // if (index > -1) {
    //this.equipements.splice(index,1);
 
}
addrep(data:reparation ): Observable<reparation[]> {
  
  return this.http.post<reparation[]>(`${this.url4}`, data, httpOptions)
  


    
}
addtra(data:travaux ): Observable<travaux[]> {
  
  return this.http.post<travaux[]>(`${this.url5}`, data, httpOptions)
  


    
}
  //  consulterEquipement(NInv:number): equipement{
  //   return this.equipement.find((element: { NInv: number; }) => element.NInv == NInv);
  //   //return this.equipement;
  //   }
    // updateequipement(element:equipement)
    // {
    // // console.log(p);
    // this.supprimerEquipement(element);
    // this.ajouetrequipement(element);
    // }
    // listeCategories():Categorie[] {
    //   return this.categories;
    //   }

  //     consulterCategorie(id:number): Categorie{
  //       this.categorie = this.categories.find(cat => cat.idCat == id);
  //       return this.categorie;
  //       }





}
