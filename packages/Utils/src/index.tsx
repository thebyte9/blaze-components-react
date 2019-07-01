import React, { FunctionComponent } from 'react'
import uniqueId from './uniqueId';

export default (ChildComponent: Function) => {
  const ComposedCompoent: FunctionComponent = (props: object): JSX.Element => {
    const utils = {
      uniqueId
    }
    return <ChildComponent utils={utils} {...props}/>
  }
  return ComposedCompoent

}
