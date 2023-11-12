import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const {
  default: PaymentStatus,
} = require("@components/paymentStatus/PaymentStatus");
const { paymentStatus } = require("@utils/data");

const PaymentLayout = ({ children }) => {
  const router = usePathname();
  const [paymentSt, setPaymentSt] = useState(
    paymentStatus.find((item) => router.includes(item.path)) ?? paymentStatus[0]
  );
  useEffect(() => {
    paymentStatus.find((item) => router.includes(item.path)) ??
      paymentStatus[0];
  }, [router]);
  return (
    <>
      <PaymentStatus statusActive={paymentSt} />
      {children}
    </>
  );
};
export default PaymentLayout;
