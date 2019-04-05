import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Progress = ({
  progress,
  steps,
  type,
  onChange
}) => {
  const [_progress, setProgress] = useState(progress);

  const handleClick = ({ e, step }) => {
    setProgress(step);
    onChange({ e, step });
  };

  const checkStep = (step) => {
    if (step === steps.length && step === _progress) return 'final current';
    if (step === _progress) return 'current';
    if (step === steps.length) return 'final';
    if (step <= _progress) return 'visited';
    return '';
  };

  const isTypeCount = type === 'count' ? 'progress-bar__list-item--dots' : '';

  return (
    <nav className="progress-bar">
      <ol className="progress-bar__list">
        {steps.map((text, index) => (
          <li
          key={text}
          className={`progress-bar__list-item progress-bar__list-item--${type} ${isTypeCount} ${checkStep(index + 1)}`}>
            <span onClick={e => handleClick({ e, step: index + 1 })} role="button">{text}</span>
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
