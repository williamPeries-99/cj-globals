import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../courses';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Course Not Found</h2>
        <p className="mt-3 text-sm text-slate-600">
          The course you are looking for is unavailable or has been moved.
        </p>
        <button
          type="button"
          className="mt-8 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          onClick={() => navigate(-1)}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 pb-16">
      <section className="relative h-72 w-full overflow-hidden sm:h-96">
        <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col">
            <p className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white backdrop-blur font-heading">
              {course.language ?? 'International Programme'}
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-heading">
              {course.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base">
              {course.synopsis}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">Key Facts</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            {course.keyFacts.map((fact) => (
              <article
                key={fact.label}
                className="flex min-w-[220px] flex-1 flex-col rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{fact.label}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-900">{fact.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">Overview</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{course.overview}</p>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">Learning Objectives</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {course.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">Programme Structure</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {course.structure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">Entry Requirements</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold sm:px-5">Requirement</th>
                  <th className="px-4 py-3 font-semibold sm:px-5">Local Students</th>
                  <th className="px-4 py-3 font-semibold sm:px-5">International Students</th>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-700">
                {course.entryRequirements.map((requirement) => (
                  <tr key={requirement.label} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-4 font-medium text-slate-900 sm:px-5">{requirement.label}</td>
                    <td className="px-4 py-4 sm:px-5">{requirement.local}</td>
                    <td className="px-4 py-4 sm:px-5">{requirement.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white shadow-glow"
            onClick={() =>
              navigate(`/apply?course=${course.id}&country=Australia&education=Bachelors`)
            }
          >
            Apply Now
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            onClick={() => navigate(-1)}
          >
            Back to Courses
          </button>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
