import { Form, Select, Tooltip } from 'antd';
import { AiFillCaretDown, AiOutlineInfoCircle } from 'react-icons/ai';
import { Rule } from 'antd/lib/form';
import "/node_modules/flag-icons/css/flag-icons.min.css";


const { Option } = Select;

const FlaggedDropdown = ({
    label,
    name,
    placeholder,
    options,
    required,
    noErrorVibration,
    type,
    nonEditable,
    nonEditableText,
    subtitle,
    subtitleInvert,
    subtitleOnClick,
    subtitleTooltipText,
    subtitleTooltipPlacement,
    noSubIcon,
    className,
    customRules,
    isSearchable,
    loading,
    onChange,
    getFlagBy,
    squaredFlags,
    noShowBalance
}: FlaggedDropdownProps) => {
    const styleOne = `custom-input  ${noErrorVibration? '' : 'vibrate'}`
    const requiredRule = [
        {
          required,
          message: `Please enter ${label}`,
          
        },
      ];
      
      const inputRules: Rule[] = customRules?.length ? [...requiredRule, ...customRules] : [
        {
          required,
          message: `Required`,
         
        },
      ];
      const customLabel = (option: DropdownProps , isoGetter: any)=> {
        // Create your custom label element based on the 'option' object
        return (
          <div className='flex items-center gap-3'>
            <span className={`fi fi-${isoGetter().toLowerCase() } !w-[1.4rem] !h-[1.4rem] ${squaredFlags ? '' : 'fis rounded-[50%]'} `}></span>
            {option.title ? option.title : option.label}
          </div>
        );
      }
  return (
    
    <div className="custom-input-wrapper">
        <span className="custom-input-label !top-[-3px] ">
        {label} {required && <span className=' text-lg text-red-500'>*</span>}
        </span>
        <div className='relative'>
          <Form.Item
              name={name}
               rules={inputRules}
               help={false} >
              <Select
                    className={styleOne} 
                    showSearch={isSearchable}
                    onChange={onChange} 
                    optionFilterProp="children"
                    showArrow = {false}
                    filterOption = {isSearchable}
                    loading={loading}
                    disabled={nonEditable}
                    optionLabelProp={noShowBalance?  'label': undefined}
                    placeholder={placeholder} >
                    {options?.map(option => {
                        const getISO = ()=>{
                            if(getFlagBy){
                                switch(getFlagBy?.toLowerCase()){
                                    case 'title':
                                        return option.title as string
                                    case 'id':
                                        return option.Id as unknown as string
                                   case 'value' :
                                        return option.value as string
                                    case 'label' :
                                        return option.label as string
                                    default: return option.Id as unknown as string
                                }
                            }
                            else return option.Id as unknown as string
                        }
                        return(
                      <Option key={option.Id || option.title} label={customLabel(option, getISO)} value={option.value} >
                       {option.balance? 
                        <div className='flex items-center p-1 justify-between '>
                            <div className='flex items-center gap-3'>
                                <span className={`fi fi-${getISO().toLowerCase() }  !w-[1.4rem] !h-[1.4rem] ${squaredFlags? '' :'fis rounded-[50%]'} `}></span>
                                {option.title ? option.title : option.label}
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='text-[0.7rem]'>Balance</div>
                                <div className='text-[1.1rem]'>{option.balance}</div>
                            </div>
                            </div>
                        :
                        <div className='flex items-center gap-3'><span className={`fi fi-${getISO().toLowerCase() }  !w-[1.5rem] !h-[1.5rem] ${squaredFlags? '' :'fis rounded-[50%]'} `}></span>{option.title ? option.title : option.label}</div>

                       }

                      </Option>
                    )})}

              </Select>
            </Form.Item>
            {!nonEditable && <AiFillCaretDown className="absolute top-[1rem] right-[0.75rem] text-[#79747E]" />}
       </div>
      {(nonEditable && !subtitle) && <div className='text-[0.72rem] flex gap-2 items-center p-[0.2rem] mb-[-0.5rem]'><AiOutlineInfoCircle className='!mt-[0.08rem] text-[0.9rem] '/>{nonEditableText? nonEditableText : 'you cannot edit this'}</div>}
      {subtitle && 
        <div 
          onClick={subtitleOnClick} 
          className={`text-[0.72rem]    items-center justify-start  ${subtitleOnClick && 'cursor-pointer'}  flex gap-2 items-center p-[0.2rem] mb-[-0.5rem] ${className && className}`}>
        {(!noSubIcon && !subtitleInvert) && 
          <Tooltip placement={subtitleTooltipPlacement || 'top'} title={subtitleTooltipText}><AiOutlineInfoCircle className='!mt-[0.08rem]  text-[0.9rem]'/></Tooltip>} 
          {subtitle} 
          {(!noSubIcon && subtitleInvert) && 
          <Tooltip placement={subtitleTooltipPlacement || 'top'} title={subtitleTooltipText}><AiOutlineInfoCircle className='!mt-[0.08rem]  text-[0.9rem]'/></Tooltip>} 
        </div>}
    </div>
    
  )
}

export default FlaggedDropdown