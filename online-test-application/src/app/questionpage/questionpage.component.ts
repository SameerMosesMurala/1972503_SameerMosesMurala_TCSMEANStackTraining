import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent implements OnInit {

  constructor(public service:QuestionsService,public router:Router) { }
  questionsData:Array<Question>=[];
  msgArray:Array<string>=[];
  correctQuestionCounter:number=0;
  resultMessage:string="";
  ngOnInit(): void {
      this.service.loadQuestionDetails().subscribe(data=>this.questionsData=data);
  }

  callQuestionaRetrieveService(){
    this.service.loadQuestionDetails().subscribe(data=>this.questionsData=data);
    console.log(this.questionsData);
    for(let i=0;i<10;i++)
    {
      let msg:string="";
      let form=document.getElementById((i+1).toString());
      let radios=form.getElementsByTagName("input");
      let checked = <HTMLInputElement>form.querySelector('input[name=option]:checked');          
      
      if(checked.value==this.questionsData[i].correctoption)
      {
       msg=(i+1)+"."+" "+" You have selected the right option.";
       this.correctQuestionCounter=this.correctQuestionCounter+1;
      }
      else{
        msg=(i+1)+"."+" "+"The right option is"+" "+this.questionsData[i].correctoption+".";
      }
      this.msgArray.push(msg);
    }


    if(this.correctQuestionCounter>=7)
    {
      this.resultMessage=this.correctQuestionCounter+"/10"+" "+"You have Passed";
    }
    else
    {
      this.resultMessage=this.correctQuestionCounter+"/10"+" "+"You have Failed";
    }
  }
  
  quitTest(){
    this.router.navigateByUrl('startTest');
  }

}
