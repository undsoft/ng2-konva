import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Label } from 'konva/lib/shapes/Label';

@Component({
  selector: 'ko-label',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaLabel extends KonvaComponent<Label> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Label {
    return new Label();
  }
}
