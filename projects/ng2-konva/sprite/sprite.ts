import { Component } from '@angular/core';
import { KonvaComponent, addShapeToParent } from 'ng2-konva';
import { Sprite, SpriteConfig } from 'konva/lib/shapes/Sprite';

@Component({
  selector: 'ko-sprite',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaSprite extends KonvaComponent<Sprite> {
  protected override afterCreated = addShapeToParent(this);

  createKonvaType(): Sprite {
    return new Sprite(this.config() as SpriteConfig);
  }
}
