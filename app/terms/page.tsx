import { SimpleContentPageTemplate } from "@/components/templates/SimpleContentPageTemplate";

export default function TermsPage() {
  return (
    <SimpleContentPageTemplate
      hero={{
        eyebrow: "Legal",
        title: "Terms of use",
        description:
          "By accessing Cruise Trade News you agree to the following terms. This is a wireframe placeholder copy.",
      }}
      sections={[
        {
          heading: "Use of the site",
          body: [
            "You agree to use Cruise Trade News only for lawful purposes and in a way that does not infringe the rights of others.",
            "Editorial content remains the property of Cruise Trade News. Limited fair-use quotation is welcome with attribution.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "Where future site features require an account, you agree to provide accurate information and to maintain the confidentiality of your credentials.",
            "We reserve the right to suspend accounts where activity breaches these terms.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "Cruise Trade News content is published for general information. We take reasonable care to ensure accuracy but make no warranty.",
            "Decisions taken in reliance on CTN content are the responsibility of the reader.",
          ],
        },
      ]}
    />
  );
}
