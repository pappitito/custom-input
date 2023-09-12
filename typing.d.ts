type CountryProps = {
	name: string;
	code: string;
	phone: number;
  };

  type DropdownProps = {
	Id?: number;
	Name?: string;
	title?: string | number;
	value?: string | number;
	label?: string;
	disabled?: boolean;
	selected?: boolean;
  };