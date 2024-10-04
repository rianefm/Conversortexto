import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { IonicModule } from '@ionic/angular';
import { TextoPageRoutingModule } from './texto-routing.module';
import { TextoPage } from './texto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Adicione aqui
    IonicModule,
    TextoPageRoutingModule
  ],
  declarations: [TextoPage]
})
export class TextoPageModule {}
