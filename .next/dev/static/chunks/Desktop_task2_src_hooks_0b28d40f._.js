(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/task2/src/hooks/use-analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnalytics",
    ()=>useAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
class Analytics {
    events = [];
    isEnabled;
    constructor(){
        this.isEnabled = ("TURBOPACK compile-time value", "development") === "production" || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
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
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
            window.gtag("event", event.event, event.properties);
        }
        // Example implementation for Mixpanel
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.mixpanel) {
            window.mixpanel.track(event.event, event.properties);
        }
        // Example implementation for custom analytics endpoint
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
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
    _s();
    const trackNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackNavigation]": (from, to, method = "click")=>{
            analytics.track({
                event: "navigation",
                properties: {
                    from,
                    to,
                    method
                }
            });
        }
    }["useAnalytics.useCallback[trackNavigation]"], []);
    const trackButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackButtonClick]": (button, location, action)=>{
            analytics.track({
                event: "button_click",
                properties: {
                    button,
                    location,
                    action
                }
            });
        }
    }["useAnalytics.useCallback[trackButtonClick]"], []);
    const trackCustomEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackCustomEvent]": (event, properties)=>{
            analytics.track({
                event,
                properties
            });
        }
    }["useAnalytics.useCallback[trackCustomEvent]"], []);
    return {
        trackNavigation,
        trackButtonClick,
        trackCustomEvent,
        getEvents: analytics.getEvents.bind(analytics),
        clearEvents: analytics.clearEvents.bind(analytics)
    };
}
_s(useAnalytics, "CZ+M09mrqsSnN9z1Jb9s2/4/aLw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/use-active-section.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveSection",
    ()=>useActiveSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useActiveSection(sectionIds, offset = 100) {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveSection.useEffect": ()=>{
            const handleScroll = {
                "useActiveSection.useEffect.handleScroll": ()=>{
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
                }
            }["useActiveSection.useEffect.handleScroll"];
            // Initial check
            handleScroll();
            // Add scroll listener with throttling
            let ticking = false;
            const throttledHandleScroll = {
                "useActiveSection.useEffect.throttledHandleScroll": ()=>{
                    if (!ticking) {
                        requestAnimationFrame({
                            "useActiveSection.useEffect.throttledHandleScroll": ()=>{
                                handleScroll();
                                ticking = false;
                            }
                        }["useActiveSection.useEffect.throttledHandleScroll"]);
                        ticking = true;
                    }
                }
            }["useActiveSection.useEffect.throttledHandleScroll"];
            window.addEventListener('scroll', throttledHandleScroll, {
                passive: true
            });
            return ({
                "useActiveSection.useEffect": ()=>{
                    window.removeEventListener('scroll', throttledHandleScroll);
                }
            })["useActiveSection.useEffect"];
        }
    }["useActiveSection.useEffect"], [
        sectionIds,
        offset
    ]);
    return activeSection;
}
_s(useActiveSection, "dWgpTvZatVa9XwrMIJksxmyV2z8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useModalScrollLock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceRestoreScroll",
    ()=>forceRestoreScroll,
    "useModalScrollLock",
    ()=>useModalScrollLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// Global counter to track how many modals are open
let modalCount = 0;
let originalBodyStyle = '';
function useModalScrollLock(isOpen) {
    _s();
    const isLockedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalScrollLock.useEffect": ()=>{
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
            return ({
                "useModalScrollLock.useEffect": ()=>{
                    if (isLockedRef.current) {
                        modalCount--;
                        isLockedRef.current = false;
                        if (modalCount <= 0) {
                            modalCount = 0;
                            document.body.style.overflow = originalBodyStyle;
                            originalBodyStyle = '';
                        }
                    }
                }
            })["useModalScrollLock.useEffect"];
        }
    }["useModalScrollLock.useEffect"], [
        isOpen
    ]);
}
_s(useModalScrollLock, "ZiAgbK+Sy2I3mJgn2SCtX93V2h8=");
function forceRestoreScroll() {
    modalCount = 0;
    document.body.style.overflow = originalBodyStyle;
    originalBodyStyle = '';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useTokenValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTokenValidation",
    ()=>useTokenValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/slices/userSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/jwt-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useTokenValidation = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const checkTokenExpiration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTokenValidation.useCallback[checkTokenExpiration]": ()=>{
            const token = localStorage.getItem('accessToken');
            if (!token) {
                return;
            }
            // Check if token is expired
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenExpired"])(token)) {
                console.log('Token expired, logging out user');
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
                showNotification('Token expired. Please login again.', 'error');
                return;
            }
            // Check if token is expiring soon (within 1 hour)
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenExpiringSoon"])(token, 60)) {
                console.log('Token expiring soon, showing warning to user');
            // You can show a notification to the user here
            // For now, we'll just log it
            }
        }
    }["useTokenValidation.useCallback[checkTokenExpiration]"], [
        dispatch,
        showNotification
    ]);
    const validateTokenWithServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTokenValidation.useCallback[validateTokenWithServer]": async ()=>{
            const token = localStorage.getItem('accessToken');
            if (!token) {
                return false;
            }
            try {
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.AUTH.VALIDATE_TOKEN), {
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
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
                    showNotification('Session expired. Please login again.', 'error');
                    return false;
                }
                const data = await response.json();
                if (!data.success) {
                    console.log('Server validation failed, logging out user');
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleTokenExpiration"])();
                    showNotification('Token expired. Please login again.', 'error');
                    return false;
                }
                return true;
            } catch (error) {
                console.error('Token validation error:', error);
                return false;
            }
        }
    }["useTokenValidation.useCallback[validateTokenWithServer]"], [
        dispatch,
        showNotification
    ]);
    // Check token expiration on mount and every 5 minutes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTokenValidation.useEffect": ()=>{
            checkTokenExpiration();
            const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000); // 5 minutes
            return ({
                "useTokenValidation.useEffect": ()=>clearInterval(interval)
            })["useTokenValidation.useEffect"];
        }
    }["useTokenValidation.useEffect"], [
        checkTokenExpiration
    ]);
    // Validate token with server on mount (only if token exists)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTokenValidation.useEffect": ()=>{
            const token = localStorage.getItem('accessToken');
            if (token) {
                validateTokenWithServer();
            }
        }
    }["useTokenValidation.useEffect"], [
        validateTokenWithServer
    ]);
    return {
        checkTokenExpiration,
        validateTokenWithServer
    };
};
_s(useTokenValidation, "elCLIF/ivIgLc3qR4Xhn0aFjKRk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useAuthErrorHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthErrorHandler",
    ()=>useAuthErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/slices/userSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/jwt-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useAuthErrorHandler() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuthErrorHandler.useEffect": ()=>{
            // Create a global fetch interceptor
            const originalFetch = window.fetch;
            window.fetch = ({
                "useAuthErrorHandler.useEffect": async (...args)=>{
                    try {
                        const response = await originalFetch(...args);
                        // Check if response is 401 (Unauthorized)
                        if (response.status === 401) {
                            const responseData = await response.clone().json().catch({
                                "useAuthErrorHandler.useEffect": ()=>({})
                            }["useAuthErrorHandler.useEffect"]);
                            // Check if it's a token-related error
                            if (responseData.message?.includes('token') || responseData.message?.includes('unauthorized') || responseData.message?.includes('expired')) {
                                // Safeguard: only force logout if the client-side token is missing or actually expired
                                const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('accessToken') : "TURBOPACK unreachable";
                                const shouldLogout = !token || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$jwt$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenExpired"])(token);
                                if (shouldLogout) {
                                    console.log('🔐 Auth Error Handler: Token expired or invalid, logging out user');
                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
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
                                // If token exists and is not expired client-side, don't auto-logout; let the caller handle the 401
                                console.log('🔐 Auth Error Handler: 401 received but token appears valid client-side; not logging out');
                                return response;
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
                }
            })["useAuthErrorHandler.useEffect"];
            // Cleanup function
            return ({
                "useAuthErrorHandler.useEffect": ()=>{
                    window.fetch = originalFetch;
                }
            })["useAuthErrorHandler.useEffect"];
        }
    }["useAuthErrorHandler.useEffect"], [
        dispatch,
        showNotification
    ]);
}
_s(useAuthErrorHandler, "5Dozs7UMqrV34bFu14BibquhtMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useDeploymentReload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeploymentReload",
    ()=>useDeploymentReload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useDeploymentReload = ()=>{
    _s();
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastDeploymentIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const checkIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const broadcastChannelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isReloadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDeploymentReload.useEffect": ()=>{
            // Only run in browser environment
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            console.log('🔄 Deployment reload: Hook initialized', {
                hostname: window.location.hostname,
                nodeEnv: ("TURBOPACK compile-time value", "development"),
                timestamp: new Date().toISOString()
            });
            // Only run in production (Vercel deployments)
            const isProduction = ("TURBOPACK compile-time value", "development") === 'production' || window.location.hostname.includes('vercel.app') || window.location.hostname.includes('edgeairealty.com');
            if (!isProduction) {
                console.log('🔄 Deployment reload: Skipping in development', {
                    reason: 'Not in production environment',
                    hostname: window.location.hostname,
                    nodeEnv: ("TURBOPACK compile-time value", "development")
                });
                return;
            }
            console.log('🔄 Deployment reload: Production mode detected - Starting deployment monitoring', {
                hostname: window.location.hostname,
                timestamp: new Date().toISOString()
            });
            // Initialize BroadcastChannel for cross-tab communication
            try {
                broadcastChannelRef.current = new BroadcastChannel('deployment-reload');
                console.log('🔄 Deployment reload: BroadcastChannel initialized for cross-tab communication');
                broadcastChannelRef.current.onmessage = ({
                    "useDeploymentReload.useEffect": (event)=>{
                        console.log('🔄 Deployment reload: Message received from another tab', event.data);
                        if (event.data.type === 'new-deployment' && !isReloadingRef.current) {
                            console.log('🔄 Deployment reload: New deployment detected from another tab, reloading...', {
                                deploymentId: event.data.deploymentId,
                                timestamp: new Date().toISOString()
                            });
                            isReloadingRef.current = true;
                            // Hard refresh with cache bypass
                            console.log('🔄 Deployment reload: Executing hard reload from cross-tab message...');
                            window.location.reload();
                        }
                    }
                })["useDeploymentReload.useEffect"];
            } catch (error) {
                console.warn('🔄 Deployment reload: BroadcastChannel not supported', error);
            }
            // Function to check for new deployments
            const checkDeployment = {
                "useDeploymentReload.useEffect.checkDeployment": async ()=>{
                    if (isReloadingRef.current) {
                        console.log('🔄 Deployment reload: Check skipped (reload already in progress)');
                        return;
                    }
                    console.log('🔄 Deployment reload: Checking for new deployment...', {
                        timestamp: new Date().toISOString(),
                        lastDeploymentId: lastDeploymentIdRef.current
                    });
                    try {
                        setIsChecking(true);
                        // Call deployment check API
                        console.log('🔄 Deployment reload: Calling /api/deployment/check endpoint...');
                        const response = await fetch('/api/deployment/check', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            cache: 'no-store'
                        });
                        console.log('🔄 Deployment reload: API response received', {
                            status: response.status,
                            ok: response.ok,
                            timestamp: new Date().toISOString()
                        });
                        if (!response.ok) {
                            console.warn('🔄 Deployment reload: Check endpoint returned error', {
                                status: response.status,
                                statusText: response.statusText,
                                timestamp: new Date().toISOString()
                            });
                            return;
                        }
                        const data = await response.json();
                        console.log('🔄 Deployment reload: API response data', {
                            success: data.success,
                            hasDeployment: !!data.deployment,
                            deploymentId: data.deployment?.deploymentId || data.deployment?.id,
                            timestamp: new Date().toISOString()
                        });
                        if (data.success && data.deployment) {
                            // Use deploymentId, id, or buildTime as identifier
                            const currentDeploymentId = data.deployment.deploymentId || data.deployment.id || data.deployment.buildTime || null;
                            if (!currentDeploymentId) {
                                console.warn('🔄 Deployment reload: No deployment identifier found in response');
                                return;
                            }
                            // First check - just store the deployment ID
                            if (!lastDeploymentIdRef.current) {
                                lastDeploymentIdRef.current = currentDeploymentId;
                                console.log('🔄 Deployment reload: ✅ Initial deployment ID stored', {
                                    deploymentId: currentDeploymentId,
                                    timestamp: new Date().toISOString(),
                                    message: 'No reload needed - this is the first check'
                                });
                                return;
                            }
                            console.log('🔄 Deployment reload: Comparing deployment IDs', {
                                stored: lastDeploymentIdRef.current,
                                current: currentDeploymentId,
                                match: currentDeploymentId === lastDeploymentIdRef.current,
                                timestamp: new Date().toISOString()
                            });
                            // Check if deployment ID has changed (new deployment)
                            if (currentDeploymentId !== lastDeploymentIdRef.current) {
                                console.log('🔄 Deployment reload: 🚨 NEW DEPLOYMENT DETECTED!', {
                                    oldDeploymentId: lastDeploymentIdRef.current,
                                    newDeploymentId: currentDeploymentId,
                                    timestamp: new Date().toISOString(),
                                    action: 'Will reload page in 2 seconds'
                                });
                                // Update stored deployment ID
                                lastDeploymentIdRef.current = currentDeploymentId;
                                // Broadcast to other tabs
                                if (broadcastChannelRef.current) {
                                    try {
                                        console.log('🔄 Deployment reload: Broadcasting to other tabs...', {
                                            deploymentId: currentDeploymentId,
                                            timestamp: new Date().toISOString()
                                        });
                                        broadcastChannelRef.current.postMessage({
                                            type: 'new-deployment',
                                            deploymentId: currentDeploymentId
                                        });
                                        console.log('🔄 Deployment reload: ✅ Broadcast sent to other tabs');
                                    } catch (error) {
                                        console.warn('🔄 Deployment reload: ❌ Failed to broadcast to other tabs', error);
                                    }
                                } else {
                                    console.log('🔄 Deployment reload: ⚠️ BroadcastChannel not available - skipping cross-tab notification');
                                }
                                // Set flag to prevent multiple reloads
                                isReloadingRef.current = true;
                                console.log('🔄 Deployment reload: Reload flag set to prevent multiple reloads');
                                // Show a brief message to user
                                if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.document) {
                                    console.log('🔄 Deployment reload: Creating user notification...');
                                    const notification = document.createElement('div');
                                    notification.textContent = 'New version available. Reloading...';
                                    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #5046E5;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                z-index: 9999;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: slideIn 0.3s ease-out;
              `;
                                    // Add animation
                                    const style = document.createElement('style');
                                    style.textContent = `
                @keyframes slideIn {
                  from {
                    transform: translateX(100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
              `;
                                    document.head.appendChild(style);
                                    document.body.appendChild(notification);
                                    // Remove notification after 2 seconds and reload
                                    console.log('🔄 Deployment reload: ⏱️ Setting 2-second delay before reload...', {
                                        timestamp: new Date().toISOString(),
                                        reloadTime: new Date(Date.now() + 2000).toISOString()
                                    });
                                    const reloadTimeout = setTimeout({
                                        "useDeploymentReload.useEffect.checkDeployment.reloadTimeout": ()=>{
                                            console.log('🔄 Deployment reload: 🔄 EXECUTING HARD RELOAD NOW!', {
                                                timestamp: new Date().toISOString(),
                                                deploymentId: currentDeploymentId
                                            });
                                            try {
                                                if (notification.parentNode) {
                                                    notification.parentNode.removeChild(notification);
                                                    console.log('🔄 Deployment reload: ✅ Notification removed');
                                                }
                                                if (style.parentNode) {
                                                    style.parentNode.removeChild(style);
                                                    console.log('🔄 Deployment reload: ✅ Style removed');
                                                }
                                                // Hard refresh with cache bypass
                                                // Note: reload() bypasses cache in modern browsers
                                                console.log('🔄 Deployment reload: 🚀 Calling window.location.reload()...');
                                                window.location.reload();
                                            } catch (error) {
                                                console.warn('🔄 Deployment reload: ❌ Error during reload', error);
                                                // Fallback: try direct navigation
                                                console.log('🔄 Deployment reload: 🔄 Trying fallback reload method...');
                                                window.location.href = window.location.href;
                                            }
                                        }
                                    }["useDeploymentReload.useEffect.checkDeployment.reloadTimeout"], 2000);
                                // Store timeout for potential cleanup
                                // Note: This will be cleared on page reload anyway
                                } else {
                                    // Fallback: immediate reload
                                    console.log('🔄 Deployment reload: 🔄 Executing immediate reload (fallback)...', {
                                        timestamp: new Date().toISOString(),
                                        deploymentId: currentDeploymentId
                                    });
                                    window.location.reload();
                                }
                            } else {
                                console.log('🔄 Deployment reload: ✅ Same deployment ID - no reload needed', {
                                    deploymentId: currentDeploymentId,
                                    timestamp: new Date().toISOString()
                                });
                            }
                        } else {
                            console.warn('🔄 Deployment reload: ⚠️ Invalid API response structure', {
                                hasSuccess: 'success' in data,
                                hasDeployment: 'deployment' in data,
                                data: data
                            });
                        }
                    } catch (error) {
                        console.warn('🔄 Deployment reload: ❌ Error checking deployment', {
                            error: error instanceof Error ? error.message : String(error),
                            stack: error instanceof Error ? error.stack : undefined,
                            timestamp: new Date().toISOString()
                        });
                    } finally{
                        setIsChecking(false);
                        console.log('🔄 Deployment reload: Check completed', {
                            isChecking: false,
                            timestamp: new Date().toISOString()
                        });
                    }
                }
            }["useDeploymentReload.useEffect.checkDeployment"];
            // Initial check after a short delay
            console.log('🔄 Deployment reload: ⏱️ Scheduling initial check in 5 seconds...', {
                timestamp: new Date().toISOString(),
                checkTime: new Date(Date.now() + 5000).toISOString()
            });
            const initialTimeout = setTimeout({
                "useDeploymentReload.useEffect.initialTimeout": ()=>{
                    console.log('🔄 Deployment reload: 🕐 Initial check triggered (5 seconds after page load)');
                    checkDeployment();
                }
            }["useDeploymentReload.useEffect.initialTimeout"], 5000) // Wait 5 seconds after page load
            ;
            // Set up polling interval (check every 2 minutes)
            console.log('🔄 Deployment reload: ⏱️ Setting up polling interval (every 2 minutes)...', {
                interval: '2 minutes',
                timestamp: new Date().toISOString()
            });
            checkIntervalRef.current = setInterval({
                "useDeploymentReload.useEffect": ()=>{
                    console.log('🔄 Deployment reload: 🕐 Polling interval triggered (2 minutes elapsed)');
                    checkDeployment();
                }
            }["useDeploymentReload.useEffect"], 2 * 60 * 1000); // 2 minutes
            // Also check when page becomes visible (user returns to tab)
            const handleVisibilityChange = {
                "useDeploymentReload.useEffect.handleVisibilityChange": ()=>{
                    if (!document.hidden && !isReloadingRef.current) {
                        console.log('🔄 Deployment reload: 👁️ Page became visible - checking for new deployment...', {
                            timestamp: new Date().toISOString(),
                            wasHidden: document.hidden
                        });
                        checkDeployment();
                    } else if (document.hidden) {
                        console.log('🔄 Deployment reload: 👁️ Page hidden - skipping check', {
                            timestamp: new Date().toISOString()
                        });
                    }
                }
            }["useDeploymentReload.useEffect.handleVisibilityChange"];
            document.addEventListener('visibilitychange', handleVisibilityChange);
            console.log('🔄 Deployment reload: ✅ Visibility change listener added');
            console.log('🔄 Deployment reload: ✅ All setup complete!', {
                initialCheckDelay: '5 seconds',
                pollingInterval: '2 minutes',
                broadcastChannel: broadcastChannelRef.current ? 'enabled' : 'disabled',
                timestamp: new Date().toISOString()
            });
            // Cleanup
            return ({
                "useDeploymentReload.useEffect": ()=>{
                    console.log('🔄 Deployment reload: 🧹 Cleaning up...', {
                        timestamp: new Date().toISOString()
                    });
                    clearTimeout(initialTimeout);
                    console.log('🔄 Deployment reload: ✅ Initial timeout cleared');
                    if (checkIntervalRef.current) {
                        clearInterval(checkIntervalRef.current);
                        console.log('🔄 Deployment reload: ✅ Polling interval cleared');
                    }
                    if (broadcastChannelRef.current) {
                        broadcastChannelRef.current.close();
                        console.log('🔄 Deployment reload: ✅ BroadcastChannel closed');
                    }
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    console.log('🔄 Deployment reload: ✅ Visibility change listener removed');
                    console.log('🔄 Deployment reload: ✅ Cleanup complete');
                }
            })["useDeploymentReload.useEffect"];
        }
    }["useDeploymentReload.useEffect"], []);
    return {
        isChecking
    };
};
_s(useDeploymentReload, "hDAz9tm4DpdOhdxx5kL+qQSASAg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useUnifiedSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUnifiedSocket",
    ()=>useUnifiedSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const PENDING_VIDEOS_KEY = 'pendingVideos';
const useUnifiedSocket = (userId)=>{
    _s();
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUpdates, setVideoUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [avatarUpdates, setAvatarUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [videoAvatarUpdates, setVideoAvatarUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scheduleUpdates, setScheduleUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingVideos, setPendingVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    // Track processed events to prevent duplicates
    const processedEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const socketConnectedHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track if we've synced with DB to avoid duplicate syncing
    const hasSyncedWithDB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track if we should skip saving to localStorage (to prevent overwriting after DB sync)
    const skipSaveToLocalStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track failed videos to avoid duplicate notifications
    const notifiedFailedVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Track completed videos to avoid duplicate notifications
    const notifiedCompletedVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const clearVideoUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[clearVideoUpdates]": ()=>{
            setVideoUpdates([]);
        }
    }["useUnifiedSocket.useCallback[clearVideoUpdates]"], []);
    const clearCompletedVideoUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[clearCompletedVideoUpdates]": ()=>{
            setVideoUpdates({
                "useUnifiedSocket.useCallback[clearCompletedVideoUpdates]": (prev)=>prev.filter({
                        "useUnifiedSocket.useCallback[clearCompletedVideoUpdates]": (update)=>update.status !== 'completed' && update.status !== 'success' && update.status !== 'failed'
                    }["useUnifiedSocket.useCallback[clearCompletedVideoUpdates]"])
            }["useUnifiedSocket.useCallback[clearCompletedVideoUpdates]"]);
        }
    }["useUnifiedSocket.useCallback[clearCompletedVideoUpdates]"], []);
    const clearAvatarUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[clearAvatarUpdates]": ()=>{
            setAvatarUpdates([]);
        }
    }["useUnifiedSocket.useCallback[clearAvatarUpdates]"], []);
    const clearVideoAvatarUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[clearVideoAvatarUpdates]": ()=>{
            setVideoAvatarUpdates([]);
        }
    }["useUnifiedSocket.useCallback[clearVideoAvatarUpdates]"], []);
    const clearScheduleUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[clearScheduleUpdates]": ()=>{
            setScheduleUpdates([]);
        }
    }["useUnifiedSocket.useCallback[clearScheduleUpdates]"], []);
    const addPendingVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[addPendingVideo]": (video)=>{
            setPendingVideos({
                "useUnifiedSocket.useCallback[addPendingVideo]": (prev)=>[
                        ...prev,
                        video
                    ]
            }["useUnifiedSocket.useCallback[addPendingVideo]"]);
            console.log('➕ Added pending video:', video);
        }
    }["useUnifiedSocket.useCallback[addPendingVideo]"], []);
    const removePendingVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[removePendingVideo]": ()=>{
            setPendingVideos({
                "useUnifiedSocket.useCallback[removePendingVideo]": (prev)=>{
                    if (prev.length === 0) {
                        console.log('⚠️ No pending videos to remove');
                        return prev;
                    }
                    const removed = prev[0];
                    const remaining = prev.slice(1);
                    console.log('➖ Removed pending video (FIFO):', removed);
                    return remaining;
                }
            }["useUnifiedSocket.useCallback[removePendingVideo]"]);
        }
    }["useUnifiedSocket.useCallback[removePendingVideo]"], []);
    // Sync pending videos with database - DB is the source of truth
    const syncPendingVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUnifiedSocket.useCallback[syncPendingVideos]": async (userId)=>{
            try {
                console.log('🔍 Syncing pending videos with DB for user:', userId);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId);
                if (result.success && result.data) {
                    const { workflows } = result.data;
                    // Log all workflows to debug status values
                    console.log('📊 All workflows from DB:', workflows.map({
                        "useUnifiedSocket.useCallback[syncPendingVideos]": (w)=>({
                                id: w._id,
                                status: w.status,
                                title: w.title
                            })
                    }["useUnifiedSocket.useCallback[syncPendingVideos]"]));
                    // Check for failed workflows and show notifications
                    // Collect notifications to show after state update (to avoid React warning)
                    const notificationsToShow = [];
                    // Use functional update to access current pending videos
                    setPendingVideos({
                        "useUnifiedSocket.useCallback[syncPendingVideos]": (prev)=>{
                            // Create a map of current video IDs (both DB format and temporary format)
                            const currentVideoIds = new Set();
                            const currentVideoTitles = new Map() // Map title to video ID
                            ;
                            prev.forEach({
                                "useUnifiedSocket.useCallback[syncPendingVideos]": (v)=>{
                                    currentVideoIds.add(v.id);
                                    currentVideoTitles.set(v.title, v.id);
                                    // Also extract workflow ID if it's in DB format (video-{_id}-{executionId})
                                    const match = v.id.match(/^video-(.+)-(.+)$/);
                                    if (match) {
                                        currentVideoIds.add(match[1]); // Add workflow _id
                                    }
                                }
                            }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                            // Find failed workflows
                            const failedWorkflows = workflows.filter({
                                "useUnifiedSocket.useCallback[syncPendingVideos].failedWorkflows": (workflow)=>workflow.status === 'failed'
                            }["useUnifiedSocket.useCallback[syncPendingVideos].failedWorkflows"]);
                            // Collect failed video notifications (only once per video)
                            failedWorkflows.forEach({
                                "useUnifiedSocket.useCallback[syncPendingVideos]": (workflow)=>{
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
                                }
                            }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                            // Find completed workflows
                            const completedWorkflows = workflows.filter({
                                "useUnifiedSocket.useCallback[syncPendingVideos].completedWorkflows": (workflow)=>workflow.status === 'completed'
                            }["useUnifiedSocket.useCallback[syncPendingVideos].completedWorkflows"]);
                            // Collect completed video notifications (only once per video)
                            completedWorkflows.forEach({
                                "useUnifiedSocket.useCallback[syncPendingVideos]": (workflow)=>{
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
                                }
                            }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                            return prev // Return unchanged for now, we'll update below
                            ;
                        }
                    }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                    // Show notifications after state update (defer to avoid React warning)
                    if (notificationsToShow.length > 0) {
                        setTimeout({
                            "useUnifiedSocket.useCallback[syncPendingVideos]": ()=>{
                                notificationsToShow.forEach({
                                    "useUnifiedSocket.useCallback[syncPendingVideos]": ({ message, type })=>{
                                        showNotification(message, type, type === 'error' ? 15000 : undefined);
                                    }
                                }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                            }
                        }["useUnifiedSocket.useCallback[syncPendingVideos]"], 0);
                    }
                    // Filter workflows that are not completed or failed (include all active states)
                    const pendingWorkflows = workflows.filter({
                        "useUnifiedSocket.useCallback[syncPendingVideos].pendingWorkflows": (workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed'
                    }["useUnifiedSocket.useCallback[syncPendingVideos].pendingWorkflows"]);
                    console.log('📊 Found pending workflows from DB:', pendingWorkflows.length, 'workflows');
                    // DB is the source of truth - always sync with DB
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Create videos from DB workflows
                        const videosFromDB = pendingWorkflows.map({
                            "useUnifiedSocket.useCallback[syncPendingVideos].videosFromDB": (workflow, index)=>({
                                    id: `video-${workflow._id}-${workflow.executionId}`,
                                    title: workflow.title || `Video ${index + 1}`,
                                    status: 'processing',
                                    timestamp: workflow.createdAt || new Date().toISOString(),
                                    message: 'Your video creation is in progress'
                                })
                        }["useUnifiedSocket.useCallback[syncPendingVideos].videosFromDB"]);
                        // Remove failed videos from pending list (they're already filtered out above)
                        // This will automatically remove them from toasts and tiles
                        skipSaveToLocalStorage.current = true;
                        setPendingVideos(videosFromDB);
                        hasSyncedWithDB.current = true;
                        console.log('✅ Synced pending videos with DB (source of truth):', videosFromDB.length, 'videos');
                        // Clean up notified failed/completed videos that are no longer in the system
                        const currentVideoIds = new Set(videosFromDB.map({
                            "useUnifiedSocket.useCallback[syncPendingVideos]": (v)=>v.id
                        }["useUnifiedSocket.useCallback[syncPendingVideos]"]));
                        notifiedFailedVideos.current.forEach({
                            "useUnifiedSocket.useCallback[syncPendingVideos]": (videoId)=>{
                                if (!currentVideoIds.has(videoId)) {
                                // Keep in set for a while to avoid duplicate notifications if user creates same video again
                                // Will be cleaned up on logout or after some time
                                }
                            }
                        }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                        notifiedCompletedVideos.current.forEach({
                            "useUnifiedSocket.useCallback[syncPendingVideos]": (videoId)=>{
                                if (!currentVideoIds.has(videoId)) {
                                // Keep in set for a while to avoid duplicate notifications if user creates same video again
                                // Will be cleaned up on logout or after some time
                                }
                            }
                        }["useUnifiedSocket.useCallback[syncPendingVideos]"]);
                        // Reset skip flag after a short delay
                        setTimeout({
                            "useUnifiedSocket.useCallback[syncPendingVideos]": ()=>{
                                skipSaveToLocalStorage.current = false;
                            }
                        }["useUnifiedSocket.useCallback[syncPendingVideos]"], 100);
                    }
                } else {
                    // If DB check fails, try to load from localStorage as fallback
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !hasSyncedWithDB.current) {
                        try {
                            const saved = localStorage.getItem(PENDING_VIDEOS_KEY);
                            if (saved) {
                                const parsed = JSON.parse(saved);
                                if (Array.isArray(parsed) && parsed.length > 0) {
                                    skipSaveToLocalStorage.current = true;
                                    setPendingVideos(parsed);
                                    console.log('📦 Loaded pending videos from localStorage (DB unavailable):', parsed.length, 'videos');
                                    setTimeout({
                                        "useUnifiedSocket.useCallback[syncPendingVideos]": ()=>{
                                            skipSaveToLocalStorage.current = false;
                                        }
                                    }["useUnifiedSocket.useCallback[syncPendingVideos]"], 100);
                                }
                            }
                        } catch (error) {
                            console.warn('Failed to load pending videos from localStorage:', error);
                        }
                    }
                }
            } catch (error) {
                console.error('Failed to sync pending videos:', error);
                // Fallback to localStorage if DB sync fails
                if (("TURBOPACK compile-time value", "object") !== 'undefined' && !hasSyncedWithDB.current) {
                    try {
                        const saved = localStorage.getItem(PENDING_VIDEOS_KEY);
                        if (saved) {
                            const parsed = JSON.parse(saved);
                            if (Array.isArray(parsed) && parsed.length > 0) {
                                skipSaveToLocalStorage.current = true;
                                setPendingVideos(parsed);
                                console.log('📦 Loaded pending videos from localStorage (fallback):', parsed.length, 'videos');
                                setTimeout({
                                    "useUnifiedSocket.useCallback[syncPendingVideos]": ()=>{
                                        skipSaveToLocalStorage.current = false;
                                    }
                                }["useUnifiedSocket.useCallback[syncPendingVideos]"], 100);
                            }
                        }
                    } catch (err) {
                        console.warn('Failed to load pending videos from localStorage:', err);
                    }
                }
            }
        }
    }["useUnifiedSocket.useCallback[syncPendingVideos]"], [
        showNotification
    ]);
    // Initial sync with DB on mount if userId is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnifiedSocket.useEffect": ()=>{
            if (userId && !hasSyncedWithDB.current) {
                console.log('🔄 Initial sync with DB on mount');
                syncPendingVideos(userId);
            }
        }
    }["useUnifiedSocket.useEffect"], [
        userId,
        syncPendingVideos
    ]);
    // Continuous polling every 20 seconds regardless of connection status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnifiedSocket.useEffect": ()=>{
            if (!userId) return;
            const pollInterval = setInterval({
                "useUnifiedSocket.useEffect.pollInterval": ()=>{
                    console.log('🔄 Periodic polling: syncing pending videos with DB (every 20s)');
                    syncPendingVideos(userId);
                }
            }["useUnifiedSocket.useEffect.pollInterval"], 60000) // Poll every 60 seconds continuously
            ;
            return ({
                "useUnifiedSocket.useEffect": ()=>clearInterval(pollInterval)
            })["useUnifiedSocket.useEffect"];
        }
    }["useUnifiedSocket.useEffect"], [
        userId,
        syncPendingVideos
    ]);
    // Save pending videos to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnifiedSocket.useEffect": ()=>{
            if (userId && ("TURBOPACK compile-time value", "object") !== 'undefined' && !skipSaveToLocalStorage.current) {
                try {
                    if (pendingVideos.length > 0) {
                        localStorage.setItem(PENDING_VIDEOS_KEY, JSON.stringify(pendingVideos));
                        console.log('💾 Saved pending videos to localStorage:', pendingVideos.length, 'videos');
                    } else {
                        localStorage.removeItem(PENDING_VIDEOS_KEY);
                        console.log('🧹 Cleared pending videos from localStorage');
                    }
                } catch (error) {
                    console.warn('Failed to save pending videos to localStorage:', error);
                }
            } else if (skipSaveToLocalStorage.current) {
                console.log('⏭️ Skipping save to localStorage (just synced with DB)');
            }
        }
    }["useUnifiedSocket.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnifiedSocket.useEffect": ()=>{
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
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            localStorage.removeItem(PENDING_VIDEOS_KEY);
                            console.log('🧹 Cleared pending videos from localStorage on logout');
                        } catch (error) {
                            console.warn('Failed to clear pending videos from localStorage:', error);
                        }
                    }
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
            const backendUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])('').replace('/api', '');
            console.log('🔌 Unified WebSocket connecting to:', backendUrl);
            // Create new socket connection
            const newSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(backendUrl, {
                transports: [
                    'websocket'
                ],
                autoConnect: true,
                reconnection: true,
                reconnectionAttempts: 5,
                reconnectionDelay: 1000
            });
            // Connection event handlers
            newSocket.on('connect', {
                "useUnifiedSocket.useEffect": ()=>{
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
                    socketConnectedHandlers.current.forEach({
                        "useUnifiedSocket.useEffect": (handler)=>{
                            try {
                                handler();
                            } catch (error) {
                                console.error('Error in socket connected handler:', error);
                            }
                        }
                    }["useUnifiedSocket.useEffect"]);
                    // Sync pending videos with DB after connection (DB is source of truth)
                    syncPendingVideos(userId);
                }
            }["useUnifiedSocket.useEffect"]);
            newSocket.on('disconnect', {
                "useUnifiedSocket.useEffect": (reason)=>{
                    console.log('🔌 Unified WebSocket disconnected:', reason);
                    setIsConnected(false);
                }
            }["useUnifiedSocket.useEffect"]);
            newSocket.on('connect_error', {
                "useUnifiedSocket.useEffect": (error)=>{
                    console.error('🔌 Unified WebSocket connection error:', error);
                    setIsConnected(false);
                }
            }["useUnifiedSocket.useEffect"]);
            newSocket.on('reconnect', {
                "useUnifiedSocket.useEffect": (attemptNumber)=>{
                    console.log(`🔌 Unified WebSocket reconnected after ${attemptNumber} attempts`);
                    setIsConnected(true);
                    newSocket.emit('join-room', userId);
                    // Trigger socket connected event for reconnection
                    socketConnectedHandlers.current.forEach({
                        "useUnifiedSocket.useEffect": (handler)=>{
                            try {
                                handler();
                            } catch (error) {
                                console.error('Error in socket reconnected handler:', error);
                            }
                        }
                    }["useUnifiedSocket.useEffect"]);
                    // Sync pending videos with DB after reconnection (DB is source of truth)
                    syncPendingVideos(userId);
                }
            }["useUnifiedSocket.useEffect"]);
            // Video status updates
            newSocket.on('video-download-update', {
                "useUnifiedSocket.useEffect": (update)=>{
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
                    setVideoUpdates({
                        "useUnifiedSocket.useEffect": (prev)=>[
                                ...prev,
                                videoUpdate
                            ]
                    }["useUnifiedSocket.useEffect"]);
                    // Add video to progress tracking when processing status arrives
                    // Only add if we don't have videos from DB sync (to avoid duplicates)
                    if (status === 'processing' || status === 'pending') {
                        // If we synced with DB, don't add from socket events - DB is source of truth
                        if (hasSyncedWithDB.current) {
                            console.log('📦 Already synced with DB, skipping socket event addition (DB is source of truth)');
                            return;
                        }
                        setPendingVideos({
                            "useUnifiedSocket.useEffect": (prev)=>{
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
                            }
                        }["useUnifiedSocket.useEffect"]);
                    }
                    // Remove one video from progress tracking when success/completed arrives (FIFO)
                    // Verify in DB first before removing
                    if (status === 'completed' || status === 'success') {
                        console.log('✅ Video completed/success - verifying in DB before removing (FIFO)');
                        // Helper function to show notification and remove video
                        const showNotificationAndRemove = {
                            "useUnifiedSocket.useEffect.showNotificationAndRemove": (prev, context)=>{
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
                            }
                        }["useUnifiedSocket.useEffect.showNotificationAndRemove"];
                        // Verify completion in DB before removing
                        if (userId) {
                            // First sync with DB to get latest state
                            syncPendingVideos(userId).then({
                                "useUnifiedSocket.useEffect": ()=>{
                                    // After DB sync, check if we should remove one video
                                    // DB sync already updated the state, so we just need to verify count
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId).then({
                                        "useUnifiedSocket.useEffect": (result)=>{
                                            if (result.success && result.data) {
                                                const pendingWorkflows = result.data.workflows.filter({
                                                    "useUnifiedSocket.useEffect.pendingWorkflows": (workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed'
                                                }["useUnifiedSocket.useEffect.pendingWorkflows"]);
                                                // Get current local state count
                                                setPendingVideos({
                                                    "useUnifiedSocket.useEffect": (prev)=>{
                                                        // Only remove if DB has fewer pending items than our local state
                                                        if (pendingWorkflows.length < prev.length) {
                                                            return showNotificationAndRemove(prev, 'DB verified');
                                                        } else {
                                                            console.log('⏸️ DB verification: keeping pending videos (count matches)');
                                                            return prev;
                                                        }
                                                    }
                                                }["useUnifiedSocket.useEffect"]);
                                            } else {
                                                // If DB check fails, still remove (FIFO assumption)
                                                setPendingVideos({
                                                    "useUnifiedSocket.useEffect": (prev)=>showNotificationAndRemove(prev, 'DB check failed')
                                                }["useUnifiedSocket.useEffect"]);
                                            }
                                        }
                                    }["useUnifiedSocket.useEffect"]).catch({
                                        "useUnifiedSocket.useEffect": ()=>{
                                            // If DB check fails, still remove (FIFO assumption)
                                            setPendingVideos({
                                                "useUnifiedSocket.useEffect": (prev)=>showNotificationAndRemove(prev, 'DB error')
                                            }["useUnifiedSocket.useEffect"]);
                                        }
                                    }["useUnifiedSocket.useEffect"]);
                                }
                            }["useUnifiedSocket.useEffect"]).catch({
                                "useUnifiedSocket.useEffect": ()=>{
                                    // If sync fails, still remove (FIFO assumption)
                                    setPendingVideos({
                                        "useUnifiedSocket.useEffect": (prev)=>showNotificationAndRemove(prev, 'sync failed')
                                    }["useUnifiedSocket.useEffect"]);
                                }
                            }["useUnifiedSocket.useEffect"]);
                        } else {
                            // No userId, just remove (FIFO)
                            setPendingVideos({
                                "useUnifiedSocket.useEffect": (prev)=>{
                                    if (prev.length === 0) {
                                        console.log('⚠️ No pending videos to remove');
                                        return prev;
                                    }
                                    return showNotificationAndRemove(prev, 'no userId');
                                }
                            }["useUnifiedSocket.useEffect"]);
                        }
                    }
                    // Remove one video from progress tracking when error/failed arrives (FIFO)
                    // Verify in DB first before removing
                    if (status === 'error' || status === 'failed') {
                        console.log('❌ Video error/failed - verifying in DB before removing (FIFO)');
                        // Helper function to show error notification and remove video
                        const showErrorNotificationAndRemove = {
                            "useUnifiedSocket.useEffect.showErrorNotificationAndRemove": (prev, context, errorMessage)=>{
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
                            }
                        }["useUnifiedSocket.useEffect.showErrorNotificationAndRemove"];
                        // Get error message from socket update
                        const errorMessage = update.message || update.data?.message || undefined;
                        // Verify failure in DB before removing
                        if (userId) {
                            // First sync with DB to get latest state
                            syncPendingVideos(userId).then({
                                "useUnifiedSocket.useEffect": ()=>{
                                    // After DB sync, check if we should remove one video
                                    // DB sync already updated the state, so we just need to verify count
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].checkPendingWorkflows(userId).then({
                                        "useUnifiedSocket.useEffect": (result)=>{
                                            if (result.success && result.data) {
                                                const pendingWorkflows = result.data.workflows.filter({
                                                    "useUnifiedSocket.useEffect.pendingWorkflows": (workflow)=>workflow.status !== 'completed' && workflow.status !== 'failed'
                                                }["useUnifiedSocket.useEffect.pendingWorkflows"]);
                                                // Get current local state count
                                                setPendingVideos({
                                                    "useUnifiedSocket.useEffect": (prev)=>{
                                                        // Only remove if DB has fewer pending items than our local state
                                                        if (pendingWorkflows.length < prev.length) {
                                                            return showErrorNotificationAndRemove(prev, 'DB verified', errorMessage);
                                                        } else {
                                                            console.log('⏸️ DB verification: keeping pending videos (count matches)');
                                                            return prev;
                                                        }
                                                    }
                                                }["useUnifiedSocket.useEffect"]);
                                            } else {
                                                // If DB check fails, still remove (FIFO assumption)
                                                setPendingVideos({
                                                    "useUnifiedSocket.useEffect": (prev)=>showErrorNotificationAndRemove(prev, 'DB check failed', errorMessage)
                                                }["useUnifiedSocket.useEffect"]);
                                            }
                                        }
                                    }["useUnifiedSocket.useEffect"]).catch({
                                        "useUnifiedSocket.useEffect": ()=>{
                                            // If DB check fails, still remove (FIFO assumption)
                                            setPendingVideos({
                                                "useUnifiedSocket.useEffect": (prev)=>showErrorNotificationAndRemove(prev, 'DB error', errorMessage)
                                            }["useUnifiedSocket.useEffect"]);
                                        }
                                    }["useUnifiedSocket.useEffect"]);
                                }
                            }["useUnifiedSocket.useEffect"]).catch({
                                "useUnifiedSocket.useEffect": ()=>{
                                    // If sync fails, still remove (FIFO assumption)
                                    setPendingVideos({
                                        "useUnifiedSocket.useEffect": (prev)=>showErrorNotificationAndRemove(prev, 'sync failed', errorMessage)
                                    }["useUnifiedSocket.useEffect"]);
                                }
                            }["useUnifiedSocket.useEffect"]);
                        } else {
                            // No userId, just remove (FIFO)
                            setPendingVideos({
                                "useUnifiedSocket.useEffect": (prev)=>{
                                    if (prev.length === 0) {
                                        console.log('⚠️ No pending videos to remove');
                                        return prev;
                                    }
                                    return showErrorNotificationAndRemove(prev, 'no userId', errorMessage);
                                }
                            }["useUnifiedSocket.useEffect"]);
                        }
                    }
                }
            }["useUnifiedSocket.useEffect"]);
            // Avatar status updates
            newSocket.on('photo-avatar-update', {
                "useUnifiedSocket.useEffect": (update)=>{
                    console.log('📸 Avatar update received:', update);
                    const eventKey = `avatar-${update.step}-${update.timestamp}`;
                    if (processedEvents.current.has(eventKey)) {
                        console.log('📸 Duplicate avatar event ignored:', eventKey);
                        return;
                    }
                    processedEvents.current.add(eventKey);
                    setAvatarUpdates({
                        "useUnifiedSocket.useEffect": (prev)=>[
                                ...prev,
                                update
                            ]
                    }["useUnifiedSocket.useEffect"]);
                }
            }["useUnifiedSocket.useEffect"]);
            // Avatar completion
            newSocket.on('avatar-ready', {
                "useUnifiedSocket.useEffect": (data)=>{
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
                    setAvatarUpdates({
                        "useUnifiedSocket.useEffect": (prev)=>[
                                ...prev,
                                completionUpdate
                            ]
                    }["useUnifiedSocket.useEffect"]);
                }
            }["useUnifiedSocket.useEffect"]);
            // Video Avatar status updates
            newSocket.on('video-avatar-update', {
                "useUnifiedSocket.useEffect": (update)=>{
                    console.log('🎬 Video Avatar update received:', update);
                    const eventKey = `video-avatar-${update.step}-${update.timestamp}`;
                    if (processedEvents.current.has(eventKey)) {
                        console.log('🎬 Duplicate video avatar event ignored:', eventKey);
                        return;
                    }
                    processedEvents.current.add(eventKey);
                    setVideoAvatarUpdates({
                        "useUnifiedSocket.useEffect": (prev)=>[
                                ...prev,
                                update
                            ]
                    }["useUnifiedSocket.useEffect"]);
                    // Auto-disconnect on completion or error as requested
                    if (update.status === 'completed' || update.status === 'error') {
                        console.log('🎬 Video avatar process finished, disconnecting socket');
                        setTimeout({
                            "useUnifiedSocket.useEffect": ()=>{
                                newSocket.disconnect();
                            }
                        }["useUnifiedSocket.useEffect"], 1000); // Small delay to ensure final update is processed
                    }
                }
            }["useUnifiedSocket.useEffect"]);
            // Schedule status updates
            newSocket.on('schedule-status', {
                "useUnifiedSocket.useEffect": (data)=>{
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
                    setScheduleUpdates({
                        "useUnifiedSocket.useEffect": (prev)=>[
                                ...prev,
                                scheduleUpdate
                            ]
                    }["useUnifiedSocket.useEffect"]);
                    // Auto-disconnect on completion or failure as requested
                    if (data.status === 'ready' || data.status === 'failed') {
                        console.log('📅 Schedule generation finished, disconnecting socket');
                        setTimeout({
                            "useUnifiedSocket.useEffect": ()=>{
                                newSocket.disconnect();
                            }
                        }["useUnifiedSocket.useEffect"], 1000); // Small delay to ensure final update is processed
                    }
                }
            }["useUnifiedSocket.useEffect"]);
            setSocket(newSocket);
            // Store references for cleanup
            const currentProcessedEvents = processedEvents.current;
            const currentSocketHandlers = socketConnectedHandlers.current;
            // Cleanup function
            return ({
                "useUnifiedSocket.useEffect": ()=>{
                    console.log('🧹 Cleaning up unified WebSocket connection');
                    currentProcessedEvents.clear();
                    currentSocketHandlers.clear();
                    newSocket.close();
                }
            })["useUnifiedSocket.useEffect"];
        }
    }["useUnifiedSocket.useEffect"], [
        userId,
        syncPendingVideos
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    // Expose method to register socket connected handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnifiedSocket.useEffect": ()=>{
            if (socket) {
                // Add method to socket for external handlers
                socket.onSocketConnected = ({
                    "useUnifiedSocket.useEffect": (handler)=>{
                        socketConnectedHandlers.current.add(handler);
                        return ({
                            "useUnifiedSocket.useEffect": ()=>{
                                socketConnectedHandlers.current.delete(handler);
                            }
                        })["useUnifiedSocket.useEffect"];
                    }
                })["useUnifiedSocket.useEffect"];
            }
        }
    }["useUnifiedSocket.useEffect"], [
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
_s(useUnifiedSocket, "jlo9Qkjuh2mPssaDN7YiqGPzdE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useProcessingToasts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProcessingToasts",
    ()=>useProcessingToasts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useProcessingToasts() {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Convert VideoInProgress[] to ProcessingToast[] and merge with existing minimize states
    const updateToasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessingToasts.useCallback[updateToasts]": (videos)=>{
            setToasts({
                "useProcessingToasts.useCallback[updateToasts]": (prev)=>{
                    // Create a map of existing minimize states by ID
                    const minimizedMap = new Map();
                    prev.forEach({
                        "useProcessingToasts.useCallback[updateToasts]": (toast)=>{
                            minimizedMap.set(toast.id, toast.minimized);
                        }
                    }["useProcessingToasts.useCallback[updateToasts]"]);
                    // Convert videos to toasts, preserving minimize state if toast already exists
                    const newToasts = videos.map({
                        "useProcessingToasts.useCallback[updateToasts].newToasts": (video)=>({
                                id: video.id,
                                title: video.title,
                                message: video.message,
                                timestamp: video.timestamp,
                                minimized: minimizedMap.get(video.id) ?? false // Preserve existing minimize state or default to false
                            })
                    }["useProcessingToasts.useCallback[updateToasts].newToasts"]);
                    // Return only toasts for videos that are still pending
                    // All toasts (including minimized ones) are removed when their video completes/fails
                    return newToasts;
                }
            }["useProcessingToasts.useCallback[updateToasts]"]);
        }
    }["useProcessingToasts.useCallback[updateToasts]"], []);
    const minimizeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessingToasts.useCallback[minimizeToast]": (id)=>{
            setToasts({
                "useProcessingToasts.useCallback[minimizeToast]": (prev)=>prev.map({
                        "useProcessingToasts.useCallback[minimizeToast]": (toast)=>toast.id === id ? {
                                ...toast,
                                minimized: true
                            } : toast
                    }["useProcessingToasts.useCallback[minimizeToast]"])
            }["useProcessingToasts.useCallback[minimizeToast]"]);
        }
    }["useProcessingToasts.useCallback[minimizeToast]"], []);
    const restoreToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProcessingToasts.useCallback[restoreToast]": (id)=>{
            setToasts({
                "useProcessingToasts.useCallback[restoreToast]": (prev)=>prev.map({
                        "useProcessingToasts.useCallback[restoreToast]": (toast)=>toast.id === id ? {
                                ...toast,
                                minimized: false
                            } : toast
                    }["useProcessingToasts.useCallback[restoreToast]"])
            }["useProcessingToasts.useCallback[restoreToast]"]);
        }
    }["useProcessingToasts.useCallback[restoreToast]"], []);
    const minimizedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProcessingToasts.useMemo[minimizedCount]": ()=>{
            return toasts.filter({
                "useProcessingToasts.useMemo[minimizedCount]": (toast)=>toast.minimized
            }["useProcessingToasts.useMemo[minimizedCount]"]).length;
        }
    }["useProcessingToasts.useMemo[minimizedCount]"], [
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
_s(useProcessingToasts, "/hOJjAnr7hbMR77JgDWibQgs8HY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useVideoUpload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoUpload",
    ()=>useVideoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useVideoUpload = ()=>{
    _s();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadState, setUploadState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
_s(useVideoUpload, "81i7VDPHs67+8EOv1Q6208RIAsE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useSubscription.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubscription",
    ()=>useSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useSubscription = ()=>{
    _s();
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubscription.useCallback[fetchSubscription]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getCurrentSubscription();
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
        }
    }["useSubscription.useCallback[fetchSubscription]"], []);
    const getUsageInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubscription.useCallback[getUsageInfo]": (subscriptionData)=>{
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
        }
    }["useSubscription.useCallback[getUsageInfo]"], [
        subscription
    ]);
    const checkVideoUsageLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubscription.useCallback[checkVideoUsageLimit]": async ()=>{
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
        }
    }["useSubscription.useCallback[checkVideoUsageLimit]"], [
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
_s(useSubscription, "1Jp34GHwMYxwGhnBpSwXyxCczZM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useSchedule.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSchedule",
    ()=>useSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useSchedule = ()=>{
    _s();
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scheduleLoading, setScheduleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduleError, setScheduleError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch schedule data
    const fetchSchedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSchedule.useCallback[fetchSchedule]": async ()=>{
            try {
                setScheduleLoading(true);
                setScheduleError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getSchedule();
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
        }
    }["useSchedule.useCallback[fetchSchedule]"], []);
    // Delete schedule
    const deleteSchedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSchedule.useCallback[deleteSchedule]": async (scheduleId)=>{
            try {
                setScheduleLoading(true);
                setScheduleError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].deleteSchedule(scheduleId);
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
        }
    }["useSchedule.useCallback[deleteSchedule]"], [
        fetchSchedule
    ]);
    // Clear schedule data
    const clearScheduleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSchedule.useCallback[clearScheduleData]": ()=>{
            setScheduleData(null);
            setScheduleError(null);
        }
    }["useSchedule.useCallback[clearScheduleData]"], []);
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
_s(useSchedule, "oydgxKkYs8getdQGHRyaqe8Pkpc=");
const __TURBOPACK__default__export__ = useSchedule;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useAvatarStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAvatarStorage",
    ()=>useAvatarStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useAvatarStorage = ()=>{
    _s();
    const getSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAvatarStorage.useCallback[getSelectedAvatars]": ()=>{
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
        }
    }["useAvatarStorage.useCallback[getSelectedAvatars]"], []);
    const saveSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAvatarStorage.useCallback[saveSelectedAvatars]": (avatars)=>{
            try {
                localStorage.setItem('selectedAvatars', JSON.stringify(avatars));
            } catch (error) {
                throw new Error('Failed to save avatar selection to localStorage');
            }
        }
    }["useAvatarStorage.useCallback[saveSelectedAvatars]"], []);
    const getAvatarIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAvatarStorage.useCallback[getAvatarIds]": ()=>{
            const avatars = getSelectedAvatars();
            if (!avatars) return null;
            return {
                avatar_title: avatars.title.avatar_id,
                avatar_body: avatars.body.avatar_id,
                avatar_conclusion: avatars.conclusion.avatar_id
            };
        }
    }["useAvatarStorage.useCallback[getAvatarIds]"], [
        getSelectedAvatars
    ]);
    const validateAvatarSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAvatarStorage.useCallback[validateAvatarSelection]": (avatarIds)=>{
            const required = [
                'avatar_title',
                'avatar_body',
                'avatar_conclusion'
            ];
            const missing = required.filter({
                "useAvatarStorage.useCallback[validateAvatarSelection].missing": (key)=>!avatarIds[key] || avatarIds[key].trim() === ''
            }["useAvatarStorage.useCallback[validateAvatarSelection].missing"]);
            if (missing.length > 0) {
                throw new Error(`Missing avatar selection: ${missing.join(', ')}`);
            }
        }
    }["useAvatarStorage.useCallback[validateAvatarSelection]"], []);
    const clearSelectedAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAvatarStorage.useCallback[clearSelectedAvatars]": ()=>{
            try {
                localStorage.removeItem('selectedAvatars');
            } catch  {
                console.warn('Failed to clear avatar data from localStorage');
            }
        }
    }["useAvatarStorage.useCallback[clearSelectedAvatars]"], []);
    return {
        getSelectedAvatars,
        saveSelectedAvatars,
        getAvatarIds,
        validateAvatarSelection,
        clearSelectedAvatars
    };
};
_s(useAvatarStorage, "TCqGQYQtgwr2ds8vSi/3+4Bm2RE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useUserSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserSettings",
    ()=>useUserSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useUserSettings = ({ userEmail, avatars, setSelectedAvatars, setValue })=>{
    _s();
    const [loadingUserSettings, setLoadingUserSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingUserSettings, setSavingUserSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchUserSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserSettings.useCallback[fetchUserSettings]": async ()=>{
            setLoadingUserSettings(true);
            try {
                if (!userEmail) {
                    console.error('User email is required to fetch settings');
                    return {
                        success: false,
                        data: null
                    };
                }
                const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.USER_SETTINGS)}?email=${userEmail}`, {
                    method: 'GET',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
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
                        const avatarIds = settings.avatar.filter({
                            "useUserSettings.useCallback[fetchUserSettings].avatarIds": (id)=>id && id.trim() !== ''
                        }["useUserSettings.useCallback[fetchUserSettings].avatarIds"]);
                        console.log('🔍 Loading avatars from API response array:', avatarIds);
                        if (avatarIds.length > 0) {
                            const foundAvatars = avatarIds.map({
                                "useUserSettings.useCallback[fetchUserSettings].foundAvatars": (id)=>[
                                        ...avatars.custom,
                                        ...avatars.default
                                    ].find({
                                        "useUserSettings.useCallback[fetchUserSettings].foundAvatars": (avatar)=>avatar.avatar_id === id
                                    }["useUserSettings.useCallback[fetchUserSettings].foundAvatars"])
                            }["useUserSettings.useCallback[fetchUserSettings].foundAvatars"]).filter(Boolean);
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
                                    loaded_avatars: foundAvatars.map({
                                        "useUserSettings.useCallback[fetchUserSettings]": (avatar)=>({
                                                avatar_id: avatar.avatar_id,
                                                avatar_name: avatar.avatar_name || avatar.name,
                                                avatar_type: avatars.custom.some({
                                                    "useUserSettings.useCallback[fetchUserSettings]": (customAvatar)=>customAvatar.avatar_id === avatar.avatar_id
                                                }["useUserSettings.useCallback[fetchUserSettings]"]) ? 'custom' : 'default'
                                            })
                                    }["useUserSettings.useCallback[fetchUserSettings]"]),
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
                        const getAvatarId = {
                            "useUserSettings.useCallback[fetchUserSettings].getAvatarId": (avatar)=>{
                                if (!avatar) return '';
                                if (typeof avatar === 'string') return avatar;
                                return avatar.avatar_id || '';
                            }
                        }["useUserSettings.useCallback[fetchUserSettings].getAvatarId"];
                        const titleAvatarId = getAvatarId(settings.titleAvatar);
                        const bodyAvatarId = getAvatarId(settings.bodyAvatar);
                        const conclusionAvatarId = getAvatarId(settings.conclusionAvatar);
                        const titleAvatar = titleAvatarId ? [
                            ...avatars.custom,
                            ...avatars.default
                        ].find({
                            "useUserSettings.useCallback[fetchUserSettings]": (avatar)=>avatar.avatar_id === titleAvatarId
                        }["useUserSettings.useCallback[fetchUserSettings]"]) : null;
                        const bodyAvatar = bodyAvatarId ? [
                            ...avatars.custom,
                            ...avatars.default
                        ].find({
                            "useUserSettings.useCallback[fetchUserSettings]": (avatar)=>avatar.avatar_id === bodyAvatarId
                        }["useUserSettings.useCallback[fetchUserSettings]"]) : null;
                        const conclusionAvatar = conclusionAvatarId ? [
                            ...avatars.custom,
                            ...avatars.default
                        ].find({
                            "useUserSettings.useCallback[fetchUserSettings]": (avatar)=>avatar.avatar_id === conclusionAvatarId
                        }["useUserSettings.useCallback[fetchUserSettings]"]) : null;
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
                                avatar_type: avatars.custom.some({
                                    "useUserSettings.useCallback[fetchUserSettings]": (customAvatar)=>customAvatar.avatar_id === titleAvatar.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"]) ? 'custom' : 'default'
                            } : null,
                            body: bodyAvatar ? {
                                avatar_id: bodyAvatar.avatar_id,
                                avatar_name: bodyAvatar.avatar_name || bodyAvatar.name,
                                avatar_type: avatars.custom.some({
                                    "useUserSettings.useCallback[fetchUserSettings]": (customAvatar)=>customAvatar.avatar_id === bodyAvatar.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"]) ? 'custom' : 'default'
                            } : null,
                            conclusion: conclusionAvatar ? {
                                avatar_id: conclusionAvatar.avatar_id,
                                avatar_name: conclusionAvatar.avatar_name || conclusionAvatar.name,
                                avatar_type: avatars.custom.some({
                                    "useUserSettings.useCallback[fetchUserSettings]": (customAvatar)=>customAvatar.avatar_id === conclusionAvatar.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"]) ? 'custom' : 'default'
                            } : null,
                            form_avatar_field_updated: titleAvatar?.avatar_id || 'none'
                        });
                    } else if (settings.avatar && typeof settings.avatar === 'string') {
                        // Legacy format: avatar is a single string
                        const foundAvatar = [
                            ...avatars.custom,
                            ...avatars.default
                        ].find({
                            "useUserSettings.useCallback[fetchUserSettings].foundAvatar": (avatar)=>avatar.avatar_id === settings.avatar
                        }["useUserSettings.useCallback[fetchUserSettings].foundAvatar"]);
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
                                avatar_type: avatars.custom.some({
                                    "useUserSettings.useCallback[fetchUserSettings]": (customAvatar)=>customAvatar.avatar_id === foundAvatar.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"]) ? 'custom' : 'default',
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
                                available_custom_avatars: avatars.custom.map({
                                    "useUserSettings.useCallback[fetchUserSettings]": (a)=>a.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"]),
                                available_default_avatars: avatars.default.map({
                                    "useUserSettings.useCallback[fetchUserSettings]": (a)=>a.avatar_id
                                }["useUserSettings.useCallback[fetchUserSettings]"])
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
        }
    }["useUserSettings.useCallback[fetchUserSettings]"], [
        userEmail,
        avatars,
        setSelectedAvatars,
        setValue
    ]);
    const saveUserSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserSettings.useCallback[saveUserSettings]": async (userSettingsData)=>{
            setSavingUserSettings(true);
            try {
                // Create a clean payload with proper array (matching curl request format)
                // Handle new structure: avatar fields can be objects with avatar_id and avatarType
                const getAvatarId = {
                    "useUserSettings.useCallback[saveUserSettings].getAvatarId": (avatar)=>{
                        if (!avatar) return '';
                        if (typeof avatar === 'string') return avatar;
                        return avatar.avatar_id || '';
                    }
                }["useUserSettings.useCallback[saveUserSettings].getAvatarId"];
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
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.USER_SETTINGS), {
                    method: 'POST',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
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
        }
    }["useUserSettings.useCallback[saveUserSettings]"], []);
    return {
        loadingUserSettings,
        savingUserSettings,
        fetchUserSettings,
        saveUserSettings
    };
};
_s(useUserSettings, "PeqrGESvukPYostcdhPbiVYCts8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useScheduleValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScheduleValidation",
    ()=>useScheduleValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useScheduleValidation = ()=>{
    _s();
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const validateScheduleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[validateScheduleData]": (scheduleData)=>{
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
                validPosts = scheduleData.posts.filter({
                    "useScheduleValidation.useCallback[validateScheduleData]": (post)=>post.time && post.time.trim() !== ''
                }["useScheduleValidation.useCallback[validateScheduleData]"]);
            } else {
                validPosts = scheduleData.posts.filter({
                    "useScheduleValidation.useCallback[validateScheduleData]": (post)=>(post.day || post.date) && post.time
                }["useScheduleValidation.useCallback[validateScheduleData]"]);
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
            scheduleData.posts.forEach({
                "useScheduleValidation.useCallback[validateScheduleData]": (post, index)=>{
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
                }
            }["useScheduleValidation.useCallback[validateScheduleData]"]);
            // Date validation removed - allow past dates to hit the API
            // Enhanced time validation
            validPosts.forEach({
                "useScheduleValidation.useCallback[validateScheduleData]": (post, index)=>{
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
                }
            }["useScheduleValidation.useCallback[validateScheduleData]"]);
            // Check for duplicate days (for day-based frequencies)
            if (scheduleData.frequency !== 'Daily' && scheduleData.frequency !== 'Custom') {
                const selectedDays = scheduleData.posts.filter({
                    "useScheduleValidation.useCallback[validateScheduleData].selectedDays": (post)=>post.day && post.day.trim() !== ''
                }["useScheduleValidation.useCallback[validateScheduleData].selectedDays"]).map({
                    "useScheduleValidation.useCallback[validateScheduleData].selectedDays": (post)=>post.day
                }["useScheduleValidation.useCallback[validateScheduleData].selectedDays"]);
                const duplicateDays = selectedDays.filter({
                    "useScheduleValidation.useCallback[validateScheduleData].duplicateDays": (day, index)=>selectedDays.indexOf(day) !== index
                }["useScheduleValidation.useCallback[validateScheduleData].duplicateDays"]);
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
        }
    }["useScheduleValidation.useCallback[validateScheduleData]"], []);
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
    const clearValidationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[clearValidationErrors]": ()=>{
            setValidationErrors([]);
        }
    }["useScheduleValidation.useCallback[clearValidationErrors]"], []);
    const getFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[getFieldError]": (field)=>{
            const error = validationErrors.find({
                "useScheduleValidation.useCallback[getFieldError].error": (err)=>err.field === field
            }["useScheduleValidation.useCallback[getFieldError].error"]);
            return error ? error.message : null;
        }
    }["useScheduleValidation.useCallback[getFieldError]"], [
        validationErrors
    ]);
    // Validate individual field in real-time
    const validateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[validateField]": (field, value, postIndex)=>{
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
        }
    }["useScheduleValidation.useCallback[validateField]"], []);
    // Check if all required fields are filled
    const isFormComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[isFormComplete]": (scheduleData)=>{
            if (!scheduleData.frequency || scheduleData.frequency.trim() === '') {
                return false;
            }
            const expectedPostCount = getExpectedPostCount(scheduleData.frequency);
            const validPosts = scheduleData.posts.filter({
                "useScheduleValidation.useCallback[isFormComplete].validPosts": (post)=>{
                    if (scheduleData.frequency === 'Daily') {
                        return post.time && post.time.trim() !== '';
                    } else {
                        return (post.day || post.date) && post.time && post.time.trim() !== '';
                    }
                }
            }["useScheduleValidation.useCallback[isFormComplete].validPosts"]);
            return validPosts.length >= expectedPostCount;
        }
    }["useScheduleValidation.useCallback[isFormComplete]"], []);
    // Get validation summary
    const getValidationSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScheduleValidation.useCallback[getValidationSummary]": ()=>{
            const fieldErrors = validationErrors.map({
                "useScheduleValidation.useCallback[getValidationSummary].fieldErrors": (error)=>error.message
            }["useScheduleValidation.useCallback[getValidationSummary].fieldErrors"]);
            return {
                totalErrors: validationErrors.length,
                fieldErrors
            };
        }
    }["useScheduleValidation.useCallback[getValidationSummary]"], [
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
_s(useScheduleValidation, "0Q7U3q51krN3NPD0wtQvfDWLtn4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useSocialAccounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocialAccounts",
    ()=>useSocialAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useSocialAccounts = ()=>{
    _s();
    const [connectedAccounts, setConnectedAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [disconnecting, setDisconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const refetchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get access token from Redux store
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useSocialAccounts.useSelector[accessToken]": (state)=>state.user.accessToken
    }["useSocialAccounts.useSelector[accessToken]"]);
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useSocialAccounts.useSelector[userId]": (state)=>state.user.user?.id
    }["useSocialAccounts.useSelector[userId]"]);
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
    const fetchConnectedAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocialAccounts.useCallback[fetchConnectedAccounts]": async ()=>{
            if (!accessToken) {
                setError('Authentication required');
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNTS_PUBLIC), {
                    method: 'GET',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
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
        }
    }["useSocialAccounts.useCallback[fetchConnectedAccounts]"], [
        accessToken
    ]);
    // Disconnect/Delete an account
    const disconnectAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocialAccounts.useCallback[disconnectAccount]": async (accountId)=>{
            if (!accessToken) {
                setError('Authentication required');
                return;
            }
            try {
                setDisconnecting(accountId);
                setError(null);
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNT_DELETE}/${accountId}`), {
                    method: 'DELETE',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])()
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
        }
    }["useSocialAccounts.useCallback[disconnectAccount]"], [
        accessToken,
        fetchConnectedAccounts
    ]);
    // Connect a new platform
    const connectPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocialAccounts.useCallback[connectPlatform]": async (platformId)=>{
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
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.ACCOUNTS_CONNECT), {
                    method: 'POST',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
                    body: JSON.stringify({
                        provider: provider,
                        user_id: userId,
                        postback_url: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BACKEND_URL}/api/webhook/socialbu`
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
        }
    }["useSocialAccounts.useCallback[connectPlatform]"], [
        accessToken
    ]);
    // Check if a platform is connected
    const isPlatformConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocialAccounts.useCallback[isPlatformConnected]": (platformType)=>{
            return connectedAccounts.some({
                "useSocialAccounts.useCallback[isPlatformConnected]": (account)=>account.type === platformType
            }["useSocialAccounts.useCallback[isPlatformConnected]"]);
        }
    }["useSocialAccounts.useCallback[isPlatformConnected]"], [
        connectedAccounts
    ]);
    // Get connected account for a platform
    const getConnectedAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocialAccounts.useCallback[getConnectedAccount]": (platformType)=>{
            return connectedAccounts.find({
                "useSocialAccounts.useCallback[getConnectedAccount]": (account)=>account.type === platformType
            }["useSocialAccounts.useCallback[getConnectedAccount]"]);
        }
    }["useSocialAccounts.useCallback[getConnectedAccount]"], [
        connectedAccounts
    ]);
    // Auto-fetch when access token is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocialAccounts.useEffect": ()=>{
            if (accessToken) {
                fetchConnectedAccounts();
            }
        }
    }["useSocialAccounts.useEffect"], [
        accessToken,
        fetchConnectedAccounts
    ]);
    // Auto-refetch when user returns to the website (handles webhook callbacks)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocialAccounts.useEffect": ()=>{
            const debouncedRefetch = {
                "useSocialAccounts.useEffect.debouncedRefetch": ()=>{
                    if (refetchTimeoutRef.current) {
                        clearTimeout(refetchTimeoutRef.current);
                    }
                    refetchTimeoutRef.current = setTimeout({
                        "useSocialAccounts.useEffect.debouncedRefetch": ()=>{
                            if (accessToken) {
                                fetchConnectedAccounts();
                            }
                        }
                    }["useSocialAccounts.useEffect.debouncedRefetch"], 500);
                }
            }["useSocialAccounts.useEffect.debouncedRefetch"];
            const handleVisibilityChange = {
                "useSocialAccounts.useEffect.handleVisibilityChange": ()=>{
                    if (!document.hidden && accessToken) {
                        debouncedRefetch();
                    }
                }
            }["useSocialAccounts.useEffect.handleVisibilityChange"];
            const handleFocus = {
                "useSocialAccounts.useEffect.handleFocus": ()=>{
                    if (accessToken) {
                        debouncedRefetch();
                    }
                }
            }["useSocialAccounts.useEffect.handleFocus"];
            // Listen for visibility changes (tab switching)
            document.addEventListener('visibilitychange', handleVisibilityChange);
            // Listen for window focus (returning from another app)
            window.addEventListener('focus', handleFocus);
            return ({
                "useSocialAccounts.useEffect": ()=>{
                    if (refetchTimeoutRef.current) {
                        clearTimeout(refetchTimeoutRef.current);
                    }
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    window.removeEventListener('focus', handleFocus);
                }
            })["useSocialAccounts.useEffect"];
        }
    }["useSocialAccounts.useEffect"], [
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
_s(useSocialAccounts, "X6hsVj4OSoF3cB7fVWYQVak0diw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/hooks/useVoicesAndMusic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoicesAndMusic",
    ()=>useVoicesAndMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useVoicesAndMusic({ preset, selectedAvatars, gender }) {
    _s();
    // Store ALL voices and music (low, medium, high combined)
    const [allVoices, setAllVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allMusic, setAllMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Filtered voices and music based on preset/type
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [musicList, setMusicList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voicesLoading, setVoicesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voicesError, setVoicesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [musicLoading, setMusicLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicError, setMusicError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper function to get gender - only from form dropdown, NOT from avatar
    const getGender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoicesAndMusic.useCallback[getGender]": ()=>{
            // Only use gender from form dropdown, ignore avatar gender
            if (gender && gender.trim()) {
                return gender.toLowerCase().trim();
            }
            // Return null if no gender is selected from dropdown
            return null;
        }
    }["useVoicesAndMusic.useCallback[getGender]"], [
        gender
    ]);
    // Fetch ALL voices (low, medium, high) when avatars are selected - NO energyCategory parameter
    const fetchAllVoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoicesAndMusic.useCallback[fetchAllVoices]": async (gender)=>{
            try {
                setVoicesLoading(true);
                setVoicesError(null);
                // Fetch ALL voices without energyCategory parameter (only gender)
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getVoices(undefined, gender);
                if (response.success && response.data) {
                    // Transform API response to Voice[] format
                    const apiVoices = Array.isArray(response.data) ? response.data : response.data.voices || [];
                    // Map API response to Voice interface
                    // API returns 'energy' field (not energyCategory), use it to determine type
                    // Check if voice is custom (has isCustom property or userId)
                    const transformedVoices = apiVoices.map({
                        "useVoicesAndMusic.useCallback[fetchAllVoices].transformedVoices": (voice)=>{
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
                        }
                    }["useVoicesAndMusic.useCallback[fetchAllVoices].transformedVoices"]);
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
        }
    }["useVoicesAndMusic.useCallback[fetchAllVoices]"], []);
    // Fetch ALL music (low, medium, high) when avatars are selected - NO energyCategory parameter
    const fetchAllMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoicesAndMusic.useCallback[fetchAllMusic]": async (gender)=>{
            try {
                setMusicLoading(true);
                setMusicError(null);
                // Fetch ALL music with gender parameter if provided
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getMusicTracks(undefined, gender);
                if (response.success && response.data) {
                    // Transform API response to Voice[] format
                    const musicData = Array.isArray(response.data) ? response.data : response.data.tracks || response.data.music || [];
                    // Transform music data according to the API response structure
                    // API should return energyCategory in the response, use it to determine type
                    const transformedMusic = musicData.map({
                        "useVoicesAndMusic.useCallback[fetchAllMusic].transformedMusic": (music)=>{
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
                        }
                    }["useVoicesAndMusic.useCallback[fetchAllMusic].transformedMusic"]);
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
        }
    }["useVoicesAndMusic.useCallback[fetchAllMusic]"], []);
    // Effect to fetch voices and music ONLY when gender is selected from dropdown
    // APIs are NOT called when avatar is selected - only when gender is explicitly selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoicesAndMusic.useEffect": ()=>{
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
        }
    }["useVoicesAndMusic.useEffect"], [
        gender,
        fetchAllVoices,
        fetchAllMusic
    ]);
    // Effect to filter voices and music based on preset
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoicesAndMusic.useEffect": ()=>{
            if (!preset || !preset.trim()) {
                // If no preset, show all voices and music
                setVoices(allVoices);
                setMusicList(allMusic);
                return;
            }
            const energyCategory = preset.toLowerCase();
            // Filter voices and music based on preset
            const filteredVoices = allVoices.filter({
                "useVoicesAndMusic.useEffect.filteredVoices": (v)=>v.type === energyCategory
            }["useVoicesAndMusic.useEffect.filteredVoices"]);
            const filteredMusic = allMusic.filter({
                "useVoicesAndMusic.useEffect.filteredMusic": (m)=>m.type === energyCategory
            }["useVoicesAndMusic.useEffect.filteredMusic"]);
            setVoices(filteredVoices);
            setMusicList(filteredMusic);
        }
    }["useVoicesAndMusic.useEffect"], [
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
_s(useVoicesAndMusic, "9dWYEzctYSneZR2xougo0mhIFq0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_task2_src_hooks_0b28d40f._.js.map