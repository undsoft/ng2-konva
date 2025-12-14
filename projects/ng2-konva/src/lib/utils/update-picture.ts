// adapted FROM: https://github.com/lavrton/react-konva/blob/master/src/react-konva-fiber.js
import { Node } from 'konva/lib/Node';

export function updatePicture(node: Node): void {
  const drawingNode = node.getLayer() || node.getStage();
  if (drawingNode) {
    drawingNode.batchDraw();
  }
}
