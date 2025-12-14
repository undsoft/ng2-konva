import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Star } from 'konva/lib/shapes/Star';

@Component({
  selector: 'ko-star',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaStar extends KonvaComponent<Star> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Star {
    return new Star();
  }
}
