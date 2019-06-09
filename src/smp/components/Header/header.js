import React from 'react';
import { connect } from 'react-redux';
import MyButton from '../../containers/MyButton/my-button';
import { showNewForm } from '../../store/actions/form-display-actions';

const Header = ({dispatch}) => (
	<nav>
		<MyButton textval="New Student" callback={showNewForm} />
	</nav>
)

export default connect()(Header);
