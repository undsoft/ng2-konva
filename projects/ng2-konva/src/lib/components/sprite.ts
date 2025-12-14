import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Sprite, SpriteConfig } from 'konva/lib/shapes/Sprite';
import { addShapeToParent } from '../utils/add-shape-to-parent';

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
