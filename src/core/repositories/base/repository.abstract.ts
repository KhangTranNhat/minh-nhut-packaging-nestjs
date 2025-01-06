import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BaseRepositoryInterface } from "@Core/repositories/base/repository.interface";
import { BaseEntity } from "@Shared/base/entity";
import { FindAllResponse } from "@Core/types";

export abstract class BaseRepositoryAbstract<T extends BaseEntity>
  implements BaseRepositoryInterface<T> {
  protected constructor(private readonly model: Model<T>) {
    this.model = model;
  }
  async create(dto: T | any): Promise<T> {
    const created_data = await this.model.create(dto);
    return created_data.save();
  }
  async findOneById(id: string): Promise<T> {
    const item = await this.model.findById(id);
    return item ;
  }

  async findOneByCondition(condition = {}): Promise<T> {
    return await this.model
      .findOne({
        ...condition,
        deleted_at: null,
      })
      .exec();
  }
  async findAll(
    condition: FilterQuery<T>,
    options?: QueryOptions<T>,
  ): Promise<FindAllResponse<T>> {
    const [count, items] = await Promise.all([
      this.model.countDocuments({ ...condition, deleted_at: null }),
      this.model.find({ ...condition, deleted_at: null }, options?.projection, options),
    ]);
    return {
      count,
      items,
    };
  }
  async update(id: string, dto: Partial<T>): Promise<T> {
    return await this.model.findOneAndUpdate(
      { _id: id, deleted_at: null },
      dto,
      { new: true },
    );
  }
  async delete(id: string): Promise<boolean> {
    const delete_item = await this.model.findById(id);
    if (!delete_item) {
      return false;
    }
    return !!(await this.model.findByIdAndDelete(id));
  }
}