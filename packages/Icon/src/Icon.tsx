import { IconDisplayType, IconProps } from './types';

import React from 'react';
import { SvgIcon } from './SvgIcon';

export const Icon = ({ display, label, iconOnly, icon }: IconProps): JSX.Element => (
  <div className="flex items-center justify-center">
    {display === IconDisplayType.Left ? (
      <>
        <SvgIcon classes="w-6 h-6 stroke-current fill-current" svg={icon} />
        {!iconOnly && <span className="mx-1">{label ?? 'Blaze'}</span>}
      </>
    ) : (
      <>
        {!iconOnly && <span className="mx-1">{label ?? 'Blaze'}</span>}

        {display !== IconDisplayType.NoIcon && (
          <SvgIcon classes="w-6 h-6 stroke-current fill-current" svg={icon} />
        )}
      </>
    )}
  </div>
);
