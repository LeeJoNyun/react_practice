import styled from 'styled-components'

export const ContentStyle = styled.section`
    .inner{
        padding:120px 0 ;

    }
    h2{
        margin-bottom : 50px;
    }

`;

export const ProductUl = styled.ul`
    display:flex;
    justify-content:space-between;
    li{
        width: 320px;
        border: 1px solid #ccc;
        padding :15px;
        text-align:center;
        h3{
            font-size:25px;
            font-weight:600;
            margin-bottom : 15px;
        }

        p{
            img{
                width: 100%;
                transition : 0.3s;
            }

            &:hover{
                img{
                    transform : scale(1.2);
                }
            }
        }
    }
`;