/* eslint-disable no-mixed-spaces-and-tabs */

import { Input } from "@nextui-org/react";

import { Controller, useFormContext } from "react-hook-form";

const TextField = (passedProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Input
					{...field}
					onChange={(val) => {
						field.onChange(val);
						passedProps.confirmPasswordHandler &&
							passedProps.confirmPasswordHandler(val);
					}}
					classNames={{
						inputWrapper: "bg-transparent shadow-none border",
						label: "text-base font-medium",
						errorMessage: "text-start",
						input: "font-medium",
					}}
					className="mb-3"
					{...passedProps}
					type={passedProps.type ?? "text"}
					labelPlacement={
						passedProps.labelPlacement
							? passedProps.labelPlacement
							: "inside"
					}
					errorMessage={error?.message}
					isInvalid={error ? true : false}
				/>
			)}
		/>
	);
};

export default TextField;
