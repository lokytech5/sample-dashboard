import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'inventory',
        label: 'Inventory',
        path: '/inventory',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'conversations',
        label: 'Conversations',
        path: '/conversations',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCube />
    },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'contact-support',
        label: 'Contact Support',
        path: '/contact-support',
        icon: <HiOutlineCog />
    },
    {
        key: 'Free-Gift-Awaits-You',
        label: 'Free Gift Awaits You',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]