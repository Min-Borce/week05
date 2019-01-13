import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    console.log("XXX")
    // [(ngModel)]="model.name" name="name"
    // this.value = 'some value';
    }

}
