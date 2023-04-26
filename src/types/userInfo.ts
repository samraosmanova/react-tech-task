import * as z from 'zod';
export const userInfoSchema = z.object({
	year: z
		.string()
		.min(1, { message: 'Поле должно быть заполнена' })
		.max(2, { message: 'Поле должно быть заполнена' }),
	month: z
		.string()
		.min(1, { message: 'Поле должно быть заполнена' })
		.max(2, { message: 'Поле должно быть заполнена' }),
	region: z
		.string()
		.min(10, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	fieldActivity: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(32, { message: 'Поле должно быть заполнена' }),
	monthlyIncome: z
		.string()
		.min(4, { message: 'Поле должно быть заполнена' })
		.max(19, { message: 'Поле должно быть заполнена' }),
	businessAddress: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(20, { message: 'Поле должно быть заполнена' }),
});

export type UserInfoForm = z.infer<typeof userInfoSchema>;
