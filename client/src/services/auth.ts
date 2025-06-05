import api from './api';

export const login = async (email: string, senha: string) => {
  const response = await api.post('/login', { email, senha });
  const { token } = response.data;
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const logout = () => {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};
