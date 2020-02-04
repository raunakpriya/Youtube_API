import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey : string = 'AIzaSyA9o95f0upUE4svj6hgemxPVj_QHdRGuLU';
  public channel="";
  public maxResults;

  constructor(public http: HttpClient) { }
  getVideosForChanel( channel, maxResults) {
  let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' +channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
  return this.http.get(url)
    
  }
}
