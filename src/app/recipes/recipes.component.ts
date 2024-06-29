import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  receipeName = ["Biryani receipe","curry receipe"];
  //@Output() updateDataEvent = new EventEmitter<string>();
  @Output() sendMessageToParent = new EventEmitter<string>();
  @Output() sendProgress = new EventEmitter<number>();
  message!:string
  sendMessage() {
    this.sendMessageToParent.emit("Hello parent component, I came form child compnent");
  }
  OnProgressClick() {
  let progress = 0;
  const interval = setInterval(()=> {
    progress += 10;
    this.sendProgress.emit(progress);
    if(progress === 100){
      clearInterval(interval);
    }
    },500);
    
  }
  receiveMessageProperty(message:string) {
    this.message = message;
    console.log(message);
  }
}
