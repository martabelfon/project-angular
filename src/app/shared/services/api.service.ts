import { IStructure } from './../interfaces/istructure';
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

  postFormulary(formulary: IStructure){
    return this.http.post('http://localhost:3000/html', formulary);
  }
   
  deleteFormulary(id: number){
    return this.http.delete(`http://localhost:3000/html/${id}`);
  }
};

