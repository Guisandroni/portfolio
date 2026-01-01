import Building from "@/landing/building/building";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowBigDown, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Building />
    </div>
  );
}
