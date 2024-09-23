import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

const products = [
    {
        img: "https://fabricbike.com/377-thickbox_default/paseo-step-city.jpg",
        cardTitle: "Bicicleta de paseo Step-city",
        description: "Bicicleta para las mejores salidas en familia.",
        price: "400€"
    },
    {
        img: "https://www.lidl.es/media/product/0/0/5/3/8/4/7/zuendapp-bicicleta-de-montana-zoom--1.jpg",
        cardTitle: "Bicicleta de montaña para niño",
        description: "Para disfrutar a tope en la montaña",
        price: "500€"
    },
    {
        img: "https://momabikes.com/cdn/shop/products/8436578262489.MAIN_1200x1200.jpg?v=1713795254",
        cardTitle: "Bicicleta eléctrica plegable Ebike-20",
        description: "Bicicleta eléctrica de alta autonomía",
        price: "600€"
    },
    {
        img: "https://www.clootbike.com/images/products/bicicleta-de-montana-29-xr-trail-900-24v-portada.jpg",
        cardTitle: "Bicicleta de montaña SHIMANO Altus",
        description: "Bicicleta de alto rendimiento profesional.",
        price: "700€"
    }
];

const Home = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Jumbotron 
                title="A WARM WELCOME!"
                description="Descubre una selección única de productos a precios increíbles. No te pierdas nuestras ofertas exclusivas y limitadas. ¡Compra hoy mismo y disfruta de calidad y ahorro en cada artículo!"
            />
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <Card 
                            img={product.img}
                            cardTitle={product.cardTitle}
                            description={product.description}
                            price={product.price} 
                        />
                    </div>
                ))}
            </div>
            <Footer text="Copy Right | 2024" />
        </div>
    );
};

export default Home;

