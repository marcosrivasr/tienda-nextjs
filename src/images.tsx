import logo from "../public/img/logo.png";
import gallery_01 from "../public/img/gallery-img-01.jpg";
import gallery_02 from "../public/img/gallery-img-02.jpg";
import gallery_03 from "../public/img/gallery-img-03.jpg";
import gallery_04 from "../public/img/gallery-img-04.jpg";
import gallery_05 from "../public/img/gallery-img-05.jpg";
import gallery_06 from "../public/img/gallery-img-06.jpg";

import slider1 from "../public/img/slider-01.jpg";
import slider2 from "../public/img/slider-02.jpg";
import slider3 from "../public/img//slider-03.jpg";

import SliderLeft from "../public/icon/chevron-left.svg";
import SliderRight from "../public/icon/chevron-right.svg";

import SpecialMenu_01 from "../public/img/img-01.jpg";
import SpecialMenu_02 from "../public/img/img-02.jpg";
import SpecialMenu_03 from "../public/img/img-03.jpg";
import SpecialMenu_04 from "../public/img/img-04.jpg";
import SpecialMenu_05 from "../public/img/img-05.jpg";
import SpecialMenu_06 from "../public/img/img-06.jpg";
import SpecialMenu_07 from "../public/img/img-07.jpg";
import SpecialMenu_08 from "../public/img/img-08.jpg";
import SpecialMenu_09 from "../public/img/img-09.jpg";

export default {
  logo: [
    {
      id: 1,
      img: logo,
      alt: "Logo Restaurant Demo",
    },
  ],
  gallery: [
    {
      id: 1,
      img: gallery_01,
      alt: "Imagen de galeria",
    },
    {
      id: 2,
      img: gallery_02,
      alt: "Imagen de galeria",
    },
    {
      id: 3,
      img: gallery_03,
      alt: "Imagen de galeria",
    },
    {
      id: 4,
      img: gallery_04,
      alt: "Imagen de galeria",
    },
    {
      id: 5,
      img: gallery_05,
      alt: "Imagen de galeria",
    },
    {
      id: 6,
      img: gallery_06,
      alt: "Imagen de galeria",
    },
  ],
  bg_images: [
    {
      id: 1,
      img: slider1,
      name: "bg-banner-1",
      url: "url('https://i.postimg.cc/R00TTtKK/resumen-desenfoque-bokeh-defocused-centro-comercial-interior-grandes-almacenes.jpg')",
      title: "Live Dinner Restaurant",
    },
    {
      id: 2,
      img: slider2,
      name: "bg-banner-2",
      url: "url('https://i.postimg.cc/R00TTtKK/resumen-desenfoque-bokeh-defocused-centro-comercial-interior-grandes-almacenes.jpg')",
      title: "Live Dinner Restaurant",
    },
    {
      id: 3,
      img: slider3,
      name: "bg-banner-3",
      url: "url('https://i.postimg.cc/R00TTtKK/resumen-desenfoque-bokeh-defocused-centro-comercial-interior-grandes-almacenes.jpg')",
      title: "Yamifood Restaurant",
    },
  ],
  grid_image: [
    {
      id: 1,
      img: SpecialMenu_01,
      title: "Special Drinks 1",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "drinks",
      all: "all",
      price: 7.79,
    },
    {
      id: 2,
      img: SpecialMenu_02,
      title: "Special Drinks 2",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "drinks",
      all: "all",
      price: 9.79,
    },
    {
      id: 3,
      img: SpecialMenu_03,
      title: "Special Drinks 3",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "drinks",
      all: "all",
      price: 10.79,
    },
    {
      id: 4,
      img: SpecialMenu_04,
      title: "Special Lunch 1",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "lunch",
      all: "all",
      price: 15.79,
    },
    {
      id: 5,
      img: SpecialMenu_05,
      title: "Special Lunch 2",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "lunch",
      all: "all",
      price: 18.79,
    },
    {
      id: 6,
      img: SpecialMenu_06,
      title: "Special Lunch 3",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "lunch",
      all: "all",
      price: 20.79,
    },
    {
      id: 7,
      img: SpecialMenu_07,
      title: "Special Dinner 1",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "dinner",
      all: "all",
      price: 25.79,
    },
    {
      id: 8,
      img: SpecialMenu_08,
      title: "Special Dinner 2",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "dinner",
      all: "all",
      price: 22.79,
    },
    {
      id: 9,
      img: SpecialMenu_09,
      title: "Special Dinner 3",
      description: "Sed id magna vitae eros sagittis euismod.",
      category: "dinner",
      all: "all",
      price: 24.79,
    },
  ],
  icon: [
    {
      id: 1,
      img: SliderLeft,
      alt: "Slider left",
    },
    {
      id: 2,
      img: SliderRight,
      alt: "Slider right",
    },
  ],
};
