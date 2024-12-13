import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from "@/utils/constants"


const FAQsPage = () => {
  return (
    <div className="container">
      <h2 className='text-center text-3xl font-bold text-primary my-4 md:mb-8 md:mt-0'>Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="max-w-[600px] mx-auto mb-8">
        {FAQS.map((item, index) => (
          <AccordionItem key={item + index} value={item + index}>
            <AccordionTrigger className='text-left'>{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQsPage