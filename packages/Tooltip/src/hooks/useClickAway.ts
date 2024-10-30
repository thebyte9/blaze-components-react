import { useEffect } from 'react';

const useClickAway = (ref: React.RefObject<HTMLElement>, onOutsideClickCallback: (e: MouseEvent) => void): void => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onOutsideClickCallback(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, onOutsideClickCallback]);
};

export default useClickAway;
