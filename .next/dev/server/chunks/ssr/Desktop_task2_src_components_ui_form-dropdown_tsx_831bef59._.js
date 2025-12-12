module.exports = [
"[project]/Desktop/task2/src/components/ui/form-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
'use client';
;
;
;
;
;
function FormDropdown({ field, options, placeholder, currentValue, isOpen, hasError, register, errors, onToggle, onSelect, onBlur, // Avatar-specific props
isAvatarField = false, isFromDefaultAvatar = false, extendedAvatarOptions = [], avatars = {
    custom: [],
    default: []
}, avatarsLoading = false, avatarsError = null, selectedAvatars = {
    title: null,
    body: null,
    conclusion: null
}, onFetchAvatars, onAvatarClick, onDragStart, onDragEnd, onDragOver, onDragLeave, onDrop, onRemoveAvatar, onClearAllAvatars, isAvatarSelected, isAvatarTypeAllowed, isAvatarPending, getAvatarSelectionNumber, getAvatarType }) {
    // State for managing visible avatar count
    const [visibleDefaultCount, setVisibleDefaultCount] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(12);
    const [visibleImageAvatarCount, setVisibleImageAvatarCount] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(12);
    const [visibleVideoAvatarCount, setVisibleVideoAvatarCount] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(12);
    // Categorize custom avatars into image avatars and video avatars
    const imageAvatars = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return avatars.custom.filter((avatar)=>avatar.gender && avatar.ethnicity);
    }, [
        avatars.custom
    ]);
    const videoAvatars = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return avatars.custom.filter((avatar)=>!avatar.gender || !avatar.ethnicity || avatar.preview_video_url);
    }, [
        avatars.custom
    ]);
    // Handler functions for "See More" functionality
    const handleSeeMoreDefault = ()=>{
        setVisibleDefaultCount((prev)=>Math.min(prev + 12, avatars.default.length));
    };
    const handleSeeMoreImageAvatars = ()=>{
        setVisibleImageAvatarCount((prev)=>Math.min(prev + 12, imageAvatars.length));
    };
    const handleSeeMoreVideoAvatars = ()=>{
        setVisibleVideoAvatarCount((prev)=>Math.min(prev + 12, videoAvatars.length));
    };
    const handleSeeLessDefault = ()=>{
        setVisibleDefaultCount(12);
    };
    const handleSeeLessImageAvatars = ()=>{
        setVisibleImageAvatarCount(12);
    };
    const handleSeeLessVideoAvatars = ()=>{
        setVisibleVideoAvatarCount(12);
    };
    // Use extended options for avatar field when coming from Default Avatar
    const displayOptions = isAvatarField && isFromDefaultAvatar ? extendedAvatarOptions : options;
    // For avatar field, try to find the selected avatar from API data first
    // If 3 avatars are selected, show all 3 names
    let selectedOption;
    let displayText = '';
    let isMultipleAvatars = false;
    if (isAvatarField) {
        // Check how many avatars are selected
        const selectedCount = [
            selectedAvatars.title,
            selectedAvatars.body,
            selectedAvatars.conclusion
        ].filter(Boolean).length;
        if (selectedCount > 0) {
            // Show all selected avatar names (1, 2, or 3)
            const selectedNames = [];
            if (selectedAvatars.title) {
                selectedNames.push(selectedAvatars.title.avatar_name || selectedAvatars.title.name || 'Unknown');
            }
            if (selectedAvatars.body) {
                selectedNames.push(selectedAvatars.body.avatar_name || selectedAvatars.body.name || 'Unknown');
            }
            if (selectedAvatars.conclusion) {
                selectedNames.push(selectedAvatars.conclusion.avatar_name || selectedAvatars.conclusion.name || 'Unknown');
            }
            displayText = selectedNames.join(', ');
            isMultipleAvatars = selectedCount > 1; // Only apply special styling for 2+ avatars
            // Use the first selected avatar's ID as the value for form validation
            const firstSelectedAvatar = selectedAvatars.title || selectedAvatars.body || selectedAvatars.conclusion;
            selectedOption = {
                value: firstSelectedAvatar?.avatar_id || currentValue,
                label: displayText
            };
        } else if (currentValue) {
            // Show single avatar (fallback for when less than 3 are selected)
            const customAvatar = avatars.custom.find((avatar)=>avatar.avatar_id === currentValue);
            const defaultAvatar = avatars.default.find((avatar)=>avatar.avatar_id === currentValue);
            if (customAvatar) {
                selectedOption = {
                    value: customAvatar.avatar_id,
                    label: customAvatar.avatar_name || customAvatar.name || customAvatar.avatar_id
                };
            } else if (defaultAvatar) {
                selectedOption = {
                    value: defaultAvatar.avatar_id,
                    label: defaultAvatar.avatar_name || defaultAvatar.name || defaultAvatar.avatar_id
                };
            } else {
                selectedOption = displayOptions.find((option)=>option.value === currentValue);
            }
        }
    } else {
        selectedOption = displayOptions.find((option)=>option.value === currentValue);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onToggle(field),
                onBlur: ()=>{
                    setTimeout(()=>{
                        if ((!currentValue || currentValue.trim() === '') && isOpen) {
                            onBlur(field);
                        }
                    }, 100);
                },
                className: `w-full px-4 ${isMultipleAvatars ? 'py-2 text-[14px] min-h-[44px]' : 'py-[10.5px] text-[18px]'} font-normal bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-left transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white flex items-center justify-between cursor-pointer ${hasError ? 'ring-2 ring-red-500' : ''} ${selectedOption ? 'text-gray-800 bg-[#F5F5F5]' : 'text-[#11101066]'}`,
                "aria-describedby": hasError ? `${field}-error` : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isMultipleAvatars ? 'whitespace-normal break-words' : 'truncate'} flex-1 text-left ${isMultipleAvatars ? 'leading-snug' : ''}`,
                        children: selectedOption ? selectedOption.label : placeholder
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                        className: `w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: isAvatarField ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 lg:w-[900px] w-full mt-1 bg-white rounded-[12px] shadow-lg !overflow-hidden lg:-left-[190px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-3 border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Select Avatar"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                            lineNumber: 199,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[500px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 py-4 px-6 overflow-y-auto border-r border-gray-200",
                                    children: avatarsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#5046E5]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 218,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-[#5F5F5F]",
                                                children: "Loading avatars..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 219,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                        lineNumber: 217,
                                        columnNumber: 21
                                    }, this) : avatarsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-500 mb-2",
                                                children: "Failed to load avatars"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 223,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[#5F5F5F]",
                                                children: avatarsError
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 224,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onFetchAvatars,
                                                className: "mt-3 px-4 py-2 bg-[#5046E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors",
                                                children: "Retry"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                        lineNumber: 222,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            imageAvatars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "lg:text-[20px] text-[16px] font-semibold text-[#5F5F5F] mb-3",
                                                        children: "Image Avatar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center justify-between md:mb-3 mb-5 px-3 py-2 bg-purple-100 rounded-lg gap-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "w-4 h-4 text-purple-600 md:block hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "md:text-sm text-xs text-purple-700",
                                                                        children: "Click to select up to 3 avatars for your video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 29
                                                            }, this),
                                                            (()=>{
                                                                const totalSelected = [
                                                                    selectedAvatars.title,
                                                                    selectedAvatars.body,
                                                                    selectedAvatars.conclusion
                                                                ].filter(Boolean).length;
                                                                return totalSelected > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        onClearAllAvatars && onClearAllAvatars();
                                                                    },
                                                                    className: "text-xs text-purple-600 hover:text-purple-800 underline",
                                                                    children: "Clear Selection"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:grid flex flex-wrap lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-2",
                                                        children: imageAvatars.slice(0, visibleImageAvatarCount).map((avatar)=>{
                                                            const selectionNumber = getAvatarSelectionNumber ? getAvatarSelectionNumber(avatar) : null;
                                                            const isSelected = isAvatarSelected ? isAvatarSelected(avatar) : false;
                                                            const isDisabled = isAvatarPending ? isAvatarPending(avatar) : false;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                draggable: !isDisabled,
                                                                onDragStart: (e)=>!isDisabled && onDragStart && onDragStart(e, avatar),
                                                                onDragEnd: (e)=>onDragEnd && onDragEnd(e),
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    onAvatarClick && onAvatarClick(avatar);
                                                                },
                                                                className: `flex flex-col items-center max-w-[80px] rounded-lg transition-all duration-200 relative ${isDisabled ? 'opacity-40 cursor-not-allowed' : isSelected ? 'cursor-pointer' : 'cursor-pointer hover:bg-gray-50 hover:ring-1 hover:ring-gray-300'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: avatar?.preview_image_url || avatar?.imageUrl || '/images/avatars/avatargirl.png',
                                                                                alt: avatar.avatar_name || avatar.name || 'Avatar',
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: `rounded-lg object-cover w-[80px] h-[80px] ${(isAvatarPending ? isAvatarPending(avatar) : false) ? 'opacity-50' : ''}`,
                                                                                unoptimized: (avatar?.preview_image_url || avatar?.imageUrl || '').includes('heygen.ai'),
                                                                                onError: (e)=>{
                                                                                    const target = e.target;
                                                                                    target.src = '/images/avatars/avatargirl.png';
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 284,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            selectionNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute -top-3 -right-2 w-5 h-5 bg-[#5046E5]/60 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg backdrop-blur-lg leading-0",
                                                                                children: selectionNumber
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            (isAvatarPending ? isAvatarPending(avatar) : false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                    lineNumber: 308,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 307,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base text-[#11101066] font-normal mt-3 truncate w-full text-center",
                                                                        children: [
                                                                            avatar.avatar_name,
                                                                            (isAvatarPending ? isAvatarPending(avatar) : false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-xs text-orange-500 mt-1",
                                                                                    children: "Processing..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                    lineNumber: 316,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, avatar._id, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 27
                                                    }, this),
                                                    imageAvatars.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center lg:flex-row flex-col gap-y-4 gap-2 mt-4",
                                                        children: [
                                                            visibleImageAvatarCount < imageAvatars.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSeeMoreImageAvatars,
                                                                className: "px-4 py-2 text-sm text-[#5046E5] hover:text-[#4338CA] hover:bg-[#5046E5]/10 rounded-lg transition-colors duration-200 border border-[#5046E5]",
                                                                children: [
                                                                    "See More (",
                                                                    imageAvatars.length - visibleImageAvatarCount,
                                                                    " more)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 33
                                                            }, this),
                                                            visibleImageAvatarCount > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSeeLessImageAvatars,
                                                                className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300",
                                                                children: "See Less"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 236,
                                                columnNumber: 25
                                            }, this),
                                            imageAvatars.length > 0 && videoAvatars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#A0A3BD] h-[1px] mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 351,
                                                columnNumber: 25
                                            }, this),
                                            videoAvatars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "lg:text-[20px] text-[16px] font-semibold text-[#5F5F5F] mb-3",
                                                        children: "Video Avatar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center justify-between md:mb-3 mb-5 px-3 py-2 bg-purple-100 rounded-lg gap-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "w-4 h-4 text-purple-600 md:block hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "md:text-sm text-xs text-purple-700",
                                                                        children: "Click to select up to 3 avatars for your video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 29
                                                            }, this),
                                                            (()=>{
                                                                const totalSelected = [
                                                                    selectedAvatars.title,
                                                                    selectedAvatars.body,
                                                                    selectedAvatars.conclusion
                                                                ].filter(Boolean).length;
                                                                return totalSelected > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        onClearAllAvatars && onClearAllAvatars();
                                                                    },
                                                                    className: "text-xs text-purple-600 hover:text-purple-800 underline",
                                                                    children: "Clear Selection"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:grid flex flex-wrap lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-2",
                                                        children: videoAvatars.slice(0, visibleVideoAvatarCount).map((avatar)=>{
                                                            const selectionNumber = getAvatarSelectionNumber ? getAvatarSelectionNumber(avatar) : null;
                                                            const isSelected = isAvatarSelected ? isAvatarSelected(avatar) : false;
                                                            const isDisabled = isAvatarPending ? isAvatarPending(avatar) : false;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                draggable: !isDisabled,
                                                                onDragStart: (e)=>!isDisabled && onDragStart && onDragStart(e, avatar),
                                                                onDragEnd: (e)=>onDragEnd && onDragEnd(e),
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    if (!isDisabled) {
                                                                        onAvatarClick && onAvatarClick(avatar);
                                                                    }
                                                                },
                                                                className: `flex flex-col items-center max-w-[80px] rounded-lg transition-all duration-200 relative ${isDisabled ? 'opacity-40 cursor-not-allowed' : isSelected ? 'cursor-pointer' : 'cursor-pointer hover:bg-gray-50 hover:ring-1 hover:ring-gray-300'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: avatar?.preview_image_url || avatar?.imageUrl || '/images/avatars/avatargirl.png',
                                                                                alt: avatar.avatar_name || avatar.name || 'Avatar',
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: `rounded-lg object-cover w-[80px] h-[80px] ${(isAvatarPending ? isAvatarPending(avatar) : false) ? 'opacity-50' : ''}`,
                                                                                unoptimized: (avatar?.preview_image_url || avatar?.imageUrl || '').includes('heygen.ai'),
                                                                                onError: (e)=>{
                                                                                    const target = e.target;
                                                                                    target.src = '/images/avatars/avatargirl.png';
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 407,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            selectionNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute -top-3 -right-2 w-5 h-5 bg-[#5046E5]/60 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg backdrop-blur-lg leading-0",
                                                                                children: selectionNumber
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            (isAvatarPending ? isAvatarPending(avatar) : false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                    lineNumber: 431,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            avatar.preview_video_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute bottom-0 right-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold mb-1 mr-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-3 h-3",
                                                                                    fill: "currentColor",
                                                                                    viewBox: "0 0 20 20",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                        lineNumber: 439,
                                                                                        columnNumber: 43
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                    lineNumber: 438,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 437,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base text-[#11101066] font-normal mt-3 truncate w-full text-center",
                                                                        children: [
                                                                            avatar.avatar_name,
                                                                            (isAvatarPending ? isAvatarPending(avatar) : false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-xs text-orange-500 mt-1",
                                                                                    children: "Processing..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                    lineNumber: 448,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, avatar._id, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 27
                                                    }, this),
                                                    videoAvatars.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center lg:flex-row flex-col gap-y-4 gap-2 mt-4",
                                                        children: [
                                                            visibleVideoAvatarCount < videoAvatars.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleSeeMoreVideoAvatars,
                                                                className: "px-4 py-2 text-sm text-[#5046E5] hover:text-[#4338CA] hover:bg-[#5046E5]/10 rounded-lg transition-colors duration-200 border border-[#5046E5]",
                                                                children: [
                                                                    "See More (",
                                                                    videoAvatars.length - visibleVideoAvatarCount,
                                                                    " more)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 33
                                                            }, this),
                                                            visibleVideoAvatarCount > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleSeeLessVideoAvatars,
                                                                className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300",
                                                                children: "See Less"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 356,
                                                columnNumber: 25
                                            }, this),
                                            (imageAvatars.length > 0 || videoAvatars.length > 0) && avatars.default.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#A0A3BD] h-[1px] mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 485,
                                                columnNumber: 25
                                            }, this),
                                            avatars.default.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "lg:text-[20px] text-[16px] font-semibold text-[#5F5F5F] mb-3",
                                                        children: "Default Avatar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:grid flex flex-wrap lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-2",
                                                        children: avatars.default.slice(0, visibleDefaultCount).map((avatar)=>{
                                                            const selectionNumber = getAvatarSelectionNumber ? getAvatarSelectionNumber(avatar) : null;
                                                            const isSelected = isAvatarSelected ? isAvatarSelected(avatar) : false;
                                                            const isDisabled = false;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                draggable: !isDisabled,
                                                                onDragStart: (e)=>!isDisabled && onDragStart && onDragStart(e, avatar),
                                                                onDragEnd: (e)=>onDragEnd && onDragEnd(e),
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    if ("TURBOPACK compile-time truthy", 1) {
                                                                        onAvatarClick && onAvatarClick(avatar);
                                                                    }
                                                                },
                                                                className: `flex flex-col items-center max-w-[80px] rounded-lg transition-all duration-200 relative ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : isSelected ? 'cursor-pointer' : 'cursor-pointer hover:bg-gray-50 hover:ring-1 hover:ring-gray-300'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: avatar?.preview_image_url || avatar?.imageUrl || '/images/avatars/avatargirl.png',
                                                                                alt: avatar?.avatar_name || avatar?.name || 'Avatar',
                                                                                width: 80,
                                                                                height: 80,
                                                                                className: "rounded-lg object-cover w-[80px] h-[80px]",
                                                                                unoptimized: (avatar?.preview_image_url || avatar?.imageUrl || '').includes('heygen.ai'),
                                                                                onError: (e)=>{
                                                                                    const target = e.target;
                                                                                    target.src = '/images/avatars/avatargirl.png';
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 516,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            selectionNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute -top-3 -right-2 w-5 h-5 bg-[#5046E5]/60 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg backdrop-blur-lg leading-0",
                                                                                children: selectionNumber
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                                lineNumber: 531,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 515,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base text-[#11101066] font-normal mt-3 truncate w-full text-center",
                                                                        children: avatar.avatar_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, avatar._id, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 27
                                                    }, this),
                                                    avatars.default.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center lg:flex-row flex-col gap-y-4 gap-2 mt-4",
                                                        children: [
                                                            visibleDefaultCount < avatars.default.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleSeeMoreDefault,
                                                                className: "px-4 py-2 text-sm text-[#5046E5] hover:text-[#4338CA] hover:bg-[#5046E5]/10 rounded-lg transition-colors duration-200 border border-[#5046E5]",
                                                                children: [
                                                                    "See More (",
                                                                    avatars.default.length - visibleDefaultCount,
                                                                    " more)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 33
                                                            }, this),
                                                            visibleDefaultCount > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleSeeLessDefault,
                                                                className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300",
                                                                children: "See Less"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 488,
                                                columnNumber: 25
                                            }, this),
                                            imageAvatars.length === 0 && videoAvatars.length === 0 && avatars.default.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#5F5F5F]",
                                                    children: "No avatars available"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                lineNumber: 568,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:max-w-80 max-w-[50%] py-4 px-6 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "lg:text-[20px] text-[16px] font-semibold text-[#5F5F5F] mb-3",
                                            children: "Sort Avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#5F5F5F] mb-6",
                                            children: "Drag and drop the selected Images"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onDragOver: onDragOver,
                                                    onDragLeave: onDragLeave,
                                                    onDrop: (e)=>onDrop && onDrop(e, 'title'),
                                                    className: `relative flex items-center py-3 transition-colors duration-200 hover:bg-gray-50 rounded-lg cursor-pointer`,
                                                    children: selectedAvatars.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: selectedAvatars.title?.preview_image_url || selectedAvatars.title?.imageUrl || '/images/avatars/avatargirl.png',
                                                                        alt: selectedAvatars.title?.avatar_name || selectedAvatars.title?.name || 'Avatar',
                                                                        width: 50,
                                                                        height: 50,
                                                                        className: "rounded-lg object-cover w-[50px] h-[50px]",
                                                                        unoptimized: (selectedAvatars.title?.preview_image_url || selectedAvatars.title?.imageUrl || '').includes('heygen.ai'),
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.src = '/images/avatars/avatargirl.png';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 593,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            onRemoveAvatar && onRemoveAvatar('title');
                                                                        },
                                                                        className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors",
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 605,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Title Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8 text-purple-400",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 1.5,
                                                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Title Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onDragOver: onDragOver,
                                                    onDragLeave: onDragLeave,
                                                    onDrop: (e)=>onDrop && onDrop(e, 'body'),
                                                    className: `relative flex items-center py-3 transition-colors duration-200 hover:bg-gray-50 rounded-lg cursor-pointer`,
                                                    children: selectedAvatars.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: selectedAvatars.body?.preview_image_url || selectedAvatars.body?.imageUrl || '/images/avatars/avatargirl.png',
                                                                        alt: selectedAvatars.body?.avatar_name || selectedAvatars.body?.name || 'Avatar',
                                                                        width: 50,
                                                                        height: 50,
                                                                        className: "rounded-lg object-cover w-[50px] h-[50px]",
                                                                        unoptimized: (selectedAvatars.body?.preview_image_url || selectedAvatars.body?.imageUrl || '').includes('heygen.ai'),
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.src = '/images/avatars/avatargirl.png';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            onRemoveAvatar && onRemoveAvatar('body');
                                                                        },
                                                                        className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors",
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Body Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8 text-purple-400",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 1.5,
                                                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 667,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Body Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onDragOver: onDragOver,
                                                    onDragLeave: onDragLeave,
                                                    onDrop: (e)=>onDrop && onDrop(e, 'conclusion'),
                                                    className: `relative flex items-center py-3 transition-colors duration-200 hover:bg-gray-50 rounded-lg cursor-pointer`,
                                                    children: selectedAvatars.conclusion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: selectedAvatars.conclusion?.preview_image_url || selectedAvatars.conclusion?.imageUrl || '/images/avatars/avatargirl.png',
                                                                        alt: selectedAvatars.conclusion?.avatar_name || selectedAvatars.conclusion?.name || 'Avatar',
                                                                        width: 50,
                                                                        height: 50,
                                                                        className: "rounded-lg object-cover w-[50px] h-[50px]",
                                                                        unoptimized: (selectedAvatars.conclusion?.preview_image_url || selectedAvatars.conclusion?.imageUrl || '').includes('heygen.ai'),
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.src = '/images/avatars/avatargirl.png';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            onRemoveAvatar && onRemoveAvatar('conclusion');
                                                                        },
                                                                        className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors",
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 696,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Conclusion Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-row flex-col items-center gap-y-4 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[60px] h-[60px] bg-purple-100 rounded-lg flex items-center justify-center mr-3 shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8 text-purple-400",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 1.5,
                                                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                        lineNumber: 712,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                    lineNumber: 711,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: "Conclusion Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                            lineNumber: 582,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                    lineNumber: 197,
                    columnNumber: 13
                }, this) : /* Show regular dropdown options for normal users or fallback */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-60 overflow-y-auto",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelect(field, option.value),
                            className: "w-full px-4 py-3 text-left hover:bg-[#F5F5F5] transition-colors duration-200 flex items-center justify-between text-[#282828] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: option.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                    lineNumber: 733,
                                    columnNumber: 19
                                }, this),
                                currentValue === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-[#5046E5]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                                    lineNumber: 735,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                            lineNumber: 727,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                    lineNumber: 725,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this),
            hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${field}-error`,
                className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                        lineNumber: 746,
                        columnNumber: 11
                    }, this),
                    hasError.message
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
                lineNumber: 745,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/form-dropdown.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_task2_src_components_ui_form-dropdown_tsx_831bef59._.js.map