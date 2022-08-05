import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepo.find();
  }

  async findOne(id: number): Promise<TaskEntity> {
    return await this.taskRepo.findOne({ where: { id: id } });
  }

  async create(task: TaskEntity): Promise<TaskEntity> {
    return await this.taskRepo.save(task);
  }

  async update(task: TaskEntity): Promise<UpdateResult> {
    return await this.taskRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taskRepo.delete(id);
  }
}
