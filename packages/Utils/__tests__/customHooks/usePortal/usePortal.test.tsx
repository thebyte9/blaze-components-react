import { renderHook } from '@testing-library/react-hooks';
import { usePortal } from '../../../src/customHooks'; 

describe('usePortal Hook', () => {
    it('should append a div element to the document body', () => {
        const { result } = renderHook(() => usePortal());
        const element = result.current;
        expect(document.body.contains(element)).toBe(true);
    });

    it('should remove the div element from the document body when unmounted', () => {
        const { result, unmount } = renderHook(() => usePortal());

        const element = result.current;
        expect(document.body.contains(element)).toBe(true);

        unmount();
        expect(document.body.contains(element)).toBe(false);
    });

    it('should assign the passed id to the div element', () => {
        const id = 'PORTAL-ID';
        const { result } = renderHook(() => usePortal({ id }));

        const element = result.current;
        expect(element.id).toBe(id);
    });

    it('should not assign an id if none is passed', () => {
        const { result } = renderHook(() => usePortal());

        const element = result.current;
        expect(element.id).toBe('');
    });
});