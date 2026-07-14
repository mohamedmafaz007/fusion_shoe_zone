import { useSearchParams } from "react-router-dom";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";

export default function MenAccessoriesPage() {
  const [searchParams] = useSearchParams();
  const defaultSub = searchParams.get("subcategory") || "All";

  return (
    <>
      <PageHeader
        crumb="Accessories"
        title="Men's Accessories"
        subtitle="Rings, bracelets, and chains — details that define your style."
      />
      <Section>
        <CatalogControls items={byCategory("accessories")} defaultSubcategory={defaultSub} />
      </Section>
    </>
  );
}
