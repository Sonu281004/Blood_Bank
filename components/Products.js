import { useEffect } from "react";
import gsap from "gsap";

export default function Products() {
  useEffect(() => {
    gsap.from(".product", { opacity: 0, y: 50, duration: 0.5, stagger: 0.2 });
  }, []);

  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6">Best Selling Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="product border p-4 rounded shadow hover:scale-105 transition-transform">
            <p>Product {item}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}