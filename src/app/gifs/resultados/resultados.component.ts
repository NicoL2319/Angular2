import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [
    NgFor,
    CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultados
  }

  constructor( private gifsService: GifsService){}
}
