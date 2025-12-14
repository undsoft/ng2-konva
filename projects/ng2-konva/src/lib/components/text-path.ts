import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { TextPath } from 'konva/lib/shapes/TextPath';
import { addShapeToParent } from '../utils/add-shape-to-parent';

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
