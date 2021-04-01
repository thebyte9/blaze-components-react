import { useEffect, useState } from 'react';

export function usePersistedState(key: string, defaultValue: any) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key) || defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

