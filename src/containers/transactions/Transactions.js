import React from "react";
import { useTransactions } from "../../hooks/useTransactions";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import './transactions.css';


export const Transactions = () => {
    const transactions = useTransactions()

    const accordionItems = transactions.map(transaction => {
        const { transaction_id, type, amount, effectiveDate } = transaction

        return (
            <AccordionItem key={transaction_id}>
            <AccordionItemHeading>
                <AccordionItemButton className={`accordion__button accordion__button--${type}`}>
                    {`Type: ${type} - Amount: ${amount}`}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <ul>
                    <li>{`Id : ${transaction_id}`}</li>
                    <li>{`Type : ${type}`}</li>
                    <li>{`Amount : ${amount}`}</li>
                    <li>{`Effective Date : ${effectiveDate}`}</li>
                </ul>
            </AccordionItemPanel>
        </AccordionItem>
        )
    })
    return(
        <Accordion allowMultipleExpanded={true} allowZeroExpanded ={true}>
            {accordionItems.length === 0 ? <div>No transactions to show, try using some tool as Postman to create them</div> : accordionItems }
        </Accordion>
    )
}