import { SectionLabel } from "@/components/ui/SectionLabel";
import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function AdvertisePage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "Advertise",
        title: "Reach the UK cruise trade",
        description:
          "CTN reaches the active cruise-selling community across print, digital, podcast, and events.",
      }}
      sections={[
        {
          heading: "Audience",
          body: [
            "CTN is read by agency owners, branch managers, cruise specialists, and frontline travel consultants across the UK.",
            "Our audience is operationally engaged: most read CTN as part of their working day rather than as a leisure title.",
          ],
        },
        {
          heading: "Channels",
          body: [
            "We offer print, digital, podcast, newsletter, and events partnership opportunities. Bundled cross-channel campaigns are available.",
            "The commercial team can build a custom plan around a campaign window or product launch.",
          ],
        },
        {
          heading: "Get started",
          body: [
            "Request the current rate card via the contact page and we will follow up with a media kit.",
          ],
        },
      ]}
      aside={
        <div className="border border-zinc-200 bg-zinc-50 p-5">
          <SectionLabel>Quick facts</SectionLabel>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>Monthly print to verified trade</li>
            <li>Weekly editorial newsletter</li>
            <li>Quarterly digital edition</li>
            <li>Weekly trade podcast</li>
          </ul>
        </div>
      }
    />
  );
}
