import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Subscription } from 'rxjs';
import { State } from 'src/app/models/State';

@Component({
  selector: 'app-card-holders-tbl',
  templateUrl: './card-holders-tbl.component.html',
  styleUrls: ['./card-holders-tbl.component.css']
})
export class CardHoldersTblComponent implements OnInit {

  holdertblStyle1:string = "table"
  holdertblStyle2:string = "table table-striped table-dark"
  cardHoldertblStyle:string;
  subscribe:Subscription;
  clientData = [];
  subscrition:Subscription;
  switchIsOn:boolean = true;
  isSwitcherChecked:boolean = false;
  State:State = {
    IsSorryOn:false,
    SystemCode:1
  };
  constructor(private dataService:MyServiceService) { }

  ngOnInit() {
    this.getData();
    this.getStatus();
  }

  getStatus()
  {
     if(this.dataService._statusList != undefined && this.dataService._statusList.length > 0)
     {
      this.dataService._statusList.forEach(t=>{
        if(t.SystemCode == 1)
        {
          if(t.IsSorryOn)//on
          {
            this.cardHoldertblStyle = this.holdertblStyle1
            this.switchIsOn = true;
          }
          else//off 
          {
            this.cardHoldertblStyle = this.holdertblStyle2
            this.switchIsOn = false;
          }
        }
      })
     }
  }

  HolderSwitcherClick()
  {
    //On
    if(this.cardHoldertblStyle == this.holdertblStyle1){
      this.State.IsSorryOn = false;
      this.State.SystemCode = 1;
      this.setStatus();
    this.cardHoldertblStyle = this.holdertblStyle2;
    }
     //Off
    else{
      this.State.IsSorryOn = true;
      this.State.SystemCode = 1;
      this.setStatus();
      this.cardHoldertblStyle = this.holdertblStyle1;
    }
  }

  getData() {
    this.subscribe = this.getDataP()
    .subscribe(p => { 
      this.clientData =JSON.parse(p);
    //  console.log(p);

    });
  }

  getDataP() {
    return this.dataService.GetCardHoldersClients()
  }
  setStateP() {
    return this.dataService.postSetState(this.State)
  }

  setStatus() {
    this.subscribe = this.setStateP()
    .subscribe(p => {
    //  console.log(p);

    });
  }

}
