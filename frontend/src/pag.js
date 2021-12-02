import "./pag.css";

export const items = [

    // <div class="Image">
    //  <img src="https://www.jiomart.com/images/category/219/fruits-vegetables-20200619.jpg" alt="Retry" width="90%"
    //     height="auto" />
    // </div>

    {
        id: 1,
        image: "data:image/jpeg;base64,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",
        name: "Apple 1 kg",
        details: "₹60",
    },

    {
        id: 2,
        image: "https://www.jiomart.com/images/product/150x150/590000138/sweet-potato-500-g-0-20201118.jpg",
        name: "Sweet Patato 500g",
        details: "₹ 19.50",
    },

    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgDB-TRBqerCq5lGItSHzVUpCCgabimWC2w&usqp=CAU",
        name: "Lauki (Bottle Gourd) 1 kg",
        details: "₹ 35",
    },
    {
        id: 4,
        image: "data:image/jpeg;base64,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",
        name: "Cucumber 500g",
        details: "₹20",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIq6A1qpoYiA514SjJtMPNZT_uV7_l_bS-A&usqp=CAU",
        name: "Chilli 100g",
        details: "₹15",
    },
    {
        id: 6,
        image: "data:image/jpeg;base64,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",
        name: "Banana 1 Kg",
        details: "₹ 30",
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsz-6Y-ofojKANlmSLNtyg-Nl0mJqihgaYQ&usqp=CAU",
        name: "Brinjal 500g",
        details: "₹ 35",
    },
    {
        id: 8,
        image: "https://www.jiomart.com/images/product/150x150/590000138/sweet-potato-500-g-0-20201118.jpg",
        name: "Sweet Patato 500g",
        details: "₹60",
    },
    {
        id: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53sQTVrbMiG_jtypNY5d2fdu_V4EQatx2hg&usqp=CAU",
        name: "Carrot 500g",
        details: "₹ 35",
    },
    {
        id: 10,
        image: "https://www.jiomart.com/images/product/150x150/590000138/sweet-potato-500-g-0-20201118.jpg",
        name: "Sweet Patato 500g",
        details: "₹60",
    },
    {
        id: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaAO91X4x-O9SHLrY107kgLJ1_EmVByUvcg&usqp=CAU",
        name: "Ginger 100g",
        details: "₹ 15",
    },
    {
        id: 12,
        image: "https://www.jiomart.com/images/product/150x150/590000138/sweet-potato-500-g-0-20201118.jpg",
        name: "Sweet Patato 500g",
        details: "₹60",
    },



];