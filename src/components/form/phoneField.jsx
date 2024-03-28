import { Controller, useFormContext } from "react-hook-form";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneField = (passedProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<section className="mb-3">
					<p className="font-medium text-sm">Phone</p>
					<PhoneInput
						placeholder="********"
						{...field}
						disabled={passedProps.disabled}
						international
						defaultCountry="KE"
						error={
							error
								? isValidPhoneNumber(field.value)
									? undefined
									: "Invalid phone number"
								: "Phone number required"
						}
						className="border-[0.12rem] mt-1  p-[0.6rem] rounded-xl"
					/>
				</section>
			)}
		/>
	);
};

export default PhoneField;
