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
                <button className={classes.button} onClick={onCreatePost}>
                    New Post
                    <MdPostAdd size={20} />
                </button>
            </p>
        </header>
    );
}

export default MainHeader;