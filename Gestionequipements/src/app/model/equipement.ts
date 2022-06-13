// import { Categorie } from "./categorie";

import { service } from "./service";


export class equipement {
    id:number;
    NumInventaire: string  ;
Famille: string ;
Nom: string ;
Marque : string ;
Modele: string ;
Nserie: string ;
Fournisseur : string ; 
Mser : Date ;
ModAcq : string ;
Origine: string ;
idCat!:number 
service:string


  
   constructor(id:number,
    NumInventaire: string  ,
    Famille: string ,
    Nom : string ,
    Marque: string ,
    Modele: string ,
    Nserie: string ,
    Fournisseur : string ,
    Mser: Date ,
    ModAcq : string ,
    Origine : string ,
     idCat:number ,
     service:string
    ){ this.id=id;
        this.NumInventaire=NumInventaire;
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