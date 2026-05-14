import { SectionLabel } from "@/components/ui/SectionLabel";
import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function ContactPage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "Contact",
        title: "Get in touch",
        description:
          "Editorial, commercial, and event enquiries. We typically respond within one working day.",
      }}
      sections={[
        {
          heading: "Editorial",
          body: [
            "Story tips, pitches, and corrections go to the editorial desk.",
            "If you are an industry source on background we will agree appropriate attribution before publication.",
          ],
        },
        {
          heading: "Commercial",
          body: [
            "Advertising, partnership, and sponsorship enquiries go to the commercial team.",
            "We publish a current rate card on the advertise page.",
          ],
        },
        {
          heading: "Events",
          body: [
            "Wave Awards, Cruise Summit, Cruise Stars, and Cruise Challenge enquiries route through the events team.",
            "Please note the event you are interested in when you write.",
          ],
        },
      ]}
      aside={
        <div className="border border-zinc-200 bg-zinc-50 p-5">
          <SectionLabel>Wireframe note</SectionLabel>
          <p className="mt-3 text-sm text-zinc-700">
            In the live site this page hosts a contact form with structured routing.
            For the prototype the form is intentionally omitted.
          </p>
        </div>
      }
    />
  );
}
