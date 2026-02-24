import PublicPageContainer from "@/components/ui/PublicPageContainer";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicPageContainer>
      <div className="relative min-h-[calc(100vh-80px)] bg-[var(--bg-primary)] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[var(--brand-primary)]/5 blur-[120px]" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-[var(--brand-primary-light)]/5 blur-[100px]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--brand-primary)]/5 blur-[150px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">{children}</div>
      </div>
    </PublicPageContainer>
  );
}
