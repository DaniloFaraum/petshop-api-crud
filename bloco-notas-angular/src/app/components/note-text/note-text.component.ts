import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-text',
  templateUrl: './note-text.component.html',
  styleUrls: ['./note-text.component.css']
})
export class NoteTextComponent {

  constructor(
    private service: NoteService,
    private router: Router
  ){}


  note: Note = {
    title: "",
    content: "",
    color: ""
  }
  
  createNote(){
    this.service.create(this.note).subscribe(() =>{
      this.router.navigate(['/home'])
    })
  }



}
