import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Wedge } from 'konva/lib/shapes/Wedge';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-wedge',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaWedge extends KonvaComponent<Wedge> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Wedge {
    return new Wedge();
  }
}
