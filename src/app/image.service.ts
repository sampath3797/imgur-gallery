import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import {Image} from './image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpclient: HttpClient) { }
  
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Client-ID ${environment.CLIENT_ID}`
  });

  getImages(section:string, sort: string, wndow: string):Observable<Image>
  {
    return this._httpclient.get<Image>(`${environment.IMGUR_API_ENDPOINT}/${section}/${sort}/${wndow}.json`, {headers: this.headers});
  }

  handleError(err)
  {

  }
}
