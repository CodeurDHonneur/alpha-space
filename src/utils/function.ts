export const dateToString = (date: Date): string => {
    return date.toString();
}

export const numberToDate = (number: number): string => {
    const today = new Date();

    if(number === 0){
        return dateToString(today);
    } else {
        return dateToString(new Date(today.setDate(today.getDate() - number)));
    }
}