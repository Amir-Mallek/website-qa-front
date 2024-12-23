import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlValidationComponent } from './html-validation.component';

describe('HtmlValidationComponent', () => {
  let component: HtmlValidationComponent;
  let fixture: ComponentFixture<HtmlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
