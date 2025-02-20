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
    <section className="bg-black p-10">
      <section className="sw">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-5">
            <Link to='/' className="flex items-center ">
              <FooterBrand
                src="https://i.ibb.co.com/6H7FBtf/logo.png"
                alt="TeamLoom logo"
                name=""
              />
              <h2 className="f1 text-lg text-white">TeamLoom</h2>
            </Link>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="Quick Links" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/dashboard/profile">Dashboard</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" className="text-white"  />
                <FooterLinkGroup col>
                  <FooterLink href="https://github.com/MasumAhmed19">Github</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal " className="text-white"  />
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
                href="https://x.com/Masum_Ahmedd"
                icon={BsTwitter}
              />
              <FooterIcon
                href="https://github.com/MasumAhmed19"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FooterSec;
