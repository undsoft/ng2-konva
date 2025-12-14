import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Group } from 'konva/lib/Group';
import { updatePicture } from '../utils/update-picture';
import { KonvaLayer } from '../components/layer';

@Component({
  selector: 'ko-group',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaGroup extends KonvaComponent<Group> {
  private parentLayer = inject(KonvaLayer, { optional: true });

  createKonvaType(): Group {
    return new Group();
  }

  public addChild(node: KonvaComponent): void {
    this.getNode().add(node.getNode());

    // TODO: Something about z-index?

    updatePicture(this.getNode());
  }

  protected override afterCreated(): void {
    const layer = this.parentLayer;
    if (layer) {
      layer.addChild(this as KonvaComponent);
      return;
    }

    throw new Error('Groups must be part of a layer.');
  }
}
