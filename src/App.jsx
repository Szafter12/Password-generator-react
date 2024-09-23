import {useState} from "react"
import { AfterGenerated } from './components/AfterGenerated'
import { Form } from './components/Form'

function App() {

  const [isAfterGenerateShow, setAfterGenerateShown] = useState(false)
  
	return (
		<div className='p-6 bg-slate-50 min-h-[400px] md:w-[500px] rounded-xl text-lg overflow-hidden'>
			<Form setAfterGenerateShown={setAfterGenerateShown} />
			{isAfterGenerateShow && <AfterGenerated />}
		</div>
	)
}

export default App
