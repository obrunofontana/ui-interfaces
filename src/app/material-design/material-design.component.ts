import { Component, OnInit, Renderer } from '@angular/core';
import { People } from '../models/people';
import { PeopleService } from '../services/people.service';
import { NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.scss']
})
export class MaterialDesignComponent implements OnInit {


  p: People;
  ps: People[];


  userForm: FormGroup;

  //Mensagens custom
  errorMessageResources = {
    name: {
      minlength: 'O primeiro nome deve ter pelo menos 4 caracteres.',
      maxlength: 'O primeiro nome não pode ter mais de 24 caracteres.',
      required: 'O primeiro nome é necessário.',
    },
    lastName: {
      required: 'O sobrenomeé necessário.',
    },
    address: {
      required: 'Endereço é necessário.',
    }
  };

  

  constructor(private peopleService: PeopleService, private formBuilder: FormBuilder, private renderer: Renderer) { }

  ngOnInit() {
    this.p = new People();
    this.p.name = "";
    this.p.lastName = ""
    this.buildForm();

  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.p = form.value;
    this.p.id = new Date().getTime().toString(); //Macetezinho para gerar um "id" automatico

    this.peopleService.save(this.p);

    alert("Registro Salvo com Sucesso!")

    console.log(this.p);
    form.reset(); //Limpa o formulario

  }

  buildForm() {

    this.userForm = this.formBuilder.group({
      // identification
      name: [this.p.name, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]),],
      lastName: [this.p.lastName, Validators.required],

      // contact information
      address: [this.p.address, Validators.required],
      city: [this.p.city],
    });
  }

}
