import React from 'react';
import classnames from 'classnames';
import  styles from './styles.module.css';
export const List =({className,children,...restProps})=> {

	return (<ul 
		className={classnames( className,styles['container'])}
		{...restProps}
		>{children}</ul>);
}