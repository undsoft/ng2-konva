import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Arrow } from 'konva/lib/shapes/Arrow';

@Component({
  selector: 'ko-arrow',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaArrow extends KonvaComponent<Arrow> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Arrow {
    return new Arrow();
  }
}
