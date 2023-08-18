import './footer.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <h2 class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            OFTAC
                        </h2>
                        <span class="mb-3 mb-md-0 text-muted">&copy; 2023 OFTAC, Org</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3">
                            <FacebookIcon />
                        </li>
                        <li class="ms-3">
                            <LinkedInIcon />
                        </li>
                        <li class="ms-3">
                            <TwitterIcon />
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
