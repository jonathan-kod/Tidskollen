import { Component, OnInit } from '@angular/core';
import { Day } from './day';
import { Month } from './month';
import { ClockComponent} from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateTime = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }

  getWeekDay(): string  {
    return Day[this.dateTime.getDay()];
  }

  getDateString(): string {
    return `${this.dateTime.getDate().toString()} ${Month[this.dateTime.getMonth()]}`
  }

  getCategoryOfDay(): string {
    let dayCategories = [
      {
      name: 'Morgon',
      time: [5, 6, 7, 8]
      },
      {
        name: 'Förmiddag',
        time: [9, 10, 11]
      },
      {
        name: 'Eftermiddag',
        time: [12, 13, 14, 15, 16, 17]
      },
      {
        name: 'Kväll',
        time: [18, 19, 20, 21, 22, 23]
      },
      {
        name: 'Natt',
        time: [24, 0, 1, 2, 3, 4]
      }
    ];

    let currentHour: number = this.dateTime.getHours();
    let currentCategory: string = '';
    dayCategories.forEach(c => {
      if (c.time.some(t => t === currentHour)) {
        currentCategory = c.name;
      } 
    })
    return currentCategory;
  }
}



