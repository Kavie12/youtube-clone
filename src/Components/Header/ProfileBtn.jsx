import ProfilePic from "../../Images/profile-pic.png";

const ProfileBtn = () => {
    return (
        <div className='cursor-pointer p-3'>
            <img src={ProfilePic} alt="profile_pic" className='w-8 h-8 object-cover rounded-full' />
        </div>
    )
}

export default ProfileBtn;