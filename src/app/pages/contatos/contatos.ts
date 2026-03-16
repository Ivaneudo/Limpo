import { Component } from '@angular/core';
import { Titulo } from "../../components/titulo/titulo";
import { FormContatos } from '../../components/form-contatos/form-contatos';

@Component({
  selector: 'app-contatos',
  imports: [Titulo, FormContatos],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos {}
