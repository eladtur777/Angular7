import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

subscribe:Subscription;
clientData = [];
showResults:boolean = true;

  constructor(private dataService:MyServiceService) { }

  ngOnInit() {
    this.newHero();
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
 
  model = new Client(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Client(42, '', '','');
  }

  submitData(){
    let k = 0;

    this.dataService.postDetailsAccount(this.model).subscribe(t=>{
        //  console.log(t) 
         this.dataService.setSelectedComponentAlias(true);
    });
    
  }

  getData() {

    this.subscribe = this.getDataP()
    .subscribe(p => {
      this.clientData =JSON.parse(p);
    //  console.log(p);

    });
  }

  getDataP() {
    return this.dataService.getDetailsAccount()
  }

  submit_click()
  {
    this.showResults = false;
  }

  
}
