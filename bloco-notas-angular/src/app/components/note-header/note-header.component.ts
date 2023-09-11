import { Component } from '@angular/core';

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
