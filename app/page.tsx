'use client'
import { useState } from 'react'
import { FeedBackFormPopup, FeedbackItem, Button } from '@/components'

export default function Home() {
	const [showFeedbackPopup, setShowFeedbackPopup] = useState<boolean>(false)

	function openFeedbackPopup() {
		setShowFeedbackPopup(true)
	}

	return (
		<main className='bg-white max-w-2xl mx-auto shadow-lg md:rounded-lg md:mt-8 overflow-hidden'>
			<div className='bg-gradient-to-r from-cyan-500 to-blue-400 p-8'>
				<h1 className='font-bold text-xl'>EasyFeedback</h1>
				<p className='text-opacity-90 text-slate-700'>
					Let us know how we can do a better job for you.
				</p>
			</div>
			<div className='bg-gray-100 px-8 py-4 flex border-b items-center justify-between'>
				<div className='grow'></div>
				<div>
					<Button primary onClick={openFeedbackPopup}>
						Make a suggestion
					</Button>
				</div>
			</div>
			<div className='px-8'>
				<FeedbackItem />
				<FeedbackItem />
				<FeedbackItem />
				<FeedbackItem />
				<FeedbackItem />
			</div>
			{showFeedbackPopup && (
				<FeedBackFormPopup setShow={setShowFeedbackPopup} />
			)}
		</main>
	)
}
