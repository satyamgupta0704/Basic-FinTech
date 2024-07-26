import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    // {
    //     id: 2,
    //     title: "View Transactions",
    //     icon: transactions,
    //     link: "/dashboard",
    // },
    {
        id: 3,
        title: "Deposits",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Withdrawls",
        icon: expenses,
        link: "/dashboard",
    },
]