import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,BrowserAnimationsModule, MatProgressBarModule, MatInputModule, FormsModule,MatFormFieldModule, ReactiveFormsModule, MatGridListModule, MatSelectModule,MatButtonModule, HttpClientModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

   it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular-Imgur-Gallery'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('Angular-Imgur-Gallery');
  })); 

  it('should render title in a h1 tag as IMGUR GALLERY', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('IMGUR GALLERY');
  }));

  it('should validate the section drop down default value is hot', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.sectionCtrl.value).toEqual('hot');
      });

      it('should validate the load images button to disabled while loading images', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        const btnElement = fixture.debugElement.nativeElement.querySelector('button');
        btnElement.click();
        app.isLoading = true;
        fixture.detectChanges();
        await fixture.whenStable().then(() => {
          expect(btnElement.disabled).toEqual(true);
        })
       
      });
});