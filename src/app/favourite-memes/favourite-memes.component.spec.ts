import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMemesComponent } from './favourite-memes.component';

describe('FavouriteMemesComponent', () => {
  let component: FavouriteMemesComponent;
  let fixture: ComponentFixture<FavouriteMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteMemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
