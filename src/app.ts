import { Command, EnumType } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { Animal } from "./types.ts"
import * as util from "./util.ts"

const add = new Command()
  .description("add")
//   .type("color", new EnumType(util.colors))  // Enum type with array.
//   .type("animal", new EnumType(Animal))  // Enum type with enum.
  .action(console.log);

const remove = new Command()
  .description("remove")
  .type("color", new EnumType(util.colors))  // Enum type with array.
  .type("animal", new EnumType(Animal))  // Enum type with enum.
  .action(console.log);

await new Command()
  .type("color", new EnumType(util.colors))  // Enum type with array.
  .type("animal", new EnumType(Animal))  // Enum type with enum.
  .globalOption(
    "-c, --color [name:color]",
    "Choose a color.",
  )
  .globalOption(
    "-a, --animal [name:animal]",
    "Choose an animal.",
  )
  .command("add", add)
  .command("remove", remove)
  .parse(Deno.args);
