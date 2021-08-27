import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
    @Get()
    getFile(): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'nest.png'));
        return new StreamableFile(file);
    }
}