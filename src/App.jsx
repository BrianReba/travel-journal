import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item} />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}