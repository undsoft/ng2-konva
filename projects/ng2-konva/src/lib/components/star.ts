import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Star } from 'konva/lib/shapes/Star';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-star',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaStar extends KonvaComponent<Star> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Star {
    return new Star();
  }
}
