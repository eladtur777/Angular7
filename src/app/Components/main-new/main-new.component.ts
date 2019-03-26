import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Subscription, interval } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SplahModalComponent } from '../splah-modal/splah-modal.component';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientsLatestVersion } from 'src/app/models/ClientLatestVersion';

const counter = interval(3000)

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css']
})
export class MainNewComponent implements OnInit {

  subscribe:Subscription;
  clientData = [];
  subscrition:Subscription;
  showComponents:boolean = false;
  subscribeSplash:Subscription;
  model;
  islatestVersion:boolean = false;
  BtnLatestVersion:boolean = false;

  ClientsLatestVersion:ClientsLatestVersion = {
    id: 1,
    TZ :"123456789",
    AccountNumber:"125954",
    IsShowBtnLatest : false,
    IsLatest: false
};



  constructor(private dataService:MyServiceService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {

    this.CheckSystemVersion();
    this.subscribeSplash = counter.subscribe(n=>{
      this.getData()
    });

    this.LoadSplashImage()
  
  }

  LoadSplashImage(){
    const dialogRefSplash = this.dialog.open(SplahModalComponent,{
      height: '600px',
      width: '890px', 
  });
  }

  getData() {

    this.subscribe = this.getDataP()
    .subscribe(p => {
      this.dataService._statusList =JSON.parse(p);
      this.showComponents = true;
    //  console.log(p);
    });
  }

  getDataP() {
    return this.dataService.GetStatus()
  }

  CheckSystemVersion(){
    this.dataService.GetClientsLatestVersion().subscribe(p=>{
      if (p){
        this.ClientsLatestVersion =  JSON.parse(p);
                     if(this.ClientsLatestVersion[0].IsLatest == true){

                      this.islatestVersion = false;
                      this.router.navigate(['/app-main-new-component/']);
                     }

                     else if(this.ClientsLatestVersion[0].IsShowBtnLatest == true){
                      this.islatestVersion = true;
                      this.BtnLatestVersion = true;
                     }
                else if(this.ClientsLatestVersion[0].IsShowBtnLatest == false && this.ClientsLatestVersion[0].IsLatest == false){
                  this.islatestVersion = true;
                  this.BtnLatestVersion = false;
                }

      }
      else{
        this.islatestVersion = true;
        this.BtnLatestVersion = false;
      }
    })
  }

  TofesExample()
  {

  }

  SetLatestVersion(){

    this.ClientsLatestVersion[0].IsLatest = true
    this.ClientsLatestVersion[0].IsShowBtnLatest = false

    this.dataService.SetCLientVersion(this.ClientsLatestVersion[0]).subscribe(p=>{
    
    })
     this.router.navigate(['/app-main-new-component/']);
  }
}
