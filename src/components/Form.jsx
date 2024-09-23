import { useState } from 'react'

export function Form({ setAfterGenerateShown, createPassword }) {
	const [value, setValue] = useState(0)
	const [error, setError] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (value > 0) {
			setAfterGenerateShown(true)
			createPassword(value)
			setError('')
		} else {
			setError('Set password length')
			setAfterGenerateShown(false)
		}
	}

	return (
		<form className='flex flex-col gap-7' onSubmit={handleSubmit}>
			<div className='flex gap-2 items-center'>
				<span>Password length: </span>
				<input
					className='bg-slate-600 text-slate-50 p-2 text-center rounded-lg w-1/3'
					type='number'
					name='passNum'
					value={value}
					max={48}
					placeholder='length'
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<div className='flex gap-2'>
				<input type='checkbox' name='special' value='special' />
				<span>Special characters</span>
			</div>
			<div className='flex gap-2'>
				<input type='checkbox' name='numbers' value='numbers' />
				<span>Numbers</span>
			</div>
			<div className='flex gap-2'>
				<input type='checkbox' name='uppercase' value='uppercase' />
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
