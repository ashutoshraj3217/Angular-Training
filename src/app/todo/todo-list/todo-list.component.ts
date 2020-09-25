import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoStatus = false;
  @Input() todos:[];
  @Output() todoId = new EventEmitter<{id: number}>();
  @Output() itemCompleted = new EventEmitter<{id: number, status:boolean}>();
  constructor() { }
 
  ngOnInit(): void {
    console.log("this-->",this.todos);
  }

  deleteTodo(id){
    console.log("delete 1")
    this.todoId.emit(id);
  }
  todoCompleted(id){
    this.todoStatus = !this.todoStatus;
    this.itemCompleted.emit({id:id,status:this.todoStatus});
  }
}
