import { Form, Input, DatePicker, Select, Space, Radio, Checkbox } from 'antd';
import { Rule } from 'antd/lib/form';
import { AiFillCaretDown, AiOutlineInfoCircle } from 'react-icons/ai';
import moment, { Moment } from 'moment';
import type { RadioChangeEvent } from 'antd';
import { countryCodes } from 'utils/appData/countryCodes';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;
interface CustomInputProps {
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value?: any;
  valueSetter?: any;
  defaultValue?: any;
  disabled?: boolean;
  noErrorVibration?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onDateChange?: ((date: Moment | null, dateString: string) => void)
  onRadioChange?: (e: RadioChangeEvent) => void;
  onCheckBoxChange?: (e : CheckboxChangeEvent) => null;
  nonEditable?: boolean;
  nonEditableText?: string;
  subtitle?: string;
  subtitleInvert?: boolean;
  subtitleOnClick?: ()=> void;
  noSubIcon? : boolean;
  className?: string;
  radioClassName?: string;
  options?: DropdownProps[];
  isSelector?: boolean;
  isEmailValidated?: boolean;
  isDatePicker?: boolean;
  isDob?: boolean;
  futureDisabled?: boolean;
  disabledDate?: ((date: Moment) => boolean) | undefined;
  isCombined?: boolean;
  isPhoneNumber?: boolean;
  isNumberOnly?: boolean;
  isRadio?: boolean;
  isRadioVertical?: boolean;
  isSingleCheckBox?: ConstrainBoolean;
  disabledIndexes?: number[];
  phoneCode?: string;
  phoneCodeName?: string;
  phoneCodeOptions?: DropdownProps[];
  phoneCodeDisabled?: boolean;
  combinedPlaceholders?: string[];
  combinedLabels?: string[];
  combinedNames?: string[];
  combinedDefaultValues?: string[];
}


const CustomInput: React.FC<CustomInputProps> = ({ 
    label,
    name, 
    type,
    options,
    placeholder,
    value,
    valueSetter,
    defaultValue,
    disabled,
    noErrorVibration,
    onChange,
    onDateChange,
    onRadioChange,
    onCheckBoxChange,
    nonEditable,
    nonEditableText,
    subtitle,
    subtitleInvert,
    subtitleOnClick,
    noSubIcon,
    className,
    radioClassName,
    required,
    isDatePicker,
    isDob,
    futureDisabled,
    disabledDate,
    isSelector,
    isEmailValidated,
    isCombined,
    isPhoneNumber,
    isNumberOnly,
    isRadio,
    isRadioVertical,
    isSingleCheckBox,
    disabledIndexes,
    phoneCode,
    phoneCodeName,
    phoneCodeOptions,
    phoneCodeDisabled,
    combinedPlaceholders,
    combinedLabels,
    combinedNames,
    }) => {

     

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Implement your logic to handle input change
  };
  const dobDisable = (current: Moment) =>{
   return current > moment().subtract(18, 'years')
  
  }
  const futureDisable = (current: Moment) =>{
    return current &&  current > moment()
   
   }
  const mobileCodes: DropdownProps[] = countryCodes.map((item)=>(
     {
      title: `${item.name}(+${item.phone})`,
      value: `+${item.phone}` 
    }
  ))
  // Create a dictionary to group countries by phone code
const codeGroups : { [key: string]: string[] } = {};
countryCodes.forEach(({name, phone}) => {
  if (!codeGroups[phone]) {
    codeGroups[phone] = [name];
  } else {
    codeGroups[phone].push(name);
  }
});

// Convert the dictionary to the desired format
const worldPhoneCodes: DropdownProps[] = Object.entries(codeGroups).map(([code, countries]) => ({
  title: `+${code} (${countries.join(', ')})`,
  value: `+${code}`,
}));

// Include phone codes that are singular to a country
countryCodes.forEach(({ name, phone}) => {
  if (!codeGroups[phone] && phone) {
    worldPhoneCodes.push({ title: `${phone} (${name})`, value: phone });
  }
});

const validateEmail = (rule: any, value: any, callback: any) => {
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the entered value matches the email pattern
  const isEmailValid = emailRegex.test(value);

  if (isEmailValid) {
    callback(); // Valid email, no error
  } else {
    callback('Please enter a valid email address.'); // Invalid email, provide an error message
  }
};
  
  
  
  const inputRules: Rule[] = [
    {
      required,
      message: `Required`,
    },
  ];
  const inputRulesEmail: Rule[] = [
    {
      required,
      message: `Required`,
      validator: validateEmail
    },
  ];
  const styleOne = `custom-input ${noErrorVibration? '' : 'vibrate'}`
  const styleTwo = `custom-input2 ${noErrorVibration? '' : 'vibrate'}`
  const styleThree = `custom-input3 ${noErrorVibration? '' : 'vibrate'}`
  const styleFour = `custom-input4 ${noErrorVibration? '' : 'vibrate'}`
 
  const CustomDate = (
      <Form.Item
          name={name}
          rules={inputRules}
          help={false}
           >
            <DatePicker style={{ width: '100%' }} 
                  disabled={disabled}
                  placeholder={placeholder} size="large" 
                  className={styleOne} 
                  format="DD-MM-YYYY"
                  onChange={onDateChange}
                  disabledDate={isDob? dobDisable : futureDisabled? futureDisable : disabledDate} />
        </Form.Item>
    )
  
    const filterOption = (input: string, option: { title: string; value: string }) =>
    (option?.title ?? '').toLowerCase().includes(input.toLowerCase());

  const CustomSelect = (
     <div className='relative'>
          <Form.Item
              name={name}
               rules={inputRules}
               help={false} >
              <Select
                    className={styleOne} 
                    showSearch
                    onChange={onChange} 
                    optionFilterProp="children"
                    showArrow = {false}
                    filterOption = {true}
                    disabled={nonEditable}
                       placeholder={placeholder} >
                    {options?.map(option => (
                      <Option key={option.title} value={option.value}>
                        {option.title ? option.title : option.label}
                      </Option>
                    ))}

              </Select>
            </Form.Item>
            <AiFillCaretDown className="absolute top-[1rem] right-[0.75rem] text-[#79747E]" />
       </div>
          
    )
  

  const RegularInput = (
    <Form.Item
        name={name}
        rules={isEmailValidated? inputRulesEmail : inputRules}
        help={false}      >
          <Input 
            type={type} disabled={nonEditable}
           placeholder={placeholder} className={styleOne}  onChange={handleInputChange} />
      </Form.Item>
    )
  
  
  const SpaceCompacted =  (
      <div className='!w-full flex items-center'  >
          <div className='relative flex w-[20%] min-w-[5.2rem] max-w-[6rem]'>
              <span className="custom-input-label ">
                {combinedLabels?.[0]} {required && <span className=' text-lg text-red-500'>*</span>}
              </span>
              <Form.Item
                    className='w-full'
                    name={combinedNames?.[0]}
                    rules={inputRules}
                    help={false} >
                    <Input
                       className={styleTwo}
                        placeholder={combinedPlaceholders? combinedPlaceholders[0] : placeholder} />
               </Form.Item>
           </div>
           <div className='relative flex w-full'>
              <span className="custom-input-label">
                {combinedLabels?.[1]} {(required && combinedLabels?.[1] ) && <span className=' text-lg text-red-500'>*</span>}
               </span>
               <Form.Item
                    className='w-full'
                    name={combinedNames?.[1]}
                    rules={inputRules}
                    help={false}   >
                  <Input
                      className={styleThree}
                      placeholder={combinedPlaceholders? combinedPlaceholders[1] 
                          : placeholder ? placeholder : `` }
                      onChange={handleInputChange} />
                </Form.Item>
            </div>
     </div>
    )
  

  const PhoneNumberInput =  (
      <div className='relative'>
          <Form.Item
                   name={name}
                   rules={inputRules}
                   help={false}  >
                <Input 
                    onKeyPress={(e) => {
                      const keyCode = e.which || e.keyCode;
                      const keyValue = String.fromCharCode(keyCode);
                      const regex = /^[0-9.]$/; // Regex to match numbers and dot (.)
                      if (!regex.test(keyValue)) {
                        e.preventDefault();
                     }
                   }}
                      type={type}
                      disabled={nonEditable}
                     placeholder={placeholder} className={styleFour} />
           </Form.Item>
           {phoneCode && <div className='absolute left-0 top-0 flex h-[2.75rem]  pl-2 pr-2 text-center justify-center items-center bg-transparent'><div className='w-[2.3rem] text-center'>{phoneCode}</div> <span className='ml-2 mr-2 text-gray-400'>|</span></div>}
         
       </div>
    )

    const PhoneNumberInput2 = (
      <div className='relative '>
          
          <Form.Item
          className='!w-[5rem] absolute  !z-[10]'
          name={phoneCodeName? phoneCodeName : 'mobileCode'}
          rules={inputRules}
          help={false} >
            <Select
            showArrow={false}
            showSearch
            filterOption={true}
            onChange={onChange} 
            disabled={phoneCodeDisabled}
            optionLabelProp='label'
               placeholder={placeholder || '+'} >
            {phoneCodeOptions? 
                  phoneCodeOptions?.map(option => (
                    <Option key={option.title} label={option.value}  value={option.value}>
                      {option.title ? option.title : option.label}
                    </Option>
                  )) :
                  worldPhoneCodes.map(option => (
                    <Option key={option.title} label={option.value} value={option.value}>
                      {option.title}
                    </Option>
                  ))
            }
            </Select>
          </Form.Item>
          <AiFillCaretDown className="absolute top-[1rem] left-[4.3rem] text-[#79747E]" />
         
          <Form.Item
                    className=''
                   name={name}
                   rules={inputRules}
                   help={false}  >
                <Input 
                    onKeyPress={(e) => {
                      const keyCode = e.which || e.keyCode;
                      const keyValue = String.fromCharCode(keyCode);
                      const regex = /^[0-9.]$/; // Regex to match numbers and dot (.)
                      if (!regex.test(keyValue)) {
                        e.preventDefault();
                     }
                   }}
                      className={styleFour}
                      type={type}
                      disabled={nonEditable}
                     placeholder={placeholder}  />
           </Form.Item>
          
      </div>
    )

    const NumberOnlyInput =  (
      <Form.Item
      name={name}
      rules={inputRules}
      help={false} >
          <Input 
            onKeyPress={(e) => {
              const keyCode = e.which || e.keyCode;
              const keyValue = String.fromCharCode(keyCode);
              const regex = /^[0-9.]$/; // Regex to match numbers and dot (.)
              if (!regex.test(keyValue)) {
                e.preventDefault();
              }
            }}
            type={type}
            disabled={nonEditable}
           placeholder={placeholder} className={styleOne} />
         </Form.Item>
     
    )

    const RadioInput = (
      <Form.Item
        name={name}
        className='w-full'
        rules={inputRules}
        help>
          {isRadioVertical?
          <Radio.Group className={`${className} ${noErrorVibration? '' : 'vibrate'}`} onChange={onRadioChange}>
            <Space direction='vertical'>
                 {options?.map((option)=>(
                 <Radio 
                 key = {option.value}
                 value={option.value}
                 disabled = {option.disabled}
                 >{option.title ? option.title : option.label}</Radio>
               ))}
            </Space>
        </Radio.Group>
           :
          <Radio.Group className={`${className} ${noErrorVibration? '' : 'vibrate'}`} onChange={onRadioChange}>
          {options?.map((option, index)=>(
            <Radio 
            key={option.value}
            className={radioClassName} 
            disabled={disabledIndexes?.includes(index)}
            value={option.value}>{option.title ? option.title : option.label}</Radio>
          ))}
        </Radio.Group>
          }

      </Form.Item>
    )

    const Check = (
      <Checkbox
      onChange={onCheckBoxChange}
      >{label}</Checkbox>
    )
  
    

  return (
    <div className="custom-input-wrapper">
      {isRadio ? RadioInput : 
        isSingleCheckBox? Check :
      <>
        {!isCombined &&
        <span className="custom-input-label">
        {label} {required && <span className=' text-lg text-red-500'>*</span>}
      </span>
      }
      
        {
            isSelector ? CustomSelect :
            isDatePicker ? CustomDate :
            isCombined ? SpaceCompacted :
            isPhoneNumber ? PhoneNumberInput2 :
            isNumberOnly ? NumberOnlyInput:
            RegularInput
        }
      
      {(nonEditable && !subtitle) && <div className='text-[0.72rem] flex gap-2 items-center p-[0.2rem] mb-[-0.5rem]'><AiOutlineInfoCircle className='!mt-[0.08rem] text-[0.9rem] '/>{nonEditableText? nonEditableText : 'you cannot edit this'}</div>}
      {subtitle && <div onClick={subtitleOnClick} className={`text-[0.72rem]    items-center justify-start  ${subtitleOnClick && 'cursor-pointer'}  flex gap-2 items-center p-[0.2rem] mb-[-0.5rem] ${className && className}`}>
        {(!noSubIcon && !subtitleInvert) && <AiOutlineInfoCircle className='!mt-[0.08rem]  text-[0.9rem]'/>} {subtitle} {(!noSubIcon && subtitleInvert) && <AiOutlineInfoCircle className='!mt-[0.08rem]  text-[0.9rem]'/>} </div>}

      </>}
    </div>
  );
};
export default CustomInput;
