export const env = {
  get VITE_API_URL() {
    return (window as any).__env?.VITE_API_URL || "http://localhost:4001";
  },
};
