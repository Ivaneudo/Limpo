import { Component } from '@angular/core';
import { Titulo } from '../../components/titulo/titulo';
import { Topico } from '../../components/topico/topico';

@Component({
  selector: 'app-servicos',
  imports: [Titulo, Topico],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {}
