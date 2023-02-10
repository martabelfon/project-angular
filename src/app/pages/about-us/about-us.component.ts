import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

  characterList! : any;
  url: string = "https://rickandmortyapi.com/api/character";

  constructor(private api:ApiService){ }

  ngOnInit(): void {
      this.api.getCharacters(this.url).subscribe((data:any) => {
        this.characterList = data;
        console.log(this.characterList);
      })

  }
}
