import React from 'react'

interface AvatarProps {
	url?: string | null
}

const Avatar = ({ url = null }: AvatarProps) => {
	return (
		<div>
			<div className='rounded-full bg-blue-300 w-12 h-12'></div>
		</div>
	)
}

export default Avatar
