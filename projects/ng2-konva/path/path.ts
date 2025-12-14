import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Path } from 'konva/lib/shapes/Path';

@Component({
  selector: 'ko-path',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaPath extends KonvaComponent<Path> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Path {
    return new Path();
  }
}
