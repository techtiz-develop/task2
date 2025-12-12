module.exports = [
"[project]/Desktop/task2/src/hooks/useCreatePost.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreatePost",
    ()=>useCreatePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const useCreatePost = ({ isOpen, onClose, onPost, selectedAccounts, video })=>{
    console.log("video", JSON?.stringify(video));
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [caption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedAccountIds, setSelectedAccountIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [apiResponse, setApiResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showResponse, setShowResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeAdjustmentMessage, setTimeAdjustmentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get user ID from Redux store
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.user?.id);
    // Get current date and time for restrictions
    const getCurrentDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return {
            date: `${year}-${month}-${day}`,
            time: `${hours}:${minutes}`
        };
    }, []);
    const { date: minDate, time: minTime } = getCurrentDateTime();
    // Get minimum time for today (current time + 3 minutes)
    const getMinTimeForToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const now = new Date();
        const minTime = new Date(now.getTime() + 3 * 60 * 1000) // Add 3 minutes
        ;
        return minTime.toTimeString().slice(0, 5);
    }, []);
    const minTimeForToday = getMinTimeForToday();
    // Initialize selected accounts when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && selectedAccounts.length > 0) {
            setSelectedAccountIds(selectedAccounts.map((account)=>account.id));
        }
    }, [
        isOpen,
        selectedAccounts
    ]);
    // Match selectedAccountIds with selectedAccounts and get complete account objects
    const matchedSelectedAccounts = selectedAccounts.filter((account)=>selectedAccountIds.includes(account.id));
    const handleAccountToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((accountId)=>{
        setSelectedAccountIds((prev)=>prev.includes(accountId) ? prev.filter((id)=>id !== accountId) : [
                ...prev,
                accountId
            ]);
    }, []);
    // Handle date change with automatic time adjustment
    const handleDateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newDate)=>{
        const selectedDate = new Date(newDate);
        const today = new Date();
        const isToday = selectedDate.toDateString() === today.toDateString();
        if (isToday && time) {
            const currentTime = new Date();
            const minTime = new Date(currentTime.getTime() + 3 * 60 * 1000) // Add 3 minutes
            ;
            const selectedTime = new Date(`${newDate}T${time}:00`);
            const minTimeForToday = new Date(`${newDate}T${minTime.toTimeString().slice(0, 5)}:00`);
            if (selectedTime < minTimeForToday) {
                const adjustedTime = minTime.toTimeString().slice(0, 5);
                setTimeAdjustmentMessage(`Time automatically adjusted to ${adjustedTime} (3 minutes from now)`);
                setTime(adjustedTime);
                setTimeout(()=>setTimeAdjustmentMessage(null), 5000);
            }
        }
        setDate(newDate);
    }, [
        time
    ]);
    // Handle time change with validation
    const handleTimeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newTime)=>{
        const selectedDate = new Date(date);
        const today = new Date();
        const isToday = selectedDate.toDateString() === today.toDateString();
        if (isToday) {
            const currentTime = new Date();
            const minTime = new Date(currentTime.getTime() + 3 * 60 * 1000) // Add 3 minutes
            ;
            const selectedTime = new Date(`${date}T${newTime}:00`);
            const minTimeForToday = new Date(`${date}T${minTime.toTimeString().slice(0, 5)}:00`);
            if (selectedTime < minTimeForToday) {
                const adjustedTime = minTime.toTimeString().slice(0, 5);
                setTimeAdjustmentMessage(`Time automatically adjusted to ${adjustedTime} (3 minutes from now)`);
                setTime(adjustedTime);
                setTimeout(()=>setTimeAdjustmentMessage(null), 5000);
                return;
            }
        }
        setTime(newTime);
    }, [
        date
    ]);
    const validateForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const errors = [];
        // Validate date
        if (!date || date.trim() === '') {
            errors.push('Date is required');
        } else if (date < minDate) {
            errors.push('Cannot select a past date');
        }
        // Validate time
        if (!time || time.trim() === '') {
            errors.push('Time is required');
        } else if (date === minDate) {
            // Check if selected time is at least 3 minutes from current time in user's timezone
            const formattedTime = time.includes(':') && time.split(':').length === 2 ? `${time}:00` : time;
            // Create selected date-time in user's local timezone
            const [hours, minutes, seconds = 0] = formattedTime.split(':').map(Number);
            const [year, month, day] = date.split('-').map(Number);
            const selectedDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
            // Get current time in user's local timezone
            const now = new Date();
            // Calculate time difference in minutes
            const timeDifference = selectedDateTime.getTime() - now.getTime();
            const minutesDifference = timeDifference / (60 * 1000);
            // Require at least 3 minutes difference
            if (minutesDifference < 2) {
                const minTime = new Date(now.getTime() + 3 * 60 * 1000);
                const minTimeString = minTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                errors.push(`Please select a time at least 3 minutes from now. Minimum time should be ${minTimeString}`);
            }
        }
        // Caption validation removed - using empty string
        // Validate video data
        if (!video || !video.title || video.title.trim() === '') {
            errors.push('Video title is required');
        }
        if (!video || !video.url && !video.videoUrl || video.url && video.url.trim() === '' || video.videoUrl && video.videoUrl.trim() === '') {
            errors.push('Video URL is required');
        }
        // Validate account selection
        if (selectedAccountIds.length === 0) {
            errors.push('Please select at least one account to post to');
        }
        return errors;
    }, [
        date,
        time,
        selectedAccountIds,
        video,
        minDate
    ]);
    // Real-time validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const errors = validateForm();
        setValidationErrors(errors);
    }, [
        validateForm
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        // Re-validate before submission to check current time in user's timezone
        const errors = validateForm();
        // Additional validation: Check if selected time is at least 3 minutes from now (for today only)
        if (date === minDate && time) {
            const formattedTime = time.includes(':') && time.split(':').length === 2 ? `${time}:00` : time;
            // Create selected date-time in user's local timezone
            const [hours, minutes, seconds = 0] = formattedTime.split(':').map(Number);
            const [year, month, day] = date.split('-').map(Number);
            const selectedDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
            // Get current time in user's local timezone
            const now = new Date();
            // Calculate time difference in minutes
            const timeDifference = selectedDateTime.getTime() - now.getTime();
            const minutesDifference = timeDifference / (60 * 1000);
            // If less than 3 minutes, add error
            if (minutesDifference < 2) {
                const minTime = new Date(now.getTime() + 3 * 60 * 1000);
                const minTimeString = minTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                const errorMsg = `Please select a time at least 3 minutes from now. Minimum time should be ${minTimeString}`;
                if (!errors.includes(errorMsg)) {
                    errors.push(errorMsg);
                }
            }
        }
        // Update validation errors state
        setValidationErrors(errors);
        // Check if there are any validation errors
        if (errors.length > 0) {
            return; // Don't submit if there are validation errors
        }
        setIsSubmitting(true);
        setApiResponse(null);
        setShowResponse(false);
        try {
            // Format time to include seconds
            const formattedTime = time.includes(':') && time.split(':').length === 2 ? `${time}:00` : time;
            // Create local date-time from selected date and time
            // Format: YYYY-MM-DDTHH:mm:ss (local timezone)
            const localDateTime = `${date}T${formattedTime}`;
            const localDate = new Date(localDateTime);
            // Convert to UTC ISO string
            const utcTime = localDate.toISOString();
            // Extract UTC date and time (date might have changed if timezone offset moves to previous day)
            // e.g., if local is Nov 1 4:30 AM and timezone is UTC+5, UTC will be Oct 31 11:30 PM
            const utcDate = utcTime.split('T')[0]; // YYYY-MM-DD format
            const timeOnly = utcTime.split('T')[1].split('.')[0];
            const requestBody = {
                accountIds: selectedAccountIds,
                name: video.title || '',
                videoUrl: video.videoUrl || video.url || '',
                date: utcDate,
                time: timeOnly,
                caption: 'Caption',
                userId: userId,
                selectedAccounts: selectedAccounts.filter((account)=>selectedAccountIds.includes(account.id)),
                instagram_caption: video.socialMediaCaptions?.instagram_caption || '',
                facebook_caption: video.socialMediaCaptions?.facebook_caption || '',
                linkedin_caption: video.socialMediaCaptions?.linkedin_caption || '',
                twitter_caption: video.socialMediaCaptions?.twitter_caption || '',
                tiktok_caption: video.socialMediaCaptions?.tiktok_caption || '',
                youtube_caption: video.socialMediaCaptions?.youtube_caption || ''
            };
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.MEDIA_CREATE_POST), {
                method: 'POST',
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
                body: JSON.stringify(requestBody)
            });
            const responseData = await response.json();
            setApiResponse(responseData);
            setShowResponse(true);
            if (response.ok && responseData.success) {
                // Show success notification
                if (window.showNotification) {
                    window.showNotification({
                        type: 'success',
                        title: 'Post Created Successfully',
                        message: 'Your post has been scheduled successfully!',
                        duration: 5000
                    });
                }
                // Call the original onPost callback for any additional handling
                const selectedAccountsForPost = selectedAccounts.filter((account)=>selectedAccountIds.includes(account.id));
                const postData = {
                    date,
                    time,
                    caption: '',
                    accounts: selectedAccountsForPost,
                    video
                };
                onPost(postData);
                // Clear form data after successful submission
                setDate('');
                setTime('');
                setSelectedAccountIds([]);
                setValidationErrors([]);
            } else {
                // Handle API error response
                console.error('API Error:', responseData);
                const errorMessage = responseData.error || responseData.message || 'Failed to create post';
                setApiResponse({
                    success: false,
                    error: errorMessage,
                    message: responseData.message || 'An error occurred while creating the post'
                });
                setShowResponse(true);
                // Show notification
                if (window.showNotification) {
                    window.showNotification({
                        type: 'error',
                        title: 'Post Failed',
                        message: errorMessage,
                        duration: 8000
                    });
                }
            }
        } catch (error) {
            console.error('Error creating post:', error);
            const errorMessage = 'Failed to create post. Please try again.';
            setApiResponse({
                success: false,
                error: errorMessage,
                message: errorMessage
            });
            setShowResponse(true);
            // Show notification for network/other errors
            if (window.showNotification) {
                window.showNotification({
                    type: 'error',
                    title: 'Network Error',
                    message: errorMessage,
                    duration: 8000
                });
            }
        } finally{
            setIsSubmitting(false);
        }
    }, [
        validateForm,
        date,
        time,
        selectedAccountIds,
        video,
        caption,
        userId,
        selectedAccounts,
        onPost,
        minDate
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setDate('');
        setTime('');
        setSelectedAccountIds([]);
        setIsSubmitting(false);
        setApiResponse(null);
        setShowResponse(false);
        setValidationErrors([]);
        onClose();
    }, [
        onClose
    ]);
    return {
        // State
        date,
        setDate: handleDateChange,
        time,
        setTime: handleTimeChange,
        selectedAccountIds,
        matchedSelectedAccounts,
        isSubmitting,
        apiResponse,
        showResponse,
        validationErrors,
        minDate,
        minTime: minTimeForToday,
        timeAdjustmentMessage,
        // Handlers
        handleAccountToggle,
        handleSubmit,
        handleClose,
        validateForm
    };
};
}),
"[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditCaptionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
function EditCaptionModal({ isOpen, onClose, onSave, account, initialCaption }) {
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCaption);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setCaption(initialCaption);
        }
    }, [
        isOpen,
        initialCaption
    ]);
    if (!isOpen || !account) return null;
    const handleSave = ()=>{
        onSave(caption);
        onClose();
    };
    const handleCancel = ()=>{
        setCaption(initialCaption);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[70] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-black",
                            children: "Edit Caption"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-black"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Account: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: account.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                        lineNumber: 59,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Caption ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                        lineNumber: 62,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: caption,
                                onChange: (e)=>setCaption(e.target.value),
                                placeholder: "Enter caption for this account...",
                                rows: 6,
                                maxLength: account.post_maxlength || 2200,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5046E5] resize-none text-sm text-black"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    caption.length,
                                    " / ",
                                    account.post_maxlength || 2200,
                                    " characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 p-6 border-t border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleSave,
                            className: "px-6 py-2 bg-[#5046E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors duration-200 font-medium",
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/account-selection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$utils$2f$socialMediaIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/utils/socialMediaIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$edit$2d$caption$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/edit-caption-modal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AccountSelection({ selectedAccounts, selectedAccountIds, isSubmitting, onAccountToggle, accountCaptions = {}, onCaptionUpdate }) {
    const [editingAccount, setEditingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (selectedAccounts.length === 0) {
        return null;
    }
    const handleEditClick = (e, account)=>{
        e.stopPropagation();
        if (!isSubmitting) {
            setEditingAccount(account);
            setIsModalOpen(true);
        }
    };
    const handleSaveCaption = (caption)=>{
        if (editingAccount && onCaptionUpdate) {
            onCaptionUpdate(editingAccount.id, caption);
        }
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        setEditingAccount(null);
    };
    const getAccountCaption = (account)=>{
        return accountCaptions[account.id] || '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: [
                    "Select accounts to post to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                        lineNumber: 59,
                        columnNumber: 36
                    }, this),
                    " (",
                    selectedAccountIds.length,
                    " selected)"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: selectedAccounts.map((account)=>{
                    const caption = getAccountCaption(account);
                    const isSelected = selectedAccountIds.includes(account.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-start gap-3 p-3 rounded-lg border-2 transition-colors ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${isSelected ? 'border-[#5046E5] bg-blue-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`,
                            onClick: ()=>!isSubmitting && onAccountToggle(account.id),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$utils$2f$socialMediaIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccountTypeIcon"])(account.type),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: account.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                isSelected && onCaptionUpdate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>handleEditClick(e, account),
                                                    className: "flex-shrink-0 p-1 hover:bg-blue-100 rounded transition-colors",
                                                    title: "Edit caption",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        className: "w-4 h-4 text-[#5046E5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-1",
                                            children: account._type
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        isSelected && caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 p-2 bg-white rounded border border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 line-clamp-2",
                                                children: caption
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 21
                                        }, this),
                                        isSelected && !caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 italic mt-1",
                                            children: "No caption set"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 ${isSelected ? 'border-[#5046E5] bg-[#5046E5]' : 'border-gray-300'}`,
                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3 text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                        lineNumber: 116,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this)
                    }, account.id, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            editingAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$edit$2d$caption$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: handleCloseModal,
                onSave: handleSaveCaption,
                account: editingAccount,
                initialCaption: getAccountCaption(editingAccount)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/account-selection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/scheduled-post/DatePicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DatePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/@mui/x-date-pickers/esm/AdapterDayjs/AdapterDayjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DatePicker({ value, onChange, placeholder = "Select Day", disabled = false, minDate }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (newValue)=>{
        if (newValue) {
            onChange(newValue.format('YYYY-MM-DD'));
        } else {
            onChange('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
        dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdapterDayjs"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
            value: value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value) : null,
            onChange: handleChange,
            open: open,
            onOpen: ()=>setOpen(true),
            onClose: ()=>setOpen(false),
            disabled: disabled,
            minDate: minDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(minDate) : undefined,
            slotProps: {
                textField: {
                    placeholder: placeholder,
                    fullWidth: true,
                    onClick: ()=>setOpen(true),
                    sx: {
                        backgroundColor: '#EEEEEE',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: '2px solid #5046E5'
                        },
                        '& input': {
                            padding: '10px 16px',
                            fontSize: '18px',
                            color: '#11101066',
                            cursor: 'pointer',
                            '&::placeholder': {
                                color: '#11101066',
                                opacity: 1
                            }
                        }
                    }
                }
            },
            sx: {
                '& .MuiInputAdornment-root': {
                    color: '#11101066'
                },
                '& .MuiIconButton-root': {
                    color: '#11101066'
                }
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/scheduled-post/DatePicker.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/scheduled-post/DatePicker.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useModalScrollLock.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PostConfirmationModal({ isOpen, onClose, onConfirm, isSubmitting = false, selectedAccountsCount, videoTitle, date, time, postNow = false }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModalScrollLock"])(isOpen);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-[70] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-6 max-w-md w-full mx-4 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    disabled: isSubmitting,
                    className: "absolute top-4 right-4 text-black hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-8 h-8 text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-[#282828] mb-2",
                            children: postNow ? 'Confirm Post' : 'Confirm Schedule'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#5F5F5F] mb-6 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: postNow ? 'Are you sure you want to post this right now?' : 'Are you sure you want to schedule this post?'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                selectedAccountsCount !== undefined && selectedAccountsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: [
                                        "This will published to ",
                                        selectedAccountsCount,
                                        " account",
                                        selectedAccountsCount > 1 ? 's' : '',
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                videoTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-[#282828]",
                                    children: [
                                        'Video: "',
                                        videoTitle,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                !postNow && date && time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: [
                                        "Scheduled for: ",
                                        date,
                                        " at ",
                                        time
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        " After confirmation, the description and time will no longer be editable."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    disabled: isSubmitting,
                                    className: "flex-1 px-4 py-2 border-2 border-[#5F5F5F] text-[#5F5F5F] rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#F5F5F5] disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onConfirm,
                                    disabled: isSubmitting,
                                    className: "flex-1 px-4 py-2 bg-[#5046E5] text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#4338CA] focus:outline-none focus:ring-4 focus:ring-[#5046E5]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                        isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        isSubmitting ? 'Posting...' : 'Confirm'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/create-post-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePostModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useCreatePost$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useCreatePost.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$account$2d$selection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/account-selection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$scheduled$2d$post$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/scheduled-post/DatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$post$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/post-confirmation-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
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
// Helper function to map account type to caption field name
const getCaptionFieldName = (accountType)=>{
    const typeMap = {
        'instagram.api': 'instagram_caption',
        'facebook.page': 'facebook_caption',
        'linkedin.profile': 'linkedin_caption',
        'twitter.profile': 'twitter_caption',
        'tiktok.profile': 'tiktok_caption',
        'google.youtube': 'youtube_caption'
    };
    return typeMap[accountType] || null;
};
function CreatePostModal({ isOpen, onClose, onPost, selectedAccounts, video }) {
    // State to manage captions per account (by account ID)
    const [accountCaptions, setAccountCaptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isConfirmModalOpen, setIsConfirmModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [postNow, setPostNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPostingNow, setIsPostingNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false) // Loading state for "Post now!" mode
    ;
    // Get user ID from Redux store for direct API call
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.user?.id);
    // Initialize captions from video's socialMediaCaptions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (video?.socialMediaCaptions && selectedAccounts.length > 0) {
            const initialCaptions = {};
            selectedAccounts.forEach((account)=>{
                const captionField = getCaptionFieldName(account.type);
                if (captionField && video.socialMediaCaptions?.[captionField]) {
                    initialCaptions[account.id] = video.socialMediaCaptions[captionField] || '';
                }
            });
            setAccountCaptions(initialCaptions);
        }
    }, [
        video?.socialMediaCaptions,
        selectedAccounts
    ]);
    // Handle caption update
    const handleCaptionUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((accountId, caption)=>{
        setAccountCaptions((prev)=>({
                ...prev,
                [accountId]: caption
            }));
        // Also update the video's socialMediaCaptions if video prop is mutable
        if (video) {
            const account = selectedAccounts.find((acc)=>acc.id === accountId);
            if (account) {
                const captionField = getCaptionFieldName(account.type);
                if (captionField && video.socialMediaCaptions) {
                    // Update the caption in video's socialMediaCaptions
                    video.socialMediaCaptions[captionField] = caption;
                }
            }
        }
    }, [
        video,
        selectedAccounts
    ]);
    const { date, setDate, time, setTime, selectedAccountIds, matchedSelectedAccounts, isSubmitting, validationErrors, minDate, minTime, timeAdjustmentMessage, handleAccountToggle, handleSubmit, handleClose, validateForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useCreatePost$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreatePost"])({
        isOpen,
        onClose,
        onPost,
        selectedAccounts,
        video
    });
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        // If "Post now!" is enabled, skip validation and go directly to confirmation
        // Time will be calculated fresh when user clicks Confirm
        if (postNow) {
            setIsConfirmModalOpen(true);
            return;
        }
        // Normal flow - check validation errors for manually selected date/time
        if (validationErrors.length > 0) {
            return;
        }
        setIsConfirmModalOpen(true);
    };
    const handleConfirmPost = async ()=>{
        setIsConfirmModalOpen(false);
        // If "Post now!" is enabled, calculate fresh current time + 3 minutes and call API directly
        // This bypasses validation and ensures immediate posting with current time
        if (postNow) {
            // Set loading state
            setIsPostingNow(true);
            try {
                // Calculate fresh time at the moment of confirmation
                const now = new Date();
                const futureTime = new Date(now.getTime() + 3 * 60 * 1000) // Current time + 3 minutes
                ;
                // Format local date as YYYY-MM-DD
                const year = futureTime.getFullYear();
                const month = String(futureTime.getMonth() + 1).padStart(2, '0');
                const day = String(futureTime.getDate()).padStart(2, '0');
                const localDateString = `${year}-${month}-${day}`;
                // Format local time as HH:mm
                const hours = String(futureTime.getHours()).padStart(2, '0');
                const minutes = String(futureTime.getMinutes()).padStart(2, '0');
                const localTimeString = `${hours}:${minutes}`;
                // Create local date-time from calculated date and time
                const formattedTime = `${localTimeString}:00`;
                const localDateTime = `${localDateString}T${formattedTime}`;
                const localDate = new Date(localDateTime);
                // Convert to UTC ISO string
                const utcTime = localDate.toISOString();
                const utcDate = utcTime.split('T')[0] // YYYY-MM-DD format
                ;
                const timeOnly = utcTime.split('T')[1].split('.')[0];
                // Prepare request body with calculated UTC time
                const requestBody = {
                    accountIds: selectedAccountIds,
                    name: video?.title || '',
                    videoUrl: video?.videoUrl || video?.url || '',
                    date: utcDate,
                    time: timeOnly,
                    caption: 'Caption',
                    userId: userId,
                    selectedAccounts: selectedAccounts.filter((account)=>selectedAccountIds.includes(account.id)),
                    instagram_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'instagram.api')?.id || 0] || video?.socialMediaCaptions?.instagram_caption || '',
                    facebook_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'facebook.page')?.id || 0] || video?.socialMediaCaptions?.facebook_caption || '',
                    linkedin_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'linkedin.profile')?.id || 0] || video?.socialMediaCaptions?.linkedin_caption || '',
                    twitter_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'twitter.profile')?.id || 0] || video?.socialMediaCaptions?.twitter_caption || '',
                    tiktok_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'tiktok.profile')?.id || 0] || video?.socialMediaCaptions?.tiktok_caption || '',
                    youtube_caption: accountCaptions[selectedAccounts.find((acc)=>acc.type === 'google.youtube')?.id || 0] || video?.socialMediaCaptions?.youtube_caption || ''
                };
                // Call API directly, bypassing validation
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.SOCIALBU.MEDIA_CREATE_POST), {
                    method: 'POST',
                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthenticatedHeaders"])(),
                    body: JSON.stringify(requestBody)
                });
                const responseData = await response.json();
                if (response.ok && responseData.success) {
                    // Show success notification
                    if (window.showNotification) {
                        window.showNotification({
                            type: 'success',
                            title: 'Post Created Successfully',
                            message: 'Your post has been scheduled successfully!',
                            duration: 5000
                        });
                    }
                    // Call the original onPost callback
                    const selectedAccountsForPost = selectedAccounts.filter((account)=>selectedAccountIds.includes(account.id));
                    const postData = {
                        date: localDateString,
                        time: localTimeString,
                        caption: '',
                        accounts: selectedAccountsForPost,
                        video
                    };
                    onPost(postData);
                    // Close modal
                    handleClose();
                } else {
                    // Handle API error
                    const errorMessage = responseData.error || responseData.message || 'Failed to create post';
                    if (window.showNotification) {
                        window.showNotification({
                            type: 'error',
                            title: 'Post Failed',
                            message: errorMessage,
                            duration: 8000
                        });
                    }
                }
            } catch (error) {
                console.error('Error creating post:', error);
                const errorMessage = 'Failed to create post. Please try again.';
                if (window.showNotification) {
                    window.showNotification({
                        type: 'error',
                        title: 'Network Error',
                        message: errorMessage,
                        duration: 8000
                    });
                }
            } finally{
                // Always reset loading state
                setIsPostingNow(false);
            }
        } else {
            // MANUAL MODE - Original logic preserved exactly as before
            // Uses the hook's handleSubmit which includes all validation, time conversion, etc.
            // This flow is completely unchanged from the original implementation
            const syntheticEvent = {
                preventDefault: ()=>{}
            };
            handleSubmit(syntheticEvent);
        }
    };
    const handleCancelPost = ()=>{
        setIsConfirmModalOpen(false);
    };
    // Helper function to calculate and set current time + 3 minutes
    const calculateAndSetPostNowTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Get current local time
        const now = new Date();
        const futureTime = new Date(now.getTime() + 3 * 60 * 1000) // Add 3 minutes
        ;
        // Format local date as YYYY-MM-DD
        const year = futureTime.getFullYear();
        const month = String(futureTime.getMonth() + 1).padStart(2, '0');
        const day = String(futureTime.getDate()).padStart(2, '0');
        const localDateString = `${year}-${month}-${day}`;
        // Format local time as HH:mm
        const hours = String(futureTime.getHours()).padStart(2, '0');
        const minutes = String(futureTime.getMinutes()).padStart(2, '0');
        const localTimeString = `${hours}:${minutes}`;
        // Set the date and time (will be converted to UTC in handleSubmit)
        setDate(localDateString);
        setTime(localTimeString);
    }, [
        setDate,
        setTime
    ]);
    // Handle "Post now!" toggle
    const handlePostNowToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((enabled)=>{
        setPostNow(enabled);
        // When toggled ON, set initial date/time for validation
        // This ensures validation passes, but we'll recalculate fresh time on Post click
        if (enabled) {
            calculateAndSetPostNowTime();
        }
    }, [
        calculateAndSetPostNowTime
    ]);
    // Reset postNow when modal closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            setPostNow(false);
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl max-w-md w-full max-h-[600px] h-full overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-black",
                                children: "Create Post"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-black"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleFormSubmit,
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-gray-700",
                                            children: "Post now!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handlePostNowToggle(!postNow),
                                        className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:ring-offset-2 ${postNow ? 'bg-[#5046E5]' : 'bg-gray-300'}`,
                                        disabled: isSubmitting,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${postNow ? 'translate-x-6' : 'translate-x-1'}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            !postNow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: [
                                                    "Date ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$scheduled$2d$post$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: date,
                                                onChange: setDate,
                                                placeholder: "Select Date",
                                                disabled: isSubmitting,
                                                minDate: minDate
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: [
                                                    "Time ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: time,
                                                    onChange: (e)=>setTime(e.target.value),
                                                    onClick: (e)=>e.currentTarget.showPicker && e.currentTarget.showPicker(),
                                                    min: date === minDate ? minTime : undefined,
                                                    disabled: isSubmitting,
                                                    className: "w-full px-4 py-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#5046E5] bg-[#EEEEEE] text-black disabled:opacity-50 disabled:cursor-not-allowed text-md",
                                                    placeholder: "Select Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            !postNow && timeAdjustmentMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-md p-3 bg-blue-50 border border-blue-200 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-700",
                                            children: timeAdjustmentMessage
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$account$2d$selection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                selectedAccounts: selectedAccounts,
                                selectedAccountIds: matchedSelectedAccounts?.map((account)=>account.id) || selectedAccountIds,
                                isSubmitting: isSubmitting,
                                onAccountToggle: handleAccountToggle,
                                accountCaptions: accountCaptions,
                                onCaptionUpdate: handleCaptionUpdate
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Video"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-800",
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "Status: ",
                                                    video.status
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            !postNow && validationErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg border-2 border-red-200 bg-red-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-red-800 mb-2",
                                        children: "Please fix the following errors:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-red-700 space-y-1",
                                        children: validationErrors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 mt-0.5",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || isPostingNow || selectedAccountIds.length === 0 || !postNow && validationErrors.length > 0,
                                className: "w-full bg-[#5046E5] text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                children: isSubmitting || isPostingNow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        postNow ? 'Posting...' : 'Scheduling...'
                                    ]
                                }, void 0, true) : !postNow && validationErrors.length > 0 ? 'Continue' : 'Post'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$post$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isConfirmModalOpen,
                onClose: handleCancelPost,
                onConfirm: handleConfirmPost,
                isSubmitting: isSubmitting,
                selectedAccountsCount: matchedSelectedAccounts?.length || selectedAccountIds.length,
                videoTitle: video?.title,
                date: date,
                time: time,
                postNow: postNow
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/create-post-modal.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteVideoConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useModalScrollLock.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function DeleteVideoConfirmationModal({ isOpen, onClose, onConfirm, videoTitle, isDeleting = false }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModalScrollLock"])(isOpen);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-6 max-w-md w-full mx-4 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    disabled: isDeleting,
                    className: "absolute top-4 right-4 text-black hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-6 h-6 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-[#282828] mb-2",
                            children: "Delete Video"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#5F5F5F] mb-6 space-y-2",
                            children: [
                                videoTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-[#282828]",
                                    children: [
                                        '"',
                                        videoTitle,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Are you sure you want to delete this video?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    disabled: isDeleting,
                                    className: "flex-1 px-4 py-2 border-2 border-[#5F5F5F] text-[#5F5F5F] rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#F5F5F5] disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onConfirm,
                                    disabled: isDeleting,
                                    className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                        isDeleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        isDeleting ? 'Deleting...' : 'Delete'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreviousVideosGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$video$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/create-video-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$connect$2d$accounts$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/connect-accounts-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$post$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/create-post-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$delete$2d$video$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/delete-video-confirmation-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-ssr] (ecmascript) <export default as PencilLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/lib/api-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
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
function PreviousVideosGallery({ className }) {
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnectAccountsModalOpen, setIsConnectAccountsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAccountsForPost, setSelectedAccountsForPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVideoForCreation, setSelectedVideoForCreation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDeleteVideoModalOpen, setIsDeleteVideoModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoToDelete, setVideoToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedVideoData, setSelectedVideoData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('newest');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Pagination state
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10) // Fixed limit, can be made configurable later
    ;
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // State for API data
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingVideos, setLoadingVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Note feature state
    const [videoNotes, setVideoNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isNoteModalOpen, setIsNoteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedVideoForNote, setSelectedVideoForNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentNoteText, setCurrentNoteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [noteError, setNoteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Notification hook
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    // Get access token and user from Redux store
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.accessToken);
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user.user);
    // Get unified socket context
    const { latestVideoUpdate, pendingVideos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    // Store fetchVideos in ref to avoid dependency issues
    const fetchVideosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch videos from API with pagination, search, and sort
    const fetchVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!accessToken) {
            setError('Authentication required');
            setLoading(false);
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getVideoGallery({
                page: currentPage,
                limit: limit,
                sort: sortOrder,
                search: debouncedSearchQuery || undefined
            });
            if (result.success && result.data) {
                // Type assertion for API response structure
                const apiData = result.data;
                // Map API response to VideoCard format, preserving original videoUrl
                const mappedVideos = apiData.videos.map((video)=>{
                    return {
                        ...video,
                        // Keep the original videoUrl from API, don't override with downloadUrl
                        videoUrl: video.videoUrl || video.downloadUrl || ''
                    };
                });
                setVideos(mappedVideos);
                if (apiData.stats?.totalCount !== undefined) {
                    setTotalCount(apiData.stats.totalCount);
                }
                if (apiData.pagination?.totalPages !== undefined) {
                    setTotalPages(apiData.pagination.totalPages);
                } else if (apiData.pagination?.total !== undefined) {
                    setTotalPages(Math.ceil(apiData.pagination.total / limit));
                } else if (apiData.stats?.totalCount !== undefined) {
                    setTotalPages(Math.ceil(apiData.stats.totalCount / limit));
                }
                const notesFromAPI = {};
                apiData.videos.forEach((video)=>{
                    const videoId = video.videoId || video.id;
                    if (videoId && video.note) {
                        notesFromAPI[videoId] = video.note;
                    }
                });
                setVideoNotes(notesFromAPI);
            } else {
                throw new Error(result.message || 'Failed to fetch videos');
            }
        } catch (err) {
            const errorMessage = err.message || 'Failed to fetch videos';
            setError(errorMessage);
        } finally{
            setLoading(false);
        }
    }, [
        accessToken,
        currentPage,
        limit,
        sortOrder,
        debouncedSearchQuery
    ]);
    // Debounce search query to avoid excessive API calls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setDebouncedSearchQuery(searchQuery);
            // Reset to page 1 when search changes
            setCurrentPage(1);
        }, 500) // 500ms debounce delay
        ;
        return ()=>clearTimeout(timer);
    }, [
        searchQuery
    ]);
    // Reset to page 1 when sort order changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        sortOrder
    ]);
    // Update ref when fetchVideos changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVideosRef.current = fetchVideos;
    }, [
        fetchVideos
    ]);
    // Fetch videos on component mount and when dependencies change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVideosRef.current?.();
    }, [
        accessToken,
        currentPage,
        sortOrder,
        debouncedSearchQuery
    ]); // Trigger on pagination, sort, and search changes
    // No need for cleanup effects since we're using derived state from socket updates
    // Handle video completion - refresh gallery when video is done
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUser || !latestVideoUpdate) return;
        const { status } = latestVideoUpdate;
        console.log('🎬 Gallery received video update:', {
            status,
            message: latestVideoUpdate.message
        });
        if (status === 'completed' || status === 'success') {
            console.log('🎬 Video completed successfully, refreshing gallery...');
            // Use a ref to avoid dependency on fetchVideos
            const timeoutId = setTimeout(()=>{
                fetchVideosRef.current?.();
            }, 1000);
            return ()=>clearTimeout(timeoutId);
        }
    }, [
        latestVideoUpdate,
        currentUser
    ]);
    const handleViewVideo = (video)=>{
        console.log('firstvideo', video);
        console.log('handleViewVideo', video);
        if (video.status !== 'ready') {
            return;
        }
        if (!video.downloadUrl) {
            return;
        }
        setSelectedVideoForCreation(video.title);
        setSelectedVideoData({
            title: video.title,
            videoUrl: video.videoUrl || '',
            youtubeUrl: video.downloadUrl,
            thumbnail: '',
            socialMediaCaptions: typeof video.socialMediaCaptions === 'string' ? JSON.parse(video.socialMediaCaptions) : video.socialMediaCaptions || {}
        });
        setIsCreateModalOpen(true);
    };
    const handlePostVideo = (video)=>{
        console.log('handlePostVideo', video);
        if (video.status !== 'ready') {
            return;
        }
        setSelectedVideoForCreation(video.title);
        setSelectedVideoData({
            title: video.title,
            videoUrl: video.videoUrl || '',
            youtubeUrl: video.downloadUrl || '',
            thumbnail: '',
            socialMediaCaptions: typeof video.socialMediaCaptions === 'string' ? JSON.parse(video.socialMediaCaptions) : video.socialMediaCaptions || {}
        });
        setIsConnectAccountsModalOpen(true);
    };
    const handleCreatePost = (accounts)=>{
        setSelectedAccountsForPost(accounts);
        setIsConnectAccountsModalOpen(false);
        setIsCreatePostModalOpen(true);
    };
    const handlePostSubmit = (postData)=>{
        console.log('Post submitted:', postData);
        // Here you would typically call an API to create the post
        setIsCreatePostModalOpen(false);
        setSelectedAccountsForPost([]);
    };
    const handleDeleteVideo = (video)=>{
        setVideoToDelete(video);
        setIsDeleteVideoModalOpen(true);
    };
    const handleConfirmDelete = async ()=>{
        if (!videoToDelete) return;
        const videoId = videoToDelete.videoId || videoToDelete.id;
        if (!videoId) {
            showNotification('Video ID not found', 'error');
            return;
        }
        try {
            setIsDeleting(true);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteVideo(videoId);
            if (result.success) {
                setVideos((prev)=>prev.filter((video)=>(video.videoId || video.id) !== videoId));
                showNotification('Video deleted successfully', 'success');
                setIsDeleteVideoModalOpen(false);
                setVideoToDelete(null);
            } else {
                throw new Error(result.message || 'Failed to delete video');
            }
        } catch (err) {
            console.error('Failed to delete video:', err);
            showNotification(err.message || 'Failed to delete video', 'error');
        } finally{
            setIsDeleting(false);
        }
    };
    const handleCancelDelete = ()=>{
        setIsDeleteVideoModalOpen(false);
        setVideoToDelete(null);
    };
    const validateNote = (note)=>{
        const trimmedNote = note.trim();
        if (trimmedNote.length === 0) {
            return 'Note is required';
        }
        const words = trimmedNote.split(/\s+/).filter((word)=>word.length > 0);
        if (words.length === 0) {
            return 'Note must contain at least one word';
        }
        return '';
    };
    // Note feature handlers
    const handleOpenNoteModal = (video)=>{
        const videoId = video.videoId || video.id;
        setSelectedVideoForNote(video);
        setCurrentNoteText(videoNotes[videoId] || '');
        setNoteError('');
        setIsNoteModalOpen(true);
    };
    const handleSaveNote = async ()=>{
        if (!selectedVideoForNote) return;
        const videoId = selectedVideoForNote.videoId || selectedVideoForNote.id;
        if (!videoId) {
            showNotification('Video ID not found', 'error');
            return;
        }
        // Validate note before saving
        const validationError = validateNote(currentNoteText);
        if (validationError) {
            setNoteError(validationError);
            return;
        }
        try {
            const noteText = currentNoteText.trim();
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$lib$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].updateVideoNote(videoId, noteText);
            if (result.success) {
                setVideoNotes((prev)=>({
                        ...prev,
                        [videoId]: noteText
                    }));
                showNotification('Note saved successfully', 'success');
                // Close modal
                setIsNoteModalOpen(false);
                setSelectedVideoForNote(null);
                setCurrentNoteText('');
                setNoteError('');
            } else {
                showNotification(result.message || 'Failed to save note', 'error');
            }
        } catch (error) {
            const errorMessage = error.message || 'Failed to save note';
            showNotification(errorMessage, 'error');
        }
    };
    const handleCancelNote = ()=>{
        setIsNoteModalOpen(false);
        setSelectedVideoForNote(null);
        setCurrentNoteText('');
        setNoteError('');
    };
    const handleNoteTextChange = (value)=>{
        setCurrentNoteText(value);
        // Validate and update error state
        const error = validateNote(value);
        setNoteError(error);
    };
    // Merge pending videos (from socket) with API videos
    // Server-side filtering and sorting is already handled by the API
    const displayVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        console.log('🔄 Recalculating displayVideos:', {
            pendingVideosCount: pendingVideos.length,
            apiVideosCount: videos.length
        });
        // Start with API videos (already filtered, sorted, and paginated by server)
        const allVideos = [
            ...videos
        ];
        // Add loading cards for each pending video (processing videos from socket)
        if (pendingVideos.length > 0) {
            console.log(`➕ Adding ${pendingVideos.length} loading card(s) to video list`);
            // Create loading cards for each pending video
            const loadingCards = pendingVideos.map((video)=>({
                    id: video.id,
                    videoId: video.id,
                    title: video.title,
                    status: 'processing',
                    createdAt: video.timestamp,
                    updatedAt: video.timestamp,
                    downloadUrl: null,
                    metadata: {
                        duration: 0,
                        size: 0,
                        format: 'processing'
                    }
                }));
            // Separate processing videos from completed videos
            const processingVideos = allVideos.filter((video)=>video.status === 'processing');
            const completedVideos = allVideos.filter((video)=>video.status !== 'processing');
            // Sort processing videos by creation date (newest first) for consistent display
            const sortedProcessingVideos = processingVideos.sort((a, b)=>{
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return dateB - dateA;
            });
            // Always show pending videos first, then processing videos from API, then completed videos
            return [
                ...loadingCards,
                ...sortedProcessingVideos,
                ...completedVideos
            ];
        }
        // If no pending videos, return API videos as-is (already sorted by server)
        return allVideos;
    }, [
        videos,
        pendingVideos
    ]);
    const handleSortChange = (newSortOrder)=>{
        setSortOrder(newSortOrder);
        setIsSortDropdownOpen(false);
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-lg mb-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: fetchVideos,
                            className: "bg-[#5046E5] text-white px-6 py-2 rounded-full hover:bg-[#4338CA] transition-colors",
                            children: "Try Again"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                            lineNumber: 472,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                    lineNumber: 470,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 469,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
            lineNumber: 468,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        children: [
            loadingVideos.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 488,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:justify-between justify-end gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 md:max-w-[447px] max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z",
                                        fill: "#5F5F5F"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                style: {
                                    boxShadow: "0px -1.5px 0px 0px #FFFFFF52 inset, 0px 0.5px 0px 0px #FFFFFF52 inset"
                                },
                                className: "w-full pr-10 pl-4 py-[7.4px] bg-transparent hover:bg-[#F5F5F5] rounded-[39px] text-[#5F5F5F] placeholder-[#5F5F5F] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white border-2 border-[#5F5F5F] text-[20px] font-semibold"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchVideos,
                                disabled: loading,
                                className: "px-4 py-[7.4px] bg-[#5046E5] text-white rounded-[39px] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] flex items-center gap-2 min-w-[120px] justify-center text-[20px] font-semibold hover:bg-[#4338CA] disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 4V10H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H10M20 20V14H19.4185M19.4185 14C18.2317 16.9318 15.3574 19 12 19C7.92038 19 4.55399 15.9463 4.06189 12M19.4185 14H14",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsSortDropdownOpen(!isSortDropdownOpen),
                                        className: "px-4 py-[7.4px] bg-transparent cursor-pointer border-2 border-[#5F5F5F] rounded-[39px] text-[#5F5F5F] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] focus:bg-white flex items-center gap-2 min-w-[154px] justify-center text-[20px] font-semibold",
                                        style: {
                                            boxShadow: "0px -1.5px 0px 0px #FFFFFF52 inset, 0px 0.5px 0px 0px #FFFFFF52 inset"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: sortOrder === 'newest' ? 'Newest' : 'Oldest'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                                                className: `w-7 h-7 transition-transform text-[#5F5F5F] duration-300 ${isSortDropdownOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, this),
                                    isSortDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSortChange('newest'),
                                                className: `w-full px-4 py-3 text-left cursor-pointer hover:bg-[#F5F5F5] transition-colors duration-200 rounded-t-[8px] text-[18px] font-semibold ${sortOrder === 'newest' ? 'bg-[#F5F5F5] text-[#5046E5]' : 'text-[#282828]'}`,
                                                children: "Newest"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSortChange('oldest'),
                                                className: `w-full px-4 py-3 cursor-pointer text-left hover:bg-[#F5F5F5] transition-colors duration-200 rounded-b-[8px] text-[18px] font-semibold ${sortOrder === 'oldest' ? 'bg-[#F5F5F5] text-[#5046E5]' : 'text-[#282828]'}`,
                                                children: "Oldest"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#5046E5] mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg",
                                children: "Loading your videos..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 583,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                    lineNumber: 582,
                    columnNumber: 11
                }, this) : displayVideos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg",
                        children: debouncedSearchQuery ? 'No videos found matching your search.' : 'No videos available.'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 590,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                    lineNumber: 589,
                    columnNumber: 11
                }, this) : displayVideos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#EEEEEE] rounded-[12px] overflow-hidden transition-all duration-300 group min-h-[240px] relative h-[384px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video max-h-[200px] w-full bg-[#EEEEEE] px-3 pt-3 rounded-[8px] group",
                                children: video.status === 'ready' && video.downloadUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            src: video.downloadUrl,
                                            className: "w-full h-[200px] object-cover rounded-[6px]",
                                            preload: "metadata",
                                            poster: "",
                                            muted: true,
                                            loop: true,
                                            playsInline: true,
                                            "webkit-playsinline": "true",
                                            onError: (e)=>{
                                                console.error('Video load error:', e);
                                                setLoadingVideos((prev)=>{
                                                    const newSet = new Set(prev);
                                                    newSet.delete(video.id);
                                                    return newSet;
                                                });
                                            },
                                            onLoadStart: ()=>{
                                                setLoadingVideos((prev)=>new Set(prev).add(video.id));
                                            },
                                            onLoadedMetadata: (e)=>{
                                                const videoElement = e.currentTarget;
                                                if (videoElement) {
                                                    videoElement.currentTime = 1;
                                                }
                                                setLoadingVideos((prev)=>{
                                                    const newSet = new Set(prev);
                                                    newSet.delete(video.id);
                                                    return newSet;
                                                });
                                            },
                                            children: "Your browser does not support the video tag."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 606,
                                            columnNumber: 21
                                        }, this),
                                        loadingVideos.has(video.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[6px] overflow-hidden z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                                style: {
                                                    animation: 'shimmer 1.5s infinite'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 643,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 642,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-grey100 bg-opacity-30 rounded-[6px]",
                                            style: {
                                                zIndex: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleViewVideo(video),
                                                    className: "bg-[#5046E5] text-white px-6 py-3 rounded-full font-semibold text-[16px] hover:bg-[#4338CA]/80 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg",
                                                    children: "View Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteVideo(video),
                                                    className: "bg-[#FF0000] text-white px-6 py-3 rounded-full font-semibold text-[16px] hover:bg-[#FF0000]/80 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg",
                                                    children: "Delete Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 652,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : video.id.startsWith('loading-') ? /* Professional Loading Video Card with Advanced Skeleton */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[200px] bg-gradient-to-br from-slate-50 to-gray-100 rounded-[6px] relative overflow-hidden border border-gray-200/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 671,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex flex-col items-center justify-center p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold text-gray-700 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block animate-pulse",
                                                                        children: "Processing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block animate-bounce ml-1",
                                                                        children: "."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block animate-bounce ml-0.5",
                                                                        style: {
                                                                            animationDelay: '0.1s'
                                                                        },
                                                                        children: "."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block animate-bounce ml-0.5",
                                                                        style: {
                                                                            animationDelay: '0.2s'
                                                                        },
                                                                        children: "."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                        lineNumber: 686,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: "It usually takes 10–15 minutes to generate a video."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#5046E5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 677,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 669,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[200px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-[6px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-sm mb-2",
                                                children: video.status === 'processing' ? 'Processing...' : video.status === 'failed' ? 'Failed to load' : video.status === 'ready' && !video.downloadUrl ? 'No download URL' : 'Video not ready'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 703,
                                                columnNumber: 23
                                            }, this),
                                            video.status === 'processing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-6 w-6 border-b-2 border-[#5046E5] mx-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 709,
                                                columnNumber: 25
                                            }, this),
                                            video.status === 'ready' && !video.downloadUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-red-400 text-xs",
                                                children: "Missing download URL"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 712,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 702,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 701,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 602,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex flex-col justify-between h-[160px]",
                                children: [
                                    video.id.startsWith('loading-') ? /* Professional Skeleton Title */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3/4 h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse mb-2 shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 725,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1/2 h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 726,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 724,
                                        columnNumber: 19
                                    }, this) : /* Regular Title */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[18px] font-medium text-[#171717] line-clamp-1",
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 731,
                                                columnNumber: 21
                                            }, this),
                                            videoNotes[video.videoId || video.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 min-h-[60px] bg-white border border-blue-100 hover:border-blue-200 rounded-[6px] relative transition-all duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-1 relative z-10 pr-[24px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-[#5F5F5F] line-clamp-2 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-[#5F5F5F]",
                                                                    children: "Note:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                videoNotes[video.videoId || video.id]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 25
                                                    }, this),
                                                    !video.id.startsWith('loading-') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleOpenNoteModal(video);
                                                        },
                                                        className: "absolute top-2 right-2 z-10 transition-all duration-200 flex items-center justify-center group/note",
                                                        title: videoNotes[video.videoId || video.id] ? 'Edit note' : 'Add note',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                                                            className: `w-5 h-5 transition-colors duration-200 ${videoNotes[video.videoId || video.id] ? 'text-[#5F5F5F] hover:text-[#5046E5] ' : 'text-[#5F5F5F] group-hover/note:text-[#5046E5]'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 736,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 min-h-[60px] bg-white border border-blue-50 hover:border-blue-200 rounded-[6px] relative transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-normal text-[#9C9B9B]",
                                                            children: "Add a note"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 27
                                                        }, this),
                                                        !video.id.startsWith('loading-') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleOpenNoteModal(video);
                                                            },
                                                            className: "absolute top-2 right-2 z-10 transition-all duration-200 flex items-center justify-center group/note",
                                                            title: videoNotes[video.videoId || video.id] ? 'Edit note' : 'Add note',
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                                                                className: `w-5 h-5 transition-colors duration-200 ${videoNotes[video.videoId || video.id] ? 'text-[#5046E5] ' : 'text-[#5F5F5F] hover:text-[#5046E5]'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                                lineNumber: 774,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 762,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 730,
                                        columnNumber: 19
                                    }, this),
                                    video.id.startsWith('loading-') ? /* Professional Skeleton Buttons */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 py-[3px] px-4 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse shadow-sm border border-gray-200/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 792,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 py-[3px] px-4 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse shadow-sm border border-gray-200/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                lineNumber: 795,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 791,
                                        columnNumber: 19
                                    }, this) : /* Regular Buttons - Two buttons in a row */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: !video.autoGenerated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePostVideo(video),
                                            disabled: video.status !== 'ready',
                                            className: `flex-1 py-[3px] px-4 rounded-full font-semibold text-[16px] transition-colors duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer ${video.status === 'ready' ? 'bg-[#5046E5] text-white hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5]' : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300'}`,
                                            children: "Post Video"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 803,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 801,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 720,
                                columnNumber: 15
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 596,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                        disabled: currentPage === 1 || loading,
                        className: "px-4 py-2 bg-[#5046E5] text-white rounded-[39px] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4338CA] text-[16px] font-semibold",
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#5F5F5F] text-[16px] font-semibold",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this),
                            totalCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#9C9B9B] text-[14px]",
                                children: [
                                    "(",
                                    totalCount,
                                    " ",
                                    totalCount === 1 ? 'video' : 'videos',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                lineNumber: 838,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 833,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                        disabled: currentPage === totalPages || loading,
                        className: "px-4 py-2 bg-[#5046E5] text-white rounded-[39px] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#5046E5] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4338CA] text-[16px] font-semibold",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                        lineNumber: 844,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 824,
                columnNumber: 9
            }, this),
            isSortDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setIsSortDropdownOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 856,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$video$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false),
                videoTitle: selectedVideoForCreation,
                startAtComplete: true,
                videoData: selectedVideoData
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$connect$2d$accounts$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isConnectAccountsModalOpen,
                onClose: ()=>setIsConnectAccountsModalOpen(false),
                onNext: ()=>{
                    setIsConnectAccountsModalOpen(false);
                    // Handle the next step after connecting accounts
                    console.log('Accounts connected, proceeding to next step');
                },
                video: selectedVideoData ? {
                    id: selectedVideoData.title,
                    title: selectedVideoData.title,
                    status: 'ready',
                    url: selectedVideoData.youtubeUrl,
                    thumbnail: selectedVideoData.thumbnail,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                } : undefined,
                onCreatePost: handleCreatePost
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            selectedVideoData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$create$2d$post$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreatePostModalOpen,
                onClose: ()=>setIsCreatePostModalOpen(false),
                onPost: handlePostSubmit,
                selectedAccounts: selectedAccountsForPost,
                video: {
                    id: selectedVideoData.title,
                    title: selectedVideoData.title,
                    status: 'ready',
                    videoUrl: selectedVideoData.videoUrl,
                    url: selectedVideoData.youtubeUrl,
                    thumbnail: selectedVideoData.thumbnail,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    socialMediaCaptions: selectedVideoData.socialMediaCaptions
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 894,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$delete$2d$video$2d$confirmation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDeleteVideoModalOpen,
                onClose: handleCancelDelete,
                onConfirm: handleConfirmDelete,
                videoTitle: videoToDelete?.title,
                isDeleting: isDeleting
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            isNoteModalOpen && selectedVideoForNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl max-w-md w-full shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-black",
                                    children: videoNotes[selectedVideoForNote.videoId || selectedVideoForNote.id] ? 'Edit Note' : 'Add Note'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 926,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCancelNote,
                                    className: "w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-black"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                        lineNumber: 934,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 929,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                            lineNumber: 925,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: [
                                                "Note for: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500 font-normal",
                                                    children: selectedVideoForNote.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 940,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: currentNoteText,
                                            onChange: (e)=>handleNoteTextChange(e.target.value),
                                            required: true,
                                            placeholder: "Enter your note here...",
                                            className: `w-full h-32 px-4 py-3 bg-[#EEEEEE] border-0 rounded-[8px] text-gray-800 placeholder-[#11101066] resize-none focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:bg-white transition-colors duration-200 ${noteError ? 'ring-2 ring-red-500' : ''}`,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 943,
                                            columnNumber: 17
                                        }, this),
                                        noteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-sm mt-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 21
                                                }, this),
                                                noteError
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 952,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 939,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCancelNote,
                                            className: "px-6 py-2 rounded-full font-semibold text-[16px] border-2 border-gray-300 hover:border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-200",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 960,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSaveNote,
                                            disabled: !!noteError || !currentNoteText.trim() || currentNoteText.trim().split(/\s+/).filter((word)=>word.length > 0).length === 0,
                                            className: `px-6 py-2 rounded-full font-semibold text-[16px] border-2 border-[#5046E5] transition-colors duration-200 ${noteError || !currentNoteText.trim() || currentNoteText.trim().split(/\s+/).filter((word)=>word.length > 0).length === 0 ? 'opacity-50 cursor-not-allowed bg-[#5046E5] text-white' : 'bg-[#5046E5] text-white hover:bg-transparent hover:text-[#5046E5]'}`,
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                            lineNumber: 967,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                                    lineNumber: 959,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                            lineNumber: 938,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                    lineNumber: 924,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
                lineNumber: 923,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx",
        lineNumber: 485,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProtectedRoute({ children, fallback }) {
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.user);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [authCheckComplete, setAuthCheckComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const hasShownToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only mark auth check complete when loading is done AND we have a definitive auth status
        if (!isLoading) {
            setAuthCheckComplete(true);
        }
    }, [
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only redirect after auth check is complete and user is not authenticated
        if (authCheckComplete && !isAuthenticated) {
            // Show toast notification before redirecting (only once per component instance)
            if (!hasShownToast.current) {
                showNotification('Please log in to access this page.', 'info');
                hasShownToast.current = true;
            }
            router.push('/');
        }
    }, [
        authCheckComplete,
        isAuthenticated,
        router,
        showNotification
    ]);
    // Show loading state while checking authentication OR if auth check is complete but user is not authenticated
    // This prevents the protected content from rendering before redirect
    if (isLoading || !authCheckComplete || authCheckComplete && !isAuthenticated) {
        return fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Checking authentication..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    // If not authenticated, don't render children (will redirect)
    if (!isAuthenticated) {
        return null;
    }
    // If authenticated, render children
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/Desktop/task2/src/app/create-video/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateVideoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/global-notification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/hooks/useSubscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/providers/UnifiedSocketProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/avatar-creation/AvatarCreationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/pending-payment-toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/subscription-required-toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$previous$2d$videos$2d$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/ui/previous-videos-gallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$features$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/src/components/features/auth/ProtectedRoute.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/task2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
function CreateVideoPage() {
    const [isAvatarModalOpen, setIsAvatarModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPendingPaymentToast, setShowPendingPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingPaymentMessage, setPendingPaymentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentContext, setPaymentContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('avatar');
    const [showSubscriptionRequiredToast, setShowSubscriptionRequiredToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscriptionRequiredMessage, setSubscriptionRequiredMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscriptionContext, setSubscriptionContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('avatar');
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.user);
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$global$2d$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const { checkVideoUsageLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$hooks$2f$useSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubscription"])();
    const { isAvatarProcessing, isVideoAvatarProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$providers$2f$UnifiedSocketProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnifiedSocketContext"])();
    const isAnyAvatarProcessing = isAvatarProcessing || isVideoAvatarProcessing;
    const handleCustomAvatarClick = async ()=>{
        if (isAnyAvatarProcessing) {
            showNotification('Please wait for your current avatar to finish processing', 'warning');
            return;
        }
        if (user?.id) {
            try {
                const usageCheck = await checkVideoUsageLimit();
                if (!usageCheck.canCreateVideo) {
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
                setIsAvatarModalOpen(true);
            } catch (error) {
                console.error('Failed to check subscription status:', error);
                showNotification('Unable to verify subscription status. Please try again.', 'error');
            }
        } else {
            showNotification('Please log in to create a custom avatar', 'warning');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$features$2f$auth$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1260px] mx-auto xl:px-0 px-3 lg:py-20 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[37px] md:text-4xl leading-[40px] lg:text-[42px] font-semibold text-[#171717] mb-4",
                                    children: "Create Videos Effortlessly"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-[20px] text-[#5F5F5F] max-w-3xl mx-auto leading-[24px]",
                                    children: [
                                        "Custom AI videos for agents & loan officers—just fill one form, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 79
                                        }, this),
                                        " hit submit, and we handle the rest."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCustomAvatarClick,
                                    disabled: isAnyAvatarProcessing,
                                    className: `inline-flex items-center md:w-fit w-full justify-center px-4 py-[9.4px] md:text-[20px] text-[18px] font-semibold rounded-full transition-all !duration-300 border-2 ${isAnyAvatarProcessing ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' : 'bg-[#5046E5] text-white cursor-pointer hover:bg-transparent hover:text-[#5046E5] border-[#5046E5]'}`,
                                    children: isAnyAvatarProcessing ? 'Processing...' : 'Custom Avatar'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/create-video/new",
                                    className: "inline-flex items-center md:max-w-[167px] max-w-full w-full justify-center gap-2 px-6 py-[9.4px] bg-[#5046E5] text-white rounded-full md:text-[20px] text-[18px] hover:bg-transparent hover:text-[#5046E5] border-2 border-[#5046E5] transition-all duration-300 font-semibold whitespace-nowrap",
                                    children: "Create Video"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$previous$2d$videos$2d$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$avatar$2d$creation$2f$AvatarCreationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isAvatarModalOpen,
                    onClose: ()=>setIsAvatarModalOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$pending$2d$payment$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isVisible: showPendingPaymentToast,
                    message: pendingPaymentMessage,
                    context: paymentContext,
                    onClose: ()=>setShowPendingPaymentToast(false),
                    onRefresh: async ()=>{
                        try {
                            const usageCheck = await checkVideoUsageLimit();
                            if (usageCheck.canCreateVideo) {
                                setShowPendingPaymentToast(false);
                                showNotification('Payment confirmed! You can now create avatars.', 'success');
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
                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$task2$2f$src$2f$components$2f$ui$2f$subscription$2d$required$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isVisible: showSubscriptionRequiredToast,
                    message: subscriptionRequiredMessage,
                    context: subscriptionContext,
                    onClose: ()=>setShowSubscriptionRequiredToast(false),
                    onSubscribe: ()=>{
                        window.location.href = '/#pricing';
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/task2/src/app/create-video/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_task2_src_3e8ba568._.js.map