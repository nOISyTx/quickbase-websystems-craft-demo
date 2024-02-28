import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Park } from '../../interfaces/parks.interface';
import { CardButtonComponent } from './card-button/card-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule, CardButtonComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() park: Park | undefined;
  @Input() cardIndex: number | undefined;
}
