"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { delegateItems } from "@/components/delegates/delegates";

const schools = [
  "All Schools",
  "Computing and IT",
  "Pure, Applied and Health Sciences",
  // "Business and Economics",
  "Agriculture and Environmental Sciences",
  "Engineering and Technology",
  "Hospitality and Tourism Management",
  "Education",
  "Humanities and Social Sciences",
];

export default function DelegatesPage() {
  const [selectedSchool, setSelectedSchool] = useState("All Schools");

  // Filter delegates based on selected school
  const filteredDelegates =
    selectedSchool === "All Schools"
      ? delegateItems
      : delegateItems.filter((delegate) => delegate.school === selectedSchool);

  return (
    <div className="p-4">
      {/* Filter Section */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <span className="text-lg text-primary font-medium">Filter by:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {selectedSchool} <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-[90%] sm:w-3/4 md:w-64 mx-auto"
          >
            {schools.map((school) => (
              <DropdownMenuItem key={school} onClick={() => setSelectedSchool(school)}>
                {school}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Delegates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
        {filteredDelegates.map((delegate, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-lg shadow-md">
            <Image
              src={`/delegates/${delegate.image}`}
              alt={delegate.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">{delegate.name}</h3>
              <p className="text-sm text-gray-600">{delegate.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
