import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementParServiceComponent } from './equipement-par-service.component';

describe('EquipementParServiceComponent', () => {
  let component: EquipementParServiceComponent;
  let fixture: ComponentFixture<EquipementParServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementParServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementParServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
