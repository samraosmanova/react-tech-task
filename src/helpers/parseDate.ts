export const onParseHandler = (str: string): Date => {
	const yearMonthDay: string[] = str.split('-');
	return new Date(Number(yearMonthDay[0]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[2]));
};
