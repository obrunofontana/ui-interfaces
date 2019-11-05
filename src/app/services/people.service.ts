import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private localStorage: LocalStorageService) { }

  save(people: People) {

    //this.localStorage.set(people.id, people);



        // Pega a lista já cadastrada, se não houver vira um array vazio
          var contacts = JSON.parse(this.localStorage.get('contacts') || '[]');
    
          // Adiciona pessoa ao cadastro
          contacts.push({
            id: new Date().getTime().toString(),
            name: people.name,
            lastName: people.lastName
          });
      
          // Salva a lista alterada
          this.localStorage.set("contacts", JSON.stringify(contacts));


  }


  getContacts(id: string): People {
    return this.localStorage.get(id);
  }

  getAll(): People[] {
    return this.localStorage.keys().map(id => this.getContacts(id));
  }
}
