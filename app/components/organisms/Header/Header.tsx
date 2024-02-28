import { User } from "@/app/types/types";
import Link from "next/link";
import Navbar from "../../molecules/Navbar/Navbar";
import UserModal from "../../molecules/UserModal/UserModal";
import AppLink from "../../atoms/AppLink/AppLink";

type HeaderProps = {
	user?: User
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="bg-gray-800 fixed max-w-5xl w-full mx-auto inset-x-0 top-3 rounded-xl px-5 py-3 z-50">
			<div className="flex items-center justify-between">
				<Link href='/' className="text-white text-2xl font-bold">Logo</Link>
				<div className="flex items-center justify-between">
					<Navbar />
					{
						user ? <UserModal user={user} /> : <AppLink href="/api/auth/login" >Login</AppLink>
					}
				</div>
			</div>
    </header>
  );
};

export default Header;