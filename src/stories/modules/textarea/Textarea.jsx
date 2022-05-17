const Textarea = ({ className, ...props }) => {
	return (
		<textarea
			className='min-h-[10.5625rem] w-full border-2 border-black py-3 px-4'
			{...props}
		/>
	);
};

export default Textarea;
