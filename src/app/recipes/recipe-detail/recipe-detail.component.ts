import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent {
  @Input() receipeName : any;
  @Output() receivedMessage = new EventEmitter<string>();
  onReceipeDetails() {
    this.receivedMessage.emit("I have received receipe Names");
  }
}
