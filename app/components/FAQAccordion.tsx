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
                    <AccordionItem header="Q1: What can be done in the dApp?">
                        Individuals or brands create activity/advertisement. Users can earn by completing these activities.
                    </AccordionItem>

                    <AccordionItem header="Q2: How can people benefit from this dApp?">
                        Users who create activities/ads within the app keep the ecosystem alive and make profits with
                        monthly token rewards. Users who complete these created activities can share the created reward
                        pools and earn income.
                    </AccordionItem>

                    <AccordionItem header="Q3: Who can create activities/ads in the dApp?">
                        Activator Gem NFT owners can create activities.
                    </AccordionItem>

                    <AccordionItem header="Q4: How can Activate Earth users participate in activities?">
                        They can participate by holding/staking the Activate Earths own tokens in their web3 wallet.
                    </AccordionItem>

                    <AccordionItem header="Q5: What are the advantages of NFTs?">
                        Each piece in the Activator Gem NFT Collection will be able to create an in-dApp activity/reward pool
                        and will be able to benefit from creator rewards to be distributed within the dApp. In addition,
                        whitelist priority will be provided in the airdrop event.
                    </AccordionItem>
                    <AccordionItem header="Q6: What is the reward program that dApp offers to its users?">
                        It offers activity creators the opportunity to earn and improve their activities/ads with monthly token
                        rewards that will be distributed systematically. Activity participants can share the reward pools of the
                        activities they complete and earn for different experiences.

                    </AccordionItem>
                    <AccordionItem header="Q7: Are there any advertising or sponsorship opportunities on the Activate Earth platform?">
                        Since the way the dApp works is different from other platforms, it will be experience-based
                        advertising work. Yes, welcome to a platform where such opportunities are unlimited.

                    </AccordionItem>
                    <AccordionItem header="Q8: What are the processes for signing a partnership with the platform?">
                        Activate Earth always aims to continue its existence as an application for the benefit of the brands-
                        users-community. In this direction, processes may vary in order to determine priorities.


                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQAccordion;
