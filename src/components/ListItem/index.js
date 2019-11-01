import React from 'react';

import classnames from 'classnames';

import styles from './styles.module.css';
export const ListItem = ({className,img, children,...restProps})=> {
	return (<li 
		        className={classnames(className,styles.item)}
		{...restProps}
	  
	>
		<div className={styles['item-content']}>
				<div className={styles['item-content-img']}>
					<img className={styles['item-image']} src={img}/>
				</div>
			
			 <span className={styles['item-content-text']} >{children}</span>
		</div>
	   
	</li>);
}

