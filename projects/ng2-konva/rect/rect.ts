import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Rect } from 'konva/lib/shapes/Rect';

@Component({
  selector: 'ko-rect',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaRect extends KonvaComponent<Rect> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Rect {
    return new Rect();
  }
}
