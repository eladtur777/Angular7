import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription, interval } from 'rxjs';

const counter = interval(3000)

@Component({
  selector: 'app-splah-modal',
  templateUrl: './splah-modal.component.html',
  styleUrls: ['./splah-modal.component.css']
})
export class SplahModalComponent implements OnInit {

  subscribeSplash:Subscription;

  constructor(
    public dialogRef:MatDialogRef<SplahModalComponent>,

  ) {
       dialogRef.disableClose = true;
   }

  ngOnInit() {
     
    this.subscribeSplash = counter.subscribe(n=>{
      this.dialogRef.close();
    });
  }

}
