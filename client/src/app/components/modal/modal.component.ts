import { Component, Input } from '@angular/core';

class Comment {
  avatar: string;
  name: string;
  time: string;
  comment: string;
  likes: string;
}

class AppData {
  id: string;
  name: string;
  image: string;
  rating: string;
  category: string;
  subCategory: string;
  author: string;
  version: string;
  downloads: string;
  eMail: string;
  description: string;
  previewImages: string[];
  comments: Comment[];
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() appData: AppData;

  stars: string[];

  getArrayOfStartsClasses() {
    const result = [];
    let rating = +parseFloat(this.appData.rating).toFixed();

    for (let i = 0; i < 5; i += 1) {
      result.push(rating > 0 ? 'modal__rating-star--filled' : 'modal__rating-star--empty');
      if (rating > 0) rating -= 1;
    }

    return result;
  }
}
