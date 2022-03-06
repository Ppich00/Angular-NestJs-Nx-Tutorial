import { Todo } from '@my-org/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todo: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  getData(): Todo[] {
    return this.todo;
  }

  addTodo() {
    this.todo.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
