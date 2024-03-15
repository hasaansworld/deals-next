'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';
import AddSquareIcon from '@/components/icons/add_square';
import Notification03Icon from '@/components/icons/notification';
import UserCircle02Icon from '@/components/icons/user_circle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Login03Icon from '@/components/icons/login';
import UserAdd01Icon from '@/components/icons/user_add';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Logout03Icon from '@/components/icons/logout';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Input } from '../ui/input';
import { useState } from 'react';
import Search01Icon from '../icons/search';

const Header = () => {
	// const { user, logout } = useAuth({ middleware: 'guest' });
	const router = useRouter();
	const [search, setSearch] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search) router.push(`/?q=${search}`);
	};

	return (
		<header className="fixed left-0 right-0 top-0 z-10 border-b border-[#777]/10 bg-white/50 py-2 backdrop-blur-2xl backdrop-filter">
			<nav>
				<div className="flex items-center justify-between gap-24 px-6 md:justify-center md:gap-32">
					<Link href="/">
						<div className="flex w-[100px] items-center gap-2">
							<img src="/logo.svg" alt="Logo" className="h-6 w-6" />
							<h1 className="text-xl font-semibold text-black">Appdeals</h1>
						</div>
					</Link>

					<form className="relative hidden w-[400px] md:block" onSubmit={handleSubmit}>
						<input
							type="text"
							className="w-full rounded-lg border border-[#666]/10 bg-[#f6f6f6]/10 py-1 pl-3 pr-14 text-base font-medium text-black placeholder:text-neutral-800/50 focus-visible:border-fuchsia-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/30 focus-visible:ring-offset-0"
							placeholder="Search apps"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-800/30 hover:text-fuchsia-500">
							<Search01Icon className="h-5 w-5" stroke="2" />
						</button>
					</form>

					<div className="flex w-[100px] items-center">
						<Link
							href="/submit"
							className="flex items-center gap-2 rounded-full bg-fuchsia-500 px-4 py-1 font-medium text-white hover:ring-4 hover:ring-fuchsia-200"
						>
							<AddSquareIcon className="h-4 w-4" stroke="2.5" />
							Submit
						</Link>
						{/* {user ? (
							<>
								<Notification03Icon className="h-5 w-5 text-black" stroke="2" />
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Avatar className="h-8 w-8 cursor-pointer">
											<AvatarImage src={user.profile_picture} alt="Profile Picture" />
											<AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
										</Avatar>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-60 p-1">
										<div className="px-4 py-2">
											<DropdownMenuLabel className="font-medium">{user.name}</DropdownMenuLabel>
											<DropdownMenuLabel className="text-sm text-neutral-400">{user.email}</DropdownMenuLabel>
										</div>
										<DropdownMenuSeparator />
										<DropdownMenuItem asChild>
											<button
												className="flex w-full items-center gap-3 px-4 py-2 text-rose-500 hover:bg-neutral-100 focus:text-rose-600"
												onClick={() => logout()}
											>
												<Logout03Icon className="h-4 w-4" stroke="2" />
												<p className="text-sm font-medium">Logout</p>
											</button>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						) : (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className="h-8 w-8 cursor-pointer rounded-full bg-transparent p-1 hover:bg-neutral-100">
										<UserCircle02Icon className="h-6 w-6 text-black" stroke="1.5" />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-40 p-1">
									<DropdownMenuItem asChild>
										<Link
											href="/login"
											className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:bg-neutral-100 hover:text-black"
										>
											<Login03Icon className="h-4 w-4" stroke="2" />
											<p className="text-sm font-medium">Login</p>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link
											href="/signup"
											className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:bg-neutral-100 hover:text-black"
										>
											<UserAdd01Icon className="h-4 w-4" stroke="2" />
											<p className="text-sm font-medium">Signup</p>
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						)} */}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
