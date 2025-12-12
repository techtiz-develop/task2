(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/task2/src/components/ui/create-video-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateVideoForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$schedule$2d$interface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/schedule-interface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/slices/videoSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$video$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/create-video-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useAvatarStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useAvatarStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useSubscription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useUserSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useUserSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSchedule$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useSchedule.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$hybrid$2d$topic$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/hybrid-topic-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-field-row.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$submit$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/submit-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$schedule$2d$post$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/schedule-post-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$connect$2d$accounts$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/connect-accounts-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$loading$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-loading-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$selection$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-selection-status.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$configs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-field-configs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$validation$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/form-validation-schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$usage$2d$limit$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/usage-limit-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/pending-payment-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/subscription-required-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$voice$2d$selector$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/voice-selector-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$music$2d$selector$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/music-selector-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVoicesAndMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useVoicesAndMusic.ts [app-client] (ecmascript)");
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
const promptOptions = [
    {
        value: 'Shawheen V1',
        label: 'Shawheen V1'
    }
];
// Original avatar options for simple dropdown
const avatarOptions = [
    {
        value: 'Gorilla-1',
        label: 'Gorilla 1'
    },
    {
        value: 'Shawheen',
        label: 'Shawheen'
    },
    {
        value: 'Verified HeyGen Avatar',
        label: 'Verified HeyGen Avatar'
    },
    {
        value: 'Varied',
        label: 'Varied'
    }
];
// Extended avatar options for big dropdown (includes all options)
const extendedAvatarOptions = [
    {
        value: 'Gorilla-1',
        label: 'Gorilla 1'
    },
    {
        value: 'Shawheen',
        label: 'Shawheen'
    },
    {
        value: 'Verified HeyGen Avatar',
        label: 'Verified HeyGen Avatar'
    },
    {
        value: 'Varied',
        label: 'Varied'
    },
    {
        value: 'SHF34020',
        label: 'SHF34020'
    },
    {
        value: 'FRM89034',
        label: 'FRM89034'
    },
    {
        value: 'VAL77889',
        label: 'VAL77889'
    },
    {
        value: 'PIP34567',
        label: 'PIP34567'
    },
    {
        value: 'PN100234',
        label: 'PN100234'
    },
    {
        value: 'CON11223',
        label: 'CON11223'
    },
    {
        value: 'XTR12340',
        label: 'XTR12340'
    },
    {
        value: 'DRV34567',
        label: 'DRV34567'
    },
    {
        value: 'BLD67543',
        label: 'BLD67543'
    },
    {
        value: 'Account',
        label: 'Account'
    },
    {
        value: 'FRM11223',
        label: 'FRM11223'
    },
    {
        value: 'SHF56789',
        label: 'SHF56789'
    }
];
const positionOptions = [
    {
        value: 'Real Estate Agent',
        label: 'Real Estate Agent'
    },
    {
        value: 'Real Estate Broker',
        label: 'Real Estate Broker'
    },
    {
        value: 'Loan Broker',
        label: 'Loan Broker'
    },
    {
        value: 'Loan Officer',
        label: 'Loan Officer'
    }
];
const presetOptions = [
    {
        value: 'Low',
        label: 'Low'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'High',
        label: 'High'
    }
];
const languageOptions = [
    {
        value: 'English',
        label: 'English'
    },
    {
        value: 'Spanish',
        label: 'Spanish'
    }
];
const videoCaptionOptions = [
    {
        value: 'yes',
        label: 'Yes'
    },
    {
        value: 'no',
        label: 'No'
    }
];
function CreateVideoForm({ className }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CreateVideoForm.useSelector": (state)=>state.video
    }["CreateVideoForm.useSelector"]);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CreateVideoForm.useSelector": (state)=>state.user
    }["CreateVideoForm.useSelector"]);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { latestAvatarUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const { saveSelectedAvatars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useAvatarStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvatarStorage"])();
    const { checkVideoUsageLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"])();
    const [showSuccessToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formDataForModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showScheduleModal, setShowScheduleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConnectAccountsModal, setShowConnectAccountsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoFilling, setAutoFilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFormReady, setIsFormReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScheduleMode, setIsScheduleMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [webhookResponse, setWebhookResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFromDefaultAvatar, setIsFromDefaultAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatars, setAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        custom: [],
        default: []
    });
    const [avatarsLoading, setAvatarsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarsError, setAvatarsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // City trends state
    const [cityTrends, setCityTrends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cityTrendsLoading, setCityTrendsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cityTrendsError, setCityTrendsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastFetchedCity, setLastFetchedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastFetchedPosition, setLastFetchedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [missingFieldsError, setMissingFieldsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [realEstateValidationError, setRealEstateValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Use schedule hook
    const { scheduleData: autoScheduleData, scheduleLoading, fetchSchedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSchedule$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSchedule"])();
    const safeCityTrends = Array.isArray(cityTrends) ? cityTrends : [];
    // Use only city trends for the dropdown
    const allTrends = safeCityTrends;
    // Drag and drop state
    const [selectedAvatars, setSelectedAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: null,
        body: null,
        conclusion: null
    });
    const [draggedAvatar, setDraggedAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Usage limit toast state
    const [showUsageToast, setShowUsageToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usageToastMessage, setUsageToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Pending payment toast state
    const [showPendingPaymentToast, setShowPendingPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingPaymentMessage, setPendingPaymentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Subscription required toast state
    const [showSubscriptionRequiredToast, setShowSubscriptionRequiredToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscriptionRequiredMessage, setSubscriptionRequiredMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Custom topic state
    const [showCustomTopicInput, setShowCustomTopicInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customTopicValue, setCustomTopicValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lastApiTriggeredValue, setLastApiTriggeredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // User settings loading state
    const [userSettingsLoaded, setUserSettingsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedVideoTopic, setSavedVideoTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Custom topic key points generation state
    const [keyPointsLoading, setKeyPointsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [keyPointsError, setKeyPointsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Track if form has been manually touched to avoid showing validation errors on prefilled forms
    const [formManuallyTouched, setFormManuallyTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track if form submission was attempted (using state to trigger re-renders)
    const [submitAttempted, setSubmitAttempted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    // Voice selection state
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggedVoice, setDraggedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVoiceManuallySelected, setIsVoiceManuallySelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Music selection state
    const [selectedMusic, setSelectedMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggedMusic, setDraggedMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if user came from Default Avatar button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            const source = searchParams.get('source');
            if (source === 'defaultAvatar') {
                setIsFromDefaultAvatar(true);
            }
        }
    }["CreateVideoForm.useEffect"], [
        searchParams
    ]);
    // Fetch avatars function - extracted to be reusable
    const fetchAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateVideoForm.useCallback[fetchAvatars]": async ()=>{
            try {
                setAvatarsLoading(true);
                setAvatarsError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getAvatars();
                if (response.success) {
                    // Handle both response structures: direct response or nested under data
                    const avatarData = response.data || response;
                    const customAvatars = avatarData.custom || response.custom || [];
                    const defaultAvatars = avatarData.default || response.default || [];
                    setAvatars({
                        custom: customAvatars,
                        default: defaultAvatars
                    });
                    // Explicitly clear any previous errors
                    setAvatarsError(null);
                } else {
                    setAvatarsError(response.message || 'Failed to fetch avatars');
                }
            } catch (error) {
                // If API endpoint doesn't exist (404), show a more user-friendly message
                if (error.message?.includes('Not Found') || error.message?.includes('404')) {
                    setAvatarsError('Avatar API not yet implemented. Using fallback options.');
                } else {
                    setAvatarsError(error.message || 'Failed to load avatars');
                }
            } finally{
                setAvatarsLoading(false);
            }
        }
    }["CreateVideoForm.useCallback[fetchAvatars]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            fetchAvatars();
            fetchSchedule();
        }
    }["CreateVideoForm.useEffect"], [
        fetchAvatars,
        fetchSchedule
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (latestAvatarUpdate) {
                const isAvatarComplete = (latestAvatarUpdate.step === 'complete' || latestAvatarUpdate.step === 'ready') && latestAvatarUpdate.status === 'success' && (latestAvatarUpdate.data?.message?.toLowerCase().includes('avatar') || latestAvatarUpdate.data?.message?.toLowerCase().includes('ready'));
                if (isAvatarComplete) {
                    setTimeout({
                        "CreateVideoForm.useEffect": ()=>{
                            fetchAvatars();
                        }
                    }["CreateVideoForm.useEffect"], 1000);
                }
            }
        }
    }["CreateVideoForm.useEffect"], [
        latestAvatarUpdate,
        fetchAvatars
    ]);
    // Helper function to check if avatar is pending
    const isAvatarPending = (avatar)=>{
        // Only check pending status for custom avatars, default avatars should always be selectable
        const isCustomAvatar = avatars.custom.some((customAvatar)=>customAvatar.avatar_id === avatar.avatar_id);
        return isCustomAvatar && (avatar.status === 'pending' || avatar.status === 'processing' || avatar.status === 'creating');
    };
    // Helper function to determine if avatar is custom or default
    const getAvatarType = (avatar)=>{
        return avatars.custom.some((customAvatar)=>customAvatar.avatar_id === avatar.avatar_id) ? 'custom' : 'default';
    };
    // All avatar types are allowed to mix (custom image, custom video, default)
    const isAvatarTypeAllowed = (_avatar)=>{
        return true;
    };
    // Drag and drop handlers
    const handleDragStart = (e, avatar)=>{
        e.stopPropagation();
        setDraggedAvatar(avatar);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', avatar.avatar_id);
        // Add visual feedback to the dragged element
        const target = e.target;
        target.classList.add('dragging');
    };
    const handleDragEnd = (e)=>{
        e.stopPropagation();
        // Remove visual feedback
        const target = e.target;
        target.classList.remove('dragging');
        setDraggedAvatar(null);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        // Add visual feedback to drop zone
        const target = e.currentTarget;
        target.classList.add('drag-over');
    };
    const handleDragLeave = (e)=>{
        e.stopPropagation();
        // Remove visual feedback from drop zone
        const target = e.currentTarget;
        target.classList.remove('drag-over');
    };
    const handleDrop = (e, dropZone)=>{
        e.preventDefault();
        e.stopPropagation();
        // Remove visual feedback
        const target = e.currentTarget;
        target.classList.remove('drag-over');
        if (draggedAvatar) {
            // Check if avatar type is allowed based on existing selections
            if (!isAvatarTypeAllowed(draggedAvatar)) //TURBOPACK unreachable
            ;
            setSelectedAvatars((prev)=>({
                    ...prev,
                    [dropZone]: draggedAvatar
                }));
            // Update the form field with the selected avatar
            setValue('avatar', draggedAvatar.avatar_id);
            trigger('avatar');
        }
        setDraggedAvatar(null);
    };
    const handleRemoveAvatar = (dropZone)=>{
        setSelectedAvatars((prev)=>({
                ...prev,
                [dropZone]: null
            }));
        // Update form field - use the first remaining avatar or clear if none
        const remainingAvatars = Object.values({
            ...selectedAvatars,
            [dropZone]: null
        }).filter(Boolean);
        if (remainingAvatars.length > 0) {
            setValue('avatar', remainingAvatars[0].avatar_id);
        } else {
            setValue('avatar', '');
            console.log('🔄 Cleared form field - no avatars remaining');
        }
        trigger('avatar');
    };
    const handleClearAllAvatars = ()=>{
        setSelectedAvatars({
            title: null,
            body: null,
            conclusion: null
        });
        setValue('avatar', '');
        trigger('avatar');
    };
    // Voice handlers
    const handleVoiceClick = (voice)=>{
        console.log('🎤 create-video-form - handleVoiceClick called:', voice.name, voice.id, voice.type);
        // Mark that user has manually selected a voice (prevents auto-select from overriding)
        setIsVoiceManuallySelected(true);
        // Update selected voice FIRST (this is the source of truth)
        setSelectedVoice(voice);
        // Then update form value to match selected voice
        setValue('voice', voice.id, {
            shouldValidate: true,
            shouldDirty: true
        });
        trigger('voice');
        // Update voice type to match selected voice
        setCurrentVoiceType(voice.type);
        console.log('🎤 create-video-form - Updated selectedVoice to:', voice.name, voice.id, 'Form value updated to:', voice.id);
    };
    const handleVoiceDragStart = (e, voice)=>{
        setDraggedVoice(voice);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', voice.id);
        const target = e.target;
        target.classList.add('dragging');
    };
    const handleVoiceDragEnd = (e)=>{
        const target = e.target;
        target.classList.remove('dragging');
        setDraggedVoice(null);
    };
    const handleVoiceDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        const target = e.currentTarget;
        target.classList.add('drag-over');
    };
    const handleVoiceDragLeave = (e)=>{
        e.stopPropagation();
        const target = e.currentTarget;
        target.classList.remove('drag-over');
    };
    const handleVoiceDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget;
        target.classList.remove('drag-over');
        if (draggedVoice) {
            handleVoiceClick(draggedVoice);
        }
        setDraggedVoice(null);
    };
    // Music handlers (reusing same structure as voice)
    const handleMusicClick = (music)=>{
        // Ensure we're setting the correct music - use the music object passed from the click
        setSelectedMusic(music);
        setValue('music', music.id, {
            shouldValidate: true
        });
        trigger('music');
    // Don't sync voice - voice and music are independent
    };
    const handleMusicDragStart = (e, music)=>{
        setDraggedMusic(music);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', music.id);
        const target = e.target;
        target.classList.add('dragging');
    };
    const handleMusicDragEnd = (e)=>{
        const target = e.target;
        target.classList.remove('dragging');
        setDraggedMusic(null);
    };
    const handleMusicDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        const target = e.currentTarget;
        target.classList.add('drag-over');
    };
    const handleMusicDragLeave = (e)=>{
        e.stopPropagation();
        const target = e.currentTarget;
        target.classList.remove('drag-over');
    };
    const handleMusicDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget;
        target.classList.remove('drag-over');
        if (draggedMusic) {
            handleMusicClick(draggedMusic);
        }
        setDraggedMusic(null);
    };
    // Click-to-select functionality - automatically assigns to drag & drop slots
    const handleAvatarClick = (avatar)=>{
        if (isAvatarPending(avatar)) {
            return; // Don't allow selection of pending avatars
        }
        const isSelected = isAvatarSelected(avatar);
        if (isSelected) {
            // Remove from selection and clear corresponding drag & drop slot
            if (selectedAvatars.title?.avatar_id === avatar.avatar_id) {
                setSelectedAvatars((prev)=>({
                        ...prev,
                        title: null
                    }));
            } else if (selectedAvatars.body?.avatar_id === avatar.avatar_id) {
                setSelectedAvatars((prev)=>({
                        ...prev,
                        body: null
                    }));
            } else if (selectedAvatars.conclusion?.avatar_id === avatar.avatar_id) {
                setSelectedAvatars((prev)=>({
                        ...prev,
                        conclusion: null
                    }));
            }
            // Update form field - use the first remaining avatar or clear if none
            const remainingAvatars = Object.values({
                ...selectedAvatars,
                title: selectedAvatars.title?.avatar_id === avatar.avatar_id ? null : selectedAvatars.title,
                body: selectedAvatars.body?.avatar_id === avatar.avatar_id ? null : selectedAvatars.body,
                conclusion: selectedAvatars.conclusion?.avatar_id === avatar.avatar_id ? null : selectedAvatars.conclusion
            }).filter(Boolean);
            if (remainingAvatars.length > 0) {
                setValue('avatar', remainingAvatars[0].avatar_id);
            } else {
                setValue('avatar', '');
            }
            trigger('avatar');
        } else {
            // Check if avatar type is allowed based on existing selections
            if (!isAvatarTypeAllowed(avatar)) //TURBOPACK unreachable
            ;
            // Check if we can add more avatars (max 3)
            const totalSelected = [
                selectedAvatars.title,
                selectedAvatars.body,
                selectedAvatars.conclusion
            ].filter(Boolean).length;
            if (totalSelected < 3) {
                // Auto-assign to next available slot
                if (!selectedAvatars.title) {
                    setSelectedAvatars((prev)=>({
                            ...prev,
                            title: avatar
                        }));
                    setValue('avatar', avatar.avatar_id);
                } else if (!selectedAvatars.body) {
                    setSelectedAvatars((prev)=>({
                            ...prev,
                            body: avatar
                        }));
                    setValue('avatar', avatar.avatar_id);
                } else if (!selectedAvatars.conclusion) {
                    setSelectedAvatars((prev)=>({
                            ...prev,
                            conclusion: avatar
                        }));
                    setValue('avatar', avatar.avatar_id);
                }
                trigger('avatar');
            } else {
                console.log('🚫 Maximum avatars (3) already selected');
            }
        }
    };
    // Helper function to get selection number for an avatar (based on drag & drop slots)
    const getAvatarSelectionNumber = (avatar)=>{
        if (selectedAvatars.title?.avatar_id === avatar.avatar_id) return 1;
        if (selectedAvatars.body?.avatar_id === avatar.avatar_id) return 2;
        if (selectedAvatars.conclusion?.avatar_id === avatar.avatar_id) return 3;
        return null;
    };
    // Helper function to check if avatar is selected (unified check)
    const isAvatarSelected = (avatar)=>{
        return selectedAvatars.title?.avatar_id === avatar.avatar_id || selectedAvatars.body?.avatar_id === avatar.avatar_id || selectedAvatars.conclusion?.avatar_id === avatar.avatar_id;
    };
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch, trigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$validation$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVideoSchema"]),
        mode: 'onSubmit',
        defaultValues: {
            prompt: 'Shawheen V1',
            avatar: '',
            name: '',
            position: '',
            companyName: '',
            license: '',
            tailoredFit: '',
            socialHandles: '',
            videoTopic: '',
            topicKeyPoints: '',
            city: '',
            preferredTone: '',
            callToAction: '',
            email: '',
            preset: '',
            voice: '',
            music: '',
            language: '',
            gender: '',
            videoCaption: ''
        }
    });
    // Voice and Music state - using hook
    const preset = watch('preset');
    const gender = watch('gender') || null;
    const { voices, voicesLoading, voicesError, musicList, musicLoading, musicError, allVoices, allMusic// All music (low, medium, high)
     } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVoicesAndMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoicesAndMusic"])({
        preset,
        selectedAvatars,
        gender
    });
    // Track current filter type for voice/music dropdowns
    const [currentVoiceType, setCurrentVoiceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMusicType, setCurrentMusicType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mark form as manually touched when any form field changes
    const handleFormFieldChange = ()=>{
        setFormManuallyTouched(true);
    };
    // Show errors when form submission is attempted and validation fails
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (submitAttempted && Object.keys(errors).length > 0 && !formManuallyTouched) {
                setFormManuallyTouched(true);
            }
        }
    }["CreateVideoForm.useEffect"], [
        errors,
        formManuallyTouched,
        submitAttempted
    ]);
    // Store user settings data for voice/music selection
    const [userSettingsData, setUserSettingsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isApplyingUserSettings, setIsApplyingUserSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasUserSettingsWithGender, setHasUserSettingsWithGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const presetFromUserSettingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasUserVoiceMusicPresetsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false) // Track if user-settings has specific voice/music presets
    ;
    // User settings hook
    const { fetchUserSettings, saveUserSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useUserSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserSettings"])({
        userEmail: user?.email,
        avatars,
        setSelectedAvatars,
        setValue
    });
    // Generate key points for custom topic
    const generateCustomTopicKeyPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateVideoForm.useCallback[generateCustomTopicKeyPoints]": async (description)=>{
            if (!description || description.trim() === '') {
                return;
            }
            try {
                setKeyPointsLoading(true);
                setKeyPointsError(null);
                // Clear topicKeyPoints field when API call starts
                setValue('topicKeyPoints', '', {
                    shouldValidate: false,
                    shouldDirty: true
                });
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getDescriptionKeypoints(description.trim());
                if (response.success && response.data) {
                    const keypoints = response.data.keypoints || '';
                    if (keypoints.trim()) {
                        console.log('🎯 Auto-generated key points for custom topic:', keypoints);
                        setValue('topicKeyPoints', keypoints, {
                            shouldValidate: true,
                            shouldDirty: true
                        });
                        trigger('topicKeyPoints');
                    }
                    // Set videoTopic field AFTER API confirmation
                    setValue('videoTopic', description.trim(), {
                        shouldValidate: true,
                        shouldDirty: true
                    });
                    // Track the value that triggered this API call
                    setLastApiTriggeredValue(description.trim());
                } else {
                    setKeyPointsError(response.message || 'Failed to generate key points');
                }
            } catch (error) {
                console.error('Key points generation error:', error);
                setKeyPointsError(error.message || 'Failed to generate key points');
            } finally{
                setKeyPointsLoading(false);
            }
        }
    }["CreateVideoForm.useCallback[generateCustomTopicKeyPoints]"], [
        setValue,
        trigger
    ]);
    // Fetch city trends function
    const fetchCityTrends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateVideoForm.useCallback[fetchCityTrends]": async (city, position)=>{
            const cityValue = city?.trim() || '';
            const positionValue = position?.trim() || watch('position')?.trim() || '';
            // Check if both city and position are provided
            if (!cityValue || !positionValue) {
                setCityTrends([]);
                setLastFetchedCity(null);
                setLastFetchedPosition(null);
                setMissingFieldsError('Please select the position and city first');
                setCityTrendsError(null);
                return;
            }
            // Clear missing fields error if both are present
            setMissingFieldsError(null);
            // Create cache key from both city and position
            const cacheKey = `${cityValue}|${positionValue}`;
            const lastCacheKey = lastFetchedCity && lastFetchedPosition ? `${lastFetchedCity}|${lastFetchedPosition}` : null;
            // Don't fetch if we already have trends for this city and position combination
            if (cacheKey === lastCacheKey) {
                return;
            }
            try {
                setCityTrendsLoading(true);
                setCityTrendsError(null);
                setMissingFieldsError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getCityTrends(cityValue, positionValue);
                if (response.success && response.data) {
                    const trendsData = response.data.trends || [];
                    if (Array.isArray(trendsData)) {
                        setCityTrends(trendsData);
                        setCityTrendsError(null);
                        setMissingFieldsError(null);
                        setRealEstateValidationError(null);
                        setLastFetchedCity(cityValue);
                        setLastFetchedPosition(positionValue);
                        // Pre-select saved video topic if it exists in the fetched trends
                        if (savedVideoTopic && savedVideoTopic.trim()) {
                            const matchingTrend = trendsData.find({
                                "CreateVideoForm.useCallback[fetchCityTrends].matchingTrend": (trend)=>trend.description === savedVideoTopic
                            }["CreateVideoForm.useCallback[fetchCityTrends].matchingTrend"]);
                            if (matchingTrend) {
                                console.log('🎯 Pre-selecting saved video topic from city trends:', savedVideoTopic);
                                setValue('videoTopic', savedVideoTopic);
                                setValue('topicKeyPoints', matchingTrend.keypoints);
                                trigger('videoTopic');
                            }
                        }
                    } else {
                        console.error('City trends data is not an array:', trendsData);
                        setCityTrendsError('Invalid city trends data format');
                        setCityTrends([]);
                    }
                } else {
                    const errorMessage = response.message || response.error || 'Failed to fetch city trends';
                    // Check if this is a real estate validation error
                    const isRealEstateValidationError = errorMessage.includes('must be related to real estate topics') || errorMessage.includes('Required categories:') || errorMessage.includes('Real Estate') || errorMessage.includes('Examples include');
                    if (isRealEstateValidationError) {
                        setRealEstateValidationError(errorMessage);
                        setCityTrendsError(null);
                    } else {
                        setCityTrendsError(errorMessage);
                        setRealEstateValidationError(null);
                    }
                    setCityTrends([]);
                }
            } catch (error) {
                console.error('City trends fetch error:', error);
                const errorMessage = error.message || 'Failed to load city trends';
                // Check if this is a real estate validation error
                const isRealEstateValidationError = errorMessage.includes('must be related to real estate topics') || errorMessage.includes('Required categories:') || errorMessage.includes('Real Estate') || errorMessage.includes('Examples include');
                if (isRealEstateValidationError) {
                    setRealEstateValidationError(errorMessage);
                    setCityTrendsError(null);
                } else {
                    setCityTrendsError(errorMessage);
                    setRealEstateValidationError(null);
                }
                setCityTrends([]);
            } finally{
                setCityTrendsLoading(false);
            }
        }
    }["CreateVideoForm.useCallback[fetchCityTrends]"], [
        lastFetchedCity,
        lastFetchedPosition,
        savedVideoTopic,
        setValue,
        trigger,
        watch
    ]);
    // Watch position changes and trigger city trends fetch
    const watchedPosition = watch('position');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            const cityValue = watch('city');
            if (watchedPosition && watchedPosition.trim() && cityValue && cityValue.trim()) {
                console.log('🏢 Position changed, fetching city trends with position:', watchedPosition);
                fetchCityTrends(cityValue, watchedPosition);
            } else if (watchedPosition && watchedPosition.trim()) {
                // Position is set but city is not - show error message
                setMissingFieldsError('Please select the position and city first');
            }
        }
    }["CreateVideoForm.useEffect"], [
        watchedPosition,
        fetchCityTrends,
        watch
    ]);
    // Auto-select random voice and music when preset is selected and data is loaded
    // When preset changes, ALWAYS update both voice and music to match the preset
    // Skip if we're applying user settings OR if preset was initially set from user settings (to preserve saved selections)
    // Allow random selection if user manually changes preset after initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            // Only skip random selection if:
            // 1. We're currently applying user settings, OR
            // 2. Preset was set from user settings AND we have user settings with gender (initial load only, before user manually changes preset)
            // 3. We have user settings data waiting to be applied (prevents race condition)
            // 4. Preset came from user-settings AND user-settings has specific voice/music presets (don't override saved energy levels)
            const shouldSkipRandomSelection = isApplyingUserSettings || presetFromUserSettingsRef.current && hasUserSettingsWithGender || userSettingsData !== null || presetFromUserSettingsRef.current && hasUserVoiceMusicPresetsRef.current;
            if (preset && allVoices.length > 0 && allMusic.length > 0 && !shouldSkipRandomSelection) {
                const presetLower = preset.toLowerCase().trim();
                // Only proceed if preset is valid (low, medium, high)
                if (presetLower === 'low' || presetLower === 'medium' || presetLower === 'high') {
                    if (userSettingsData === null) {
                        setCurrentVoiceType(presetLower);
                        setCurrentMusicType(presetLower);
                    } else {
                        // User settings exist - only set type if no specific preset is saved
                        const settings = userSettingsData;
                        if (!settings.selectedVoicePreset) {
                            setCurrentVoiceType(presetLower);
                        }
                        if (!settings.selectedMusicPreset) {
                            setCurrentMusicType(presetLower);
                        }
                    }
                    // Always update voice to match preset (regardless of previous selection)
                    const matchingVoices = allVoices.filter({
                        "CreateVideoForm.useEffect.matchingVoices": (v)=>v.type === presetLower
                    }["CreateVideoForm.useEffect.matchingVoices"]);
                    if (matchingVoices.length > 0) {
                        const randomVoice = matchingVoices[Math.floor(Math.random() * matchingVoices.length)];
                        if (randomVoice) {
                            setSelectedVoice(randomVoice);
                            setValue('voice', randomVoice.id, {
                                shouldValidate: true
                            });
                            trigger('voice');
                        }
                    }
                    // Always update music to match preset (regardless of previous selection)
                    const matchingMusic = allMusic.filter({
                        "CreateVideoForm.useEffect.matchingMusic": (m)=>m.type === presetLower
                    }["CreateVideoForm.useEffect.matchingMusic"]);
                    if (matchingMusic.length > 0) {
                        const randomMusic = matchingMusic[Math.floor(Math.random() * matchingMusic.length)];
                        if (randomMusic) {
                            setSelectedMusic(randomMusic);
                            setValue('music', randomMusic.id, {
                                shouldValidate: true
                            });
                            trigger('music');
                        }
                    }
                }
            }
        }
    }["CreateVideoForm.useEffect"], [
        preset,
        allVoices,
        allMusic,
        setValue,
        trigger,
        isApplyingUserSettings,
        hasUserSettingsWithGender,
        userSettingsData
    ]);
    // Apply voice and music from user settings after they are loaded
    // This ensures saved selections are restored instead of random selection
    // Use a small delay to ensure this runs after preset auto-select
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (userSettingsData && !voicesLoading && !musicLoading && allVoices.length > 0 && allMusic.length > 0) {
                // Use setTimeout to ensure this runs after preset auto-select
                const timeoutId = setTimeout({
                    "CreateVideoForm.useEffect.timeoutId": ()=>{
                        setIsApplyingUserSettings(true);
                        // Find and set selected voice by ID from user settings FIRST
                        // This allows us to check if the voice is custom before setting voice energy
                        let foundVoiceForEnergyCheck = null;
                        if (userSettingsData.selectedVoiceId) {
                            const foundVoice = allVoices.find({
                                "CreateVideoForm.useEffect.timeoutId.foundVoice": (voice)=>voice.id === userSettingsData.selectedVoiceId
                            }["CreateVideoForm.useEffect.timeoutId.foundVoice"]);
                            if (foundVoice) {
                                foundVoiceForEnergyCheck = foundVoice;
                                setSelectedVoice(foundVoice);
                                setValue('voice', foundVoice.id, {
                                    shouldValidate: true
                                });
                                trigger('voice');
                                console.log('🎤 Voice loaded from user settings by ID:', foundVoice.name, foundVoice.id);
                            } else {
                                console.warn('⚠️ Voice ID from user settings not found:', userSettingsData.selectedVoiceId);
                            }
                        }
                        // Set voice type filter based on selectedVoicePreset from user settings
                        // This should override any preset-based selection
                        // Handle 'low', 'medium', 'high', and 'custom' voice energy levels
                        // Priority: If voice is custom (isCustom: true) > selectedVoicePreset > voice energy field
                        if (foundVoiceForEnergyCheck?.isCustom === true) {
                            // If the selected voice is custom, always set voice energy to 'custom'
                            setCurrentVoiceType('custom');
                            console.log('🎤 Voice is custom, setting voice energy to "custom"');
                        } else if (userSettingsData.selectedVoicePreset) {
                            const voicePreset = userSettingsData.selectedVoicePreset.toLowerCase();
                            if (voicePreset === 'low' || voicePreset === 'medium' || voicePreset === 'high' || voicePreset === 'custom') {
                                setCurrentVoiceType(voicePreset);
                                console.log('🎤 Voice preset loaded from user settings:', voicePreset, '(overriding preset-based selection)');
                            }
                        } else if (foundVoiceForEnergyCheck?.energy) {
                            // Fallback: Use the voice's energy field if no preset is provided
                            const voiceEnergy = foundVoiceForEnergyCheck.energy.toLowerCase();
                            if (voiceEnergy === 'low' || voiceEnergy === 'medium' || voiceEnergy === 'high') {
                                setCurrentVoiceType(voiceEnergy);
                                console.log('🎤 Voice energy loaded from voice object:', voiceEnergy);
                            }
                        }
                        // Set music type filter based on selectedMusicPreset from user settings
                        // This should override any preset-based selection
                        if (userSettingsData.selectedMusicPreset) {
                            const musicPreset = userSettingsData.selectedMusicPreset.toLowerCase();
                            if (musicPreset === 'low' || musicPreset === 'medium' || musicPreset === 'high') {
                                setCurrentMusicType(musicPreset);
                                console.log('🎵 Music preset loaded from user settings:', musicPreset, '(overriding preset-based selection)');
                            }
                        }
                        // Find and set selected music by ID from user settings
                        if (userSettingsData.selectedMusicTrackId) {
                            const foundMusic = allMusic.find({
                                "CreateVideoForm.useEffect.timeoutId.foundMusic": (music)=>music.id === userSettingsData.selectedMusicTrackId || music._id === userSettingsData.selectedMusicTrackId
                            }["CreateVideoForm.useEffect.timeoutId.foundMusic"]);
                            if (foundMusic) {
                                setSelectedMusic(foundMusic);
                                // Use the ID format that matches the music object (prefer id, fallback to _id)
                                const musicId = foundMusic.id || foundMusic._id || userSettingsData.selectedMusicTrackId;
                                setValue('music', musicId, {
                                    shouldValidate: true
                                });
                                trigger('music');
                                console.log('🎵 Music loaded from user settings by ID:', foundMusic.name, musicId);
                            } else {
                                console.warn('⚠️ Music ID from user settings not found:', userSettingsData.selectedMusicTrackId, 'Available music IDs:', allMusic.map({
                                    "CreateVideoForm.useEffect.timeoutId": (m)=>m.id || m._id
                                }["CreateVideoForm.useEffect.timeoutId"]).slice(0, 5));
                            }
                        }
                        // Clear user settings data after applying to prevent re-applying
                        setUserSettingsData(null);
                        // Reset flag after a short delay to allow form updates to complete
                        setTimeout({
                            "CreateVideoForm.useEffect.timeoutId": ()=>{
                                setIsApplyingUserSettings(false);
                            }
                        }["CreateVideoForm.useEffect.timeoutId"], 100);
                    }
                }["CreateVideoForm.useEffect.timeoutId"], 50) // Small delay to ensure this runs after preset auto-select
                ;
                return ({
                    "CreateVideoForm.useEffect": ()=>clearTimeout(timeoutId)
                })["CreateVideoForm.useEffect"];
            }
        }
    }["CreateVideoForm.useEffect"], [
        userSettingsData,
        voicesLoading,
        musicLoading,
        allVoices,
        allMusic,
        setValue,
        trigger,
        setCurrentVoiceType,
        setCurrentMusicType
    ]);
    // Handle voice type change from VoiceSelector (when user clicks low/medium/high buttons)
    const handleVoiceTypeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateVideoForm.useCallback[handleVoiceTypeChange]": (type)=>{
            console.log('🎤 create-video-form - handleVoiceTypeChange called with type:', type);
            // Mark that user has manually changed voice type (prevents auto-select from overriding)
            setIsVoiceManuallySelected(true);
            // Update voice type filter
            setCurrentVoiceType(type);
            // Filter voices - handle custom type specially
            if (type === 'custom') {
                // For custom voices, filter by isCustom property
                const filteredVoices = allVoices.filter({
                    "CreateVideoForm.useCallback[handleVoiceTypeChange].filteredVoices": (v)=>v.isCustom === true
                }["CreateVideoForm.useCallback[handleVoiceTypeChange].filteredVoices"]);
                if (filteredVoices.length > 0) {
                    const randomVoice = filteredVoices[Math.floor(Math.random() * filteredVoices.length)];
                    setSelectedVoice(randomVoice);
                    setValue('voice', randomVoice.id, {
                        shouldValidate: true
                    });
                    trigger('voice');
                }
            } else {
                // For low/medium/high, filter voices only
                // Don't update music type or music selection - music should remain independent
                const filteredVoices = allVoices.filter({
                    "CreateVideoForm.useCallback[handleVoiceTypeChange].filteredVoices": (v)=>v.type === type
                }["CreateVideoForm.useCallback[handleVoiceTypeChange].filteredVoices"]);
                if (filteredVoices.length > 0) {
                    const randomVoice = filteredVoices[Math.floor(Math.random() * filteredVoices.length)];
                    setSelectedVoice(randomVoice);
                    setValue('voice', randomVoice.id, {
                        shouldValidate: true
                    });
                    trigger('voice');
                }
            // Don't update music when voice type changes - music and voice are independent
            }
        }
    }["CreateVideoForm.useCallback[handleVoiceTypeChange]"], [
        allVoices,
        setValue,
        trigger
    ]);
    // Handle music type change from MusicSelector (when user clicks low/medium/high buttons)
    const handleMusicTypeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateVideoForm.useCallback[handleMusicTypeChange]": (type)=>{
            // Music only supports low/medium/high, not custom
            if (type === 'custom') {
                return; // Ignore custom type for music
            }
            // Update music type filter only (don't sync voice)
            setCurrentMusicType(type);
            // Filter music
            const filteredMusic = allMusic.filter({
                "CreateVideoForm.useCallback[handleMusicTypeChange].filteredMusic": (m)=>m.type === type
            }["CreateVideoForm.useCallback[handleMusicTypeChange].filteredMusic"]);
            // Auto-select random music from the filtered list
            if (filteredMusic.length > 0) {
                const randomMusic = filteredMusic[Math.floor(Math.random() * filteredMusic.length)];
                setSelectedMusic(randomMusic);
                setValue('music', randomMusic.id, {
                    shouldValidate: true
                });
                trigger('music');
            } else {
                setSelectedMusic(null);
                setValue('music', '', {
                    shouldValidate: true
                });
                trigger('music');
            }
        }
    }["CreateVideoForm.useCallback[handleMusicTypeChange]"], [
        allMusic,
        setValue,
        trigger
    ]);
    // Auto-fill form when avatars are loaded and user has settings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (!avatarsLoading && (avatars.custom.length > 0 || avatars.default.length > 0) && user?.email) {
                setAutoFilling(true);
                fetchUserSettings().then({
                    "CreateVideoForm.useEffect": (result)=>{
                        // Auto-trigger city trends if city is loaded from settings
                        if (result && !userSettingsLoaded && result.data) {
                            const cityValue = watch('city');
                            const videoTopicValue = watch('videoTopic');
                            // Save the video topic for later pre-selection
                            if (videoTopicValue && videoTopicValue.trim()) {
                                setSavedVideoTopic(videoTopicValue);
                            }
                            // Auto-trigger city trends if both city and position exist
                            const positionValue = watch('position');
                            if (cityValue && cityValue.trim() && positionValue && positionValue.trim()) {
                                console.log('🏙️ Auto-triggering city trends for saved city and position:', cityValue, positionValue);
                                fetchCityTrends(cityValue, positionValue);
                            }
                            // Store voice/music settings for later application
                            if (result.data.gender || result.data.selectedVoiceId || result.data.selectedMusicTrackId) {
                                setUserSettingsData({
                                    selectedVoiceId: result.data.selectedVoiceId,
                                    selectedMusicTrackId: result.data.selectedMusicTrackId,
                                    selectedVoicePreset: result.data.selectedVoicePreset,
                                    selectedMusicPreset: result.data.selectedMusicPreset,
                                    gender: result.data.gender,
                                    preset: result.data.preset
                                });
                                // Mark that we have user settings with gender - this prevents random selection on initial load
                                if (result.data.gender) {
                                    setHasUserSettingsWithGender(true);
                                    // Track if preset comes from user settings
                                    if (result.data.preset) {
                                        presetFromUserSettingsRef.current = true;
                                    }
                                    // Track if user-settings has specific voice/music presets (not from preset)
                                    if (result.data.selectedVoicePreset || result.data.selectedMusicPreset) {
                                        hasUserVoiceMusicPresetsRef.current = true;
                                    }
                                }
                            }
                            setUserSettingsLoaded(true);
                        }
                    }
                }["CreateVideoForm.useEffect"]).finally({
                    "CreateVideoForm.useEffect": ()=>{
                        setAutoFilling(false);
                        setIsFormReady(true);
                    }
                }["CreateVideoForm.useEffect"]);
            } else if (!avatarsLoading && (avatars.custom.length > 0 || avatars.default.length > 0) && !user?.email) {
                // If avatars are loaded but no user email, form is ready
                setIsFormReady(true);
            }
        }
    }["CreateVideoForm.useEffect"], [
        avatarsLoading,
        avatars.custom.length,
        avatars.default.length,
        user?.email,
        fetchUserSettings,
        userSettingsLoaded,
        watch
    ]);
    // Check if all data is loaded (used for other components)
    // const isDataLoading = avatarsLoading || scheduleLoading || autoFilling || !isFormReady
    // Toggle schedule mode
    const handleToggleScheduleMode = ()=>{
        setIsScheduleMode(!isScheduleMode);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (user?.email) {
                setValue('email', user.email);
            }
        }
    }["CreateVideoForm.useEffect"], [
        user?.email,
        setValue
    ]);
    // Set default language to English if not set (only after user-settings have been checked)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            // Only set default if user-settings have been loaded (or if no user email, meaning no settings to load)
            if (userSettingsLoaded || !user?.email) {
                const currentLanguage = watch('language');
                if (!currentLanguage || currentLanguage.trim() === '') {
                    setValue('language', 'English', {
                        shouldValidate: false,
                        shouldDirty: false
                    });
                }
            }
        }
    }["CreateVideoForm.useEffect"], [
        watch,
        setValue,
        userSettingsLoaded,
        user?.email
    ]);
    // Reset preset, voice, and music fields when gender changes and APIs are called
    // Use a ref to track previous gender to avoid resetting on initial mount
    const prevGenderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            const currentGender = gender && String(gender).trim().length > 0 ? String(gender).trim() : null;
            // Only reset if gender actually changed (not on initial mount when gender is set from user settings)
            if (currentGender && currentGender !== prevGenderRef.current) {
                console.log('🔄 Resetting preset, voice, and music fields due to gender change:', {
                    previousGender: prevGenderRef.current,
                    newGender: currentGender
                });
                setValue('preset', '', {
                    shouldValidate: false,
                    shouldDirty: false
                });
                setValue('voice', '', {
                    shouldValidate: false,
                    shouldDirty: false
                });
                setValue('music', '', {
                    shouldValidate: false,
                    shouldDirty: false
                });
                setCurrentVoiceType(null);
                setCurrentMusicType(null);
                // Also reset the selected voice and music state
                setSelectedVoice(null);
                setSelectedMusic(null);
                setIsVoiceManuallySelected(false);
            }
            // Update ref to track current gender
            prevGenderRef.current = currentGender;
        }
    }["CreateVideoForm.useEffect"], [
        gender,
        setValue
    ]);
    // Focus custom topic input when it becomes visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (showCustomTopicInput) {
                // Small delay to ensure the input is rendered
                setTimeout({
                    "CreateVideoForm.useEffect": ()=>{
                        const customTopicInput = document.querySelector('input[placeholder="Enter your custom topic"]');
                        if (customTopicInput) {
                            customTopicInput.focus();
                        }
                    }
                }["CreateVideoForm.useEffect"], 100);
            }
        }
    }["CreateVideoForm.useEffect"], [
        showCustomTopicInput
    ]);
    // Auto-dismiss error after 10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateVideoForm.useEffect": ()=>{
            if (error) {
                const timeoutId = setTimeout({
                    "CreateVideoForm.useEffect.timeoutId": ()=>{
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearVideoError"])());
                    }
                }["CreateVideoForm.useEffect.timeoutId"], 10000) // 10 seconds
                ;
                return ({
                    "CreateVideoForm.useEffect": ()=>{
                        clearTimeout(timeoutId);
                    }
                })["CreateVideoForm.useEffect"];
            }
        }
    }["CreateVideoForm.useEffect"], [
        error,
        dispatch
    ]);
    const onSubmit = async (data)=>{
        console.log('selectedAvatars', selectedAvatars);
        if (!selectedAvatars.title || !selectedAvatars.body || !selectedAvatars.conclusion) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])('Please select 3 avatars before submitting'));
            return;
        }
        // Validate that either videoTopic or custom topic is provided
        if (showCustomTopicInput) {
            if (!customTopicValue.trim()) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])('Please enter a custom topic'));
                return;
            }
            // Use custom topic value for submission
            data.videoTopic = customTopicValue.trim();
        } else {
            // Ensure videoTopic is provided when not using custom topic
            if (!data.videoTopic || !data.videoTopic.trim()) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])('Please select a video topic'));
                return;
            }
        }
        // Set default prompt value if not provided (since field was removed from UI)
        if (!data.prompt || !data.prompt.trim()) {
            data.prompt = 'Shawheen V1';
        }
        // Debug: Log form data before submission
        console.log('🚀 Form submission starting...', {
            hasAvatars: !!(selectedAvatars.title && selectedAvatars.body && selectedAvatars.conclusion),
            hasVideoTopic: !!(data.videoTopic?.trim() || customTopicValue.trim()),
            prompt: data.prompt,
            formData: data
        });
        // Check video usage limit and payment status before proceeding
        try {
            const usageCheck = await checkVideoUsageLimit();
            if (!usageCheck.canCreateVideo) {
                // Check if it's a pending payment issue
                if (usageCheck.message?.includes('payment is still being processed')) {
                    setPendingPaymentMessage(usageCheck.message);
                    setShowPendingPaymentToast(true);
                } else if (usageCheck.message?.includes('No active subscription found') || usageCheck.message?.includes('Please subscribe')) {
                    setSubscriptionRequiredMessage(usageCheck.message);
                    setShowSubscriptionRequiredToast(true);
                } else {
                    setUsageToastMessage(usageCheck.message || 'Video limit reached');
                    setShowUsageToast(true);
                }
                return;
            }
        } catch (error) {
            console.error('Failed to check video usage:', error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])('Unable to verify subscription status. Please try again.'));
            return;
        }
        // Save selected avatars using custom hook
        try {
            const avatarsToSave = {
                title: {
                    avatar_id: selectedAvatars.title.avatar_id,
                    avatar_name: selectedAvatars.title.avatar_name || selectedAvatars.title.name || '',
                    preview_image_url: selectedAvatars.title.preview_image_url || selectedAvatars.title.imageUrl || '',
                    avatarType: selectedAvatars.title.avatarType || (selectedAvatars.title.preview_video_url ? 'video_avatar' : 'photo_avatar')
                },
                body: {
                    avatar_id: selectedAvatars.body.avatar_id,
                    avatar_name: selectedAvatars.body.avatar_name || selectedAvatars.body.name || '',
                    preview_image_url: selectedAvatars.body.preview_image_url || selectedAvatars.body.imageUrl || '',
                    avatarType: selectedAvatars.body.avatarType || (selectedAvatars.body.preview_video_url ? 'video_avatar' : 'photo_avatar')
                },
                conclusion: {
                    avatar_id: selectedAvatars.conclusion.avatar_id,
                    avatar_name: selectedAvatars.conclusion.avatar_name || selectedAvatars.conclusion.name || '',
                    preview_image_url: selectedAvatars.conclusion.preview_image_url || selectedAvatars.conclusion.imageUrl || '',
                    avatarType: selectedAvatars.conclusion.avatarType || (selectedAvatars.conclusion.preview_video_url ? 'video_avatar' : 'photo_avatar')
                }
            };
            saveSelectedAvatars(avatarsToSave);
        } catch (error) {
            console.error('Failed to save avatars:', error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])('Failed to save avatar selection. Please try again.'));
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoLoading"])(true));
        try {
            // Ensure language is included in the data
            const videoData = {
                ...data,
                language: data.language || watch('language') || 'English'
            };
            // Make API call using apiService
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createVideo(videoData);
            if (!result.success) {
                throw new Error(result.message || 'Failed to create video');
            }
            // Extract webhook response data
            const webhookData = result.data.webhookResponse;
            // Use the original form data for fields that weren't returned by webhook
            const decodedResponse = {
                prompt: decodeURIComponent(webhookData?.hook || ''),
                description: decodeURIComponent(webhookData?.body || ''),
                conclusion: decodeURIComponent(webhookData?.conclusion || ''),
                company_name: webhookData?.company_name || webhookData?.companyName || data.companyName,
                social_handles: webhookData?.social_handles || webhookData?.socialHandles || data.socialHandles,
                license: webhookData?.license || data.license,
                avatar: webhookData?.avatar || data.avatar,
                email: webhookData?.email || data.email,
                voice_id: selectedVoice?.id || data.voice || '',
                music_url: selectedMusic?.s3FullTrackUrl || ''
            };
            setWebhookResponse(decodedResponse);
            // Create video request object for Redux
            const videoRequest = {
                requestId: result.data.requestId,
                prompt: data.prompt,
                avatar: data.avatar,
                name: data.name,
                position: data.position,
                companyName: data.companyName,
                license: data.license,
                tailoredFit: data.tailoredFit,
                socialHandles: data.socialHandles,
                videoTopic: data.videoTopic,
                topicKeyPoints: data.topicKeyPoints,
                city: data.city,
                preferredTone: data.preferredTone,
                callToAction: data.callToAction,
                email: data.email,
                timestamp: result.data.timestamp,
                status: result.data.status,
                webhookResponse: result.data.webhookResponse
            };
            // Store in Redux (this will also save videoTopic to state)
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVideoRequest"])(videoRequest));
            // Call user-settings API to store video information
            const userSettingsPayload = {
                prompt: data.prompt,
                avatar: [
                    selectedAvatars.title?.avatar_id || '',
                    selectedAvatars.body?.avatar_id || '',
                    selectedAvatars.conclusion?.avatar_id || ''
                ].filter((id)=>id !== ''),
                // Add the three selected avatars separately with avatar_id and avatarType in single structure
                titleAvatar: {
                    avatar_id: selectedAvatars.title?.avatar_id || '',
                    avatarType: selectedAvatars.title?.avatarType || (selectedAvatars.title?.preview_video_url ? 'video_avatar' : 'photo_avatar')
                },
                bodyAvatar: {
                    avatar_id: selectedAvatars.body?.avatar_id || '',
                    avatarType: selectedAvatars.body?.avatarType || (selectedAvatars.body?.preview_video_url ? 'video_avatar' : 'photo_avatar')
                },
                conclusionAvatar: {
                    avatar_id: selectedAvatars.conclusion?.avatar_id || '',
                    avatarType: selectedAvatars.conclusion?.avatarType || (selectedAvatars.conclusion?.preview_video_url ? 'video_avatar' : 'photo_avatar')
                },
                name: data.name,
                position: data.position,
                language: data.language || watch('language') || 'English',
                preset: data.preset || '',
                companyName: data.companyName,
                license: data.license,
                tailoredFit: data.tailoredFit,
                socialHandles: data.socialHandles,
                city: data.city,
                preferredTone: data.preferredTone,
                callToAction: data.callToAction,
                email: data.email,
                gender: data.gender,
                voice: data.voice,
                selectedVoiceId: selectedVoice?.id || data.voice || '',
                selectedMusicTrackId: selectedMusic?._id || selectedMusic?.id || data.music || '',
                selectedVoicePreset: selectedVoice?.energy || selectedVoice?.type || '',
                selectedMusicPreset: selectedMusic?.energyCategory || selectedMusic?.type || '',
                videoCaption: data.videoCaption || ''
            };
            const userSettingsResult = await saveUserSettings(userSettingsPayload);
            if (!userSettingsResult.success) {
                console.error('Failed to store user settings:', userSettingsResult.error);
            } else {
                console.log('✅ User settings stored successfully with all avatar IDs');
            }
            setIsModalOpen(true);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearVideoError"])());
        // Note: Form fields are NOT reset to preserve user data for next submission
        // setTimeout(() => {
        //   reset()
        // }, 100)
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])(error.message || 'Failed to create video'));
        } finally{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoLoading"])(false));
        }
    };
    const handleDropdownSelect = (field, value)=>{
        setOpenDropdown(null);
        setTimeout(()=>{
            if (field === 'avatar') {
                setValue('avatar', '');
                setValue('avatar', value);
            } else if (field === 'preset') {
                // When preset is manually changed, reset the refs to allow random selection
                presetFromUserSettingsRef.current = false;
                hasUserVoiceMusicPresetsRef.current = false; // Reset when user manually changes preset
                setValue('preset', value, {
                    shouldValidate: true,
                    shouldDirty: true
                });
                trigger('preset');
            } else if (field === 'gender') {
                // When gender is selected, update the form value
                // The useVoicesAndMusic hook will automatically detect the change and trigger API calls
                console.log('🎵 Gender selected from dropdown:', value);
                setValue('gender', value, {
                    shouldValidate: true,
                    shouldDirty: true
                });
                trigger('gender');
            // Force re-render by updating the watched value
            // The watch('gender') in the hook will detect this change
            } else if (field === 'voice') {
                const voice = voices.find((v)=>v.id === value);
                if (voice) {
                    // Mark that user has manually selected a voice (prevents auto-select from overriding)
                    setIsVoiceManuallySelected(true);
                    setSelectedVoice(voice);
                // Don't sync music - voice and music are independent
                }
                setValue('voice', value);
                trigger('voice');
            } else if (field === 'music') {
                const music = musicList.find((m)=>m.id === value);
                if (music) {
                    setSelectedMusic(music);
                // Don't sync voice - voice and music are independent
                }
                setValue('music', value);
                trigger('music');
            } else if (field === 'videoTopic') {
                setValue('videoTopic', value, {
                    shouldValidate: true,
                    shouldDirty: true
                });
                // Hide custom topic field when a trend is selected
                setShowCustomTopicInput(false);
                setCustomTopicValue('');
                // Clear key points loading and error states
                setKeyPointsLoading(false);
                setKeyPointsError(null);
                const selectedTrend = allTrends.find((trend)=>trend.description === value);
                if (selectedTrend) {
                    setValue('topicKeyPoints', selectedTrend.keypoints, {
                        shouldValidate: true,
                        shouldDirty: true
                    });
                }
            } else {
                setValue(field, value);
            }
            trigger(field);
        }, 50);
    };
    // Handle custom topic button click
    const handleCustomTopicClick = ()=>{
        setShowCustomTopicInput(true);
        setCustomTopicValue('');
        setLastApiTriggeredValue('');
        // Close the Video Topic dropdown immediately
        setOpenDropdown(null);
        // Clear the Video Topic field value
        setValue('videoTopic', '', {
            shouldValidate: false,
            shouldDirty: true
        });
        // Clear the topic key points when switching to custom mode
        setValue('topicKeyPoints', '', {
            shouldValidate: false,
            shouldDirty: true
        });
    };
    // Handle custom topic input change
    const handleCustomTopicChange = (e)=>{
        const value = e.target.value;
        setCustomTopicValue(value);
        // Mark form as manually touched
        setFormManuallyTouched(true);
        if (!value || !value.trim()) {
            setValue('topicKeyPoints', '', {
                shouldValidate: false,
                shouldDirty: true
            });
            setKeyPointsLoading(false);
            setKeyPointsError(null);
            setLastApiTriggeredValue('');
        }
    };
    // Handle custom topic blur - generate key points
    const handleCustomTopicBlur = ()=>{
        if (customTopicValue && customTopicValue.trim()) {
            // Don't trigger API if value hasn't changed since last API call
            if (customTopicValue.trim() === lastApiTriggeredValue) return;
            // Don't update videoTopic immediately - wait for API confirmation
            generateCustomTopicKeyPoints(customTopicValue);
        }
    };
    const handleDropdownToggle = (field)=>{
        const isOpen = openDropdown === field;
        setOpenDropdown(isOpen ? null : field);
    };
    const renderDropdown = (field, options, placeholder)=>{
        const currentValue = watch(field) || '';
        const isOpen = openDropdown === field;
        // Filter errors for consistency - only show errors after manual interaction or submit attempt
        // Check both formManuallyTouched and submitAttempted to ensure errors show on first submit
        const shouldShowErrors = formManuallyTouched || submitAttempted;
        const filteredErrors = shouldShowErrors ? errors : {};
        const hasError = filteredErrors[field];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            field: field,
            options: options,
            placeholder: placeholder,
            currentValue: currentValue,
            isOpen: isOpen,
            hasError: hasError,
            register: register,
            errors: filteredErrors,
            onToggle: handleDropdownToggle,
            onSelect: handleDropdownSelect,
            onBlur: ()=>{},
            // Avatar-specific props
            isAvatarField: field === 'avatar',
            isFromDefaultAvatar: isFromDefaultAvatar,
            extendedAvatarOptions: extendedAvatarOptions,
            avatars: avatars,
            avatarsLoading: avatarsLoading,
            avatarsError: avatarsError,
            selectedAvatars: selectedAvatars,
            onFetchAvatars: fetchAvatars,
            onAvatarClick: handleAvatarClick,
            onDragStart: handleDragStart,
            onDragEnd: handleDragEnd,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            onRemoveAvatar: handleRemoveAvatar,
            onClearAllAvatars: handleClearAllAvatars,
            isAvatarSelected: isAvatarSelected,
            isAvatarTypeAllowed: isAvatarTypeAllowed,
            isAvatarPending: isAvatarPending,
            getAvatarSelectionNumber: getAvatarSelectionNumber,
            getAvatarType: getAvatarType
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
            lineNumber: 1500,
            columnNumber: 7
        }, this);
    };
    const renderVoiceSelector = (field, placeholder)=>{
        // Pass ALL voices to VoiceSelector - it will filter internally based on voiceType
        // VoiceSelector has its own voiceType state that controls filtering
        // Filter errors for consistency - only show errors after manual interaction or submit attempt
        // Check both formManuallyTouched and submitAttempted to ensure errors show on first submit
        const shouldShowErrors = formManuallyTouched || submitAttempted;
        const filteredErrors = shouldShowErrors ? errors : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$voice$2d$selector$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            field: field,
            placeholder: placeholder,
            watch: watch,
            register: register,
            errors: filteredErrors,
            trigger: trigger,
            openDropdown: openDropdown,
            selectedVoice: selectedVoice,
            voices: allVoices.length > 0 ? allVoices : voices,
            voicesLoading: voicesLoading,
            voicesError: voicesError,
            preset: preset,
            initialVoiceType: currentVoiceType,
            onToggle: handleDropdownToggle,
            onSelect: handleDropdownSelect,
            onVoiceClick: handleVoiceClick,
            onVoiceTypeChange: handleVoiceTypeChange,
            onDragStart: handleVoiceDragStart,
            onDragEnd: handleVoiceDragEnd,
            onDragOver: handleVoiceDragOver,
            onDragLeave: handleVoiceDragLeave,
            onDrop: handleVoiceDrop
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
            lineNumber: 1549,
            columnNumber: 7
        }, this);
    };
    const renderMusicSelector = (field, placeholder)=>{
        // Pass ALL music to MusicSelector - it will filter internally based on voiceType (used for music too)
        // VoiceSelector component (used for music) has its own voiceType state that controls filtering
        // Filter errors for consistency - only show errors after manual interaction or submit attempt
        // Check both formManuallyTouched and submitAttempted to ensure errors show on first submit
        const shouldShowErrors = formManuallyTouched || submitAttempted;
        const filteredErrors = shouldShowErrors ? errors : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$music$2d$selector$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            field: field,
            placeholder: placeholder,
            watch: watch,
            register: register,
            errors: filteredErrors,
            trigger: trigger,
            openDropdown: openDropdown,
            selectedMusic: selectedMusic,
            musicList: allMusic.length > 0 ? allMusic : musicList,
            musicLoading: musicLoading,
            musicError: musicError,
            preset: preset,
            initialMusicType: currentMusicType,
            onToggle: handleDropdownToggle,
            onSelect: handleDropdownSelect,
            onMusicClick: handleMusicClick,
            onMusicTypeChange: handleMusicTypeChange,
            onDragStart: handleMusicDragStart,
            onDragEnd: handleMusicDragEnd,
            onDragOver: handleMusicDragOver,
            onDragLeave: handleMusicDragLeave,
            onDrop: handleMusicDrop
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
            lineNumber: 1587,
            columnNumber: 7
        }, this);
    };
    const renderTrendsDropdown = (field, placeholder)=>{
        const currentValue = watch(field);
        // Filter layer: Only show dropdown value if it exists in the options
        const isValidDropdownValue = allTrends.some((trend)=>trend.description === currentValue);
        const displayValue = isValidDropdownValue ? currentValue : '';
        const selectedTrend = allTrends.find((trend)=>trend.description === displayValue);
        const isOpen = openDropdown === field;
        // Filter errors for consistency - only show errors after manual interaction or submit attempt
        // Check both formManuallyTouched and submitAttempted to ensure errors show on first submit
        const shouldShowErrors = formManuallyTouched || submitAttempted;
        const filteredErrors = shouldShowErrors ? errors : {};
        // Hide error for videoTopic when custom topic input is shown
        const hasError = showCustomTopicInput && field === 'videoTopic' ? null : filteredErrors[field];
        // Use only city trends loading states
        const isLoading = cityTrendsLoading;
        // Show missing fields error in videoTopic dropdown
        const combinedError = field === 'videoTopic' && missingFieldsError ? missingFieldsError : cityTrendsError;
        // Check if both city and position are filled to show "Add Custom Topic" button
        const cityValue = watch('city');
        const positionValue = watch('position');
        const canShowCustomTopic = cityValue && cityValue.trim() && positionValue && positionValue.trim();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$hybrid$2d$topic$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            field: field,
            placeholder: placeholder,
            currentValue: displayValue || '',
            selectedTrend: selectedTrend,
            isOpen: isOpen,
            hasError: hasError,
            trendsLoading: isLoading,
            trendsError: combinedError,
            safeTrends: allTrends,
            onToggle: handleDropdownToggle,
            onSelect: handleDropdownSelect,
            onBlur: ()=>{},
            onRetry: ()=>{
                if (cityValue && cityValue.trim() && positionValue && positionValue.trim()) {
                    fetchCityTrends(cityValue, positionValue);
                }
            },
            onCustomTopicClick: canShowCustomTopic ? handleCustomTopicClick : undefined
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
            lineNumber: 1646,
            columnNumber: 7
        }, this);
    };
    const renderInput = (field, placeholder, type = 'text', autoComplete)=>{
        const isDisabled = field === 'email';
        // Filter errors for prefilled forms - only show errors after manual interaction or submit attempt
        // Check both formManuallyTouched and submitAttempted to ensure errors show on first submit
        const shouldShowErrors = formManuallyTouched || submitAttempted;
        const filteredErrors = shouldShowErrors ? errors : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            field: field,
            placeholder: placeholder,
            type: type,
            autoComplete: autoComplete,
            register: register,
            errors: filteredErrors,
            disabled: isDisabled,
            onChange: handleFormFieldChange
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
            lineNumber: 1683,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full max-w-[1260px] mx-auto ${className} relative`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$loading$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                avatarsLoading: avatarsLoading,
                autoFilling: autoFilling,
                isFormReady: isFormReady,
                hasUserEmail: !!user?.email
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Fill the details to create video",
                onSchedulePost: ()=>setShowScheduleModal(true),
                userEmail: user?.email,
                isScheduleMode: isScheduleMode,
                onToggleScheduleMode: handleToggleScheduleMode
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1704,
                columnNumber: 7
            }, this),
            showSuccessToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-5 h-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1715,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                            lineNumber: 1714,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-green-800 font-semibold",
                                    children: "Success!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                    lineNumber: 1718,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-700 text-sm",
                                    children: "Your video request has been submitted successfully."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                    lineNumber: 1719,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                            lineNumber: 1717,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                    lineNumber: 1713,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1712,
                columnNumber: 9
            }, this),
            isScheduleMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$schedule$2d$interface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onStartScheduling: ()=>setShowScheduleModal(true),
                autoScheduleData: autoScheduleData,
                onScheduleDeleted: fetchSchedule
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1725,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit, (errors)=>{
                    try {
                        const summarized = Object.fromEntries(Object.entries(errors).map(([key, value])=>[
                                key,
                                value?.message || ''
                            ]));
                        console.log('Form errors summary:', summarized);
                    } catch  {
                    // no-op
                    }
                    setSubmitAttempted(true);
                    if (Object.keys(errors).length > 0) {
                        setFormManuallyTouched(true);
                        const firstError = Object.values(errors)[0];
                        if (firstError && 'message' in firstError) {
                            const errorMessage = firstError.message || 'Please fix form errors';
                            showNotification(errorMessage, 'error');
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$slices$2f$videoSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVideoError"])(errorMessage));
                        }
                    }
                }),
                className: "space-y-7",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-red-800 font-semibold",
                                            children: "Error"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                            lineNumber: 1756,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-700 text-sm",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                            lineNumber: 1757,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                    lineNumber: 1755,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                            lineNumber: 1753,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1752,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
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
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1765,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1764,
                                        columnNumber: 13
                                    }, this),
                                    renderInput('name', 'e.g. John Smith', 'text', 'name')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1763,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Avatar ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1771,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1770,
                                        columnNumber: 13
                                    }, this),
                                    renderDropdown('avatar', avatarOptions, 'Select Option')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Position ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1777,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1776,
                                        columnNumber: 13
                                    }, this),
                                    renderDropdown('position', positionOptions, 'Select Option')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1775,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Company Name ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1783,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1782,
                                        columnNumber: 13
                                    }, this),
                                    renderInput('companyName', 'e.g. Keller Williams', 'text', 'organization')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1781,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1762,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$configs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["row2Fields"],
                        register: register,
                        errors: errors,
                        columns: "4",
                        watch: watch,
                        trigger: trigger,
                        openDropdown: openDropdown,
                        onDropdownToggle: (field)=>handleDropdownToggle(field),
                        onDropdownSelect: (field, value)=>handleDropdownSelect(field, value)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1788,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$form$2d$field$2d$configs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["row3Fields"],
                        register: register,
                        errors: errors,
                        columns: "4",
                        watch: watch,
                        trigger: trigger,
                        openDropdown: openDropdown,
                        onDropdownToggle: (field)=>handleDropdownToggle(field),
                        onDropdownSelect: (field, value)=>handleDropdownSelect(field, value),
                        onCityBlur: (city)=>{
                            const positionValue = watch('position');
                            fetchCityTrends(city, positionValue);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                        children: [
                            gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Preset ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1818,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1817,
                                        columnNumber: 13
                                    }, this),
                                    renderDropdown('preset', presetOptions, 'Select Preset')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1816,
                                columnNumber: 11
                            }, this),
                            gender && watch('preset') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Voice ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1827,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1826,
                                        columnNumber: 15
                                    }, this),
                                    renderVoiceSelector('voice', 'Select Voice')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1825,
                                columnNumber: 13
                            }, this),
                            selectedVoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: "Music"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1835,
                                        columnNumber: 15
                                    }, this),
                                    renderMusicSelector('music', 'Select Music')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1834,
                                columnNumber: 13
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
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1843,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1842,
                                        columnNumber: 13
                                    }, this),
                                    renderDropdown('language', languageOptions, 'Select Language')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1841,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Video Topic ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1850,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1849,
                                        columnNumber: 13
                                    }, this),
                                    renderTrendsDropdown('videoTopic', 'Select a trend')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1848,
                                columnNumber: 11
                            }, this),
                            showCustomTopicInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Custom Topic ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1859,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1858,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: customTopicValue,
                                        onChange: handleCustomTopicChange,
                                        onBlur: handleCustomTopicBlur,
                                        placeholder: "Enter your custom topic",
                                        className: `w-full px-4 py-[10.5px] text-[18px] font-normal bg-[#EEEEEE] hover:bg-[#F5F5F5] border-0 rounded-[8px] text-left transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white text-gray-800 ${!customTopicValue.trim() && formManuallyTouched ? 'ring-2 ring-red-500' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1861,
                                        columnNumber: 15
                                    }, this),
                                    !customTopicValue.trim() && formManuallyTouched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                        role: "alert",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1871,
                                                columnNumber: 20
                                            }, this),
                                            "Please enter a custom topic"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1870,
                                        columnNumber: 18
                                    }, this),
                                    keyPointsError && showCustomTopicInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                        role: "alert",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1877,
                                                columnNumber: 17
                                            }, this),
                                            keyPointsError.length > 50 ? `${keyPointsError.substring(0, 50)}...` : keyPointsError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1876,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1857,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: [
                                            "Topic Key Points ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1886,
                                                columnNumber: 32
                                            }, this),
                                            keyPointsLoading && showCustomTopicInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600 text-sm ml-2",
                                                children: "Generating key points..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                lineNumber: 1888,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1885,
                                        columnNumber: 13
                                    }, this),
                                    (()=>{
                                        const isCustomTopic = showCustomTopicInput && customTopicValue && customTopicValue.trim();
                                        const placeholder = isCustomTopic ? 'Key points will generate' : 'Key points will auto-fill';
                                        const shouldShowErrors = formManuallyTouched || submitAttempted;
                                        const filteredErrors = shouldShowErrors ? errors : {};
                                        const error = filteredErrors['topicKeyPoints'];
                                        const { onChange: registerOnChange, ...registerProps } = register('topicKeyPoints');
                                        const currentValue = watch('topicKeyPoints') || '';
                                        const wordCount = (currentValue || '').trim().split(/\s+/).filter(Boolean).length;
                                        const isShortContent = wordCount <= 3;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ...registerProps,
                                                    placeholder: placeholder,
                                                    rows: isShortContent ? 1 : 2,
                                                    onChange: (e)=>{
                                                        registerOnChange(e);
                                                        handleFormFieldChange();
                                                    },
                                                    "aria-describedby": error ? 'topicKeyPoints-error' : undefined,
                                                    "aria-invalid": error ? 'true' : 'false',
                                                    className: `w-full px-4 py-[10.5px] ${isShortContent ? 'text-[18px]' : 'text-[14px]'} font-normal placeholder:text-[#11101066] border-0 rounded-[8px] text-gray-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white resize-none
                    ${error ? 'ring-2 ring-red-500' : ''}
                    bg-[#EEEEEE] hover:bg-[#F5F5F5]`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                    lineNumber: 1904,
                                                    columnNumber: 19
                                                }, this),
                                                error?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "topicKeyPoints-error",
                                                    className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                                    role: "alert",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                            lineNumber: 1924,
                                                            columnNumber: 23
                                                        }, this),
                                                        typeof error.message === 'string' ? error.message : String(error.message)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                            lineNumber: 1903,
                                            columnNumber: 17
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1884,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[16px] font-normal text-[#5F5F5F] mb-1",
                                        children: "Video Caption"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1935,
                                        columnNumber: 13
                                    }, this),
                                    renderDropdown('videoCaption', videoCaptionOptions, 'Please select an option'),
                                    watch('videoCaption') === 'yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 ml-2 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-[10px] leading-[13px] max-w-[280px]",
                                            children: "Video captions are generated using OpenAI, and may occasionally appear unexpected."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                            lineNumber: 1941,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                        lineNumber: 1940,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                                lineNumber: 1934,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1814,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$selection$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedAvatars: selectedAvatars
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1951,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$submit$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isLoading: isLoading,
                        disabled: !selectedAvatars.title || !selectedAvatars.body || !selectedAvatars.conclusion || !watch('videoTopic')?.trim() && !customTopicValue.trim() || !watch('preset') || !watch('voice') || !watch('music') || !watch('language'),
                        loadingText: "This Proccess will take up to 30-50 seconds",
                        buttonText: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                        lineNumber: 1953,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1731,
                columnNumber: 7
            }, this),
            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>{
                    setOpenDropdown(null);
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1971,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$video$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>{
                    setIsModalOpen(false);
                    setWebhookResponse(null); // Clear webhookResponse when modal closes
                },
                videoTitle: formDataForModal?.prompt || 'Custom Video',
                webhookResponse: webhookResponse
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1978,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$usage$2d$limit$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showUsageToast,
                message: usageToastMessage,
                onClose: ()=>setShowUsageToast(false),
                onUpgrade: ()=>{
                    // Handle upgrade action
                    console.log('User wants to upgrade subscription');
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showPendingPaymentToast,
                message: pendingPaymentMessage,
                context: "video",
                onClose: ()=>setShowPendingPaymentToast(false),
                onRefresh: async ()=>{
                    // Refresh subscription status
                    try {
                        const usageCheck = await checkVideoUsageLimit();
                        if (usageCheck.canCreateVideo) {
                            setShowPendingPaymentToast(false);
                        // Optionally show success message
                        } else if (usageCheck.message?.includes('payment is still being processed')) {
                            setPendingPaymentMessage(usageCheck.message);
                        } else {
                            setShowPendingPaymentToast(false);
                            setUsageToastMessage(usageCheck.message || 'Video limit reached');
                            setShowUsageToast(true);
                        }
                    } catch (error) {
                        console.error('Failed to refresh subscription status:', error);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 1996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showSubscriptionRequiredToast,
                message: subscriptionRequiredMessage,
                context: "video",
                onClose: ()=>setShowSubscriptionRequiredToast(false),
                onSubscribe: ()=>{
                    // Redirect to pricing page or scroll to pricing section
                    window.location.href = '/#pricing';
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$schedule$2d$post$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showScheduleModal,
                onClose: ()=>setShowScheduleModal(false),
                onNext: (scheduleData)=>{
                    console.log('Schedule data:', scheduleData);
                    setScheduleData(scheduleData);
                    setShowScheduleModal(false);
                    setShowConnectAccountsModal(true);
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 2030,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$connect$2d$accounts$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showConnectAccountsModal,
                onClose: ()=>{
                    fetchSchedule();
                    setShowConnectAccountsModal(false);
                },
                onNext: ()=>{
                    setShowConnectAccountsModal(false);
                },
                buttonText: "Schedule Post",
                scheduleData: scheduleData,
                onCreatePost: ()=>{
                    setShowConnectAccountsModal(false);
                // TODO: Implement post creation with schedule data
                },
                onScheduleCreated: fetchSchedule
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
                lineNumber: 2040,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/create-video-form.tsx",
        lineNumber: 1697,
        columnNumber: 5
    }, this);
}
_s(CreateVideoForm, "fZ6rVbXRS9rS0Ksq11WeFbw76dA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useAvatarStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvatarStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSchedule$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSchedule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useVoicesAndMusic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoicesAndMusic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useUserSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserSettings"]
    ];
});
_c = CreateVideoForm;
var _c;
__turbopack_context__.k.register(_c, "CreateVideoForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_task2_src_components_ui_create-video-form_tsx_811ed290._.js.map