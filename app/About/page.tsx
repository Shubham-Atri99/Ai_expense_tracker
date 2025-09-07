"use client";
import React from "react";
import { motion } from "motion/react";

import { BarChart3, Brain, Wallet, Star } from "lucide-react";
import { Card } from "../_Components/Card";
import Story from "../_Components/Story";

const TestimonialCard = ({
  name,
  feedback,
  role,
}: {
  name: string;
  feedback: string;
  role: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Stars */}
      <div className="mb-3 flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        “{feedback}”
      </p>
      <div className="mt-4">
        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{role}</p>
      </div>
    </motion.div>
  );
};

export function AboutHero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="relative z-20 px-4 py-10 md:py-20">
        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
          {"About expense tracking AI"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mx-auto max-w-2xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Your personal finance companion powered by AI. Track, manage, and
          optimize your expenses effortlessly.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-52 transform rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Start your Journey
          </button>
          <button className="w-52 transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Learn More
          </button>
        </motion.div>

        {/* Feature Cards */}
        
      </div>
      


      {/* Divider Line */}
      <hr className="my-5 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />
      <div className="  w-full relative flex flex-col items-center justify-center">
        <div className=" relative z-20 px-4 py-10 md:py-20">
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl dark:text-slate-300">
            Mutiple ways to 
          </h2>
          <p className="  mx-auto mt-4 max-w-3xl text-center text-2xl font-normal text-neutral-600 dark:text-neutral-400">
            At ExpenseTracker AI, we leverage cutting-edge artificial intelligence to revolutionize how individuals achieve financial wellness. Our AI analyzes your spending patterns to deliver personalized recommendations and actionable insights that lead to better budgeting and financial freedom.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Card
                    title="AI-powered Insights"
                    description="Get personalized recommendations and insights based on your spending habits."
                    icon={<Brain />}
                  />
                  <Card
                    title="Trusted by many users"
                    description="Automatically categorize and track your expenses in real time."
                    icon={<Wallet />}
                  />
                  <Card
                    title="Smart Expense Tracking "
                    description="Visualize your financial health with beautiful charts and reports."
                    icon={<BarChart3 />}
                  />
                </div>
      </div>
       <hr className="my-5 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />
      
      

      
      <hr className="my-20 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />
      <div className=" relative flex flex-col z-20 justify-center items-center">
        <Story/>
      </div>
      
      

        
        
      
    </div>
  );
}
export default AboutHero;