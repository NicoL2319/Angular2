import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GifsService } from '../../gifs/services/gifs.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    AppComponent,
    NgForOf,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})
export class SidebarComponent {
  get Historial(){
    return this.gifsServise.Historial;
  }
 constructor(private gifsServise: GifsService){}
}
