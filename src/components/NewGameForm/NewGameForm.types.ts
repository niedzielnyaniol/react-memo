import BoardSize from '../../utils/types/BoardSize';

type NewGameFormProps = {
  username?: string;
  boardSize?: BoardSize;
  onSubmit: (values: { boardSize: BoardSize; username: string }) => void;
};

export default NewGameFormProps;
