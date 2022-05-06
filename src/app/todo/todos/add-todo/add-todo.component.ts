import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText" />
  `,
  styles: [
    `
      :host {
        display: flex;
        padding: 1rem 0.9rem;
      }
      input {
        border: none;
        margin-left: 0.5rem;
      }
      input:focus {
        outline: none;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 26px;
        width: 26px;
        background-color: blueviolet;
        border: none;
        border-radius: 50%;
        color: white;
        font-weight: bold;
      }
    `,
  ],
})
export class AddTodoComponent implements OnInit {
  newText: string = '';
  @Output() onTodoAdded = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
