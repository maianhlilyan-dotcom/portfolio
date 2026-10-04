import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject } from "@/lib/projects";

export default function Page() { const project = getProject("vital"); if (!project) notFound(); return <ProjectDetail project={project} />; }
export const metadata: Metadata = { title: "VITAL", description: "VITAL virtual AI wallet product design case study." };
