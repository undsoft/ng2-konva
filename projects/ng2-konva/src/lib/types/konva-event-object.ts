import { KonvaComponent } from '../types/konva-component';
import { KonvaEventObject } from 'konva/lib/Node';
import { AnyNode } from '../types/supported-nodes';

// TODO: Better name
export interface KonvaEvent<
  Event,
  NodeType extends AnyNode = AnyNode,
> {
  angularComponent: KonvaComponent<NodeType>;
  event: KonvaEventObject<Event>;
}
