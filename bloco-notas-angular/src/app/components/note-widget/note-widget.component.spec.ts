import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWidgetComponent } from './note-widget.component';

describe('NoteWidgetComponent', () => {
  let component: NoteWidgetComponent;
  let fixture: ComponentFixture<NoteWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteWidgetComponent]
    });
    fixture = TestBed.createComponent(NoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
