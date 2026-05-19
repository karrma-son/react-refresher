import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>
                <MdMessage/>
                Poster
            </h1>
            <p>
                <Link to="/create-post" className={classes.button}>
                    New Post
                    <MdPostAdd size={20} />
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;