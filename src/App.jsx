function App() {
	return (
		<div className='p-6 bg-slate-50 min-h-[400px] rounded-xl text-lg'>
			<form className='flex flex-col gap-7'>
				<div className='flex gap-2 items-center'>
					<span>Password length: </span>
					<input className='bg-slate-600 text-slate-50 p-2 text-center rounded-lg w-1/3' type='number' name='passNum' />
				</div>
				<div className='flex gap-2'>
					<input type='checkbox' name='options' value='special' />
					<span>Special characters</span>
				</div>
				<div className='flex gap-2'>
					<input type='checkbox' name='options' value='numbers' />
					<span>Numbers</span>
				</div>
				<div className='flex gap-2'>
					<input type='checkbox' name='options' value='uppercase' />
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
			</form>
			<p className='mt-5 font-bold text-xl'>Your password:</p>
			<p className='mt-2'>***************</p>
			<div className='flex gap-5 mt-5'>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500'>Show</button>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500'>Copy</button>
			</div>
		</div>
	)
}

export default App
