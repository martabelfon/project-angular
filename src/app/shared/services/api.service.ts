import { IStructure } from './../interfaces/istructure';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  formulary: IStructure = {
    id:0,
    img: "",
    title: "",
    author: "",
    description: "",
    url: "",
    tag: "",
  }

  constructor(private http:HttpClient) { }


  getInfo(url:string) {
    return this.http.get(url);
  }

  postFormulary(formulary: IStructure){
    return this.http.post('http://localhost:3000/css-tutorials-videos', formulary);
  }
   
};

