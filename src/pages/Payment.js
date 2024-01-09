import React from 'react';
import Header from '../component/payments/Header';
import Overview from '../component/payments/Overview';
import Transactions from '../component/payments/Transactions';

export default function PaymentPage() {
    return (
        <section className='bg-[#FAFAFA] flex-1'>
            <Header />
            <section className='p-8 space-y-8'>
                <Overview />
                <Transactions />
            </section>
        </section>
    )
};