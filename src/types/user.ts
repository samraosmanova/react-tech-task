import * as z from 'zod';

export const schema = z.object({
	address: z
		.string()
		.min(4, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	name: z
		.string()
		.min(3, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	surname: z
		.string()
		.min(4, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	middlename: z
		.string()
		.min(4, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	date: z
		.string()
		.min(10, { message: 'Поле должно быть заполнена' })
		.max(10, { message: 'Поле должно быть заполнена' }),
	registartion: z
		.string()
		.min(4, { message: 'Поле должно быть заполнена' })
		.max(10, { message: 'Поле должно быть заполнена' }),
	fin: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(16, { message: 'Поле должно быть заполнена' }),
	passportnumber: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(10, { message: 'Поле должно быть заполнена' }),
	seria: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(10, { message: 'Поле должно быть заполнена' }),
	homenumber: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(17, { message: 'Поле должно быть заполнена' }),
	phone: z
		.string()
		.min(8, { message: 'Поле должно быть заполнена' })
		.max(17, { message: 'Поле должно быть заполнена' }),
	cod: z.string().min(4, { message: 'Поле должно быть заполнена' }).max(8, { message: 'Поле должно быть заполнена' }),
});

export type UserSchema = z.infer<typeof schema>;

export const UserSignIn = schema.pick({ fin: true });
export type SignInSchema = z.infer<typeof UserSignIn>;
