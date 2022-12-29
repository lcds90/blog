import * as go from 'gojs';

export class RoundedRectangle {
  private _textSourceProp: string;

  private _colorSourceProp: string;

  private _node: go.Node

  constructor(
    targetText: string,
    targetColor: string,
  ) {
    this._textSourceProp = targetText;
    this._colorSourceProp = targetColor;
    this._node = this.makeNode();
  }

  public get colorSourceProp(): string { return this._colorSourceProp; }

  public get textSourceProp(): string { return this._textSourceProp; }

  public get template(): go.Node { return this._node; }

  private makeNode() {
    const node = new go.Node('Auto');
    const shape = this.makeShape(); // the Shape will go around the TextBlock
    const textBlock = this.makeTextBlock(); // the TextBlock will enclose the text
    node.add(shape);
    node.add(textBlock);
    return node;
  }

  private makeShape() {
    return new go
      .Shape('RoundedRectangle')
      // Shape.fill is bound to Node.data[colorSourceProp]
      .bind('fill', this._colorSourceProp);
  }

  private makeTextBlock() {
    return new go
      .TextBlock({ margin: 8 }) // Specify a margin to add some room around the text
      // TextBlock.text is bound to Node.data[textSourceProp]
      .bind('text', this._textSourceProp);
  }
}
