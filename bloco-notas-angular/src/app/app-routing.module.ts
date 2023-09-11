import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedNoteComponent } from './components/fixed-note/fixed-note.component';
import { HomeComponent } from './components/home/home.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "note",
    component: NoteEditorComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
