import { useEffect, useRef } from 'react';

interface UsePortalProps {
    id?: string;
}

function usePortal({ id }: UsePortalProps = {}): HTMLDivElement {
    const rootElemRef = useRef<HTMLDivElement>(document.createElement('div'));

    useEffect(() => {
        const element = rootElemRef.current;
        if (id) {
            element.id = id;
        }
        document.body.appendChild(element);

        return () => {
            element.remove();
        };
    }, [id]);

    return rootElemRef.current;
}

export default usePortal;