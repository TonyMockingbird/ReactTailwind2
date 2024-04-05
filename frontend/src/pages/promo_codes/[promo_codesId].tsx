import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/promo_codes/promo_codesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditPromo_codes = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    code: '',

    discount: '',

    products: [],
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { promo_codes } = useAppSelector((state) => state.promo_codes);

  const { promo_codesId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: promo_codesId }));
  }, [promo_codesId]);

  useEffect(() => {
    if (typeof promo_codes === 'object') {
      setInitialValues(promo_codes);
    }
  }, [promo_codes]);

  useEffect(() => {
    if (typeof promo_codes === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = promo_codes[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [promo_codes]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: promo_codesId, data }));
    await router.push('/promo_codes/promo_codes-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit promo_codes')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit promo_codes'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Code'>
                <Field name='code' placeholder='Code' />
              </FormField>

              <FormField label='Discount'>
                <Field type='number' name='discount' placeholder='Discount' />
              </FormField>

              <FormField label='Products' labelFor='products'>
                <Field
                  name='products'
                  id='products'
                  component={SelectFieldMany}
                  options={initialValues.products}
                  itemRef={'products'}
                  showField={'title'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/promo_codes/promo_codes-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditPromo_codes.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditPromo_codes;
