"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Student, 
  formatTimestamp
} from "@/constants/studentsData";
import { 
  Search, 
  ArrowUpDown, 
  Brain, 
  Code2, 
  AlertCircle, 
  Calendar, 
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface CurriculumTimelineProps {
  student: Student;
  title?: string;
  subtitle?: string;
}

export default function CurriculumTimeline({ 
  student, 
  title,
  subtitle 
}: CurriculumTimelineProps) {
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState<"All" | "Tech" | "Chess">("All");
  const [filterStatus, setFilterStatus] = useState<"All" | "Completed" | "Incomplete">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [expandedLogs, setExpandedLogs] = useState<Record<string, boolean>>({});

  const logs = useMemo(() => student.logs || [], [student]);

  // Filter and Search logs
  const processedLogs = useMemo(() => {
    let result = [...logs];

    // Filter by type
    if (filterType !== "All") {
      result = result.filter(log => log.sessionType === filterType);
    }

    // Filter by status
    if (filterStatus !== "All") {
      result = result.filter(log => log.status === filterStatus);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(log => 
        log.topicCovered.toLowerCase().includes(q) || 
        log.whatLearned.toLowerCase().includes(q)
      );
    }

    // Sort order (default in database is chronological, i.e., oldest first)
    if (sortOrder === "newest") {
      result.reverse();
    }

    return result;
  }, [logs, filterType, filterStatus, searchQuery, sortOrder]);

  const totalPages = Math.ceil(processedLogs.length / ITEMS_PER_PAGE) || 1;

  const displayedLogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedLogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [processedLogs, currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const toggleExpand = (timestamp: string) => {
    setExpandedLogs(prev => ({
      ...prev,
      [timestamp]: !prev[timestamp]
    }));
  };

  const displayTitle = title || `${student.slug === "elora" ? "Elora" : "Praise"}'s Reflections & Activity Journal`;
  const displaySubtitle = subtitle || `Real-time learning logs, topics covered, and session summaries`;

  return (
    <motion.section
      className="py-16 px-4 bg-[var(--bg-primary)] border-b border-[var(--border-primary)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {displayTitle}
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {displaySubtitle}
          </p>
        </motion.div>

        {/* Toolbar: Search, Filters, and Sorting */}
        <motion.div 
          className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-primary)] shadow-md mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search topics or learnings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--brand-primary)] text-sm transition-all"
              />
            </div>

            {/* Sorting Toggle */}
            <button
              onClick={() => setSortOrder(prev => prev === "newest" ? "oldest" : "newest")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-primary)] hover:border-[var(--brand-primary)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-semibold transition-all"
            >
              <ArrowUpDown className="w-4 h-4 text-[var(--text-tertiary)]" />
              {sortOrder === "newest" ? "Newest First" : "Oldest First"}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--border-primary)]/50">
            {/* Session Type Filters */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wider mr-2">Track:</span>
              {(["All", "Tech", "Chess"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterType === type
                      ? "bg-[var(--brand-primary)] text-white shadow-sm"
                      : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                  }`}
                >
                  {type === "All" ? "All Tracks" : type}
                </button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wider mr-2">Status:</span>
              {(["All", "Completed", "Incomplete"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterStatus === status
                      ? "bg-[var(--brand-primary)] text-white shadow-sm"
                      : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Logs Timeline */}
        <div className="relative pl-6 md:pl-8 border-l border-[var(--border-primary)]/80 ml-4 space-y-6">
          <AnimatePresence mode="popLayout">
            {displayedLogs.length > 0 ? (
              displayedLogs.map((log, index) => {
                const isChess = log.sessionType === "Chess";
                const isCompleted = log.status === "Completed";
                const isExpanded = !!expandedLogs[log.timestamp];
                const formattedDate = formatTimestamp(log.timestamp);

                return (
                  <motion.div
                    key={log.timestamp}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Timeline Node Connector */}
                    <div className={`absolute -left-10 md:-left-12 top-6 w-8 h-8 rounded-full border-4 border-[var(--bg-primary)] shadow-md flex items-center justify-center z-10 ${
                      isChess ? 'bg-purple-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {isChess ? <Brain className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                    </div>

                    {/* Timeline Card */}
                    <div 
                      className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[var(--brand-primary)] transition-all duration-300`}
                    >
                      {/* Log Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div>
                          {/* Tags */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              isChess ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                            }`}>
                              {log.sessionType}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              isCompleted ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
                            }`}>
                              {log.status}
                            </span>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                            {log.topicCovered}
                          </h3>
                        </div>

                        {/* Metadata: Date and Duration */}
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 text-xs text-[var(--text-secondary)] font-semibold shrink-0">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                            {formattedDate.split(' • ')[0]}
                          </span>
                          <span className="text-[var(--text-tertiary)] sm:mt-1 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                            {log.duration}
                          </span>
                        </div>
                      </div>

                      {/* What I Learned Section */}
                      <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-primary)]/60">
                        <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                          Learner Reflection & Challenges
                        </h4>
                        
                        <p className={`text-sm text-[var(--text-secondary)] leading-relaxed italic ${!isExpanded ? 'line-clamp-2 md:line-clamp-3' : ''}`}>
                          &quot;{log.whatLearned}&quot;
                        </p>
                        
                        {log.whatLearned.length > 140 && (
                          <button
                            onClick={() => toggleExpand(log.timestamp)}
                            className="text-xs font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] mt-2 transition-all block focus:outline-none"
                          >
                            {isExpanded ? "Read Less" : "Read Full Reflection"}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl"
              >
                <AlertCircle className="w-12 h-12 text-[var(--text-tertiary)] mx-auto mb-3" />
                <p className="text-[var(--text-secondary)] font-medium">No activity logs found matching your filters.</p>
                <button
                  onClick={() => {
                    setFilterType("All");
                    setFilterStatus("All");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs font-bold text-[var(--brand-primary)] underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-6 mt-8 border-t border-[var(--border-primary)]/80">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed border-[var(--border-primary)] text-[var(--text-tertiary)]"
                  : "border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[var(--text-secondary)] font-medium mr-2 hidden sm:inline">
                Page {currentPage} of {totalPages}
              </span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === page
                      ? "bg-[var(--brand-primary)] text-white shadow-sm"
                      : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                currentPage >= totalPages
                  ? "opacity-40 cursor-not-allowed border-[var(--border-primary)] text-[var(--text-tertiary)]"
                  : "border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}