import { FaFacebook, FaTiktok, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
export const IndexFooter = () => {
    return (
        <footer className="footer">
            <Link to='https://www.facebook.com' className='icon' target={'_blank'}>
                <FaFacebook />
            </Link>
            <Link to='https://www.tiktok.com' className='icon' target={'_blank'}>
                <FaTiktok className='icon'/>
            </Link>
            
            <Link to='https://www.twitter.com' className='icon' target={'_blank'}>
                <FaTwitter className='icon'/>
            </Link>
        </footer>
    )
}