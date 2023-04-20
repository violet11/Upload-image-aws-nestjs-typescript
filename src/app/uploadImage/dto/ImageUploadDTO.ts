import { ApiPropertyOptional } from '@nestjs/swagger';

export class ImageFileDTO {
    @ApiPropertyOptional()
    fieldname?: string;

    @ApiPropertyOptional()
    originalname?: string;

    @ApiPropertyOptional()
    encoding?: string;

    @ApiPropertyOptional()
    mimetype?: string

    @ApiPropertyOptional()
    buffer?: any;

    @ApiPropertyOptional()
    size?: string;
}


export class ImageResponseDTO {
    @ApiPropertyOptional()
    ETag?: string;

    @ApiPropertyOptional()
    Location?: string;

    @ApiPropertyOptional()
    key?: string;

    @ApiPropertyOptional()
    Key?: string;
}