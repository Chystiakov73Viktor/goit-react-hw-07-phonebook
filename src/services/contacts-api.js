import axios from 'axios';

axios.defaults.baseURL = 'https://655b517bab37729791a8e7ea.mockapi.io';

export const fetchGetContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const fetchAddContact = async ({ name, phone }) => {
  const response = await axios.post('/contacts', { name, phone });
  return response.data;
};

export const fetchDeleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
