import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Text } from 'konva/lib/shapes/Text';
import { addShapeToParent } from '../utils/add-shape-to-parent';

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
