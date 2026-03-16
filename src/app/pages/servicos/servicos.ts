import { Component } from '@angular/core';
import { Titulo } from "../titulo/titulo";
import { Topico } from "../topico/topico";

@Component({
  selector: 'app-servicos',
  imports: [Titulo, Topico],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {}
