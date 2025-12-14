import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Ring } from 'konva/lib/shapes/Ring';

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
