import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<div className={classes['header']}>
			<h1>Redux-Practice</h1>

			<ul className={classes['headerLinks']}>
				<li>home</li>
				<li>posts</li>
				<li>about</li>
			</ul>
		</div>
	);
};

export default Header;
