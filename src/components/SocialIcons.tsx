import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/">
          <FaTiktok />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};
