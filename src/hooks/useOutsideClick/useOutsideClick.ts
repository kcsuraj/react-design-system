// Triggers a event when click outside the element. Used to close dropdown when clicked outside dropdown component

import { MouseEvent, RefObject, useEffect } from 'react';

// Hook
const OnOutsideClick = (ref: RefObject<any>, handler: (event: MouseEvent<HTMLElement>) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default OnOutsideClick;
