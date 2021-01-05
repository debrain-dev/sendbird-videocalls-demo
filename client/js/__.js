/* eslint-disable camelcase */
import md5 from 'md5';
import { utcToZonedTime, format } from 'date-fns-tz';

const __ = {

  qs(node) {
    return document.querySelector(node);
  },

  qsa(node) {
    return document.querySelectorAll(node);
  },

  hash(str) {
    return md5(str);
  },

  async post(path, payload) {
    this.qs('.loading').classList.add('active');
    const headers = {
      'Content-Type': 'application/json'
    };
    const token = localStorage.xibilla_token;
    if (token) {
      headers['x-token-auth'] = token;
    }
    const response = await fetch(`${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers
    });
    this.qs('.loading').classList.remove('active');
    return response.json();
  },

  async deleteReq(path) {
    this.qs('.loading').classList.add('active');
    const headers = {};
    const token = localStorage.xibilla_token;
    if (token) {
      headers['x-token-auth'] = token;
    }
    const response = await fetch(`${path}`, {
      method: 'DELETE',
      headers
    });
    this.qs('.loading').classList.remove('active');
    return response.json();
  },

  async get(path) {
    this.qs('.loading').classList.add('active');
    const headers = {};
    const token = localStorage.xibilla_token;
    if (token) {
      headers['x-token-auth'] = token;
    }
    const response = await fetch(`${path}`, {
      method: 'GET',
      headers
    });
    this.qs('.loading').classList.remove('active');
    return response.json();
  },

  html(container, content) {
    document.querySelector(container).innerHTML = content;
  },

  date(data) {
    const date = utcToZonedTime(new Date(data), 'America/Bogota');
    return format(date, 'MMM d, yyyy. h:mm aaaa');
  },

  dob(data) {
    const date = Date.parse(data.replaceAll('/', '-'));
    if (date) return format(date, 'MMM d, yyyy');
    return data;
  },

  number(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  serialize(selector) {
    const output = {};
    const _form = this.qs(selector);
    _form.querySelectorAll('input, select, textarea').forEach((el) => {
      output[el.getAttribute('name')] = el.value;
    });
    return output;
  },

  email(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }
};

export default __;
