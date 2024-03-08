import profile from '../assets/images/profile.jpg'

const Profile = () => {
    return <div>

        {/* degree */}
        <div className="flex gap-3 items-center">
            <h1 className="bg-black font bold text-white py-2 px-2 rounded-full">°C</h1>
            <h1 className="font-bold">°F</h1>
        <img className=' h-12 w-12 rounded-md' src={profile} alt="" />
        </div>
    </div>
}

export default Profile;