import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Tag } from 'konva/lib/shapes/Label';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-tag',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaTag extends KonvaComponent<Tag> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Tag {
    return new Tag();
  }
}
