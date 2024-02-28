import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Park } from '../../../interfaces/parks.interface';

@Component({
  selector: 'card-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardButtonComponent { 
  @Input() park: Park | undefined;
  @Input() cardIndex: number | undefined;
}
