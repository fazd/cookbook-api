type User = {
  id: string;
  name: string;
  email: string;
};

interface CreateUser {
  name: string;
  email: string;
}

type UpdateUser = Partial<Omit<User, 'id' | 'email'>>;

type FullUser = User & Timestamps;
