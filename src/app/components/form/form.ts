import { Component } from '@angular/core';
import { Inputs } from "../inputs/inputs";
import { Button } from "../button/button";

@Component({
  selector: 'app-form',
  imports: [Inputs, Button],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {}
