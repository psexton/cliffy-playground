import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import * as echo from "./commands/echo.ts"
import * as add from "./commands/add.ts"

await new Command()
  .option("-s, --silent", "disable output.", { global: true, default: false })
  .command("echo", echo.command)
  .command("add", add.command)
  .parse(Deno.args);
