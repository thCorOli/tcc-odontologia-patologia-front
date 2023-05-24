import React, {useState,useEffect} from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess.js";
import styled from "styled-components";
import "../../constants/colors.css";

const ToTop = styled.div`
    z-index: 2;
    position: fixed;
    bottom:2vh;
    color: var(--black);
    right: 5%;
    &:hover{
        transition:0.3s;
        color:var(--blue);
    }
`;

const Scroll = ()=>{
    const showBelow = 250;
    const [show, setShow] = useState( false);

    const handleScroll = () =>{
        if(window.pageYOffset > showBelow){
            if(!show)setShow(true);
        }
         else if(show) setShow(false); 
    }

    useEffect(() => {
        if(showBelow){
            window.addEventListener(`scroll`,handleScroll)
            return () => window.removeEventListener(`scroll`,handleScroll)
        }
    })


    const handleClick = () =>{
        window[`scrollTo`]({top:0,behavior:`smooth`})
    }

    return(
        <div>
            {show &&
                <ToTop onClick={handleClick}>
                    <ExpandLessIcon/>
                </ToTop> 
            }
        </div>
    )
}
export default Scroll;