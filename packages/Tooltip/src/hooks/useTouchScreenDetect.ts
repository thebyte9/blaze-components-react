import { useEffect, useState } from "react";

const useTouchScreenDetect = (): boolean => {
  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);

  useEffect(() => {
    const detectTouchScreen = (): boolean =>
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    setIsTouchScreen(detectTouchScreen());
  }, []);

  return isTouchScreen;
};

export default useTouchScreenDetect;
