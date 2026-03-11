import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        value: "sde intern",
        trigger: "Software Development Engineer Intern",
        content:
            "Developed and tested in-house software tools, contributing to the company’s product development lifecycle. Gained hands-on experience in full-stack development while enhancing teamwork, collaboration, and communication skills. Worked closely with the engineering team to debug, optimize, and improve existing systems for better efficiency.",
    },
    {
        value: "privacy",
        trigger: "Privacy & Security",
        content:
            "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
    },
    {
        value: "billing",
        trigger: "Billing & Subscription",
        content:
            "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
    },
]

export function AccordionMultiple() {
    return (
        <Accordion
            type="multiple"
            className="max-w-lg"
            defaultValue={["notifications"]}
        >
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
