"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "./Card";
import { BarChart3, Brain, Wallet, Star } from "lucide-react";

// Simple FAQ Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <details className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-neutral-800 dark:text-neutral-200">
        {question}
        <span className="ml-2 text-neutral-500 group-open:rotate-180 transition-transform">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        {answer}
      </p>
    </details>
  );
};

// Testimonial Card
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

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="relative z-20 px-4 py-10 md:py-20">
        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
          {"Welcome to AI Expense Tracker"
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
          Track your expenses effortlessly with the power of AI. Get smart
          insights, manage your finances, and make better decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-52 transform rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Get Started for Free
          </button>
          <button className="w-52 transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Learn More
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="AI-powered Insights"
            description="Get personalized recommendations and insights based on your spending habits."
            icon={<Brain />}
          />
          <Card
            title="Smart Expense Tracking"
            description="Automatically categorize and track your expenses in real time."
            icon={<Wallet />}
          />
          <Card
            title="Intuitive Dashboard"
            description="Visualize your financial health with beautiful charts and reports."
            icon={<BarChart3 />}
          />
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-20 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />

      {/* FAQ Section */}
      <div className="relative z-20 px-4 py-10 md:py-20">
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-slate-700 md:text-4xl dark:text-slate-300">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Got questions? We’ve got answers. Here are the most common queries
          about AI Expense Tracker.
        </p>

        {/* FAQ Items */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          <FAQItem
            question="How does AI help track my expenses?"
            answer="AI automatically categorizes your spending, detects patterns, and provides actionable insights so you don’t need to manually sort transactions."
          />
          <FAQItem
            question="Is my financial data secure?"
            answer="Yes, we use bank-level encryption and strict security measures to ensure your data remains private and secure."
          />
          <FAQItem
            question="Can I use it for free?"
            answer="Absolutely! We offer a free plan with core features. You can upgrade anytime for advanced analytics and premium features."
          />
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-20 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />

      {/* What Our Users Say */}
      <div className="relative z-20 px-4 py-10 md:py-20">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-slate-700 md:text-4xl dark:text-slate-300">
          What Our Users Say
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Hear from people who are already managing their finances better with
          AI Expense Tracker.
        </p>

        {/* Testimonials */}
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <TestimonialCard
            name="Sarah Johnson"
            role="Freelancer"
            feedback="AI Expense Tracker completely changed how I manage my money. The insights are spot on and I feel in control of my budget."
          />
          <TestimonialCard
            name="David Kim"
            role="Small Business Owner"
            feedback="The automatic categorization of expenses saves me hours every month. I can now focus on growing my business!"
          />
          <TestimonialCard
            name="Emily Carter"
            role="Student"
            feedback="As a student, keeping track of expenses was tough. This app makes it so simple, and I actually enjoy checking my finances."
          />
        </div>
      </div>
    </div>
  );
}
