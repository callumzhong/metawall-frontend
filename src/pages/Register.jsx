import RegisterFrom from 'stories/components/RegisterFrom/RegisterFrom';
import Banner from 'stories/modules/banner/Banner';
import Card from 'stories/modules/card/Card';

const Register = (props) => {
	return (
		<Card
			mode='shadow'
			className='mx-auto flex max-w-[54.3125rem] gap-[3.0469rem]  self-center bg-light-grayish-orange px-[3.0625rem] py-[4.25rem]'
		>
			<Banner />
			<RegisterFrom />
		</Card>
	);
};

export default Register;
