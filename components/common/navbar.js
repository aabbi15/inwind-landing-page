'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { useEffect, useState } from 'react';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';
import NavButton from './navButton';

export default function Navbar() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<header className='w-full relative z-50 bg-base-100 p-5 pb-0 container mx-auto md:mb-5 flex justify-between items-center'>
			<a
				aria-label='landing page template'
				className='flex bg-green400 items-center w-full'
				title='landing page template'
				href={`/en`}
			>
				<Image
					width={200}
					height={200}
					src={'/onlylogo.png'}
					className='rotator transition-all hover:scale-110 w-6 md:w-14 h-6 md:h-14'
					alt='logo'
				></Image>
				<div className='flex flex-col h14 justify-around   text-base-content/80'>
				<h2 className='ml-3 font-bold text-[22px] '>EXPO ESSENTIALS</h2>
				<p className='ml-3 text-[14px]'>BOOTH CONSTRUCTION</p>
				</div>
			</a>

			<ul className='w-full px-5 gap-9 font-medium hidden md:flex flex-nowrap items-center bg-red300 justify-around'>
				{linkList.map((link, index) => {
					return (
						<li
							key={index}
							className='group py-3  text-center'
						>
							<a
								aria-label={link.name}
								className='group relative '
								title={link.name}
								href={`/${langName}${link.url}`}
							>
								{link.name}
								<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
							</a>
						</li>
					);
				})}
			</ul>

			<div className='md:w-full flex items-center justify-end gap-2'>
				
				{/* <ThemeToggle /> */}
				{/* <LangSwitch /> */}
				<NavButton className='ml-2'/>

				<details className='flex md:hidden dropdown dropdown-end'>
					<summary className='btn btn-ghost p-0'>
						<MdMenu size={18} />
					</summary>
					<ul className='menu dropdown-content z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52'>
						{linkList.map((link, index) => {
							return (
								<li key={index}>
									<a
										aria-label={link.name}
										title={link.name}
										href={`/${langName}${link.url}`}
									>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</details>


			</div>
		</header>
	);
}
