import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
          <ul>
            <li>
              <Link to={`Games`}>Your Name</Link>
            </li>
            <li>
              <Link to={`Hobby`}>Your Friend</Link>
            </li>
			<li>
              <Link to={`Stories`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
	);
}

export default Header
