import imagemin from "imagemin";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

const directory = "./src/assets/img/icons/*.{webp,png}";

( async () => {
  const files = await imagemin([directory],{
    destination: "./src/assets/img/icons",
    plugins: [pngquant({quality: [0.8,0.8]}), webp({quality:80})]
  })
  console.log(files)
})