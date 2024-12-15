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
      this.devices = data;
    });
  }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.url + '/devices');
  }

  deleteDevice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/devices/${id}`);
  }

  onDeleteDevice(id: number): void {
    if (confirm('Are you sure you want to delete this device?')) {
      this.deleteDevice(id).subscribe(() => {
        this.devices = this.devices.filter(device => device.id !== id);
      });
    }
  }
}
