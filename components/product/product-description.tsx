// components/product/product-description.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductDescription() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="details"
    >
      <AccordionItem value="details">
        <AccordionTrigger>
          Details
        </AccordionTrigger>

        <AccordionContent>
          Fresh premium fruits directly from selected
          farmers with guaranteed freshness and quality.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="storage">
        <AccordionTrigger>
          Conservation and storage
        </AccordionTrigger>

        <AccordionContent>
          Store in cool temperature and avoid direct
          sunlight for maximum freshness.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="ingredients">
        <AccordionTrigger>
          Ingredients
        </AccordionTrigger>

        <AccordionContent>
          100% natural fresh fruits without preservatives.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}