import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    icon: icon.mdiAccountGroup,
    permissions: 'READ_USERS',
  },
  {
    href: '/products/products-list',
    label: 'Products',
    icon: icon.mdiTable,
    permissions: 'READ_PRODUCTS',
  },
  {
    href: '/categories/categories-list',
    label: 'Categories',
    icon: icon.mdiTable,
    permissions: 'READ_CATEGORIES',
  },
  {
    href: '/orders/orders-list',
    label: 'Orders',
    icon: icon.mdiTable,
    permissions: 'READ_ORDERS',
  },
  {
    href: '/reviews/reviews-list',
    label: 'Reviews',
    icon: icon.mdiTable,
    permissions: 'READ_REVIEWS',
  },
  {
    href: '/promo_codes/promo_codes-list',
    label: 'Promo codes',
    icon: icon.mdiTable,
    permissions: 'READ_PROMO_CODES',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },
  {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS',
  },
];

export default menuAside;
