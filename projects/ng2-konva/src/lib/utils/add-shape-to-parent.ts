import { inject } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { KonvaLayer } from '../components/layer';
import { KonvaGroup } from '../components/group';

/**
 * Creates a function that adds a shape to its parent layer or group
 */
export function addShapeToParent(component: KonvaComponent): () => void {
  const group = inject(KonvaGroup, { optional: true });
  const layer = inject(KonvaLayer, { optional: true });

  return function (this: KonvaComponent) {
    if (group) {
      group.addChild(component);
      return;
    }

    if (layer) {
      layer.addChild(component);
      return;
    }

    const node = component.getNode();
    throw new Error(
      `Orphan node ${node.toJSON()} not part of a group or a layer`,
    );
  };
}
