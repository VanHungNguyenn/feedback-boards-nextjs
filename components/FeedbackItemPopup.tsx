import React, { Dispatch, SetStateAction } from 'react'
import { IFeedback } from '@/types'
import { Button, Popup, FeedbackItemPopupComments } from '@/components'

export interface FeedbackItemPopupProps {
	title: string
	description: string
	votesCount: number
	setShow: Dispatch<SetStateAction<IFeedback | null>>
}

const FeedbackItemPopup = ({
	title,
	description,
	votesCount,
	setShow,
}: FeedbackItemPopupProps) => {
	return (
		<Popup title={''} setShow={setShow}>
			<div className='p-8 pb-2'>
				<h2 className='text-lg font-bold mb-2'>{title}</h2>
				<p className='text-gray-600'>{description}</p>
			</div>
			<div className='flex justify-end px-8 py-2 border-b'>
				<Button primary>
					<span className='triangle-vote-up'></span>
					Upvote {votesCount}
				</Button>
			</div>
			<div>
				<FeedbackItemPopupComments />
			</div>
		</Popup>
	)
}

export default FeedbackItemPopup
