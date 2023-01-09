import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as globals from '../globals/globals';
import { CareerGoal } from '../model/career';



@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private _http:HttpClient){}
  apiKey = globals.apiKey;
  endPoint = 'careerGoals/';

    getAllData(){
        return this._http.get<any>(this.apiKey + this.endPoint, {});
    }
    getData(id:any){
        return this._http.get<any>(this.apiKey  + this.endPoint + id, {observe: 'response'});
    }

    deleteData(id:any){
        return this._http.delete<any>(this.apiKey  + this.endPoint + id, {observe: 'response'});
    }
    updateData(id:any, goal:CareerGoal){
      const headers =  { 'content-type': 'application/json'};
      const body = JSON.stringify(goal);
        return this._http.put<any>(this.apiKey  + this.endPoint + id,body, {'headers':headers, observe: 'response'});
    }
    addData(goal:CareerGoal): Observable<any>{
      const headers =  { 'content-type': 'application/json'};
      const body = JSON.stringify(goal);
        return this._http.post<any>(this.apiKey + this.endPoint ,body,{'headers':headers, observe: 'response'});
    }
}
