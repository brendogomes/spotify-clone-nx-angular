import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPhotoComponent } from './ui-photo.component';

describe('UiPhotoComponent', () => {
  let component: UiPhotoComponent;
  let fixture: ComponentFixture<UiPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
