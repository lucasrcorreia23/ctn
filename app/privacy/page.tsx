import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function PrivacyPage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "Legal",
        title: "Privacy notice",
        description:
          "How Cruise Trade News collects, uses, and protects personal data. Wireframe placeholder copy.",
      }}
      sections={[
        {
          heading: "What we collect",
          body: [
            "We collect limited personal data when you subscribe to the newsletter, register for an event, or contact the editorial team.",
            "We do not sell personal data to third parties.",
          ],
        },
        {
          heading: "How we use data",
          body: [
            "Subscriber data is used to deliver the products you have signed up for and to send service communications.",
            "Aggregated, non-identifying analytics support editorial planning.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can request access, correction, or deletion of your personal data at any time via the contact page.",
            "We will respond within the period required by UK data protection law.",
          ],
        },
      ]}
    />
  );
}
