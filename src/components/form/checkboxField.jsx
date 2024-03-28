/* eslint-disable no-mixed-spaces-and-tabs */

import { Checkbox } from "@nextui-org/react";

import { Controller, useFormContext } from "react-hook-form";

const CheckboxInputField = (passedProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<section className="mb-3">
					<Checkbox
						isSelected={field.value}
						onValueChange={field.onChange}
						{...passedProps}
					>
						{passedProps.label}
					</Checkbox>
					{error && <p className="text-red-500">{error.message}</p>}
				</section>
			)}
		/>
	);
};

export default CheckboxInputField;
