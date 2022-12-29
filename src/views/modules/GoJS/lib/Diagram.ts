import * as go from 'gojs';
import clone from 'lodash.clonedeep';

export class Diagram {
  private _diagram: go.Diagram;

  private _config: {
    direction: number;
  }

  private _model: go.GraphLinksModel;

  private _links: go.ObjectData[];

  private _nodes: {
    data: go.ObjectData[],
    templates: go.ObjectData[],
  };

  constructor(
    private diagramEl: HTMLDivElement,
    modelNodeData: go.ObjectData[],
    modelLinkData: go.ObjectData[],
    nodeTemplates: go.ObjectData[],
  ) {
    this._links = clone(modelLinkData);
    this._nodes = {
      data: clone(modelNodeData),
      templates: nodeTemplates,
    };
    this._config = {
      direction: 0,
    };
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
    this._diagram.nodeTemplateMap = this.generateTemplateMaps();
  }

  private createDiagram(): go.Diagram {
    const diagram = new go.Diagram(this.diagramEl.id);
    diagram.layout = this.generateLayout();
    return diagram;
  }

  private createModel(): go.GraphLinksModel {
    const model = new go.GraphLinksModel();
    model.nodeDataArray = this._nodes.data;
    model.linkDataArray = this._links;
    model.nodeKeyProperty = 'key';
    model.nodeCategoryProperty = 'key';
    return model;
  }

  private generateLayout() {
    const layoutConfigs = {
      direction: this._config.direction,
    };

    const layout = new go.LayeredDigraphLayout();
    layout.direction = layoutConfigs.direction;
    layout.packOption = go.LayeredDigraphLayout.PackMedian;
    return layout;
  }

  private generateTemplateMaps() {
    const templateMap = new go.Map<string, go.Node>();

    this._nodes.templates.forEach(({ key, template }) => {
      templateMap.add(key, template);
    });

    return templateMap;
  }
}
