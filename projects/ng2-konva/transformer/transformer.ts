import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Transformer } from 'konva/lib/shapes/Transformer';

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
