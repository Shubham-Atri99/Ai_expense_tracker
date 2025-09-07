"use client";
import React from "react";
import { motion } from "motion/react";

const Story = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold text-slate-700 md:text-5xl dark:text-slate-200"
      >
        Our Story
      </motion.h2>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          <p>
            We started ExpenseTracker AI with a simple belief —{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              managing money should be effortless
            </span>
            . Too many people struggle with complicated tools that only record
            expenses but don’t actually help them improve.
          </p>
          <p>
            Our mission has always been to create{" "}
            <span className="font-semibold text-pink-500">
              a smarter financial companion
            </span>
            . One that not only tracks your spending, but{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              understands your habits
            </span>{" "}
            and guides you towards better decisions with personalized insights.
          </p>
        </motion.div>

        {/* Right Side (Gradient Box with Text) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="h-64 w-64 md:h-80 md:w-80 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 shadow-lg flex items-center justify-center text-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Built for the Future
              </h3>
              <p className="mt-2 text-sm text-violet-100 md:text-base">
                Smarter, faster, and designed to make money management simple.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Second Row / Closing Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto"
      >
        <p>
          Today,{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-400">
            thousands of users
          </span>{" "}
          trust ExpenseTracker AI to simplify their finances. We’re helping them
          not just record transactions, but{" "}
          <span className="font-semibold text-pink-500">
            build a path towards financial freedom
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default Story;
