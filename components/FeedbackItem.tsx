import React from 'react'

const FeedbackItem = () => {
	return (
		<div className='my-8 flex gap-8 items-center'>
			<div>
				<h2 className='font-bold'>Post more videos</h2>
				<p className='text-gray-600 text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quam repellat exercitationem quisquam consequuntur
					consectetur facere cupiditate dolorem aspernatur ad eum
					earum aliquid unde reiciendis debitis facilis, recusandae
					omnis praesentium illum!
				</p>
			</div>
			<div>
				<button className='shadow-sm shadow-gray-200 border rounded-md py-1 px-4 flex items-center gap-1 text-gray-600'>
					<div className='triangle-vote-up'></div>
					80
				</button>
			</div>
		</div>
	)
}

export default FeedbackItem
