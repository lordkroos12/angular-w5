import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesDetailsComponent } from './memes-details.component';

describe('MemesDetailsComponent', () => {
  let component: MemesDetailsComponent;
  let fixture: ComponentFixture<MemesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
