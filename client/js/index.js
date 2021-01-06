/* eslint-disable camelcase */
import { html, render } from 'lit-html';
import SendBirdCall from 'sendbird-calls';
import __ from './__';

const app = {
  init() {
    this.config = {};
    this.config.user = '';
    this.config.sb_app_id = '9E169047-FDA8-477E-80B2-8291C060F3B5';
    this.config.sb_token = 'de86e8fc33b0a8c39eff892d1f2810e91b7e6f64';
    SendBirdCall.init(this.config.sb_app_id);
    this.tpl();
  },

  pickPersona(persona, e) {
    e.preventDefault();
    this.config.user = persona;

    const authOption = {
      userId: persona,
      accessToken: this.config.sb_token,
      nickname: persona.charAt(0).toUpperCase() + persona.slice(1)
    };

    SendBirdCall.authenticate(authOption, (result, error) => {
      if (error) {
        console.log(error);
      } else {
        SendBirdCall.connectWebSocket().then(() => {
          console.log('socket connected');
        }).catch(() => {
          console.log('socked connection error');
        });
      }
    });

    this.tpl();
  },

  logout(e) {
    e.preventDefault();
    this.config.user = '';
    this.tpl();
  },

  tpl() {
    const { user } = this.config;

    let menu = '';
    if (user === '') {
      menu = html`
        <section id="menu">
          <p>
            Select your persona:
          </p>
          <ul>
            <li>
              <a @click=${(e) => this.pickPersona('ryan', e)}><img src="/img/person_1.svg" alt=""></a>
              <span class="label">Ryan</span>
            </li>
            <li>
              <a @click=${(e) => this.pickPersona('victor', e)}><img src="/img/person_2.svg" alt=""></a>
              <span class="label">Victor</span>
            </li>
          </ul>
        </section>
      `;
    }

    let call_prompt = '';
    if (user !== '') {
      call_prompt = html`
        <section id="call_prompt">

          <a class="call_cta ${user === 'victor' ? 'ryan' : 'victor'}">
            <span class="label">Call ${user === 'victor' ? 'Ryan' : 'Victor'}</span>
            <img src="/img/person_${user === 'victor' ? '1' : '2'}.svg" />
          </a>

        </section>
      `;
    }

    const template = html`
      <section id="hero">
        <h1>SendBird Calls Demo</h1>
        <ul>
          <li class="${user === 'ryan' ? 'active' : ''}"><img src="/img/person_1.svg" /> <span> Hi, Ryan! - <a @click="${(e) => { this.logout(e); }}">Logout</a></span></li>
          <li class="${user === 'victor' ? 'active' : ''}"><img src="/img/person_2.svg" /> <span> Hello, Victor! - <a @click="${(e) => { this.logout(e); }}">Logout</a></span></li>
        </ul>
      </section>

      ${menu}
      ${call_prompt}
    `;

    render(template, __.qs('.wrapper'));
  }
};

app.init();
