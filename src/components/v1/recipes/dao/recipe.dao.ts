import { nanoid } from 'nanoid';
import { RecipeSchema } from '../../../../models/recipe/recipe';
import { UserSchema } from '../../../../models/user/user';
import { getPaginationParams } from '../../../../utils/pagination';

export class RecipeDao {
  async save(createRecipe: CreateRecipe): Promise<Recipe> {
    const id = nanoid();
    const recipe = new RecipeSchema({ ...createRecipe, id });
    await recipe.save();

    return recipe.get();
  }

  async findByPk(id: string): Promise<Recipe | null> {
    const recipe = await RecipeSchema.findByPk(id, { include: UserSchema });

    if (!recipe) {
      return null;
    }
    return recipe.get();
  }

  async update(userId: string, id: string, updateRecipe: UpdateRecipe): Promise<true | null> {
    const recipe = await RecipeSchema.update(updateRecipe, { where: { id, author: userId } });

    if (!recipe[0]) {
      return null;
    }

    return true;
  }

  async delete(userId: string, id: string): Promise<true | null> {
    const recipe = await RecipeSchema.destroy({ where: { author: userId, id } });

    if (!recipe) {
      return null;
    }

    return true;
  }

  async getAll(pagination: Pagination, userId?: string): Promise<PaginatedData<Recipe>> {
    const { page, limit, skip, orderBy, sortBy } = getPaginationParams(pagination);

    let where = {};
    if (userId) {
      where = { author: userId };
    }

    const result = await RecipeSchema.findAndCountAll({
      limit,
      offset: skip,
      order: [[sortBy, orderBy]],
      where,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    const recipes = result.rows.map((recipe: RecipeSchema) => recipe.get());

    return {
      data: recipes,
      metadata: {
        page,
        pages: Math.ceil(result.count / limit),
        total: result.count,
        limit,
        orderBy,
        sortBy,
      },
    };
  }
}
