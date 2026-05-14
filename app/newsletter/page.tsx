import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { PageHero } from "@/components/sections/PageHero";

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="The CTN Briefing"
        description="A weekly editorial briefing for the UK cruise trade. Curated by the CTN newsroom."
      />
      <NewsletterCTA
        title="Subscribe in one step"
        description="No spam, no fluff. The CTN Briefing lands every Friday morning."
      />
    </>
  );
}
