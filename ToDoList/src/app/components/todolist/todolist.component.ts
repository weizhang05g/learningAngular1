import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styles: []
})
export class TodolistComponent implements OnInit {
  public todolist: any[] = [];
  public keyword: string = '';
  constructor(private storage: StorageService) {
    let todolist = this.storage.get('todolist');
    if (todolist) {
      this.todolist = todolist;
    }
  }

  ngOnInit(): void {}
  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0
        });
        this.keyword = '';
        this.storage.set('todolist', this.todolist);
      } else {
        alert('数据已存在');
        this.keyword = '';
      }
    }
  }

  deleteData(key) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }

  todolistHasKeyword(todolist: any, keyword: any) {
    if (!keyword) return false;
    for (var i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }
  checkboxChange() {
    this.storage.set('todolist', this.todolist);
  }
}
