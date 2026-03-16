import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
  @Input() type: String = '';
  @Input() placeholder: String = '';
}
