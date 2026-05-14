import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { MagazineGrid } from "@/components/sections/MagazineGrid";
import { getIssuesForBrand } from "@/data/magazines";

export default function CruiseTradeNewsBrandPage() {
  const issues = getIssuesForBrand("cruise-trade-news");
  return (
    <>
      <PageHero
        eyebrow="Magazines"
        title="Cruise Trade News"
        description="The flagship monthly print and digital magazine for the UK cruise trade."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Magazines", href: "/magazines" },
            { label: "Cruise Trade News" },
          ]}
        />
        <div className="mt-8">
          <MagazineGrid issues={issues} />
        </div>
      </Container>
    </>
  );
}
