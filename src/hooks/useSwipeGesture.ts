import { useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

interface SwipeHandlers {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeDown?: () => void;
}

interface SwipeBindings {
    onPointerDown: (e: ReactPointerEvent) => void;
    onPointerMove: (e: ReactPointerEvent) => void;
    onPointerUp: (e: ReactPointerEvent) => void;
    onPointerCancel: (e: ReactPointerEvent) => void;
}

const THRESHOLD = 50;
const MAX_OFF_AXIS = 80;

export function useSwipeGesture(handlers: SwipeHandlers): SwipeBindings {
    const start = useRef<{ x: number; y: number; id: number } | null>(null);

    const reset = () => {
        start.current = null;
    };

    return {
        onPointerDown: (e) => {
            if (e.pointerType === 'mouse') return;
            start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
        },
        onPointerMove: () => {
            // no-op; reserved for future haptic/visual feedback
        },
        onPointerUp: (e) => {
            const s = start.current;
            if (!s || s.id !== e.pointerId) {
                reset();
                return;
            }
            const dx = e.clientX - s.x;
            const dy = e.clientY - s.y;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);

            if (absX > THRESHOLD && absY < MAX_OFF_AXIS) {
                if (dx < 0) handlers.onSwipeLeft?.();
                else handlers.onSwipeRight?.();
            } else if (dy > THRESHOLD && absX < MAX_OFF_AXIS) {
                handlers.onSwipeDown?.();
            }
            reset();
        },
        onPointerCancel: reset,
    };
}
