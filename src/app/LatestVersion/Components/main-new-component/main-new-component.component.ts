import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-new-component',
  templateUrl: './main-new-component.component.html',
  styleUrls: ['./main-new-component.component.css']
})
export class MainNewComponentComponent implements OnInit {

  subscribe:Subscription;
  showComponents:boolean = false;


  constructor(private dataService:MyServiceService,
    public dialog: MatDialog,
    private router: Router
    ) { }


  ngOnInit() {
    //window.history.pushState("", "", '/this/LatestVersion/');
    this.getData()
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

}
