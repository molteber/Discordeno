// import { WebSocket } from "https://deno.land/std@v0.41.0/ws/mod.ts"
// import { ClientOptions } from "../types/options.ts"

export const spawnShards = (total: number, id = 1) => {
  // this.ShardingManager.spawnShard(id);
  if (id < total) spawnShards(total, id + 1)
}

// export const spawnShardss = (total: number, socket: WebSocket, data: ClientOptions, payload: unknown) => {

// }