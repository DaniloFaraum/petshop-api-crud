import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: NoteService) { }

  noteList: Note[] = []

  ngOnInit(): void {
    this.service.list().subscribe((noteList) => {
      this.noteList = noteList
    })
  }
}
