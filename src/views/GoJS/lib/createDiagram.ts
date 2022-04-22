import * as go from 'gojs';

class createDiagram {
  private _diagram: go.Diagram;

  private _model: go.GraphLinksModel;

  constructor(
    private diagramEl: HTMLDivElement,
    private modelNodeData: go.ObjectData[],
    private modelLinkData: go.ObjectData[],
  ) {
    const newDiagram = this.createDiagram();
    const newModel = this.createModel();
    this._diagram = newDiagram;
    this._model = newModel;
  }

  public get diagram(): go.Diagram {
    return this._diagram;
  }

  public get model(): go.GraphLinksModel {
    return this._model;
  }

  private createDiagram(): go.Diagram {
    const diagram = new go.Diagram(this.diagramEl);

    return diagram;
  }

  private createModel(): go.GraphLinksModel {
    const model = new go.GraphLinksModel();
    model.linkDataArray = this.modelLinkData;
    model.nodeDataArray = this.modelNodeData;
    return model;
  }
}

export default createDiagram;
