import Fast from "../img/about-fast.png";
import Simple from "../img/about-simple.png";
import Savings from "../img/about-savings.png";
import Design from "../img/about-design.png";
import Free from "../img/about-free.png";
import More from "../img/about-more.png";

export default function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="container-header header-about">
          <h1>Why NYAMKA?</h1>
        </div>
        <div class="about">
          <div class="about-cards">
            <h3 class="about-cards_title">Fast</h3>
            <p class="about-cards_text">
              NYAMKA is more faster than other food apps
            </p>
            <img src={Fast} class="about-img" alt="" />
          </div>
          <div class="about-cards">
            <h3 class="about-cards_title">Simple</h3>
            <p class="about-cards_text">NYAMKA is so simple to use</p>
            <img src={Simple} class="about-img" alt="" />
          </div>
          <div class="about-cards">
            <h3 class="about-cards_title">Savings</h3>
            <p class="about-cards_text">NYAMKA helps you to save your money</p>
            <img src={Savings} class="about-img" alt="" />
          </div>
          <div class="about-cards">
            <h3 class="about-cards_title">Design</h3>
            <p class="about-cards_text">
              NYAMKA have so cool and modern design
            </p>
            <img src={Design} class="about-img" alt="" />
          </div>
          <div class="about-cards">
            <h3 class="about-cards_title">Free</h3>
            <p class="about-cards_text">Use NYAMKA for free</p>
            <img src={Free} class="about-img" alt="" />
          </div>
          <div class="about-cards">
            <h3 class="about-cards_title">And more...</h3>
            <p class="about-cards_text">Just start your journey with NYAMKA!</p>
            <img src={More} class="about-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
