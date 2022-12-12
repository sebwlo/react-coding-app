import {transactionsDummy} from "../data/transactions-dummy";
import {useCallback} from "react";

const useFakeApi = () => {
    const getTransactions = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return transactionsDummy;
    }, []);

    return {
        getTransactions
    }
}

export default useFakeApi;
