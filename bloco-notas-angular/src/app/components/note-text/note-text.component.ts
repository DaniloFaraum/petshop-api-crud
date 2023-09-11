import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-text',
  templateUrl: './note-text.component.html',
  styleUrls: ['./note-text.component.css']
})
export class NoteTextComponent {
  note = {
    title: "placeholder",
    content: "plaaaaaceholder",
    type: "type1"
  }
}
