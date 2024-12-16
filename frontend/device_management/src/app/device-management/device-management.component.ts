import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';

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

  constructor(private http: HttpClient, public dialog: MatDialog) {}

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

  openAddDeviceDialog(): void {
    const dialogRef = this.dialog.open(DeviceDialogComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addDevice(result);
      }
    });
  }

  addDevice(device: { categoryId: number; color: string; partNumber: number }): void {
    this.http.post(`${this.url}/devices`, device).subscribe(() => {
      // After adding, reload the device list
      this.getAll().subscribe((data: Device[]) => {
        this.devices = data;
      });
    });
  }
  
}
