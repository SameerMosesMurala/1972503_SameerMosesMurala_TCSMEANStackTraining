import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sigupRef=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    userName:new FormControl(),
    password:new FormControl(),
  })


    

  msg:string="";

  constructor() { }

  ngOnInit(): void {
  }
  
  addUser(){
    console.log(this.sigupRef.value);
    let firstName1:string=this.sigupRef.get("firstName")?.value;
    let lastName1=this.sigupRef.get("lastName")?.value;
    let userName1=this.sigupRef.get("userName")?.value;
    let password1=this.sigupRef.get("password")?.value;
    let userProfile: UserProfile = new UserProfile();
    userProfile={firstName:firstName1,lastName:lastName1,userName:userName1,password:password1};
    console.log(userProfile);
    let userProfileJSON=JSON.stringify(userProfile);
    console.log(userProfileJSON);
    localStorage.setItem("userProfileJSONInfo",userProfileJSON);
  }

}

export class UserProfile {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}