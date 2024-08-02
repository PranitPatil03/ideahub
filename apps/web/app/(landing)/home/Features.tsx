"use client";

import React from "react";
import { Sparkles, MenuSquare, Check } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  mainClassName?: string;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  className,
  mainClassName,
}) => (
  <div
    className={`flex flex-col p-5 border rounded-3xl shadow-md ${mainClassName}`}
  >
    <div
      className={`flex items-center justify-center w-12 h-12 bg-secondary-bg rounded-full mb-4 border ${className}`}
    >
      {icon}
    </div>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-10">
      {title}
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-justify">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="bg-white pt-16 md:pt-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mt-10">
          <div className="mx-auto max-w-xl flex flex-col items-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight border bg-secondary-bg rounded-2xl w-fit text-center px-3 py-1">
              Features
            </h2>
            <p className="mt-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900">
              Reasons you will love us.
            </p>
            {/* <p className="mt-6 text-base text-gray-600">
              Discover the advantages of elevate and see how we can elevate your
              resume.
            </p> */}
          </div>
        </div>

        <div className="md:hidden mt-16 flex flex-col gap-5 mb-5">
          <Feature
            icon={<Sparkles className="w-6 h-6" />}
            title="Idea Validation"
            description="A platform for users to submit and get feedback on their ideas, helping them determine viability and refine concepts."
          />
          <Feature
            icon={<MenuSquare className="w-6 h-6" />}
            title="Connecting Collaborators"
            description=" Enabling users to find and team up with skilled individuals who can contribute to overcoming specific challenges and bringing ideas to life."
          />
          <Feature
            icon={<Check className="w-6 h-6" />}
            title="Providing Support for Problems"
            description="Allowing users to share issues they encounter with their projects and receive targeted advice and solutions from the community"
          />
          <Feature
            icon={<Sparkles className="w-6 h-6" />}
            title="Streamlining Team Collaboration"
            description="Simplifying the process of forming and managing teams, with integrated tools for effective communication and project management."
          />
          <Feature
            icon={<Sparkles className="w-6 h-6" />}
            title="Progress Tracking"
            description="Track the development and progress of projects with shared workspaces, milestones, and updates."
          />
        </div>

        <div className="hidden md:flex flex-row gap-10 mt-16 mb-5">
          <div className="flex flex-col gap-5 w-2/3">
            <Feature
              icon={<Sparkles className="w-6 h-6" />}
              title="Idea Validation"
              description="A platform for users to submit and get feedback on their ideas, helping them determine viability and refine concepts"
              mainClassName="h-full"
            />
            <Feature
              icon={<MenuSquare className="w-6 h-6" />}
              title="Connecting Collaborators"
              description="Enabling users to find and team up with skilled individuals who can contribute to overcoming specific challenges and bringing ideas to life."
              mainClassName="h-full"
            />
          </div>

          <div className="flex flex-col gap-10 w-full">
            <Feature
              icon={<Check className="w-6 h-6" />}
              title="Providing Support for Problems"
              description="Allowing users to share issues they encounter with their projects and receive targeted advice and solutions from the community."
            />
            <div className="flex flex-row gap-10">
              <Feature
                icon={<Sparkles className="w-6 h-6" />}
                title=" Team Collaboration"
                description="Simplifying the process of forming and managing teams, with integrated tools for effective communication and project management."
                mainClassName="w-full"
              />
              <Feature
                icon={<Sparkles className="w-6 h-6" />}
                title=" Resource Access"
                description="Giving users access to resources, mentorship, and tools needed to support and advance their projects." mainClassName="w-full hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
