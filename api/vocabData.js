/* eslint-disable no-param-reassign */
import firebase from 'firebase';
import client from '../utils/client';

const endpoint = client.databaseURL;

// GET VOCAB
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (payload) => new Promise((resolve, reject) => {
  const timestamp = firebase.database.ServerValue.TIMESTAMP;

  // Assign the timestamp to the createdAt property of the payload object
  payload.createdAt = timestamp;

  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE VOCAB
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE VOCAB
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER VOCAB VIA BUTTONS
const filterVocab = (uid, categoryKeyword) => new Promise((resolve, reject) => {
  getVocab(uid)
    .then((vocabData) => {
      const filteredVocab = vocabData.filter((item) => item.category === categoryKeyword);
      resolve(filteredVocab);
    })
    .catch(reject);
});

export {
  updateVocab,
  createVocab,
  getVocab,
  deleteVocab,
  getSingleVocab,
  filterVocab,
};
