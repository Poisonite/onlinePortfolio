// Core+
import { Component } from '@angular/core';

// Enums
import { ToolBarNames } from './enums/tool-bar-names.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  drawer;
  title: string = 'Welcome!';

  titleUpdate(name: string) {
    if (name === 'home') {
      this.title = ToolBarNames.home;
      return;
    }
    if (name === 'skills') {
      this.title = ToolBarNames.skills;
      return;
    }
    if (name === 'resume') {
      this.title = ToolBarNames.resume;
      return;
    }
    if (name === 'about') {
      this.title = ToolBarNames.about;
      return;
    }
    if (name === 'references') {
      this.title = ToolBarNames.references;
      return;
    }
  }
}
