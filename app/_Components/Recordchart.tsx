"use client";

import { useEffect, useState } from "react";
import getRecords from "../Actions/Getrecords";
import BarChart from "./BarChat";
import { Record } from "@prisma/client";

export default function RecordChart() {
  const [records, setRecords] = useState<Record[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecords() {
      const { records, error } = await getRecords();
      if (error) {
        setError(error);
      } else if (records) {
        setRecords(records);
      }
      setLoading(false);
    }

    loadRecords();
  }, []); // ✅ runs only once

  if (loading) {
    return <div className="p-4">Loading chart...</div>;
  }

  if (error) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl">
        <h3 className="text-lg font-bold text-red-600">Error loading chart</h3>
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl">
        <h3 className="text-lg font-bold">No Data to Display</h3>
        <p className="text-sm text-gray-500">
          Start tracking your expenses to see your spending patterns visualized in this chart.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl">
      <h3 className="text-lg font-bold mb-4">Expense Chart</h3>
      <div className="overflow-x-auto">
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
}
