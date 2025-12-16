import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getStudentBySlug, getAllStudents } from '@/constants/studentsData';
import ProjectPage from '@/components/projects/ProjectPage';
import StructuredData from '@/components/seo/StructuredData';
import { generateScholarMetadata, generateScholarSchema, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

// Force dynamic rendering to avoid serialization issues with React components
export const dynamic = 'force-dynamic';

// Generate static params for all students
export async function generateStaticParams() {
  const students = getAllStudents();
  return students.map((student) => ({
    studentSlug: student.slug,
  }));
}

// Generate metadata for each scholar page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ studentSlug: string }>;
}): Promise<Metadata> {
  const { studentSlug } = await params;
  const student = getStudentBySlug(studentSlug);

  if (!student) {
    return {
      title: 'Scholar Not Found | Chessncode',
    };
  }

  return generateScholarMetadata(student);
}

export default async function StudentProjectPage({
  params,
}: {
  params: Promise<{ studentSlug: string }>;
}) {
  const { studentSlug } = await params;
  const student = getStudentBySlug(studentSlug);

  if (!student) {
    notFound();
  }

  // Generate structured data for this scholar page
  const scholarSchema = generateScholarSchema(student);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: student.name, url: `/projects/${student.slug}` },
  ]);
  const webpageSchema = generateWebPageSchema({
    title: `${student.name} - ${student.chessBackground}`,
    description: `${student.quote} Currently working towards: ${student.currentGoal}.`,
    url: `/projects/${student.slug}`,
    image: student.image,
  });

  return (
    <>
      <StructuredData data={[scholarSchema, breadcrumbSchema, webpageSchema]} />
      {/* Pass only the slug to avoid serialization issues with React components */}
      <ProjectPage studentSlug={studentSlug} />
    </>
  );
}

