import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Line } from 'konva/lib/shapes/Line';

@Component({
  selector: 'ko-line',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaLine extends KonvaComponent<Line> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Line {
    return new Line();
  }
}
