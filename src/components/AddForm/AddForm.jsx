import React, { useState } from "react";
import "./Addform.scss";

export default function AddListingForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    location: "",
    phone: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend
    console.log(formData);
  };

  return (
    <div className="container main_section">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Разместить объявление</h2>

        <label className="form__label">
          Заголовок
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form__label">
          Описание
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form__label">
          Категория
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Выберите категорию</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Недвижимость">Недвижимость</option>
            <option value="Электроника">Электроника</option>
            <option value="Бытовая техника">Бытовая техника</option>
          </select>
        </label>

        <label className="form__label">
          Состояние
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Выберите состояние</option>
            <option value="Новое">Новое</option>
            <option value="Б/у">Б/у</option>
          </select>
        </label>

        <label className="form__label">
          Город
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form__label">
          Телефон
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form__label">
          Фото
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <div className="form__button-wrapper">
          <button className="form__submit" type="submit">
            Подать объявление
          </button>
        </div>
      </form>
    </div>
  );
}
