import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { RegularPolygon } from 'konva/lib/shapes/RegularPolygon';

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
