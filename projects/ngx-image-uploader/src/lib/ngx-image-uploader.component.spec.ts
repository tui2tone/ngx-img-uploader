import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageUploaderComponent } from './ngx-image-uploader.component';

describe('NgxImageUploaderComponent', () => {
  let component: NgxImageUploaderComponent;
  let fixture: ComponentFixture<NgxImageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
