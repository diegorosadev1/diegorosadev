import React from 'react';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List, X } from 'lucide-react';

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  selectedTech: string[];
  setSelectedTech: (techs: string[]) => void;
  availableTechs: string[];
  sortBy: string;
  setSortBy: (val: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  setSearch,
  selectedTech,
  setSelectedTech,
  availableTechs,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode
}) => {
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  return (
    <div className="space-y-6 mb-12">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search projects by name, description or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-navy-800/50 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-soft-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-grow lg:flex-grow-0">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full lg:w-48 bg-navy-800/50 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-soft-white focus:outline-none focus:border-accent/50 appearance-none cursor-pointer"
            >
              <option value="recent">Most Recent</option>
              <option value="stars">Most Starred</option>
              <option value="relevant">Relevant</option>
              <option value="az">A - Z</option>
            </select>
          </div>

          <div className="flex bg-navy-800/50 border border-white/10 rounded-2xl p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-accent text-navy-900 shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-accent text-navy-900 shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Tech Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-2 text-gray-500 mr-2 text-sm font-medium">
          <Filter size={16} />
          <span>Filter by Tech:</span>
        </div>
        {availableTechs.map(tech => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              selectedTech.includes(tech)
                ? 'bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(121,216,143,0.1)]'
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {tech}
          </button>
        ))}
        {selectedTech.length > 0 && (
          <button 
            onClick={() => setSelectedTech([])}
            className="text-xs text-gray-500 hover:text-accent transition-colors ml-2 underline underline-offset-4"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
