import { Component, OnInit } from '@angular/core';
import { People } from './people' ;

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.scss']
})
export class MaterialDesignComponent implements OnInit {
   p: People

  constructor() {



  }

  ngOnInit() {
     this.p = new People(); 

     console.log('BUUUUU');
   

  }

  save() {

    // Pega a lista já cadastrada, se não houver vira um array vazio
    var pessoas = JSON.parse(window.localStorage.getItem('pessoas') || '[]');
    // Adiciona pessoa ao cadastro
    pessoas.push({
      name: this.p.name,
      lastName: this.p.lastName
    });

    // Salva a lista alterada
    window.localStorage.setItem("pessoas", JSON.stringify(pessoas));

    console.log('Registro salvo com sucesso!');





  }


  onSubmit() {

  }

}
