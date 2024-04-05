import * as icon from '@mdi/js';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton';
import BaseIcon from '../components/BaseIcon';
import { getPageTitle } from '../config';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '../stores/hooks';
const Dashboard = () => {
  const dispatch = useAppDispatch();

  const [users, setUsers] = React.useState('Loading...');
  const [products, setProducts] = React.useState('Loading...');
  const [categories, setCategories] = React.useState('Loading...');
  const [orders, setOrders] = React.useState('Loading...');
  const [reviews, setReviews] = React.useState('Loading...');
  const [promo_codes, setPromo_codes] = React.useState('Loading...');

  const { isFetchingQuery } = useAppSelector((state) => state.openAi);

  async function loadData() {
    const entities = [
      'users',
      'products',
      'categories',
      'orders',
      'reviews',
      'promo_codes',
    ];
    const fns = [
      setUsers,
      setProducts,
      setCategories,
      setOrders,
      setReviews,
      setPromo_codes,
    ];

    const requests = entities.map((entity, index) => {
      return axios.get(`/${entity.toLowerCase()}/count`);
    });

    Promise.allSettled(requests).then((results) => {
      results.forEach((result, i) => {
        if (result.status === 'fulfilled') {
          fns[i](result.value.data.count);
        } else {
          fns[i](result.reason.message);
        }
      });
    });
  }

  React.useEffect(() => {
    loadData().then();
  }, []);

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={icon.mdiChartTimelineVariant}
          title='Overview'
          main
        >
          {''}
        </SectionTitleLineWithButton>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
          <Link href={'/users/users-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Users
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {users}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiAccountGroup}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/products/products-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Products
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {products}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiTable}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/categories/categories-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Categories
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {categories}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiTable}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/orders/orders-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Orders
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {orders}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiTable}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/reviews/reviews-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Reviews
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {reviews}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiTable}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/promo_codes/promo_codes-list'}>
            <div className='rounded dark:bg-dark-900 bg-white border border-pavitra-400 dark:border-dark-700 p-6'>
              <div className='flex justify-between align-center'>
                <div>
                  <div className='text-lg leading-tight text-gray-500 dark:text-gray-400'>
                    Promo codes
                  </div>
                  <div className='text-3xl leading-tight font-semibold'>
                    {promo_codes}
                  </div>
                </div>
                <div>
                  <BaseIcon
                    className='text-blue-500'
                    w='w-16'
                    h='h-16'
                    size={48}
                    path={icon.mdiTable}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SectionMain>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Dashboard;
