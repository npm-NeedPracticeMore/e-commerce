
const state = [
    {
        id: 1,
        img: './assets/blueShoe.png',
        title: 'Nike Air Max 270 React',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '12',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '100.00',       // unit - $, cent ham hisoblanadi 
        sale: '12',          //  unit - %. chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 2,
        img: './assets/darkblueShoe.png',
        title: 'Nike Air 250 React',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '12',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '160.00',       // unit - $, cent ham hisoblanadi 
        sale: '19',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '4.5',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 3,
        img: './assets/darkredBag.png',
        title: 'Versace Woman bag',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '113',  // ko`rishlar soni
        category: 'Accessories',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '400.00',       // unit - $, cent ham hisoblanadi 
        sale: '0',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '5',            // yulduzchalar
        in_stock: false,
    },
    {
        id: 4,
        img: './assets/greenGrayShoe.png',
        title: 'Nike Air Max 300 Vue',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '102',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '220.00',       // unit - $, cent ham hisoblanadi 
        sale: '41',          // unit - %. chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '4',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 5,
        img: './assets/blackBag.png',
        title: 'Black Woman bag',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '21',  // ko`rishlar soni
        category: 'Accessories',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '410.00',       // unit - $, cent ham hisoblanadi 
        sale: '23',          // unit - %. chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3',            // yulduzchalar
        in_stock: false,
    },
    {
        id: 6,
        img: './assets/blueShoeBottom.png',
        title: 'Nike Air Max 270 React',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '12',  // ko`rishlar soni
        category: 'Shoe',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '27.00',       // unit - $, cent ham hisoblanadi 
        sale: '0',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 7,
        img: './assets/blueShoeSide.png',
        title: 'Nike Air Max 270 React',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '12',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '30.00',       // unit - $, cent ham hisoblanadi 
        sale: '0',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 8,
        img: './assets/redShoe.png',
        title: 'Nike Air Max 500 React',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '211',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '610.00',       // unit - $, cent ham hisoblanadi 
        sale: '5',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '5',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 9,
        img: './assets/womanBagWhite.png',
        title: 'Woman bag from Italy',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '190',  // ko`rishlar soni
        category: 'Accessories',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '355.00',       // unit - $, cent ham hisoblanadi 
        sale: '0',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '4.5',            // yulduzchalar
        in_stock: false,
    },
    {
        id: 10,
        img: './assets/yellowLineShoe.png',
        title: 'Nike 300 Yellow Line',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '12',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '310.00',       // unit - $, cent ham hisoblanadi 
        sale: '14',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '4',            // yulduzchalar
        in_stock: true,
    },
    {
        id: 11,
        img: './assets/yellowLineShoePair.png',
        title: 'Nike 600 Yellow Line',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '122',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '720.00',       // unit - $, cent ham hisoblanadi 
        sale: '15',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '4',            // yulduzchalar
        in_stock: false,
    },
    {
        id: 12,
        img: './assets/yellowShoeSide.png',
        title: 'Nike Yelloow Meoow',
        description: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
        reviews: '102',  // ko`rishlar soni
        category: 'Shoes',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '297.00',       // unit - $, cent ham hisoblanadi 
        sale: '0',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3.5',            // yulduzchalar
        in_stock: true,
    }
]
