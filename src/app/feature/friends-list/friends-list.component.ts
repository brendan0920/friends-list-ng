import { Component, OnInit } from '@angular/core';
import { Friend } from '../../model/friend';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})

export class FriendsListComponent implements OnInit {
  title: string = "Friends-List";

  friends: Friend[] | undefined;
  newFriend: Friend = new Friend();

  ngOnInit(): void {
    this.friends = [
      new Friend('Alice', 25, 'alice@example.com', true),
      new Friend('Bob', 30, 'bob@example.com', false),
      new Friend('Charlie', 28, 'charlie@example.com', true),
      new Friend('Diana', 22, 'diana@example.com', false),
      new Friend('Ethan', 35, 'ethan@example.com', true)
    ];
  }

  addFriend(): void {
    this.friends?.push(this.newFriend);
    this.newFriend = new Friend();
  }


  delete(index: number) {
    // Remove the friend at the specified index
    this.friends?.splice(index, 1);
  }
}