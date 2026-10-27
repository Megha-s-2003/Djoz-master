
import React from "react";
import TourItem from "./TourItem";

const tours = [
  {
    id: 1,
    title: "UNTOLD FESTIVAL 2020",
    time: "8:00pm",
    date: "Dec 15, 2019",
    location: "Funkhaus Berlin, Berlin, Germany",
    price: "$ 35.00",
    description1:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    description2:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    image: "/img/tours/tour-1.jpg",
  },
  {
    id: 2,
    title: "UNTOLD FESTIVAL 2020",
    time: "8:00pm",
    date: "Dec 15, 2019",
    location: "Funkhaus Berlin, Berlin, Germany",
    price: "$ 35.00",
    description1:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    description2:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    image: "/img/tours/tour-2.jpg",
  },
  {
    id: 3,
    title: "UNTOLD FESTIVAL 2020",
    time: "8:00pm",
    date: "Dec 15, 2019",
    location: "Funkhaus Berlin, Berlin, Germany",
    price: "$ 35.00",
    description1:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    description2:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    image: "/img/tours/tour-3.jpg",
  },
];

export default function ToursList() {
  return (
    <section className="tours spad" id="tours-list">
      <div className="container">
        <div className="row">
          {tours.map((tour, index) => (
            <TourItem key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
