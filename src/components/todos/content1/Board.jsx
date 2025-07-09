import BoardTable from './BoardTable';
import Pagination from './Pagination';
import { ContentStyle } from './style';

const Board = () => {
    return (
        <ContentStyle>
            <div className="inner">
                <h2>Todo List 게시판</h2>
                <BoardTable />
                <Pagination />
            </div>
        </ContentStyle>
    );
};

export default Board;
