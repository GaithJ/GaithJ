import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaagesComponent } from './mesaages.component';

describe('MesaagesComponent', () => {
  let component: MesaagesComponent;
  let fixture: ComponentFixture<MesaagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
