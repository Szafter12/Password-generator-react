export function AfterGenerated() {
    
	return (
		<>
			<p className='mt-5 font-bold text-xl'>Your password:</p>
			<p className='mt-2 break-words word break-all'></p>
			<div className='flex gap-5 mt-5'>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500'>
					Show
				</button>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500'>
					Copy
				</button>
			</div>
		</>
	)
}
