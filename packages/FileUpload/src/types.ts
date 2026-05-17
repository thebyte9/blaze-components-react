import React from 'react';

export interface IFileUploadCustomFieldContext {
  data: any | null;
  file: any;
  index: number;
  name: string;
  selectOptions: any[];
  storeKey: string;
}

export interface IFileUploadCustomField {
  component: React.ComponentType<any>;
  name: string;
  label?: React.ReactNode;
  copyEnabled?: boolean;
  copyKey?: string;
  id?: string;
  isVisible?: (context: IFileUploadCustomFieldContext) => boolean;
  buildProps?: (context: IFileUploadCustomFieldContext) => Record<string, any>;
  props?: Record<string, any>;
}
