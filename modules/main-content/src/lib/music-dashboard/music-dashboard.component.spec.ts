import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicDashboardComponent } from './music-dashboard.component';

describe('MusicDashboardComponent', () => {
  let component: MusicDashboardComponent;
  let fixture: ComponentFixture<MusicDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
