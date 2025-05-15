import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="font-rubik w-[90%] mx-auto max-w-[1200px]">
      <section className="grid grid-cols-2 py-20 items-center justify-center">
        <article>
          <div className="flex flex-col justify-center text-8xl font-bold">
            <span className="text-blue-brand">DO IT</span>
            <span>RIGHT</span>
          </div>

          <p className="text-2xl">Explore the new collection of sneakers</p>

          <Link
            to="/products"
            className="flex justify-between items-center w-[200px] mt-6 bg-blue-brand text-white py-4 px-5 rounded-[8px] font-semibold"
          >
            Explore
            <MoveRight />
          </Link>
        </article>

        <article className="flex justify-center items-center">
          <figure className="w-[505px] h-[505px] rounded-full bg-black bg-cover">
            <img
              src="public\images\yeezy.png"
              alt="Yeezy sneaker"
              className="relative w-[650px] h-[650px] right-[50px] bottom-[100px] rotate-[-5deg]"
            />
          </figure>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
