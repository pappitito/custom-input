type CountryProps = {
	name: string;
	code: string;
	phone: number;
  };

  type DropdownProps = {
	Id?: string | number;
	Name?: string;
	title?: string | number;
	value?: string | number;
	label?: string;
	disabled?: boolean;
	selected?: boolean;
	balance?: string
  };
  interface BaseProps{
	label?: string;
	name?: string;
	required?: boolean;
	nonEditable?: boolean;
	nonEditableText?: string;
	subtitle?: string;
	subtitleInvert?: boolean;
	subtitleOnClick?: ()=> void;
	subtitleTooltipText?: string;
	subtitleTooltipPlacement?: TooltipPlacement;
	noSubIcon? : boolean;
	customRules?: Record<string, unknown>[]
	className?: string;
	noErrorVibration?: boolean;
	placeholder?: string;
	type?: string;
	loading?: boolean;
}
interface TextInputProps extends BaseProps{
	isEmailValidated?: boolean;
	isNumberValidated?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
}
interface DropdownInputProps extends BaseProps{
	options?: DropdownProps[];
	isSearchable?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}
interface DatePickerProps extends BaseProps{
	isFutureDisabled?: boolean;
	isDob?: boolean;
	disabledDate?: ((date: Moment) => boolean) | undefined;
	onChange?: ((date: Moment | null, dateString: string) => void)
}
interface FlaggedDropdownProps extends DropdownInputProps{
	getFlagBy?: 'value' | 'id' | 'title' | 'label';
	noShowBalance?: boolean;
	squaredFlags?: boolean;
}
interface TitledRadioProps {
	title: string;
	subtitle?: string;
	value: string | number;
}
interface TitledRadioGroupProps {
	name: string;
	required?: boolean;
	options?: TitledRadioProps[]
}
interface BeneficiaryCardProps {
	fullName: string;
	subDetail?: string;
	value: string | number;
}
interface BeneficiaryGroupProps {
	required
	name?: string;
	required?: boolean;
	beneficiaries?: BeneficiaryCardProps[]
}