// pages/VnpayPage.tsx

import React from 'react';
import axios from 'axios';

const VnpayPage = ({ order, payment, onInputChange }) => {
  // Initialize amount with the value calculated from the order
  // const [amount, setAmount] = useState(order.IDProduct[0].price * order.IDProduct[0].quantity);
  // const [bankCode, setBankCode] = useState('');
  // const [language, setLanguage] = useState('vn');
  // const [paymentUrl, setPaymentUrl] = useState('');
    
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">VNPAY Checkout Page</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Amount:</label>
        <input
          disabled
          type="number"
          defaultValue={payment.amount}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Payment Method:</label>
        <select
          value={payment.bankCode}
          onChange={(e) => onInputChange('bankCode',e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select a bank</option>
          <option value="NCB">NCB</option>
          {/* Add more banks as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Language:</label>
        <select
          value={payment.language}
          onChange={(e) => onInputChange('language',e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select a language</option>
          <option value="vn">Vietnamese</option>
          <option value="en">English</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      {payment.paymentUrl && (
        <div className="mt-4">
          <p>Redirecting to VNPAY...</p>
          {/* You may want to redirect the user to the payment URL */}
          {/* Uncomment the line below once you decide how to handle the redirection */}
          {/* window.location.href = paymentUrl */}
        </div>
      )}
    </div>
  );
};

export default VnpayPage;
