import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Ring } from 'konva/lib/shapes/Ring';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-ring',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaRing extends KonvaComponent<Ring> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Ring {
    return new Ring();
  }
}
