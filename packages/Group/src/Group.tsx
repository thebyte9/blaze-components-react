import React, { ReactNode } from 'react';

interface IGroupProps {
  children: ReactNode;
}

const Group = ({children}: IGroupProps): JSX.Element => (
  <div className="border-8 border-indigo-600">{children}</div>
)

export default Group;