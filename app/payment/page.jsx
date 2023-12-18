"use client";

import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";

const checkout = () => {

  return (
    <PaymentLayout>
      <section className="w-full flex">
      <FormPaymentMethod />
      </section>
    </PaymentLayout>
  );
};

export default checkout;
