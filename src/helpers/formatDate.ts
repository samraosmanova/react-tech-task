export const onFormatHandler = (date: Date): string => {
	var day: number = date.getDate();
	var month: number = date.getMonth() + 1;
	var year: number = date.getFullYear();
	const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
	const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
	return `${year}-${formattedMonth}-${formattedDay}`;
};