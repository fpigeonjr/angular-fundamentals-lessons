import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>My Favorite Beatles Songs</h1>
    <ul>
      <li>Here Comes the Sun</li>
      <li>Twist and Shout</li>
      <li>You Really Have a Hold On Me</li>
    </ul>
  `,
  styles: `
    li {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
