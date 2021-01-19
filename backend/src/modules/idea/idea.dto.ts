import { ApiProperty } from '@nestjs/swagger';

export class IdeaDTO {
  @ApiProperty()
  idea: string;

  @ApiProperty()
  description: string;
}
