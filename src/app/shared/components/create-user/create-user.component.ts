import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{
  createFrom!:FormGroup;
  constructor(private _fb:FormBuilder){}
  ngOnInit(): void {
    this.CreateData()
  }

  CreateData(){
    this.createFrom =this._fb.group({
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      gender:['',[Validators.required]],
      dateBirth:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      phoneNumber:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password:['',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
      conformPassword:['',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]]
    })
  }
  onSubmit(){
    let obj = {
      ...this.createFrom.value
    }
    console.log(obj);
    
  }
}
