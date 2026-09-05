import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CourseCTA, MobileCourseCta } from '@/components/course/course-cta';
import {
  ApplicationAreas,
  AudienceSection,
  CapabilitySection,
  CourseDetails,
  CourseHero,
  CourseOverview,
  DeliverablesSection,
  FAQ,
  IllustrativeExample,
  LearningJourney,
  MethodSection,
  TrustSection,
} from '@/components/course/course-sections';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { courses, courseSlugs } from '@/content/formacoes';
import { createPageMetadata } from '@/lib/metadata';

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];

  if (!course) return {};

  return createPageMetadata(course.metadata.title, course.metadata.description);
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses[slug];

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-[#f3f0e7] text-[#101412]">
      <SiteHeader />
      <CourseHero course={course} />
      <CourseOverview course={course} />
      <AudienceSection course={course} />
      <LearningJourney course={course} />
      <MethodSection course={course} />
      <DeliverablesSection course={course} />
      <IllustrativeExample course={course} />
      <ApplicationAreas course={course} />
      <CapabilitySection course={course} />
      <TrustSection course={course} />
      <CourseDetails course={course} />
      <FAQ course={course} />
      <CourseCTA course={course} />
      <SiteFooter contextKey="formacao_especialista" ctaId="footer-whatsapp" />
      <MobileCourseCta />
    </main>
  );
}
