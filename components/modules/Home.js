import React from "react";
import Link from "next/link";
export default function Home({ title, id, price, meterage, roomCount, img }) {
  return (
    <div class="card">
      <img src="img/gal-1.jpeg" alt="House 6" class="card__img" />
      <h5 class="card__title">{title}</h5>
      <span class="card__like">
        <i class="fa fa-heart"></i>
      </span>
      <div class="card__details">
        <span class="">
          <i class="fa fa-map-marker card__icon"></i>
        </span>
        <p class="card__text">مالدیو</p>
        <span class="">
          <i class="fa fa-user card__icon"></i>
        </span>
        <p class="card__text">{roomCount} اتاق</p>
        <span class="">
          <i class="fa fa-expand card__icon"></i>
        </span>
        <p class="card__text">{meterage} متر مربع</p>
        <span class="">
          <i class="fa fa-key card__icon"></i>
        </span>
        <p class="card__text">{price.toLocaleString()} میلیون تومان</p>
      </div>

      <Link href={`/homes/${id}`} class="btn btn-brown btn-card">
        مشاهده ملک
      </Link>
    </div>
  );
}
