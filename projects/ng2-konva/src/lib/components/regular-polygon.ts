import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { RegularPolygon } from 'konva/lib/shapes/RegularPolygon';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-regular-polygon',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaRegularPolygon extends KonvaComponent<RegularPolygon> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): RegularPolygon {
    return new RegularPolygon();
  }
}
