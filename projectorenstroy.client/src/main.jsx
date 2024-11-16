import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppBar from './Containers/AppBar.jsx'

import ProjectCardsComponents from './Components/ProjectCardsComponents'

import TemporaryDrawer from './Components/TemporaryDrawer'
import Form from './Components/Form'
/*import FirstInfoBlock from './Components/FirstInfoBlocks'*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppBar />
        {/*<FirstInfoBlock />*/}
        <ProjectCardsComponents />
 
        <Form />
        
  </StrictMode>,
)
