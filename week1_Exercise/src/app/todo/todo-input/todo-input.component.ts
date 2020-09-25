import { Component, OnInit, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() todoData = new EventEmitter<{title: string}>();
  todoTitle: string;


  constructor() { }

  ngOnInit(): void {
    this.todoTitle = '';
  }

  addTodoData(): void {
    this.todoData.emit({
      title: this.todoTitle,
    });
    this.todoTitle = '';
  }
  }


