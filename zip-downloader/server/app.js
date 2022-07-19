// const express = require("express");
// const app = express();
// const port = 3000;

// const JSZip = require("jszip");
// const zip = JSZip();
// // const fs = require("fs")
// const FileSaver = require("file-saver");

// app.get("/test", (req, res) => {
//   // res.send("Hello World!");
//   zip.file("Hello.txt", "Hello World\n");

//   // var img = zip.folder("images");
//   // img.file("kue_putu.jpg", "./kue.jpg", { base64: true });

//   zip.generateAsync({ type: "nodebuffer" }).then(function (content) {
//     // see FileSaver.js
//     console.log(content);
//     FileSaver.saveAs(content, "test.zip");
//   });
// });

// app.listen(port, () => {
//   console.log("Example app listening on port", port);
// });

const JSZip = require("jszip");
const zip = JSZip();
const fs = require("fs");
const axios = require("axios");

(async () => {
  // zip.file("Hello.txt", "Hello World\n");

  // let img = zip.folder("images");
  // img.file("kue_putu.jpg", "./kue.jpg");

  // let photos = zip.folder("photos");
  // photos.file("photo.jpg", "./kue.jpg");

  // let videos = zip.folder("videos");
  // videos.file("video.jpg", "./kue.jpg");

  const dataPhoto = [
    {
      name: "photo1",
      img: "https://i.picsum.photos/id/51/200/300.jpg?hmac=w7933XDRbSqrql6BuyEfFBOeVsO60iU5N_OS5FbO6wQ",
    },
    {
      name: "photo2",
      img: "https://picsum.photos/300/400",
    },
    {
      name: "photo3",
      img: "https://picsum.photos/400/500",
    },
  ];

  const dataVideo = [
    {
      name: "video1",
      video: "https://picsum.photos/1280/720",
    },
    {
      name: "video2",
      video: "https://picsum.photos/1920/1080",
    },
  ];

  let rootFolder = zip.folder("Inti Sinergi");
  dataPhoto.map(async (el) => {
    const imageBlob = await axios({
      url: el.img, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      // console.log(response);
      return response;
    });

    console.log(imageBlob);

    // const imgData = new File([imageBlob], `${el.name}.jpg`);
    const imgData = fs.readFileSync(imageBlob, "utf8");

    rootFolder.file(`photos/${el.name}.jpg`, imgData, { binary: true });
  });
  dataVideo.map((el) => {
    rootFolder.file(`videos/${el.name}.jpg`, el.video);
  });
  // rootFolder.file("photos/photo1.jpg", "./kue.jpg");
  // rootFolder.file("photos/photo2.jpg", "./kue.jpg");
  // rootFolder.file("photos/photo3.jpg", "./kue.jpg");
  // rootFolder.file("videos/video1.jpg", "./kue.jpg");
  // rootFolder.file("videos/video2.jpg", "./kue.jpg");

  const content = await zip.generateAsync({ type: "nodebuffer" });

  fs.writeFileSync("example.zip", content);
  // FileSaver.saveAs(content, "test.zip");
})();
