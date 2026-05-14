import { SectionLabel } from "@/components/ui/SectionLabel";
import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function AboutPage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "About",
        title: "About Cruise Trade News",
        description:
          "Cruise Trade News is the editorial trade publication for the UK cruise sector, covering ocean, river, luxury, expedition, and cabin product for travel agents.",
      }}
      sections={[
        {
          heading: "What we cover",
          body: [
            "CTN reports daily on the UK cruise sector from a trade-first perspective. Our coverage is organised around ocean, river, luxury, expedition, and cabin product.",
            "Alongside the newsroom, CTN publishes long-form analysis, agent interviews, marketing tips, and structured cruise reviews.",
          ],
        },
        {
          heading: "How we work",
          body: [
            "CTN is editorially independent. We accept advertising and sponsored content but our editorial decisions are made by the editorial team alone.",
            "We are committed to a working agent perspective in every piece we publish.",
          ],
        },
        {
          heading: "Contact the newsroom",
          body: [
            "Email the editorial desk via the contact page or pitch a story directly to the relevant section editor.",
          ],
        },
      ]}
      aside={
        <div className="border border-zinc-200 bg-zinc-50 p-5">
          <SectionLabel>CTN at a glance</SectionLabel>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>Founded 2001</li>
            <li>Monthly print magazine</li>
            <li>Quarterly digital edition</li>
            <li>Weekly podcast</li>
            <li>Annual events programme</li>
          </ul>
        </div>
      }
    />
  );
}
