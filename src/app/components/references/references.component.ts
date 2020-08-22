import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Function to handle sending reference request
  contactReference(name) {
    console.log(`Clicked ${name}`);
  }
}
