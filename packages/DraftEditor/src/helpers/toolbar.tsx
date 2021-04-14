import React from 'react';
import { componentType, EMPTY_STRING, NEW_LINE } from '../constants';

interface IToolbarSave {
  type: string;
  quantity?: number;
  component: any;
  selectedComponents: any;
  onCreateComponent: any;
  setIsOpen: (value: boolean) => void;
  getComponentTemplate?: any;
}

const save = ({ type, quantity, component, selectedComponents, onCreateComponent, setIsOpen, getComponentTemplate }: IToolbarSave) => {
  if (type === componentType.COLUMN && quantity) {
    const columns = component.items.filter((item: any) => item.type === componentType.COLUMN);

    if (columns.length > 0) {
      const newRow = getComponentTemplate({ type: componentType.ROW });
      for (let i = 1; i <= quantity; i += 1) {
        const template = getComponentTemplate({ type });
        newRow.items.push(template);
      }
      component.items.push(newRow);
    } else {
      for (let i = 1; i <= quantity; i += 1) {
        const template = getComponentTemplate({ type });
        component.items.push(template);
      }
    }
  } else {
    const template = getComponentTemplate({ type });
    component.items.push(template);
  }
  onCreateComponent(selectedComponents);
  setIsOpen(false);
};

const doesParentHasTextblock = (parent: any) => {
  if (parent && parent.items && parent.items.length > 0) {
    return parent.items.filter(
      (child: any) => child.type === componentType.TEXT && child.settings.editor === undefined
    );
  }
  return -1;
};

interface ICreate {
  type: string;
  textBlockRef: any;
  component: any;
  selectedComponents: any;
  onCreateComponent: any;
  setIsOpen: (value: boolean) => void;
  quantity?: number;
  parent: any;
  activeTooltip?: boolean;
  setActiveTooltip: (tooltip: string) => void;
}

const handleCreate = ({
  type,
  textBlockRef,
  component,
  selectedComponents,
  onCreateComponent,
  setIsOpen,
  quantity,
  parent
}: ICreate) => {
  let parentHasTextblock = false;

  if (!parent && component.type === componentType.ROW) {
    parentHasTextblock = doesParentHasTextblock(component);
  } else {
    parentHasTextblock = doesParentHasTextblock(parent);
  }

  const existAndEmptyString =
    type === componentType.TEXT &&
    textBlockRef &&
    textBlockRef.current &&
    textBlockRef.current.editor.editor.innerText === EMPTY_STRING;

  const existAndNewLine =
    type === componentType.TEXT &&
    textBlockRef &&
    textBlockRef.current &&
    textBlockRef.current.editor.editor.innerText === NEW_LINE;

  const exist = (existAndEmptyString || existAndNewLine) && parentHasTextblock;

  if (exist) {
    const { editor = null } = textBlockRef.current;

    if (editor) {
      editor.focus();
    }
  } else {
    save({
      type,
      quantity,
      component,
      selectedComponents,
      onCreateComponent,
      setIsOpen
    });
  }
};

interface IGenerateRibbon {
  activeTooltip: boolean;
  setActiveTooltip: (tooltip: string) => void;
  textBlockRef: any;
  component: any;
  selectedComponents: any;
  onCreateComponent: any;
  setIsOpen: (open: boolean) => void;
  parent: true;
  pageBuilderArray: any;
}

const generateRibbon = ({
  activeTooltip,
  setActiveTooltip,
  textBlockRef,
  component,
  selectedComponents,
  onCreateComponent,
  setIsOpen,
  parent,
  pageBuilderArray
}: IGenerateRibbon) => {
  return pageBuilderArray
    .filter((pbComponent: any) => pbComponent.toolbarOrder)
    .sort((a: any, b: any) => (a.toolbarOrder > b.toolbarOrder ? 1 : -1))
    .map((pbComponent: any) => {
      const {
        icon,
        name,
        type,
        settings: { canShowInEditorView = false }
      } = pbComponent;

      const faIcon = `${icon} fa-lg`;

      if (
        canShowInEditorView &&
        type !== componentType.ROW &&
        type !== componentType.COLUMN &&
        type !== componentType.MODAL
      ) {
        return (
          <div
            className="editor-view__toolbar--item"
            role="button"
            data-testid={name}
            aria-label={name}
            onMouseEnter={() => {
              setActiveTooltip(name);
            }}
            onClick={() =>
              handleCreate({
                type,
                activeTooltip,
                setActiveTooltip,
                textBlockRef,
                component,
                selectedComponents,
                onCreateComponent,
                setIsOpen,
                parent
              })
            }>
            {activeTooltip === name && (
              <div className="editor-view__toolbar--tooltip">
                <div className="editor-view__toolbar--tooltip__text">{name}</div>
              </div>
            )}
            <i className={faIcon} />
          </div>
        );
      }

      return null;
    });
};

export { generateRibbon, handleCreate };
