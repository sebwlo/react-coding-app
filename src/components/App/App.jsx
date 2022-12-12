import './App.css';
import {useEffect, useState} from "react";
import useFakeApi from "../../hooks/useFakeApi";
import _ from 'lodash';
import AwardsSummaryList from "../AwardsSummaryList/AwardsSummaryList";
import Spinner from "../Spinner/Spinner"

const App = () => {
    const { getTransactions } = useFakeApi();
    const [isTransactionsFetching, setIsTransactionsFetching] = useState(false);
    const [transactions, setTransactions] = useState();

    useEffect(() => {
        if(!transactions) {
            setIsTransactionsFetching(true);
            getTransactions()
                .then(transactionsResponse => {
                    setTransactions(_.groupBy(transactionsResponse,
                            transaction => transaction.customerId));
                    setIsTransactionsFetching(false);
                });
        }
    }, [getTransactions, transactions]);


    return (
        <main className='container'>
            {isTransactionsFetching && <Spinner />}

            {!isTransactionsFetching && transactions &&
                <AwardsSummaryList transactions={transactions} />}
        </main>
    )
}

export default App;
