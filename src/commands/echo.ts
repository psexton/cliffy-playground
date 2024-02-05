import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

export const command = new Command()
  .description("echos the config it received")
  .action(console.log);
