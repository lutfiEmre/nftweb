import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

interface AccordionItemProps {
    header: string;
    children: React.ReactNode;
}

const FAQAccordion: React.FC = () => {
    const AccordionItem: React.FC<AccordionItemProps> = ({ header, children, ...rest }) => (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <>
                    <h1
                        className={`transition-transform duration-200 ease-out ${
                            isEnter ? "rotate-180" : ""
                        }`}
                    >
                        {isEnter ? "-" : "+"}
                    </h1>
                    {header}
                </>
            )}
            className="-"
            buttonProps={{
                className: ({ isEnter }: { isEnter: boolean }) =>
                    `flex w-full p-4 text-left text-base jost-medium md:text-lg pb-[10px] hover:bg-slate-100 ${
                        isEnter ? "bg-slate-200" : ""
                    }`
            }}
            contentProps={{
                className: "transition-height text-base duration-200 ease-out"
            }}
            panelProps={{ className: "p-4 pb-[20px]" }}
        >
            {children}
        </Item>
    );

    return (
        <div className="flex justify-center mt-[46px] items-center">
            <div className="mx-2 my-4 w-full md:w-full">
                {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
                <Accordion transition transitionTimeout={200}>
                    <AccordionItem header="Q1: What is NFTWeb?">
                        Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                    </AccordionItem>

                    <AccordionItem header="Q2: How does NFTWeb work?">
                        Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                    </AccordionItem>

                    <AccordionItem header="Q3: What are the main features of NFT NFTWeb?">
                        Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                    </AccordionItem>

                    <AccordionItem header="Q4: How can I acquire NFTWeb?">
                        Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                    </AccordionItem>

                    <AccordionItem header="Q5: Is NFT XYCoin open to artists and creators?">
                        Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQAccordion;
