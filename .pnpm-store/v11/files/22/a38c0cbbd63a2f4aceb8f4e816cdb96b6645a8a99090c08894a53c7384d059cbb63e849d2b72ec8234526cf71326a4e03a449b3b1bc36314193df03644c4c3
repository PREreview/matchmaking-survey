import * as MessageStorage from "@effect/cluster/MessageStorage";
import * as Runners from "@effect/cluster/Runners";
import * as RunnerStorage from "@effect/cluster/RunnerStorage";
import type { Sharding } from "@effect/cluster/Sharding";
import * as ShardingConfig from "@effect/cluster/ShardingConfig";
import type * as Etag from "@effect/platform/Etag";
import type { HttpPlatform } from "@effect/platform/HttpPlatform";
import type { HttpServer } from "@effect/platform/HttpServer";
import type { ServeError } from "@effect/platform/HttpServerError";
import type { SqlClient } from "@effect/sql/SqlClient";
import type { ConfigError } from "effect/ConfigError";
import * as Layer from "effect/Layer";
import type { NodeContext } from "./NodeContext.js";
export { 
/**
 * @since 1.0.0
 * @category Re-exports
 */
layerK8sHttpClient } from "./NodeClusterSocket.js";
/**
 * @since 1.0.0
 * @category Layers
 */
export declare const layer: <const ClientOnly extends boolean = false, const Storage extends "local" | "sql" | "byo" = never, const Health extends "ping" | "k8s" = never>(options: {
    readonly transport: "http" | "websocket";
    readonly serialization?: "msgpack" | "ndjson" | undefined;
    readonly clientOnly?: ClientOnly | undefined;
    readonly storage?: Storage | undefined;
    readonly runnerHealth?: Health | undefined;
    readonly runnerHealthK8s?: {
        readonly namespace?: string | undefined;
        readonly labelSelector?: string | undefined;
    } | undefined;
    readonly shardingConfig?: Partial<ShardingConfig.ShardingConfig["Type"]> | undefined;
}) => ClientOnly extends true ? Layer.Layer<Sharding | Runners.Runners | ("byo" extends Storage ? never : MessageStorage.MessageStorage), ConfigError, "local" extends Storage ? never : "byo" extends Storage ? (MessageStorage.MessageStorage | RunnerStorage.RunnerStorage) : SqlClient> : Layer.Layer<Sharding | Runners.Runners | ("byo" extends Storage ? never : MessageStorage.MessageStorage), ServeError | ConfigError, "local" extends Storage ? never : "byo" extends Storage ? (MessageStorage.MessageStorage | RunnerStorage.RunnerStorage) : SqlClient>;
/**
 * @since 1.0.0
 * @category Layers
 */
export declare const layerHttpServer: Layer.Layer<HttpPlatform | Etag.Generator | NodeContext | HttpServer, ServeError, ShardingConfig.ShardingConfig>;
//# sourceMappingURL=NodeClusterHttp.d.ts.map