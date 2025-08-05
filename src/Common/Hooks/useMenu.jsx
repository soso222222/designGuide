// import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSetSeletedItem } from "../../features/menuSlice";

function useMenu() {
    const [state, setState] = useState({
        data: [], //메뉴 Data
    });
    const dispatch = useDispatch();
    const setSelectedItem = (name) => dispatch(onSetSeletedItem({title: name}));
    // const ref = useRef();

    const setMenuData = (data) =>
        setState({
            data: data,
        });

    const reset = () => {
        const menuItem = document.querySelectorAll(".menu");
        const menuUlItem = document.querySelectorAll(".menu + ul");
        const subMenuItem = document.querySelectorAll(".submenu");
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("active");
        }
        for (let i = 0; i < menuUlItem.length; i++) {
            menuUlItem[i].style.cssText = "height: 0rem";
        }
        for (let i = 0; i < subMenuItem.length; i++) {
            // subMenuItem[i].classList.remove("click");
            subMenuItem[i].classList.remove("active");
        }
    };

    const setUlHeight = (type, el) => {
        //transition height 효과
        let UlHeight = 0;
        let parentNodeUL = null;

        if (type === "menu") {
            parentNodeUL = el.nextSibling;
        } else {
            parentNodeUL = el.parentNode.parentNode;
        }

        if (parentNodeUL?.childNodes) {
            const parentNodeLi = parentNodeUL.childNodes
            for (let i = 0; i < parentNodeLi?.length; i++) {
                UlHeight += parentNodeLi[i].offsetHeight;
            }
            parentNodeUL.style.cssText = "height: " + UlHeight + "rem";
        }
    
    };


    const onClickMenu = (e, title) => {
        e.stopPropagation();
        if (!e?.target) return reset();
        reset();

        const selector = e.currentTarget;

        if(selector.classList.contains("submenu")) {
            const parentNodeA = selector.parentNode.parentNode.parentNode.querySelector(".menu");
            // console.log("parentNode", parentNode);
            parentNodeA.classList.add("active");
            setUlHeight("submenu", selector);

        } else {
            setUlHeight("menu", selector);
        }
        setSelectedItem(title);
        selector.classList.add("active");


    };


    return {
        menuData: state.data,
        setMenuData,
        onClickMenu,
        setSelectedItem,
        // treeRef: ref,
    };
}

export default useMenu;
