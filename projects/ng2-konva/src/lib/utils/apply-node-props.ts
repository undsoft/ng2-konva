// adapted FROM: https://github.com/lavrton/react-konva/blob/master/src/react-konva-fiber.js

import { KonvaComponent } from '../types/konva-component';
import { KonvaEvent } from '../types/konva-event-object';
import { AnyNode } from '../types/supported-nodes';
import { KonvaEventObject } from 'konva/lib/Node';
import { Listener, PropsType } from '../types/props-types';
import { updatePicture } from '../utils/update-picture';

export function applyNodeProps<
  NodeType extends AnyNode = AnyNode,
>(
  component: KonvaComponent<NodeType>,
  props: PropsType = {},
  oldProps: PropsType = {},
): void {
  if ('id' in props) {
    const message = `ng2-konva: You are using "id" attribute for Konva node. In some very rare cases it may produce bugs. Currently we recommend not to use it and use "name" attribute instead.`;
    console.warn(message);
  }

  const instance = component.getNode();
  const updatedProps: PropsType = {};
  let hasUpdates = false;

  Object.keys(oldProps).forEach((key) => {
    const isEvent = key.slice(0, 2) === 'on';
    const propChanged = oldProps[key] !== props[key];
    if (isEvent && propChanged) {
      let eventName = key.slice(2).toLowerCase();
      if (eventName.slice(0, 7) === 'content') {
        eventName =
          'content' + eventName.slice(7, 8).toUpperCase() + eventName.slice(8);
      }
      instance.off(eventName, oldProps[key] as Listener);
    }
    const toRemove = !Object.hasOwn(props, key);
    if (toRemove) {
      instance.setAttr(key, undefined);
    }
  });
  Object.keys(props).forEach((key) => {
    const isEvent = key.slice(0, 2) === 'on';
    const toAdd = oldProps[key] !== props[key];
    if (isEvent && toAdd) {
      let eventName = key.slice(2).toLowerCase();
      if (eventName.slice(0, 7) === 'content') {
        eventName =
          'content' + eventName.slice(7, 8).toUpperCase() + eventName.slice(8);
      }
      if (props[key]) {
        instance.off(eventName);
        instance.on(eventName, (event: KonvaEventObject<unknown>) => {
          (props[key] as Listener)({
            angularComponent: component,
            event,
          } as KonvaEvent<unknown>);
        });
      }
    }
    if (
      !isEvent &&
      (props[key] !== oldProps[key] || props[key] !== instance.getAttr(key))
    ) {
      hasUpdates = true;
      updatedProps[key] = props[key];
    }
  });

  if (hasUpdates) {
    instance.setAttrs(updatedProps);
    updatePicture(instance);
    let val;
    Object.keys(updatedProps).forEach((prop) => {
      val = updatedProps[prop];
      if (val instanceof Image && !val.complete) {
        const node = instance;
        val.addEventListener('load', function () {
          const layer = node.getLayer();
          if (layer) {
            layer.batchDraw();
          }
        });
      }
    });
  }
}
