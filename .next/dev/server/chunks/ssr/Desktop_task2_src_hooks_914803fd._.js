module.exports = [
"[project]/Desktop/task2/src/hooks/use-analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnalytics",
    ()=>useAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
class Analytics {
    events = [];
    isEnabled;
    constructor(){
        this.isEnabled = ("TURBOPACK compile-time value", "development") === "production" || process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
    }
    track(event) {
        if (!this.isEnabled) {
            // In development, just log to console
            // console.log("Analytics Event:", event);
            return;
        }
        // Add timestamp if not provided
        if (!event.timestamp) {
            event.timestamp = Date.now();
        }
        this.events.push(event);
        // In production, you would send this to your analytics service
        // Example: Google Analytics, Mixpanel, etc.
        this.sendToAnalyticsService(event);
    }
    sendToAnalyticsService(event) {
        // Example implementation for Google Analytics 4
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Example implementation for Mixpanel
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Example implementation for custom analytics endpoint
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
            fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            }).catch((error)=>{
                console.error("Failed to send analytics event:", error);
            });
        }
    }
    getEvents() {
        return [
            ...this.events
        ];
    }
    clearEvents() {
        this.events = [];
    }
}
// Global analytics instance
const analytics = new Analytics();
function useAnalytics() {
    const trackNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((from, to, method = "click")=>{
        analytics.track({
            event: "navigation",
            properties: {
                from,
                to,
                method
            }
        });
    }, []);
    const trackButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((button, location, action)=>{
        analytics.track({
            event: "button_click",
            properties: {
                button,
                location,
                action
            }
        });
    }, []);
    const trackCustomEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, properties)=>{
        analytics.track({
            event,
            properties
        });
    }, []);
    return {
        trackNavigation,
        trackButtonClick,
        trackCustomEvent,
        getEvents: analytics.getEvents.bind(analytics),
        clearEvents: analytics.clearEvents.bind(analytics)
    };
}
}),
"[project]/Desktop/task2/src/hooks/use-active-section.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveSection",
    ()=>useActiveSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useActiveSection(sectionIds, offset = 100) {
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const viewportTop = scrollPosition;
            const viewportBottom = scrollPosition + windowHeight;
            const viewportCenter = scrollPosition + windowHeight / 2;
            // Find which section is most prominently visible in the viewport
            let bestSection = '';
            let bestScore = -1;
            for(let i = 0; i < sectionIds.length; i++){
                const sectionId = sectionIds[i];
                const element = document.getElementById(sectionId);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    const elementCenter = elementTop + element.offsetHeight / 2;
                    // Calculate how much of this section is visible in the viewport
                    const visibleTop = Math.max(elementTop, viewportTop);
                    const visibleBottom = Math.min(elementBottom, viewportBottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                    // Calculate a score based on visibility and proximity to viewport center
                    const visibilityRatio = visibleHeight / element.offsetHeight;
                    const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
                    const score = visibilityRatio - distanceFromCenter / windowHeight * 0.1;
                    if (score > bestScore) {
                        bestScore = score;
                        bestSection = sectionId;
                    }
                }
            }
            // Only set active section if we found a section with reasonable visibility
            if (bestScore > 0.1) {
                setActiveSection(bestSection);
            }
        };
        // Initial check
        handleScroll();
        // Add scroll listener with throttling
        let ticking = false;
        const throttledHandleScroll = ()=>{
            if (!ticking) {
                requestAnimationFrame(()=>{
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', throttledHandleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [
        sectionIds,
        offset
    ]);
    return activeSection;
}
}),
"[project]/Desktop/task2/src/hooks/useModalScrollLock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceRestoreScroll",
    ()=>forceRestoreScroll,
    "useModalScrollLock",
    ()=>useModalScrollLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
// Global counter to track how many modals are open
let modalCount = 0;
let originalBodyStyle = '';
function useModalScrollLock(isOpen) {
    const isLockedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && !isLockedRef.current) {
            // Store original body style only once
            if (modalCount === 0) {
                originalBodyStyle = document.body.style.overflow || '';
            }
            // Increment modal count and lock scroll
            modalCount++;
            document.body.style.overflow = 'hidden';
            isLockedRef.current = true;
        } else if (!isOpen && isLockedRef.current) {
            // Decrement modal count
            modalCount--;
            isLockedRef.current = false;
            // Only restore scroll when all modals are closed
            if (modalCount <= 0) {
                modalCount = 0; // Ensure it doesn't go negative
                document.body.style.overflow = originalBodyStyle;
                originalBodyStyle = ''; // Reset for next time
            }
        }
        // Cleanup function to ensure proper restoration
        return ()=>{
            if (isLockedRef.current) {
                modalCount--;
                isLockedRef.current = false;
                if (modalCount <= 0) {
                    modalCount = 0;
                    document.body.style.overflow = originalBodyStyle;
                    originalBodyStyle = '';
                }
            }
        };
    }, [
        isOpen
    ]);
}
function forceRestoreScroll() {
    modalCount = 0;
    document.body.style.overflow = originalBodyStyle;
    originalBodyStyle = '';
}
}),
"[project]/Desktop/task2/src/hooks/useTokenValidation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTokenValidation",
    ()=>useTokenValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/slices/userSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/jwt-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const useTokenValidation = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const checkTokenExpiration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return;
        }
        // Check if token is expired
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenExpired"])(token)) {
            console.log('Token expired, logging out user');
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearUser"])());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
            showNotification('Token expired. Please login again.', 'error');
            return;
        }
        // Check if token is expiring soon (within 1 hour)
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenExpiringSoon"])(token, 60)) {
            console.log('Token expiring soon, showing warning to user');
        // You can show a notification to the user here
        // For now, we'll just log it
        }
    }, [
        dispatch,
        showNotification
    ]);
    const validateTokenWithServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false;
        }
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.AUTH.VALIDATE_TOKEN), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token
                })
            });
            // Handle 401 Unauthorized (user deleted or token invalid)
            if (response.status === 401) {
                console.log('Server returned 401 - user deleted or token invalid, logging out user');
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearUser"])());
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
                showNotification('Session expired. Please login again.', 'error');
                return false;
            }
            const data = await response.json();
            if (!data.success) {
                console.log('Server validation failed, logging out user');
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearUser"])());
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
                showNotification('Token expired. Please login again.', 'error');
                return false;
            }
            return true;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    }, [
        dispatch,
        showNotification
    ]);
    // Check token expiration on mount and every 5 minutes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkTokenExpiration();
        const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000); // 5 minutes
        return ()=>clearInterval(interval);
    }, [
        checkTokenExpiration
    ]);
    // Validate token with server on mount (only if token exists)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem('accessToken');
        if (token) {
            validateTokenWithServer();
        }
    }, [
        validateTokenWithServer
    ]);
    return {
        checkTokenExpiration,
        validateTokenWithServer
    };
};
}),
"[project]/Desktop/task2/src/hooks/useAuthErrorHandler.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthErrorHandler",
    ()=>useAuthErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/slices/userSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/jwt-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useAuthErrorHandler() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Create a global fetch interceptor
        const originalFetch = window.fetch;
        window.fetch = async (...args)=>{
            try {
                const response = await originalFetch(...args);
                // Check if response is 401 (Unauthorized)
                if (response.status === 401) {
                    const responseData = await response.clone().json().catch(()=>({}));
                    // Check if it's a token-related error
                    if (responseData.message?.includes('token') || responseData.message?.includes('unauthorized') || responseData.message?.includes('expired')) {
                        // Safeguard: only force logout if the client-side token is missing or actually expired
                        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                        const shouldLogout = !token || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenExpired"])(token);
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.log('🔐 Auth Error Handler: Token expired or invalid, logging out user');
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearUser"])());
                            // Check if we're on a protected page - if so, don't show toast (ProtectedRoute will handle it)
                            const currentPath = window.location.pathname;
                            const isProtectedPage = currentPath.includes('/create-video') || currentPath.includes('/account') || currentPath.includes('/gallery') || currentPath.includes('/report-analytics') || currentPath.includes('/scheduled-post');
                            // Never show toast for protected pages - ProtectedRoute handles it
                            if (!isProtectedPage) {
                                // Only show toast for API calls on non-protected pages
                                showNotification('Unauthorized access', 'error');
                            }
                            return new Response(JSON.stringify({
                                success: false,
                                message: 'Authentication failed'
                            }), {
                                status: 401,
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                        }
                        //TURBOPACK unreachable
                        ;
                    }
                }
                // Check for network errors (status 0 or failed fetch)
                if (response.status === 0 || !response.ok) {
                    console.log('🔐 Auth Error Handler: Network error detected, not clearing user data');
                    // Don't clear user data on network errors - might be temporary
                    return response;
                }
                return response;
            } catch (error) {
                console.error('Fetch interceptor error:', error);
                return originalFetch(...args);
            }
        };
        // Cleanup function
        return ()=>{
            window.fetch = originalFetch;
        };
    }, [
        dispatch,
        showNotification
    ]);
}
}),
"[project]/Desktop/task2/src/hooks/useDeploymentReload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeploymentReload",
    ()=>useDeploymentReload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useDeploymentReload = ()=>{
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastDeploymentIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const checkIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const broadcastChannelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isReloadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run in browser environment
        if ("TURBOPACK compile-time truthy", 1) {
            console.log('🔄 Deployment reload: Skipping (server-side)');
            return;
        }
        //TURBOPACK unreachable
        ;
        // Only run in production (Vercel deployments)
        const isProduction = undefined;
        // Function to check for new deployments
        const checkDeployment = undefined;
        const initialTimeout = undefined; // Wait 5 seconds after page load
        // Also check when page becomes visible (user returns to tab)
        const handleVisibilityChange = undefined;
    }, []);
    return {
        isChecking
    };
};
}),
"[project]/Desktop/task2/src/hooks/useUnifiedSocket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUnifiedSocket",
    ()=>useUnifiedSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const PENDING_VIDEOS_KEY = 'pendingVideos';
const useUnifiedSocket = (userId)=>{
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUpdates, setVideoUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [avatarUpdates, setAvatarUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [videoAvatarUpdates, setVideoAvatarUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scheduleUpdates, setScheduleUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingVideos, setPendingVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    // Track processed events to prevent duplicates
    const processedEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const socketConnectedHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track if we've synced with DB to avoid duplicate syncing
    const hasSyncedWithDB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track if we should skip saving to localStorage (to prevent overwriting after DB sync)
    const skipSaveToLocalStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track failed videos to avoid duplicate notifications
    const notifiedFailedVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track completed videos to avoid duplicate notifications
    const notifiedCompletedVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const clearVideoUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setVideoUpdates([]);
    }, []);
    const clearCompletedVideoUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setVideoUpdates((prev)=>prev.filter((update)=>update.status !== 'completed' && update.status !== 'success' && update.status !== 'failed'));
    }, []);
    const clearAvatarUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setAvatarUpdates([]);
    }, []);
    const clearVideoAvatarUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setVideoAvatarUpdates([]);
    }, []);
    const clearScheduleUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setScheduleUpdates([]);
    }, []);
    const addPendingVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((video)=>{
        setPendingVideos((prev)=>[
                ...prev,
                video
            ]);
        console.log('➕ Added pending video:', video);
    }, []);
    const removePendingVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setPendingVideos((prev)=>{
            if (prev.length === 0) {
                console.log('⚠️ No pending videos to remove');
                return prev;
            }
            const removed = prev[0];
            const remaining = prev.slice(1);
            console.log('➖ Removed pending video (FIFO):', removed);
            return remaining;
        });
    }, []);
    // Sync pending videos with database - DB is the source of truth
    const syncPendingVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        try {
            console.log('🔍 Syncing pending videos with DB for user:', userId);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId);
            if (result.success && result.data) {
                const { workflows } = result.data;
                // Log all workflows to debug status values
                console.log('📊 All workflows from DB:', workflows.map((w)=>({
                        id: w._id,
                        status: w.status,
                        title: w.title
                    })));
                // Check for failed workflows and show notifications
                // Collect notifications to show after state update (to avoid React warning)
                const notificationsToShow = [];
                // Use functional update to access current pending videos
                setPendingVideos((prev)=>{
                    // Create a map of current video IDs (both DB format and temporary format)
                    const currentVideoIds = new Set();
                    const currentVideoTitles = new Map() // Map title to video ID
                    ;
                    prev.forEach((v)=>{
                        currentVideoIds.add(v.id);
                        currentVideoTitles.set(v.title, v.id);
                        // Also extract workflow ID if it's in DB format (video-{_id}-{executionId})
                        const match = v.id.match(/^video-(.+)-(.+)$/);
                        if (match) {
                            currentVideoIds.add(match[1]); // Add workflow _id
                        }
                    });
                    // Find failed workflows
                    const failedWorkflows = workflows.filter((workflow)=>workflow.status === 'failed');
                    // Collect failed video notifications (only once per video)
                    failedWorkflows.forEach((workflow)=>{
                        const workflowId = workflow._id;
                        const videoId = `video-${workflow._id}-${workflow.executionId}`;
                        const videoTitle = workflow.title || 'Video';
                        // Check if this failed workflow matches any current pending video
                        // Match by: workflow _id, video ID format, or title
                        const matchesCurrentVideo = currentVideoIds.has(workflowId) || currentVideoIds.has(videoId) || currentVideoTitles.has(videoTitle);
                        if (matchesCurrentVideo && !notifiedFailedVideos.current.has(videoId)) {
                            notifiedFailedVideos.current.add(videoId);
                            notificationsToShow.push({
                                message: `Video "${videoTitle}" creation failed. Please try creating it again.`,
                                type: 'error'
                            });
                            console.log('❌ Video failed:', videoTitle, workflow._id);
                        }
                    });
                    // Find completed workflows
                    const completedWorkflows = workflows.filter((workflow)=>workflow.status === 'completed');
                    // Collect completed video notifications (only once per video)
                    completedWorkflows.forEach((workflow)=>{
                        const workflowId = workflow._id;
                        const videoId = `video-${workflow._id}-${workflow.executionId}`;
                        const videoTitle = workflow.title || 'Video';
                        // Check if this completed workflow matches any current pending video
                        // Match by: workflow _id, video ID format, or title
                        const matchesCurrentVideo = currentVideoIds.has(workflowId) || currentVideoIds.has(videoId) || currentVideoTitles.has(videoTitle);
                        if (matchesCurrentVideo && !notifiedCompletedVideos.current.has(videoId)) {
                            notifiedCompletedVideos.current.add(videoId);
                            notificationsToShow.push({
                                message: `Video "${videoTitle}" is ready! You can view it in your gallery.`,
                                type: 'success'
                            });
                            console.log('✅ Video completed:', videoTitle, workflow._id);
                        }
                    });
                    return prev // Return unchanged for now, we'll update below
                    ;
                });
                // Show notifications after state update (defer to avoid React warning)
                if (notificationsToShow.length > 0) {
                    setTimeout(()=>{
                        notificationsToShow.forEach(({ message, type })=>{
                            showNotification(message, type, type === 'error' ? 15000 : undefined);
                        });
                    }, 0);
                }
                // Filter workflows that are not completed or failed (include all active states)
                const pendingWorkflows = workflows.filter((workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed');
                console.log('📊 Found pending workflows from DB:', pendingWorkflows.length, 'workflows');
                // DB is the source of truth - always sync with DB
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            } else {
                // If DB check fails, try to load from localStorage as fallback
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        } catch (error) {
            console.error('Failed to sync pending videos:', error);
            // Fallback to localStorage if DB sync fails
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }, [
        showNotification
    ]);
    // Initial sync with DB on mount if userId is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userId && !hasSyncedWithDB.current) {
            console.log('🔄 Initial sync with DB on mount');
            syncPendingVideos(userId);
        }
    }, [
        userId,
        syncPendingVideos
    ]);
    // Continuous polling every 20 seconds regardless of connection status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId) return;
        const pollInterval = setInterval(()=>{
            console.log('🔄 Periodic polling: syncing pending videos with DB (every 20s)');
            syncPendingVideos(userId);
        }, 60000) // Poll every 60 seconds continuously
        ;
        return ()=>clearInterval(pollInterval);
    }, [
        userId,
        syncPendingVideos
    ]);
    // Save pending videos to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else if (skipSaveToLocalStorage.current) {
            console.log('⏭️ Skipping save to localStorage (just synced with DB)');
        }
    }, [
        pendingVideos,
        userId
    ]);
    // Get latest updates
    const latestVideoUpdate = videoUpdates.length > 0 ? videoUpdates[videoUpdates.length - 1] : null;
    const latestAvatarUpdate = avatarUpdates.length > 0 ? avatarUpdates[avatarUpdates.length - 1] : null;
    const latestVideoAvatarUpdate = videoAvatarUpdates.length > 0 ? videoAvatarUpdates[videoAvatarUpdates.length - 1] : null;
    const latestScheduleUpdate = scheduleUpdates.length > 0 ? scheduleUpdates[scheduleUpdates.length - 1] : null;
    // Check processing states
    const isVideoProcessing = videoUpdates.some((update)=>update.status === 'pending' || update.status === 'processing');
    const isAvatarProcessing = avatarUpdates.some((update)=>update.status === 'progress' && update.step !== 'ready');
    const isVideoAvatarProcessing = videoAvatarUpdates.some((update)=>update.status === 'progress');
    const isScheduleProcessing = scheduleUpdates.some((update)=>update.status === 'processing');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId) {
            // Clean up socket and clear all data if no user
            if (socket) {
                socket.close();
                setSocket(null);
                setIsConnected(false);
            }
            setVideoUpdates([]);
            setAvatarUpdates([]);
            setVideoAvatarUpdates([]);
            setScheduleUpdates([]);
            // Only clear pendingVideos if this is a real logout (socket exists)
            // Don't clear on initial mount when userId is temporarily null
            if (socket) {
                // This is a real logout (socket exists), clear everything
                setPendingVideos([]);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                hasSyncedWithDB.current = false;
                notifiedFailedVideos.current.clear();
                notifiedCompletedVideos.current.clear();
                console.log('🧹 User logged out - cleared all socket data');
            } else {
                // This is initial mount (no socket yet), sync with DB instead of clearing
                console.log('⏭️ Initial mount - will sync pending videos with DB on connection');
            }
            processedEvents.current.clear();
            socketConnectedHandlers.current.clear();
            return;
        }
        // Get backend URL from config
        const backendUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])('').replace('/api', '');
        console.log('🔌 Unified WebSocket connecting to:', backendUrl);
        // Create new socket connection
        const newSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(backendUrl, {
            transports: [
                'websocket'
            ],
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000
        });
        // Connection event handlers
        newSocket.on('connect', ()=>{
            console.log('🔌 Unified WebSocket connected');
            setIsConnected(true);
            // Join user-specific room
            newSocket.emit('join-room', userId);
            console.log(`🏠 Joined room for user: ${userId}`);
            // Emit test connection
            newSocket.emit('test-connection', {
                userId,
                timestamp: new Date().toISOString()
            });
            // Trigger socket connected event for any registered handlers
            socketConnectedHandlers.current.forEach((handler)=>{
                try {
                    handler();
                } catch (error) {
                    console.error('Error in socket connected handler:', error);
                }
            });
            // Sync pending videos with DB after connection (DB is source of truth)
            syncPendingVideos(userId);
        });
        newSocket.on('disconnect', (reason)=>{
            console.log('🔌 Unified WebSocket disconnected:', reason);
            setIsConnected(false);
        });
        newSocket.on('connect_error', (error)=>{
            console.error('🔌 Unified WebSocket connection error:', error);
            setIsConnected(false);
        });
        newSocket.on('reconnect', (attemptNumber)=>{
            console.log(`🔌 Unified WebSocket reconnected after ${attemptNumber} attempts`);
            setIsConnected(true);
            newSocket.emit('join-room', userId);
            // Trigger socket connected event for reconnection
            socketConnectedHandlers.current.forEach((handler)=>{
                try {
                    handler();
                } catch (error) {
                    console.error('Error in socket reconnected handler:', error);
                }
            });
            // Sync pending videos with DB after reconnection (DB is source of truth)
            syncPendingVideos(userId);
        });
        // Video status updates
        newSocket.on('video-download-update', (update)=>{
            console.log('🎥 Video update received:', update);
            // Handle both videoId and id fields, and allow processing without strict videoId validation
            const videoId = update.videoId || update.id || 'processing-video';
            const eventKey = `video-${videoId}-${update.timestamp || Date.now()}`;
            if (processedEvents.current.has(eventKey)) {
                console.log('🎥 Duplicate video event ignored:', eventKey);
                return;
            }
            processedEvents.current.add(eventKey);
            // Map the socket event format to our internal format
            let status = update.status || update.type || 'pending';
            // Handle the specific case where type: 'progress' should map to status: 'processing'
            if (update.type === 'progress' && update.status === 'processing') {
                status = 'processing';
            } else if (update.type === 'progress') {
                status = 'processing';
            }
            const videoUpdate = {
                videoId: videoId,
                status: status,
                message: update.message || update.data?.message || 'Video processing update',
                downloadUrl: update.downloadUrl || update.data?.downloadUrl,
                timestamp: update.timestamp || new Date().toISOString()
            };
            console.log('🎥 Processed video update:', videoUpdate);
            setVideoUpdates((prev)=>[
                    ...prev,
                    videoUpdate
                ]);
            // Add video to progress tracking when processing status arrives
            // Only add if we don't have videos from DB sync (to avoid duplicates)
            if (status === 'processing' || status === 'pending') {
                // If we synced with DB, don't add from socket events - DB is source of truth
                if (hasSyncedWithDB.current) {
                    console.log('📦 Already synced with DB, skipping socket event addition (DB is source of truth)');
                    return;
                }
                setPendingVideos((prev)=>{
                    // If we already have videos, don't add duplicates
                    if (prev.length > 0) {
                        console.log('📦 Already have pending videos, skipping socket event addition');
                        return prev;
                    }
                    // Only add one video if we have no videos at all
                    const newVideo = {
                        id: `video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        title: update.title || update.data?.title || 'Processing Video...',
                        status: 'processing',
                        timestamp: update.timestamp || new Date().toISOString(),
                        message: update.message || update.data?.message || 'Your video creation is in progress'
                    };
                    console.log('➕ Added pending video from socket event:', newVideo);
                    return [
                        ...prev,
                        newVideo
                    ];
                });
            }
            // Remove one video from progress tracking when success/completed arrives (FIFO)
            // Verify in DB first before removing
            if (status === 'completed' || status === 'success') {
                console.log('✅ Video completed/success - verifying in DB before removing (FIFO)');
                // Helper function to show notification and remove video
                const showNotificationAndRemove = (prev, context)=>{
                    if (prev.length === 0) {
                        return prev;
                    }
                    const removed = prev[0];
                    const videoId = removed.id;
                    const videoTitle = removed.title || 'Video';
                    // Show notification if not already notified
                    if (!notifiedCompletedVideos.current.has(videoId)) {
                        notifiedCompletedVideos.current.add(videoId);
                        showNotification(`Video "${videoTitle}" is ready! You can view it in your gallery.`, 'success');
                        console.log('✅ Video completed notification shown:', videoTitle, videoId);
                    }
                    const remaining = prev.slice(1);
                    console.log(`➖ Removed pending video (FIFO, ${context}):`, removed);
                    return remaining;
                };
                // Verify completion in DB before removing
                if (userId) {
                    // First sync with DB to get latest state
                    syncPendingVideos(userId).then(()=>{
                        // After DB sync, check if we should remove one video
                        // DB sync already updated the state, so we just need to verify count
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId).then((result)=>{
                            if (result.success && result.data) {
                                const pendingWorkflows = result.data.workflows.filter((workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed');
                                // Get current local state count
                                setPendingVideos((prev)=>{
                                    // Only remove if DB has fewer pending items than our local state
                                    if (pendingWorkflows.length < prev.length) {
                                        return showNotificationAndRemove(prev, 'DB verified');
                                    } else {
                                        console.log('⏸️ DB verification: keeping pending videos (count matches)');
                                        return prev;
                                    }
                                });
                            } else {
                                // If DB check fails, still remove (FIFO assumption)
                                setPendingVideos((prev)=>showNotificationAndRemove(prev, 'DB check failed'));
                            }
                        }).catch(()=>{
                            // If DB check fails, still remove (FIFO assumption)
                            setPendingVideos((prev)=>showNotificationAndRemove(prev, 'DB error'));
                        });
                    }).catch(()=>{
                        // If sync fails, still remove (FIFO assumption)
                        setPendingVideos((prev)=>showNotificationAndRemove(prev, 'sync failed'));
                    });
                } else {
                    // No userId, just remove (FIFO)
                    setPendingVideos((prev)=>{
                        if (prev.length === 0) {
                            console.log('⚠️ No pending videos to remove');
                            return prev;
                        }
                        return showNotificationAndRemove(prev, 'no userId');
                    });
                }
            }
            // Remove one video from progress tracking when error/failed arrives (FIFO)
            // Verify in DB first before removing
            if (status === 'error' || status === 'failed') {
                console.log('❌ Video error/failed - verifying in DB before removing (FIFO)');
                // Helper function to show error notification and remove video
                const showErrorNotificationAndRemove = (prev, context, errorMessage)=>{
                    if (prev.length === 0) {
                        return prev;
                    }
                    const removed = prev[0];
                    const videoId = removed.id;
                    const videoTitle = removed.title || 'Video';
                    // Show notification if not already notified
                    if (!notifiedFailedVideos.current.has(videoId)) {
                        notifiedFailedVideos.current.add(videoId);
                        // Use socket message if available, otherwise use user-friendly fallback
                        const message = errorMessage || `Video "${videoTitle}" creation failed. Please try creating it again.`;
                        showNotification(message, 'error', 15000);
                        console.log('❌ Video failed notification shown:', videoTitle, videoId, message);
                    }
                    const remaining = prev.slice(1);
                    console.log(`➖ Removed pending video (FIFO, ${context}):`, removed);
                    return remaining;
                };
                // Get error message from socket update
                const errorMessage = update.message || update.data?.message || undefined;
                // Verify failure in DB before removing
                if (userId) {
                    // First sync with DB to get latest state
                    syncPendingVideos(userId).then(()=>{
                        // After DB sync, check if we should remove one video
                        // DB sync already updated the state, so we just need to verify count
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId).then((result)=>{
                            if (result.success && result.data) {
                                const pendingWorkflows = result.data.workflows.filter((workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed');
                                // Get current local state count
                                setPendingVideos((prev)=>{
                                    // Only remove if DB has fewer pending items than our local state
                                    if (pendingWorkflows.length < prev.length) {
                                        return showErrorNotificationAndRemove(prev, 'DB verified', errorMessage);
                                    } else {
                                        console.log('⏸️ DB verification: keeping pending videos (count matches)');
                                        return prev;
                                    }
                                });
                            } else {
                                // If DB check fails, still remove (FIFO assumption)
                                setPendingVideos((prev)=>showErrorNotificationAndRemove(prev, 'DB check failed', errorMessage));
                            }
                        }).catch(()=>{
                            // If DB check fails, still remove (FIFO assumption)
                            setPendingVideos((prev)=>showErrorNotificationAndRemove(prev, 'DB error', errorMessage));
                        });
                    }).catch(()=>{
                        // If sync fails, still remove (FIFO assumption)
                        setPendingVideos((prev)=>showErrorNotificationAndRemove(prev, 'sync failed', errorMessage));
                    });
                } else {
                    // No userId, just remove (FIFO)
                    setPendingVideos((prev)=>{
                        if (prev.length === 0) {
                            console.log('⚠️ No pending videos to remove');
                            return prev;
                        }
                        return showErrorNotificationAndRemove(prev, 'no userId', errorMessage);
                    });
                }
            }
        });
        // Avatar status updates
        newSocket.on('photo-avatar-update', (update)=>{
            console.log('📸 Avatar update received:', update);
            const eventKey = `avatar-${update.step}-${update.timestamp}`;
            if (processedEvents.current.has(eventKey)) {
                console.log('📸 Duplicate avatar event ignored:', eventKey);
                return;
            }
            processedEvents.current.add(eventKey);
            setAvatarUpdates((prev)=>[
                    ...prev,
                    update
                ]);
        });
        // Avatar completion
        newSocket.on('avatar-ready', (data)=>{
            console.log('✅ Avatar ready:', data);
            const timestamp = new Date().toISOString();
            const eventKey = `avatar-ready-${data.avatarId}-${timestamp}`;
            if (processedEvents.current.has(eventKey)) {
                console.log('📸 Duplicate avatar-ready event ignored:', eventKey);
                return;
            }
            processedEvents.current.add(eventKey);
            const completionUpdate = {
                step: 'complete',
                status: 'success',
                data: {
                    message: 'Your avatar is ready!',
                    avatarId: data.avatarId,
                    previewImageUrl: data.previewImageUrl
                },
                timestamp: timestamp
            };
            setAvatarUpdates((prev)=>[
                    ...prev,
                    completionUpdate
                ]);
        });
        // Video Avatar status updates
        newSocket.on('video-avatar-update', (update)=>{
            console.log('🎬 Video Avatar update received:', update);
            const eventKey = `video-avatar-${update.step}-${update.timestamp}`;
            if (processedEvents.current.has(eventKey)) {
                console.log('🎬 Duplicate video avatar event ignored:', eventKey);
                return;
            }
            processedEvents.current.add(eventKey);
            setVideoAvatarUpdates((prev)=>[
                    ...prev,
                    update
                ]);
            // Auto-disconnect on completion or error as requested
            if (update.status === 'completed' || update.status === 'error') {
                console.log('🎬 Video avatar process finished, disconnecting socket');
                setTimeout(()=>{
                    newSocket.disconnect();
                }, 1000); // Small delay to ensure final update is processed
            }
        });
        // Schedule status updates
        newSocket.on('schedule-status', (data)=>{
            console.log('📅 Schedule status update received:', data);
            const eventKey = `schedule-status-${data.scheduleId || 'unknown'}-${data.timestamp || Date.now()}`;
            if (processedEvents.current.has(eventKey)) {
                console.log('📅 Duplicate schedule status event ignored:', eventKey);
                return;
            }
            processedEvents.current.add(eventKey);
            console.log('data', data);
            const scheduleUpdate = {
                scheduleId: data.data.scheduleId || 'unknown',
                status: data.status === 'ready' ? 'ready' : data.status === 'failed' ? 'failed' : 'processing',
                message: data.message || (data.status === 'ready' ? 'Your schedule is ready!' : data.status === 'failed' ? 'Schedule generation failed. Please try again.' : 'Schedule generation started.'),
                data: {
                    scheduleId: data.data.scheduleId,
                    error: data.error,
                    generationTime: data.generationTime
                },
                timestamp: data.timestamp || new Date().toISOString()
            };
            console.log('📅 Processed schedule status update:', scheduleUpdate);
            setScheduleUpdates((prev)=>[
                    ...prev,
                    scheduleUpdate
                ]);
            // Auto-disconnect on completion or failure as requested
            if (data.status === 'ready' || data.status === 'failed') {
                console.log('📅 Schedule generation finished, disconnecting socket');
                setTimeout(()=>{
                    newSocket.disconnect();
                }, 1000); // Small delay to ensure final update is processed
            }
        });
        setSocket(newSocket);
        // Store references for cleanup
        const currentProcessedEvents = processedEvents.current;
        const currentSocketHandlers = socketConnectedHandlers.current;
        // Cleanup function
        return ()=>{
            console.log('🧹 Cleaning up unified WebSocket connection');
            currentProcessedEvents.clear();
            currentSocketHandlers.clear();
            newSocket.close();
        };
    }, [
        userId,
        syncPendingVideos
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    // Expose method to register socket connected handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (socket) {
            // Add method to socket for external handlers
            socket.onSocketConnected = (handler)=>{
                socketConnectedHandlers.current.add(handler);
                return ()=>{
                    socketConnectedHandlers.current.delete(handler);
                };
            };
        }
    }, [
        socket
    ]);
    return {
        socket,
        isConnected,
        videoUpdates,
        avatarUpdates,
        videoAvatarUpdates,
        scheduleUpdates,
        latestVideoUpdate,
        latestAvatarUpdate,
        latestVideoAvatarUpdate,
        latestScheduleUpdate,
        isVideoProcessing,
        isAvatarProcessing,
        isVideoAvatarProcessing,
        isScheduleProcessing,
        pendingVideos,
        addPendingVideo,
        removePendingVideo,
        clearVideoUpdates,
        clearCompletedVideoUpdates,
        clearAvatarUpdates,
        clearVideoAvatarUpdates,
        clearScheduleUpdates,
        syncPendingVideos
    };
};
}),
"[project]/Desktop/task2/src/hooks/useProcessingToasts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProcessingToasts",
    ()=>useProcessingToasts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useProcessingToasts() {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Convert VideoInProgress[] to ProcessingToast[] and merge with existing minimize states
    const updateToasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((videos)=>{
        setToasts((prev)=>{
            // Create a map of existing minimize states by ID
            const minimizedMap = new Map();
            prev.forEach((toast)=>{
                minimizedMap.set(toast.id, toast.minimized);
            });
            // Convert videos to toasts, preserving minimize state if toast already exists
            const newToasts = videos.map((video)=>({
                    id: video.id,
                    title: video.title,
                    message: video.message,
                    timestamp: video.timestamp,
                    minimized: minimizedMap.get(video.id) ?? false // Preserve existing minimize state or default to false
                }));
            // Return only toasts for videos that are still pending
            // All toasts (including minimized ones) are removed when their video completes/fails
            return newToasts;
        });
    }, []);
    const minimizeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setToasts((prev)=>prev.map((toast)=>toast.id === id ? {
                    ...toast,
                    minimized: true
                } : toast));
    }, []);
    const restoreToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setToasts((prev)=>prev.map((toast)=>toast.id === id ? {
                    ...toast,
                    minimized: false
                } : toast));
    }, []);
    const minimizedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return toasts.filter((toast)=>toast.minimized).length;
    }, [
        toasts
    ]);
    return {
        toasts,
        minimizedCount,
        minimizeToast,
        restoreToast,
        updateToasts
    };
}
}),
"[project]/Desktop/task2/src/hooks/useVideoUpload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoUpload",
    ()=>useVideoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useVideoUpload = ()=>{
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadState, setUploadState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        file: null,
        preview: null,
        isValidating: false,
        isValid: false,
        errors: []
    });
    const validateVideo = (file, type)=>{
        return new Promise((resolve)=>{
            const errors = [];
            if (type === 'training') {
                const maxSize = 1000 * 1024 * 1024;
                if (file.size > maxSize) {
                    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                    errors.push({
                        type: 'size',
                        message: `File size exceeds maximum limit of 1000MB (${fileSizeMB}MB)`
                    });
                    setUploadState((prev)=>({
                            ...prev,
                            isValidating: false,
                            isValid: false,
                            errors
                        }));
                    resolve(false);
                    return;
                }
            }
            if (file.type !== 'video/mp4' && file.type !== 'video/quicktime') {
                errors.push({
                    type: 'format',
                    message: 'Only MP4 or MOV format is supported'
                });
            }
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = ()=>{
                window.URL.revokeObjectURL(video.src);
                if (type === 'consent') {
                    if (video.duration > 20) {
                        errors.push({
                            type: 'duration',
                            message: `Consent video is too long (${Math.round(video.duration)}s). Maximum duration is 20 seconds`
                        });
                    }
                } else if (type === 'training') {
                    if (video.duration < 30) {
                        errors.push({
                            type: 'duration',
                            message: `Training video is too short (${Math.round(video.duration)}s). Minimum duration is 30 seconds`
                        });
                    }
                    if (video.duration > 240) {
                        errors.push({
                            type: 'duration',
                            message: `Training video is too long (${Math.round(video.duration)}s). Maximum duration is 4 minutes`
                        });
                    }
                }
                if (video.videoHeight < 720) {
                    errors.push({
                        type: 'quality',
                        message: `Video quality is too low (${video.videoWidth}x${video.videoHeight}). Minimum height is 720px`
                    });
                }
                setUploadState((prev)=>({
                        ...prev,
                        isValidating: false,
                        isValid: errors.length === 0,
                        errors
                    }));
                resolve(errors.length === 0);
            };
            video.onerror = ()=>{
                errors.push({
                    type: 'error',
                    message: 'Failed to load video file'
                });
                setUploadState((prev)=>({
                        ...prev,
                        isValidating: false,
                        isValid: false,
                        errors
                    }));
                resolve(false);
            };
            video.src = URL.createObjectURL(file);
        });
    };
    const handleFileSelect = async (file, type)=>{
        setUploadState((prev)=>({
                ...prev,
                isValidating: true,
                isValid: false,
                errors: []
            }));
        const preview = URL.createObjectURL(file);
        setUploadState((prev)=>({
                ...prev,
                file,
                preview
            }));
        await validateVideo(file, type);
    };
    const handleInputChange = (e, type)=>{
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0], type);
        }
    };
    const handleDragEnter = (e, type)=>{
        e.preventDefault();
        e.stopPropagation();
        const currentCount = dragCounterRef.current.get(type) || 0;
        const newCount = currentCount + 1;
        dragCounterRef.current.set(type, newCount);
        // Only set dragging state when entering the drop zone (counter goes from 0 to 1)
        if (newCount === 1) {
            setIsDragging(type);
        }
    };
    const handleDragLeave = (e, type)=>{
        e.preventDefault();
        e.stopPropagation();
        const currentCount = dragCounterRef.current.get(type) || 0;
        const newCount = Math.max(0, currentCount - 1);
        dragCounterRef.current.set(type, newCount);
        // Only clear dragging state when truly leaving the drop zone (counter reaches 0)
        if (newCount === 0) {
            setIsDragging(null);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e, type)=>{
        e.preventDefault();
        e.stopPropagation();
        // Reset counter and clear dragging state
        dragCounterRef.current.set(type, 0);
        setIsDragging(null);
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            console.log('📁 File selected from drop:', files[0]);
            handleFileSelect(files[0], type);
        } else {
            console.log('❌ No files in drop event');
        }
    };
    const clearSelection = ()=>{
        setUploadState({
            file: null,
            preview: null,
            isValidating: false,
            isValid: false,
            errors: []
        });
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const getBorderClasses = (type)=>{
        if (isDragging === type) {
            return 'border-[#6366F1] bg-[#6366F1]/5 border-2';
        }
        if (uploadState.errors.length > 0 && !uploadState.isValidating) {
            return 'border-red-500';
        }
        if (uploadState.isValid && !uploadState.isValidating) {
            return 'border-green-500';
        }
        return 'border-[#D1D5DB]';
    };
    return {
        fileInputRef,
        videoRef,
        uploadState,
        isDragging,
        handleFileSelect,
        handleInputChange,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        clearSelection,
        getBorderClasses
    };
};
}),
"[project]/Desktop/task2/src/hooks/useSubscription.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubscription",
    ()=>useSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useSubscription = ()=>{
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getCurrentSubscription();
            if (response.success && response.data?.subscription) {
                const subscriptionData = response.data.subscription;
                setSubscription(subscriptionData);
                return subscriptionData;
            } else {
                setError(response.message || 'Failed to fetch subscription details');
                return null;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load subscription details';
            setError(errorMessage);
            return null;
        } finally{
            setLoading(false);
        }
    }, []);
    const getUsageInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((subscriptionData)=>{
        const data = subscriptionData || subscription;
        if (!data) {
            return {
                videoCount: 0,
                videoLimit: 0,
                isLimitReached: true,
                remainingVideos: 0,
                usagePercentage: 100
            };
        }
        const videoCount = data.videoCount || 0;
        const videoLimit = data.videoLimit || 0;
        const remainingVideos = Math.max(0, videoLimit - videoCount);
        const isLimitReached = videoCount >= videoLimit;
        const usagePercentage = videoLimit > 0 ? videoCount / videoLimit * 100 : 0;
        return {
            videoCount,
            videoLimit,
            isLimitReached,
            remainingVideos,
            usagePercentage
        };
    }, [
        subscription
    ]);
    const checkVideoUsageLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const subscriptionData = await fetchSubscription();
        const usageInfo = getUsageInfo(subscriptionData || undefined);
        if (!subscriptionData) {
            return {
                canCreateVideo: false,
                usageInfo,
                message: 'No active subscription found. Please subscribe to create content.'
            };
        }
        // Check if subscription status is pending
        if (subscriptionData.status === 'pending') {
            return {
                canCreateVideo: false,
                usageInfo,
                message: 'Your payment is still being processed. Please wait for payment confirmation before creating videos.'
            };
        }
        if (usageInfo.isLimitReached) {
            return {
                canCreateVideo: false,
                usageInfo,
                message: `You've reached your video limit (${usageInfo.videoCount}/${usageInfo.videoLimit}). Upgrade your subscription to create more videos.`
            };
        }
        return {
            canCreateVideo: true,
            usageInfo,
            message: `You have ${usageInfo.remainingVideos} videos remaining this period.`
        };
    }, [
        fetchSubscription,
        getUsageInfo
    ]);
    return {
        subscription,
        loading,
        error,
        fetchSubscription,
        getUsageInfo,
        checkVideoUsageLimit
    };
};
}),
"[project]/Desktop/task2/src/hooks/useSchedule.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSchedule",
    ()=>useSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useSchedule = ()=>{
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scheduleLoading, setScheduleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduleError, setScheduleError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch schedule data
    const fetchSchedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setScheduleLoading(true);
            setScheduleError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getSchedule();
            if (response.success && response.data) {
                setScheduleData(response.data);
                console.log('Schedule data fetched successfully:', response.data);
            } else {
                setScheduleData(null);
            // setScheduleError(response.message || 'Failed to fetch schedule data')
            }
        } catch (error) {
            console.error('❌ Error fetching schedule data:', error);
            setScheduleData(null);
        // setScheduleError(error.message || 'Failed to fetch schedule data')
        } finally{
            setScheduleLoading(false);
        }
    }, []);
    // Delete schedule
    const deleteSchedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (scheduleId)=>{
        try {
            setScheduleLoading(true);
            setScheduleError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteSchedule(scheduleId);
            if (response.success) {
                console.log('Schedule deleted successfully');
                // Show success notification
                if (window.showNotification) {
                    window.showNotification({
                        type: 'success',
                        title: 'Schedule Deleted',
                        message: 'Your schedule has been deleted successfully!',
                        duration: 5000
                    });
                }
                // Refresh schedule data after successful deletion
                await fetchSchedule();
                return true;
            } else {
                console.error('Failed to delete schedule:', response.message);
                // Show error notification
                if (window.showNotification) {
                    window.showNotification({
                        type: 'error',
                        title: 'Delete Failed',
                        message: response.message || 'Failed to delete schedule',
                        duration: 5000
                    });
                }
                // setScheduleError(response.message || 'Failed to delete schedule')
                return false;
            }
        } catch (error) {
            console.error('Error deleting schedule:', error);
            // Show error notification
            if (window.showNotification) {
                window.showNotification({
                    type: 'error',
                    title: 'Network Error',
                    message: 'Failed to delete schedule. Please try again.',
                    duration: 5000
                });
            }
            // setScheduleError(error.message || 'Failed to delete schedule')
            return false;
        } finally{
            setScheduleLoading(false);
        }
    }, [
        fetchSchedule
    ]);
    // Clear schedule data
    const clearScheduleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setScheduleData(null);
        setScheduleError(null);
    }, []);
    return {
        // State
        scheduleData,
        scheduleLoading,
        scheduleError,
        // Actions
        fetchSchedule,
        deleteSchedule,
        // Utilities
        clearScheduleData
    };
};
const __TURBOPACK__default__export__ = useSchedule;
}),
"[project]/Desktop/task2/src/hooks/useAvatarStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAvatarStorage",
    ()=>useAvatarStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useAvatarStorage = ()=>{
    const getSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            const saved = localStorage.getItem('selectedAvatars');
            if (!saved) return null;
            const parsed = JSON.parse(saved);
            // Validate the structure
            if (!parsed.title || !parsed.body || !parsed.conclusion) {
                console.warn('Invalid avatar data structure in localStorage');
                return null;
            }
            return parsed;
        } catch (error) {
            console.warn('Failed to parse avatar data from localStorage:', error);
            return null;
        }
    }, []);
    const saveSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((avatars)=>{
        try {
            localStorage.setItem('selectedAvatars', JSON.stringify(avatars));
        } catch (error) {
            throw new Error('Failed to save avatar selection to localStorage');
        }
    }, []);
    const getAvatarIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const avatars = getSelectedAvatars();
        if (!avatars) return null;
        return {
            avatar_title: avatars.title.avatar_id,
            avatar_body: avatars.body.avatar_id,
            avatar_conclusion: avatars.conclusion.avatar_id
        };
    }, [
        getSelectedAvatars
    ]);
    const validateAvatarSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((avatarIds)=>{
        const required = [
            'avatar_title',
            'avatar_body',
            'avatar_conclusion'
        ];
        const missing = required.filter((key)=>!avatarIds[key] || avatarIds[key].trim() === '');
        if (missing.length > 0) {
            throw new Error(`Missing avatar selection: ${missing.join(', ')}`);
        }
    }, []);
    const clearSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            localStorage.removeItem('selectedAvatars');
        } catch  {
            console.warn('Failed to clear avatar data from localStorage');
        }
    }, []);
    return {
        getSelectedAvatars,
        saveSelectedAvatars,
        getAvatarIds,
        validateAvatarSelection,
        clearSelectedAvatars
    };
};
}),
"[project]/Desktop/task2/src/hooks/useUserSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserSettings",
    ()=>useUserSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useUserSettings = ({ userEmail, avatars, setSelectedAvatars, setValue })=>{
    const [loadingUserSettings, setLoadingUserSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingUserSettings, setSavingUserSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchUserSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoadingUserSettings(true);
        try {
            if (!userEmail) {
                console.error('User email is required to fetch settings');
                return {
                    success: false,
                    data: null
                };
            }
            const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.USER_SETTINGS)}?email=${userEmail}`, {
                method: 'GET',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
            });
            if (!response.ok) {
                // console.error('Failed to fetch user settings:', await response.text())
                return {
                    success: false,
                    data: null
                };
            }
            const userSettings = await response.json();
            console.log('Fetched user settings:', userSettings);
            if (userSettings.success && userSettings.data) {
                const settings = userSettings.data;
                setValue('prompt', settings.prompt || '');
                // Set avatar field to first avatar ID for form validation
                if (Array.isArray(settings.avatar) && settings.avatar.length > 0) {
                    setValue('avatar', settings.avatar[0]);
                } else if (typeof settings.avatar === 'string') {
                    setValue('avatar', settings.avatar);
                } else {
                    setValue('avatar', '');
                }
                setValue('name', settings.name || '');
                setValue('position', settings.position || '');
                setValue('language', settings.language || '');
                setValue('companyName', settings.companyName || '');
                setValue('license', settings.license || '');
                setValue('tailoredFit', settings.tailoredFit || '');
                setValue('socialHandles', settings.socialHandles || '');
                setValue('city', settings.city || '');
                setValue('preferredTone', settings.preferredTone || '');
                setValue('callToAction', settings.callToAction || '');
                setValue('email', settings.email || '');
                // Convert gender from lowercase (API format) to capitalized (form format)
                const genderValue = settings.gender || '';
                const capitalizedGender = genderValue ? genderValue.charAt(0).toUpperCase() + genderValue.slice(1).toLowerCase() : '';
                setValue('gender', capitalizedGender);
                setValue('preset', settings.preset || '');
                setValue('videoCaption', settings.videoCaption || '');
                // Handle avatar loading - prioritize avatar array from API response
                if (settings.avatar && Array.isArray(settings.avatar)) {
                    // New format: avatar is an array of IDs from API response
                    const avatarIds = settings.avatar.filter((id)=>id && id.trim() !== '');
                    console.log('🔍 Loading avatars from API response array:', avatarIds);
                    if (avatarIds.length > 0) {
                        const foundAvatars = avatarIds.map((id)=>[
                                ...avatars.custom,
                                ...avatars.default
                            ].find((avatar)=>avatar.avatar_id === id)).filter(Boolean);
                        if (foundAvatars.length > 0) {
                            setSelectedAvatars({
                                title: foundAvatars[0] || null,
                                body: foundAvatars[1] || null,
                                conclusion: foundAvatars[2] || null
                            });
                            // Update the form's avatar field to show the first avatar in the dropdown
                            setValue('avatar', foundAvatars[0].avatar_id);
                            console.log('🎯 Avatars loaded from API response array:', {
                                avatar_ids: avatarIds,
                                loaded_avatars: foundAvatars.map((avatar)=>({
                                        avatar_id: avatar.avatar_id,
                                        avatar_name: avatar.avatar_name || avatar.name,
                                        avatar_type: avatars.custom.some((customAvatar)=>customAvatar.avatar_id === avatar.avatar_id) ? 'custom' : 'default'
                                    })),
                                assigned_to_slots: [
                                    'title',
                                    'body',
                                    'conclusion'
                                ],
                                form_avatar_field_updated: foundAvatars[0].avatar_id
                            });
                        }
                    }
                } else if (settings.titleAvatar || settings.bodyAvatar || settings.conclusionAvatar) {
                    // Fallback: individual avatar IDs (legacy support) or new structure with avatar_id and avatarType
                    const getAvatarId = (avatar)=>{
                        if (!avatar) return '';
                        if (typeof avatar === 'string') return avatar;
                        return avatar.avatar_id || '';
                    };
                    const titleAvatarId = getAvatarId(settings.titleAvatar);
                    const bodyAvatarId = getAvatarId(settings.bodyAvatar);
                    const conclusionAvatarId = getAvatarId(settings.conclusionAvatar);
                    const titleAvatar = titleAvatarId ? [
                        ...avatars.custom,
                        ...avatars.default
                    ].find((avatar)=>avatar.avatar_id === titleAvatarId) : null;
                    const bodyAvatar = bodyAvatarId ? [
                        ...avatars.custom,
                        ...avatars.default
                    ].find((avatar)=>avatar.avatar_id === bodyAvatarId) : null;
                    const conclusionAvatar = conclusionAvatarId ? [
                        ...avatars.custom,
                        ...avatars.default
                    ].find((avatar)=>avatar.avatar_id === conclusionAvatarId) : null;
                    setSelectedAvatars({
                        title: titleAvatar,
                        body: bodyAvatar,
                        conclusion: conclusionAvatar
                    });
                    // Update the form's avatar field to show the first avatar in the dropdown
                    if (titleAvatar) {
                        setValue('avatar', titleAvatar.avatar_id);
                    }
                    console.log('🎯 Individual avatars loaded from user settings (legacy):', {
                        title: titleAvatar ? {
                            avatar_id: titleAvatar.avatar_id,
                            avatar_name: titleAvatar.avatar_name || titleAvatar.name,
                            avatar_type: avatars.custom.some((customAvatar)=>customAvatar.avatar_id === titleAvatar.avatar_id) ? 'custom' : 'default'
                        } : null,
                        body: bodyAvatar ? {
                            avatar_id: bodyAvatar.avatar_id,
                            avatar_name: bodyAvatar.avatar_name || bodyAvatar.name,
                            avatar_type: avatars.custom.some((customAvatar)=>customAvatar.avatar_id === bodyAvatar.avatar_id) ? 'custom' : 'default'
                        } : null,
                        conclusion: conclusionAvatar ? {
                            avatar_id: conclusionAvatar.avatar_id,
                            avatar_name: conclusionAvatar.avatar_name || conclusionAvatar.name,
                            avatar_type: avatars.custom.some((customAvatar)=>customAvatar.avatar_id === conclusionAvatar.avatar_id) ? 'custom' : 'default'
                        } : null,
                        form_avatar_field_updated: titleAvatar?.avatar_id || 'none'
                    });
                } else if (settings.avatar && typeof settings.avatar === 'string') {
                    // Legacy format: avatar is a single string
                    const foundAvatar = [
                        ...avatars.custom,
                        ...avatars.default
                    ].find((avatar)=>avatar.avatar_id === settings.avatar);
                    if (foundAvatar) {
                        setSelectedAvatars({
                            title: foundAvatar,
                            body: foundAvatar,
                            conclusion: foundAvatar
                        });
                        // Update the form's avatar field to show the avatar in the dropdown
                        setValue('avatar', foundAvatar.avatar_id);
                        console.log('🎯 Single avatar loaded from user settings (legacy):', {
                            avatar_id: foundAvatar.avatar_id,
                            avatar_name: foundAvatar.avatar_name || foundAvatar.name,
                            avatar_type: avatars.custom.some((customAvatar)=>customAvatar.avatar_id === foundAvatar.avatar_id) ? 'custom' : 'default',
                            assigned_to_slots: [
                                'title',
                                'body',
                                'conclusion'
                            ],
                            form_avatar_field_updated: foundAvatar.avatar_id
                        });
                    } else {
                        console.log('❌ Avatar not found in available avatars:', {
                            requested_avatar_id: settings.avatar,
                            available_custom_avatars: avatars.custom.map((a)=>a.avatar_id),
                            available_default_avatars: avatars.default.map((a)=>a.avatar_id)
                        });
                    }
                }
                console.log('Form populated with user settings');
                // Note: Removed automatic validation trigger to prevent validation errors on empty fields
                return {
                    success: true,
                    data: userSettings.data
                };
            }
            return {
                success: false,
                data: null
            };
        } catch (error) {
            console.error('Error fetching user settings:', error);
            return {
                success: false,
                data: null
            };
        } finally{
            setLoadingUserSettings(false);
        }
    }, [
        userEmail,
        avatars,
        setSelectedAvatars,
        setValue
    ]);
    const saveUserSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userSettingsData)=>{
        setSavingUserSettings(true);
        try {
            // Create a clean payload with proper array (matching curl request format)
            // Handle new structure: avatar fields can be objects with avatar_id and avatarType
            const getAvatarId = (avatar)=>{
                if (!avatar) return '';
                if (typeof avatar === 'string') return avatar;
                return avatar.avatar_id || '';
            };
            const cleanPayload = {
                prompt: userSettingsData.prompt,
                avatar: Array.isArray(userSettingsData.avatar) ? userSettingsData.avatar : [],
                titleAvatar: typeof userSettingsData.titleAvatar === 'object' && userSettingsData.titleAvatar !== null ? userSettingsData.titleAvatar : getAvatarId(userSettingsData.titleAvatar),
                bodyAvatar: typeof userSettingsData.bodyAvatar === 'object' && userSettingsData.bodyAvatar !== null ? userSettingsData.bodyAvatar : getAvatarId(userSettingsData.bodyAvatar),
                conclusionAvatar: typeof userSettingsData.conclusionAvatar === 'object' && userSettingsData.conclusionAvatar !== null ? userSettingsData.conclusionAvatar : getAvatarId(userSettingsData.conclusionAvatar),
                name: userSettingsData.name,
                position: userSettingsData.position,
                language: userSettingsData.language || '',
                companyName: userSettingsData.companyName,
                license: userSettingsData.license,
                tailoredFit: userSettingsData.tailoredFit,
                socialHandles: userSettingsData.socialHandles,
                city: userSettingsData.city,
                preferredTone: userSettingsData.preferredTone,
                callToAction: userSettingsData.callToAction,
                email: userSettingsData.email,
                gender: userSettingsData.gender ? userSettingsData.gender.toLowerCase() : '',
                preset: userSettingsData.preset || '',
                selectedVoiceId: userSettingsData.selectedVoiceId || '',
                selectedMusicTrackId: userSettingsData.selectedMusicTrackId || '',
                selectedVoicePreset: userSettingsData.selectedVoicePreset || '',
                selectedMusicPreset: userSettingsData.selectedMusicPreset || '',
                videoCaption: userSettingsData.videoCaption || ''
            };
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.USER_SETTINGS), {
                method: 'POST',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
                body: JSON.stringify(cleanPayload)
            });
            if (!response.ok) {
                console.error('Failed to store user settings:', await response.text());
                return {
                    success: false,
                    error: 'Failed to store user settings'
                };
            }
            const result = await response.json();
            console.log('User settings stored successfully:', result);
            return {
                success: true,
                data: result
            };
        } catch (error) {
            console.error('Error storing user settings:', error);
            return {
                success: false,
                error: 'Error storing user settings'
            };
        } finally{
            setSavingUserSettings(false);
        }
    }, []);
    return {
        loadingUserSettings,
        savingUserSettings,
        fetchUserSettings,
        saveUserSettings
    };
};
}),
"[project]/Desktop/task2/src/hooks/useScheduleValidation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScheduleValidation",
    ()=>useScheduleValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useScheduleValidation = ()=>{
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const validateScheduleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((scheduleData)=>{
        const errors = [];
        // Validate frequency
        if (!scheduleData.frequency || scheduleData.frequency.trim() === '') {
            errors.push({
                field: 'frequency',
                message: 'Please select a posting frequency'
            });
        }
        // Validate posts based on frequency
        const expectedPostCount = getExpectedPostCount(scheduleData.frequency);
        let validPosts;
        if (scheduleData.frequency === 'Daily') {
            validPosts = scheduleData.posts.filter((post)=>post.time && post.time.trim() !== '');
        } else {
            validPosts = scheduleData.posts.filter((post)=>(post.day || post.date) && post.time);
        }
        if (validPosts.length === 0) {
            if (scheduleData.frequency === 'Daily') {
                errors.push({
                    field: 'posts',
                    message: 'Please select at least one time'
                });
            } else {
                errors.push({
                    field: 'posts',
                    message: 'Please select at least one day/date and time'
                });
            }
        } else if (scheduleData.frequency !== 'Custom' && validPosts.length < expectedPostCount) {
            errors.push({
                field: 'posts',
                message: `Please select ${expectedPostCount} ${scheduleData.frequency.toLowerCase()} as specified`
            });
        }
        // Enhanced validation for individual posts
        scheduleData.posts.forEach((post, index)=>{
            const postNumber = index + 1;
            // For Daily frequency, only validate time
            if (scheduleData.frequency === 'Daily') {
                if (!post.time || post.time.trim() === '') {
                    errors.push({
                        field: `time_${index}`,
                        message: `Please select a time for Day ${postNumber}`
                    });
                }
            } else {
                // For non-Daily frequencies, validate both day/date and time
                if ((post.day || post.date) && (!post.time || post.time.trim() === '')) {
                    errors.push({
                        field: `time_${index}`,
                        message: `Please select a time for Day ${postNumber}`
                    });
                }
                if (post.time && post.time.trim() !== '' && !post.day && !post.date) {
                    errors.push({
                        field: `day_${index}`,
                        message: `Please select a day or date for Time ${postNumber}`
                    });
                }
            }
            // For non-Daily frequencies, check if day is missing
            if (scheduleData.frequency !== 'Daily' && scheduleData.frequency !== 'Custom' && (!post.day || post.day.trim() === '')) {
                errors.push({
                    field: `day_${index}`,
                    message: `Please select a day for Day ${postNumber}`
                });
            }
        });
        // Date validation removed - allow past dates to hit the API
        // Enhanced time validation
        validPosts.forEach((post, index)=>{
            if (post.time && post.time.trim() !== '') {
                const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
                if (!timeRegex.test(post.time)) {
                    errors.push({
                        field: `time_${index}`,
                        message: `Invalid time format for Time ${index + 1}. Use HH:MM format`
                    });
                } else {
                    const [hours, minutes] = post.time.split(':').map(Number);
                    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
                        errors.push({
                            field: `time_${index}`,
                            message: `Invalid time for Time ${index + 1}. Hours must be 0-23, minutes 0-59`
                        });
                    }
                }
            }
        });
        // Check for duplicate days (for day-based frequencies)
        if (scheduleData.frequency !== 'Daily' && scheduleData.frequency !== 'Custom') {
            const selectedDays = scheduleData.posts.filter((post)=>post.day && post.day.trim() !== '').map((post)=>post.day);
            const duplicateDays = selectedDays.filter((day, index)=>selectedDays.indexOf(day) !== index);
            if (duplicateDays.length > 0) {
                errors.push({
                    field: 'posts',
                    message: `Duplicate days selected: ${duplicateDays.join(', ')}. Please select different days.`
                });
            }
        }
        setValidationErrors(errors);
        return {
            isValid: errors.length === 0,
            errors
        };
    }, []);
    const getExpectedPostCount = (frequency)=>{
        switch(frequency){
            case 'Once a Week':
                return 1;
            case 'Twice a Week':
                return 2;
            case 'Three Times a Week':
                return 3;
            case 'Daily':
                return 1;
            default:
                return 2;
        }
    };
    const clearValidationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setValidationErrors([]);
    }, []);
    const getFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field)=>{
        const error = validationErrors.find((err)=>err.field === field);
        return error ? error.message : null;
    }, [
        validationErrors
    ]);
    // Validate individual field in real-time
    const validateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, value, postIndex)=>{
        if (!value || value.trim() === '') {
            if (field === 'frequency') {
                return 'Please select a posting frequency';
            } else if (field === 'day' && postIndex !== undefined) {
                return `Please select a day for Day ${postIndex + 1}`;
            } else if (field === 'time' && postIndex !== undefined) {
                return `Please select a time for Time ${postIndex + 1}`;
            }
            return 'This field is required';
        }
        // Time format validation
        if (field === 'time' && value.trim() !== '') {
            const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
            if (!timeRegex.test(value)) {
                return 'Invalid time format. Use HH:MM format';
            }
        }
        return null;
    }, []);
    // Check if all required fields are filled
    const isFormComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((scheduleData)=>{
        if (!scheduleData.frequency || scheduleData.frequency.trim() === '') {
            return false;
        }
        const expectedPostCount = getExpectedPostCount(scheduleData.frequency);
        const validPosts = scheduleData.posts.filter((post)=>{
            if (scheduleData.frequency === 'Daily') {
                return post.time && post.time.trim() !== '';
            } else {
                return (post.day || post.date) && post.time && post.time.trim() !== '';
            }
        });
        return validPosts.length >= expectedPostCount;
    }, []);
    // Get validation summary
    const getValidationSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const fieldErrors = validationErrors.map((error)=>error.message);
        return {
            totalErrors: validationErrors.length,
            fieldErrors
        };
    }, [
        validationErrors
    ]);
    return {
        validateScheduleData,
        clearValidationErrors,
        getFieldError,
        validateField,
        isFormComplete,
        getValidationSummary,
        validationErrors,
        hasErrors: validationErrors.length > 0
    };
};
}),
"[project]/Desktop/task2/src/hooks/useSocialAccounts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocialAccounts",
    ()=>useSocialAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
;
const useSocialAccounts = ()=>{
    const [connectedAccounts, setConnectedAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [disconnecting, setDisconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const refetchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get access token from Redux store
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.accessToken);
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.user?.id);
    // Available social media platforms
    const availablePlatforms = [
        {
            id: 'instagram',
            name: 'Instagram',
            type: 'instagram.api',
            _type: 'Instagram Business',
            icon: 'instagram'
        },
        {
            id: 'twitter',
            name: 'X (Twitter)',
            type: 'twitter.profile',
            _type: 'X (Twitter) Account',
            icon: 'twitter'
        },
        {
            id: 'youtube',
            name: 'YouTube',
            type: 'google.youtube',
            _type: 'YouTube Channel',
            icon: 'youtube'
        },
        {
            id: 'tiktok',
            name: 'TikTok',
            type: 'tiktok.profile',
            _type: 'TikTok Account',
            icon: 'tiktok'
        },
        {
            id: 'facebook',
            name: 'Facebook',
            type: 'facebook.page',
            _type: 'Facebook Page',
            icon: 'facebook'
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            type: 'linkedin.profile',
            _type: 'LinkedIn Profile',
            icon: 'linkedin'
        }
    ];
    // Fetch connected accounts
    const fetchConnectedAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!accessToken) {
            setError('Authentication required');
            setLoading(false);
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNTS_PUBLIC), {
                method: 'GET',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
            });
            if (!response.ok) {
                throw new Error('Failed to fetch connected accounts');
            }
            const data = await response.json();
            if (data.success) {
                setConnectedAccounts(data.data);
            } else {
                throw new Error(data.message || 'Failed to fetch accounts');
            }
        } catch (err) {
            console.error('Error fetching connected accounts:', err);
            setError(err.message || 'Failed to fetch connected accounts');
        } finally{
            setLoading(false);
        }
    }, [
        accessToken
    ]);
    // Disconnect/Delete an account
    const disconnectAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountId)=>{
        if (!accessToken) {
            setError('Authentication required');
            return;
        }
        try {
            setDisconnecting(accountId);
            setError(null);
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNT_DELETE}/${accountId}`), {
                method: 'DELETE',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
            });
            if (!response.ok) {
                throw new Error('Failed to disconnect account');
            }
            const data = await response.json();
            if (data.success) {
                // Refetch connected accounts to get fresh data from server
                await fetchConnectedAccounts();
            } else {
                throw new Error(data.message || 'Failed to disconnect account');
            }
        } catch (err) {
            console.error('Error disconnecting account:', err);
            setError(err.message || 'Failed to disconnect account');
        } finally{
            setDisconnecting(null);
        }
    }, [
        accessToken,
        fetchConnectedAccounts
    ]);
    // Connect a new platform
    const connectPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (platformId)=>{
        if (!accessToken) {
            setError('Authentication required');
            return;
        }
        try {
            setLoading(true);
            setError(null);
            // Map platform IDs to provider names
            const providerMap = {
                'instagram': 'instagram',
                'twitter': 'twitter',
                'youtube': 'youtube',
                'tiktok': 'tiktok',
                'facebook': 'facebook',
                'linkedin': 'linkedin'
            };
            const provider = providerMap[platformId];
            if (!provider) {
                throw new Error('Invalid platform');
            }
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNTS_CONNECT), {
                method: 'POST',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
                body: JSON.stringify({
                    provider: provider,
                    user_id: userId,
                    postback_url: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BACKEND_URL}/api/webhook/socialbu`
                })
            });
            if (!response.ok) {
                throw new Error('Failed to initiate connection');
            }
            const data = await response.json();
            if (data.success && data.data?.connect_url) {
                // Open the connect URL in a new tab
                window.open(data.data.connect_url, '_blank');
            } else {
                throw new Error(data.message || 'Failed to get connection URL');
            }
        } catch (err) {
            console.error('Error connecting platform:', err);
            setError(err.message || 'Failed to connect platform');
        } finally{
            setLoading(false);
        }
    }, [
        accessToken
    ]);
    // Check if a platform is connected
    const isPlatformConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((platformType)=>{
        return connectedAccounts.some((account)=>account.type === platformType);
    }, [
        connectedAccounts
    ]);
    // Get connected account for a platform
    const getConnectedAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((platformType)=>{
        return connectedAccounts.find((account)=>account.type === platformType);
    }, [
        connectedAccounts
    ]);
    // Auto-fetch when access token is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (accessToken) {
            fetchConnectedAccounts();
        }
    }, [
        accessToken,
        fetchConnectedAccounts
    ]);
    // Auto-refetch when user returns to the website (handles webhook callbacks)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const debouncedRefetch = ()=>{
            if (refetchTimeoutRef.current) {
                clearTimeout(refetchTimeoutRef.current);
            }
            refetchTimeoutRef.current = setTimeout(()=>{
                if (accessToken) {
                    fetchConnectedAccounts();
                }
            }, 500);
        };
        const handleVisibilityChange = ()=>{
            if (!document.hidden && accessToken) {
                debouncedRefetch();
            }
        };
        const handleFocus = ()=>{
            if (accessToken) {
                debouncedRefetch();
            }
        };
        // Listen for visibility changes (tab switching)
        document.addEventListener('visibilitychange', handleVisibilityChange);
        // Listen for window focus (returning from another app)
        window.addEventListener('focus', handleFocus);
        return ()=>{
            if (refetchTimeoutRef.current) {
                clearTimeout(refetchTimeoutRef.current);
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('focus', handleFocus);
        };
    }, [
        accessToken,
        fetchConnectedAccounts
    ]);
    return {
        connectedAccounts,
        availablePlatforms,
        loading,
        error,
        disconnecting,
        fetchConnectedAccounts,
        disconnectAccount,
        connectPlatform,
        isPlatformConnected,
        getConnectedAccount
    };
};
}),
"[project]/Desktop/task2/src/hooks/useVoicesAndMusic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoicesAndMusic",
    ()=>useVoicesAndMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useVoicesAndMusic({ preset, selectedAvatars, gender }) {
    // Store ALL voices and music (low, medium, high combined)
    const [allVoices, setAllVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allMusic, setAllMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Filtered voices and music based on preset/type
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [musicList, setMusicList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voicesLoading, setVoicesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voicesError, setVoicesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [musicLoading, setMusicLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicError, setMusicError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper function to get gender - only from form dropdown, NOT from avatar
    const getGender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Only use gender from form dropdown, ignore avatar gender
        if (gender && gender.trim()) {
            return gender.toLowerCase().trim();
        }
        // Return null if no gender is selected from dropdown
        return null;
    }, [
        gender
    ]);
    // Fetch ALL voices (low, medium, high) when avatars are selected - NO energyCategory parameter
    const fetchAllVoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (gender)=>{
        try {
            setVoicesLoading(true);
            setVoicesError(null);
            // Fetch ALL voices without energyCategory parameter (only gender)
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getVoices(undefined, gender);
            if (response.success && response.data) {
                // Transform API response to Voice[] format
                const apiVoices = Array.isArray(response.data) ? response.data : response.data.voices || [];
                // Map API response to Voice interface
                // API returns 'energy' field (not energyCategory), use it to determine type
                // Check if voice is custom (has isCustom property or userId)
                const transformedVoices = apiVoices.map((voice)=>{
                    const isCustom = voice.isCustom === true || voice.userId && voice.userId.trim() !== '';
                    return {
                        id: voice.voice_id || voice.id || voice._id || '',
                        _id: voice._id || voice.id || undefined,
                        voice_id: voice.voice_id || voice.id || undefined,
                        name: voice.name || '',
                        artist: voice.artist || undefined,
                        type: isCustom ? 'custom' : voice.energy?.toLowerCase() || 'low',
                        previewUrl: voice.preview_url || voice.previewUrl || voice.preview || undefined,
                        preview_url: voice.preview_url || voice.previewUrl || voice.preview || undefined,
                        thumbnailUrl: voice.thumbnail_url || voice.thumbnailUrl || voice.thumbnail || undefined,
                        isCustom: isCustom,
                        gender: voice.gender || undefined,
                        energy: voice.energy || undefined,
                        description: voice.description || undefined,
                        userId: voice.userId || voice.user_id || undefined
                    };
                });
                setAllVoices(transformedVoices);
                setVoicesError(null);
            } else {
                setVoicesError(response.message || 'Failed to load voices');
                setAllVoices([]);
            }
        } catch (error) {
            setVoicesError(error.message || 'Failed to load voices');
            setAllVoices([]);
        } finally{
            setVoicesLoading(false);
        }
    }, []);
    // Fetch ALL music (low, medium, high) when avatars are selected - NO energyCategory parameter
    const fetchAllMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (gender)=>{
        try {
            setMusicLoading(true);
            setMusicError(null);
            // Fetch ALL music with gender parameter if provided
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getMusicTracks(undefined, gender);
            if (response.success && response.data) {
                // Transform API response to Voice[] format
                const musicData = Array.isArray(response.data) ? response.data : response.data.tracks || response.data.music || [];
                // Transform music data according to the API response structure
                // API should return energyCategory in the response, use it to determine type
                const transformedMusic = musicData.map((music)=>{
                    // Map s3PreviewUrl to preview_url and previewUrl for compatibility
                    const previewUrl = music.s3PreviewUrl || music.s3_preview_url || music.preview_url || music.previewUrl || music.preview || undefined;
                    return {
                        id: music.trackId || music.track_id || music.id || music._id || '',
                        _id: music._id || '',
                        name: music.name || '',
                        artist: music.metadata?.artist || music.artist || undefined,
                        type: music.energyCategory?.toLowerCase() || 'low',
                        previewUrl: previewUrl,
                        preview_url: previewUrl,
                        thumbnailUrl: music.thumbnail_url || music.thumbnailUrl || music.thumbnail || undefined,
                        s3FullTrackUrl: music.s3FullTrackUrl || music.s3_full_track_url || music.fullTrackUrl || undefined
                    };
                });
                setAllMusic(transformedMusic);
                setMusicError(null);
            } else {
                setMusicError(response.message || 'Failed to load music');
                setAllMusic([]);
            }
        } catch (error) {
            setMusicError(error.message || 'Failed to load music');
            setAllMusic([]);
        } finally{
            setMusicLoading(false);
        }
    }, []);
    // Effect to fetch voices and music ONLY when gender is selected from dropdown
    // APIs are NOT called when avatar is selected - only when gender is explicitly selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if gender is explicitly selected from dropdown
        const hasGender = gender && String(gender).trim().length > 0;
        console.log('🎵 useVoicesAndMusic - Gender effect triggered:', {
            gender,
            hasGender
        });
        // Only call APIs if gender is explicitly selected from dropdown
        // Avatar selection does NOT trigger API calls - removed avatar dependencies
        if (hasGender) {
            // Normalize gender to lowercase
            const currentGender = String(gender).trim().toLowerCase();
            console.log('🎵 Calling APIs with gender:', currentGender);
            // Call APIs with gender parameter (only when gender is selected)
            fetchAllVoices(currentGender);
            fetchAllMusic(currentGender);
        } else {
            // Clear data only if no gender (but keep data if avatar is selected without gender)
            const hasAvatar = selectedAvatars.body || selectedAvatars.title || selectedAvatars.conclusion;
            if (!hasAvatar) {
                console.log('🎵 Clearing data - no gender and no avatar');
                setAllVoices([]);
                setAllMusic([]);
                setVoices([]);
                setMusicList([]);
                setVoicesError(null);
                setMusicError(null);
            } else {
                console.log('🎵 No gender selected but avatar exists - keeping existing data');
            }
        }
    // If avatar is selected but no gender - do nothing (don't call APIs)
    // Note: selectedAvatars is used inside but not in deps - this is intentional
    // We only want to react to gender changes, not avatar changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gender,
        fetchAllVoices,
        fetchAllMusic
    ]);
    // Effect to filter voices and music based on preset
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!preset || !preset.trim()) {
            // If no preset, show all voices and music
            setVoices(allVoices);
            setMusicList(allMusic);
            return;
        }
        const energyCategory = preset.toLowerCase();
        // Filter voices and music based on preset
        const filteredVoices = allVoices.filter((v)=>v.type === energyCategory);
        const filteredMusic = allMusic.filter((m)=>m.type === energyCategory);
        setVoices(filteredVoices);
        setMusicList(filteredMusic);
    }, [
        preset,
        allVoices,
        allMusic
    ]);
    return {
        voices,
        voicesLoading,
        voicesError,
        musicList,
        musicLoading,
        musicError,
        allVoices,
        allMusic
    };
}
}),
];

//# sourceMappingURL=Desktop_task2_src_hooks_914803fd._.js.map