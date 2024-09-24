import { useState } from 'react'
import { AfterGenerated } from './components/AfterGenerated'
import { Form } from './components/Form'

function App() {
	const [password, setPassword] = useState('')
	const [isPassVisible, setPassVisible] = useState(false)
	const [isAfterGenerateShow, setAfterGenerateShown] = useState(false)

	function createPassword({ length, includeUppercase, includeNumbers, includeSpecialChars }) {
		const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
		const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const numbersChars = '1234567890'
		const specialChars = '!@#$%^&*()_+-=?/.>,<{}[];:`~'
		let charSet = lowercaseChars

		if(includeNumbers) {
			charSet += numbersChars
		}
		if(includeSpecialChars) {
			charSet += specialChars
		}
		if(includeUppercase) {
			charSet += uppercaseChars
		}

		let newPassword = ''
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * length)
			newPassword += charSet[randomIndex]
		}
		setPassword(newPassword)
	}

	return (
		<div className='p-6 bg-slate-50 min-h-[400px] md:w-[500px] rounded-xl text-lg overflow-hidden'>
			<Form setAfterGenerateShown={setAfterGenerateShown} createPassword={createPassword} />
			{isAfterGenerateShow && (
				<AfterGenerated isPassVisible={isPassVisible} setPassVisible={setPassVisible} password={password} />
			)}
		</div>
	)
}

export default App
