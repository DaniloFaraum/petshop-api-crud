import { Component, Input } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-note-widget',
  templateUrl: './note-widget.component.html',
  styleUrls: ['./note-widget.component.css']
})

export class NoteWidgetComponent {
  @Input() nota:Note = {
    id: 1,
    title: "titulo",
    content: "testeeee",
    type: "type1"
  }
}
