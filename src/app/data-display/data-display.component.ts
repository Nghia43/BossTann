import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})

export class DataDisplayComponent implements OnInit {
  data: any;
  startDate: string = '';
  endDate: string = '';
  groupBy: string = 'Chanel';
  timeZone: string = '';
  apiKey: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  fetchData(): void {
    this.dataService.fetchData(this.startDate, this.endDate, this.groupBy,this.timeZone, this.apiKey).subscribe(response => {
      this.data = response;
    });
  }
}
