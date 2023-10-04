import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedNoteComponent } from './components/fixed-note/fixed-note.component';
import { HomeComponent } from './components/home/home.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';

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
  },
  {
    path: 'deleteNote/:id',
    component: DeleteButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
