"use client";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an Error"
      className="rounded bg-red-950 p-1 text-sm font-semibold uppercase leading-none tracking-wider text-red-500 transition-colors duration-300 hover:bg-red-500 hover:text-red-950"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="relative mt-8 rounded-lg border border-gray-300 p-6">
      {/* The badge floats on the top border; it no longer wraps the content. */}
      <div className="absolute left-4 top-0 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in ErrorWrapper" />
      </div>

      {/* Page content now renders in normal flow, so it's actually visible. */}
      {children}
    </div>
  );
};
