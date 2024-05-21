import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasePipeComponent } from './title-case-pipe.component';

describe('TitleCasePipeComponent', () => {
  let component: TitleCasePipeComponent;
  let fixture: ComponentFixture<TitleCasePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCasePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleCasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
