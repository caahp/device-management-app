import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent implements OnInit {

  apiUrl = environment.apiUrl;
  categories: { id: number; name: string }[] = []; // List of categories
  device = {
    categoryId: null,
    color: '',      
    partNumber: null  
  };

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DeviceDialogComponent>
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Load categories from the API
  loadCategories(): void {
    this.http.get<{ id: number; name: string }[]>(`${this.apiUrl}/categories`)
      .subscribe(
        (data) => {
          this.categories = data;
        },
        (error) => {
          console.error('Error loading categories:', error);
        }
      );
  }

  submitForm(): void {
    if (this.isValidForm()) {
      this.dialogRef.close(this.device);
    }
  }

  isValidForm(): boolean {
    const colorRegex = /^[a-zA-Z\s]{1,16}$/; 
    return (
      this.device.categoryId !== null &&
      colorRegex.test(this.device.color) &&
      this.device.partNumber !== null &&
      this.device.partNumber > 0
    );
  }
}
