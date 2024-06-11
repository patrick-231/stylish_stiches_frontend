import p1_img from "./product_1.jpg";
import p2_img from "./product_2.jpg";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.jpg";
import p6_img from "./product_6.jpg";
import p7_img from "./product_7.jpg";
import p8_img from "./product_8.jpg";
import p9_img from "./product_9.jpg";
import p10_img from "./product_10.jpg";
import p11_img from "./product_11.jpg";
import p12_img from "./product_12.jpg";
import p13_img from "./product_13.jpg";
import p14_img from "./product_14.jpg";
import p15_img from "./product_15.jpg";
import p16_img from "./product_16.jpg";
import p17_img from "./product_17.jpg";
import p18_img from "./product_18.jpg";
import p19_img from "./product_19.jpg";
import p20_img from "./product_20.jpg";
import p21_img from "./product_21.jpg";
import p22_img from "./product_22.jpg";
import p23_img from "./product_23.jpg";
import p24_img from "./product_24.jpg";
import p25_img from "./product_25.jpg";
import p26_img from "./product_26.jpg";
import p27_img from "./product_27.jpg";
import p28_img from "./product_28.jpg";
import p29_img from "./product_29.jpg";
import p30_img from "./product_30.jpg";
import p31_img from "./product_31.jpg";
import p32_img from "./product_32.jpg";
import p33_img from "./product_33.jpg";
import p34_img from "./men.jpg";
/* import p35_img from "./product_35.jpg";
import p36_img from "./product_36.jpg"; */

let all_products = [
  {
    id: 1,
    name: "The 5-Pocket-Jeans ALVA",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510801/app/fqmfihs6nguehtgxomj9.jpg",
    old_price: 8,
    description:
      "The 5-Pocket-Jeans ALVA High Rise Wide are a stylish and comfortable pair of jeans that are perfect for any casual occasion. ",
  },
  {
    id: 2,
    name: "Classic White T-Shirt Flower",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510801/app/ean2y1lbgpjgmfgidfwj.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 3,
    name: "Classic White T-Shirt Flower",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510801/app/hjcuizicdfrn2yhverzc.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 4,
    name: "Classic White T-Shirt Flower",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/wivuktytdxb0bkiclihj.jpg",
    old_price: 15,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 5,
    name: "Jeansjacke mit Finish im Washed-Look",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/a82zw7k2pcllhal7uqeh.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/vvg3w3uyos1h5a8o3vrv.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/ithhxvg8ulhwgmp8n2hu.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510802/app/nfis2xzxq5ukbyrsnyz9.jpg",

    old_price: 120,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510803/app/pqydwzljujzq0zujeari.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510803/app/mfm7knnnxytydrnzsicv.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510803/app/vouuvp9pnprgeqx9pvsg.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510803/app/p1tblbjrzybidxx8lrqa.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/uacgobvtejgniqgwuc4f.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/igl5olvxxygr1hcontey.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/yobe0m2ofkeepow0y380.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "women",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/qrss5njmkbw1pvqlbgha.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/nerpmlzeecdzbopehxrj.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/f6rijak1lsjl6albjvgz.jpg",
    old_price: 1,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/bzgcca00iwrj7tr4csgj.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510804/app/ckiohmhdry4q6fkv0svr.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 21,
    name: "KIDSWORLD T-Shirt ",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510805/app/omia9p1cqbpuqaru1rmr.jpg",
    old_price: 9,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 22,
    name: "KIDSWORLD T-Shirt",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510805/app/edgxwwx7rtceedh2eo9q.jpg",
    old_price: 9,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 23,
    name: "KIDSWORLD T-Shirt ICH BIN OFF",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510805/app/jvkvudefj6r5ar39orav.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 24,
    name: "KIDSWORLD T-Shirt RAKETE ",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510805/app/ta1n9poupoi3zmbeybyo.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 25,
    name: "KIDSWORLD T-Shirt",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510806/app/ad9pubdrlhvoliyenh1h.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 26,
    name: "KIDSWORLD Carmenshirt Viskose-Shirt",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510806/app/weziip36nsq8m569u3ok.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 27,
    name: "KIDSWORLD Jerseykleid",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510806/app/cyxpsdqliv26j0xzkqf4.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 28,
    name: "KIDSWORLD T-Shirt",
    category: "kids",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510806/app/atukoklf8l5afhvdfaya.jpg",
    old_price: 12,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 29,
    name: "Tommy Jeans Shirt",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510807/app/b6gmsx1rjf0yxqqoc7zl.jpg",
    old_price: 10,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 30,
    name: "Calvin Klein  with Logo",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510807/app/syry0nypcuspiztlzh50.jpg",
    old_price: 20,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 31,
    name: "Tommy Hilfiger",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510807/app/htblqvaz2neyidzrnh66.jpg",
    old_price: 20,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 32,
    name: "Tommy Hilfiger",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510807/app/em7yhjnow9tnqy1pq16y.jpg",
    old_price: 20,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 33,
    name: "Indicode",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717510808/app/swijxnh1oxdxi0hjmuzs.jpg",
    old_price: 20,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "men",
    image:
      "https://res.cloudinary.com/dpx184ojl/image/upload/v1717593506/men_fesytc.jpg",
    old_price: 120,
    description:
      "A timeless and versatile choice, the white version of this t-shirt pairs perfectly with blue denim, khaki pants, or even a breezy summer skirt. ",
  },
  /*  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: p35_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: p36_img,
    new_price: 85,
    old_price: 120,
  }, */
];

export default all_products;
