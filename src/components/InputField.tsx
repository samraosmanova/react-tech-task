import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { IMaskMixin } from 'react-imask';
import { forwardRef, memo } from 'react';

interface InputProps {
	name: string;
	label: string;
	type: 'password' | 'text' | 'number';
	variant?: 'outlined' | 'filled' | 'standard';
}

const InputField = IMaskMixin(
	memo(
		forwardRef<HTMLInputElement, InputProps>(
			({ label = '', type = 'text', variant = 'outlined', name = '', ...props }, ref) => {
				const { control } = useFormContext();
				return (
					<Controller
						name={name}
						control={control}
						defaultValue={''}
						rules={{ required: true }}
						render={({ field, fieldState: { error } }) => (
							<TextField
								label={error?.message ? error?.message : label}
								aria-invalid={error?.message ? true : false}
								error={error?.message ? true : false}
								type={type}
								{...field}
								{...props}
								ref={ref}
							/>
						)}
					/>
				);
			}
		)
	)
);

export default InputField;
