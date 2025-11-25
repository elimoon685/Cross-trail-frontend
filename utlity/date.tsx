
export const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("en-AU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });