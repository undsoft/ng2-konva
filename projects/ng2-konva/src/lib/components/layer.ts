import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Layer } from 'konva/lib/Layer';
import { AnyNode, ConfigType } from '../types/supported-nodes';
import { updatePicture } from '../utils/update-picture';
import { KonvaStage } from '../components/stage';

@Component({
  selector: 'ko-layer',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaLayer extends KonvaComponent<Layer> {
  private parentStage = inject(KonvaStage, { optional: true });

  public override readonly config = input<ConfigType<Layer>>();

  createKonvaType(): Layer {
    return new Layer();
  }

  public addChild(node: KonvaComponent): void {
    this.getNode().add(node.getNode());

    // TODO: Something about z-index?

    updatePicture(this.getNode());
  }

  protected override afterCreated(): void {
    const stage = this.parentStage;
    if (stage) {
      stage.addChild(this);
      return;
    }

    throw new Error('Layer must be part of a stage.');
  }
}
