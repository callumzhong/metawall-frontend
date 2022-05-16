import PropTypes from 'prop-types';

const Media = ({
	imageElement,
	image,
	alt,
	width,
	height,
	className,
	...props
}) => {
	return (
		<div
			className={`flex flex-row-reverse items-center justify-end ${
				className || ''
			}`}
		>
			{props.children}
			{imageElement || (
				<img
					className='item mr-2 self-start'
					width={width}
					height={height}
					src={image}
					alt={alt}
				/>
			)}
		</div>
	);
};

Media.propTypes = {
	image: PropTypes.string,
	width: PropTypes.number,
	alt: PropTypes.string,
	imageElement: PropTypes.element,
	mode: PropTypes.oneOf(['tailwindcssName']),
};

export default Media;
