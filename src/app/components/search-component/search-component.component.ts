import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "bs-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"],
})
export class SearchComponentComponent {
  constructor() {}

  @Input()
  searchEmitter: Subject<string>;
}
