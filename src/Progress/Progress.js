import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Progress = ({
  progress,
  steps,
  type,
  onChange
}) => {
  const [_progress, setProgress] = useState(progress);

  const handleClick = ({ e, i }) => {
    setProgress(i);
    onChange({ e, progress: i });
  };

  const checkStep = (i) => {
    if (i === steps.length && i === _progress) return 'final current';
    if (i === _progress) return 'current';
    if (i === steps.length) return 'final';
    if (i <= _progress) return 'visited';
    return '';
  };

  const isTypeCount = type === 'count' ? 'progress-bar__list-item--dots' : '';

  return (
    <nav className="progress-bar">
      <ol className="progress-bar__list">
        {steps.map((text, i) => (
          <li
          key={text}
          className={`progress-bar__list-item progress-bar__list-item--${type} ${isTypeCount} ${checkStep(i + 1)}`}>
            <span onClick={e => handleClick({ e, i: i + 1 })} role="button">{text}</span>
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
