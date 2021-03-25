import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioRef=new FormGroup({
    firstName:new FormControl(),
    phoneNumber:new FormControl(),
  })
  userName:string="";
  constructor() { }

  ngOnInit(): void {
    let userInfoJSON= localStorage.getItem("userProfileJSONInfo");
    console.log(userInfoJSON);
    let userInfo=JSON.parse(userInfoJSON);
    this.userName=userInfo.userName;
  }

  contactList:any=[];
  headers = ["firstName", "phoneNumber"];
  addContact(){
        let firstName1:string=this.portfolioRef.get("firstName")?.value;
        let phoneNumber1=this.portfolioRef.get("phoneNumber")?.value;
        let item1={firstName:firstName1, phoneNumber:phoneNumber1};
        this.contactList.push(item1);
        console.log(this.contactList);
}
}
