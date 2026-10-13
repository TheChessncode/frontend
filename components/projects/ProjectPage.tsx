"use client";

import { useMemo } from 'react';
import PublicPageContainer from '@/components/ui/PublicPageContainer';
import CurriculumTimeline from './CurriculumTimeline';
import CurrentFocus from './CurrentFocus';
import GraduateSummary from './GraduateSummary';
import HeroSection from './HeroSection';
import CertificationSection from './CertificationSection';
import { getStudentBySlug } from '@/constants/studentsData';

interface ProjectPageProps {
  studentSlug: string;
}

export default function ProjectPage({ studentSlug }: ProjectPageProps) {
  // Fetch student data on client side to avoid serialization issues with React components
  const student = useMemo(() => {
    return getStudentBySlug(studentSlug);
  }, [studentSlug]);

  if (!student) {
    return (
      <PublicPageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--text-primary)]">Student not found</p>
        </div>
      </PublicPageContainer>
    );
  }

  return (
    <PublicPageContainer>
      <HeroSection student={student} />
      {student.graduation ? (
        <section className="bg-[var(--bg-primary)] py-16 px-4">
          <div className="max-w-6xl mx-auto"><GraduateSummary student={student} detailed /></div>
        </section>
      ) : <CurriculumTimeline student={student} />}
      {/* {student.dataAnalysisCurriculum && (
        <CurriculumTimeline 
          student={student} 
          curriculum={student.dataAnalysisCurriculum}
          title="Data Analysis Program"
          subtitle="6-month comprehensive Data Analysis curriculum"
        />
      )} */}
      <CurrentFocus student={student} />
      <CertificationSection student={student} />
    </PublicPageContainer>
  );
}