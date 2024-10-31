"use client";
import React, { useState } from "react";

export default function AddAddressPage() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    address: "",
    formatted_address: "",
    country: "",
    province: "",
    locality: "",
    street: "",
    house: "",
    clean_address: "",
    latitude: "",
    longitude: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Не работает, так как требует API");
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100">
      {/* Логотип и заголовок */}
      <h1 className="fixed top-0 left-0 z-50 text-left py-3 pl-6 pr-12 rounded-br-3xl shadow-md text-black font-bold border-[rgba(235,41,121,1)] border-t-0 border-l-0 border-2 bg-white">
        Чуть больше, чем воздушные шары
        <div className="font-light text-sm flex flex-row justify-between">Карта доставок <a href="/" className="text-blue-700">на карту</a></div>
      </h1>

      <div className="fixed h-[10vh] w-[10vh] bg-cover rounded-full m-3 z-50 top-0 right-0 bg-[url('/logo.jpg')]" />
      {/* Форма добавления адреса */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-4/5 max-w-md my-24 border-[#6a2c8f] border-2"
      >
        <h2 className="text-2xl font-bold text-center">
          Добавить новый адрес
        </h2>

        {/* Предупреждение о необходимости API */}
        <p className="text-red-500 text-center mb-6">
          Функционал не работает, так как требует API
        </p>

        {/* Обязательные поля: Широта и Долгота */}
        <div className="flex flex-col mb-4">
          <label htmlFor="latitude" className="text-sm font-bold">
            Широта<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="longitude" className="text-sm font-bold">
            Долгота<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Остальные необязательные поля */}
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="text-sm font-bold">Название</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="address" className="text-sm font-bold">Адрес</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="formatted_address" className="text-sm font-bold">Форматированный адрес</label>
          <input
            type="text"
            name="formatted_address"
            value={formData.formatted_address}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="country" className="text-sm font-bold">Страна</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="province" className="text-sm font-bold">Регион</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="locality" className="text-sm font-bold">Город</label>
          <input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="street" className="text-sm font-bold">Улица</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="house" className="text-sm font-bold">Дом</label>
          <input
            type="text"
            name="house"
            value={formData.house}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="clean_address" className="text-sm font-bold">Очищенный адрес</label>
          <input
            type="text"
            name="clean_address"
            value={formData.clean_address}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Добавить адрес
        </button>
      </form>
    </div>
  );
}
