import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataHandlerService } from './services/data-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, CardComponent],
  providers: [DataHandlerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public parksData$ = this.dataService.getData();

  constructor(public dataService: DataHandlerService) { }
}
