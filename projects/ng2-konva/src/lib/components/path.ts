import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Path } from 'konva/lib/shapes/Path';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-path',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaPath extends KonvaComponent<Path> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Path {
    return new Path();
  }
}
