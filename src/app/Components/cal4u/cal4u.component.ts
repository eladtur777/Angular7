import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from 'src/app/services/my-service.service';
import { State } from 'src/app/models/State';

@Component({
  selector: 'app-cal4u',
  templateUrl: './cal4u.component.html',
  styleUrls: ['./cal4u.component.css']
})
export class Cal4uComponent implements OnInit {

  cal4uTblStyle1:string = "table"
  cal4uTblStyle2:string = "table table-striped table-dark"
  cal4uTblStyle:string;
  subscribe:Subscription;
  clientData = [];
  subscrition:Subscription;
  switchIsOnCal4u:boolean = true;
  State:State = {
    IsSorryOn:false,
    SystemCode:1
  };
  
  constructor(private dataService:MyServiceService) { }

  ngOnInit() {
        //TODO:get from API
        this.getData()
        this.getStatus();
  }

  getStatus()
  {

     if(this.dataService._statusList != undefined && this.dataService._statusList.length > 0)
     {
      this.dataService._statusList.forEach(t=>{
        if(t.SystemCode == 2)
        {
          if(t.IsSorryOn)//on
          {
            this.cal4uTblStyle = this.cal4uTblStyle1
            this.switchIsOnCal4u = true;
          }
          else//off 
          {
            this.cal4uTblStyle = this.cal4uTblStyle2
            this.switchIsOnCal4u = false;
          }
        }
      })
     }
  }

  Cal4uSwitcherClick()
  {
       //On
       if(this.cal4uTblStyle == this.cal4uTblStyle1){
        this.State.IsSorryOn = false;
        this.State.SystemCode = 2;
        this.setStatus();
      this.cal4uTblStyle = this.cal4uTblStyle2;
      }
       //Off
      else{
        this.State.IsSorryOn = true;
        this.State.SystemCode = 2;
        this.setStatus();
        this.cal4uTblStyle = this.cal4uTblStyle1;
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
    return this.dataService.GetCal4uClients()
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
