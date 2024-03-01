import { useState } from 'react';

export const Table = () => {
  const [moneyInAccount, setUserMoneyInAccount] = useState({
    amount: 0,
    description: '',
    date: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
  });
  return (
    <table className="w-full h-screen mt-10">
      <thead>
        <tr className="flex justify-between">
          <th>Date</th>
          <th className="ml-2">Description</th>

          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex justify-between">
          <td className="text-lg">{moneyInAccount.date}</td>
          <td className="text-lg">{moneyInAccount.description}</td>

          <td className="w-16 text-left text-lg truncate">
            {moneyInAccount.amount}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
