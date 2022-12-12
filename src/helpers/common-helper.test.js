import commonHelper from "./common-helper";

const { getLastThreeMonths, calculateAwards } = commonHelper();

test('calculateAwards should return correct sum of awards for transactions', () => {
    const transactions = [
        {
            _id: 0,
            title: 'Payment #1',
            price: {
                amount: 115,
            },
            customerId: 0,
        },
        {
            _id: 1,
            title: 'Payment #2',
            price: {
                amount: 30,
            },
            customerId: 0,
        },
        {
            _id: 2,
            price: {
                amount: 150,
            },
            customerId: 0,
        },
    ];

    const result = calculateAwards(transactions);

    expect(result).toEqual(230);
});


test('getLastThreeMonths should return the last three months', () => {
    const currentDate = new Date(Date.now());

    const result = getLastThreeMonths();

    expect(result).toHaveLength(3);

    const [firstMonth, secondMonth, thirdMonth] = result;
    
    expect(firstMonth.startDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDay()));
    expect(firstMonth.endDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay()));
    
    expect(secondMonth.startDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, currentDate.getDay()));
    expect(secondMonth.endDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDay()));
    
    expect(thirdMonth.startDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDay()));
    expect(thirdMonth.endDate).toEqual(new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, currentDate.getDay()));
})
