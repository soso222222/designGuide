import { forwardRef } from 'react'
import { RightItem, LeftItem, Item, ItemWrapper, SubItemGroup } from './styled.Menu';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import MenuSubItem from './MenuSubItem';
const  MenuItem = forwardRef(({
    title, 
    url, 
    el,
    iconType,
    depth = [],
    gap,
    size,
    iconSize,
    isHidden, 
    menuState, // 메뉴 정보 set, get
},ref) => {
    const { onClickMenu } = menuState;
    const navigate = useNavigate();
    const onClick = (e) => {
        onClickMenu(e, title);
        navigate(url);
    };

    return (
            <ItemWrapper 
            ref={ref}
            gap={gap} >

                <Item 
                size={size}
                onClick={(e) => onClick(e)}
                className='menu'>
                    <LeftItem>
                        <Icon type={iconType} size={iconSize} fill={"var(--Orange08)"} />
                        <span>{title}</span>
                    </LeftItem>
                    <RightItem>
                        <Icon className={"angleup"} type={"angleup"} size={"xxxxxxxs"} fill={"var(--Orange08)"} />
                        <Icon className={"angledown"} type={"angledown"} size={"xxxxxxxs"} fill={"var(--Orange08)"} />
                    </RightItem>
                </Item>

                
            {depth.length > 0 && (
                <SubItemGroup size={size}>
                    {depth.map((item, idx) => (
                        <MenuSubItem 
                        key={idx} 
                        {...item}
                        gap={gap}
                        size={size}
                        menuState={menuState} />
                    ))}
                </SubItemGroup>
            )}
            </ItemWrapper>
        );
})

MenuItem.defaultProps= {
    value:'',
}

export default MenuItem;