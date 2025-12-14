import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Wedge } from 'konva/lib/shapes/Wedge';

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
