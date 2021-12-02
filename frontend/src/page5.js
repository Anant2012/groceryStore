import React from "react";
import "./page.css"


const Page = () => {

    return<>
    <div class="Image">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e25d2c66173301.5b0d62601d407.jpg"
            alt="Retry" width="90%" height="300cm"/>
    </div>

    <div class="items">

        <div class="product">
            <img class="product_img" src="https://m.media-amazon.com/images/I/71M6kMdnqTL._SL1500_.jpg"
                alt="Loading Image"/>
            <br></br>
            <b>Almond 200gm</b>
            <br></br>
            <span class="price-box">
                <b>M.R.P: </b>
                <span id="final_price">₹ 180</span>
            </span>
            <br></br>
            <div class="cart_btn">
                <span class="txt_btn">Add to Cart
                </span>
            </div>
        </div>

        <div class="product">
            <img class="product_img" src="https://m.media-amazon.com/images/I/71Ygw1cWFvL._SL1500_.jpg"
                alt="Loading Image"/>
            <br></br>
            <b>Cashew Nuts 200gm</b>
            <br></br>
            <span class="price-box">
                <b>M.R.P: </b>
                <span id="final_price">₹ 176</span>
            </span>
            <br></br>
            <div class="cart_btn">
                <span class="txt_btn">Add to Cart
                </span>
            </div>
        </div>

        <div class="product">
            <img class="product_img" src="https://m.media-amazon.com/images/I/81vW0gaeaQL._SL1500_.jpg"
                alt="Loading Image"/>
            <br></br>
            <b>Kishmish 500gm</b>
            <br></br>
            <span class="price-box">
                <b>M.R.P: </b>
                <span id="final_price">₹ 150</span>
            </span>
            <br></br>
            <div class="cart_btn">
                <span class="txt_btn">Add to Cart
                </span>
            </div>
        </div>


        <div class="product">
            <img class="product_img" src="https://m.media-amazon.com/images/I/81wnMzzMjwL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Loading Image"/>
            <br></br>
            <b>Walnut 100gm</b>
            <br></br>
            <span class="price-box">
                <b>M.R.P: </b>
                <span id="final_price">₹ 244</span>
            </span>
            <br></br>
            <div class="cart_btn">
                <span class="txt_btn">Add to Cart
                </span>
            </div>
        </div>


        <div class="product">
            <img class="product_img" src="https://m.media-amazon.com/images/I/719gI2jokCL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Loading Image"/>
            <br></br>
            <b>Pista 200gm</b>
            <br></br>
            <span class="price-box">
                <b>M.R.P: </b>
                <span id="final_price">₹ 289</span>
            </span>
            <br></br>
            <div class="cart_btn">
                <span class="txt_btn">Add to Cart
                </span>
            </div>
        </div>
    

       <div class="product">
        <img class="product_img" src="https://m.media-amazon.com/images/I/71HpOfJy0YL._AC_UL480_FMwebp_QL65_.jpg"
            alt="Loading Image"/>
        <br></br>
        <b>Kesar Saffron 1gm</b>
        <br></br>
        <span class="price-box">
            <b>M.R.P: </b>
            <span id="final_price">₹ 195</span>
        </span>
        <br></br>
        <div class="cart_btn">
            <span class="txt_btn">Add to Cart
            </span>
        </div>
       </div>
    </div>

    </>
    }
    export default Page