'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
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
		<div>
			{/* <img 
						
						src={'/footer-image.png'}
						className='w-full h-24'
						alt='logo'
						/>	 */}
		
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
			<div className='container mx-auto flex flex-col md:flex-row justify-between bgwhite items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start bg-yellow300'>
					
					<a
									aria-label='landing page template'
									className='flex items-center  bg-green400 '
									title='landing page template'
									href={`/${langName}`}
								>
									<Image
										width={200}
										height={200}
										src={'/onlylogowhite.png'}
										className='rotator transition-all hover:scale-110 w-6 md:w-14 h-6 md:h-14'
										alt='logo'
									></Image>
									<div className='flex flex-col text-white justify-around h-14 '>
									<h2 className='ml-3 font-bold text-[22px] '>EXPO ESSENTIALS</h2>
									<p className='ml-3 text-[14px]'>BOOTH CONSTRUCTION</p>
									</div>
								</a>
					<div className='flex flex-wrap mt-10 justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<a
									key={index}
									title={link.name}
									href={`/${langName}${link.url}`}
								>
									{link.name}
								</a>
							);
						})}
					</div>
				</div>

				<div className='text-xs text-center'>
					
					
						Created by
						<br/>
						{' '}
					
					<a
						title={'Abhishek Abbi - LinkedIn'}
						href='https://www.linkedin.com/in/abhishek-abbi/'
						target='_blank'
					>
					Abhishek   {'    '} {' '}
					</a>
					
					and  {'  '} {' '}
					

					<a
						title={'Ritik Mahyavanshi - LinkedIn'}
						href='https://www.linkedin.com/in/ritikmahyavanshi/'
						target='_blank'
					>
						Ritik 
					</a>
				</div>
			</div>
		</footer>
		</div>
	);
}
