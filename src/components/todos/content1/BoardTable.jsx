import BoardTr from './BoardTr';
import { BoardStyle } from './style';

const BoardTable = () => {
    return (
        <BoardStyle>
            <table>
                <caption>게시판</caption>
                <colgroup>
                    <col className="id" />
                    <col className="title" />
                    <col className="body" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>타이틀</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <BoardTr />
                </tbody>
            </table>
        </BoardStyle>
    );
};

export default BoardTable;
