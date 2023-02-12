import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  baseUrl: string = `http://localhost:3000/`;
  favorites!: any [];

  constructor(private api:ApiService){ }
  ngOnInit(): void {

    this.api.getInfo(this.baseUrl+"favorites").subscribe((data:any) => {
      this.favorites = data;
      console.log(this.favorites);
    })

  }

}
