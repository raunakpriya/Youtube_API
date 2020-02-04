import { Component } from '@angular/core';
import {YoutubeService} from './youtube.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'youtube';
  videos: any=[];
  constructor( private youTubeService: YoutubeService) { }

  ngOnInit() {
    
    this.youTubeService
    .getVideosForChanel('', 20)
    .subscribe(lista => {
    for (let element of lista["items"]) {
      this.videos.push(element)
    }
    });
    }

}
