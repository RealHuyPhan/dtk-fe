export const handleUrlImage = (input) => {
    if (!input) return null;

    const url = typeof input === "string" ? input : input.url;
    if (!url) return null;

    if (url.startsWith("http")) return url;

    const baseURL = import.meta.env.VITE_APP_BASE_URL;
    return `${baseURL.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};
