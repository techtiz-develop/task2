(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvatarCompletionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AvatarCompletionModal({ isOpen, onClose, avatarData }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarCompletionModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "AvatarCompletionModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["AvatarCompletionModal.useEffect"];
        }
    }["AvatarCompletionModal.useEffect"], [
        isOpen
    ]);
    const handleSkipBack = ()=>{
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        }
    };
    const handleSkipForward = ()=>{
        if (videoRef.current) {
            const newTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
            videoRef.current.currentTime = newTime;
        }
    };
    const handleDownload = ()=>{
        if (avatarData?.previewVideoUrl) {
            const link = document.createElement('a');
            link.href = avatarData.previewVideoUrl;
            link.download = `${avatarData.avatarName}_avatar_preview.mp4`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    if (!isOpen || !avatarData) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[12px] max-w-4xl w-full max-h-[90vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between px-6 py-4 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[26px] font-bold text-[#282828] leading-[120%]",
                                    children: "Avatar Created Successfully! 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] text-[#5F5F5F] mt-1",
                                    children: [
                                        'Your digital avatar "',
                                        avatarData.avatarName,
                                        '" is ready'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[20px] font-semibold text-[#101010]",
                                        children: "Preview Video"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-[12px] overflow-hidden bg-black",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            src: avatarData.previewVideoUrl,
                                            poster: avatarData.previewImageUrl,
                                            className: "w-full h-[400px] object-contain",
                                            controls: true,
                                            children: "Your browser does not support the video tag."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-[10px] items-center justify-center flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSkipBack,
                                                className: "flex items-center gap-2 px-4 py-2 bg-[#5046E5] text-white border-2 border-[#5046E5] rounded-[50px] hover:bg-transparent hover:text-[#5046E5] transition-colors duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Back (10s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSkipForward,
                                                className: "flex items-center gap-2 px-4 py-2 bg-[#5046E5] text-white border-2 border-[#5046E5] rounded-[50px] hover:bg-transparent hover:text-[#5046E5] transition-colors duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Next (10s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownload,
                                                className: "flex items-center gap-2 px-4 py-2 bg-[#5046E5] text-white border-2 border-[#5046E5] rounded-[50px] hover:bg-transparent hover:text-[#5046E5] transition-colors duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[20px] font-semibold text-[#101010] mb-4",
                                                children: "Avatar Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-[#101010] mb-2",
                                                                children: "Avatar Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#5F5F5F]",
                                                                children: avatarData.avatarName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-[#101010] mb-2",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 bg-green-500 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-600 font-medium",
                                                                        children: "Completed Successfully"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[20px] font-semibold text-[#101010] mb-4",
                                                children: "What's Next?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 bg-[#5046E5] rounded-full flex items-center justify-center text-white text-sm font-bold",
                                                            children: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-[#101010]",
                                                                    children: "Use Your Avatar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#5F5F5F] text-sm",
                                                                    children: "Create videos with your digital twin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    // Navigate to avatar management or creation pages
                                    window.location.href = '/create-video/new';
                                },
                                className: "px-6 py-2 bg-[#5046E5] text-white border-2 border-[#5046E5] rounded-[50px] hover:bg-transparent hover:text-[#5046E5] transition-colors duration-200",
                                children: "Create Video"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCompletionModal.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(AvatarCompletionModal, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = AvatarCompletionModal;
var _c;
__turbopack_context__.k.register(_c, "AvatarCompletionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2ChooseType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Step2ChooseType({ onAvatarTypeSelect, onAvatarTypeNext, selectedType }) {
    _s();
    const [localSelectedType, setLocalSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedType);
    // Update local state when prop changes (for navigation back)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2ChooseType.useEffect": ()=>{
            setLocalSelectedType(selectedType);
        }
    }["Step2ChooseType.useEffect"], [
        selectedType
    ]);
    const avatarTypes = [
        {
            type: 'digital-twin',
            title: 'Digital Twin',
            subtitle: 'Video-based avatar',
            description: 'Use 2 videos to create a video avatar that moves and acts just like you.',
            remaining: '1 / 1 slots remaining',
            preview: '/images/avatars/digital.png',
            realistic: true
        },
        {
            type: 'photo-avatar',
            title: 'Photo Avatar',
            subtitle: 'Image-based avatar',
            description: 'Bring a photo to life with natural motion - no video footage needed.',
            remaining: null,
            preview: '/images/avatars/photo.png',
            realistic: false
        },
        {
            type: 'voice-avatar',
            title: 'Custom Voice Clone',
            subtitle: 'Voice-based avatar',
            description: 'Clone your voice with only 30 seconds of voice recording.',
            remaining: null,
            preview: '/images/avatars/voice.png',
            realistic: false
        }
    ];
    const handleBoxSelect = (type)=>{
        setLocalSelectedType(type);
        onAvatarTypeSelect(type);
    };
    const handleNext = ()=>{
        if (localSelectedType) {
            onAvatarTypeNext();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-9 pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] text-[#5F5F5F] font-normal leading-[24px]",
                    children: "Use a video or photo to create your avatar's first look. You can add more looks of either type later."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-10",
                children: avatarTypes.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-[12px] p-6 transition-all duration-300 cursor-pointer group grid md:grid-cols-2 grid-cols-1 gap-y-5 ${localSelectedType === option.type ? 'bg-[#CEE0ED]/40 border-2 border-[#5046E5]/60' : 'bg-[#F7FAFC] hover:bg-[#CEE0ED]/40 border-2 border-[#F7FAFC] hover:border-[#CEE0ED]/40'}`,
                        onClick: ()=>handleBoxSelect(option.type),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 items-start justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start flex-col gap-3",
                                            children: [
                                                option.realistic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-[#9DEFD3] max-w-[113px] py-[4px] rounded-[6px] flex items-center justify-center overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] text-[#00B37E] font-semibold leading-[14px]",
                                                        children: "Most realistic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-[24px] font-semibold text-[#101010] leading-[120%]",
                                                    children: option.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[18px] text-[#5F5F5F] mb-6 leading-[24px] max-w-[446px]",
                                        children: option.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    option.remaining && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px] text-[#5F5F5F] font-normal leading-[24px]",
                                            children: option.remaining
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: option.preview,
                                    alt: option.title,
                                    width: 1000,
                                    height: 1000,
                                    className: "w-[360px] h-[208px] object-cover rounded-[12px]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.type, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleNext,
                    disabled: !localSelectedType,
                    className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full ${localSelectedType ? 'bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                    children: "Next"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Step2ChooseType, "y4lc7aP/NScDTYm2+tJ7oL6JDwk=");
_c = Step2ChooseType;
var _c;
__turbopack_context__.k.register(_c, "Step2ChooseType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step6PhotoInstructions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
function Step6PhotoInstructions({ onNext, onBack }) {
    const goodPhotoExamples = [
        {
            image: '/images/avatars/good1.png',
            label: 'Photo 1'
        },
        {
            image: '/images/avatars/good2.png',
            label: 'Photo 2'
        },
        {
            image: '/images/avatars/good3.png',
            label: 'Photo 3'
        },
        {
            image: '/images/avatars/good4.png',
            label: 'Photo 4'
        },
        {
            image: '/images/avatars/good6.png',
            label: 'Photo 6'
        }
    ];
    const badPhotoExamples = [
        {
            image: '/images/avatars/bad1.png',
            label: 'Group photos'
        },
        {
            image: '/images/avatars/bad2.png',
            label: 'Hats & Sunglasses'
        },
        {
            image: '/images/avatars/bad3.png',
            label: 'Pets'
        },
        {
            image: '/images/avatars/bad4.png',
            label: 'Heavy filters'
        },
        {
            image: '/images/avatars/bad5.png',
            label: 'Low-resolution'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] text-[#5F5F5F] font-normal leading-[24px]",
                    children: [
                        "Use a video or photo to create your avatar's first look. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "md:block hidden"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                            lineNumber: 33,
                            columnNumber: 71
                        }, this),
                        "You can add more looks of either type later."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "21",
                                        viewBox: "0 0 22 21",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M0.5 10.5C0.5 7.71523 1.60625 5.04451 3.57538 3.07538C5.54451 1.10625 8.21523 0 11 0C13.7848 0 16.4555 1.10625 18.4246 3.07538C20.3938 5.04451 21.5 7.71523 21.5 10.5C21.5 13.2848 20.3938 15.9555 18.4246 17.9246C16.4555 19.8938 13.7848 21 11 21C8.21523 21 5.54451 19.8938 3.57538 17.9246C1.60625 15.9555 0.5 13.2848 0.5 10.5ZM10.4008 14.994L16.446 7.4368L15.354 6.5632L10.1992 13.0046L6.548 9.9624L5.652 11.0376L10.4008 14.994Z",
                                            fill: "#16C82B"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 42,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[24px] font-semibold text-[#101010] leading-[24px]",
                                        children: "Want large or distinct gesture?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[18px] text-[#5F5F5F] font-normal leading-[24px] max-w-[638px]",
                                children: "Recent photos of yourself (just you), showing a mix of close-ups and full-body shots, with different angles, expressions (smiling, neutral, serious), and a variety of outfits. Make sure they are High-resolution and reflect your current appearance."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between flex-wrap gap-y-5 pt-4",
                                children: goodPhotoExamples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: example.image,
                                            alt: example.label,
                                            width: 1000,
                                            height: 1000,
                                            className: "w-[120px] h-[169px] object-cover rounded-[12px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                            lineNumber: 57,
                                            columnNumber: 16
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 56,
                                        columnNumber: 16
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 0.5C15.53 0.5 20 4.97 20 10.5C20 16.03 15.53 20.5 10 20.5C4.47 20.5 0 16.03 0 10.5C0 4.97 4.47 0.5 10 0.5ZM13.59 5.5L10 9.09L6.41 5.5L5 6.91L8.59 10.5L5 14.09L6.41 15.5L10 11.91L13.59 15.5L15 14.09L11.41 10.5L15 6.91L13.59 5.5Z",
                                            fill: "#FB2323"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 66,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[24px] font-semibold text-[#101010] leading-[24px]",
                                        children: "Bad Photos"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[18px] text-[#5F5F5F] font-normal leading-[24px] max-w-[638px]",
                                children: "No group photos, hats, sunglasses, pets, heavy filters, low-resolution images, or screenshots. Avoid photos that are too old, overly edited, or don't represent how you currently look."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between flex-wrap gap-y-5 pt-4",
                                children: badPhotoExamples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: example.image,
                                            alt: example.label,
                                            width: 1000,
                                            height: 1000,
                                            className: "w-[120px] h-[169px] object-cover rounded-[12px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNext,
                        className: "px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] ",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Step6PhotoInstructions;
var _c;
__turbopack_context__.k.register(_c, "Step6PhotoInstructions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step7PhotoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Step7PhotoUpload({ onNext, onBack, avatarData, setAvatarData }) {
    _s();
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreviewUrl, setImagePreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // File validation function
    const validateFile = (file)=>{
        const maxSize = 200 * 1024 * 1024; // 200MB
        const allowedTypes = [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/heic',
            'image/webp'
        ];
        if (file.size > maxSize) {
            return {
                isValid: false,
                error: 'File size must be less than 200MB'
            };
        }
        if (!allowedTypes.includes(file.type)) {
            return {
                isValid: false,
                error: 'Only PNG, JPG, HEIC, and WebP files are supported'
            };
        }
        return {
            isValid: true
        };
    };
    // Function to create preview URL for uploaded file
    const createPreviewUrl = (file)=>{
        const url = URL.createObjectURL(file);
        setImagePreviewUrl(url);
        return url;
    };
    // Process file with validation
    const processFile = async (file)=>{
        setIsProcessing(true);
        setError(null);
        try {
            const validation = validateFile(file);
            if (!validation.isValid) {
                setError(validation.error || 'Invalid file');
                return;
            }
            createPreviewUrl(file);
            setAvatarData({
                ...avatarData,
                photoFiles: [
                    file
                ]
            });
        } catch (error) {
            console.error('File processing error:', error);
            setError('Failed to process file');
        } finally{
            setIsProcessing(false);
        }
    };
    // Effect to restore image preview when component mounts with existing photo files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step7PhotoUpload.useEffect": ()=>{
            if (avatarData.photoFiles.length > 0 && !imagePreviewUrl) {
                // Create preview URL for existing photo file
                const file = avatarData.photoFiles[0];
                createPreviewUrl(file);
            }
        }
    }["Step7PhotoUpload.useEffect"], [
        avatarData.photoFiles,
        imagePreviewUrl
    ]);
    // Cleanup effect to prevent memory leaks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step7PhotoUpload.useEffect": ()=>{
            return ({
                "Step7PhotoUpload.useEffect": ()=>{
                    // Cleanup preview URL when component unmounts
                    if (imagePreviewUrl) {
                        URL.revokeObjectURL(imagePreviewUrl);
                    }
                }
            })["Step7PhotoUpload.useEffect"];
        }
    }["Step7PhotoUpload.useEffect"], [
        imagePreviewUrl
    ]);
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files).filter((file)=>file.type.startsWith('image/'));
            if (newFiles.length > 0) {
                // Only take the first file
                const file = newFiles[0];
                processFile(file);
            }
        }
    };
    const handleFileSelect = (e)=>{
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).filter((file)=>file.type.startsWith('image/'));
            if (newFiles.length > 0) {
                // Only take the first file
                const file = newFiles[0];
                processFile(file);
            }
        }
    };
    const removePhoto = ()=>{
        // Clean up the preview URL for the removed image
        if (imagePreviewUrl) {
            URL.revokeObjectURL(imagePreviewUrl);
        }
        setAvatarData({
            ...avatarData,
            photoFiles: []
        });
        setImagePreviewUrl('');
        setError(null);
    };
    const handleUpload = ()=>{
        if (avatarData.photoFiles.length > 0) {
            onNext();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] text-[#5F5F5F] font-normal leading-[24px]",
                    children: "Upload a photo to create your avatar"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-[12px] md:p-8 p-4 border min-h-[280px] flex flex-col items-center justify-center text-center transition-colors duration-300 ${dragActive ? 'border-[#5046E5] bg-[#F5F7FC]' : 'border-[#F5F7FC] hover:border-[#5046E5] bg-[#F5F7FC]'}`,
                onDragEnter: handleDrag,
                onDragLeave: handleDrag,
                onDragOver: handleDrag,
                onDrop: handleDrop,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>fileInputRef.current?.click(),
                        className: "bg-transparent text-[#7C6FFF] px-[27px] py-2 rounded-[6px] hover:bg-[#7C6FFF] transition-colors duration-300 border border-[#7C6FFF] hover:text-white flex items-center justify-center gap-x-3 text-base font-normal leading-[24px] mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "23",
                                height: "22",
                                viewBox: "0 0 23 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M16.6094 8.00195C18.7844 8.01395 19.9624 8.11095 20.7304 8.87895C21.6094 9.75795 21.6094 11.172 21.6094 14V15C21.6094 17.829 21.6094 19.243 20.7304 20.122C19.8524 21 18.4374 21 15.6094 21H7.60938C4.78137 21 3.36637 21 2.48837 20.122C1.60937 19.242 1.60938 17.829 1.60938 15V14C1.60938 11.172 1.60937 9.75795 2.48837 8.87895C3.25637 8.11095 4.43438 8.01395 6.60938 8.00195",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11.6094 14V1M11.6094 1L14.6094 4.5M11.6094 1L8.60938 4.5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            "Select"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] font-normal leading-[24px] text-[#7C6FFF] pt-5",
                        children: "Drag and Drop photo to upload"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] text-[#5F5F5F] font-normal leading-[18px] pt-3",
                        children: "Upload PNG, JPG, HEIC, or WebP files up to 200MB"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/png,image/jpeg,image/jpg,image/heic,image/webp",
                        onChange: handleFileSelect,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 bg-red-50 border border-red-200 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-600 text-sm",
                            children: "Processing file..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            avatarData.photoFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group max-w-[200px] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[250px] rounded-[12px] overflow-hidden",
                                children: imagePreviewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: imagePreviewUrl,
                                    alt: "Preview",
                                    width: 200,
                                    height: 250,
                                    className: "w-full h-full object-contain bg-gray-100",
                                    style: {
                                        // Fix iOS image stretching issues
                                        objectFit: 'contain',
                                        objectPosition: 'center'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                    lineNumber: 219,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#98A2B3] text-xs",
                                        children: "Photo Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                    lineNumber: 232,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: removePhoto,
                                className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6L18 18",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-[#667085] text-center mt-2 truncate",
                                children: avatarData.photoFiles[0]?.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpload,
                        disabled: avatarData.photoFiles.length === 0,
                        className: `px-6 py-[11.4px] rounded-full font-semibold text-[18px] transition-colors duration-300 ${avatarData.photoFiles.length > 0 ? 'bg-[#5046E5] text-white hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        children: "Upload"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(Step7PhotoUpload, "IhAav3rcSXOVLkKt/NcSUdd7iR0=");
_c = Step7PhotoUpload;
var _c;
__turbopack_context__.k.register(_c, "Step7PhotoUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step8Details
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Step8Details({ onBack, avatarData, setAvatarData, onSkipBackToUpload, onClose }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Step8Details.useSelector": (state)=>state.user
    }["Step8Details.useSelector"]);
    const { clearAvatarUpdates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const [agreedToTerms, setAgreedToTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showErrors, setShowErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ageOptions = [
        {
            value: '18-24',
            label: '18-24'
        },
        {
            value: '25-34',
            label: '25-34'
        },
        {
            value: '35-44',
            label: '35-44'
        },
        {
            value: '45-54',
            label: '45-54'
        },
        {
            value: '55-64',
            label: '55-64'
        },
        {
            value: '65+',
            label: '65+'
        }
    ];
    const genderOptions = [
        {
            value: 'Male',
            label: 'Male'
        },
        {
            value: 'Female',
            label: 'Female'
        }
    ];
    const ethnicityOptions = [
        {
            value: 'Asian',
            label: 'Asian'
        },
        {
            value: 'Black or African American',
            label: 'Black or African American'
        },
        {
            value: 'Hispanic or Latino',
            label: 'Hispanic or Latino'
        },
        {
            value: 'Native American or Alaska Native',
            label: 'Native American or Alaska Native'
        },
        {
            value: 'Native Hawaiian or Pacific Islander',
            label: 'Native Hawaiian or Pacific Islander'
        },
        {
            value: 'White',
            label: 'White'
        },
        {
            value: 'Middle Eastern or North African',
            label: 'Middle Eastern or North African'
        },
        {
            value: 'Mixed',
            label: 'Mixed'
        },
        {
            value: 'Prefer not to say',
            label: 'Prefer not to say'
        }
    ];
    const handleInputChange = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined
            });
        }
    };
    const handleDropdownSelect = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        setOpenDropdown(null);
        // Clear error for this field when user selects a value
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined
            });
        }
    };
    const handleDropdownToggle = (field)=>{
        setOpenDropdown(openDropdown === field ? null : field);
    };
    const renderDropdown = (field, options, placeholder)=>{
        const currentValue = avatarData[field];
        const selectedOption = options.find((option)=>option.value === currentValue);
        const isOpen = openDropdown === field;
        const hasError = showErrors && errors[field];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleDropdownToggle(field),
                    className: `w-full px-4 py-[10.5px] text-[18px] font-normal bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-left transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white flex items-center justify-between cursor-pointer ${selectedOption ? 'text-gray-800 bg-[#F5F5F5]' : 'text-[#11101066]'} ${hasError ? 'ring-2 ring-red-500' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: selectedOption ? selectedOption.label : placeholder
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                            className: `w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-60 overflow-y-auto",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDropdownSelect(field, option.value),
                            className: "w-full px-4 py-3 text-left hover:bg-[#F5F5F5] transition-colors duration-200 flex items-center justify-between text-[#282828] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: option.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                currentValue === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-[#5046E5]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                    lineNumber: 113,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this),
                hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                    role: "alert",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        errors[field]
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!avatarData.name || avatarData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (!avatarData.age || avatarData.age.trim() === '') {
            newErrors.age = 'Age is required';
        }
        if (!avatarData.gender || avatarData.gender.trim() === '') {
            newErrors.gender = 'Gender is required';
        }
        if (!avatarData.ethnicity || avatarData.ethnicity.trim() === '') {
            newErrors.ethnicity = 'Ethnicity is required';
        }
        if (!agreedToTerms) {
            newErrors.terms = 'You must agree to the terms and conditions';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleCreate = async ()=>{
        setShowErrors(true);
        const isValid = validateForm();
        if (isValid) {
            // Check if user is logged in
            if (!user?.id) {
                setErrors({
                    ...errors,
                    general: 'Please log in to create an avatar'
                });
                return;
            }
            // Check if photo is uploaded
            if (!avatarData.photoFiles || avatarData.photoFiles.length === 0) {
                setErrors({
                    ...errors,
                    general: 'Please upload a photo first'
                });
                return;
            }
            // Allow multiple avatar creation - removed global processing check
            // Each avatar creation is independent and can run simultaneously
            setIsCreating(true);
            clearAvatarUpdates(); // Clear any previous notifications
            try {
                // Create FormData for API call
                const formData = new FormData();
                formData.append('image', avatarData.photoFiles[0]); // First (and only) photo
                formData.append('name', avatarData.name);
                formData.append('age_group', avatarData.age);
                formData.append('gender', avatarData.gender.toLowerCase());
                formData.append('ethnicity', avatarData.ethnicity.toLowerCase());
                formData.append('userId', user.id);
                // Call API
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createPhotoAvatar(formData);
                if (result.success) {
                    // Close modal immediately - WebSocket will handle progress notifications
                    if (onClose) {
                        onClose();
                    }
                } else {
                    setErrors({
                        ...errors,
                        general: result.message || 'Failed to create avatar'
                    });
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Failed to create avatar';
                setErrors({
                    ...errors,
                    general: errorMessage
                });
            } finally{
                setIsCreating(false);
            }
        } else {
            // Scroll to top to show errors
            const container = document.querySelector('.flex-1.overflow-y-auto');
            if (container) {
                container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };
    const handleBack = ()=>{
        // Skip back to upload step (Step 3) instead of going through intermediate steps
        if (onSkipBackToUpload) {
            onSkipBackToUpload();
        } else {
            onBack();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] font-normal text-[#5F5F5F]",
                    children: "Now, let's add some details to bring your avatar to life."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            showErrors && errors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-500 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-700 text-sm",
                        children: errors.general
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 247,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: avatarData.name,
                                onChange: (e)=>handleInputChange('name', e.target.value),
                                placeholder: "Enter avatar name",
                                className: `w-full px-4 py-[10.5px] text-[18px] font-normal placeholder:text-[#11101066] bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-gray-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white ${showErrors && errors.name ? 'ring-2 ring-red-500' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            showErrors && errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    errors.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Age ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            renderDropdown('age', ageOptions, 'Select age range'),
                            showErrors && errors.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    errors.age
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Gender ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 283,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            renderDropdown('gender', genderOptions, 'Select gender'),
                            showErrors && errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    errors.gender
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Ethnicity ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 297,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            renderDropdown('ethnicity', ethnicityOptions, 'Select ethnicity'),
                            showErrors && errors.ethnicity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    errors.ethnicity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            checked: agreedToTerms,
                            onChange: (e)=>{
                                const checked = e?.target?.checked || false;
                                setAgreedToTerms(checked);
                                // Clear terms error when user checks the box
                                if (checked && errors.terms) {
                                    setErrors({
                                        ...errors,
                                        terms: undefined
                                    });
                                }
                            },
                            label: "By creating an avatar, I confirm that I am over 18 years of age (or the legal age in my country) and that the photos used belong to me or I have obtained explicit permission from the individual represented. I understand that I am solely responsible for the content I upload and that the use of these images must comply with all applicable laws and regulations. Additionally, I agree not to upload any photos that infringe on others rights or that I do not have permission to use. By proceeding, I accept the Terms of Service and Privacy Policy.",
                            id: "terms-agreement"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    showErrors && errors.terms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm mt-2 flex items-center gap-1",
                        role: "alert",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            errors.terms
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        disabled: isCreating,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] ${isCreating ? 'opacity-50 cursor-not-allowed' : ''}`,
                        children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                "Creating Avatar..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this) : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setOpenDropdown(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_s(Step8Details, "JWt23i4YwhOVOEZzFbDaiMHCG+I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"]
    ];
});
_c = Step8Details;
var _c;
__turbopack_context__.k.register(_c, "Step8Details");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step9AvatarReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
function Step9AvatarReady({ onNext, onBack }) {
    const handleCreateVideo = ()=>{
        // In a real implementation, this would redirect to video creation or close the modal
        onNext();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[20px] font-semibold text-[#101010] mb-3",
                    children: "Your avatar is ready!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/avatars/avatargirl.png",
                    alt: "avatar",
                    width: 1000,
                    height: 1000,
                    className: "w-[356px] md:h-[533px] h-[370px] md:object-cover object-contain"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateVideo,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] `,
                        children: "Create"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Step9AvatarReady;
var _c;
__turbopack_context__.k.register(_c, "Step9AvatarReady");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1Intro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
function Step1Intro({ onNext }) {
    const instructions = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "11",
                height: "16",
                viewBox: "0 0 11 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.5 6H10C9.72375 6 9.5 6.22375 9.5 6.5V8C9.5 10.3375 7.48469 12.2131 5.10031 11.9806C3.02219 11.7778 1.5 9.90969 1.5 7.82188V6.5C1.5 6.22375 1.27625 6 1 6H0.5C0.22375 6 0 6.22375 0 6.5V7.755C0 10.5562 1.99906 13.0534 4.75 13.4328V14.5H3C2.72375 14.5 2.5 14.7238 2.5 15V15.5C2.5 15.7762 2.72375 16 3 16H8C8.27625 16 8.5 15.7762 8.5 15.5V15C8.5 14.7238 8.27625 14.5 8 14.5H6.25V13.4447C8.92844 13.0772 11 10.7781 11 8V6.5C11 6.22375 10.7762 6 10.5 6ZM5.5 11C7.15688 11 8.5 9.65687 8.5 8H5.83344C5.64937 8 5.5 7.88812 5.5 7.75V7.25C5.5 7.11188 5.64937 7 5.83344 7H8.5V6H5.83344C5.64937 6 5.5 5.88812 5.5 5.75V5.25C5.5 5.11188 5.64937 5 5.83344 5H8.5V4H5.83344C5.64937 4 5.5 3.88812 5.5 3.75V3.25C5.5 3.11188 5.64937 3 5.83344 3H8.5C8.5 1.34312 7.15688 0 5.5 0C3.84312 0 2.5 1.34312 2.5 3V8C2.5 9.65687 3.84312 11 5.5 11Z",
                    fill: "#2A2F3A"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                    lineNumber: 13,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            title: "Use the right equipment",
            description: "Submit 2-5 min (at least 30 sec) of unedited footage with a professional camera or smartphone."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "16",
                height: "12",
                viewBox: "0 0 16 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.5 12H1.5C0.671562 12 0 11.3284 0 10.5V1.5C0 0.671562 0.671562 0 1.5 0H14.5C15.3284 0 16 0.671562 16 1.5V10.5C16 11.3284 15.3284 12 14.5 12ZM3.5 1.75C2.5335 1.75 1.75 2.5335 1.75 3.5C1.75 4.4665 2.5335 5.25 3.5 5.25C4.4665 5.25 5.25 4.4665 5.25 3.5C5.25 2.5335 4.4665 1.75 3.5 1.75ZM2 10H14V6.5L11.2652 3.76516C11.1187 3.61872 10.8813 3.61872 10.7348 3.76516L6.5 8L4.76516 6.26516C4.61872 6.11872 4.38128 6.11872 4.23481 6.26516L2 8.5V10Z",
                    fill: "#2A2F3A"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            title: "Set the right environment",
            description: "Look straight ahead and keep your head level"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "11",
                height: "16",
                viewBox: "0 0 11 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.5 6H10C9.72375 6 9.5 6.22375 9.5 6.5V8C9.5 10.3375 7.48469 12.2131 5.10031 11.9806C3.02219 11.7778 1.5 9.90969 1.5 7.82188V6.5C1.5 6.22375 1.27625 6 1 6H0.5C0.22375 6 0 6.22375 0 6.5V7.755C0 10.5562 1.99906 13.0534 4.75 13.4328V14.5H3C2.72375 14.5 2.5 14.7238 2.5 15V15.5C2.5 15.7762 2.72375 16 3 16H8C8.27625 16 8.5 15.7762 8.5 15.5V15C8.5 14.7238 8.27625 14.5 8 14.5H6.25V13.4447C8.92844 13.0772 11 10.7781 11 8V6.5C11 6.22375 10.7762 6 10.5 6ZM5.5 11C7.15688 11 8.5 9.65687 8.5 8H5.83344C5.64937 8 5.5 7.88812 5.5 7.75V7.25C5.5 7.11188 5.64937 7 5.83344 7H8.5V6H5.83344C5.64937 6 5.5 5.88812 5.5 5.75V5.25C5.5 5.11188 5.64937 5 5.83344 5H8.5V4H5.83344C5.64937 4 5.5 3.88812 5.5 3.75V3.25C5.5 3.11188 5.64937 3 5.83344 3H8.5C8.5 1.34312 7.15688 0 5.5 0C3.84312 0 2.5 1.34312 2.5 3V8C2.5 9.65687 3.84312 11 5.5 11Z",
                    fill: "#2A2F3A"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            title: "Speak naturally and clearly",
            description: "Maintain a steady pace, pausing 1-2 seconds between sentences with lips closed."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 6H6V0H0V6ZM2 2H4V4H2V2ZM8 0V6H14V0H8ZM12 4H10V2H12V4ZM0 14H6V8H0V14ZM2 10H4V12H2V10ZM13 8H14V12H11V11H10V14H8V8H11V9H13V8ZM13 13H14V14H13V13ZM11 13H12V14H11V13Z",
                    fill: "#2A2F3A"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            title: "Subtle movement, clear expression",
            description: "Sit, stand, or walk with subtle hand movements kept below the chest. Vary facial expressions and look into the camera."
        },
        {
            icon: "👋",
            title: "Want large or distinct gesture?",
            description: "You can include these after 30 seconds, spaced at least 2 seconds apart. They'll be excluded from your avatar's default behavior and only used when trigged."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 flex flex-col h-full justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-0 flex-wrap gap-y-10 w-full items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-9 md:w-[56%] w-full pr-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-9",
                                children: instructions.slice(0, 4).map((instruction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 mt-[9px]",
                                                children: instruction.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "md:text-[24px] text-[18px] font-semibold text-[#101010]",
                                                        children: instruction.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "md:text-[18px] max-w-[520px] text-[14px] text-[#5F5F5F] font-normal leading-[24px]",
                                                        children: instruction.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#101010] h-[1px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-[9px",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[24px]",
                                            children: instructions[4].icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "md:text-[24px] text-[18px] font-semibold text-[#101010]",
                                                children: instructions[4].title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "md:text-[18px] max-w-[520px] leading-[24px] text-[14px] text-[#5F5F5F] font-normal",
                                                children: instructions[4].description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 md:w-[44%] w-full flex flex-col justify-end md:items-end items-center pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/avatars/right.png",
                                alt: "Good Example",
                                width: 400,
                                height: 296
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/avatars/wrong.png",
                                alt: "Bad Example",
                                width: 400,
                                height: 296
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pt-0 pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onNext,
                    className: "px-8 py-[11.3px] bg-[#5046E5] text-white font-semibold text-[20px] hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5] rounded-full transition-colors duration-300 cursor-pointer w-full",
                    children: "Next"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = Step1Intro;
var _c;
__turbopack_context__.k.register(_c, "Step1Intro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoAvatarStep4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
'use client';
;
;
function VideoAvatarStep4({ onNext, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] font-bold text-[#282828]",
                            children: "Get to Heygen"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[18px] text-[#667085]",
                            children: "Put these credentials on Hygen"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/email.svg",
                                        alt: "Email",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-[#667085] mb-1",
                                        children: "Email ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[16px] font-medium text-[#282828]",
                                        children: "hygen.ai.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/password.svg",
                                        alt: "Password",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-[#667085] mb-1",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 46,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[16px] font-medium text-[#282828]",
                                        children: "54dewfwf54883"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                        lineNumber: 47,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 w-full mt-5",
                    children: [
                        onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.open('https://app.heygen.com/', '_blank'),
                            className: "w-full bg-[#5046E5] text-white px-5 py-3 rounded-full font-semibold text-[18px] hover:bg-[#4338CA] transition-colors duration-300 flex items-center justify-center gap-2",
                            children: [
                                "Visit Hygen",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = VideoAvatarStep4;
var _c;
__turbopack_context__.k.register(_c, "VideoAvatarStep4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoAvatarStep5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function VideoAvatarStep5({ onBack, avatarData, setAvatarData, onSkipBackToUpload, onClose, onShowToast }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "VideoAvatarStep5.useSelector": (state)=>state.user
    }["VideoAvatarStep5.useSelector"]);
    const { clearAvatarUpdates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const [agreedToTerms, setAgreedToTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showErrors, setShowErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generationStatus, setGenerationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const ageOptions = [
        {
            value: '18-24',
            label: '18-24'
        },
        {
            value: '25-34',
            label: '25-34'
        },
        {
            value: '35-44',
            label: '35-44'
        },
        {
            value: '45-54',
            label: '45-54'
        },
        {
            value: '55-64',
            label: '55-64'
        },
        {
            value: '65+',
            label: '65+'
        }
    ];
    const genderOptions = [
        {
            value: 'Male',
            label: 'Male'
        },
        {
            value: 'Female',
            label: 'Female'
        }
    ];
    const ethnicityOptions = [
        {
            value: 'Asian',
            label: 'Asian'
        },
        {
            value: 'Black or African American',
            label: 'Black or African American'
        },
        {
            value: 'Hispanic or Latino',
            label: 'Hispanic or Latino'
        },
        {
            value: 'Native American or Alaska Native',
            label: 'Native American or Alaska Native'
        },
        {
            value: 'Native Hawaiian or Pacific Islander',
            label: 'Native Hawaiian or Pacific Islander'
        },
        {
            value: 'White',
            label: 'White'
        },
        {
            value: 'Middle Eastern or North African',
            label: 'Middle Eastern or North African'
        },
        {
            value: 'Mixed',
            label: 'Mixed'
        },
        {
            value: 'Prefer not to say',
            label: 'Prefer not to say'
        }
    ];
    const handleInputChange = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined
            });
        }
    };
    const handleDropdownSelect = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        setOpenDropdown(null);
        // Clear error for this field when user selects a value
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined
            });
        }
    };
    const handleDropdownToggle = (field)=>{
        setOpenDropdown(openDropdown === field ? null : field);
    };
    const renderDropdown = (field, options, placeholder)=>{
        const currentValue = avatarData[field];
        const selectedOption = options.find((option)=>option.value === currentValue);
        const isOpen = openDropdown === field;
        const hasError = showErrors && errors[field];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleDropdownToggle(field),
                    className: `w-full px-4 py-[10.5px] text-[18px] font-normal bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-left transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white flex items-center justify-between cursor-pointer ${selectedOption ? 'text-gray-800 bg-[#F5F5F5]' : 'text-[#11101066]'} ${hasError ? 'ring-2 ring-red-500' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: selectedOption ? selectedOption.label : placeholder
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                            className: `w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-60 overflow-y-auto",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDropdownSelect(field, option.value),
                            className: "w-full px-4 py-3 text-left hover:bg-[#F5F5F5] transition-colors duration-200 flex items-center justify-between text-[#282828] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: option.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                currentValue === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-[#5046E5]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                    lineNumber: 115,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this),
                hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                    role: "alert",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        errors[field]
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!avatarData.name || avatarData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (!avatarData.age || avatarData.age.trim() === '') {
            newErrors.age = 'Age is required';
        }
        if (!avatarData.gender || avatarData.gender.trim() === '') {
            newErrors.gender = 'Gender is required';
        }
        if (!avatarData.ethnicity || avatarData.ethnicity.trim() === '') {
            newErrors.ethnicity = 'Ethnicity is required';
        }
        if (!agreedToTerms) {
            newErrors.terms = 'You must agree to the terms and conditions';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleCreate = async ()=>{
        setShowErrors(true);
        const isValid = validateForm();
        if (isValid) {
            // Check if user is logged in
            if (!user?.id) {
                setErrors({
                    ...errors,
                    general: 'Please log in to create an avatar'
                });
                return;
            }
            // Check if both videos are uploaded
            if (!avatarData.videoFile) {
                setErrors({
                    ...errors,
                    general: 'Please upload a training video first'
                });
                return;
            }
            if (!avatarData.consentVideoFile) {
                setErrors({
                    ...errors,
                    general: 'Please record a consent video first'
                });
                return;
            }
            // Allow multiple avatar creation - removed global processing check
            // Each avatar creation is independent and can run simultaneously
            setIsCreating(true);
            clearAvatarUpdates(); // Clear any previous notifications
            try {
                console.log('🎬 Creating video avatar with HeyGen API');
                console.log('📹 Training video file:', avatarData.videoFile);
                console.log('📹 Consent video file:', avatarData.consentVideoFile);
                console.log('👤 Avatar name:', avatarData.name);
                // Call HeyGen API with actual File objects
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createVideoAvatar(avatarData.videoFile, avatarData.consentVideoFile, avatarData.name);
                if (result.success) {
                    // Store the avatar_id for status checking
                    console.log('✅ Video avatar created successfully:', result.data);
                    const avatarId = result.data?.avatar_id;
                    if (!avatarId) {
                        setErrors({
                            ...errors,
                            general: 'No avatar ID received from server'
                        });
                        return;
                    }
                    console.log('🆔 Avatar ID:', avatarId);
                    // Start polling for avatar status
                    console.log('🔄 Starting status polling...');
                    setIsGenerating(true);
                    setGenerationStatus('Avatar generation started... This process may take 5-10 minutes. Please keep this page open.');
                    const statusResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].pollVideoAvatarStatus(avatarId, (status, data)=>{
                        console.log(`📊 Status update: ${status}`, data);
                        // Update UI with status and show notifications for all statuses
                        if (status === 'in_progress') {
                            setGenerationStatus('Generating your avatar... This may take a few minutes.');
                            // Show processing notification (non-dismissible)
                            if (onShowToast) {
                                onShowToast('Avatar is being generated... Please wait', 'info');
                            }
                        } else if (status === 'completed') {
                            setGenerationStatus('Avatar generation completed!');
                            // Show success notification
                            if (onShowToast) {
                                onShowToast('Avatar generated successfully!', 'success');
                            }
                        } else if (status === 'failed') {
                            setGenerationStatus('Avatar generation failed.');
                            // Show error notification
                            if (onShowToast) {
                                onShowToast('Avatar generation failed. Please try again.', 'error');
                            }
                        }
                    });
                    if (statusResult.success) {
                        console.log('🎉 Avatar generation completed!', statusResult.data);
                        // Close modal on success
                        if (onClose) {
                            onClose();
                        }
                    } else {
                        console.error('❌ Avatar generation failed:', statusResult.message);
                        setErrors({
                            ...errors,
                            general: statusResult.message || 'Avatar generation failed'
                        });
                    }
                } else {
                    setErrors({
                        ...errors,
                        general: result.message || 'Failed to create video avatar'
                    });
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Failed to create avatar';
                setErrors({
                    ...errors,
                    general: errorMessage
                });
            } finally{
                setIsCreating(false);
                setIsGenerating(false);
            }
        } else {
            // Scroll to top to show errors
            const container = document.querySelector('.flex-1.overflow-y-auto');
            if (container) {
                container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };
    const handleBack = ()=>{
        // Skip back to upload step (Step 3) instead of going through intermediate steps
        if (onSkipBackToUpload) {
            onSkipBackToUpload();
        } else {
            onBack();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] font-normal text-[#5F5F5F]",
                    children: "Now, let's add some details to bring your avatar to life."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            showErrors && errors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-500 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-700 text-sm",
                        children: errors.general
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            isGenerating && generationStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-700 text-sm",
                        children: generationStatus
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 311,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: avatarData.name,
                                onChange: (e)=>handleInputChange('name', e.target.value),
                                placeholder: "Enter avatar name",
                                className: `w-full px-4 py-[10.5px] text-[18px] font-normal placeholder:text-[#11101066] bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-gray-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white ${showErrors && errors.name ? 'ring-2 ring-red-500' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            showErrors && errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    errors.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Age ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            renderDropdown('age', ageOptions, 'Select age range'),
                            showErrors && errors.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    errors.age
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Gender ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 347,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            renderDropdown('gender', genderOptions, 'Select gender'),
                            showErrors && errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    errors.gender
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Ethnicity ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 361,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            renderDropdown('ethnicity', ethnicityOptions, 'Select ethnicity'),
                            showErrors && errors.ethnicity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    errors.ethnicity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            checked: agreedToTerms,
                            onChange: (e)=>{
                                const checked = e?.target?.checked || false;
                                setAgreedToTerms(checked);
                                // Clear terms error when user checks the box
                                if (checked && errors.terms) {
                                    setErrors({
                                        ...errors,
                                        terms: undefined
                                    });
                                }
                            },
                            label: "By creating an avatar, I confirm that I am over 18 years of age (or the legal age in my country) and that the photos used belong to me or I have obtained explicit permission from the individual represented. I understand that I am solely responsible for the content I upload and that the use of these images must comply with all applicable laws and regulations. Additionally, I agree not to upload any photos that infringe on others rights or that I do not have permission to use. By proceeding, I accept the Terms of Service and Privacy Policy.",
                            id: "terms-agreement"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    showErrors && errors.terms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm mt-2 flex items-center gap-1",
                        role: "alert",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this),
                            errors.terms
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        disabled: isCreating || isGenerating,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] ${isCreating || isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`,
                        children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                "Creating Avatar..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this) : isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                "Generating..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, this) : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setOpenDropdown(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_s(VideoAvatarStep5, "E2prbuwzYzwko1cLX/J8o/69V2o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"]
    ];
});
_c = VideoAvatarStep5;
var _c;
__turbopack_context__.k.register(_c, "VideoAvatarStep5");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
'use client';
;
;
function VideoCard({ video, videoState, isWatched, progress, onVideoPlay, onVideoMute, onVideoTimeUpdate, onVideoLoadedMetadata, onVideoPlayStateChange, formatDuration }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#F2F2F2] rounded-[8px] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[18px] font-semibold text-[#101010] mb-4",
                    children: video.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-[8px] overflow-hidden bg-black mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            "data-video-id": video.id,
                            className: "w-full h-[230px] object-cover",
                            poster: video.thumbnail,
                            preload: "metadata",
                            controls: true,
                            muted: videoState.isMuted,
                            onTimeUpdate: (e)=>{
                                const target = e.target;
                                onVideoTimeUpdate(video.id, target.currentTime, target.duration);
                            },
                            onLoadedMetadata: (e)=>{
                                const target = e.target;
                                onVideoLoadedMetadata(video.id, target.duration);
                            },
                            onPlay: ()=>{
                                onVideoPlayStateChange(video.id, true);
                            },
                            onPause: ()=>{
                                onVideoPlayStateChange(video.id, false);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: video.videoUrl,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                "Your browser does not support the video tag."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-[#5046E5] transition-all duration-300",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded",
                            children: [
                                Math.round(progress),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded",
                            children: videoState.duration > 0 ? formatDuration(videoState.duration) : 'Loading...'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        isWatched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = VideoCard;
var _c;
__turbopack_context__.k.register(_c, "VideoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitalTwinGuidelines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VideoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VideoCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DigitalTwinGuidelines({ onNext, onBack }) {
    _s();
    const [watchedVideos, setWatchedVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [videoStates, setVideoStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        1: {
            isPlaying: false,
            isMuted: false,
            currentTime: 0,
            duration: 0
        },
        2: {
            isPlaying: false,
            isMuted: false,
            currentTime: 0,
            duration: 0
        }
    });
    const guidelines = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
            title: "Use the right equipment",
            description: "Submit 2-5 min of unedited footage with a professional camera or smartphone."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
            title: "Set the right environment",
            description: "Look straight ahead and keep your head level"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
            title: "Speak naturally and clearly",
            description: "Maintain a steady pace, pausing 1-2 seconds between sentences with lips closed."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
            title: "Subtle movement, clear expression",
            description: "Sit, stand, or walk with subtle hand movements kept below the chest. Vary facial expressions and look into the camera."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"],
            title: "Want large or distinct gesture?",
            description: "You can include these after 30 seconds, spaced at least 2 seconds apart. They'll be excluded from your avatar's default behavior and only used when triggered."
        }
    ];
    const guidelineVideos = [
        {
            id: 1,
            title: "Avatar Training Video",
            description: "",
            videoUrl: "/videos/guidelines/heygen_lifestyle_instruction_rebrand_low.mp4",
            thumbnail: "/videos/guidelines/heygen_lifestyle_instruction_rebrand_low.mp4",
            duration: "",
            progress: 45
        },
        {
            id: 2,
            title: "Consent Video Guidelines",
            description: "",
            videoUrl: "/videos/guidelines/lighting-guide.mov",
            thumbnail: "/videos/guidelines/lighting-guide.mov",
            duration: "",
            progress: 45
        }
    ];
    const handleVideoPlay = (videoId)=>{
        const videoElement = document.querySelector(`video[data-video-id="${videoId}"]`);
        if (videoElement) {
            if (videoStates[videoId].isPlaying) {
                videoElement.pause();
            } else {
                videoElement.play();
            }
        }
    };
    const handleVideoMute = (videoId)=>{
        const videoElement = document.querySelector(`video[data-video-id="${videoId}"]`);
        if (videoElement) {
            videoElement.muted = !videoElement.muted;
            setVideoStates((prev)=>({
                    ...prev,
                    [videoId]: {
                        ...prev[videoId],
                        isMuted: videoElement.muted
                    }
                }));
        }
    };
    const handleVideoLoadedMetadata = (videoId, duration)=>{
        setVideoStates((prev)=>({
                ...prev,
                [videoId]: {
                    ...prev[videoId],
                    duration
                }
            }));
    };
    const handleVideoPlayStateChange = (videoId, isPlaying)=>{
        setVideoStates((prev)=>({
                ...prev,
                [videoId]: {
                    ...prev[videoId],
                    isPlaying
                }
            }));
    };
    const handleVideoTimeUpdate = (videoId, currentTime, duration)=>{
        setVideoStates((prev)=>({
                ...prev,
                [videoId]: {
                    ...prev[videoId],
                    currentTime,
                    duration
                }
            }));
        // Mark video as watched when 90% complete
        if (currentTime / duration >= 0.9) {
            setWatchedVideos((prev)=>new Set([
                    ...prev,
                    videoId
                ]));
        }
    };
    const formatDuration = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const allVideosWatched = watchedVideos.size === guidelineVideos.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white flex flex-col h-full max-w-7xl mx-auto w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col lg:flex-row overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/2 p-4 lg:p-8 space-y-6 order-1 lg:order-2",
                        children: guidelineVideos.map((video)=>{
                            const videoState = videoStates[video.id];
                            const isWatched = watchedVideos.has(video.id);
                            const progress = videoState.duration > 0 ? videoState.currentTime / videoState.duration * 100 : video.progress;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VideoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                video: video,
                                videoState: videoState,
                                isWatched: isWatched,
                                progress: progress,
                                onVideoPlay: handleVideoPlay,
                                onVideoMute: handleVideoMute,
                                onVideoTimeUpdate: handleVideoTimeUpdate,
                                onVideoLoadedMetadata: handleVideoLoadedMetadata,
                                onVideoPlayStateChange: handleVideoPlayStateChange,
                                formatDuration: formatDuration
                            }, video.id, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/2 order-2 lg:order-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: guidelines.map((guideline, index)=>{
                                const IconComponent = guideline.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-8 h-8 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        className: "w-6 h-6 text-gray-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "md:text-[24px] text-[18px] font-semibold text-[#101010] mb-2",
                                                            children: guideline.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "md:text-[18px] max-w-[520px] text-[14px] text-[#5F5F5F] font-normal leading-[24px]",
                                                            children: guideline.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        index === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200 my-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNext,
                            // disabled={!allVideosWatched}
                            className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 w-full bg-[#5046E5] text-white hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5] cursor-pointer
            `,
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(DigitalTwinGuidelines, "DyE450UrbVLk0iWBapjFc/WhbCQ=");
_c = DigitalTwinGuidelines;
var _c;
__turbopack_context__.k.register(_c, "DigitalTwinGuidelines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingVideoUpload,
    "trainingVideoNameRef",
    ()=>trainingVideoNameRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useVideoUpload.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const trainingVideoNameRef = {
    current: ''
};
function TrainingVideoUpload({ onNext, onBack, avatarData, setAvatarData }) {
    _s();
    const [avatarName, setAvatarName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(trainingVideoNameRef.current || '');
    const trainingUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoUpload"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrainingVideoUpload.useEffect": ()=>{
            if (avatarData.videoFile && !trainingUpload.uploadState.preview) {
                trainingUpload.handleFileSelect(avatarData.videoFile, 'training');
            }
        }
    }["TrainingVideoUpload.useEffect"], [
        avatarData.videoFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrainingVideoUpload.useEffect": ()=>{
            if (trainingVideoNameRef.current) {
                setAvatarName(trainingVideoNameRef.current);
            }
        }
    }["TrainingVideoUpload.useEffect"], []);
    const handleAvatarNameChange = (e)=>{
        const name = e.target.value;
        setAvatarName(name);
        trainingVideoNameRef.current = name;
    };
    const handleTrainingInputChange = (e)=>{
        trainingUpload.handleInputChange(e, 'training');
        if (e.target.files && e.target.files[0]) {
            setAvatarData({
                ...avatarData,
                videoFile: e.target.files[0]
            });
        }
    };
    const handleTrainingDrop = async (e)=>{
        trainingUpload.handleDrop(e, 'training');
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setAvatarData({
                ...avatarData,
                videoFile: files[0]
            });
        }
    };
    const clearTrainingSelection = ()=>{
        trainingUpload.clearSelection();
        setAvatarData({
            ...avatarData,
            videoFile: null
        });
    };
    const canProceed = avatarData.videoFile && trainingUpload.uploadState.isValid && !trainingUpload.uploadState.isValidating && avatarName.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10 w-full max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[24px] font-semibold text-[#101010] mb-6 tracking-[-2%] leading-[120%]",
                            children: "Upload your footage"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[18px] text-[#5F5F5F] max-w-[710px] mx-auto leading-[24px]",
                            children: "For optimal, most test realistic results, we recommend uploading a video between 2 minutes to 4 minutes recorded with a high-resolution for optimal avatar creation."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "avatarName",
                            className: "block text-[14px] font-medium text-[#101010] mb-2",
                            children: "Avatar Name"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "avatarName",
                            type: "text",
                            value: avatarName,
                            onChange: handleAvatarNameChange,
                            placeholder: "Enter your avatar name",
                            className: "w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-[14px] text-[#101010] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:border-transparent transition-all duration-200"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[18px] font-semibold text-[#101010] mb-4",
                            children: "Drag and drop training video"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-[2px] rounded-[8px] p-8 border-dashed transition-all min-h-[300px] duration-300 ${trainingUpload.getBorderClasses('training')}`,
                            onDragEnter: (e)=>trainingUpload.handleDragEnter(e, 'training'),
                            onDragLeave: (e)=>trainingUpload.handleDragLeave(e, 'training'),
                            onDragOver: trainingUpload.handleDragOver,
                            onDrop: handleTrainingDrop,
                            children: !avatarData.videoFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-6 h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[20px] font-semibold text-[#101010] mb-4",
                                                children: "Drag and drop training video"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-[#5F5F5F] text-center mb-6",
                                                children: "MP4 or MOV format, training footage must be between 30 seconds to 4 minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>trainingUpload.fileInputRef.current?.click(),
                                                className: "text-[#6366F1] font-normal transition-colors duration-300 hover:text-[#5046E5] text-[16px]",
                                                children: "Browse local files"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: trainingUpload.fileInputRef,
                                        type: "file",
                                        accept: "video/mp4,video/quicktime,.mp4,.mov",
                                        onChange: handleTrainingInputChange,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    (trainingUpload.uploadState.preview || avatarData.videoFile) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-lg overflow-hidden bg-black",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: trainingUpload.videoRef,
                                            src: trainingUpload.uploadState.preview || (avatarData.videoFile ? URL.createObjectURL(avatarData.videoFile) : ''),
                                            controls: true,
                                            className: "w-full max-h-[200px] object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] font-medium text-[#101010] truncate",
                                                                children: avatarData.videoFile.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            trainingUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-[#6366F1]",
                                                                children: "Validating..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 25
                                                            }, this),
                                                            trainingUpload.uploadState.isValid && !trainingUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-4 h-4 text-green-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 25
                                                            }, this),
                                                            trainingUpload.uploadState.errors.length > 0 && !trainingUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "w-4 h-4 text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[12px] text-[#5F5F5F]",
                                                        children: [
                                                            (avatarData.videoFile.size / (1024 * 1024)).toFixed(2),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this),
                                                    trainingUpload.uploadState.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 space-y-1",
                                                        children: trainingUpload.uploadState.errors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-1 text-red-600 text-[12px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "w-3 h-3 mt-0.5 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: error.message
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this),
                                                    trainingUpload.uploadState.isValid && !trainingUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex items-start gap-1 text-green-600 text-[12px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-3 h-3 mt-0.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Training video is valid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearTrainingSelection,
                                                className: "p-1 hover:bg-[#F3F4F6] rounded-lg transition-colors duration-300",
                                                title: "Clear selection",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4 text-[#5F5F5F]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col gap-4 mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "flex items-center gap-2 text-[#5F5F5F] hover:text-[#101010] transition-colors duration-200 font-medium text-[14px] self-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (avatarData.avatarType === 'digital-twin' && avatarName.trim()) {
                                    setAvatarData({
                                        ...avatarData,
                                        name: avatarName.trim()
                                    });
                                }
                                onNext();
                            },
                            disabled: !canProceed,
                            className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-all duration-300 w-full border-2 ${canProceed ? 'bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-[#5046E5] cursor-pointer' : 'bg-[#D1D5DB] text-[#9CA3AF] border-[#D1D5DB] cursor-not-allowed'}`,
                            children: trainingUpload.uploadState.isValidating ? 'Validating...' : 'Next'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(TrainingVideoUpload, "BGR0urEmnvqPiEsDoW2gmFfitEA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoUpload"]
    ];
});
_c = TrainingVideoUpload;
var _c;
__turbopack_context__.k.register(_c, "TrainingVideoUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsentVideoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useVideoUpload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$TrainingVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ConsentVideoUpload({ onNext, onBack, onClose, avatarData, setAvatarData, onCreateStart }) {
    _s();
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const consentUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoUpload"])();
    const { videoAvatarUpdates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentVideoUpload.useEffect": ()=>{
            if (avatarData.consentVideoFile && !consentUpload.uploadState.preview) {
                consentUpload.handleFileSelect(avatarData.consentVideoFile, 'consent');
            }
        }
    }["ConsentVideoUpload.useEffect"], [
        avatarData.consentVideoFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentVideoUpload.useEffect": ()=>{
            if (isCreating && videoAvatarUpdates.length > 0) {
                const latestUpdate = videoAvatarUpdates[videoAvatarUpdates.length - 1];
                if (latestUpdate.status === 'progress' || latestUpdate.status === 'error') {
                    console.log('🎬 Video avatar status update, closing modal:', latestUpdate.status);
                    if (onClose) {
                        onClose();
                    }
                }
            }
        }
    }["ConsentVideoUpload.useEffect"], [
        videoAvatarUpdates,
        isCreating,
        onClose
    ]);
    const handleConsentInputChange = (e)=>{
        consentUpload.handleInputChange(e, 'consent');
        if (e.target.files && e.target.files[0]) {
            setAvatarData({
                ...avatarData,
                consentVideoFile: e.target.files[0]
            });
        }
    };
    const handleConsentDrop = async (e)=>{
        consentUpload.handleDrop(e, 'consent');
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setAvatarData({
                ...avatarData,
                consentVideoFile: files[0]
            });
        }
    };
    const clearConsentSelection = ()=>{
        consentUpload.clearSelection();
        setAvatarData({
            ...avatarData,
            consentVideoFile: null
        });
    };
    const handleCreate = async ()=>{
        if (!avatarData.consentVideoFile || !avatarData.videoFile) {
            return;
        }
        setIsCreating(true);
        setErrorMessage(null);
        if (onCreateStart) {
            onCreateStart();
        }
        const avatarName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$TrainingVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trainingVideoNameRef"].current || avatarData.name || '';
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createVideoAvatar(avatarData.videoFile, avatarData.consentVideoFile, avatarName);
            if (!result.success) {
                console.error('❌ Video avatar creation failed:', result.message);
                if (onClose) {
                    onClose();
                }
            }
        } catch (error) {
            console.error('❌ Exception creating video avatar:', error);
            if (onClose) {
                onClose();
            }
        }
    };
    const canProceedConsent = avatarData.consentVideoFile && consentUpload.uploadState.isValid && !consentUpload.uploadState.isValidating;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10 w-full max-w-[900px] mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[24px] font-semibold text-[#101010] mb-6 tracking-[-2%] leading-[120%]",
                            children: "Upload your footage"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[18px] text-[#5F5F5F] max-w-[710px] mx-auto leading-[24px]",
                            children: "Record a consent video to authorize the use of your footage for avatar creation."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[900px] space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[18px] font-semibold text-[#101010]",
                                    children: "Record Consent"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-6 border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[16px] text-[#5F5F5F] leading-[24px]",
                                        children: [
                                            "I, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$TrainingVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trainingVideoNameRef"].current || avatarData.name || '[full name]'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                lineNumber: 118,
                                                columnNumber: 20
                                            }, this),
                                            ", hereby allow HeyGen to use the footage of me to build a HeyGen Avatar for use on the HeyGen platform."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[18px] font-semibold text-[#101010]",
                                    children: "Drag and drop consent video"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `border-[2px] rounded-[8px] p-8 border-dashed transition-all min-h-[300px] duration-300 ${consentUpload.getBorderClasses('consent')}`,
                                    onDragEnter: (e)=>consentUpload.handleDragEnter(e, 'consent'),
                                    onDragLeave: (e)=>consentUpload.handleDragLeave(e, 'consent'),
                                    onDragOver: consentUpload.handleDragOver,
                                    onDrop: handleConsentDrop,
                                    children: !avatarData.consentVideoFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center gap-6 h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-[20px] font-semibold text-[#101010] mb-4",
                                                        children: "Drag and drop consent video"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] text-[#5F5F5F] text-center mb-6",
                                                        children: "MP4 or MOV format, max 20 seconds, minimum 720p"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>consentUpload.fileInputRef.current?.click(),
                                                        className: "text-[#6366F1] font-normal transition-colors duration-300 hover:text-[#5046E5] text-[16px]",
                                                        children: "Browse local files"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: consentUpload.fileInputRef,
                                                type: "file",
                                                accept: "video/mp4,video/quicktime,.mp4,.mov",
                                                onChange: handleConsentInputChange,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            (consentUpload.uploadState.preview || avatarData.consentVideoFile) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-lg overflow-hidden bg-black",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    ref: consentUpload.videoRef,
                                                    src: consentUpload.uploadState.preview || (avatarData.consentVideoFile ? URL.createObjectURL(avatarData.consentVideoFile) : ''),
                                                    controls: true,
                                                    className: "w-full max-h-[200px] object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[14px] font-medium text-[#101010] truncate",
                                                                        children: avatarData.consentVideoFile.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    consentUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-[#6366F1]",
                                                                        children: "Validating..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    consentUpload.uploadState.isValid && !consentUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "w-4 h-4 text-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    consentUpload.uploadState.errors.length > 0 && !consentUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "w-4 h-4 text-red-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px] text-[#5F5F5F]",
                                                                children: [
                                                                    (avatarData.consentVideoFile.size / (1024 * 1024)).toFixed(2),
                                                                    " MB"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 23
                                                            }, this),
                                                            consentUpload.uploadState.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 space-y-1",
                                                                children: consentUpload.uploadState.errors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-1 text-red-600 text-[12px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                                className: "w-3 h-3 mt-0.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: error.message
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this),
                                                            consentUpload.uploadState.isValid && !consentUpload.uploadState.isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-start gap-1 text-green-600 text-[12px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "w-3 h-3 mt-0.5 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Consent video is valid"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: clearConsentSelection,
                                                        className: "p-1 hover:bg-[#F3F4F6] rounded-lg transition-colors duration-300",
                                                        title: "Clear selection",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-4 h-4 text-[#5F5F5F]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 text-[14px]",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col gap-4 mt-12 max-w-[900px]",
                    children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-8 py-[11.3px] font-semibold text-[20px] text-center text-[#5F5F5F]",
                        children: "Your avatar is being created! Usually takes 2-3 minutes."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "flex items-center gap-2 text-[#5F5F5F] hover:text-[#101010] transition-colors duration-200 font-medium text-[14px] self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCreate,
                                disabled: !canProceedConsent,
                                className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-all duration-300 w-full border-2 ${canProceedConsent ? 'bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-[#5046E5] cursor-pointer' : 'bg-[#D1D5DB] text-[#9CA3AF] border-[#D1D5DB] cursor-not-allowed'}`,
                                children: consentUpload.uploadState.isValidating ? 'Validating...' : 'Create'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(ConsentVideoUpload, "RBh/J0fysSqDbv8AKdT4WPpEhgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVideoUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoUpload"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"]
    ];
});
_c = ConsentVideoUpload;
var _c;
__turbopack_context__.k.register(_c, "ConsentVideoUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_AUDIO_DURATION",
    ()=>MAX_AUDIO_DURATION,
    "MAX_AUDIO_SIZE",
    ()=>MAX_AUDIO_SIZE,
    "MAX_VIDEO_DURATION",
    ()=>MAX_VIDEO_DURATION,
    "MAX_VIDEO_SIZE",
    ()=>MAX_VIDEO_SIZE,
    "MIN_AUDIO_DURATION",
    ()=>MIN_AUDIO_DURATION,
    "MIN_VIDEO_DURATION",
    ()=>MIN_VIDEO_DURATION,
    "SUPPORTED_AUDIO_FORMATS",
    ()=>SUPPORTED_AUDIO_FORMATS,
    "SUPPORTED_FORMATS",
    ()=>SUPPORTED_FORMATS
]);
const MAX_VIDEO_SIZE = 500 * 1024 * 1024; // 500MB
const MIN_VIDEO_DURATION = 3; // 3 seconds minimum
const MAX_VIDEO_DURATION = 120; // 2 minutes maximum
const SUPPORTED_FORMATS = [
    'video/mp4',
    'video/webm',
    'video/webm;codecs=vp8',
    'video/webm;codecs=vp9',
    'video/quicktime',
    'video/x-msvideo'
];
const MAX_AUDIO_SIZE = 10 * 1024 * 1024; // 10MB
const MIN_AUDIO_DURATION = 30; // 30 seconds minimum (for recording)
const MAX_AUDIO_DURATION = 180; // 3 minutes maximum (for recording)
const SUPPORTED_AUDIO_FORMATS = [
    'audio/mpeg',
    'audio/mp3'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/hooks/useAudioRecording.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioRecording",
    ()=>useAudioRecording
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useAudioRecording = ()=>{
    _s();
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // Use ref to track current time for closures
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioRecording.useEffect": ()=>{
            if (isRecording) {
                recordingIntervalRef.current = setInterval({
                    "useAudioRecording.useEffect": ()=>{
                        setRecordingTime({
                            "useAudioRecording.useEffect": (prev)=>{
                                const newTime = prev + 1;
                                recordingTimeRef.current = newTime; // Update ref with latest time
                                if (newTime >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"]) {
                                    // Auto-stop at exactly 3 minutes - stop recording and save file
                                    stopRecording(newTime);
                                    return newTime; // Return newTime so it shows 3:00 before stopping
                                }
                                return newTime;
                            }
                        }["useAudioRecording.useEffect"]);
                    }
                }["useAudioRecording.useEffect"], 1000);
            } else {
                if (recordingIntervalRef.current) {
                    clearInterval(recordingIntervalRef.current);
                    recordingIntervalRef.current = null;
                }
            }
            return ({
                "useAudioRecording.useEffect": ()=>{
                    if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
                }
            })["useAudioRecording.useEffect"];
        }
    }["useAudioRecording.useEffect"], [
        isRecording
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioRecording.useEffect": ()=>{
            return ({
                "useAudioRecording.useEffect": ()=>{
                    if (streamRef.current) streamRef.current.getTracks().forEach({
                        "useAudioRecording.useEffect": (track)=>track.stop()
                    }["useAudioRecording.useEffect"]);
                    if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
                    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                        mediaRecorderRef.current.stop();
                    }
                }
            })["useAudioRecording.useEffect"];
        }
    }["useAudioRecording.useEffect"], []);
    const stopRecording = (currentTime)=>{
        // Use provided currentTime or get from state (may be stale due to closure)
        const durationToCheck = currentTime !== undefined ? currentTime : recordingTime;
        // Allow auto-stop at exactly 3 minutes (MAX_AUDIO_DURATION) without minimum check
        const isAutoStopAtMax = durationToCheck >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"];
        // Check minimum duration before stopping (unless it's auto-stop at max duration)
        if (!isAutoStopAtMax && durationToCheck < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"]) {
            setError(`Recording is too short (${durationToCheck}s). Minimum duration is ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"]} seconds. Please continue recording.`);
            return;
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };
    const startRecording = (onAudioRecorded, onError)=>{
        if (!streamRef.current) {
            onError('Microphone access is not available.');
            return;
        }
        try {
            setError('');
            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : MediaRecorder.isTypeSupported('audio/ogg') ? 'audio/ogg' : '';
            if (!mimeType) {
                onError('Your browser does not support audio recording. Please upload an audio file instead.');
                return;
            }
            const mediaRecorder = new MediaRecorder(streamRef.current, {
                mimeType
            });
            mediaRecorderRef.current = mediaRecorder;
            setRecordingTime(0);
            recordingTimeRef.current = 0; // Reset ref
            setError(null);
            const chunks = [];
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data?.size > 0) chunks.push(event.data);
            };
            mediaRecorder.onstop = ()=>{
                if (chunks.length === 0) {
                    onError('Recording failed. No data was captured.');
                    return;
                }
                const blob = new Blob(chunks, {
                    type: mimeType
                });
                if (blob.size === 0) {
                    onError('Recording failed. The audio file is empty.');
                    return;
                }
                // Validate recording duration - use ref to get latest value (recordingTime state may be stale in closure)
                const currentDuration = recordingTimeRef.current;
                if (currentDuration < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"]) {
                    onError(`Recording is too short (${currentDuration}s). Minimum duration is ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"]} seconds.`);
                    stopMicrophone();
                    return;
                }
                // Allow exactly MAX_AUDIO_DURATION (3 minutes) - auto-stop saves the file
                if (currentDuration > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"]) {
                    onError(`Recording is too long (${currentDuration}s). Maximum duration is ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"]} seconds (3 minutes).`);
                    stopMicrophone();
                    return;
                }
                // If duration is exactly MAX_AUDIO_DURATION, it means auto-stop at 3 minutes - save the file
                const file = new File([
                    blob
                ], `voice-recording-${Date.now()}.webm`, {
                    type: mimeType
                });
                onAudioRecorded(file);
                stopMicrophone();
            };
            mediaRecorder.onerror = ()=>{
                onError('An error occurred during recording.');
                setIsRecording(false);
            };
            mediaRecorder.start(100);
            setIsRecording(true);
        } catch  {
            onError('Failed to start recording. Please try again or upload an audio file instead.');
        }
    };
    const requestMicrophone = async ()=>{
        setError(null);
        try {
            if (!navigator.mediaDevices?.getUserMedia) {
                setError('Your browser does not support microphone access.');
                return false;
            }
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            streamRef.current = stream;
            return true;
        } catch (err) {
            const errorMessages = {
                'NotAllowedError': 'Microphone access was denied. Please allow permissions.',
                'PermissionDeniedError': 'Microphone access was denied. Please allow permissions.',
                'NotFoundError': 'No microphone found.',
                'NotReadableError': 'Microphone is already in use.'
            };
            setError(errorMessages[err.name] || 'Unable to access microphone.');
            return false;
        }
    };
    const stopMicrophone = ()=>{
        if (streamRef.current) streamRef.current.getTracks().forEach((track)=>track.stop());
        if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
        setIsRecording(false);
        setRecordingTime(0);
        recordingTimeRef.current = 0; // Reset ref
        setError(null);
    };
    const formatTime = (seconds)=>{
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor(seconds % 3600 / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    return {
        isRecording,
        recordingTime,
        error,
        startRecording,
        stopRecording,
        requestMicrophone,
        stopMicrophone,
        formatTime
    };
};
_s(useAudioRecording, "09cWoVj//+PQDwmNBVjbhJt8698=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/hooks/useBlobUrls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlobUrls",
    ()=>useBlobUrls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useBlobUrls = (files)=>{
    _s();
    const [blobUrls, setBlobUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const blobUrlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBlobUrls.useEffect": ()=>{
            const newUrls = {};
            files.forEach({
                "useBlobUrls.useEffect": (file, index)=>{
                    if (file !== null) {
                        const existingUrl = blobUrlRefs.current[index];
                        if (!existingUrl) {
                            const url = URL.createObjectURL(file);
                            blobUrlRefs.current[index] = url;
                            newUrls[index] = url;
                        } else {
                            newUrls[index] = existingUrl;
                        }
                    } else {
                        if (blobUrlRefs.current[index]) {
                            URL.revokeObjectURL(blobUrlRefs.current[index]);
                            delete blobUrlRefs.current[index];
                        }
                    }
                }
            }["useBlobUrls.useEffect"]);
            setBlobUrls(newUrls);
        }
    }["useBlobUrls.useEffect"], [
        files
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBlobUrls.useEffect": ()=>{
            const currentBlobUrls = blobUrlRefs.current;
            return ({
                "useBlobUrls.useEffect": ()=>{
                    Object.values(currentBlobUrls).forEach({
                        "useBlobUrls.useEffect": (url)=>{
                            URL.revokeObjectURL(url);
                        }
                    }["useBlobUrls.useEffect"]);
                    blobUrlRefs.current = {};
                }
            })["useBlobUrls.useEffect"];
        }
    }["useBlobUrls.useEffect"], []);
    const revokeBlobUrl = (index)=>{
        if (blobUrlRefs.current[index]) {
            URL.revokeObjectURL(blobUrlRefs.current[index]);
            delete blobUrlRefs.current[index];
            setBlobUrls((prev)=>{
                const updated = {
                    ...prev
                };
                delete updated[index];
                return updated;
            });
        }
    };
    return {
        blobUrls,
        revokeBlobUrl
    };
};
_s(useBlobUrls, "/he0xjWbQVwG9zsh24g05rC9K7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/utils/voiceRecordingUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureFilesArrayLength",
    ()=>ensureFilesArrayLength,
    "formatFileSize",
    ()=>formatFileSize,
    "getRecordedCount",
    ()=>getRecordedCount,
    "updateFileInArray",
    ()=>updateFileInArray
]);
const ensureFilesArrayLength = (files, length = 3)=>{
    const result = [
        ...files
    ];
    while(result.length < length){
        result.push(null);
    }
    return result.slice(0, length);
};
const updateFileInArray = (files, index, file)=>{
    const updated = [
        ...files
    ];
    updated[index] = file;
    return ensureFilesArrayLength(updated);
};
const formatFileSize = (bytes)=>{
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};
const getRecordedCount = (files)=>{
    return files.filter((f)=>f !== null).length;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceRecordingSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/utils/voiceRecordingUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VoiceRecordingSlot({ slotIndex, file, blobUrl, isRecording, recordingTime, formatTime, onRecord, onStop, onCancel, onDelete, disabled = false }) {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isRecorded = file !== null && !isRecording;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border transition-all duration-300 ${isRecorded ? 'border-green-500' : 'border-gray-200'} rounded-lg p-4 space-y-4 ${isRecorded ? 'bg-green-50/50' : 'hover:bg-gray-50'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[16px] font-semibold text-[#101010]",
                                children: [
                                    "Voice Sample ",
                                    slotIndex + 1,
                                    slotIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                        lineNumber: 44,
                                        columnNumber: 33
                                    }, this),
                                    slotIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#5F5F5F] text-sm font-normal ml-2",
                                        children: "(Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                        lineNumber: 45,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            isRecorded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                lineNumber: 47,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    isRecorded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        className: "text-red-500 hover:text-red-700 transition-colors",
                        "aria-label": "Delete recording",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            !file && !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onRecord,
                    disabled: disabled,
                    className: "bg-[#5046E5] hover:bg-transparent hover:text-[#5046E5] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4338CA] transition-colors duration-300 flex items-center gap-3 justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#5046E5]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        "Start Recording"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] font-semibold text-[#101010]",
                        children: [
                            "Recording Voice ",
                            slotIndex + 1,
                            " • ",
                            formatTime(recordingTime)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    recordingTime < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"] && recordingTime < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] text-orange-600 font-normal",
                        children: [
                            "Continue recording... Minimum ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"],
                            " seconds required (",
                            recordingTime,
                            "s)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this),
                    recordingTime >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[14px] text-green-600 font-normal",
                        children: "Recording complete! Saving audio file..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCancel,
                                className: "bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors",
                                "aria-label": "Cancel recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStop,
                                disabled: recordingTime < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"],
                                className: `px-6 py-2 rounded-full transition-colors ${recordingTime >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"] ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                                "aria-label": "Stop recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-white rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            isRecorded && file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 bg-green-50/50 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-[#101010] text-sm",
                                    children: file.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[#5F5F5F]",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFileSize"])(file.size)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    blobUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        ref: audioRef,
                        src: blobUrl,
                        controls: true,
                        className: "w-full",
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(VoiceRecordingSlot, "0sm4EU6wFifmHvgu8ujVUSp82DM=");
_c = VoiceRecordingSlot;
var _c;
__turbopack_context__.k.register(_c, "VoiceRecordingSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceAudioUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useAudioRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/hooks/useAudioRecording.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useBlobUrls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/hooks/useBlobUrls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceRecordingSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceRecordingSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/utils/voiceRecordingUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function VoiceAudioUpload({ onNext, onBack, avatarData, setAvatarData }) {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeRecordingSlot, setActiveRecordingSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const SLOT_COUNT = 3;
    const paddedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoiceAudioUpload.useMemo[paddedFiles]": ()=>{
            const audioFiles = avatarData.audioFiles || [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureFilesArrayLength"])(audioFiles, SLOT_COUNT);
        }
    }["VoiceAudioUpload.useMemo[paddedFiles]"], [
        avatarData.audioFiles
    ]);
    const { blobUrls, revokeBlobUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useBlobUrls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlobUrls"])(paddedFiles);
    const { isRecording, recordingTime, error: recordingError, startRecording, stopRecording, requestMicrophone, stopMicrophone, formatTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useAudioRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioRecording"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceAudioUpload.useEffect": ()=>{
            if (recordingError) {
                setError(recordingError);
                setActiveRecordingSlot(null);
            }
        }
    }["VoiceAudioUpload.useEffect"], [
        recordingError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceAudioUpload.useEffect": ()=>{
            if (error) {
                const timer = setTimeout({
                    "VoiceAudioUpload.useEffect.timer": ()=>{
                        setError(null);
                    }
                }["VoiceAudioUpload.useEffect.timer"], 10000);
                return ({
                    "VoiceAudioUpload.useEffect": ()=>clearTimeout(timer)
                })["VoiceAudioUpload.useEffect"];
            }
        }
    }["VoiceAudioUpload.useEffect"], [
        error
    ]);
    const handleRecordClick = async (slotIndex)=>{
        setError(null);
        setActiveRecordingSlot(slotIndex);
        const hasAccess = await requestMicrophone();
        if (hasAccess) {
            startRecording((file)=>{
                const updatedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileInArray"])(paddedFiles, slotIndex, file);
                setAvatarData({
                    ...avatarData,
                    audioFiles: updatedFiles.filter((f)=>f !== null)
                });
                setActiveRecordingSlot(null);
            }, (err)=>{
                setError(err);
                setActiveRecordingSlot(null);
            });
        } else {
            setActiveRecordingSlot(null);
        }
    };
    const handleStopRecording = ()=>{
        if (activeRecordingSlot !== null) {
            stopRecording(recordingTime);
            setActiveRecordingSlot(null);
        }
    };
    const handleCancelRecording = ()=>{
        stopMicrophone();
        setActiveRecordingSlot(null);
    };
    const handleDeleteRecording = (slotIndex)=>{
        revokeBlobUrl(slotIndex);
        const updatedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileInArray"])(paddedFiles, slotIndex, null);
        setAvatarData({
            ...avatarData,
            audioFiles: updatedFiles.filter((f)=>f !== null)
        });
    };
    const recordedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$utils$2f$voiceRecordingUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecordedCount"])(paddedFiles);
    const hasMinimumRequired = recordedCount >= 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto pr-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] text-[#5F5F5F] font-normal leading-[24px]",
                                children: "Record at least 1 voice sample (required) to create a high-quality voice clone. You can optionally record up to 2 additional samples for better quality. The speaking style in the samples you provide will be replicated in the output, so depending on what delivery you are looking for, the training data should correspond to that style (e.g. if you want a more engaging, up-beat vocalization, make sure your voice reflects the tones and inflections that reflect that style). It is better to just include one style in the uploaded samples for consistencies sake."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-[#5F5F5F] font-normal leading-[18px] mt-2",
                                children: [
                                    "Recording duration: minimum ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_AUDIO_DURATION"],
                                    " seconds, maximum ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_AUDIO_DURATION"] / 60,
                                    " minutes per sample"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            recordedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-[#5046E5] font-medium mt-2",
                                children: [
                                    "Progress: ",
                                    recordedCount,
                                    "/",
                                    SLOT_COUNT,
                                    " voice samples recorded (minimum 1 required)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: Array.from({
                            length: SLOT_COUNT
                        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceRecordingSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                slotIndex: index,
                                file: paddedFiles[index],
                                blobUrl: blobUrls[index],
                                isRecording: activeRecordingSlot === index && isRecording,
                                recordingTime: recordingTime,
                                formatTime: formatTime,
                                onRecord: ()=>handleRecordClick(index),
                                onStop: handleStopRecording,
                                onCancel: handleCancelRecording,
                                onDelete: ()=>handleDeleteRecording(index),
                                disabled: activeRecordingSlot !== null && activeRecordingSlot !== index
                            }, index, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 pt-4 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNext,
                        disabled: !hasMinimumRequired,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 w-full ${hasMinimumRequired ? 'bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        children: hasMinimumRequired ? 'Continue' : recordedCount === 0 ? 'Record at least 1 voice sample' : `Record ${SLOT_COUNT - recordedCount} more sample${SLOT_COUNT - recordedCount !== 1 ? 's' : ''} (optional)`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(VoiceAudioUpload, "aCEEr+AdY5QetZ1fgRid53hrSL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useBlobUrls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlobUrls"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$hooks$2f$useAudioRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioRecording"]
    ];
});
_c = VoiceAudioUpload;
var _c;
__turbopack_context__.k.register(_c, "VoiceAudioUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceAvatarDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function VoiceAvatarDetails({ onBack, avatarData, setAvatarData, onClose, onHideCloseButton }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "VoiceAvatarDetails.useSelector": (state)=>state.user
    }["VoiceAvatarDetails.useSelector"]);
    const { clearAvatarUpdates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const [agreedToTerms, setAgreedToTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showErrors, setShowErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const genderOptions = [
        {
            value: 'Male',
            label: 'Male'
        },
        {
            value: 'Female',
            label: 'Female'
        }
    ];
    const languageOptions = [
        {
            value: 'en',
            label: 'English'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceAvatarDetails.useEffect": ()=>{
            if (errors.general) {
                const timer = setTimeout({
                    "VoiceAvatarDetails.useEffect.timer": ()=>{
                        setErrors({
                            "VoiceAvatarDetails.useEffect.timer": (prev)=>({
                                    ...prev,
                                    general: undefined
                                })
                        }["VoiceAvatarDetails.useEffect.timer"]);
                    }
                }["VoiceAvatarDetails.useEffect.timer"], 10000);
                return ({
                    "VoiceAvatarDetails.useEffect": ()=>clearTimeout(timer)
                })["VoiceAvatarDetails.useEffect"];
            }
        }
    }["VoiceAvatarDetails.useEffect"], [
        errors.general
    ]);
    const handleInputChange = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        if (errors[field]) setErrors({
            ...errors,
            [field]: undefined
        });
    };
    const handleDropdownSelect = (field, value)=>{
        setAvatarData({
            ...avatarData,
            [field]: value
        });
        setOpenDropdown(null);
        if (errors[field]) setErrors({
            ...errors,
            [field]: undefined
        });
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!avatarData.name.trim()) newErrors.name = 'Name is required';
        if (!avatarData.description.trim()) newErrors.description = 'Description is required';
        if (!avatarData.gender) newErrors.gender = 'Gender is required';
        if (!avatarData.language) newErrors.language = 'Language is required';
        if (!agreedToTerms) newErrors.terms = 'You must agree to the terms';
        if (!avatarData.audioFiles || avatarData.audioFiles.length < 1) {
            newErrors.general = 'Please record at least 1 voice sample (first sample is required)';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleCreate = async ()=>{
        setShowErrors(true);
        if (!validateForm() || !avatarData.audioFiles || avatarData.audioFiles.length < 1) return;
        setIsCreating(true);
        if (onHideCloseButton) onHideCloseButton();
        clearAvatarUpdates();
        const formData = new FormData();
        avatarData.audioFiles.forEach((file)=>{
            if (file !== null) {
                formData.append('files', file);
            }
        });
        formData.append('name', avatarData.name);
        formData.append('description', avatarData.description);
        formData.append('gender', avatarData.gender.toLowerCase());
        formData.append('language', avatarData.language);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createVoiceAvatar(formData);
            if (result.success) {
                showNotification(result.message || 'Custom voice added successfully', 'success');
                if (onClose) onClose();
            } else {
                const errorMessage = result.message || 'Failed to create voice avatar';
                showNotification(errorMessage, 'error');
                setErrors({
                    ...errors,
                    general: errorMessage
                });
                setIsCreating(false);
            }
        } catch (error) {
            console.error('Error creating voice avatar:', error);
            const errorMessage = 'Failed to create voice avatar';
            showNotification(errorMessage, 'error');
            setErrors({
                ...errors,
                general: errorMessage
            });
            setIsCreating(false);
        }
    };
    const renderDropdown = (field, options, placeholder)=>{
        const currentValue = avatarData[field];
        const selectedOption = options.find((option)=>option.value === currentValue);
        const isOpen = openDropdown === field;
        const hasError = showErrors && errors[field];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setOpenDropdown(isOpen ? null : field),
                    className: `w-full px-4 py-[10.5px] text-[18px] font-normal bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-left transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white flex items-center justify-between cursor-pointer ${selectedOption ? 'text-gray-800 bg-[#F5F5F5]' : 'text-[#11101066]'} ${hasError ? 'ring-2 ring-red-500' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: selectedOption ? selectedOption.label : placeholder
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                            className: `w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-60 overflow-y-auto",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDropdownSelect(field, option.value),
                            className: "w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-800",
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[18px] font-normal text-[#5F5F5F]",
                    children: "Now, let's add some details to bring your avatar to life."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            showErrors && errors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-500 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-700 text-sm",
                        children: errors.general
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 151,
                                        columnNumber: 85
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: avatarData.name,
                                onChange: (e)=>handleInputChange('name', e.target.value),
                                placeholder: "Enter Name",
                                className: `w-full px-4 py-[10.5px] text-[18px] font-normal placeholder:text-[#11101066] bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-gray-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white ${showErrors && errors.name ? 'ring-2 ring-red-500' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            showErrors && errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 153,
                                        columnNumber: 106
                                    }, this),
                                    errors.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 153,
                                columnNumber: 41
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Description ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 156,
                                        columnNumber: 92
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: avatarData.description,
                                onChange: (e)=>handleInputChange('description', e.target.value),
                                placeholder: "Enter Description",
                                rows: 4,
                                className: `w-full px-4 py-[10.5px] text-[18px] font-normal placeholder:text-[#11101066] bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-gray-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white resize-none ${showErrors && errors.description ? 'ring-2 ring-red-500' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            showErrors && errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 158,
                                        columnNumber: 113
                                    }, this),
                                    errors.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 158,
                                columnNumber: 48
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Gender ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 161,
                                        columnNumber: 87
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            renderDropdown('gender', genderOptions, 'Select Gender'),
                            showErrors && errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 163,
                                        columnNumber: 108
                                    }, this),
                                    errors.gender
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 163,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                children: [
                                    "Language ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 166,
                                        columnNumber: 89
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            renderDropdown('language', languageOptions, 'Select'),
                            showErrors && errors.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                        lineNumber: 168,
                                        columnNumber: 110
                                    }, this),
                                    errors.language
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 168,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    checked: agreedToTerms,
                    onChange: (e)=>{
                        const checked = e?.target?.checked || false;
                        setAgreedToTerms(checked);
                        if (checked && errors.terms) setErrors({
                            ...errors,
                            terms: undefined
                        });
                    },
                    label: "By creating an avatar, I confirm that I am over 18 years of age (or the legal age in my country) and that the audio files used belong to me or I have obtained explicit permission from the individual represented. I understand that I am solely responsible for the content I upload and that the use of these audio files must comply with all applicable laws and regulations. Additionally, I agree not to upload any audio that infringes on others rights or that I do not have permission to use. By proceeding, I accept the Terms of Service and Privacy Policy.",
                    id: "voice-terms-agreement"
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            showErrors && errors.terms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm mt-2 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 179,
                        columnNumber: 103
                    }, this),
                    errors.terms
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 179,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 pt-0",
                children: [
                    !isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 182,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        disabled: isCreating,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] ${isCreating ? 'opacity-50 cursor-not-allowed' : ''}`,
                        children: isCreating ? 'Creating...' : 'Create'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setOpenDropdown(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
                lineNumber: 192,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(VoiceAvatarDetails, "1DIb7iaDD+4UDTInpfw092Xk03w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"]
    ];
});
_c = VoiceAvatarDetails;
var _c;
__turbopack_context__.k.register(_c, "VoiceAvatarDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvatarCreationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useModalScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step2ChooseType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step6PhotoInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step7PhotoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step8Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step9AvatarReady$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step1Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$videoAvatarStep4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$videoAvatarStep5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/videoAvatarStep5.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$DigitalTwinGuidelines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/DigitalTwinGuidelines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$TrainingVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/TrainingVideoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$ConsentVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/ConsentVideoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceAudioUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAudioUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceAvatarDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/VoiceAvatarDetails.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function AvatarCreationModal({ isOpen, onClose, onShowToast }) {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [selectedAvatarType, setSelectedAvatarType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hideCloseButton, setHideCloseButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarData, setAvatarData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        age: '',
        gender: '',
        ethnicity: '',
        description: '',
        language: '',
        videoFile: null,
        consentVideoFile: null,
        photoFiles: [],
        audioFiles: [
            null,
            null,
            null
        ],
        avatarType: null
    });
    // Lock body scroll when modal is open (handles multiple modals globally)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalScrollLock"])(isOpen);
    const handleNext = ()=>{
        // For digital-twin: Progress normally through steps 4 (TrainingVideoUpload) → 5 (ConsentVideoUpload)
        // The modal will close after consent video is uploaded and avatar is created
        setCurrentStep((prev)=>prev + 1);
    };
    const handleSkipBackToUpload = ()=>{
        // Skip back to step 3 (Upload options)
        // This skips step 4 (WebcamRecord) and step 5 (QRCode) when going backward
        setCurrentStep(3);
    };
    const handleBack = ()=>{
        // Reset hideCloseButton when navigating back
        setHideCloseButton(false);
        setCurrentStep((prev)=>prev - 1);
    };
    const handleAvatarTypeSelect = (type)=>{
        setSelectedAvatarType(type);
        setAvatarData((prev)=>({
                ...prev,
                avatarType: type
            }));
    // Don't auto-advance - user needs to click Next
    };
    const handleAvatarTypeNext = ()=>{
        if (selectedAvatarType) {
            handleNext();
        }
    };
    const handleClose = ()=>{
        setCurrentStep(2);
        setSelectedAvatarType(null);
        setHideCloseButton(false);
        setAvatarData({
            name: '',
            age: '',
            gender: '',
            ethnicity: '',
            description: '',
            language: '',
            videoFile: null,
            consentVideoFile: null,
            photoFiles: [],
            audioFiles: [
                null,
                null,
                null
            ],
            avatarType: null
        });
        onClose();
    };
    const handleAvatarCreationSuccess = ()=>{
        // Close modal immediately - WebSocket will handle progress notifications
        handleClose();
    };
    const handleSetAvatarData = (data)=>{
        setAvatarData(data);
    };
    // Helper function to check if current step needs narrow width
    const isNarrowWidth = ()=>{
        return currentStep === 3 && selectedAvatarType === 'photo-avatar' || currentStep === 4 && selectedAvatarType === 'photo-avatar' || currentStep === 5 && selectedAvatarType === 'photo-avatar' || currentStep === 5 && selectedAvatarType === 'digital-twin' || currentStep === 6 && selectedAvatarType === 'photo-avatar' || currentStep === 9 && selectedAvatarType === 'digital-twin' || currentStep === 3 && selectedAvatarType === 'voice-avatar' || currentStep === 4 && selectedAvatarType === 'voice-avatar';
    };
    const renderStep = ()=>{
        switch(currentStep){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step1Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                    lineNumber: 137,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step2ChooseType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onAvatarTypeSelect: handleAvatarTypeSelect,
                    onAvatarTypeNext: handleAvatarTypeNext,
                    selectedType: selectedAvatarType
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                    lineNumber: 140,
                    columnNumber: 16
                }, this);
            case 3:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$DigitalTwinGuidelines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 148,
                        columnNumber: 18
                    }, this);
                } else if (selectedAvatarType === 'voice-avatar') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceAudioUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 150,
                        columnNumber: 18
                    }, this);
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step6PhotoInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this);
                }
            case 4:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$TrainingVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 162,
                        columnNumber: 18
                    }, this);
                } else if (selectedAvatarType === 'voice-avatar') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$VoiceAvatarDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData,
                        onClose: handleAvatarCreationSuccess,
                        onHideCloseButton: ()=>setHideCloseButton(true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 164,
                        columnNumber: 18
                    }, this);
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step7PhotoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this);
                }
            case 5:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$ConsentVideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack,
                        onClose: handleAvatarCreationSuccess,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData,
                        onCreateStart: ()=>setHideCloseButton(true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 178,
                        columnNumber: 18
                    }, this);
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step8Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData,
                        onClose: handleAvatarCreationSuccess
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this);
                }
            case 6:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$videoAvatarStep4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, this);
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step9AvatarReady$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleNext,
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this);
                }
            case 7:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$videoAvatarStep5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onBack: handleBack,
                        avatarData: avatarData,
                        setAvatarData: handleSetAvatarData,
                        onSkipBackToUpload: handleSkipBackToUpload,
                        onClose: handleAvatarCreationSuccess,
                        onShowToast: onShowToast
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this);
                } else {
                    return null;
                }
            case 9:
                if (selectedAvatarType === 'digital-twin') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$videoAvatarStep4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onNext: handleAvatarCreationSuccess,
                        onBack: handleBack
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                        lineNumber: 227,
                        columnNumber: 18
                    }, this);
                }
                break;
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step1Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                    lineNumber: 232,
                    columnNumber: 16
                }, this);
        }
    };
    // Dynamic modal sizing based on current step
    const getModalDimensions = ()=>{
        if (selectedAvatarType == 'digital-twin' && currentStep == 3) {
            return {
                maxWidth: 'max-w-[1100px]',
                maxHeight: 'max-h-[900px]',
                padding: ''
            };
        }
        if (selectedAvatarType == 'digital-twin' && (currentStep == 4 || currentStep == 5)) {
            return {
                maxWidth: isNarrowWidth() ? 'max-w-[900px]' : 'max-w-[900px]',
                maxHeight: 'max-h-[650px]',
                padding: ''
            };
        }
        if (selectedAvatarType == 'voice-avatar' && currentStep == 3) {
            return {
                maxWidth: isNarrowWidth() ? 'max-w-[760px]' : 'max-w-[760px]',
                maxHeight: 'max-h-[650px]',
                padding: 'p-3'
            };
        }
        return {
            maxWidth: isNarrowWidth() ? 'max-w-[760px]' : 'max-w-[1100px]',
            maxHeight: 'max-h-[840px]',
            padding: 'p-3'
        };
    };
    const modalDimensions = getModalDimensions();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 bg-black/80 py-3 flex items-center justify-center z-50 ${modalDimensions.padding}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-white rounded-[12px] md:px-8 px-4 pb-6 md:pt-6 pt-4 ${modalDimensions.maxWidth} w-full ${modalDimensions.maxHeight} h-full flex flex-col relative ${selectedAvatarType === 'digital-twin' ? 'avatar-dropdown-shadow' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "md:text-[32px] text-[24px] font-semibold text-[#282828]",
                            children: selectedAvatarType === 'voice-avatar' && (currentStep === 3 || currentStep === 4) ? 'Create Voice Clone' : 'Create Avatar'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        !hideCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "cursor-pointer",
                            "aria-label": "Close avatar creation modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22.5 1.5L1.5 22.5M1.5 1.5L22.5 22.5",
                                    stroke: "black",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: renderStep()
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(AvatarCreationModal, "0qgjQup1rNFdMFb1buNWivGwXx8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalScrollLock"]
    ];
});
_c = AvatarCreationModal;
var _c;
__turbopack_context__.k.register(_c, "AvatarCreationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3VideoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/clipboard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Step3VideoUpload({ onNext, onBack, avatarData, setAvatarData, onSkipToDetails }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabs = [
        {
            id: 'upload',
            label: 'Upload footage',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 34,
                columnNumber: 52
            }, this)
        },
        {
            id: 'webcam',
            label: 'Record via webcam',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 35,
                columnNumber: 55
            }, this)
        },
        {
            id: 'phone',
            label: 'Record via phone',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 36,
                columnNumber: 53
            }, this)
        }
    ];
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('video/')) {
                setAvatarData({
                    ...avatarData,
                    videoFile: file
                });
            }
        }
    };
    const handleFileSelect = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setAvatarData({
                ...avatarData,
                videoFile: file
            });
        }
    };
    const handleCreate = ()=>{
        // Skip webcam and phone recording steps - go directly to avatar details
        if (activeTab === 'upload' && avatarData.videoFile) {
            // For upload tab, we have a video file, so skip to avatar details
            if (onSkipToDetails) {
                onSkipToDetails();
            } else {
                onNext();
            }
        } else if (activeTab === 'webcam' || activeTab === 'phone') {
            // For webcam and phone tabs, skip directly to avatar details without requiring video
            if (onSkipToDetails) {
                onSkipToDetails();
            } else {
                onNext();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[24px] font-semibold text-[#101010] mb-3",
                        children: "Upload your footage"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[18px] text-[#5F5F5F] max-w-[710px] mx-auto leading-[24px]",
                        children: "For optimal, most realistic results, we recommend uploading a 2 min video recorded with a high-resolution camera or smartphone.If you're just testing the product, feel free to submit a 30s recording using your webcam."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between max-w-[435px] px-1 py-1 mt-10 mb-8 mx-auto bg-[#F3F4F6] rounded-[6px] border border-[#E5E7EB]",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `text-[14px] text-center py-[6.6px] px-3 font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-[#6366F1] bg-[#FFFFFF] rounded-[6px]' : 'text-[#1F2937] hover:text-[#6366F1] rounded-[6px]'}`,
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[724px] mx-auto",
                children: [
                    activeTab === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mb-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border border-dashed rounded-[8px] md:p-8 p-4 text-center transition-colors duration-300 cursor-pointer ${dragActive ? 'border-[#6366F1] bg-[#F0F0FF]' : 'border-[#D1D5DB] hover:border-[#6366F1]'}`,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[20px] font-semibold text-[#101010] mb-5",
                                        children: "Drag and drop video, or click to upload"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-[#5F5F5F] mb-6 leading-[18px]",
                                        children: [
                                            "landscape or portrait video, mp4/mov/webm format ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "md:block hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                lineNumber: 138,
                                                columnNumber: 66
                                            }, this),
                                            "at least 30s, 2-10min recommended, 360p-4K resolution, ",
                                            "<",
                                            " 10GB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "text-[#6366F1] font-normal transition-colors duration-300 hover:text-[#5046E5] text-[14px]",
                                        children: "Browse local files"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "video/*",
                                        onChange: handleFileSelect,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mt-6 bg-[#F3F4F6] rounded-[12px] px-4 py-[22.2px] max-w-[654px] mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[16px] text-[#1F2937] mb-2 font-semibold",
                                                children: "Or upload via Google Drive"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-center pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Paste video URL here (up to 50GB)",
                                                        className: "pr-4 pl-12 py-3 text-sm text-[#1F2937] rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#6366F1] w-full outline-none placeholder:text-[#6B7280] transition-colors duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "url(#pattern0_7905_1130)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                            id: "pattern0_7905_1130",
                                                                            patternContentUnits: "objectBoundingBox",
                                                                            width: "1",
                                                                            height: "1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                                                xlinkHref: "#image0_7905_1130",
                                                                                transform: "scale(0.05)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                                                lineNumber: 169,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                                                            id: "image0_7905_1130",
                                                                            width: "20",
                                                                            height: "20",
                                                                            preserveAspectRatio: "none",
                                                                            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMtJREFUOE/tky8LhDAYxh8RbSIqBj+CVoPgdzc5w5rYBcFkME0mpsnedOGU6R2WuzeOvT+eP5vV973CF8f6Az9O8/kMl2XBNE2QUsJxHCRJAt/3D52cKpznGW3bIooigqzrCn1WliVs234LPQU2TYMgCJBlmXG2h8Bt21DXNfI8J6jpGAOFEOCcE7coCnied90yY4zyS9OUlpVSqKrqPlAX0HUdQbVtHcMwDPeBWpWGjONIDbuuiziOEYbhvWdjWsTrved/ylWVP6hwB3xoj81aSPfUAAAAAElFTkSuQmCC"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                                            lineNumber: 171,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            avatarData.videoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#F0F0FF] border border-[#6366F1] rounded-[8px] p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-6 h-6 text-[#5046E5]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] font-medium text-[#282828]",
                                                    children: avatarData.videoFile.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] text-[#667085]",
                                                    children: [
                                                        (avatarData.videoFile.size / (1024 * 1024)).toFixed(2),
                                                        " MB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    activeTab === 'webcam' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center flex flex-col items-center justify-center py-8 bg-[#F5F7FC] rounded-[8px] min-h-[280px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-transparent text-[#7C6FFF] px-2 py-2 rounded-[6px] hover:bg-[#7C6FFF] border hover:text-white border-[#7C6FFF] transition-colors duration-300 text-[16px] font-normal max-w-[188px] w-full mx-auto",
                                        children: "Turn on Cam & Mic"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-[#5F5F5F] mt-7 leading-[18px]",
                                        children: [
                                            "Your browser may ask for permission to use your camera ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "md:block hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                                lineNumber: 206,
                                                columnNumber: 72
                                            }, this),
                                            " and microphone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#B9B4F9] text-white px-2 py-[12px] rounded-[6px] hover:bg-[#7C6FFF] hover:text-white transition-colors duration-300 text-[16px] font-normal max-w-[120px] w-full mx-auto",
                                    children: "Record"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    activeTab === 'phone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center pt-5 pb-2 px-5 max-w-[350px] mx-auto bg-[#F5F7FC] rounded-[16px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/avatars/qrcode.png",
                                alt: "phone",
                                width: 1000,
                                height: 1000,
                                className: "mx-auto mb-4 w-[270px] h-[270px]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                url: "https://app.heygen.com/record..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-[#5F5F5F] mb-4 mt-4 leading-[18px]",
                                children: [
                                    "QR code and URL will expire after ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                        lineNumber: 220,
                                        columnNumber: 49
                                    }, this),
                                    "19:58 Refresh now"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-between pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        className: `px-8 py-[11.3px] font-semibold text-[20px] rounded-full transition-colors duration-300 cursor-pointer w-full bg-[#5046E5] text-white hover:text-[#5046E5] hover:bg-transparent border-2 border-[#5046E5] `,
                        children: "Create"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Step3VideoUpload, "6SRwUfP44L8OmnkKP6JRrRrtB7w=");
_c = Step3VideoUpload;
var _c;
__turbopack_context__.k.register(_c, "Step3VideoUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step4WebcamRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Step4WebcamRecord({ onNext, onBack, avatarData, setAvatarData }) {
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasPermission, setHasPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stream, setStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordedChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step4WebcamRecord.useEffect": ()=>{
            return ({
                "Step4WebcamRecord.useEffect": ()=>{
                    if (stream) {
                        stream.getTracks().forEach({
                            "Step4WebcamRecord.useEffect": (track)=>track.stop()
                        }["Step4WebcamRecord.useEffect"]);
                    }
                }
            })["Step4WebcamRecord.useEffect"];
        }
    }["Step4WebcamRecord.useEffect"], [
        stream
    ]);
    const startCamera = async ()=>{
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            setStream(mediaStream);
            setHasPermission(true);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
            setHasPermission(false);
        }
    };
    const startRecording = ()=>{
        if (!stream) return;
        recordedChunksRef.current = [];
        const mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9'
        });
        mediaRecorder.ondataavailable = (event)=>{
            if (event.data.size > 0) {
                recordedChunksRef.current.push(event.data);
            }
        };
        mediaRecorder.onstop = ()=>{
            const blob = new Blob(recordedChunksRef.current, {
                type: 'video/webm'
            });
            const file = new File([
                blob
            ], 'webcam-recording.webm', {
                type: 'video/webm'
            });
            setAvatarData({
                ...avatarData,
                videoFile: file
            });
        };
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setIsRecording(true);
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[24px] font-semibold text-[#282828] mb-2",
                        children: "Record via webcam"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] text-[#667085]",
                        children: "Record directly from your camera and microphone"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: !hasPermission ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-96 h-64 bg-[#EEEEEE] rounded-lg flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-16 h-16 text-[#98A2B3] mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] text-[#667085] mb-4",
                                    children: "Camera not started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startCamera,
                                    className: "bg-[#5046E5] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4338CA] transition-colors duration-300",
                                    children: "Turn on Cam & Mic"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                className: "w-96 h-64 bg-black rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium",
                                children: "REC"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                lineNumber: 130,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            hasPermission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4",
                children: !isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: startRecording,
                    className: "flex items-center gap-2 bg-[#5046E5] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4338CA] transition-colors duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 147,
                            columnNumber: 15
                        }, this),
                        "Start Recording"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                    lineNumber: 143,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: stopRecording,
                    className: "flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-colors duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this),
                        "Stop Recording"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] text-[#98A2B3]",
                    children: "Your browser may ask for permission to use your camera and microphone."
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            avatarData.videoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F0F0FF] border border-[#5046E5] rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                            className: "w-6 h-6 text-[#5046E5]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-medium text-[#282828]",
                                    children: avatarData.videoFile.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[#667085]",
                                    children: [
                                        (avatarData.videoFile.size / (1024 * 1024)).toFixed(2),
                                        " MB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNext,
                            className: "px-6 py-[11.4px] bg-[#5046E5] text-white rounded-full font-semibold text-[18px] hover:bg-[#4338CA] transition-colors duration-300",
                            children: "Create"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(Step4WebcamRecord, "Hh8z4DR3Vv8nSVkaIrn5t3LRrkc=");
_c = Step4WebcamRecord;
var _c;
__turbopack_context__.k.register(_c, "Step4WebcamRecord");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step5QRCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Step5QRCode({ onNext, onBack, avatarData, setAvatarData }) {
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(600) // 10 minutes in seconds
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5QRCode.useEffect": ()=>{
            const timer = setInterval({
                "Step5QRCode.useEffect.timer": ()=>{
                    setTimeLeft({
                        "Step5QRCode.useEffect.timer": (prev)=>{
                            if (prev <= 1) {
                                clearInterval(timer);
                                return 0;
                            }
                            return prev - 1;
                        }
                    }["Step5QRCode.useEffect.timer"]);
                }
            }["Step5QRCode.useEffect.timer"], 1000);
            return ({
                "Step5QRCode.useEffect": ()=>clearInterval(timer)
            })["Step5QRCode.useEffect"];
        }
    }["Step5QRCode.useEffect"], []);
    const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const handleCreate = ()=>{
        // In a real implementation, this would check if the mobile upload is complete
        onNext();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[24px] font-semibold text-[#282828] mb-2",
                        children: "Record via phone"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] text-[#667085]",
                        children: "Use your mobile device to record or upload footage"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 h-64 bg-[#EEEEEE] rounded-lg mx-auto mb-4 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                className: "w-32 h-32 text-[#98A2B3]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] text-[#282828] font-medium",
                                    children: "Scan QR code to upload or record from your phone"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 text-[#667085]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px]",
                                            children: [
                                                "Expires at ",
                                                formatTime(timeLeft)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F9FAFB] rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[18px] font-semibold text-[#282828] mb-3",
                        children: "How to use:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal list-inside space-y-2 text-[14px] text-[#667085]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Open your phone's camera app"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Point it at the QR code above"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Tap the notification that appears"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Record your video or upload existing footage"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Wait for the upload to complete"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-32 h-32 bg-[#EEEEEE] rounded-lg mx-auto mb-2 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                className: "w-16 h-16 text-[#98A2B3]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] text-[#667085]",
                            children: "Mobile recording"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            avatarData.videoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F0F0FF] border border-[#5046E5] rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                            className: "w-6 h-6 text-[#5046E5]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-medium text-[#282828]",
                                    children: avatarData.videoFile.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[#667085]",
                                    children: [
                                        (avatarData.videoFile.size / (1024 * 1024)).toFixed(2),
                                        " MB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-[#667085] hover:text-[#5046E5] transition-colors duration-300 w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        className: "px-6 py-[11.4px] bg-[#5046E5] text-white rounded-full font-semibold text-[18px] hover:bg-[#4338CA] transition-colors duration-300",
                        children: "Create"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Step5QRCode, "LeejtPYi5oXqDn2i2tm5BzNyPe8=");
_c = Step5QRCode;
var _c;
__turbopack_context__.k.register(_c, "Step5QRCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step1Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step1Intro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step2ChooseType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step2ChooseType.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step3VideoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step3VideoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step4WebcamRecord$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step4WebcamRecord.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step5QRCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step5QRCode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step6PhotoInstructions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step6PhotoInstructions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step7PhotoUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step7PhotoUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step8Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step8Details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$steps$2f$Step9AvatarReady$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/steps/Step9AvatarReady.tsx [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-client] (ecmascript) <export default as AvatarCreationModal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarCreationModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_task2_src_components_ui_avatar-creation_8f7074a8._.js.map