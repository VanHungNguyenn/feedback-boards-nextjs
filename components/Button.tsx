import React, { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	children: ReactNode
	primary?: boolean | undefined
	disabled?: boolean
}

const Button = ({ onClick, children, primary, disabled }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			className={`flex items-center gap-2 py-1 px-4 rounded-md  text-opacity-90 ${
				primary ? 'bg-blue-500 text-white' : 'text-gray-600'
			} ${
				disabled
					? 'text-opacity-70 bg-opacity-70 cursor-not-allowed'
					: ''
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
