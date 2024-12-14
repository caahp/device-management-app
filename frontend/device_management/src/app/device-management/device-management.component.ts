import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';

interface Device {
  id: number;
  category_name: string;
  color: string;
  part_number: string;

}

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {
  url = environment.apiUrl;
  devices: Device[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAll().subscribe((data: Device[]) => {
      console.log(data);
      this.devices = data;
    });
  }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.url + '/devices');
  }
}
