import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextoPage } from './texto.page';

describe('TextoPage', () => {
  let component: TextoPage;
  let fixture: ComponentFixture<TextoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
