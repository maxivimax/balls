"use client";
import React, { useState } from "react";
import YMapsWrapper from "./YMapsWrapper";

async function fetchPoints() {
  const res = await fetch(`https://balls.princessshine.ru/addresses_data.json`);
  if (!res.ok) throw new Error("Failed to load data");
  return res.json();
}

export default function HomePage() {
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState("low");
  const [hasSelected, setHasSelected] = useState(false);

  const handlePerformanceChange = async (e) => {
    setLoading(true);
    setHasSelected(true); // Устанавливаем флаг после первого выбора
    const count = e.target.value;
    setCount(count);
    const data = await fetchPoints();
    setPoints(data);
    setLoading(false);
  };

  return (
    <div className="h-full w-full flex flex-row justify-center items-end">
      <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <h1 className="fixed top-0 left-0 z-50 text-left py-3 pl-6 pr-12 rounded-br-3xl shadow-md text-black font-bold border-[rgba(235,41,121,1)] border-t-0 border-l-0 border-2 bg-white">
        Чуть больше, чем воздушные шары
        <div className="font-light text-sm flex flex-row justify-between">Карта доставок <a href="/load" className="text-blue-700">новая точка</a></div>
      </h1>

      {/* Выбор степени производительности */}
      <div
        className={`fixed transform z-50 bg-white text-black p-3 rounded-lg shadow-md flex flex-row gap-4 ${hasSelected
          ? "bottom-0 left-0 m-2 mb-10" // Перемещаем в левый нижний угол
          : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // Центр экрана до выбора
          }`}
      >
        <label htmlFor="performance" className="mr-2 font-bold">
          Выберите количество точек:
          <div className="font-light text-xs">В зависимости от производительности</div>
        </label>
        <select
          id="performance"
          onChange={handlePerformanceChange}
          defaultValue=""
          className="border border-gray-300 text-black p-2 rounded"
        >
          <option value="" disabled>
            Выберите...
          </option>
          <option value="low">Мало</option>
          <option value="medium">Средне</option>
          <option value="high">Много</option>
        </select>
      </div>

      {/* Карта с точками */}
      {loading ? (
        <p className="fixed z-50 bottom-10 text-white font-bold">
          Загрузка карты...
        </p>
      ) : (
        points && <YMapsWrapper count={count} points={points} />
      )}

      <div className="fixed h-[10vh] w-[10vh] bg-cover shadow-md rounded-full m-3 z-50 top-0 right-0 bg-[url('/logo.jpg')]" />
    </div>
  );
}
