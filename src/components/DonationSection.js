import React from 'react';

const DonationSection = ({ accounts }) => {
    return (
      <div
        className="border rounded-2xl mt-5 p-6 bg-supportb border-support"
        data-aos="zoom-in"
      >
        <h1 className="text-2xl font-bold">Donate To Bank Account</h1>
        <p className="text-xl lg:text-lg text-justifypy-5 leading-6">
          Your support can help us empower the next generation of female technologists and innovators. Your contribution,can make a lasting impact on a student`&apos;`s life and career.
        </p>
        <h3 className='font-bold leading-6 text-xl pb-2'>How to Donate:</h3>
        <p className='text-justify text-xl'>You can donate directly to our bank accounts using the details below:</p>
        <div>
          {accounts.map((account, index) => (
            <div key={index} className="py-3  text-xl">
              <h3 className='font-semibold'>{account.type} Account</h3>
              <p>
                Account Name: <span className='text-gray-600'>{account.name}</span>
              </p>
              <p>
                Account Number: <span className='text-gray-600'>{account.number}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DonationSection;