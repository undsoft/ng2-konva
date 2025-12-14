import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Circle } from 'konva/lib/shapes/Circle';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-circle',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaCircle extends KonvaComponent<Circle> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Circle {
    return new Circle();
  }
}
