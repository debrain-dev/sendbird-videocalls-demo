import { html, render } from 'lit-html';
import __ from './__';

const app = {
  init() {
    console.log('oka');
    this.tpl();
  },

  tpl() {
    const template = html`
      <section id="hero">
        <h1>SendBird Calls Demo</h1>
        <ul>
          <li><img src="/img/person_1.svg" /> Hi, Ryan!</li>
          <li><img src="/img/person_2.svg" /> Hello, Victor!</li>
        </ul>
      </section>
      <section id="menu">
        <p>
          Select your persona:
        </p>
        <ul>
          <li>
            <a href="" data-user="ryan"><img src="/img/person_1.svg" alt=""></a>
            <span class="label">Ryan</span>
          </li>
          <li>
            <a href="" data-user="victor"><img src="/img/person_2.svg" alt=""></a>
            <span class="label">Victor</span>
          </li>
        </ul>
      </section>
      <section id="call_prompt">
        <a href="#call_ryan" class="call_cta">
          <span class="label">Call Ryan</span>
          <img src="/img/person_1.svg" />
        </a>

        <a href="#call_victor" class="call_cta">
          <span class="label">Call Victor</span>
          <img src="/img/person_2.svg" />
        </a>
      </section>
    `;

    render(template, __.qs('.wrapper'));
  }
};

app.init();
