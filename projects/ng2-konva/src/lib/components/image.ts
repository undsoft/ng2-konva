import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Image, ImageConfig } from 'konva/lib/shapes/Image';
import { addShapeToParent } from '../utils/add-shape-to-parent';

@Component({
  selector: 'ko-image',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaImage extends KonvaComponent<Image> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Image {
    return new Image(this.config() as ImageConfig);
  }
}
