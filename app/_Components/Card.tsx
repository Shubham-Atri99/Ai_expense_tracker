"use client";

import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-4 text-3xl text-violet-500">{icon}</div>
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </h3>
      <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
