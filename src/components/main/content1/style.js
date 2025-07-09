import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    background-color: coral;
    height: 800px;
    .inner{
        padding: 150px 0;
    }
    h2{
        margin-bottom : 50px;
    }
    ul{
        display: flex;
        justify-content:space-between;
        li{
            width: 320px;
            height: 400px;
            border: 1px solid #000;
            background-color : aliceblue;
            position:relative;
            padding:20px;
            box-sizing:border-box;
            h3{
                position:absolute;
                left:20px;
                top:20px;
                font-size:30px;
                font-weight:500;
                transition:0.3s;
                opacity:0;
               
            }
           
            p{
                position:absolute;
                left:20px;
                top:50px;
                font-size:30px;
            }
            &:hover {
                h3{
                    top:20px;
                    background-color: pink;
                    opacity:1;
                }
                p{
                    background-color : blueviolet;
                    top : 80px;
                }
            }
        }
    }
`;