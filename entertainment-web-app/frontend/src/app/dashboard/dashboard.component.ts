import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { DataService, Data } from '../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  state: Data[] = [];
  recommended: Data[] = [];

  constructor(private data: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.data.getData().subscribe((res) => {
      this.state = res;
      this.recommended = res.filter((data): boolean => {
        if (data.thumbnail.trending) return false;
        return true;
      });
    });

    this.http
      .get('http://localhost:3000/dashboard', {
        responseType: 'text',
        observe: 'response',
        withCredentials: true,
      })
      .subscribe((res) => console.log(res));
  }
}
