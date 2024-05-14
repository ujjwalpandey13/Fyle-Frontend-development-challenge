import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkltloaderComponent } from './skltloader.component';

describe('SkltloaderComponent', () => {
  let component: SkltloaderComponent;
  let fixture: ComponentFixture<SkltloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkltloaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkltloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
