import { Component } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent {

  optionsOpened = false;

  toggleOptions() {
    this.optionsOpened = !this.optionsOpened;
  }

  data = {
    id: '1',
    name: 'Accountant',
    image: '/assets/images/mocks/mustache.jpg',
    rating: '2.7',
    category: 'management',
    subCategory: 'finance',
    author: 'Emchenko M',
    version: '1.0.0',
    downloads: '345',
    eMail: 'emchenko.mikhail@mail.ru',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    previewImages: [
      '/assets/images/mocks/mustache.jpg',
      '/assets/images/mocks/mustache.jpg',
      '/assets/images/mocks/mustache.jpg',
      '/assets/images/mocks/mustache.jpg'
    ],
    comments: [
      {
        avatar: '/assets/images/mocks/mustache.jpg',
        name: 'John Catson',
        time: '15:35 12.05.2017',
        comment: 'Lorem ipsum dolor sit amet!',
        likes: '645'
      },
      {
        avatar: '/assets/images/mocks/mustache.jpg',
        name: 'Michael Kittison',
        time: '16:35 12.05.2017',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        likes: '173'
      }
    ]
  };
}
