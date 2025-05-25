import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <main className="font-rubik w-[90%] mx-auto max-w-[1200px]">
      <section className="grid grid-cols-2 py-20 items-center justify-center">
        <article>
          <motion.div
            className="flex flex-col justify-center text-8xl font-bold"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="text-blue-brand"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              DO IT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              RIGHT
            </motion.span>
          </motion.div>

          <motion.p
            className="text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Explore the new collection of sneakers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              to="/products"
              className="flex justify-between items-center w-[200px] mt-6 bg-blue-brand text-white py-4 px-5 rounded-[8px] font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            >
              Explore
              <MoveRight />
            </Link>
          </motion.div>
        </article>

        <article className="flex justify-center items-center">
          <motion.figure
            className="w-[505px] h-[505px] rounded-full bg-black bg-cover flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px #000" }}
          >
            <motion.img
              src="public/images/yeezy.png"
              alt="Yeezy sneaker"
              className="relative w-[650px] h-[650px] right-[50px] bottom-[100px] rotate-[-5deg]"
              initial={{ rotate: -15, y: 60, opacity: 0 }}
              animate={{ rotate: -5, y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 60,
              }}
            />
          </motion.figure>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
