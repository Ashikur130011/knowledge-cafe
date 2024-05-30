import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between mx-2 pb-3 border-b-2 items-center'>
            <h1 className="text-3xl font-bold underline ">
      Hello Knowledge Seeker!
    </h1>
    <img src={profile} alt="" />
        </div>
    );
};

export default Header;