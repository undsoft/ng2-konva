import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Line } from 'konva/lib/shapes/Line';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-line',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaLine extends KonvaComponent<Line> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Line {
    return new Line();
  }
}
