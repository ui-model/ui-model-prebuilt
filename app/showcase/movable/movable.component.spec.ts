import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';
import { MovableComponent } from './movable.component';

describe('showcase > ShowcaseMovableComponent', () => {
  let component: MovableComponent;
  let fixture: ComponentFixture<MovableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovableComponent],
      imports: [UiModelModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
