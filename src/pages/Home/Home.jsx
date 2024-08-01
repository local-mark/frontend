import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <h2>Local Mark Home Page</h2>
            <p>Welcome to the Home Page!</p>
            <Link to="/login">Go to Login Page</Link>
            <br />
            <Link to="/landing">LANDING</Link>
        </div>
    );
}
