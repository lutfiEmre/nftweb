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
                    <AccordionItem header="What is Activate Earth?">
                        Activate Earth is an innovative platform where brands or individuals can create ads that reach a global audience.
                    </AccordionItem>

                    <AccordionItem header="What can be done in the application?">
                        Individuals or brands create activities. Users can earn by completing these activities.
                    </AccordionItem>

                    <AccordionItem header="How can people benefit from this application?">
                        Users creating activities within the application keep the ecosystem alive and can profit from monthly token rewards. Users who complete these activities can share the reward pools created and earn income.
                    </AccordionItem>

                    <AccordionItem header="Who can create activities in the application?">
                        Owners of Activator Gem NFTs can create activities.
                    </AccordionItem>

                    <AccordionItem header="How can Activate Earth users participate in activities?">
                        Users can participate by holding tokens released by the platform in their web3 wallets.
                    </AccordionItem>

                    <AccordionItem header="What is the reward program offered to users of the application?">
                        It offers users the opportunity to earn income by systematically distributing monthly token rewards to activity creators and enhancing their activities. Activity participants can share the reward pools of the activities they complete for different experiences.
                    </AccordionItem>

                    <AccordionItem header="What are the advantages of NFTs?">
                        Each piece in the Activator Gem NFT Collection will enable the use to create in-app activity/reward pools and benefit from the creative rewards distributed within the application. Additionally, whitelist priority will be provided in the airdrop event.
                    </AccordionItem>

                    <AccordionItem header="Are there advertising or sponsorship opportunities on the Activate Earth platform?">
                        Welcome to a platform where such opportunities are unlimited, as the operation of the application will be based on experiential advertising campaigns, unlike other platforms.
                    </AccordionItem>

                    <AccordionItem header="What are the partnership signing processes with the platform?">
                        Activate Earth always aims to exist as an application for the benefit of brand-user-community. Processes may vary to determine priorities in line with this goal.
                    </AccordionItem>

                    <AccordionItem header="Airdrop">
                        With the launch of the application, we will make an airdrop event to our first users. You can follow the terms, rules, and announcements about this on our social media accounts.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQAccordion;
