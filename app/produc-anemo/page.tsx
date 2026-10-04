import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject } from "@/lib/projects";

export default function Page() { const project = getProject("anemo"); if (!project) notFound(); return <ProjectDetail project={project} />; }
export const metadata: Metadata = { title: "ANEMO", description: "ANEMO AI resource-management platform case study." };
