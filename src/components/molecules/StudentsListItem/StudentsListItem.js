import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';
import { UsersContext } from 'providers/UsersProvider';
import { Average } from 'components/atoms/Average/Average';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.number,
    attendance: PropTypes.string,
  }),
};

export default StudentsListItem;
