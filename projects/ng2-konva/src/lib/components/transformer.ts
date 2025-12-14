import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Transformer } from 'konva/lib/shapes/Transformer';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-transformer',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaTransformer extends KonvaComponent<Transformer> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Transformer {
    return new Transformer();
  }
}
