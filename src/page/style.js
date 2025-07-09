import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
`;

export const DetailSection = styled.article`
    .inner{
        padding:120px 0;
    }

    .con-box{
        display: flex;
        justify-content : space-between;
        div{
            width: 43%;
            border: 1px solid #000;
        }
        img{
            width : 100%;   
        }
    }

`;

export const AboutSection = styled.section`
    .inner{
        h2{
            position:relative;
            font-size : 26px;
            padding-left: 30px;
            &::after{
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                background: #0A31A8;
                border-radius: 50%;
                position:absolute;
                left: 0;
                top: 50%;
                transform :translateY(-50%  )
                
            }

        }
        .title{
            font-size:38px;
            font-weight:800;
        }
       
    }
`;

export const ConBoxStyle = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-top : 100px;
    .left{
        
        width: 648px;
        height: 746px;
        img{
            width: 648px;
            height: 746px;
            border-radius:25px;
            object-fit: cover;
        }

    }
    .right{
        h3{
            font-size:40px;
            margin-bottom : 50px;
        }
        p{
            margin-bottom : 13.3333px;
            font-size :16px;
        }
        strong{
            font-size:20px;
            display: block;
            text-align:right;
            font-weight : 700;
        }
    }

`;