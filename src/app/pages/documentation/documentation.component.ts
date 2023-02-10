import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit{

  apiInfo! : any;
  url: string = "http://localhost:3000/html";

  constructor(private api:ApiService, private _sanitizer: DomSanitizer){ }

  ngOnInit(): void {
      this.api.getInfo(this.url).subscribe((data:any) => {
        this.apiInfo = data;
        console.log(this.apiInfo);
      })

  }

  getVideoIframe(url:string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }
}