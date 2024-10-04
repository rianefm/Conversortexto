import { Component } from '@angular/core';
import { ShakespeareService, TranslationResponse } from '../services/shakespeare.service';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.page.html',
  styleUrls: ['./texto.page.scss'],
})
export class TextoPage {
  inputText: string = ''; // Inicialize a propriedade
  translatedText: string = ''; // Inicialize a propriedade

  constructor(private shakespeareService: ShakespeareService) {}

  translate(text: string) {
    this.shakespeareService.translate(text).subscribe((response: TranslationResponse) => {
      console.log(response);
      this.translatedText = response.contents.translated; // Armazene o texto traduzido
    });
  }
}
