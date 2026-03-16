import { Component } from '@angular/core';
import { Inputs } from "../inputs/inputs";
import { Button } from "../button/button";
import { Textarea } from "../textarea/textarea";

@Component({
  selector: 'app-form-contatos',
  imports: [Inputs, Button, Textarea],
  templateUrl: './form-contatos.html',
  styleUrl: './form-contatos.css',
})
export class FormContatos {}
