import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { MainFormComponent } from './Components/main-form/main-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { CardHoldersTblComponent } from './Components/card-holders-tbl/card-holders-tbl.component';
import { Cal4uComponent } from './Components/cal4u/cal4u.component';
import { MainNewComponent } from './Components/main-new/main-new.component';
import { SwitcherComponent } from './Components/switcher/switcher.component';
import { SplahModalComponent } from './Components/splah-modal/splah-modal.component';
import { ClientsTblComponent } from './Components/clients-tbl/clients-tbl.component';
import { MainNewComponentComponent } from './LatestVersion/Components/main-new-component/main-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainFormComponent,
    CardHoldersTblComponent,
    Cal4uComponent,
    MainNewComponent,
    SwitcherComponent,
    SplahModalComponent,
    ClientsTblComponent,
    MainNewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents:[
    SplahModalComponent
  ],
  providers: [
    HttpClientModule,
    {provide:ErrorHandler,useClass:AppErrorHandler}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
