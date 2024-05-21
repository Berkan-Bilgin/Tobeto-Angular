import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-key-value-pipe',
  standalone: true,
  imports: [NgFor, KeyValuePipe, JsonPipe],
  templateUrl: './key-value-pipe.component.html',
  styleUrl: './key-value-pipe.component.css',
})
export class KeyValuePipeComponent {
  myObject = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    city: 'Anytown',
  };

  get objectEntries() {
    return Object.entries(this.myObject);
  }
}
