import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function CookiesPage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "Legal",
        title: "Cookies notice",
        description:
          "How Cruise Trade News uses cookies and similar local storage. Wireframe placeholder copy.",
      }}
      sections={[
        {
          heading: "Strictly necessary",
          body: [
            "Strictly necessary cookies and local storage support core site functionality including saved topics and saved agent items.",
            "These cannot be disabled while using the site as designed.",
          ],
        },
        {
          heading: "Analytics",
          body: [
            "Aggregated analytics inform editorial and product decisions. No personally identifying data is shared with analytics providers.",
            "You can opt out of analytics in your browser settings.",
          ],
        },
        {
          heading: "Third-party",
          body: [
            "Third-party cookies are limited to embedded media providers and only set when those features are activated.",
            "Where third parties are involved we link to their respective privacy notices.",
          ],
        },
      ]}
    />
  );
}
