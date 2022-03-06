import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@my-org/data';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  constructor(private http: HttpClient) {
    this.fetch();
  }
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }]
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
