import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3 секунды показа

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000">
      <h1 className="text-white text-5xl font-serif tracking-wide animate-pulse">
        Cartier
      </h1>
    </div>
  );
}
