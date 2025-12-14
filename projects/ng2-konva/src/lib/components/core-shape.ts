import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject
} from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Shape } from 'konva/lib/Shape';
import {
  AnyShape,
} from '../types/supported-nodes';
import Konva from 'konva';
import { getName } from '../utils/string.utils';
import { KonvaLayer } from './layer';
import { KonvaGroup } from './group';

export type AnyShapeName =
  | 'Arc'
  | 'Arrow'
  | 'Circle'
  | 'Ellipse'
  | 'Image'
  | 'Label'
  | 'Tag'
  | 'Line'
  | 'Path'
  | 'Rect'
  | 'RegularPolygon'
  | 'Ring'
  | 'Star'
  | 'Text'
  | 'TextPath'
  | 'Transformer'
  | 'Wedge'
  | 'Shape'
  | 'Sprite';

@Component({
  selector:
    'ko-arc, ko-arrow, ko-circle, ko-ellipse, ko-image, ko-label, ko-tag, ko-line, ko-path, ko-rect, ko-regular-polygon, ko-ring, ko-star, ko-text, ko-text-path, ko-transformer, ko-wedge, ko-shape, ko-sprite',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaCoreShape2<
  ShapeType extends AnyShape = AnyShape,
> extends KonvaComponent<ShapeType> {
  private elementRef = inject(ElementRef);
  private parentLayer = inject(KonvaLayer, { optional: true });
  private parentGroup = inject(KonvaGroup, { optional: true });

  override createKonvaType(): ShapeType {
    const nodeName = getName(
      this.elementRef.nativeElement.localName,
    ) as AnyShapeName;

    if (nodeName === 'Shape') {
      return new Shape() as ShapeType;
    } else {
      const Constructor = Konva[nodeName];
      return new Constructor(this.config() as never) as ShapeType;
    }
  }

  protected override afterCreated(): void {
    const group = this.parentGroup;
    if (group) {
      group.addChild(this);
      return;
    }

    const layer = this.parentLayer;
    if (layer) {
      layer.addChild(this);
      return;
    }

    const node = this.getNode();
    throw new Error(
      `Orphan node ${node.toJSON()} not part of a group or a layer`,
    );
  }
}
