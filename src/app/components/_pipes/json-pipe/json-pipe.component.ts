import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-json-pipe',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './json-pipe.component.html',
  styleUrl: './json-pipe.component.css',
})
export class JsonPipeComponent {
  myObject = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA',
    },
    hobbies: ['Reading', 'Traveling', 'Swimming'],
  };

  myObjectJson: string = '';

  ngOnInit() {
    this.myObjectJson = JSON.stringify(this.myObject, null, 2);
  }
}
