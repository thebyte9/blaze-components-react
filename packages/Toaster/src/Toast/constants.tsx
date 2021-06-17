interface IPlacements {
  [index: string]: Record<string, unknown>;
}

const PLACEMENTS = {
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-right': { bottom: 0, right: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-left': { top: 0, left: 0 },
  'top-right': { top: 0, right: 0 },
};

const DEFAULT_AUTO_DISMISS_TIMEOUT = 5000;
const DEFAULT_PLACEMENT = 'top-right';
const DEFAULT_TRANSITION_DURATION = 220;

export { PLACEMENTS, DEFAULT_AUTO_DISMISS_TIMEOUT, DEFAULT_PLACEMENT, DEFAULT_TRANSITION_DURATION, IPlacements };
