import { Injectable } from '@angular/core';
import { StartUp } from '../startUp/StartUp';
import { Consultant } from '../consultant/Consultant';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
     
    const startups = [
      {id: 1, nom: "Star'TUP", secteur: "IT", representantLegal: "Kevin", nbrFondateurs: 1, description: "La nouvelle start-up du web", mail: "Test", consultant: 1},
      {id: 2, nom: "Putrats", secteur: "Vente", representantLegal: "Machin", nbrFondateurs: 2, description: "Pour vendre des choses dans la rue", mail: null, consultant: 1},
      {id: 3, nom: "SU", secteur: "DO", representantLegal: "Ku", nbrFondateurs: 3, description: "Un peu de math", mail: "Pas envie", consultant: 1},
      {id: 4, nom: "Idea?", secteur: "Science", representantLegal: "Truc", nbrFondateurs: 4, description: "La flemme de trouver une description", mail: null, consultant: 1}
    ];

    const consultants = [
      {id: 1, nom: "Bonneau", prenom: "Jean", description: "Petite description"},
      {id: 2, nom: "Pete", prenom: "Gally", description: "Une description un peu plus longue pour ce consultant"},
      {id: 3, nom: "Leletti", prenom: "Rocky", description: "Eodem tempore etiam Hymetii praeclarae indolis viri negotium est actitatum, cuius hunc novimus esse textum."},
      {id: 4, nom: "AykannFlaï", prenom: "Abdel-Yves", description: "Nemo quaeso miretur, si post exsudatos labores itinerum longos."}
    ]

    return {startups, consultants};
  }

  // genId<T extends StartUp | Consultant>(table: T[]): number{
  //   return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  // }
}
