import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';


interface Category {
  id: number;
  name: string;
}

interface Device {
  id: number;
  name: string;
  categoryId: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url = environment.apiUrl;
  totalDevices = 0;
  totalCategories = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTotalDevices();
    this.getTotalCategories();
  }

  getTotalDevices(): void {
    this.http.get<Device[]>(`${this.url}/devices`).subscribe((devices) => {
      this.totalDevices = devices.length;
    });
  }

  getTotalCategories(): void {
    this.http.get<Category[]>(`${this.url}/categories`).subscribe((categories) => {
      this.totalCategories = categories.length;
    });
  }
  

}
