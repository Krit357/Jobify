import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            I'm baby pork belly flexitarian letterpress bushwick, photo booth
            jianbing hashtag pug celiac jawn big mood. Bicycle rights hashtag
            beard, selfies post-ironic tonx raclette tbh marfa unicorn 8-bit
            gastropub. Man bun jean shorts +1, hashtag lo-fi viral migas
            asymmetrical XOXO quinoa sartorial same fit yr. Pour-over live-edge
            mlkshk cold-pressed mumblecore vape.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
