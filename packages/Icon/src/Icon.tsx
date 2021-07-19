import React from 'react';
import { CustomIcon } from './CustomIcon';
import { IconDisplayType, IconProps } from './types';

export const Icon = ({ display, label, iconOnly, icon }: IconProps): JSX.Element => (
  <div className="flex items-center justify-center">
    {display === IconDisplayType.Left ? (
      <>
        <CustomIcon utilities="w-6 h-6 stroke-current fill-current" content={icon} />
        {!iconOnly && <span className="mx-1">{label ?? 'Blaze'}</span>}
      </>
    ) : (
      <>
        {!iconOnly && <span className="mx-1">{label ?? 'Blaze'}</span>}

        {display !== IconDisplayType.NoIcon && (
          <CustomIcon utilities="w-6 h-6 stroke-current fill-current" content={icon} />
        )}
      </>
    )}
  </div>
);
