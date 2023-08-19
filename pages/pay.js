import { useState } from 'react';
import MpesaPay from 'mpesapay';
import Head from 'next/head';
import Layout from '../src/layouts/Layout';


const Consumer_Key = ' HmTIvvAl0SAFUuo3';
const Consumer_Secret = 'VqFxaTwdV4PIea7h2n5otSmROnvwQGly';
const Business_Short_Code = '174379';
const Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const Transaction_Description = 'ttr';
const Account_Reference = 'rtr';
const PartyA = "600426"
const Initiator_Name = "ed"
const Environment = 'sandbox'
const Transaction_Type = "till"
// Configure MpesaPay
const mpesapay = new MpesaPay(
  Consumer_Key,
  Consumer_Secret,
  Business_Short_Code,
  Passkey,
  Account_Reference,
  Transaction_Description,
  PartyA,
  Initiator_Name,
  Environment,
  Transaction_Type
);
 const Pay=()=> {
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const amount = '100';
      const phoneNumber = '254712345678';
      const callbackUrl = 'https://example.com/callback';
      const response = await mpesapay.stkPush(amount, phoneNumber, callbackUrl);
      console.log(response);
      // Handle the response data
    } catch (error) {
      console.error(error);
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
    <Head>
      <title>Orido | Intro</title>
    </Head>
    <div>
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
    </Layout>
  );
}

export default Pay