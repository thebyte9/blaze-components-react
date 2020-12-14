declare type TComponent = (...arg: any) => JSX.Element;

interface IReactHtmlParserArgs {
  attribs: any;
  children: JSX.Element | any;
  name: string;
}

interface IParseTextBlock {
  editor: any;
  LinkWrapper?: TComponent;
  useTargetBlank?: boolean;
}

export { IReactHtmlParserArgs, IParseTextBlock };
