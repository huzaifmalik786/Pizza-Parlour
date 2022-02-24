import React from 'react';
import "../styles/About.css";
import MultipleImage from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about" style={{backgroundImage: `url(${MultipleImage})`}}>
      <h1>ABOUT US</h1>
      <div className="content">
        <p> In 1918 Giovanni Tacconelli came to Philadelphia from Italy.
          After a few years working as a laborer, he decided to do what he had done in his native Italy.
          "Bake Bread". The best and only way, he said, was to bake it in a brick oven.
          So along with a few of his friends he built his 20' by 20' brick oven.
          The bread business went well until the outbreak of World War II when all of his sons who had helped
          him in the business were drafted into military service.
          Having no one to help and since the bread business was so very time consuming, he stopped baking bread.
        </p>
        <p>
          In 1946, still having the brick oven, Giovanni pondered over what to do with it since everyone
          had come home from the War and had different careers in mind. He decided to make tomato pies,
          something that his mother had taught him to do many years before. They were and still are 
          tomato pies to our family consisting of fresh made dough, little cheese and a lot of sauce
          cooked in our brick oven to give it a crisp light taste.
        </p>
        <p>
          In 1992, we realized that our oven, which had given us 72 years of service, needed a face-lift.
          We never thought that was supposed to be a 3 month "project" would turn out to be a 7 month "nightmare".
          Thanks to your loyal patronage The Tacconelli family, now in its 5th generation,
          is still baking tomato pies the Giovanni Tacconelli way.
        </p>
        <p className="imp">
          Please keep in mind we are a one-man, one-oven operation. Waiting time may vary.
          Please be assured each pie is made fresh and to order.
        </p>
      </div>
    </div>
  )
}

export default About
