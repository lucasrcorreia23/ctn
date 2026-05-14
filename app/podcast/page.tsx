import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PodcastBlock } from "@/components/sections/PodcastBlock";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { podcastEpisodes } from "@/data/podcast";

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="Podcast"
        title="The CTN Podcast"
        description="Conversations with the people shaping the UK cruise trade. New episodes most weeks."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Podcast" }]}
        />
        <div className="mt-10">
          <PodcastBlock episodes={podcastEpisodes} />
        </div>
      </Container>
      <NewsletterCTA />
    </>
  );
}
