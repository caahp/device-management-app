import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent {

  apiUrl = environment.apiUrl;

  category = {
    name: ''
  }

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    private http: HttpClient
  ) {}

  submitForm(): void {
    if (this.isValidForm()) {
      this.dialogRef.close(this.category);
    }
  }

  isValidForm(): boolean {
    // Max size 128 chars and not empty.
    const nameRegex = /^[a-zA-Z\s]{1,128}$/; 
    return (
      this.category.name !== null &&
      nameRegex.test(this.category.name) &&
      this.category.name.length > 0
    );
  }

}
