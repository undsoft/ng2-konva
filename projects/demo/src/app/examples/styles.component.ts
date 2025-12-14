import { Component } from '@angular/core';
import { StageConfig } from 'konva/lib/Stage';
import { RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import { KonvaStage, KonvaLayer } from 'ng2-konva';
import { KonvaRegularPolygon } from 'ng2-konva/regular-polygon';

@Component({
  selector: 'app-test',
  template: `
    <ko-regular-polygon
      [config]="configRegularPolygon"
    ></ko-regular-polygon>
  `,
  imports: [KonvaStage, KonvaLayer, KonvaRegularPolygon]
})
export class Test {
  public configRegularPolygon: RegularPolygonConfig = {
    x: 100,
    y: 100,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX: 20,
    shadowOffsetY: 25,
    shadowBlur: 40,
    opacity: 0.5,
  };
}

@Component({
  selector: 'app-styles-example',
  template: `
    <br />
    <section>
      <ko-stage [config]="configStage">
        <ko-layer [config]="{ id: 'layer1' }">
          <app-test></app-test>
        </ko-layer>
      </ko-stage>
      <br />
    </section>
  `,
  imports: [KonvaStage, KonvaLayer, KonvaRegularPolygon, Test]
})
export class StylesExampleComponent {
  public configStage: Partial<StageConfig> = {
    width: 400,
    height: 200,
  };
  public configRegularPolygon: RegularPolygonConfig = {
    x: 100,
    y: 100,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX: 20,
    shadowOffsetY: 25,
    shadowBlur: 40,
    opacity: 0.5,
  };
}
