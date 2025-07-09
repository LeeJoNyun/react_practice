import styled from 'styled-components'

export const HeaderStyle = styled.header`
    background-color:aliceblue;
    .inner{
        height: 100px;
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    
`;
export const FooterStyle = styled.footer`
    width:100%;
    height: 150px;
    background-color:#000;
    .inner{

    }
`;
export const NavStyle = styled.nav`
    ul{
        display: flex;
        justify-content:center;
        gap:30px;
        li{
            a{
                font-size:20px;
            }
        }
    }
`;