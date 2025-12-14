/* eslint-disable @angular-eslint/no-output-native */
import {
  Component,
  inject, input,
  model,
  OnDestroy,
  output,
  forwardRef, effect, AfterViewInit

} from '@angular/core';
import {
  AnyShape, ConfigType,
  AnyNode,
} from '../types/supported-nodes';
import {
  createListener,
} from '../utils/create-listener';
import { KonvaEvent } from '../types/konva-event-object';
import { ListenerRecord } from '../types/props-types';
import { applyNodeProps } from '../utils/apply-node-props';

@Component({
  template: ''
})
export abstract class KonvaComponent<NodeType extends AnyNode = AnyNode> implements AfterViewInit, OnDestroy
{
  protected node: NodeType;
  public readonly config = input<ConfigType<NodeType>>();

  private cachedProps = {} as ConfigType<NodeType> & ListenerRecord;

  readonly mouseover = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mousemove = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mouseout = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mouseenter = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mouseleave = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mousedown = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly mouseup = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly wheel = output<KonvaEvent<WheelEvent, NodeType>>();
  readonly contextmenu = output<KonvaEvent<PointerEvent, NodeType>>();
  readonly click = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly dblclick = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly touchstart = output<KonvaEvent<TouchEvent, NodeType>>();
  readonly touchmove = output<KonvaEvent<TouchEvent, NodeType>>();
  readonly touchend = output<KonvaEvent<TouchEvent, NodeType>>();
  readonly tap = output<KonvaEvent<TouchEvent, NodeType>>();
  readonly dbltap = output<KonvaEvent<TouchEvent, NodeType>>();
  readonly dragstart = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly dragmove = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly dragend = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly transformstart = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly transform = output<KonvaEvent<MouseEvent, NodeType>>();
  readonly transformend = output<KonvaEvent<MouseEvent, NodeType>>();

  abstract createKonvaType(): NodeType;

  protected afterCreated?(): void;

  ngAfterViewInit(): void {
    this.initKonva();
  }

  getNode(): NodeType {
    return this.node;
  }

  protected initKonva(): void {
    this.node = this.createKonvaType();

    const config = this.config();
    if (config) {
      this.updateKonva(config);
    }

    setTimeout(() => {
      this.afterCreated?.();
    });
  }

  protected updateKonva(config: ConfigType<NodeType>): void {
    if (!this.node) return;
    const props = {
      ...config,
      ...createListener(this),
    };
    applyNodeProps(this, props, this.cachedProps);
    this.cachedProps = props;
  }

  // TODO: Review/rework
  #onConfigChange = effect(() => {
    // const config = this.config();
    // if (!config) return;
    // if (!this.node) {
    //   this.initKonva();
    // }
    //
    // this.updateKonva(config);
  });

  ngOnDestroy(): void {
    this.node.destroy();
  }
}
