import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn! :FormGroup;     

  constructor() { }

  ngOnInit(): void {
    this.logIn=new FormGroup({
      'fName':new FormControl("",[Validators.required,Validators.minLength(5)]),
      'lName' : new FormControl(null),
      'email' : new FormControl(null)
  });
}
onSubmit(){
  console.log(this.logIn.value);
}
}
