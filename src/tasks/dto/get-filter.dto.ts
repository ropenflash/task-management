/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.model';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export class GetFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
