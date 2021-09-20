import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  formulario: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formulario = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password ' : new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  
  }  

}
