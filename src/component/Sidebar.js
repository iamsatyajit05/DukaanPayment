import { useLocation } from 'react-router-dom';
import { AnalyticsIcon, ApperaanceIcon, AudienceIcon, DeliveryIcon, DiscountsIcon, HomeIcon, MarketingIcon, OrderIcon, PaymentIcon, PluginsIcon, ProductsIcon, ToolsIcon, WalletIcon, DropdownIcon } from '../assets/Icons';
import LogoImg from '../assets/logo.png'

const links = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon,
    },
    {
        name: 'Orders',
        href: '/orders',
        icon: OrderIcon,
    },
    {
        name: 'Produts',
        href: '/products',
        icon: ProductsIcon,
    },
    {
        name: 'Delivery',
        href: '/delivery',
        icon: DeliveryIcon,
    },
    {
        name: 'Marketing',
        href: '/marketing',
        icon: MarketingIcon,
    },
    {
        name: 'Analytics',
        href: '/analytics',
        icon: AnalyticsIcon,
    },
    {
        name: 'Payments',
        href: '/payments',
        icon: PaymentIcon,
    },
    {
        name: 'Tools',
        href: '/tools',
        icon: ToolsIcon,
    },
    {
        name: 'Discounts',
        href: '/discounts',
        icon: DiscountsIcon,
    },
    {
        name: 'Audience',
        href: '/audience',
        icon: AudienceIcon,
    },
    {
        name: 'Appearance',
        href: '/appearance',
        icon: ApperaanceIcon,
    },
    {
        name: 'Plugins',
        href: '/plugins',
        icon: PluginsIcon,
    },
]

export default function Sidebar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav className="w-56 bg-[#1E2640]">
            <div className="h-full flex flex-col px-[10px] py-[16px] space-y-4">
                <div className="flex-1 space-y-6">
                    <div className='w-48 h-[42px] flex items-center space-x-3'>
                        <div className="h-10 w-10 bg-white rounded">
                            <img src={LogoImg} alt="logo" className='rounded' />
                        </div>
                        <div className='flex flex-col flex-1 text-white'>
                            <span>Nishyan</span>
                            <a href='/' target='_blank' className='text-xs underline'>Visit Store</a>
                        </div>
                        <div>
                            <DropdownIcon width={16} height={10} fillColor={'#FFF'} />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        {links.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center px-4 py-2 gap-3 rounded text-sm hover:bg-white hover:bg-opacity-10 ${pathname === link.href ? 'bg-white bg-opacity-10' : ''}`}
                                >
                                    <div>
                                        <LinkIcon width={20} height={20} fillColor={'#FFF'} />
                                    </div>
                                    <p className='text-white'>{link.name}</p>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="w-48 m-auto px-3 py-[6px] bg-[#353C53] rounded">
                    <div className="h-[42px] flex items-center space-x-3">
                        <div className="p-[6px] bg-white bg-opacity-10 w-9 h-9 rounded">
                            <WalletIcon width={24} height={24} fillColor={'#FFF'} />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="opacity-80 text-sm font-light">Available credits</span>
                            <span className="text-base">222.10</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};