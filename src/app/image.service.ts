import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // public imgUrl = 'https://api.imgur.com/3/gallery/top/top/day/1?showViral=true&mature=true&album_previews=true';
  //public imgUrl = 'https://api.imgur.com/3/gallery/hot/viral.json';
  public imgUrl = 'https://api.imgur.com/3/gallery';
  public clientid = '3c9187c5272944b';
  constructor(private _httpclient: HttpClient) { }
  
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Client-ID ${this.clientid}`
  });

  getImages(section:string, sort: string, wndow: string):Observable<Image>
  {
    return this._httpclient.get<Image>(`${this.imgUrl}/${section}/${sort}/${wndow}.json`, {headers: this.headers});
  }
}
