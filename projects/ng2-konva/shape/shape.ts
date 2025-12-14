import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Shape } from 'konva/lib/Shape';

@Component({
  selector: 'ko-shape',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaShape extends KonvaComponent<Shape> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Shape {
    return new Shape();
  }
}
