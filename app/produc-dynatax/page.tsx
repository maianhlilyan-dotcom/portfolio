import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject } from "@/lib/projects";

export default function Page() { const project = getProject("dynatax"); if (!project) notFound(); return <ProjectDetail project={project} />; }
export const metadata: Metadata = { title: "DynaTax Business Management", description: "DynaTax business-management product design case study." };
