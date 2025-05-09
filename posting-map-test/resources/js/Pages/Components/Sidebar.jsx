import React, { useState, useEffect } from 'react';
import Map from './Map';
import { usePage, router } from '@inertiajs/react';

const Sidebar = () => {
  const user = usePage().props.auth.user;
  const { auth } = usePage().props;
  const [selectedAreas, setSelectedAreas] = useState(new Set());
  const [areaPrices, setAreaPrices] = useState({}); // 市区町村ごとの金額
  const [totalPrice, setTotalPrice] = useState(0); // 合計金額
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  useEffect(() => {
    let newTotalPrice = 0;
    selectedAreas.forEach((areaName) => {
      newTotalPrice += areaPrices[areaName] || 0;
    });
    setTotalPrice(newTotalPrice);
  }, [selectedAreas, areaPrices]);
  
  // 合計金額の再計算
  useEffect(() => {
    let newTotalPrice = 0;
    selectedAreas.forEach((areaName) => {
      newTotalPrice += areaPrices[areaName] || 0;
    });
    setTotalPrice(newTotalPrice);
  }, [selectedAreas, areaPrices]);

  // 市区町村に対応する金額を取得
  const fetchAreaPrice = (AreasName) => {
    fetch(`${baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({
        Areas: AreasName,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('サーバーエラー: ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const price = parseFloat(data.price) || 0;  // 金額を数値として扱う
      setAreaPrices((prevPrices) => ({
        ...prevPrices,
        [AreasName]: price,
      }));
    })
    .catch((error) => {
      console.error('Error:', error);
      if (auth?.user) {
        alert('金額取得に失敗したのでリロードします。お手数ですが再選択をお願いします。');
        window.location.reload();
      } else {
        alert('ログインしてください');
        router.get(route('login'));  // Inertia.js を使ってログインページにリダイレクト
      }
    });
  };

  // 削除ボタンが押された時の処理
  const handleRemoveArea = (areaName) => {
    setSelectedAreas((prevSelectedAreas) => {
      const newSelectedAreas = new Set(prevSelectedAreas);
      newSelectedAreas.delete(areaName); // 選択解除
      return newSelectedAreas;
    });
  };

  // selectedAreasをバックエンドに送信する関数
  const sendSelectedAreasToBackend = () => {
    const areasWithPrices = Array.from(selectedAreas).map(areaName => ({
      price: areaPrices[areaName] || 0,
    }));

    fetch('${baseUrl}/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({
        total_price: parseFloat(totalPrice),  
        areas: areasWithPrices,  
      }),
    });
  };

  return (
    <div className="h-[500px] flex overflow-hidden bg-gray-100">
      {/* サイドバー */}
      <div className="w-[25%] bg-gray-700 text-white p-1 sm:p-4 sm:w-[200px]">
        <div className="flex items-center justify-center h-5">
          <h1 className="text-[0.8rem] sm:text-[1.5rem] font-bold">
            選択エリア
          </h1>
        </div>

        {selectedAreas.size > 0 && (
          <div>
            <ul className="mt-[10px] overflow-y-auto max-h-[350px]"> {/* スクロール可能なリスト */}
              {Array.from(selectedAreas).map((areaName) => (
                <li key={areaName} className="bg-teal-600 px-1 py-0 rounded-lg">
                  <div className="font-semibold text-lg text-[0.6rem] sm:text-[1rem]">
                    {areaName}
                  </div>
                  <div className="mb-1 flex items-center justify-between text-[0.7rem] sm:text-[1rem] sm:mb-2">
                    <span>¥{areaPrices[areaName]?.toLocaleString()}</span>
                    <button 
                      onClick={() => handleRemoveArea(areaName)} 
                      className="bg-red-500 text-white px-[1px] rounded-lg hover:bg-red-600 transition duration-200">
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-[0.8rem] sm:text-[1rem] font-bold mt-2">合計: ¥{totalPrice.toLocaleString()}</p>

            {/* 送信ボタン */}
            <form method="POST" action="${baseUrl}/order" className="mt-4">
              <input type="hidden" name="_token" value={csrfToken} />
              <input type="hidden" name="total_price" value={totalPrice} />
              <input type="hidden" name="areas" value={JSON.stringify(Array.from(selectedAreas))} />
              <button 
                type="submit" 
                className="bg-teal-600 text-white px-2 py-2 rounded-lg hover:bg-teal-700 transition duration-200 w-full mt-2 sm:px-6">
                送信
              </button>
            </form>
          </div>
        )}
      </div>
      <Map
        selectedAreas={selectedAreas}
        setSelectedAreas={setSelectedAreas}
        fetchAreaPrice={fetchAreaPrice}
        areaPrices={areaPrices}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default Sidebar;
