import { Component, OnInit, EventEmitter } from "@angular/core";
import { BookService } from "./services/books.service";
import { Book } from "../types/book";
import { merge, Observable, of, Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "Bookstore by Hackages";
  books$: Observable<Book[]> = of([]);
  termEmitter: Subject<string> = new Subject();

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = merge(
      this.bs.getBooks(),
      this.bs.search(this.termEmitter.asObservable())
    );
  }
}
