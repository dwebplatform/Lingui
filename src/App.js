import React from 'react';
import { I18nProvider } from "@lingui/react";

import {Trans} from "@lingui/macro";
import './App.css';
import catalogCs from './locales/cs/messages';

 import {Box} from './components/Box';


 console.log(catalogCs);

function App() {
  return (

  <div className="App">
  <I18nProvider language="cs" catalogs={catalogCs}>
	<h2>	
		<Trans>
			 Hello
		</Trans>
		</h2>		<Box/>
	</I18nProvider>
	   
	  </div>
  );
}

export default App;
