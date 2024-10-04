import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TranslationResponse {
  contents: {
    translated: string;
    text: string;
    translation: string;
  };
  success: {
    total: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ShakespeareService {
  private apiUrl: string = '/api/translate'; // Alterado para usar o proxy corretamente

  constructor(private http: HttpClient) {}

  translate(text: string): Observable<TranslationResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // ou o tipo adequado
    });
    return this.http.post<TranslationResponse>(this.apiUrl, { text }, { headers });
  }
}
