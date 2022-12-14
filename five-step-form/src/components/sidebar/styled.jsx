import styled,{css} from "styled-components";

import SidebarBG from "../../assets/bg-sidebar-desktop.svg"

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-image: url(${SidebarBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--white);
    padding: 24px;
    width: 35%;
    border-radius: 8px;
`

export const ItemNumber = styled.span`
    width: 36px;
    height: 36px;
    border: 1px solid var(--white);
    border-radius: 999px;
    display:flex;
    justify-content: center;
    align-items:center;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    ${ItemNumber}{

        ${({isActive}) => isActive && css`
        color: var(--marine-blue);
        background-color: var(--magnolia);
        border-color: var(--magnolia)
        `}
    }

`

export const ItemBody = styled.div``

export const Subtitle = styled.h5`
    font-size: 13px;
    text-transform: uppercase;
    opacity: 0.75;
`

export const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
`