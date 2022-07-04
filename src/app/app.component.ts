import { Component, VERSION } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ImageService } from './image.service';
import { Image, imageData, ImageDetails } from './image';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  title = 'Angular-Imgur-Gallery';
  sectionCtrl = new FormControl('hot');
  sortCtrl = new FormControl('viral');
  wndowCtrl = new FormControl('day');

  Images$: Observable<Image>;
  ImagesSubscription: Subscription;

  imageData: imageData[] = [];
  images: ImageDetails[] = [];
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time';
  wndow: 'day' | 'week' | 'month' | 'year' | 'all';
  isLoading = false;

  constructor(private _imgService: ImageService){

  }

  ngOnInit()
  {
    this.fetchImages();
  }

  // invokes fetchImages 
  // when Load Images button clicked
  reload()
  {
    this.fetchImages();
  }

  // method to fetch images from api end point
  fetchImages()
  {
    // to empty the imageData array with existing data if any  before loading with fresh data.
    this.imageData.splice(0,this.imageData.length);
    // isLoading boolean setting for showing progressbar and also disabling load images button.
    this.isLoading = true;
    this.ImagesSubscription  = this._imgService.getImages(this.sectionCtrl.value,this.sortCtrl.value, this.wndowCtrl.value)
                              .subscribe(res => 
                                          {
                                            this.isLoading = false;
                                            if(res.data && res.data?.length > 0)
                                            {
                                              this.images = res.data;
                                              this.images  // filtering elements don't have images
                                                        .filter(x => x.images_count > 0) 
                                                        .map(y => 
                                                                {
                                                                  y.images   // filtering elements that don't have video and only retain oly images of jpeg / png type
                                                                          .filter(z => z.type === 'image/jpeg' || z.type === 'image/png')
                                                                          .map(p => {
                                                                            // modifying link url to load medium thumbnail images
                                                                            p.link = this.thumbnail(p.link); 
                                                                            // finally pushing elements to imageData Array for iterating in html template
                                                                            this.imageData.push(p)  
                                                                          });
                                                                }                               
                                                            );
                                            }
                                          },
                                          (err: HttpErrorResponse) => {
                                                  this.isLoading = false; 
                                                  // to display the errors returned from api end point if any are there
                                                  alert(JSON.stringify(err.error?.data?.error));
                                                  
                                                  }
                                          );
  }

  // as per apidocs.imgr.com documentation modifiying url 
  // by appending letter 'm' to get thumbnails of medium size
  thumbnail(lnk: string)
  {
    console.log()
    if(lnk.endsWith('.jpg'))
    {
      const lnkArr = lnk.split('.jpg');
      console.log(lnkArr[0]+'m.jpg');
      return lnkArr[0]+'m.jpg';
    }
    else if(lnk.endsWith('.png'))
    {
      const lnkArr = lnk.split('.png');
      console.log(lnkArr[0]+'m.png');
      return lnkArr[0]+'m.png';
    }
    
  }

  // for improving performance to render only those elements with id changed
  trackByFn(index: number, el:imageData)
  {
    return el.id;
  }

  // unsubscribing the subscription before component destroy
  // to avoid memory leaks
  ngOnDestroy()
  {
    this.ImagesSubscription.unsubscribe();
  }

}
