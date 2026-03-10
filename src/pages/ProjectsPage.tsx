import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Search,
  AlertCircle,
  RefreshCcw,
  ArrowLeft,
  Github,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchGithubProjects,
  EnrichedProject,
} from "../services/githubService";
import ProjectCard, {
  ProjectSkeleton,
} from "../components/projects/ProjectCard";
import FilterBar from "../components/projects/FilterBar";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<EnrichedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    loadProjects();
    window.scrollTo(0, 0);
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchGithubProjects();
      setProjects(data);
    } catch (err) {
      setError("Erro ao carregar projetos. Verifique sua conexão ou token.");
    } finally {
      setLoading(false);
    }
  };

  const availableTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => techs.add(t)));
    return Array.from(techs).slice(0, 15);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      const matchesSearch =
        project.displayName.toLowerCase().includes(search.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(search.toLowerCase()),
        );
      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.every((tech) => project.techStack.includes(tech));
      return matchesSearch && matchesTech;
    });

    result.sort((a, b) => {
      if (sortBy === "recent")
        return b.lastDeploymentDate - a.lastDeploymentDate;
      if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      return 0;
    });

    return result;
  }, [projects, search, selectedTech, sortBy]);

  return (
    // Alterado para bg-navy-900 (ou sua cor de fundo dark da home)
    <div className="pt-32 pb-24 bg-[#121214] min-h-screen relative overflow-hidden">
      {/* Background Visuals - Elementos que removem o aspecto de "fundo azul chapado" */}
      <div className="absolute inset-0 z-0">
        {/* Glow de profundidade dark */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[#79D88F]/5 rounded-full blur-[150px] -translate-y-1/2" />
        {/* Overlay de grid sutil igual da Home */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#79D88F 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 top-30">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#79D88F] transition-colors mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para Home
        </Link>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#79D88F]/10 border border-[#79D88F]/20 text-[#79D88F] text-xs font-bold mb-6"
          >
            <Rocket size={14} />
            CATÁLOGO COMPLETO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-[#E6EDF7] mb-6 tracking-tight"
          >
            Projetos<span className="text-[#79D88F]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
          >
            Explore minha jornada completa de engenharia. Use os filtros abaixo
            para navegar por tecnologia ou buscar funcionalidades específicas.
          </motion.p>
        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          availableTechs={availableTechs}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <div className="relative mt-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <motion.div
              layout
              className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={(p) => navigate(`/projects/${p.name}`)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-[#202024]/30 backdrop-blur-md rounded-3xl border border-white/10 text-center">
              <Search size={32} className="text-gray-600 mb-6" />
              <h3 className="text-2xl font-bold text-[#E6EDF7] mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-500 mb-8 max-w-md">
                Tente ajustar sua busca ou limpar os filtros.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedTech([]);
                }}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
