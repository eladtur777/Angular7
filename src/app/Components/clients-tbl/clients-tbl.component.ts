import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-clients-tbl',
  templateUrl: './clients-tbl.component.html',
  styleUrls: ['./clients-tbl.component.css']
})
export class ClientsTblComponent implements OnInit {

  subscribe:Subscription;
clientData = [];
subscrition:Subscription;
selectedComponentAlias:boolean = false;

  constructor(private dataService:MyServiceService) { 


  }

  ngOnInit() {
    this.getData();

    this.subscrition = this.dataService.getSelectedComponentAlias()
    .subscribe((selectedComponentAlias: boolean) => {
        this.selectedComponentAlias = selectedComponentAlias;
        if(this.selectedComponentAlias == true)
        {
          this.getData()
        }
      
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
    return this.dataService.GetClients()
  }


  myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }




}



