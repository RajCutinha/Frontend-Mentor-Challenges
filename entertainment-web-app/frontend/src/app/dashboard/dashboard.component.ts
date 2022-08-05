import { Component, OnInit } from '@angular/core';
import { DataService, Data } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  state: Data[] = [];
  recommended: Data[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getData().subscribe((res) => {
      this.state = res;
      this.recommended = res.filter((data): boolean => {
        if (data.thumbnail.trending) return false;
        return true;
      });
    });
  }
}
