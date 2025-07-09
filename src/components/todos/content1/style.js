import styled from 'styled-components';
export const ContentStyle = styled.section`
    .inner {
        padding: 120px 0;
    }
    h2 {
        margin-bottom: 50px;
    }
`;

export const BoardStyle = styled.div`
    table {
        caption {
            display: none;
        }
        .id {
            width: 5%;
        }
        .title {
            width: 30%;
        }

        th,
        td {
            border: 1px solid #000;
            vertical-align: middle;
            padding: 10px;
        }
        td {
            &:nth-child(1) {
                text-align: center;
            }
        }
    }
`;

export const PagingStyle = styled.p`
    margin-top: 40px;
    text-align: center;

    a {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        &.on {
            background: pink;
        }
    }
`;
