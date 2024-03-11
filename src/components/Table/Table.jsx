import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

export const Table = () => {
  const { moneyInAccount } = useUser();

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
            {moneyInAccount.moneyReceived}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
