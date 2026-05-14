import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { MagazineGrid } from "@/components/sections/MagazineGrid";
import { getIssuesForBrand } from "@/data/magazines";

export default function CtnDigitalBrandPage() {
  const issues = getIssuesForBrand("ctn-digital");
  return (
    <>
      <PageHero
        eyebrow="Magazines"
        title="CTN Digital"
        description="The quarterly digital edition focused on agency tech, distribution, and marketing."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Magazines", href: "/magazines" },
            { label: "CTN Digital" },
          ]}
        />
        <div className="mt-8">
          <MagazineGrid issues={issues} />
        </div>
      </Container>
    </>
  );
}
