export interface ProjectMetadata {
  repoName: string;
  customTitle?: string;
  customDescription?: string;
  featured?: boolean;
  demoUrl?: string;
  coverImage?: string;
  category?: string;
  status?: 'Production' | 'In Progress' | 'Experimental' | 'Archived';
  priority?: number;
  architectureHighlights?: string[];
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  "my-awesome-repo": {
    repoName: "my-awesome-repo",
    customTitle: "Premium E-commerce Platform",
    customDescription: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.",
    featured: true,
    demoUrl: "https://demo.example.com",
    coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    category: "Fullstack",
    status: "Production",
    priority: 1,
    architectureHighlights: ["Microservices", "Serverless Functions", "Real-time Inventory"]
  },
  // Add more mappings here based on your actual GitHub repos
};
