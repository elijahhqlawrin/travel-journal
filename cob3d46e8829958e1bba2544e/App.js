import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"
import data from "./data.js"

export default function App() {
    const cards = data.reverse().map(card => {
        return (
            <Card
                key={card.id}
                id={card.id}
                title={card.title}
                location={card.location}
                googleMapsUrl={card.googleMapsUrl}
                startDate={card.startDate}
                endDate={card.endDate}
                description={card.description}
                imageUrl={card.imageUrl}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>
    )
}