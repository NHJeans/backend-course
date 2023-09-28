import { Mutation, Resolver } from "@nestjs/graphql";
import { FilesService } from "./files.service";

@Resolver()
export class FilesResolver {
  constructor(
    private readonly filesService: FilesService //
  ) {}

  @Mutation(() => String)
  uploadFile(): void {
    return this.filesService.upload();
  }
}
