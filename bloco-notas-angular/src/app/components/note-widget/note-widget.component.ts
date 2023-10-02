import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-widget',
  templateUrl: './note-widget.component.html',
  styleUrls: ['./note-widget.component.css']
})

export class NoteWidgetComponent {
  @Input() note:Note = {
    id: 1,
    title: "titulo",
    content: "testeeee",
    color: "default"
  }
}
