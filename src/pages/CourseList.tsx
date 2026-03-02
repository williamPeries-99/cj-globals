import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../courses';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedCard } from '../components/AnimatedCard';

const CourseList: React.FC = () => {
  const navigate = useNavigate();
  const [levelFilter, setLevelFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const levels = ['All', 'Diploma', 'Higher Diploma', 'Advanced Diploma', 'Postgraduate Diploma'];

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return COURSES.filter((course) => {
      const title = course.title.toLowerCase();
      const synopsis = course.synopsis.toLowerCase();

      const matchesSearch =
        !query || title.includes(query) || synopsis.includes(query);

      let matchesLevel = true;
      if (levelFilter !== 'All') {
        matchesLevel = course.title.toLowerCase().startsWith(levelFilter.toLowerCase());
      }

      return matchesSearch && matchesLevel;
    });
  }, [levelFilter, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center mb-2">
        Programmes
      </p>
      <SectionHeader
        title="Explore Our Courses"
        subtitle="Browse certificates, diplomas and postgraduate programmes designed for real hospitality and business careers."
        align="center"
        className="mb-8"
      />

      {/* Filters */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur px-4 py-4 md:px-6 md:py-5 shadow-[0_12px_30px_rgba(2,6,23,0.06)]">
        <div className="flex flex-wrap gap-2">
          {levels.map((lvl) => {
            const isActive = lvl === levelFilter;
            return (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={[
                  'px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-colors',
                  isActive
                    ? 'bg-accent text-primary border-accent'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50',
                ].join(' ')}
              >
                {lvl}
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search by course name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredCourses.map((course) => (
          <AnimatedCard
            key={course.id}
            className="flex flex-col justify-between h-full rounded-[2rem]"
          >
            <div className="space-y-3">
              <div className="overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-slate-50/80">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-primary">
                {course.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {course.synopsis}
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                {course.language ?? 'International Programme'}
              </span>
              <button
                className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                Learn More
              </button>
            </div>
          </AnimatedCard>
        ))}
        {filteredCourses.length === 0 && (
          <div className="col-span-full text-center text-slate-500 text-sm">
            No courses match your filters. Try adjusting the level or search text.
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
