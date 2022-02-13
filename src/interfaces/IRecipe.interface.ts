interface Recipe {
  id: string;
  author: User;
  title: string;
  image: string;
  description: string;
}

interface CreateRecipe {
  author: string;
  title: string;
  image: string;
  description: string;
}

interface UpdateRecipe {
  title?: string;
  image?: string;
  description?: string;
}
