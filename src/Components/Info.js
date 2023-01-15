import profilePic from '../IMG_1114.JPG'

export default function Info () {
    return (
    <div className="info--div">
        <img src={profilePic} alt="" className="info--pic"></img>
        <h1 className="info--name">Bailee R.</h1>
        <p className="info--job">Frontend Developer</p>
        <p className="info--email">thebaiway.org</p>
        <div className="info--button_div">
            <button className="info--button_left"><i class="fa-sharp fa-solid fa-envelope"></i> Email</button>
            <button className="info--button_right"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
    </div>
    )
}