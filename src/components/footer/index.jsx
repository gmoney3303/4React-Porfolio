import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="icon">
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://www.linkedin.com/in/garrett-sheppard-a402232b1/"
        />
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://github.com/gmoney3303"
        />
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://www.facebook.com/profile.php?id=61555748983189"
        />
      </div>
    </footer>
  );
}
