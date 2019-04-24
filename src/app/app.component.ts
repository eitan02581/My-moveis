import { Component, OnInit } from '@angular/core';
import store from "./store/redux-async";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-movies';
  ngOnInit() {
    console.log(store)
  }
}
