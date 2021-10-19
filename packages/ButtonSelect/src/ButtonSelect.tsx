import { ButtonView } from '@blaze-react/button';
import React, { FunctionComponent, useState } from 'react';

const menuStyles = {
  top: '100%',
  width: '100%',
};

interface IButtonSelectProps {
  text?: string;
  children?: unknown;
  Attr?: unknown;
}

const ButtonSelect: FunctionComponent<IButtonSelectProps> = ({ text, children, ...Attr }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="more-menu__wrapper">
      <ButtonView
        modifiers={['full-width']}
        onClick={(): void => setToggled(!toggled)}
        {...Attr}
        data-testid="button-select-toggle"
      >
        <>
          <i className="material-icons">{`keyboard_arrow_${toggled ? 'up' : 'down'}`}</i>
          {text}
        </>
      </ButtonView>

      {toggled && (
        <div className="more-menu--open" style={menuStyles}>
          {children}
        </div>
      )}
    </div>
  );
};

ButtonSelect.defaultProps = {
  children: 'No content',
  text: 'Actions',
};

export default ButtonSelect;
