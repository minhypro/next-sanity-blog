import { FooterSocialButtons } from "./FooterSocialButtons";
import { FooterTags } from "./FooterTags";
import { RecentPosts } from "./RecentPosts";

const Footer = () => {
  return (
    <div className="bg-palette-2">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_27%_27%] justify-center">
        <RecentPosts />
        <FooterTags />
        <FooterSocialButtons />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
