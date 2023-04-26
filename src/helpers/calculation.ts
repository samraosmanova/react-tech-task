import { Payment } from "../types/patment";

export const calculatePaymentPlan = (loanAmount: number, interestRate: number, paymentPeriod: number): Payment[] => {
	const monthlyInterestRate = interestRate / 12;
	const payment = (monthlyInterestRate * loanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriod));
	let balance = loanAmount;
	const paymentPlan = [];
	for (let i = 0; i < paymentPeriod; i++) {
		const interest = balance * monthlyInterestRate;
		const principal = payment - interest;
		balance -= principal;
		paymentPlan.push({
			period: i + 1,
			balance: balance.toFixed(2),
			payment: payment.toFixed(2),
			principal: principal.toFixed(2),
			interest: interest.toFixed(2),
		});
	}
	return paymentPlan;
};