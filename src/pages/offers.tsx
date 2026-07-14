
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ProductGrid } from "@/components/site/ProductGrid";
import { products } from "@/data/products";



export default function OffersPage() {
  const deals = products.filter((p) => p.oldPrice);
  return (
    <>
      <PageHeader crumb="Offers" title="Up to 50% Off" subtitle="Limited-time deals across every category. When they're gone, they're gone." />
      <Section>
        <ProductGrid items={deals} />
      </Section>
    </>
  );
}
