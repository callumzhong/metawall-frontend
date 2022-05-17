import Card, { CardBorderRadius, CardMode } from 'stories/modules/card/Card';

const NewsFeedBlank = ({ mode, className, ...props }) => {
	return (
		<Card mode={CardMode['shadow-bottom']} borderRadius={CardBorderRadius.lg}>
			<ul className='flex list-none gap-[.375rem] border-b-2 border-black pt-[1.1875rem] pb-4'>
				<li className='border-1 ml-4 h-2 w-2 rounded-full border-[#707070] bg-[#DE4B63]'></li>
				<li className='border-1 h-2 w-2 rounded-full border-[#707070] bg-[#FAA722]'></li>
				<li className='border-1 h-2 w-2 rounded-full border-[#707070] bg-[#83C51D]'></li>
			</ul>
			<div className='py-8 text-center text-dawn'>
				目前尚無動態，新增一則貼文吧！
			</div>
		</Card>
	);
};

export default NewsFeedBlank;
