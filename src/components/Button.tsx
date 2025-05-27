"use client";
import * as React from "react";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type="button" // Default to "button" type
      className={`
        flex items-center justify-center 
        h-8 px-3 
        font-medium text-gray-600 
        bg-gray-50 hover:bg-gray-100 active:bg-gray-200
        border border-gray-300 rounded-sm 
        select-none 
        focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
