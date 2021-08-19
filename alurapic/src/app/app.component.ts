import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
  {
    url : 'https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161516582?dimensions=771x420&no_crop=true',
    description : 'Leão'
  },
  {
    url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/280px-Male_gorilla_in_SF_zoo.jpg',
    description : 'Gorilla'
  }
  {
    url : 'https://besthqwallpapers.com/Uploads/19-2-2018/41474/thumb2-africa-elephant-4k-close-up-big-elephant.jpg',
    description : 'Elephant'
  }

  ];
}
