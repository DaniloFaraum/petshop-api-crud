import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedNoteComponent } from './fixed-note.component';

describe('FixedNoteComponent', () => {
  let component: FixedNoteComponent;
  let fixture: ComponentFixture<FixedNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedNoteComponent]
    });
    fixture = TestBed.createComponent(FixedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
