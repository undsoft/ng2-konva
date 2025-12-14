import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Arrow } from 'konva/lib/shapes/Arrow';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-arrow',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaArrow extends KonvaComponent<Arrow> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Arrow {
    return new Arrow();
  }
}
