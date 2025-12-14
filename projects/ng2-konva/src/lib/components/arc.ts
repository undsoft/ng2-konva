import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Arc } from 'konva/lib/shapes/Arc';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-arc',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaArc extends KonvaComponent<Arc> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Arc {
    return new Arc();
  }
}
