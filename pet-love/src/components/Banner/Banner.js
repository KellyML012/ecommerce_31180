import './Banner.css'

const Banner = ({ children, pageHeight, pageBackgound }) => {
    return(
        <div
            className='banner-container'
            style={{
                height: `${pageHeight ? pageHeight : "100vh"}`,
                backgroundColor: `${pageBackgound ? pageBackgound : "transparent"}`}
            }
        >
            {children}
        </div>
    )
}

export default Banner