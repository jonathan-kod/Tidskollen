import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @ViewChild('minuteHand', {static: false}) minuteHand: ElementRef;
  @ViewChild('hourHand', {static: false}) hourHand: ElementRef;

  date: Date = new Date();
  clockNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
      this.updateClockHands();
    }, 1000);
  }

  getDegreeForNumber(no: number): number {
    return no * 30;
  }

  updateClockHands() {
    this.minuteHand.nativeElement.style.transform = 'rotate(' + this.getMinuteHandDegree() + 'deg)'
    this.hourHand.nativeElement.style.transform = 'rotate(' + this.getHourHandDegree() + 'deg)';
  }

  getMinuteHandDegree(): number {
    let wholeMinuteDegree: number = this.date.getMinutes() * 6;
    let secondsDegreeForMinuteHand: number = this.date.getSeconds() * 0.1;
    return wholeMinuteDegree + secondsDegreeForMinuteHand;
    
  }

  getHourHandDegree(): number {
    let wholeHourDegree: number = this.date.getHours() * 30;
    let minutesDegreeForHourHand: number = this.date.getMinutes() * 0.5;
    return wholeHourDegree + minutesDegreeForHourHand;
  }
}
