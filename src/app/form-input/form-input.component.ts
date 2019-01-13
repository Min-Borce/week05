import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Person } from '../person.model';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  addForm: FormGroup;

  ngOnInit() {
  
    this.addForm = this.formBuilder.group({
      // id: [],
      name: [JSON.parse(localStorage.getItem("name")).name, Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

onSubmit(){
  let usersFromLocalStorage = JSON.parse(localStorage.getItem("list"));
  console.log("usersFromLocalStorage " +usersFromLocalStorage)
if (usersFromLocalStorage == null){
  usersFromLocalStorage = [];
  usersFromLocalStorage.push(this.addForm.value);
}else{
  usersFromLocalStorage.push(this.addForm.value);
}

console.log(usersFromLocalStorage)
  localStorage.setItem("list", JSON.stringify(usersFromLocalStorage));
console.log(this.addForm.value)
window.location.reload();


}

populateTable(user: Person){
}

}
