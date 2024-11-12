import { useEffect, useRef } from 'react';

interface UsePortalProps {
    id?: string;
    condition?: boolean
}

function usePortal({ id, condition = true }: UsePortalProps = {}): HTMLDivElement {
    const rootElemRef = useRef<HTMLDivElement>(document.createElement('div'));

    useEffect(() => {
        const element = rootElemRef.current;
        if (id) {
            element.id = id;
        }
        
        condition && document.body.appendChild(element);

        return () => {
            element.remove();
        };
    }, [id, condition]);

    return rootElemRef.current;
}

export default usePortal;