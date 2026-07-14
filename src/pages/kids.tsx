
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";



export default function KidsPage() {
  return (
    <>
      <PageHeader
        crumb="Kids Collection"
        title="Kids Collection"
        subtitle="Soft materials, bright colors and big personality — ready for every adventure."
      />
      <Section>
        <CatalogControls items={byCategory("kids")} />
      </Section>
    </>
  );
}
