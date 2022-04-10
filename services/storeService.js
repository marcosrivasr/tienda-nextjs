export function getItems() {
  return [
    {
      id: 0,
      title: "Playera",
      price: 100,
      image: "/../public/img/octocat.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 1,
      title: "Gorra",
      price: 200,
      image: "/../public/img/mug.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 2,
      title: "Sudadera Halo",
      price: 200,
      image: "/../public/img/tshirt01.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 3,
      title: "Introvert T-shirt",
      price: 200,
      image: "/../public/img/tshirt02.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 4,
      title: "Invertocat 2.0 Coasters",
      price: 30,
      image: "/../public/img/coaster01.webp",
      description:
        "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
    },
    {
      id: 5,
      title: "Glow in the Dark Sticker Pack",
      price: 5,
      image: "/../public/img/stickers02.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 6,
      title: "Adventure Sticker Pack",
      price: 10,
      image: "/../public/img/stickers01.webp",
      description:
        "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
    },
    {
      id: 7,
      title: "Invertocat Pullover Hoodie",
      price: 10,
      image: "/../public/img/pullover01.webp",
      description:
        "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
    },
  ];
}

export function getLatestItems() {
  const items = getItems();

  return items.slice(0, 3);
}
