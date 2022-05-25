export class travaux{
    id: number 
    dispositif: string 
    marque :string
    modele:string
    numserie:number
    seraffecte:string
    anomalie:string
       date:Date
       constructor( id: number ,
            dispositif: string, 
            marque:string,
            modele:string,
            seraffecte:string,
            anomalie:string,
            numserie:number,
            
           date:Date){
               this.id=id
               this.dispositif=dispositif
               this.marque=marque
               this.modele=modele
               this.numserie=numserie
               this.seraffecte=seraffecte
               this.anomalie=anomalie
               this.date=date
           }
   
    }