
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";



export default function ShoesPage() {
  return (
    <>
      <PageHeader
        crumb="Shoes"
        title="The Shoe Edit"
        subtitle="From street-ready sneakers to boardroom-worthy oxfords — step into premium."
      />
      <Section>
        <CatalogControls items={byCategory("shoes")} />
      </Section>
    </>
  );
}
