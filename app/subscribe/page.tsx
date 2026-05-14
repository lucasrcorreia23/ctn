import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function SubscribePage() {
  return (
    <>
      <SimpleContentPageTemplate
        hero={{
          eyebrow: "Subscribe",
          title: "Subscribe to Cruise Trade News",
          description:
            "Receive the monthly print magazine, the quarterly digital edition, and the weekly editorial briefing.",
        }}
        sections={[
          {
            heading: "What you get",
            body: [
              "Twelve monthly print issues of Cruise Trade News, delivered to your agency address.",
              "Four issues per year of CTN Digital, our quarterly digital deep-dive on agency tech, distribution, and marketing.",
              "The CTN Briefing, our weekly editorial newsletter for the UK cruise trade.",
            ],
          },
          {
            heading: "Who can subscribe",
            body: [
              "CTN is a trade publication. Subscriptions are open to verified UK cruise trade individuals and agencies.",
              "If you are not in the UK trade, please get in touch with the editorial team for guidance.",
            ],
          },
        ]}
        aside={
          <div className="border border-zinc-200 bg-zinc-50 p-5">
            <SectionLabel>Wireframe note</SectionLabel>
            <p className="mt-3 text-sm text-zinc-700">
              The subscription flow is wireframed via the newsletter signup below. The
              live site uses a verified-trade subscription form.
            </p>
          </div>
        }
      />
      <NewsletterCTA
        title="Start with the CTN Briefing"
        description="The fastest way to sample CTN is to sign up to the weekly newsletter."
      />
    </>
  );
}
