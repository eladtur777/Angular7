import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { BadInput } from '../common/bad.inputs';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/validators/app.errors';
import { Observable, Subject } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  urlGetProducts = "http://localhost:61255/api/Values/GetItems"
  urlPostClient = "http://localhost:61255/api/Values/PostClient"
  urlGetClients = "http://localhost:61255/api/Values/GetClients"
  urlGetCal4uClients = "http://localhost:61255/api/Cal4u/GetClients"
  urlCardHoldersClients = "http://localhost:61255/api/CardHolders/GetClients"
  urlGetStatusClients = "http://localhost:61255/api/Values/GetStatus"
  urlSetStateClients = "http://localhost:61255/api/Values/SetState"
  urlVersionUpdate = "http://localhost:61255/api/VersionUpdate/SetCLientVersion"
  urlVersionGet = "http://localhost:61255/api/VersionUpdate/GetClientsLatestVersion"
  
  
  private isNeedToUpdateClientstbl = new Subject<boolean>();
  
  public _statusList:any[];
 // isNeedToUpdateClientstbl$ : BehaviorSubject<boolean>;

  setSelectedComponentAlias(val: boolean) {
    this.isNeedToUpdateClientstbl.next(val);
}

getSelectedComponentAlias(): Observable<boolean> {
    return this.isNeedToUpdateClientstbl.asObservable();
}
 

  constructor(public http: HttpClient) { }


  getDetailsAccount(): Observable<any> {
    return this.http.get<any>(this.urlGetProducts)
  }

  postDetailsAccount(dataToSend:any): Observable<any> {
    return this.http.post<any>(this.urlPostClient , JSON.stringify(dataToSend), httpOptions)
  }

  GetClients(): Observable<any> {
    return this.http.get<any>(this.urlGetClients)
  }

  
  GetCal4uClients(): Observable<any> {
    return this.http.get<any>(this.urlGetCal4uClients)
  }
  
  GetCardHoldersClients(): Observable<any> {
    return this.http.get<any>(this.urlCardHoldersClients)
  }

  GetStatus(): Observable<any> {
    return this.http.get<any>(this.urlGetStatusClients)
  }

  postSetState(dataToSend:any): Observable<any> {
    return this.http.post<any>(this.urlSetStateClients , JSON.stringify(dataToSend), httpOptions)
  }

  SetCLientVersion(dataToSend:any): Observable<any> {
    return this.http.post<any>(this.urlVersionUpdate , JSON.stringify(dataToSend), httpOptions)
  }

  GetClientsLatestVersion(): Observable<any> {
    return this.http.get<any>(this.urlVersionGet)
  }


  

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    else
      return Observable.throw(new AppError(error));

  }
}
