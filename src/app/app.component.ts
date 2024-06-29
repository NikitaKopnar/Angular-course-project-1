import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message!: string;
  progressNumber!: number;
  updateData (item:String) {
    console.warn(item);
  }
  receiveMessage(message:string){
    this.message = message;
  }
  receiveProgress(progressReceived : number) {
    this.progressNumber = progressReceived;
  }
}
