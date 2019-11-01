import React ,{useState,useEffect} from 'react';
import { I18nProvider } from "@lingui/react";
import {Trans,Plural} from "@lingui/macro";

import img3 from './images/thirdImage.jpeg';
 import img2 from './images/secondImage.jpg';

import img1 from './images/firstImage.jpg';
import styles from '../src/styles.module.css';

 
 import { List} from './components/List';
import {ListItem} from './components/ListItem';
  import config from './locales/ru/messages';
 

	console.log(config)

	const rusConfig= {
		ru:config
	};

const images= [img1, img2, img3];
 
function  shuffle(array) {
let newArr=[...array];
newArr.sort(() => Math.random() - 0.5);
return newArr;
}

{/* <li><Trans>Monday</Trans></li>
<li><Trans>Tuesday</Trans></li>
<li><Trans>Wednesday</Trans></li>
<li><Trans>Thursday</Trans></li>
<li><Trans>Friday</Trans></li>
<li><Trans>Saturday</Trans></li>
<li><Trans>Sunday</Trans></li>

<li>
	 <Trans><Plural
value={counter}
 one="# sticker"
 two="# stickers"
 few="# stickers"
 many="# stickers"
 other="# stickers"
 zero="no stickers"
 />
 </Trans>
	</li>
</ul> */}

  


const name= "Bob";
 

  function App() {
   const [counter,setCounter]=useState(0);
	 const [dataImages, setDataImages]=useState(images);
	 
	 useEffect(()=>{
    setDataImages(dataImages=>{
			let newData=shuffle(dataImages);
		
			return newData;
		});

	 },[]);
	 return (
	<I18nProvider 
	language="ru"
	catalogs= {
		rusConfig
	}
	/*  catalogs={{en:catalogs}}*/>
 	
	 <List>
		 <ListItem className={styles['list-item']} img={dataImages[0]}> <Trans>I’m as guilty as anyone of defining this game by its difficulty level, when there are actually a hundred other things I’d rather celebrate. But I want to tackle the difficulty thing head-on, because the difficulty is key to the experience of this game—but
			  not in the macho, “tough it out” sense you might expect. In Dark Souls, the difficulty isn’t a club the designers bash you with, but the palette with which they paint the experience.</Trans></ListItem>
		 <ListItem className={styles['list-item']} img={dataImages[1]}><Trans>Flowers have a way of doing that. They began changing the way the world looked almost as soon as they appeared on Earth about 130 million years ago, during the Cretaceous period. That's relatively recent in geologic time: If all Earth's history were compressed into an hour, flowering plants would exist for only the last 90 seconds. But once they took firm root about 100 million years ago, they swiftly diversified in an explosion of varieties that established most of the flowering plant families of the modern world.</Trans></ListItem>
		 <ListItem className={styles['list-item']} img={dataImages[2]}><Trans>Lorem ipsum Lorem ipsumLorem ipsumLorem  ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum</Trans></ListItem>

	 </List>
 
 		</I18nProvider>
 
  );
}

export default App;
