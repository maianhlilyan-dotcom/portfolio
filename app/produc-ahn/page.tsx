import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject } from "@/lib/projects";

export default function Page() { const project = getProject("ahn-group"); if (!project) notFound(); return <ProjectDetail project={project} />; }
export const metadata: Metadata = { title: "AHN Group", description: "AHN Group digital product design case study." };
