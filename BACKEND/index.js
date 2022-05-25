const express = require("express");
const app = express();
// const Connection = require("mysql/lib/Connection");
const db = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/mylist", (req, res) => {
  let qr = "select * from mylist";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.get("/mylist/:id", (req, res) => {
  let NInv = req.params.id;
  let qr = `select * from mylist where NInv= ${NInv} `;
  db.query(qr, (err, result) => {
    console.log(result);
    res.send(result);
  });
});
app.get(`/mylistbyservice/:"ser"`, (req, res) => {
  let ser = req.params.ser;
  let qr = `select * from mylist where service = '${ser}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (result) {
        resolve(result);
        res.send(result);
      }
      reject(err);
    });
    
  });
});
app.get("/mylist/:id", (req, res) => {
  let NInv = req.params.id;
  let qr = `select * from mylist where NInv= ${NInv} `;
  db.query(qr, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

const getServices = () => {
  let qr = `select nomservice from service`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (result) {
        resolve(result);
      }
      reject(err);
    });
  });
};
app.get("/service", async (req, res) => {
  const allServices = await getServices();
  console.log(allServices);
  res.send(await getServices());

});

app.post("/mylist", (req, res) => {
  console.log(req.body);
  let Famille = req.body.Famille;
  let Nom = req.body.Nom;
  let Marque = req.body.Marque;
  let Modele = req.body.Modele;
  let Nserie = req.body.Nserie;
  let Fournisseur = req.body.Fournisseur;
  let Mser = req.body.Mser;
  let Origine = req.body.Origine;
  let service = req.body.service;
  let qr = `INSERT INTO mylist ( Famille, Nom, Marque, Modele, Nserie, Fournisseur, Mser,  Origine,service ) 
    VALUES ('${Famille}','${Nom}','${Marque}','${Modele}','${Nserie}',
    '${Fournisseur}','${Mser}','${Origine}','${service}')`;
  db.query(qr, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.put("/mylist/:NInv", (req, res) => {
  let NInv = req.params.NInv;
  // console.log(req.body);
  let Famille = req.body.Famille;
  let Nom = req.body.Nom;
  let Marque = req.body.Marque;
  let Modele = req.body.Modele;
  let Nserie = req.body.Nserie;
  let Fournisseur = req.body.Fournisseur;
  let Mser = req.body.Mser;
 
  let Origine = req.body.Origine;
  let service = req.body.service;
  let qr = `UPDATE mylist SET  Famille='${Famille}',
                              Nom='${Nom}',
                              Marque='${Marque}',
                              Modele='${Modele}',
                              Nserie=${Nserie},
                              Fournisseur='${Fournisseur}',
                              Mser='${Mser}',
                             
                              Origine='${Origine}',
                              service='${service}'
                               WHERE NInv= ${NInv}`;
  db.query(qr, (err, result) => {
    if (result) {
      console.log(result);
    }
    console.log(err);

    res.send(result);
  } );
 
});
app.delete("/mylist/:id", (req, res) => {
  let NInv = req.params.id;
  let qr = `DELETE FROM mylist where NInv= ${NInv} `;
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.get("/intervention/:id", (req, res) => {
  let Numdemande = req.params.id;
  let qr = `select * from intervention where Numdemande= ${Numdemande} `;
  db.query(qr, (err, result) => {
    console.log(result);
    res.send(result);
  });
});
app.get("/intervention", (req, res) => {
  let qr = "select * from intervention";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});

app.post("/intervention", (req, res) => {
  // console.log(req.body);
  // let Numdemande = req.body.Numdemande;
  let Numintervention = req.body.Numintervention;
  let Dureeintervention = req.body.Dureeintervention;
  let Techniciensintervenants = req.body.Techniciensintervenants;
  let Equipement = req.body.Equipement;
  let Marque = req.body.Marque;
  let Modele = req.body.Modele;
  let Numserie = req.body.Numserie;
  let serviceaffecter = req.body.serviceaffecter;
  let DefautConstater = req.body.DefautConstater;
  let Compterendu = req.body.Compterendu;
  let Observations = req.body.Observations;
  let Designation = req.body.Designation;
  let Quantite = req.body.Quantite;
  let Dateremiseenservice = req.body.Dateremiseenservice;

  let qr = `INSERT INTO intervention( Numintervention, Dureeintervention, Techniciensintervenants, 
    Equipement, Marque, Modele, Numserie, serviceaffecter ,DefautConstater, Compterendu, 
    Observations, Designation,Quantite ,Dateremiseenservice) 
    VALUES (${Numintervention},
      ${Dureeintervention},
      '${Techniciensintervenants}',
    '${Equipement}',
    '${Marque}',
    '${Modele}',
    ${Numserie},
    '${serviceaffecter}',
    '${DefautConstater}',
    '${Compterendu}',
    '${Observations}',
    '${Designation}',
    ${Quantite},
    '${Dateremiseenservice}')`;
  db.query(qr, (err, result) => {
    if (result) return res.send(result);
    return res.send(err);
    // res.send(result);
  });
});
app.get("/devis", (req, res) => {
  let qr = "select * from devis";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.post("/devis", (req, res) => {
  let texte = req.body.texte;
  let date = req.body.date;
  let qr = `INSERT INTO devis( texte,date) 
    VALUES (
    '${texte}',
    '${date}')`;
  db.query(qr, (err, result) => {
    // if (result)
    return res.send(result);
    // return res.send(err);
  });
});

app.get("/devis/:id", (req, res) => {
  let id = req.params.id;
  let qr = `select * from devis where id= ${id} `;
  db.query(qr, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.get("/reparation", (req, res) => {
  let qr = "select * from reparation";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.post("/reparation", (req, res) => {
  let dispositif = req.body.dispositif;
  let marque = req.body.marque;
  let modele = req.body.modele;
  let numserie = req.body.numserie;
  let seraffecte = req.body.seraffecte;

  let date = req.body.date;
  let anomalie = req.body.anomalie;

  let qr = `INSERT INTO reparation( dispositif, marque, 
    modele, numserie, seraffecte, anomalie, date ) 
    VALUES (
      '${dispositif}',
      '${marque}',
    '${modele}',
    ${numserie},
    '${seraffecte}',
    '${anomalie}',
    '${date}')`;
  db.query(qr, (err, result) => {
    if (result) return res.send(result);
    return res.send(err);
    // res.send(result);
  });
});
app.get("/travaux", (req, res) => {
  let qr = "select * from travaux";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.post("/travaux", (req, res) => {
  let dispositif = req.body.dispositif;
  let marque = req.body.marque;
  let modele = req.body.modele;
  let numserie = req.body.numserie;
  let seraffecte = req.body.seraffecte;

  let date = req.body.date;
  let anomalie = req.body.anomalie;

  let qr = `INSERT INTO travaux( dispositif, marque, 
    modele, numserie, seraffecte, anomalie, date ) 
    VALUES (
      '${dispositif}',
      '${marque}',
    '${modele}',
    ${numserie},
    '${seraffecte}',
    '${anomalie}',
    '${date}')`;
  db.query(qr, (err, result) => {
    if (result) return res.send(result);
    return res.send(err);
    // res.send(result);
  });
});
port = 3000;
app.listen(port);
