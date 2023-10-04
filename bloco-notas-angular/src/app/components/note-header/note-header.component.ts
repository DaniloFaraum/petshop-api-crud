import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.css']
})
export class NoteHeaderComponent {

  pallete={
    visibility: "hidden"
  }

  showPallete(){
    if(this.pallete.visibility == "hidden"){
      this.pallete.visibility = ""
    }
    else{
      this.pallete.visibility = "hidden"
    }
  }
}
