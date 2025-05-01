import React from 'react';
import Header from '../Header';

export default function AreasEdit(props) {
  return (
    <>
      <Header />
      <div className="flex flex-wrap mt-[1rem] ml-[1rem] gap-4">
        {props.areas.map((area) => (
          <div
            key={area.id}
            className="text-gray-700 flex items-center bg-white p-4 rounded-lg border border-sky-200 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[calc(25%-1rem)] xl:w-[calc(12.5%-1rem)]"
          >
            <div>
              <p className="font-semibold text-lg">{area.area_name}</p>
              <p className="mt-2 flex items-center text-base">
                <span className="mr-2 text-gray-500">金額:</span> ¥
                <input
                  type="number"
                  value={area.price}
                  className="ml-[0.5rem] w-[5rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
