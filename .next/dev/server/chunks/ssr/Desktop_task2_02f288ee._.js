module.exports = [
"[project]/Desktop/task2/src/components/ui/video-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function VideoCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex justify-center items-center relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: "https://www.youtube.com/embed/ZhGhnZ3InJA?si=8q5aBFAIfungGu2s&modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=0&autoplay=0&mute=0",
                title: "YouTube video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true,
                className: "w-full h-full max-w-[780px] min-h-[434px] rounded-[16px] mx-auto"
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/video-card.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/video-card.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/video-card.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/partners.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Partners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-fast-marquee/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const useIntersectionObserver = (options = {})=>{
    const [isIntersecting, setIsIntersecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                // Add slight delay before triggering animation for more natural feel
                setTimeout(()=>{
                    setIsIntersecting(true);
                }, 100);
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });
        observer.observe(element);
        return ()=>{
            observer.unobserve(element);
        };
    }, [
        options
    ]);
    return [
        ref,
        isIntersecting
    ];
};
function Partners() {
    const partner = [
        {
            id: "keller-williams",
            title: "Keller Williams"
        },
        {
            id: "century-21",
            title: "Century 21"
        },
        {
            id: "remax",
            title: "RE/MAX"
        },
        {
            id: "coldwell-banker",
            title: "Coldwell Banker"
        },
        {
            id: "sotheby's",
            title: "Sotheby's"
        }
    ];
    // Animation refs for smooth Apple-like animations
    const [containerRef] = useIntersectionObserver();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-[#060609] px-3 pb-20 pt-32 -mt-16",
        style: {
            backgroundImage: 'url(/images/price-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1340px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-center text-white text-[20px] font-semibold mb-7",
                    children: "TRUSTED BY LEADING REAL ESTATE PROFESSIONALS"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center items-center gap-10",
                    children: [
                        partner.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-[24.5px] py-[12px] bg-white/30 rounded-[8px] justify-center items-center text-white text-[28px] font-semibold hidden",
                                children: item.title
                            }, index, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            pauseOnHover: true,
                            direction: "left",
                            speed: 50,
                            className: "overflow-hidden",
                            gradient: false,
                            children: [
                                partner.map((client)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-[24.5px] py-[12px] bg-white/30 rounded-[8px] flex justify-center items-center text-white text-[18px] md:text-[28px] font-semibold transition-all duration-700 ease-out mx-5
                                `,
                                        children: client.title
                                    }, client.id, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, this);
                                }),
                                partner.map((client)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-[24.5px] py-[12px] bg-white/30 rounded-[8px] flex justify-center items-center text-white text-[18px] md:text-[28px] font-semibold transition-all duration-700 ease-out mx-5
                                `,
                                        children: client.title
                                    }, `${client.id}-duplicate`, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                                        lineNumber: 106,
                                        columnNumber: 29
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                            lineNumber: 84,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/partners.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/action-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signin$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/signin-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$forgot$2d$password$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/forgot-password-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ActionCard() {
    const [isSigninModalOpen, setIsSigninModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.user);
    const handleGetStartedClick = (e)=>{
        if (isAuthenticated) {
            window.location.href = '/create-video';
        } else {
            e.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothScrollTo"])('pricing');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#060609] pb-20 pt-20",
        style: {
            backgroundImage: 'url(/images/price-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1260px] mx-auto xl:px-0 px-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#2F2F2F]/30 backdrop-blur-lg border border-[#D8D8D8]/70 rounded-[24px] px-[44px] py-[26px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white text-3xl md:text-4xl lg:text-[56px] font-semibold !leading-[120%]",
                                    children: [
                                        "Ready to see",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                            lineNumber: 33,
                                            columnNumber: 45
                                        }, this),
                                        "AI in Action?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                    lineNumber: 32,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/create-video",
                                    className: "px-[28px] py-[13.2px] bg-[#5046E5] text-white rounded-full font-semibold hover:bg-transparent border-[#5046E5] hover:text-white hover:border-white/30 border transition-all duration-300 cursor-pointer",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                    lineNumber: 46,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGetStartedClick,
                                    className: "px-[28px] py-[13.2px] bg-[#5046E5] text-white rounded-full font-semibold hover:bg-transparent border-[#5046E5] hover:text-white hover:border-white/30 border transition-all duration-300 cursor-pointer",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                    lineNumber: 53,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signin$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSigninModalOpen,
                onClose: ()=>setIsSigninModalOpen(false),
                onOpenForgotPassword: ()=>setIsForgotPasswordModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$forgot$2d$password$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isForgotPasswordModalOpen,
                onClose: ()=>setIsForgotPasswordModalOpen(false),
                onOpenSignin: ()=>setIsSigninModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/action-card.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$review$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/review-slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$features$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/features-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$process$2d$steps$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/process-steps.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/contact-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pricing$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/pricing-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$video$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/create-video-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$profile$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/profile-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$custom$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/custom-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$profile$2d$info$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/profile-info-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$details$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/subscription-details-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$billing$2d$history$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/billing-history-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$management$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/subscription-management-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$auth$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/auth-loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$email$2d$verification$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/email-verification-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$video$2d$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/video-gallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$payment$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/payment-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$stripe$2d$checkout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/stripe-checkout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$loading$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/loading-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$loading$2d$overlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-loading-overlay.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/task2/src/components/ui/contact-form.tsx [app-ssr] (ecmascript) <export default as ContactForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/contact-form.tsx [app-ssr] (ecmascript)");
}),
"[project]/Desktop/task2/src/components/ui/email-verification-modal.tsx [app-ssr] (ecmascript) <export default as EmailVerificationModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailVerificationModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$email$2d$verification$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$email$2d$verification$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/email-verification-modal.tsx [app-ssr] (ecmascript)");
}),
"[project]/Desktop/task2/src/components/ui/FAQsection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const FAQSection = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Series & Videos');
    const [openAccordion, setOpenAccordion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('what-is-edge-ai-realty');
    const tabs = [
        'Series & Videos',
        'Billing',
        'Account',
        'Technical'
    ];
    const currentFAQs = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQ_DATA"][activeTab] || [];
    const toggleAccordion = (questionId)=>{
        setOpenAccordion(openAccordion === questionId ? null : questionId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "faq-heading",
        className: "jsx-80b7db41fdf29c9d" + " " + "max-w-[1260px] mx-auto px-3 py-4 lg:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "faq",
                className: "jsx-80b7db41fdf29c9d" + " " + "text-center mb-8 sm:mb-12 lg:mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        id: "faq-heading",
                        style: {
                            color: '#171717'
                        },
                        className: "jsx-80b7db41fdf29c9d" + " " + "text-[32px] md:text-4xl lg:text-[42px] font-semibold mb-2 sm:mb-4 lg:mb-4 leading-[120%]",
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#5F5F5F'
                        },
                        className: "jsx-80b7db41fdf29c9d" + " " + "text-base sm:text-lg lg:text-[20px] leading-[24px] font-normal px-4 sm:px-0",
                        children: "Find answers to common questions about our AI video service."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": "FAQ categories",
                className: "jsx-80b7db41fdf29c9d" + " " + "flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-5 mb-6 sm:mb-8 lg:mb-10 bg-[#ECEFFD] rounded-[30px] sm:rounded-[40px] lg:rounded-[60px] px-2 sm:px-3 lg:px-4 py-4 sm:py-1.5 lg:py-2 w-fit mx-auto",
                children: tabs.map((tabName)=>{
                    const isActive = activeTab === tabName;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tabName),
                        role: "tab",
                        "aria-selected": isActive,
                        "aria-controls": `faq-panel-${tabName.toLowerCase().replace(/\s+/g, '-')}`,
                        className: "jsx-80b7db41fdf29c9d" + " " + `px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-[6.4px] rounded-full cursor-pointer text-sm sm:text-base md:text-lg lg:text-[20px] leading-tight sm:leading-normal lg:leading-[32px] font-semibold transition-all duration-300 whitespace-nowrap border-2
                  ${isActive ? 'text-white bg-[#5046E5] border-[#5046E5]' : 'text-[#5046E5] border-[#5046E5] bg-transparent hover:bg-[#5046E5] hover:text-white hover:border-[#5046E5]'}`,
                        children: tabName
                    }, tabName, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: `faq-panel-${activeTab.toLowerCase().replace(/\s+/g, '-')}`,
                "aria-labelledby": `faq-tab-${activeTab.toLowerCase().replace(/\s+/g, '-')}`,
                className: "jsx-80b7db41fdf29c9d" + " " + "space-y-3 sm:space-y-4 lg:space-y-6 bg-[#FAFAFA] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] p-3 sm:p-4 lg:p-6",
                children: currentFAQs.map((faq, index)=>{
                    const IconComponent = faq.icon;
                    const isOpen = openAccordion === faq.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards'
                        },
                        className: "jsx-80b7db41fdf29c9d" + " " + "overflow-hidden transition-all duration-300 rounded-none hover:rounded-[12px] sm:hover:rounded-[14px] lg:hover:rounded-[16px] border-b border-[#F1F2F9] mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleAccordion(faq.id),
                                "aria-expanded": isOpen,
                                "aria-controls": `faq-content-${faq.id}`,
                                className: "jsx-80b7db41fdf29c9d" + " " + "w-full px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-8 cursor-pointer text-left flex items-center justify-between transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-80b7db41fdf29c9d" + " " + "flex items-start space-x-2 sm:space-x-3 lg:space-x-6 flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": "true",
                                                className: "jsx-80b7db41fdf29c9d" + " " + "w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-start transition-all duration-300 flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    size: 18,
                                                    color: isOpen ? '#4A3AFF' : '#A0A3BD',
                                                    className: "jsx-80b7db41fdf29c9d" + " " + "sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    color: '#101010'
                                                },
                                                className: "jsx-80b7db41fdf29c9d" + " " + "text-base sm:text-[20px] md:text-[24px] lg:text-[32px] leading-tight sm:leading-normal lg:leading-[32px] font-semibold flex-1 min-w-0",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-80b7db41fdf29c9d" + " " + "flex-shrink-0 ml-2 sm:ml-3 lg:ml-4",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-[28px] lg:h-[28px] transition-all duration-300",
                                            style: {
                                                color: '#4A3AFF'
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-[28px] lg:h-[28px] transition-all duration-300",
                                            style: {
                                                color: '#A0A3BD'
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `faq-content-${faq.id}`,
                                "aria-hidden": !isOpen,
                                className: "jsx-80b7db41fdf29c9d" + " " + `transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-80b7db41fdf29c9d" + " " + "px-3 sm:px-4 lg:px-8 pb-4 sm:pb-6 lg:pb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-80b7db41fdf29c9d" + " " + "pl-0 sm:pl-[41px] lg:pl-[28px] ml-0 sm:ml-2 lg:ml-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#5F5F5F'
                                            },
                                            className: "jsx-80b7db41fdf29c9d" + " " + "text-sm sm:text-[18px] lg:text-[20px] leading-relaxed sm:leading-normal lg:leading-[28px] font-normal",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                            lineNumber: 144,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, faq.id, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "80b7db41fdf29c9d",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/FAQsection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FAQSection;
}),
"[project]/Desktop/task2/src/app/(home)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$video$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/video-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$partners$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/partners.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$action$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/action-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/contact-form.tsx [app-ssr] (ecmascript) <export default as ContactForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$email$2d$verification$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EmailVerificationModal$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/email-verification-modal.tsx [app-ssr] (ecmascript) <export default as EmailVerificationModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$features$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/features-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$FAQsection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/FAQsection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$review$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/review-slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$process$2d$steps$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/process-steps.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pricing$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/pricing-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signin$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/signin-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useSubscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signup$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/signup-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$forgot$2d$password$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/forgot-password-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/pending-payment-toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/subscription-required-toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePageContent() {
    const [isSigninModalOpen, setIsSigninModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasPosts, setHasPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setPostsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.user);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isAvatarModalOpen, setIsAvatarModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states
    const [isSignupModalOpen, setIsSignupModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEmailVerificationModalOpen, setIsEmailVerificationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verificationEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Pending payment toast state
    const [showPendingPaymentToast, setShowPendingPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingPaymentMessage, setPendingPaymentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentContext, setPaymentContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('video');
    // Subscription required toast state
    const [showSubscriptionRequiredToast, setShowSubscriptionRequiredToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscriptionRequiredMessage, setSubscriptionRequiredMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscriptionContext, setSubscriptionContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('video');
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const { checkVideoUsageLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubscription"])();
    const { isAvatarProcessing, isVideoAvatarProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const isAnyAvatarProcessing = isAvatarProcessing || isVideoAvatarProcessing;
    // Modal handler functions
    const handleCloseSigninModal = ()=>{
        setIsSigninModalOpen(false);
    };
    const handleOpenForgotPasswordModal = ()=>{
        setIsSigninModalOpen(false);
        setIsForgotPasswordModalOpen(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hash = window.location.hash;
        if (hash) {
            setTimeout(()=>{
                const elementId = hash.substring(1);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothScrollTo"])(elementId);
            }, 300);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const showLogin = searchParams.get('showLogin');
        if (showLogin === 'true') {
            setIsSigninModalOpen(true);
        }
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const verified = searchParams.get('verified');
        if (verified === 'true') {
            console.log('Email verified successfully!');
        }
    }, [
        searchParams
    ]);
    const checkForPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isAuthenticated) {
            setPostsLoading(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getPublishedPosts();
                if (response.success && response.data && response.data.posts) {
                    setHasPosts(response.data.posts.length > 0);
                } else {
                    setHasPosts(false);
                }
            } catch (error) {
                console.error('Error checking for posts:', error);
                setHasPosts(false);
            } finally{
                setPostsLoading(false);
            }
        } else {
            setHasPosts(false);
        }
    }, [
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkForPosts();
    }, [
        checkForPosts
    ]);
    const handleGetStartedClick = (e)=>{
        if (isAuthenticated) {
            window.location.href = '/create-video';
        } else {
            e.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothScrollTo"])('pricing');
        }
    };
    const handleCustomAvatarClick = async ()=>{
        if (isAnyAvatarProcessing) {
            showNotification('Please wait for your current avatar to finish processing', 'warning');
            return;
        }
        if (user?.id) {
            // Check payment status before allowing avatar creation
            try {
                const usageCheck = await checkVideoUsageLimit();
                if (!usageCheck.canCreateVideo) {
                    // Check if it's a pending payment issue
                    if (usageCheck.message?.includes('payment is still being processed')) {
                        setPaymentContext('avatar');
                        setPendingPaymentMessage(usageCheck.message);
                        setShowPendingPaymentToast(true);
                        return;
                    } else if (usageCheck.message?.includes('No active subscription found') || usageCheck.message?.includes('Please subscribe')) {
                        setSubscriptionContext('avatar');
                        setSubscriptionRequiredMessage(usageCheck.message);
                        setShowSubscriptionRequiredToast(true);
                        return;
                    } else {
                        showNotification(usageCheck.message || 'Unable to create avatar', 'error');
                        return;
                    }
                }
                // Payment is active, proceed with avatar creation
                setIsAvatarModalOpen(true);
            } catch (error) {
                console.error('Failed to check subscription status:', error);
                showNotification('Unable to verify subscription status. Please try again.', 'error');
            }
        } else {
            // User is not logged in, show notification and open signup modal
            showNotification('Please log in to create a custom avatar', 'warning');
            setIsSigninModalOpen(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-aos": "fade-up",
                className: "relative pt-14 lg:pt-20 px-3",
                id: "getting-started",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1440px] mx-auto pb-12 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[36px] md:text-6xl lg:text-[72px] font-semibold text-gray-900 mb-5 lg:leading-[84px] md:leading-[72px] leading-[47px]",
                                    children: [
                                        "Real Estate Marketing?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 37
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#5046E5]",
                                            children: "Automated. Effortless."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 72
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 135
                                        }, this),
                                        "One Click Away"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl lg:text-[20px] text-[#5F5F5F] mb-10 max-w-[500px] mx-auto leading-[24px]",
                                    children: [
                                        "Custom AI videos for agents & loan officers",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 58
                                        }, this),
                                        " just fill one form, hit submit, and we handle the rest."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row flex-wrap gap-4 justify-center",
                                    children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCustomAvatarClick,
                                                disabled: isAnyAvatarProcessing,
                                                className: `inline-flex items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold rounded-full transition-all !duration-300 border-2 ${isAnyAvatarProcessing ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' : 'bg-[#5046E5] text-white cursor-pointer hover:bg-transparent hover:text-[#5046E5] border-[#5046E5]'}`,
                                                children: isAnyAvatarProcessing ? 'Processing...' : 'Custom Avatar'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/create-video/new",
                                                className: "inline-flex cursor-pointer items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold bg-[#5046E5] text-white rounded-full transition-all !duration-300 hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]",
                                                children: "Create Video"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/create-video",
                                                className: "inline-flex cursor-pointer items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold bg-[#5046E5] text-white rounded-full transition-all !duration-300 hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]",
                                                children: "Gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/scheduled-post",
                                                className: "inline-flex cursor-pointer items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold bg-[#5046E5] text-white rounded-full transition-all !duration-300 hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]",
                                                children: "Schedule Post"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/report-analytics",
                                                className: "inline-flex cursor-pointer items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold bg-[#5046E5] text-white rounded-full transition-all !duration-300 hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]",
                                                children: "Report Analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCustomAvatarClick,
                                                disabled: isAnyAvatarProcessing,
                                                className: `inline-flex items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold rounded-full transition-all !duration-300 border-2 ${isAnyAvatarProcessing ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' : 'bg-[#5046E5] text-white cursor-pointer hover:bg-transparent hover:text-[#5046E5] border-[#5046E5]'}`,
                                                children: isAnyAvatarProcessing ? 'Processing...' : 'Custom Avatar'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleGetStartedClick,
                                                className: "inline-flex cursor-pointer items-center justify-center px-[26.5px] py-[13.2px] text-base font-semibold bg-[#5046E5] text-white rounded-full transition-all !duration-300 hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]",
                                                children: "Get Started"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/Background.png",
                        alt: "Background",
                        className: "w-full h-full absolute lg:-bottom-24 bottom-0 left-0 z-0 object-contain",
                        width: 1440,
                        height: 1000
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$video$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$partners$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDER_ITEMS"],
                    autoPlay: true,
                    autoPlayInterval: 5000,
                    showArrows: true,
                    showDots: true,
                    className: "mb-16"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$action$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$process$2d$steps$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessSteps"], {}, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "benefits",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$features$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeaturesSection"], {}, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "pricing",
                "data-aos": "fade-up",
                className: "mb-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pricing$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$review$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReviewSlider"], {
                items: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEW_SLIDER_ITEMS"],
                autoPlay: true,
                autoPlayInterval: 5000,
                showArrows: true,
                showDots: true,
                className: "mb-0"
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$FAQsection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "!block",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$contact$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__["ContactForm"], {}, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAvatarModalOpen,
                onClose: ()=>setIsAvatarModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signup$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSignupModalOpen,
                onClose: ()=>setIsSignupModalOpen(false),
                onOpenSignin: ()=>setIsSigninModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 295,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$forgot$2d$password$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isForgotPasswordModalOpen,
                onClose: ()=>setIsForgotPasswordModalOpen(false),
                onOpenSignin: ()=>setIsSigninModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$signin$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSigninModalOpen,
                onClose: handleCloseSigninModal,
                onOpenSignup: ()=>{
                    setIsSigninModalOpen(false);
                    setIsSignupModalOpen(true);
                },
                onOpenForgotPassword: handleOpenForgotPasswordModal
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$email$2d$verification$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EmailVerificationModal$3e$__["EmailVerificationModal"], {
                isOpen: isEmailVerificationModalOpen,
                onClose: ()=>setIsEmailVerificationModalOpen(false),
                email: verificationEmail
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showPendingPaymentToast,
                message: pendingPaymentMessage,
                context: paymentContext,
                onClose: ()=>setShowPendingPaymentToast(false),
                onRefresh: async ()=>{
                    // Refresh subscription status
                    try {
                        const usageCheck = await checkVideoUsageLimit();
                        if (usageCheck.canCreateVideo) {
                            setShowPendingPaymentToast(false);
                            showNotification('Payment confirmed! You can now create videos.', 'success');
                        } else if (usageCheck.message?.includes('payment is still being processed')) {
                            setPendingPaymentMessage(usageCheck.message);
                        } else {
                            setShowPendingPaymentToast(false);
                            showNotification(usageCheck.message || 'Unable to create content', 'error');
                        }
                    } catch (error) {
                        console.error('Failed to refresh subscription status:', error);
                        showNotification('Unable to verify payment status. Please try again.', 'error');
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showSubscriptionRequiredToast,
                message: subscriptionRequiredMessage,
                context: subscriptionContext,
                onClose: ()=>setShowSubscriptionRequiredToast(false),
                onSubscribe: ()=>{
                    // Redirect to pricing page or scroll to pricing section
                    window.location.href = '/#pricing';
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
function LoadingFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#5046E5] mx-auto"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-600",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
                    lineNumber: 372,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
            lineNumber: 370,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingFallback, {}, void 0, false, {
            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
            lineNumber: 380,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageContent, {}, void 0, false, {
            fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
            lineNumber: 381,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/app/(home)/page.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/node_modules/react-fast-marquee/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function ___$insertStyle(css) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const style = undefined;
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");
const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback(()=>{
        if (marqueeRef.current && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const marqueeRect = marqueeRef.current.getBoundingClientRect();
            let containerWidth = containerRect.width;
            let marqueeWidth = marqueeRect.width;
            // Swap width and height if direction is up or down
            if (direction === "up" || direction === "down") {
                containerWidth = containerRect.height;
                marqueeWidth = marqueeRect.height;
            }
            if (autoFill && containerWidth && marqueeWidth) {
                setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
            } else {
                setMultiplier(1);
            }
            setContainerWidth(containerWidth);
            setMarqueeWidth(marqueeWidth);
        }
    }, [
        autoFill,
        containerRef,
        direction
    ]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect(()=>{
        if (!isMounted) return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
            const resizeObserver = new ResizeObserver(()=>calculateWidth());
            resizeObserver.observe(containerRef.current);
            resizeObserver.observe(marqueeRef.current);
            return ()=>{
                if (!resizeObserver) return;
                resizeObserver.disconnect();
            };
        }
    }, [
        calculateWidth,
        containerRef,
        isMounted
    ]);
    // Recalculate width when children change
    React.useEffect(()=>{
        calculateWidth();
    }, [
        calculateWidth,
        children
    ]);
    React.useEffect(()=>{
        setIsMounted(true);
    }, []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect(()=>{
        if (typeof onMount === "function") {
            onMount();
        }
    }, []);
    // Animation duration
    const duration = React.useMemo(()=>{
        if (autoFill) {
            return marqueeWidth * multiplier / speed;
        } else {
            return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
        }
    }, [
        autoFill,
        containerWidth,
        marqueeWidth,
        multiplier,
        speed
    ]);
    const containerStyle = React.useMemo(()=>Object.assign(Object.assign({}, style), {
            ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
            ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running",
            ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%",
            ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none"
        }), [
        style,
        play,
        pauseOnHover,
        pauseOnClick,
        direction
    ]);
    const gradientStyle = React.useMemo(()=>({
            ["--gradient-color"]: gradientColor,
            ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
        }), [
        gradientColor,
        gradientWidth
    ]);
    const marqueeStyle = React.useMemo(()=>({
            ["--play"]: play ? "running" : "paused",
            ["--direction"]: direction === "left" ? "normal" : "reverse",
            ["--duration"]: `${duration}s`,
            ["--delay"]: `${delay}s`,
            ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
            ["--min-width"]: autoFill ? `auto` : "100%"
        }), [
        play,
        direction,
        duration,
        delay,
        loop,
        autoFill
    ]);
    const childStyle = React.useMemo(()=>({
            ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
        }), [
        direction
    ]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback((multiplier)=>{
        return [
            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)
        ].map((_, i)=>React__default['default'].createElement(React.Fragment, {
                key: i
            }, React.Children.map(children, (child)=>{
                return React__default['default'].createElement("div", {
                    style: childStyle,
                    className: "rfm-child"
                }, child);
            })));
    }, [
        childStyle,
        children
    ]);
    return !isMounted ? null : React__default['default'].createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: "rfm-marquee-container " + className
    }, gradient && React__default['default'].createElement("div", {
        style: gradientStyle,
        className: "rfm-overlay"
    }), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle,
        onAnimationIteration: onCycleComplete,
        onAnimationEnd: onFinish
    }, React__default['default'].createElement("div", {
        className: "rfm-initial-child-container",
        ref: marqueeRef
    }, React.Children.map(children, (child)=>{
        return React__default['default'].createElement("div", {
            style: childStyle,
            className: "rfm-child"
        }, child);
    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle
    }, multiplyChildren(multiplier)));
});
exports.default = Marquee; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Minus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
];
const Minus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("minus", __iconNode);
;
 //# sourceMappingURL=minus.js.map
}),
"[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Minus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_task2_02f288ee._.js.map