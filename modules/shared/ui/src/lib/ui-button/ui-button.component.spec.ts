import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiButtonComponent } from './ui-button.component';

describe('UiButtonComponent', () => {
  let component: UiButtonComponent;
  let fixture: ComponentFixture<UiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be enabled by default when isDisabled is false', () => {
    const libButtonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(libButtonElement.disabled).toBe(false);
  });

  it('should be disabled when isDisabled is true', () => {
    component.isDisabled = true; 
    fixture.detectChanges();
    const libButtonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(libButtonElement.disabled).toBe(true);
  });
});
