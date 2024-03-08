import profile from '../assets/images/profile.jpg'

const Profile = () => {
    return <div>

        {/* degree */}
        <div className="flex flex-col justify-center md:flex-row md:justify-center ml-2  gap-3  items-center">
            <h1 className="bg-black font bold text-white py-2 px-2 rounded-full">°C</h1>
            <h1 className="font-bold">°F</h1>
        <img className='hidden md:block h-12 w-12 rounded-md' src={profile} alt="" />
        </div>
        <img className='block md:hidden h-12 mt-2 w-12 rounded-md' src={profile} alt="" />
    </div>
}

export default Profile;