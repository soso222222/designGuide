import { forwardRef } from 'react'
import { InputWrapper } from './styled.Input';
const  Input = forwardRef(({
    children,
    label,
    size,
},ref) => {
    
    return (
            <InputWrapper 
            ref={ref} 
            size={size}>
                {children}
            </InputWrapper>
        );
})

Input.defaultProps= {
    value:'',
}

export default Input;