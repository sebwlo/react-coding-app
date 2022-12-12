import commonHelper from "../../helpers/common-helper";

import './AwardsSummary.css'

const { getLastThreeMonths, calculateAwards } = commonHelper();

const AwardsSummary = (props) => {

    return(
        <div>
            <h3>Customer ID: {props.customerId}</h3>
            <h3>Total awards: {calculateAwards(props.transactions)}</h3>

            {getLastThreeMonths().map((dateRange, index) => (
                <div key={index} className="box">
                    <p>Range: {dateRange.startDate.toLocaleDateString()}
                        - {dateRange.endDate.toLocaleDateString()}</p>
                    <p> Monthly awards: {calculateAwards(props.transactions
                        .filter(x => x.paymentAt >= dateRange.startDate && x.paymentAt <= dateRange.endDate))}
                    </p>
                </div>
            ))}
        </div>)
}

export default AwardsSummary;
