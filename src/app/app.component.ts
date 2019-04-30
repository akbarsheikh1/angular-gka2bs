import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
  name = 'Angular';
  name1 ='table';
  currentSearch='akbar';
  result='';

 ngOnInit(){
 }

one()
{
  this.result=this.result+'1';
}
two()
{
  this.result= this.result+'2';
}
three()
{
  this.result= this.result+'3';
}
four()
{
  this.result= this.result+'4';
}
sum()
{
  this.result = this.result+'+';
}
sum1()
{
  this.result= eval(this.result);
}
}