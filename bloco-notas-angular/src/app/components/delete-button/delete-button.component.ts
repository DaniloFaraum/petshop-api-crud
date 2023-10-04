import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getNoteId(parseInt(id!)).subscribe((note) =>{
      	this.note = note
    })
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  excluirNota(){
    if(this.note.id){
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }


  note: Note = {
    title: "",
    content: "",
    color: ""
  }


}
