import * as z from 'zod';
export const creditSchema = z.object({
	currency: z
		.string()
		.min(1, { message: 'Поле должно быть заполнена' })
		.max(3, { message: 'Поле должно быть заполнена' }),
	businessCredit: z
		.string()
		.min(16, { message: 'Поле должно быть заполнена' })
		.max(32, { message: 'Поле должно быть заполнена' }),
	period: z
		.string()
		.min(1, { message: 'Поле должно быть заполнена' })
		.max(2, { message: 'Поле должно быть заполнена' }),
	percent: z
		.string()
		.min(1, { message: 'Поле должно быть заполнена' })
		.max(2, { message: 'Поле должно быть заполнена' }),
	sum: z.string().min(1, { message: 'Поле должно быть заполнена' }).max(9, { message: 'Поле должно быть заполнена' }),
});

export type CreditForm = z.infer<typeof creditSchema>;
