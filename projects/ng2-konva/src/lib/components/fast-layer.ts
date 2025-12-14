import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FastLayer } from 'konva/lib/FastLayer';
import { KonvaComponent } from '../types/konva-component';
import { KonvaStage } from '../components/stage';

// TODO: Needs to support children like Layer?
@Component({
  selector: 'ko-fast-layer',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaFastLayer extends KonvaComponent<FastLayer> {
  private parentStage = inject(KonvaStage, { optional: true });

  createKonvaType(): FastLayer {
    return new FastLayer(this.config());
  }

  protected override afterCreated(): void {
    // const stage = this.parentStage;
    // if (stage) {
    //   stage.addChild(this);
    //   return;
    // }
    //
    // throw new Error('Fast layer must be part of a stage.');
  }
}
