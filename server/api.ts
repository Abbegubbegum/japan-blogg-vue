import express from "express";
import mongo from "./mongo";
import fs from "fs";
import path from "path";
import { resolve } from "path";

const app = express();
const password = process.env.PASSWORD || "test123";

app.use(express.json());

app.get("/blogs", async (req, res) => {
  const db = mongo.db();
  const blogs = db.collection("blogs");

  if (req.query.preview === "true") {
    //Get preview
    let blogsResult = await blogs.find({}).toArray();
    const previewResults = blogsResult.map((blog) => {
      delete blog["content"];
      return blog;
    });
    res.status(200).send(previewResults);
  } else if (
    typeof req.query.timestamp !== "string" ||
    isNaN(parseInt(req.query.timestamp))
  ) {
    const blogResult = await blogs.find({}).toArray(); // get all blogs from database here
    res.status(200).send(blogResult);
  } else {
    const blog = await blogs.findOne({
      timestamp: parseInt(req.query.timestamp),
    }); // add getting blog based on timestamp from database
    res.status(200).send(blog);
  }
});

app.post("/form", async (req, res) => {
  if ((req.body.password as string) !== password) {
    res.status(401).send("incorrect password");
    return;
  }

  const db = mongo.db();
  const blogs = db.collection("blogs");
  // put recieved data into variables
  const title = req.body.title;
  const author = req.body.author;
  const date = req.body.date;
  const location = req.body.location;
  const content = req.body.content;
  const timestamp = Date.now();

  // get and format the publishing date
  // const yyyy = timestamp.getFullYear();
  // let mm = timestamp.getMonth() + 1; // Months start at 0!
  // let dd = timestamp.getDate();

  // if (dd < 10) dd = '0' + dd;
  // if (mm < 10) mm = '0' + mm;

  // const datePublished = yyyy + '/' + mm + '/' + dd;
  const blog = {
    title: title,
    author: author,
    date: date,
    location: location,
    content: content,
    timestamp: timestamp,
  };
  await blogs.insertOne(blog);
  res.status(200).send("blog added!");
});

app.get("/img", async (req, res) => {
  const db = mongo.db();
  const blogsDB = db.collection("blogs");
  const blogs = await blogsDB.find({}).toArray();
  let imgArray: any[] = [];
  blogs.forEach((blog) => {
    blog.content.forEach((element: any) => {
      if (
        element.type === "img" &&
        !imgArray.find((img) => img.path === element.path)
      ) {
        imgArray.push(element);
      }
    });
  });

  const miscImgs = getImages();
  miscImgs.forEach((element) => {
    // this will not find duplicates from miscImgs
    if (!imgArray.find((img) => img.path === element)) {
      imgArray.push(element);
    }
  });

  res.status(200).send(imgArray);
});

export function getImages() {
  console.log(resolve("./assets/imgs"));

  const paths = fs.readdirSync(path.join(resolve("./assets/imgs")));

  return paths;
}

export default app;
