// import { Categorie } from "./categorie";

import { service } from "./service";


export class equipement {
NInv : number  ;
Famille: string ;
Nom: string ;
Marque : string ;
Modele: string ;
Nserie: number ;
Fournisseur : string ; 
Mser : Date ;
ModAcq : string ;
Origine: string ;
idCat!:number 
service:string


  
   constructor(NInv: number  ,
    Famille: string ,
    Nom : string ,
    Marque: string ,
    Modele: string ,
    Nserie: number ,
    Fournisseur : string ,
    Mser: Date ,
    ModAcq : string ,
    Origine : string ,
     idCat:number ,
     service:string
    ){
        this.NInv=NInv;
        this.Famille=Famille;
        this.Nom=Nom;
        this.Marque=Marque
        this.Modele=Modele
        this.Nserie=Nserie
        this.Fournisseur=Fournisseur
        this.Mser=Mser
        this.ModAcq=ModAcq
        this.Origine=Origine
        this.service=service 
        

    }
}