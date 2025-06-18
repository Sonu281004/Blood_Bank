import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 ref={textRef} className="text-4xl md:text-6xl font-bold text-center">
        Welcome to the Landing Page
      </h1>
    </section>
  );
}