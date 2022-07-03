import { Component, VERSION } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ImageService } from './image.service';
import { Image, imageData, ImageDetails } from './image';
import { FormControl } from '@angular/forms';

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

  constructor(private _imgService: ImageService){}
  ngOnInit()
  {
    this.fetchImages();
    
  }

  reload()
  {
    this.fetchImages();
  }

  fetchImages()
  {
    this.imageData.splice(0,this.imageData.length);
    this.isLoading = true;
    this.ImagesSubscription  = this._imgService.getImages(this.sectionCtrl.value,this.sortCtrl.value, this.wndowCtrl.value)
                              .subscribe(res => 
                                          {
                                            this.isLoading = false;
                                            if(res.data && res.data?.length > 0)
                                            {
                                              this.images = res.data;
                                              this.images
                                                        .filter(x => x.images_count > 0)
                                                        .map(y => 
                                                                {
                                                                  y.images
                                                                          .filter(z => z.type === 'image/jpeg' || z.type === 'image/png')
                                                                          .map(p => this.imageData.push(p));
                                                                }                               
                                                            );
                                            }
                                          },
                                          err => {
                                                  this.isLoading = false; console.log(err);
                                                  }
                                          );
  }

  trackByFn(index: number, el:imageData)
  {
    return el.id;
  }

  ngOnDestroy()
  {
    this.ImagesSubscription.unsubscribe();
  }

}
