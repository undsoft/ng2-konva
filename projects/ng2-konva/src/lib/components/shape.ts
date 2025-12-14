import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Shape } from 'konva/lib/Shape';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-shape',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaShape extends KonvaComponent<Shape> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Shape {
    return new Shape();
  }
}
