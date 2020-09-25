import { Component, OnInit } from '@angular/core';
import { Todo_Interface } from '../Todo_Interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  appHeading = 'Todo App';
  todos: Todo_Interface[];
  id:number;
  constructor() { }

  ngOnInit(): void { 
    this.id = 3;
    this.todos = [
      {
        id : 1,
        title : 'Read Angular Docs',
        completed : false,
      },
      {
        id : 2,
        title : 'Go to Gym',
        completed : false,
      },
    ];}
    addTodo(todoTitle: {title: string}){
      this.todos.push({
        id : this.id,
        title : todoTitle.title,
        completed : false,
        });
        this.id++;
      }
      deleteTodoItem(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
    todoCompleted(todoItem:{id,status}){
      this.todos.map( item => {
        if(todoItem.id === item.id){
            item.completed = todoItem.status;
        }
      })
    }
}
