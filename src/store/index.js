import { writable } from 'svelte/store';

const state = {
  id: null,
  url: null,
  message: null,
  title: null, // Texto que se va a mostrar
  type: null, // success o error
  show: null, // true o false
  trailer: null,  // mnBDtygsh1158
  trailerActive: null,
  youtube: null
};

export const store = writable(state);