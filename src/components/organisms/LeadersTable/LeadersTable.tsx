import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { RootState } from '../../../utils/store';
import { Result } from '../../../types/Leaderboard';
import formatTime from '../../../utils/formatTime';
import BoardSize from '../../../models/BoardSize';
import { BOARD_SIZES } from '../../../config/BoardSizes';

import { StyledSelectWrapper, StyledSelect, StyledOption } from './LeadersTable.styles';

interface ExpandedResult extends Result {
  index: number;
}

const columns = [
  {
    title: 'Place',
    dataIndex: 'index',
    sorter: {
      compare: (a: ExpandedResult, b: ExpandedResult) => a.index - b.index,
    },
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    sorter: {
      compare: (a: ExpandedResult, b: ExpandedResult) => a.score - b.score,
    },
  },
  {
    title: 'Time',
    dataIndex: 'time',
    sorter: {
      compare: (a: ExpandedResult, b: ExpandedResult) => a.time - b.time,
    },
    render: (time: number) => formatTime(time),
  },
];

const LeadersTable = (): JSX.Element => {
  const { results, boardSize } = useSelector((state: RootState) => ({
    results: state.leaderboard.results,
    boardSize: state.game.boardSize,
  }));
  const [selectedBoardSize, setSelectedBoardSize] = useState(boardSize);

  const handleChange = (value: BoardSize) => {
    setSelectedBoardSize(value);
  };

  return (
    <>
      <StyledSelectWrapper>
        Board size:
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <StyledSelect defaultValue={boardSize} onChange={handleChange as any}>
          {Object.keys(BOARD_SIZES).map((el) => (
            <StyledOption key={el} value={el}>
              {el}
            </StyledOption>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
      <Table
        columns={columns}
        dataSource={results[selectedBoardSize].map((el, index) => ({ ...el, index: index + 1 }))}
      />
    </>
  );
};

export default LeadersTable;
