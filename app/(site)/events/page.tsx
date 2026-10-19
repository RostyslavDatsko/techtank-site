import type { Metadata } from "next";
import { Suspense } from "react";
import { EventPageContent } from "./content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "All TechTank TO events — upcoming meetups and past recaps. Year-round in-person events in Toronto since 2023.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <Suspense>
      <EventPageContent />
    </Suspense>
  );
}
