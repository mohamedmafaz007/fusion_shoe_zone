
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ProductGrid } from "@/components/site/ProductGrid";
import { newArrivals } from "@/data/products";



export default function NewArrivalsPage() {
  return (
    <>
      <PageHeader crumb="New Arrivals" title="Just Landed" subtitle="This week's freshest additions across every category." />
      <Section>
        <ProductGrid items={newArrivals()} />
      </Section>
    </>
  );
}
