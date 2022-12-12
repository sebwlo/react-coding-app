import {awardThresholds} from "../data/award-thresholds";

const commonHelper = () => {
    const getLastThreeMonths = () => {
        const currentDate = new Date(Date.now());
        let dates = [];

        for(let i = 0; i < 3 ; i++) {
            dates.push({
                startDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - i - 1, currentDate.getDay()),
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - i, currentDate.getDay())
            });
        }

        return dates;
    }

    const calculateAward = (transaction) => {
        let currentTransactionPrice = transaction.price.amount;
        let award = 0;
        const availableThresholds = awardThresholds.filter(x => transaction.price.amount > x.threshold);

        if(availableThresholds.length > 0) {
            availableThresholds.forEach(availableThreshold => {
                award += (currentTransactionPrice - availableThreshold.threshold) * availableThreshold.factor;
                currentTransactionPrice = availableThreshold.threshold;
            })
        }
        
        return award;
    }

    const calculateAwards = (transactions) => {
        let sum = 0;

        transactions.forEach(transaction => {
            sum += calculateAward(transaction);
        })

        return sum;
    }

    return {
        getLastThreeMonths,
        calculateAwards
    }
}

export default commonHelper;
