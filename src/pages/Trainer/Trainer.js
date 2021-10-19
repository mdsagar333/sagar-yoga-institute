import React from "react";
import TrainerCard from "./Component/TrainerCard";

// trainer Data
const trainerData = [
  {
    id: 1,
    name: "Selestina McGlade",
    img: "https://demo.yolotheme.com/jhana/wp-content/uploads/2020/10/trainer-08.jpg",
    email: "smcglade0@usa.gov",
  },
  {
    id: 2,
    name: "Burty Digges",
    img: "https://demo.yolotheme.com/jhana/wp-content/uploads/2020/10/trainer-07.jpg",
    email: "bdigges1@zdnet.com",
  },
  {
    id: 3,
    name: "Gretta Omond",
    img: "https://demo.yolotheme.com/jhana/wp-content/uploads/2020/10/trainer-05.jpg",
    email: "gomond2@jigsy.com",
  },
  {
    id: 4,
    name: "Blair Howlett",
    img: "https://demo.yolotheme.com/jhana/wp-content/uploads/2020/10/trainer-04.jpg",
    email: "bhowlett3@homestead.com",
  },
  {
    id: 5,
    name: "Annelise Kroch",
    img: "https://demo.yolotheme.com/jhana/wp-content/uploads/2020/10/trainer-12.jpg",
    email: "akroch4@msu.edu",
  },
];

const Trainer = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h4 className="custom_color my-4">Yoga For Everyone </h4>
        <h1>Balance Your Body and Mind!</h1>
        <h5 className="text-muted mb-5">Meet our experienced trainer</h5>
      </div>
      <div className="container">
        <div className="row g-4">
          {trainerData.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer}></TrainerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
