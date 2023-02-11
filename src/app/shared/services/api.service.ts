import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getInfo(url:string) {
    return this.http.get(url);
  }

  postFormulary(info: any){
    return this.http.post('http://localhost:3000/documentation', info);
   }
   
};
