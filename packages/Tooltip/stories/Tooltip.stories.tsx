import '@blaze-react/blaze-components-theme';
import { storiesOf } from '@storybook/react';
import React from 'react';
import tooltipReadme from '../README.md';
import Tooltip from '../src/Tooltip';

storiesOf('Tooltip', module)
  .addParameters({
    readme: {
      sidebar: tooltipReadme,
    },
  })
  .add('Introduction', () => {
    return (
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>React Tooltip</h2>
        <h4 className="demo-label">Triggered on click</h4>
        <div className="demo">
          <p>
            Tooltip on{' '}
            <Tooltip tooltipContent="tooltip on <em>click</em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus a lacus nec volutpat. Fusce felis est, varius sit amet nibh vitae, bibendum congue lorem. In nec quam quis diam blandit rutrum accumsan at neque. Aliquam lacinia rhoncus sem ullamcorper varius." trigger="click">
              <span className="underline">click</span>
            </Tooltip>
          </p>
        </div>
        <h4 className="demo-label">Triggered on hover</h4>
        <div className="demo">
          <p>
            Tooltip on{' '}
            <Tooltip tooltipContent="tooltip on <em>top</em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus a lacus nec volutpat. Fusce felis est, varius sit amet nibh vitae, bibendum congue lorem. In nec quam quis diam blandit rutrum accumsan at neque. Aliquam lacinia rhoncus sem ullamcorper varius. Morbi non libero augue. Suspendisse non leo pharetra, dictum turpis id, vehicula arcu. Vivamus laoreet nisi vel leo lobortis, in rutrum elit imperdiet. Ut tincidunt dolor ex, feugiat convallis libero vestibulum et.">
              <span className="underline">top</span>
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip position="right" tooltipContent="tooltip on <em>right</em>">
              <span className="underline">right</span>
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip position="bottom" tooltipContent="tooltip on <em>bottom</em>">
              <span className="underline">bottom</span>
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip position="left" tooltipContent="tooltip on <em>left</em>">
              <span className="underline">left</span>
            </Tooltip>
          </p>
        </div>
        <h4 className="demo-label">Custom styles</h4>
        <div className="demo">
          <p>
            Custom tooltip{' '}
            <Tooltip tooltipContent="Custom styles" color="#ffffff" backgroundColor="green">
              <span className="underline">styles</span>
            </Tooltip>
          </p>
          <p>
            Custom tooltip{' '}
            <Tooltip
              tooltipContent="Custom class name"
              color="#000000"
              backgroundColor="#ffffff"
              className="custom-class"
            >
              <span className="underline">class</span>
            </Tooltip>
          </p>
        </div>
        <h4 className="demo-label">Disabled tooltip</h4>
        <div className="demo">
          <p>
            Disabled{' '}
            <Tooltip tooltipContent="Disabled tooltip" disabled>
              <span style={{ opacity: 0.6 }}>tooltip</span>
            </Tooltip>
          </p>
        </div>
        <h4 className="demo-label">No indicator</h4>
        <div className="demo">
          <p>
            No indicator{' '}
            <Tooltip tooltipContent="No indicator" isDisplayTooltipIndicator={false}>
              <span className="underline">top</span>
            </Tooltip>
          </p>
          <p>
            No indicator{' '}
            <Tooltip position="right" tooltipContent="No indicator" isDisplayTooltipIndicator={false}>
              <span className="underline">right</span>
            </Tooltip>
          </p>
          <p>
            No indicator{' '}
            <Tooltip
              position="bottom"
              tooltipContent="No indicator"
              isDisplayTooltipIndicator={false}
            >
              <span className="underline">bottom</span>
            </Tooltip>
          </p>
          <p>
            No indicator{' '}
            <Tooltip position="left" tooltipContent="No indicator" isDisplayTooltipIndicator={false}>
              <span className="underline">left</span>
            </Tooltip>
          </p>
        </div>
      </div>
    );
  });