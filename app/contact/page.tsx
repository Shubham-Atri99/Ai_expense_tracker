"use client";
import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, HelpCircle } from "lucide-react";
import { Card } from "../_Components/Card";

export function ContactHero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      
      <div className="relative z-20 px-4 py-10 md:py-20">
       
        <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300">
          {"Contact ExpenseTracker AI"
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
          Have questions about AI-powered expense tracking or need help? We're
          here to assist you with intelligent financial management.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-52 transform rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Send us an Email
          </button>
          <button className="w-52 transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Divider Line */}
      <hr className="my-5 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />

      {/* Contact Options */}
      <div className="w-full relative flex flex-col items-center justify-center">
        <div className="relative z-20 px-4 py-10 md:py-20">
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl dark:text-slate-300">
            Multiple Ways to Connect
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
            Choose the most convenient way to reach out to our ExpenseTracker AI
            support team.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Email Support"
            description="Get detailed assistance with your questions. We typically respond within 24 hours at support@expensetracker-ai.com"
            icon={<Mail className="h-6 w-6 text-violet-600" />}
          />
          <Card
            title="Phone Support"
            description="Speak directly with our support team for immediate assistance with urgent matters. Call us at +1-800-123-4567"
            icon={<Phone className="h-6 w-6 text-violet-600" />}
          />
          <Card
            title="Office Location"
            description="Visit our headquarters for in-person consultations and partnership discussions. 123 AI Innovation St, Tech City, USA"
            icon={<MapPin className="h-6 w-6 text-violet-600" />}
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-20 w-2/3 border-t border-neutral-300 dark:border-neutral-700" />

      {/* Help Section */}
      <div className="relative flex flex-col z-20 justify-center items-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 text-center mb-10">
          We are here to help
        </h2>
        <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
          {/* Support Hours */}
          <Card
            title="🕒 Support Hours"
            description={`Monday - Friday: 9:00 AM - 6:00 PM PST
Saturday: 10:00 AM - 4:00 PM PST
Sunday: Closed
Email support: Available 24/7 with responses within 24 hours`}
            icon={<Clock className="h-6 w-6 text-violet-600" />}
          />
          {/* Quick Help */}
          <Card
            title="❓ Quick Help"
            description={`Technical Issues: App not working properly? Check our troubleshooting guide first.

AI Features: Questions about AI insights? Our AI documentation has answers.

Account & Billing: Account issues or billing questions? Contact us directly.`}
            icon={<HelpCircle className="h-6 w-6 text-violet-600" />}
          />
        </div>
      </div>
    </div>
  );
}
export default ContactHero;
