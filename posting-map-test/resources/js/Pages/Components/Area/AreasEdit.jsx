import React from 'react';
import Header from '../Header';

export default function AreasEdit(props) {
  return (
    <>
        <Header />
        {props.areas.map((area) => (
            <li key={area.id} className="text-gray-700">
                <div>
                    <p>注文番号: {area.area_name}</p>
                    <p>注文金額: ¥{area.price}</p>
                </div>
            </li>
        ))}
    </>
  )
}
