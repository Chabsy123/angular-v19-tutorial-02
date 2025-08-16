import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if.component';

describe('StructuralDirectivesNgifVsIfComponent', () => {
  let component: StructuralDirectivesNgifVsIfComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgifVsIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgifVsIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgifVsIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
