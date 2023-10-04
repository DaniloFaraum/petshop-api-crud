import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor( private http: HttpClient ) { }
  private readonly API = 'http://localhost:3000/note'
  list(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API)
  }

  create(note: Note): Observable<Note>{
    return this.http.post<Note>(this.API, note)
  }

  getNoteId(id: number): Observable<Note> {
    const url = `${this.API}/${id}`
    return this.http.get<Note>(url)
  }

  delete(id: number): Observable<Note> {
    const url = `${this.API}/${id}`
    return this.http.delete<Note>(url)
  }

}



