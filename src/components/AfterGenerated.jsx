export function AfterGenerated({isPassVisible, setPassVisible, password}) {

    function handleCopy() {
        navigator.clipboard.writeText(password)
        .then(() => {
            alert('Text copied to clipboard');
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
        };

	return (
		<div className="flex flex-col items-center">
			<p className='mt-5 font-bold text-xl'>Your password:</p>
			<p className='mt-2 break-words word break-all'>
                {isPassVisible ? password : "*".repeat(password.length) }
            </p>
			<div className='flex gap-5 mt-5'>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500' onClick={() => setPassVisible(!isPassVisible)}>
					{isPassVisible ? "Hide" : "Show"}
				</button>
				<button className='py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold transition-colors hover:bg-blue-500' onClick={handleCopy}>
					Copy
				</button>
			</div>
		</div>
	)
}
