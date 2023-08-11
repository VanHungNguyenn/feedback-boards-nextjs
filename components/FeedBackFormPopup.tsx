import React, { Dispatch, useState } from 'react'
import { Popup, Button } from '@/components'
import axios from 'axios'

interface FeedBackFormPopupProps {
	setShow: Dispatch<React.SetStateAction<boolean>>
}

const FeedBackFormPopup = ({ setShow }: FeedBackFormPopupProps) => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	const handleCreatePostButtonClick = () => {
		axios.post('/', { title, description })
	}

	return (
		<Popup title='Make a suggestion' setShow={setShow}>
			<form className='p-8'>
				<label className='block mt-4 mb-1 text-slate-700'>Title</label>
				<input
					className='w-full border p-2 rounded-md'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='A short, descriptive title'
				/>
				<label className='block mt-4 mb-1 text-slate-700'>Detail</label>
				<textarea
					className='w-full border p-2 rounded-md'
					placeholder='Please include any details'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<div className='flex gap-2 items-center justify-end mt-2'>
					<Button>Attach files</Button>
					<Button primary>Create post</Button>
				</div>
			</form>
		</Popup>
	)
}

export default FeedBackFormPopup
