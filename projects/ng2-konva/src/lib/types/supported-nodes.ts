import type { Arc, ArcConfig } from 'konva/lib/shapes/Arc';
import type { Arrow, ArrowConfig } from 'konva/lib/shapes/Arrow';
import type { Circle, CircleConfig } from 'konva/lib/shapes/Circle';
import type { Ellipse, EllipseConfig } from 'konva/lib/shapes/Ellipse';
import type { FastLayer } from 'konva/lib/FastLayer';
import type { Group } from 'konva/lib/Group';
import type { Image, ImageConfig } from 'konva/lib/shapes/Image';
import type { Label, LabelConfig, Tag, TagConfig } from 'konva/lib/shapes/Label';
import type { Layer } from 'konva/lib/Layer';
import type { Line, LineConfig } from 'konva/lib/shapes/Line';
import type { Path, PathConfig } from 'konva/lib/shapes/Path';
import type { Rect, RectConfig } from 'konva/lib/shapes/Rect';
import type { RegularPolygon, RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import type { Ring, RingConfig } from 'konva/lib/shapes/Ring';
import type { Shape, ShapeConfig } from 'konva/lib/Shape';
import type { Sprite, SpriteConfig } from 'konva/lib/shapes/Sprite';
import type { Star, StarConfig } from 'konva/lib/shapes/Star';
import type { Text, TextConfig } from 'konva/lib/shapes/Text';
import type { TextPath, TextPathConfig } from 'konva/lib/shapes/TextPath';
import type { Transformer, TransformerConfig } from 'konva/lib/shapes/Transformer';
import type { Wedge, WedgeConfig } from 'konva/lib/shapes/Wedge';
import { Stage } from 'konva/lib/Stage';

// export type AnyShape =
//   | typeof Arc
//   | typeof Arrow
//   | typeof Circle
//   | typeof Ellipse
//   | typeof Image
//   | typeof Label
//   | typeof Tag
//   | typeof Line
//   | typeof Path
//   | typeof Rect
//   | typeof RegularPolygon
//   | typeof Ring
//   | typeof Star
//   | typeof Text
//   | typeof TextPath
//   | typeof Transformer
//   | typeof Wedge
//   | typeof Shape
//   | typeof Sprite;
//
// export type AnyNode = AnyShape | typeof Group | typeof Layer | typeof FastLayer;
//
// export type ConfigType<T extends AnyNode> = ConstructorParameters<T>[0];

export type AnyShape =
  | Arc
  | Arrow
  | Circle
  | Ellipse
  | Image
  | Label
  | Tag
  | Line
  | Path
  | Rect
  | RegularPolygon
  | Ring
  | Star
  | Text
  | TextPath
  | Transformer
  | Wedge
  | Shape
  | Sprite;

export type AnyNode =
  | AnyShape
  | Group
  | Layer
  | FastLayer;

export interface NodeConstructors {
  Arc: typeof Arc;
  Arrow: typeof Arrow;
  Circle: typeof Circle;
  Ellipse: typeof Ellipse;
  Image: typeof Image;
  Label: typeof Label;
  Tag: typeof Tag;
  Line: typeof Line;
  Path: typeof Path;
  Rect: typeof Rect;
  RegularPolygon: typeof RegularPolygon;
  Ring: typeof Ring;
  Star: typeof Star;
  Text: typeof Text;
  TextPath: typeof TextPath;
  Transformer: typeof Transformer;
  Wedge: typeof Wedge;
  Shape: typeof Shape;
  Sprite: typeof Sprite;
  Group: typeof Group;
  Layer: typeof Layer;
  FastLayer: typeof FastLayer;
  Stage: typeof Stage;
}

// TODO: Find some utility type?
export type NodeConstructor<T extends AnyNode> =
  T extends infer N
    ? {
      [K in keyof NodeConstructors]:
      InstanceType<NodeConstructors[K]> extends N ? NodeConstructors[K] : never
    }[keyof NodeConstructors]
    : never;

// export type NodeConstructor<T extends AnyNode> =
//   Extract<NodeConstructors[keyof NodeConstructors], { new (...args: any[]): T }>;

// real config type
export type ConfigType<T extends AnyNode> =
  ConstructorParameters<NodeConstructor<T>>[0];
