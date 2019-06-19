import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Progress = ({ progress, steps, type, onChange }) => {
  const [_progress, setProgress] = useState(progress);

  const handleClick = ({ event, step }) => {
    setProgress(step);
    onChange({ event, step });
  };

  const checkStep = step => {
    if (step === steps.length && step === _progress) return 'final current';
    if (step === _progress) return 'current';
    if (step === steps.length) return 'final';
    if (step <= _progress) return 'visited';
    return '';
  };

  const isTypeCount = type === 'count' ? 'progress-bar__list-item--dots' : '';

  const modifiers = () => {
    const _modifiers = type.split(' ');
    const blockElement = 'progress-bar__list-item--';
    if (!_modifiers.length) return `${blockElement}${type}`;
    return _modifiers.map(modifier => `${blockElement}${modifier}`).join(' ');
  };

  return (
    <nav className="progress-bar">
      <ol className="progress-bar__list">
        {steps.map((text, index) => (
          <li
            key={text}
            className={`progress-bar__list-item ${modifiers()} ${isTypeCount} ${checkStep(
              index + 1
            )}`}>
            <span onClick={event => handleClick({ event, step: index + 1 })} role="button">
              {text}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Progress.propTypes = {
  progress: PropTypes.number,
  type: PropTypes.string,
  steps: PropTypes.array,
  onChange: PropTypes.func
};

Progress.defaultProps = {
  progress: 0,
  type: 'dots',
  steps: [],
  onChange: () => {}
};

export default Progress;
