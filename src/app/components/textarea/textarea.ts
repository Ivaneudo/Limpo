import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
})
export class Textarea {
  @Input() placeholder: String = '';
  @Input() name: String = '';
}
