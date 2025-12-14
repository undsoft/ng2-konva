import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { TextPath } from 'konva/lib/shapes/TextPath';

@Component({
  selector: 'ko-text-path',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaTextPath extends KonvaComponent<TextPath> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): TextPath {
    return new TextPath();
  }
}
