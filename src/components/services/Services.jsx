import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I can Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Knowledge</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Rotine Process Automation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Problem Solving</p>
            </li>
          </ul>
        </article>
        {/* End of Service */}

        <article className="service">
          <div className="service__head">
            <h3>Kind of projects with experience</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
          </ul>
        </article>
        {/* End of Service */}

      </div>
    </section>
  )
}

export default Services