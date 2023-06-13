import React from "react";
import { data } from "../Data";
import { useState } from "react";

function DataTable() {
  console.log(data);
  const [datatable, setdatatable] = useState(data);
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Field
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((data) => {
  return(
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {data.data}
              </th>
              <td class="px-6 py-4">{data.type}</td>
              <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {data.description}
              </td>
            </tr>
  )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
