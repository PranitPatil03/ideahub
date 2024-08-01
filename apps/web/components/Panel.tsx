import clsx from "clsx";
import type React from "react";

interface PanelProps {
  children: React.ReactNode;
  title?: string;
  classes?: string;
  full?: boolean;
  white?: boolean;
}

export const Panel = ({ children, title, classes, full }: PanelProps) => {
  return (
    <div
      className={clsx(
        "rounded-lg bg-white text-gray-700 shadow",
        !full && "px-8 py-7",
        classes,
      )}
    >
      {title && (
        <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export const GradientPanel = ({
  children,
  title,
  classes,
  full,
}: PanelProps) => {
  return (
    <div>
      <div className="rounded-lg bg-gradient-to-l from-sky-500 via-indigo-400 to-cyan-400 p-0.5 shadow-md">
        <div
          className={clsx("rounded-md bg-white text-gray-700", classes, {
            "p-4 sm:p-6 md:px-8 md:py-7": !full,
          })}
        >
          {title && (
            <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
