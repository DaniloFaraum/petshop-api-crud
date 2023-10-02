import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {

  constructor(
    private service: NoteService,
    private router: Router
  ){}


  createNote(){
    this.service.create(this.note).subscribe(() =>{
      this.router.navigate(['/home'])
    })
  }



  note: Note = {
    title: "",
    content: "",
    color: ""
  }
}
