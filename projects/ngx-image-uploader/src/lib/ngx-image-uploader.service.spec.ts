import { TestBed } from '@angular/core/testing';

import { NgxImageUploaderService } from './ngx-image-uploader.service';

describe('NgxImageUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxImageUploaderService = TestBed.get(NgxImageUploaderService);
    expect(service).toBeTruthy();
  });
});
