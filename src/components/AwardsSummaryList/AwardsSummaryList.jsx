import AwardsSummary from "../AwardsSummary/AwardsSummary";

const AwardsSummaryList = (props) => {
    return (
        Object.keys(props.transactions)
            .map((key, index) =>
                <AwardsSummary key={index} customerId={key} transactions={props.transactions[key]}/>)
    )
}

export default AwardsSummaryList;
