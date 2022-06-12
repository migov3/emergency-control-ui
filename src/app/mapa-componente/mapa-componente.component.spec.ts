import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaComponenteComponent } from './mapa-componente.component';

describe('MapaComponenteComponent', () => {
  let component: MapaComponenteComponent;
  let fixture: ComponentFixture<MapaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
