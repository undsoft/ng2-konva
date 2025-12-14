import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Text } from 'konva/lib/shapes/Text';

@Component({
  selector: 'ko-text',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaText extends KonvaComponent<Text> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Text {
    return new Text();
  }
}
