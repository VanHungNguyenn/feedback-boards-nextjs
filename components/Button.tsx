import React, { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	children: ReactNode
	primary?: boolean
}

const Button = ({ onClick, children, primary }: ButtonProps) => {
	return (
		<button
			className={` py-1 px-4 rounded-md  text-opacity-90 ${
				primary ? 'bg-blue-500 text-white' : 'text-gray-600'
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
