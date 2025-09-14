  "use client";

  import React from "react";
  import { useUser } from "@clerk/nextjs";
  import { HeroSectionOne } from "./_Components/Hero";
  import AddNewRecord from "./_Components/AddNewRecord";
  import Recordchart from "./_Components/Recordchart";
  import ExpenseStats from "./_Components/ExpenseStats";
  import Aiinsights from "./_Components/Aiinsights";
  import RecordHistory from "./_Components/RecordHistory";
  import { motion } from "framer-motion";

  const Page: React.FC = () => {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
      return (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      );
    }

    if (!user) {
      return (
        <main>
          <div className="min-h-screen w-full">
            <HeroSectionOne />
          </div>
        </main>
      );
    }

    // Safe date formatter
    const formatDate = (date: Date | string | number | null | undefined) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleDateString();
    };

    return (
      <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* User Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-violet-600/90 to-pink-500/90 
                          dark:from-violet-700/90 dark:to-pink-600/90 
                          backdrop-blur-md p-5 rounded-2xl shadow-xl 
                          border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-white"
              >
                {/* User Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={user.imageUrl}
                    alt={`${user.firstName}'s profile`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white/20 shadow-lg"
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 
                                  rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* User Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-bold mb-2">
                    Welcome Back, {user.firstName}!
                  </h2>
                  <p className="text-sm text-white/80 mb-4">
                    Manage your finances easily. Track spending & take control of
                    your budget.
                  </p>

                  {/* Badges */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {/* Joined */}
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                      <span className="bg-white/30 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        📅
                      </span>
                      <div>
                        <p className="text-[10px] font-medium text-white/70">
                          Joined
                        </p>
                        <p className="text-xs font-semibold">
                          {formatDate(user.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Last Sign In */}
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                      <span className="bg-white/30 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ⚡
                      </span>
                      <div>
                        <p className="text-[10px] font-medium text-white/70">
                          Last Sign In
                        </p>
                        <p className="text-xs font-semibold">
                          {formatDate(user.lastSignInAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Add New Record */}
              
              <AddNewRecord />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <Recordchart />
              <ExpenseStats />
            </div>
          </div>

          {/* Full-width Sections */}
          <div className="mt-6 flex flex-col gap-6">
            <Aiinsights />
            <RecordHistory />
          </div>
        </div>
      </main>
    );
  };

  export default Page;
