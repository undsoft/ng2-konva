import { OutputEmitterRef } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';

import { ListenerRecord } from '../types/props-types';
import { AnyNode } from '../types/supported-nodes';

export function createListener<
  NodeType extends AnyNode = AnyNode,
>(instance: KonvaComponent<NodeType>): ListenerRecord {
  const output: ListenerRecord = {};
  [
    'mouseover',
    'mousemove',
    'mouseout',
    'mouseenter',
    'mouseleave',
    'mousedown',
    'mouseup',
    'wheel',
    'contextmenu',
    'click',
    'dblclick',
    'touchstart',
    'touchmove',
    'touchend',
    'tap',
    'dbltap',
    'dragstart',
    'dragmove',
    'dragend',
    'transformstart',
    'transform',
    'transformend',
  ].forEach((eventName) => {
    const name: keyof KonvaComponent = <keyof KonvaComponent>eventName;

    const outputEmitter: OutputEmitterRef<unknown> = <
      OutputEmitterRef<unknown>
    >instance[name];
    if (outputEmitter['listeners']?.length > 0) {
      output['on' + eventName] = outputEmitter.emit.bind(outputEmitter);
    }
  });
  return output;
}
