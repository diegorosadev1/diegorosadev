import {
  projectsMetadata,
  ProjectMetadata,
} from "../constants/projectsMetadata";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  archived: boolean;
  fork: boolean;
  homepage: string;
}

export interface EnrichedProject extends GitHubRepo {
  metadata?: ProjectMetadata;
  displayName: string;
  displayDescription: string;
  isFeatured: boolean;
  techStack: string[];
  vercelUrl?: string;
  lastDeploymentDate: number;
  isOnline: boolean;
}

const GITHUB_USERNAME = "diegorosadev1";
// Correção do erro "Property env does not exist"
const VERCEL_TOKEN = (import.meta as any).env.VITE_VERCEL_TOKEN;

export async function fetchGithubProjects(): Promise<EnrichedProject[]> {
  try {
    const [repoResponse, vercelResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
      fetch(`https://api.vercel.com/v6/deployments?limit=50`, {
        headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
      }),
    ]);

    if (!repoResponse.ok) throw new Error("Failed to fetch GitHub data");

    const repos: GitHubRepo[] = await repoResponse.json();
    const vercelData = vercelResponse.ok ? await vercelResponse.json() : { deployments: [] };

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => {
        const metadata = projectsMetadata[repo.name];
        const deployment = vercelData.deployments?.find(
          (d: any) =>
            d.name.toLowerCase().includes(repo.name.toLowerCase()) ||
            (repo.homepage && d.url && repo.homepage.includes(d.url)),
        );

        const techStack = Array.from(
          new Set([
            repo.language,
            ...(repo.topics || []),
            ...(metadata?.category ? [metadata.category] : []),
          ]),
        ).filter(Boolean) as string[];

        return {
          ...repo,
          metadata,
          displayName: metadata?.customTitle || repo.name.replace(/-/g, " "),
          displayDescription: metadata?.customDescription || repo.description || "No description available.",
          isFeatured: metadata?.featured || false,
          techStack,
          vercelUrl: deployment ? `https://${deployment.url}` : repo.homepage,
          lastDeploymentDate: deployment ? deployment.ready : new Date(repo.updated_at).getTime(),
          isOnline: deployment ? deployment.state === "READY" : false,
        };
      })
      .sort((a, b) => b.lastDeploymentDate - a.lastDeploymentDate);
  } catch (error) {
    console.error("Error fetching integrated projects:", error);
    return [];
  }
}