import * as go from 'gojs';
import clone from 'lodash.clonedeep';
import RoundedRectangle from './generators/RoundedRectangle';

class createDiagram {
  private _diagram: go.Diagram;

  private _model: go.GraphLinksModel;

  private _links: go.ObjectData[];

  private _nodes: go.ObjectData[];

  constructor(
    private diagramEl: HTMLDivElement,
    modelNodeData: go.ObjectData[],
    modelLinkData: go.ObjectData[],
  ) {
    this._links = clone(modelLinkData);
    this._nodes = clone(modelNodeData);
    const newDiagram = this.createDiagram();
    const newModel = this.createModel();
    this._diagram = newDiagram;
    this._diagram.model = newModel;
    this._model = newModel;
    this.addConfigs();
  }

  public get diagram(): go.Diagram {
    return this._diagram;
  }

  public get model(): go.GraphLinksModel {
    return this._model;
  }

  private addConfigs() {
    this._diagram.addDiagramListener('InitialLayoutCompleted', (e) => {
      this._diagram.zoomToFit();
    });
    const nodeTemplate = new RoundedRectangle('key', 'color');
    this._diagram.nodeTemplate = nodeTemplate.template;
  }

  private createDiagram(): go.Diagram {
    const diagram = new go.Diagram(this.diagramEl.id);
    diagram.layout = this.generateLayout();
    return diagram;
  }

  private createModel(): go.GraphLinksModel {
    const model = new go.GraphLinksModel();
    model.nodeDataArray = this._nodes;
    model.linkDataArray = this._links;
    model.nodeKeyProperty = 'key';
    model.nodeCategoryProperty = 'type';
    return model;
  }

  private generateLayout() {
    console.log(this._diagram);
    const layoutConfigs = {
      direction: 0,
    };

    const layout = new go.LayeredDigraphLayout();
    layout.direction = layoutConfigs.direction;
    layout.packOption = go.LayeredDigraphLayout.PackMedian;
    return layout;
  }
}

export default createDiagram;
