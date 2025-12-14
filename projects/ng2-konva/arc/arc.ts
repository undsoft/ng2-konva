import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Arc } from 'konva/lib/shapes/Arc';

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
