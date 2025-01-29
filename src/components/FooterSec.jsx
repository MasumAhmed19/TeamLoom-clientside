import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterSec = () => {
  return (
    <section className="bg-black">
      <section className="sw">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <Link to='/' className="flex items-center">
              <FooterBrand
                src="https://i.ibb.co.com/6H7FBtf/logo.png"
                alt="TeamLoom logo"
                name=""
              />
              <h2 className="f1 text-lg text-white">TeamLoom</h2>
            </Link>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Contact</FooterLink>
                  <FooterLink href="#">Services</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>

          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright
              href="#"
              by="TeamLoom"
              year={2025}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon
                href="#"
                icon={BsFacebook}
              />
              <FooterIcon
                href="#"
                icon={BsInstagram}
              />
              <FooterIcon
                href="#"
                icon={BsTwitter}
              />
              <FooterIcon
                href="#"
                icon={BsGithub}
              />
              <FooterIcon
                href="#"
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FooterSec;
