import React, { FunctionComponent } from 'react'
import ternary from './ternary';
import uniqueId from './uniqueId';

export default (ChildComponent: any) => {
  const WithUtils: FunctionComponent = (props: object): JSX.Element => {
    const utils = {
      ternary,
      uniqueId
    }
    return <ChildComponent utils={utils} {...props} />
  }
  return WithUtils
}
