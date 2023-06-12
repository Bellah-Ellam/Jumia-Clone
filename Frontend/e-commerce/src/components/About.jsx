import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="col-12 py-4 my-4">About Us</h1>
                        <p className="lead mb-4">
                        In the enchanting realm of our digital emporium, where the elegance of commerce meets the ethereal wonders of the web, we proudly present our tale, dear visitor. Here, amidst the interplay of artistry and technology, we invite you to embark on a journey of exquisite discovery.

In this curated oasis of desires, we have gathered a treasury of unparalleled treasures, each possessing a whisper of mystique and a touch of opulence. From fashion to finery, from timeless classics to avant-garde creations, our virtual shelves brim with the essence of elegance and allure.

Immerse yourself in the realm of digital delights, where the click of a button unfurls a world of possibilities. Explore the contours of fashion, where threads become poetry, and style becomes an expression of one's soul. Delve into the realm of curated craftsmanship, where artisans breathe life into every stroke, and beauty resonates in the very essence of their creations.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About