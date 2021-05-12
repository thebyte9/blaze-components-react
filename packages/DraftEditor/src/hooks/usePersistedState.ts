import { useEffect, useState } from 'react';

export function usePersistedState(key: string, defaultValue: any): any {
  const [state, setState] = useState(() => {
    try {
      const result = JSON.parse(localStorage.getItem(key) || defaultValue);
      return result;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
