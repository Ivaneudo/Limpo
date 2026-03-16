import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topico',
  imports: [],
  templateUrl: './topico.html',
  styleUrl: './topico.css',
})
export class Topico {
  @Input() topico: string = '';
}
