import classes from './now.module.css';

export default function Now() {
    console.log('executing')
    return (
        <div className={classes.now}>
            Render Timestamp: {Date.now()}
        </div>
    );
}