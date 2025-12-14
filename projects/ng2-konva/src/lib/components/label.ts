import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Label } from 'konva/lib/shapes/Label';
import { addShapeToParent } from '../utils/add-shape-to-parent';

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
