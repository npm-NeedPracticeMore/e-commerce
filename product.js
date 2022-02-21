
const state = [
    {
        id: 1,
        img: './assets/blue_shoe.png',
        title: '',
        description: '',
        reviews: '12',  // ko`rishlar soni
        category: 'Accessories',
        free_shipping: true,
        avialable_colors: ['red', 'blue', 'green'],
        avialable_size: ['s', 'xs', 'xxs'],
        added_date: '2022-02-17T03:24:00', //format - utc 'yyyy-mm-ddThh:mm:ss'
        cost: '100.00',       // .00 - cent. u ham hisoblanadi 
        sale: '12%',          // chegirma. chegirmadan keyingi narx, asosiy narx va chegirma orqali hisoblab olinadi
        sale_duration: 30000, // unit - second sale_duration va added_date orqali chegirmaning tugash vaqti hisoblanadi. Bunda Data().now ishlatilinadi
        badge: '3',            // yulduzchalar
        in_stock: true,
        

    }
]
