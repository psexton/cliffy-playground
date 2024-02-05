import { Command, EnumType } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { Animal } from "../types.ts"
import * as util from "../util.ts"

export const command = new Command()
  .description("register a new item")
  .type("color", new EnumType(util.colors))  // Enum type with array.
  .type("animal", new EnumType(Animal))  // Enum type with enum.
  .option(
    "-c, --color [name:color]",
    "Choose a color.",
  )
  .option(
    "-a, --animal [name:animal]",
    "Choose an animal.",
  )
  .action(({ color, animal }) => {
    console.log("color: %s", color);
    console.log("animal: %s", animal);
  });
