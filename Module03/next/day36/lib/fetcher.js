export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const info = await res.json().catch(() => ({}));
    const error = new Error(info.error || "Request failed");
    error.info = info;
    error.status = res.status;
    throw error;
  }
  return res.json();
};
