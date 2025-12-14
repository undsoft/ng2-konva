import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  model,
} from '@angular/core';
import { KonvaComponent } from '../types/konva-component';
import { Stage } from 'konva/lib/Stage';
import { updatePicture } from '../utils/update-picture';
import { KonvaLayer } from '../components/layer';

@Component({
  selector: 'ko-stage',
  template: `<div><ng-content></ng-content></div>`,
})
export class KonvaStage extends KonvaComponent<Stage> {
  private nodeContainer = inject(ElementRef).nativeElement;
  private test = inject(ElementRef);

  createKonvaType(): Stage {
    console.log(this.test);

    return new Stage({
      ...(this.config() || {}),
      container: this.nodeContainer,
    });
  }

  public addChild(node: KonvaLayer): void {
    this.getNode().add(node.getNode());

    // TODO: Something about z-index?

    updatePicture(this.getNode());
  }
}
