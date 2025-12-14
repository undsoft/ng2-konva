import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Ellipse } from 'konva/lib/shapes/Ellipse';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-ellipse',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaEllipse extends KonvaComponent<Ellipse> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Ellipse {
    return new Ellipse();
  }
}
