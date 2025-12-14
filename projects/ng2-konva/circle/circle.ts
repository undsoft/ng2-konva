import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Circle } from 'konva/lib/shapes/Circle';

@Component({
  selector: 'ko-circle',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaCircle extends KonvaComponent<Circle> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Circle {
    return new Circle();
  }
}
