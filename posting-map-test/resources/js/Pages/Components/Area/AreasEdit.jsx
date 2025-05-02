import React, { useState } from 'react';
import Header from '../Header';

export default function AreasEdit(props) {
  // 状態を持つために useState を使用
  const [areas, setAreas] = useState(props.areas);
  const [search, setSearch] = useState(''); // 検索バーの状態

  // 金額の更新処理
  const handlePriceChange = (id, newPrice) => {
    setAreas((prevAreas) =>
      prevAreas.map((area) =>
        area.id === id ? { ...area, price: newPrice } : area
      )
    );
  };

  // エリア名によるソート
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
  };

  // 検索文字列がエリア名に含まれているものだけをフィルタリング
  const filteredAreas = areas.filter((area) =>
    area.area_name.toLowerCase().includes(search)
  );

  return (
    <>
      <Header />
      {/* 検索バー */}
      <div className="mt-4 ml-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="エリア名で検索"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
        />
      </div>

      <div className="flex flex-wrap mt-[1rem] ml-[1rem] gap-4">
        {filteredAreas.map((area) => (
          <div
            key={area.id}
            className="mr-[1rem] text-gray-700 flex items-center bg-white p-4 rounded-lg border border-sky-200 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[calc(25%-1rem)] sm:mr-0 xl:w-[calc(12.5%-1rem)]"
          >
            <div className="w-full">
              <p className="font-semibold text-lg">{area.area_name}</p>
              <div className="w-full max-w-sm mt-2 flex items-center text-base">
                <span className="mr-2 text-gray-500">金額</span>
                <div>¥</div>
                <input
                  type="number"
                  value={area.price}
                  onChange={(e) => handlePriceChange(area.id, e.target.value)}
                  className="ml-[0.5rem] w-full max-w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                />
                {/* 更新ボタン */}
                <button
                  onClick={() => handlePriceChange(area.id, area.price)}
                  className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                  更新
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}