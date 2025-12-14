import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Ellipse } from 'konva/lib/shapes/Ellipse';

@Component({
  selector: 'ko-ellipse',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaEllipse extends KonvaComponent<Ellipse> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Ellipse {
    return new Ellipse();
  }
}
