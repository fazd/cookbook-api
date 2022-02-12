interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface CreateUser {
  name: string;
  email: string;
  password: string;
}

// type UpdateUser = Partial<Omit<User, 'id' | 'email'>>;

// type FullUser = User & Timestamps;
