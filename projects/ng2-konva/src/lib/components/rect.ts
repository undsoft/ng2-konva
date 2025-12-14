import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Rect } from 'konva/lib/shapes/Rect';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-rect',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaRect extends KonvaComponent<Rect> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Rect {
    return new Rect();
  }
}
