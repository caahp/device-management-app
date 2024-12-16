import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  url = environment.apiUrl;
  categories: Category[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAll().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/categories');
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/categories/${id}`);
  }

  onDeleteCategory(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.deleteCategory(id).subscribe(() => {
        this.categories = this.categories.filter(category => category.id !== id);
      });
    }
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCategory(result);
      }
    });
  }

  addCategory(category: Category): void {
    this.http.post(`${this.url}/categories`, category).subscribe(() => {
      // After adding, reload the category list
      this.getAll().subscribe((data: Category[]) => {
        this.categories = data;
      });
    });
  }

}
