import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContatos } from './form-contatos';

describe('FormContatos', () => {
  let component: FormContatos;
  let fixture: ComponentFixture<FormContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(FormContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
