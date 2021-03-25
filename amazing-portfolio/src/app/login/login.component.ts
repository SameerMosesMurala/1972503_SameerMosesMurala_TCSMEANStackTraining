import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef=new FormGroup({
    userName:new FormControl(),
    password:new FormControl(),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  msg:string="";
  loginUser(){
    console.log(this.loginRef.value);
    let userName1=this.loginRef.get("userName")?.value;
    let password1=this.loginRef.get("password")?.value;
    let userInfoJSON= localStorage.getItem("userProfileJSONInfo");
    console.log(userInfoJSON);
    let userInfo=JSON.parse(userInfoJSON);
    if(userName1==userInfo.userName && password1===userInfo.password)
    {
    this.msg="SucessFull Login";
    this.router.navigateByUrl('portfolio');
    }
    else{
      this.msg="UnSucessFull Login";
    }
    console.log(userInfo);
  }

}
