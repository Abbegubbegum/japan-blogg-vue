import express from "express";
import mongoose, { mongo } from "mongoose";

const app = express();

app.use(express.json());

app.get("/blogs", (req, res) => {
  if (req.query.timestamp && typeof req.query.timestamp === "string") {
    if (parseInt(req.query.timestamp) === 1673844794367) {
      return res.status(200).json({
        _id: { $oid: "63c4d83ab86d536a11097e0b" },
        title: "It starts now",
        author: "Amir Ismail",
        date: "2023-01-14",
        location: "Stockholm & Helsingfors",
        content: [
          {
            type: "txt",
            title: "Arlanda",
            text: 'We arrived at Arlanda just in time for us to check in our luggage. Once everyone had gathered and said goodbye to their relatives, we proceeded to the luggage check-in line. But we obviously had to take a group picture first (see below). While waiting in line I realised that I still had my shaving machine packed in my suitcase. Since it contains batteries, I needed to hold the line to open up my bags and put the shaving machine in my hand baggage. Once the luggage was checked in, we proceeded to the security check where everything went smoothly. We then decided to "set up camp" right outside the gate because we still had a few hours to spend. Since it was still around lunchtime, we decided to grab a bite at one of the resturants in the airport where me, Robin and Rahim stumbled upon the saddest meal we have ever seen (see below). This so called burger caught my eye and I was just speechless when I saw it. Noone would see that burger and think "Mmm, I want that". Either way, me and Robin ordered one overpriced pizza each and Rahim bought a burger (an actual burger). Moving on from that we just sat outside the gate patiently to then proceed to get on the plane and fly towards Finland!\n',
          },
          {
            type: "img",
            path: "classtrip.jpg",
            text: "The whole squad arriving at Arlanda",
          },
          { type: "img", path: "badburger.jpg", text: "Disastrous" },
          {
            type: "txt",
            title: "Helsinki",
            text: "Time flies by, and we arrive in Finland, airport Helsinki. Things pass by quickly, except for the fact that the self scanning passport machine didnt allow Hugo to get past, so we had to wait for a little bit until he got past too. But other than that, Helsinki went by pretty smoothly and before we knew it, the flight towards Tokyo had started. A 13 hour trip awaited and some of us were more excited than others. The only problem with that flight was that they were doing all of their services in relation to Finalands local time rather than oour final destinations local time (7 hours difference). Which means they turned off the light for people to sleep when it was night time in Finland, which was quite weird because the lights got turned off during the second half of the trip, but for us to adapt to Japan Standard Time (GMT + 9), we should be sleeping during the first half of the trip. And the same thing with the meals where we got breakfast and dinner at the times that we would usually get those meals in Finland, but not in Japan so that screwed me over a little bit. But most of us managed to handle it either way and got a few hours of sleep in during the first half of the trip, which was great. ",
          },
        ],
        timestamp: 1673844794367,
      });
    } else {
      return res.sendStatus(404);
    }
  }

  res.status(200).json([
    {
      _id: { $oid: "63c4d83ab86d536a11097e0b" },
      title: "It starts now",
      author: "Amir Ismail",
      date: "2023-01-14",
      location: "Stockholm & Helsingfors",
      content: [
        {
          type: "txt",
          title: "Arlanda",
          text: 'We arrived at Arlanda just in time for us to check in our luggage. Once everyone had gathered and said goodbye to their relatives, we proceeded to the luggage check-in line. But we obviously had to take a group picture first (see below). While waiting in line I realised that I still had my shaving machine packed in my suitcase. Since it contains batteries, I needed to hold the line to open up my bags and put the shaving machine in my hand baggage. Once the luggage was checked in, we proceeded to the security check where everything went smoothly. We then decided to "set up camp" right outside the gate because we still had a few hours to spend. Since it was still around lunchtime, we decided to grab a bite at one of the resturants in the airport where me, Robin and Rahim stumbled upon the saddest meal we have ever seen (see below). This so called burger caught my eye and I was just speechless when I saw it. Noone would see that burger and think "Mmm, I want that". Either way, me and Robin ordered one overpriced pizza each and Rahim bought a burger (an actual burger). Moving on from that we just sat outside the gate patiently to then proceed to get on the plane and fly towards Finland!\n',
        },
        {
          type: "img",
          path: "classtrip.jpg",
          text: "The whole squad arriving at Arlanda",
        },
        { type: "img", path: "badburger.jpg", text: "Disastrous" },
        {
          type: "txt",
          title: "Helsinki",
          text: "Time flies by, and we arrive in Finland, airport Helsinki. Things pass by quickly, except for the fact that the self scanning passport machine didnt allow Hugo to get past, so we had to wait for a little bit until he got past too. But other than that, Helsinki went by pretty smoothly and before we knew it, the flight towards Tokyo had started. A 13 hour trip awaited and some of us were more excited than others. The only problem with that flight was that they were doing all of their services in relation to Finalands local time rather than oour final destinations local time (7 hours difference). Which means they turned off the light for people to sleep when it was night time in Finland, which was quite weird because the lights got turned off during the second half of the trip, but for us to adapt to Japan Standard Time (GMT + 9), we should be sleeping during the first half of the trip. And the same thing with the meals where we got breakfast and dinner at the times that we would usually get those meals in Finland, but not in Japan so that screwed me over a little bit. But most of us managed to handle it either way and got a few hours of sleep in during the first half of the trip, which was great. ",
        },
      ],
      timestamp: 1673844794367,
    },
  ]);
});

export default app;
