import { useState } from 'react'

export function Form({ setAfterGenerateShown, createPassword, theme, colorClasses }) {
	const [length, setLength] = useState(0)
	const [error, setError] = useState('')
	const [includeUppercase, setIncludeUppercase] = useState(false)
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSpecialChars, setIncludeSpecialChars] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		if (length > 4 && length <= 48) {
			setAfterGenerateShown(true)
			createPassword({ length, includeUppercase, includeNumbers, includeSpecialChars })
			setError('')
		} else {
			setError('Set correct password length')
			setAfterGenerateShown(false)
		}
	}

	return (
		<form className='flex flex-col gap-7' onSubmit={handleSubmit}>
			<div className='flex gap-2 items-center'>
				<span>Password length: </span>
				<input
					className={`bg-${colorClasses[theme]} text-white p-2 rounded-lg text-center w-1/4`}
					type='number'
					name='passNum'
					value={length}
					placeholder='length'
					onChange={e => setLength(e.target.value)}
				/>
			</div>
			<div className='flex gap-2 items-center'>
				<input
					type='checkbox'
					name='special'
					value='special'
					checked={includeSpecialChars}
					onChange={e => setIncludeSpecialChars(e.target.checked)}
				/>
				<span>Special characters</span>
			</div>
			<div className='flex gap-2 items-center'>
				<input
					type='checkbox'
					name='numbers'
					value='numbers'
					checked={includeNumbers}
					onChange={e => setIncludeNumbers(e.target.checked)}
				/>
				<span>Numbers</span>
			</div>
			<div className='flex gap-2 items-center'>
				<input
					type='checkbox'
					name='uppercase'
					value='uppercase'
					checked={includeUppercase}
					onChange={e => setIncludeUppercase(e.target.checked)}
				/>
				<span>Uppercase</span>
			</div>
			<span>
				<input
					className='text-left cursor-pointer py-2 px-4 bg-green-500 rounded-lg text-slate-50 font-semibold transition-colors hover:bg-green-400'
					type='submit'
					name='generate'
					value='Generate password'
				/>
			</span>
			<p className='text-red-600'>{error}</p>
		</form>
	)
}
