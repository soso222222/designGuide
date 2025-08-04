import { forwardRef } from 'react'
import { SubItem, SubItemWrapper } from './styled.Menu';
import { useNavigate } from 'react-router-dom';
const  MenuSubItem = forwardRef(({
    title, 
    size,
    url,
    menuState,
},ref) => {
    const { onClickMenu } = menuState;
    const navigate = useNavigate();
    const onClick = (e) => {
        onClickMenu(e, title);
        navigate(url);
    };

    return (
            <SubItemWrapper 
            ref={ref}
            size={size}>
                <SubItem 
                size={size}
                onClick={(e) => onClick(e)}
                className='submenu'>
                    {title}
                </SubItem>
            </SubItemWrapper>
        );
})

export default MenuSubItem;