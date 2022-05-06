import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done" id="newTodo" />
    <label for="newTodo">{{ todo.text }}</label>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        color: dimgray;
        background-color: white;
      }

      input {
        position: relative;
      }

      input:before {
        content: '';
        display: flex;
        height: 1.5rem;
        width: 1.5rem;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        left: -6px;
        border: 1px solid dimgray;
      }
      input:checked:after {
        content: '\\2713';
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        left: -6px;
        border: 1px solid dimgray;
        background-color: dimgray;
        text-align: center;
        color: white;
      }
      label {
        margin-left: 1rem;
      }
      input:checked + label {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = { done: false, text: '' };

  constructor() {}

  ngOnInit(): void {}
}
