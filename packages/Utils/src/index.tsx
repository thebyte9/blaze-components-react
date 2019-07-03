import React, { FunctionComponent } from 'react'
import uniqueId from './uniqueId';

export default (ChildComponent: any) => {
  const ComposedComponent: FunctionComponent = (props: object): JSX.Element => {
    const utils = {
      uniqueId
    }
    return <ChildComponent utils={utils} {...props} />
  }
  return ComposedComponent
}
