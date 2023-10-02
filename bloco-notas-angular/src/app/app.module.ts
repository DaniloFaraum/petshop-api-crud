import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedNoteComponent } from './components/fixed-note/fixed-note.component';
import { FixedTabComponent } from './components/fixed-tab/fixed-tab.component';
import { SearchComponent } from './components/search/search.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteHeaderComponent } from './components/note-header/note-header.component';
import { NoteTextComponent } from './components/note-text/note-text.component';
import { HomeComponent } from './components/home/home.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { NoteWidgetComponent } from './components/note-widget/note-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FixedNoteComponent,
    FixedTabComponent,
    SearchComponent,
    NewNoteComponent,
    NoteHeaderComponent,
    NoteTextComponent,
    HomeComponent,
    NoteEditorComponent,
    ColorSelectorComponent,
    NoteWidgetComponent,
    SaveButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
