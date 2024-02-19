import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CategoryDto } from '../models/northwind-crud/category-dto';
import { NorthwindCRUDService } from '../services/northwind-crud.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public primaryKey: string = 'sdfsdfsdfsdfs';
  public northwindCRUDCategoryDto: CategoryDto[] = [];

  constructor(
    private northwindCRUDService: NorthwindCRUDService,
  ) {}

  ngOnInit() {
    this.northwindCRUDService.getCategoryDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCRUDCategoryDto = data,
      error: (_err: any) => this.northwindCRUDCategoryDto = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
