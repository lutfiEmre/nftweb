import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

interface AccordionItemProps {
    header: string;
    content: string;
}

const FAQAccordion: React.FC = () => {
    const items: AccordionItemProps[] = [
        { header: "What is XYCoin?", content: "XYCoin is a cryptocurrency..." },
        { header: "How to buy XYCoin?", content: "You can buy XYCoin on..." },
        // Add more items as needed
    ];

    return (
        <Accordion>
            {items.map((item, index) => (
                <Item key={index} header={item.header}>
                    {item.content}
                </Item>
            ))}
        </Accordion>
    );
};

export default FAQAccordion;
