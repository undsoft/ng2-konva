import { AfterViewInit, Component, viewChild } from '@angular/core';
import { Animation } from 'konva/lib/Animation';
import { ContainerConfig } from 'konva/lib/Container';
import { RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import { IFrame } from 'konva/lib/types';
import { KonvaCoreShape2, KonvaLayer, KonvaStage } from 'ng2-konva';

@Component({
  selector: 'app-animation-example',
  template: `
    <section>
      <ko-stage #stage [config]="configStage">
        <ko-layer #layer>
          <ko-regular-polygon
            #hexagon
            [config]="polygonConfig"
          ></ko-regular-polygon>
        </ko-layer>
      </ko-stage>
    </section>
  `,
  imports: [KonvaStage, KonvaCoreShape2, KonvaLayer]
})
export class AnimationExampleComponent implements AfterViewInit {
  readonly stage = viewChild.required<KonvaStage>('stage');
  readonly layer = viewChild.required<KonvaCoreShape2>('layer');
  readonly hexagon = viewChild.required<KonvaCoreShape2>('hexagon');

  public configStage: ContainerConfig = {
    width: 400,
    height: 200,
  };
  public polygonConfig: RegularPolygonConfig = {
    x: 200,
    y: 100,
    sides: 6,
    radius: 20,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
  };

  ngAfterViewInit(): void {
    const amplitude = 100;
    const period = 5000;
    // in ms
    const centerX = this.stage().getNode().width() / 2;

    const anim = new Animation((frame?: IFrame) => {
      if (!frame) return;
      this.hexagon()
        .getNode()
        .x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
    }, this.layer().getNode());

    anim.start();
  }
}
