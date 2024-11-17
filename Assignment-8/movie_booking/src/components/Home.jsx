import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/download (2).jpg";
import img2 from "../assets/download (3).jpg";
import img3 from "../assets/download (4).jpg";
import img4 from "../assets/download (6).jpg";
import img5 from "../assets/download (7).jpg";
import img6 from "../assets/download (8).jpg";
import img7 from "../assets/download (10).jpg";
import img8 from "../assets/download (11).jpg";
import img9 from "../assets/download (12).jpg";
import img10 from "../assets/download (14).jpg";
import img11 from "../assets/download (15).jpg";
import img12 from "../assets/images (3).jpg";
import img13 from "../assets/images (4).jpg";
import img14 from "../assets/images (5).jpg";
import img15 from "../assets/images (6).jpg";
import img16 from "../assets/download (5).jpg";
const movies = [
  {
    id: 1,
    title: "Batman Begins (2005) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img1,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "Set in the dense forests of Tamil Nadu, Amaran follows the journey of a lone warrior, Amaran, who protects an ancient tribe from a corporate empire seeking to exploit their sacred land. Filled with gripping action, powerful emotions, and a connection to forgotten traditions, Amaran's story is a tale of bravery and sacrifice.",
  },
  {
    id: 2,
    title: "Wonder Woman 1984 (2020) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img2,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "In a medieval kingdom torn by war, Veeram tells the story of a fearless warrior who rises from the ashes of betrayal to unite his people against a ruthless invader. With intense battle sequences and a heartwarming romance, Veeram’s courage becomes the stuff of legend.",
  },
  {
    id: 3,
    title: "Inception (2010) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img3,
    Language: "Gujrati, Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "When a mysterious portal opens beneath the city, Pathala unveils the secrets of an underground world ruled by an ancient civilization. A young archaeologist and her team must navigate treacherous tunnels, decode ancient scripts, and uncover the shocking truth that could save humanity.",
  },
  {
    id: 4,
    title: "Black Panther (2018) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img4,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "Raksha is a gripping tale of a single mother who turns into an unlikely protector when a group of mercenaries invades her remote village. With limited resources and boundless courage, she fights against the odds to safeguard her family and neighbors.",
  },
  {
    id: 5,
    title: "Spider-Man (2021) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img5,
    Language: "English",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A prodigious young martial artist is chosen to train under the enigmatic master Drona, who is believed to hold the key to an ancient fighting technique. As Drona prepares him for an impending battle, secrets about the master’s past and the student’s destiny unfold in this thrilling drama.",
  },
  {
    id: 6,
    title: "Kabir Singh (2019) Hindi Full Movie WEB-DL",
    image: img6,
    Language: "English",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "Set in a near-future world, Astra is the story of a brilliant scientist who creates a sentient weapon capable of deciding between good and evil. As governments race to control it, the scientist must go on the run to protect her invention from falling into the wrong hands.",
  },
  {
    id: 7,
    title: "Avengers: Endgame (2019) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img7,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A retired soldier haunted by his past is forced back into action when his daughter is kidnapped by an international crime syndicate. Yodha is a high-octane thriller packed with relentless action and a father’s unyielding love.",
  },
  {
    id: 8,
    title: "Archer (2023) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img8,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "Samrat chronicles the rise of an ordinary man to the throne of a crumbling empire. Through political intrigue, betrayal, and epic battles, he transforms into a ruler who unites the kingdom while battling his inner demons.",
  },
  {
    id: 9,
    title: "Avatar: The Way of Water (2022) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img9,
    Language: "Tamil, Telugue ,Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "In a bustling metro city plagued by crime, Nirbhay tells the story of an honest police officer who goes undercover to dismantle a powerful crime syndicate. As he navigates a web of lies and danger, he must protect his identity while battling his own moral dilemmas.",
  },
  {
    id: 10,
    title: "Tiger 3 (2024) Hindi Full Movie WEB-DL",
    image: img10,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "Kaala follows the journey of a notorious smuggler who seeks redemption after a tragic loss. As he tries to leave his dark past behind, a vengeful enemy resurfaces, forcing him to embrace his old ways to protect the people he loves.",
  },
  {
    id: 11,
    title: "KGF: Chapter 2 (2022) Hindi Full Movie WEB-DL",
    image: img11,
    Language: "English (with subtitle)",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "When a small village is threatened by a corrupt industrialist, a determined young man rises to challenge the injustice. Agnipath is a story of resilience, where a man’s burning desire for justice ignites a revolution among the oppressed.",
  },
  {
    id: 12,
    title: "Wonder Woman (2017) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img12,
    Language: "Chinese(Dual audio Hindi)",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A dedicated journalist discovers a shocking conspiracy involving powerful politicians and international spies. In Sarfarosh, she risks everything, including her life, to uncover the truth and expose the faces behind the chaos.",
  },
  {
    id: 13,
    title: "War (2019) Hindi Full Movie WEB-DL",
    image: img13,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A catastrophic natural disaster leaves an entire city submerged under water. Pralay chronicles the survival journey of a group of strangers who come together to navigate the dangerous terrain, uncovering hidden truths about themselves along the way.",
  },
  {
    id: 14,
    title: "Kick (2014) Hindi Full Movie WEB-DL",
    image: img14,
    Language: "Hindi",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A timid woman working in a corporate office discovers her latent powers after a mystical artifact chooses her as its bearer. Shakti is an action-packed superhero story that blends mythology with modern-day struggles.",
  },
  {
    id: 15,
    title: "Raees (2017) Hindi Full Movie WEB-DL",
    image: img15,
    Language: "English with subtitle",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A renowned classical dancer, Bhairavi, finds herself entangled in a murder investigation when her close friend is found dead. Bhairavi is a suspenseful thriller that uncovers dark secrets hidden behind the glamorous world of art.",
  },
  {
    id: 16,
    title: "Lorem Ipsum (2024) Dual Audio [English + Hindi] Full Movie WEB-DL",
    image: img16,
    Language: "Hindi(Dual Audio)",
    size: "360p ||480p ||720p ||1080p",
    storyline:
      "A successful entrepreneur’s life takes a dramatic turn when he realizes that his wealth was built on the suffering of others. Karma explores his emotional journey as he tries to make amends for his past sins while confronting those who want to keep the truth buried.",
  },
];

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {movies.map((m) => (
          <div key={m.id} className="col-md-3">
            <div className="card border p-4 rounded shadow-lg text-center bg-white">
              <Link
               key={m.id}
                to={`/detail-page`}
                state={{ title: m.title, image: m.image ,language:m.Language,size:m.size,storyline:m.storyline}}
              >
                <img src={m.image} alt={m.title} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{m.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
