const ternary = (condition: any, exprIfTrue: any, exprIfFalse?: any): any =>
  !!condition ? exprIfTrue || "" : exprIfFalse || "";

export default ternary;
