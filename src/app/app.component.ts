import {Component, NgZone, OnInit} from '@angular/core';
import {timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zonetest';
  progressInZone = 0;
  progressOutsideZone = 0;
  timer = 0;
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loading = false;

  constructor(private zone: NgZone) {

  }

  ngOnInit(): void {
    this.processInside();
    this.processOutside();
  }

  processInside() {
    setInterval(() => {
      this.progressInZone = this.progressInZone + 10;
    }, 10000);
  }

  processOutside() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.progressOutsideZone++;
      }, 1000);
    });
  }
}
