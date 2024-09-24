import { useState } from 'react'
import { AfterGenerated } from './components/AfterGenerated'
import { Form } from './components/Form'

function App() {
	const [password, setPassword] = useState('')
	const [isPassVisible, setPassVisible] = useState(false)
	const [isAfterGenerateShow, setAfterGenerateShown] = useState(false)
	const [theme, setTheme] = useState("default")

	const colorClasses = {
		default: "-slate-800",
		pink: "-pink-500",
		purple: "-purple-500",
		green: "-emerald-500"
	}

	function changeTheme(e) {
		setTheme(e.target.value)
	}

	function createPassword({ length, includeUppercase, includeNumbers, includeSpecialChars }) {
		const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
		const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const numbersChars = '1234567890'
		const specialChars = '!@#$%^&*()_+-=?/.>,<{}[];:`~'
		let charSet = lowercaseChars

		if (includeNumbers) {
			charSet += numbersChars
		}
		if (includeSpecialChars) {
			charSet += specialChars
		}
		if (includeUppercase) {
			charSet += uppercaseChars
		}

		let newPassword = ''
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charSet.length)
			newPassword += charSet[randomIndex]
		}
		setPassword(newPassword)
	}

	return (
		<div className={`min-h-screen w-full flex justify-center  items-center bg${colorClasses[theme]}`}>
			<div className='absolute top-8 left-8 flex gap-3 items-center'>
				<label className={`font-semibold ${theme == "default" ? "text-white" : "text-slate-800"}`} htmlFor="theme">Select App Theme</label>
				<select onChange={changeTheme} className='p-2 rounded-lg border-2 border-solid border-slate-800' value={theme} name="theme" id="theme">
					<option value="default">Default</option>
					<option value="pink">Pink</option>
					<option value="purple">Purple</option>
					<option value="green">Green</option>
				</select>
			</div>
			<div className='p-6 bg-slate-50 min-h-[400px] md:w-[500px] rounded-xl text-lg overflow-hidden border-2 border-solid border-slate-800'>
				<Form setAfterGenerateShown={setAfterGenerateShown} createPassword={createPassword} theme={theme} colorClasses={colorClasses} />
				{isAfterGenerateShow && (
					<AfterGenerated isPassVisible={isPassVisible} setPassVisible={setPassVisible} password={password} />
				)}
			</div>
		</div>
	)
}

export default App
