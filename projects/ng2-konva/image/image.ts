import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Image, ImageConfig } from 'konva/lib/shapes/Image';

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
