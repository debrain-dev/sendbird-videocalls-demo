/* eslint-disable camelcase */
import { html, render } from 'lit-html';
import SendBirdCall from 'sendbird-calls';
import __ from './__';

window.app = {
  init() {
    if (this.isSafari()) {
      // __.qs('#remote_video').setAttribute('controls', true);
    }

    this.config = {};
    this.config.user = '';
    this.config.status = 'logout';
    this.config.sb_app_id = '9E169047-FDA8-477E-80B2-8291C060F3B5';
    this.config.sb_token = 'de86e8fc33b0a8c39eff892d1f2810e91b7e6f64';
    this.dialParams = {
      userId: '',
      isVideoCall: true,
      callOption: {
        localMediaView: __.qs('#local_video'),
        remoteMediaView: __.qs('#remote_video'),
        audioEnabled: true,
        videoEnabled: true
      }
    };
    this.acceptParams = {
      callOption: {
        localMediaView: __.qs('#local_video'),
        remoteMediaView: __.qs('#remote_video'),
        audioEnabled: true,
        videoEnabled: true
      }
    };

    SendBirdCall.init(this.config.sb_app_id);
    SendBirdCall.addListener(1, {
      onRinging: (_call) => {
        this.call = _call;
        this.handleIncomingCall();
      }
    });

    this.tpl();
  },

  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },

  pickPersona(persona, e) {
    e.preventDefault();
    this.config.user = persona;
    this.tpl();

    // sendbird calls
    SendBirdCall.addDirectCallSound(SendBirdCall.SoundType.DIALING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/dialing.mp3');
    SendBirdCall.addDirectCallSound(SendBirdCall.SoundType.RINGING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/ringing.mp3');
    SendBirdCall.addDirectCallSound(SendBirdCall.SoundType.RECONNECTING, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/reconnecting.mp3');
    SendBirdCall.addDirectCallSound(SendBirdCall.SoundType.RECONNECTED, 'https://nyc3.digitaloceanspaces.com/archeio/sdk/common/audio/reconnected.mp3');

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
          this.config.status = 'ready';
          this.tpl();
          console.log('socket connected');
        }).catch(() => {
          console.log('socked connection error');
        });
      }
    });
  },

  logout(e) {
    e.preventDefault();
    this.config.user = '';
    this.config.status = 'logout';
    this.tpl();
  },

  onRemoteVideoSettingsChanged(_call) {
    console.log('Information: remote video settings changed!', _call);
  },

  startCall(e, callee) {
    e.preventDefault();
    this.usemedia = SendBirdCall.useMedia({ audio: true, video: true });

    this.dialParams.userId = callee;

    this.call = SendBirdCall.dial(this.dialParams, (_call, error) => {
      if (error) {
        console.log('Information: there was an error making the call');
      }

      console.log('Information: call success!', _call);
      this.config.status = 'calling';
      this.tpl();
    });

    this.attachCallEvents();
  },

  handleIncomingCall() {
    this.usemedia = SendBirdCall.useMedia({ audio: true, video: true });
    this.config.status = 'ringing';
    this.attachCallEvents();
    this.tpl();
  },

  attachCallEvents() {
    this.call.onEstablished = (__call) => {
      console.log('Information: call stablished!', __call);
    };

    this.call.onConnected = (__call) => {
      console.log('Information: call connected!', __call);
      this.config.status = 'ongoing';
      this.tpl();

      this.call.unmuteMicrophone();

      __.qs('#ongoing_call').classList.add('active');

      if (this.isSafari()) {
        console.log('is safari');
      }
    };

    this.call.onEnded = (__call) => {
      console.log('Information: call ended!', __call);

      __.qs('#ongoing_call').classList.remove('active');
      this.config.status = 'ready';
      document.location.reload();
      // this.tpl();
    };

    this.call.onRemoteAudioSettingsChanged = (__call) => {
      console.log('Information: remote audio settings changed!', __call);
    };

    this.call.onRemoteVideoSettingsChanged = (__call) => {
      console.log('Information: remote video settings changed!', __call);
    };
  },

  pickupCall(e) {
    e.preventDefault();
    this.usemedia = SendBirdCall.useMedia({ audio: true, video: true });
    this.call.accept(this.acceptParams);
  },

  endCall() {
    this.endCallStatic();
  },

  endCallStatic() {
    this.config.status = 'ready';
    this.call.end();
    this.tpl();
  },

  muteStatic() {
    this.call.muteMicrophone();
    __.qs('a.mute').classList.remove('active');
    __.qs('a.unmute').classList.add('active');
  },

  unmuteStatic() {
    this.call.unmuteMicrophone();
    __.qs('a.unmute').classList.remove('active');
    __.qs('a.mute').classList.add('active');
  },

  muteVideoStatic() {
    this.call.stopVideo();
    __.qs('a.camera').classList.remove('active');
    __.qs('a.no-camera').classList.add('active');
  },

  unmuteVideoStatic() {
    this.call.startVideo();
    __.qs('a.no-camera').classList.remove('active');
    __.qs('a.camera').classList.add('active');
  },

  tpl() {
    const { user, status } = this.config;
    console.log({ status });

    let menu = '';
    if (status === 'logout') {
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
    const callee = user === 'victor' ? 'ryan' : 'victor';
    if (status === 'ready') {
      call_prompt = html`
        <section id="call_prompt">
          <a class="call_cta ${user === 'victor' ? 'ryan' : 'victor'}" @click=${(e) => this.startCall(e, callee)}>
            <span class="label">Call ${user === 'victor' ? 'Ryan' : 'Victor'}</span>
            <img src="/img/person_${user === 'victor' ? '1' : '2'}.svg" />
          </a>

        </section>
      `;
    }

    let calling_block = '';
    if (status === 'calling') {
      calling_block = html`
        <section id="calling_block">
          ${this.tplCalling(this.dialParams.userId)}
        </section>
      `;
    }

    let ringing_block = '';
    if (status === 'ringing') {
      ringing_block = html`
        <section id="ringing_block">
          ${this.tplRinging(this.call._caller.userId)}
        </section>
      `;
    }

    const template = html`
      <section id="hero">
        <h1>Sendbird Video Calls Playground</h1>
        <ul>
          <li class="${user === 'ryan' ? 'active' : ''}"><img src="/img/person_1.svg" /> <span> Hi, Ryan! - <a @click="${(e) => { this.logout(e); }}">Logout</a></span></li>
          <li class="${user === 'victor' ? 'active' : ''}"><img src="/img/person_2.svg" /> <span> Hello, Victor! - <a @click="${(e) => { this.logout(e); }}">Logout</a></span></li>
        </ul>
      </section>

      ${menu}
      ${call_prompt}
      ${calling_block}
      ${ringing_block}
    `;

    render(template, __.qs('.wrapper'));
  },

  tplCalling(user) {
    let name;
    let image;
    let color;

    if (user === 'ryan') {
      name = 'Ryan';
      image = 'person_1.svg';
      color = 'rgb(255, 187, 0)';
    }

    if (user === 'victor') {
      name = 'Victor';
      image = 'person_2.svg';
      color = 'hotpink';
    }

    return html`
      <div class="calling_element">
        <span class="label">Calling ${name}...</span>
        <div class="image" style="background-color: ${color};">
          <img src="/img/${image}" alt="">
        </div>
        <a class="hangup" @click=${(e) => this.endCall(e)}>
          <i class="mdi mdi-phone-hangup"></i>
        </a>
      </div>
    `;
  },

  tplRinging(user) {
    let name;
    let image;
    let color;

    if (user === 'ryan') {
      name = 'Ryan';
      image = 'person_1.svg';
      color = 'rgb(255, 187, 0)';
    }

    if (user === 'victor') {
      name = 'Victor';
      image = 'person_2.svg';
      color = 'hotpink';
    }

    return html`
      <div class="calling_element">
        <span class="label">Incoming call from ${name}...</span>
        <div class="image" style="background-color: ${color};">
          <img src="/img/${image}" alt="">
        </div>
        <div class="buttons">
          <a class="hangup" @click=${(e) => this.endCall(e)}>
            <i class="mdi mdi-phone-hangup"></i>
          </a>
          <a class="pickup" @click=${(e) => this.pickupCall(e)}>
            <i class="mdi mdi-phone"></i>
          </a>
        </div>
      </div>
    `;
  }
};

window.app.init();
