"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerHttpServer = exports.layer = void 0;
Object.defineProperty(exports, "layerK8sHttpClient", {
  enumerable: true,
  get: function () {
    return _NodeClusterSocket.layerK8sHttpClient;
  }
});
var HttpRunner = _interopRequireWildcard(require("@effect/cluster/HttpRunner"));
var MessageStorage = _interopRequireWildcard(require("@effect/cluster/MessageStorage"));
var RunnerHealth = _interopRequireWildcard(require("@effect/cluster/RunnerHealth"));
var Runners = _interopRequireWildcard(require("@effect/cluster/Runners"));
var RunnerStorage = _interopRequireWildcard(require("@effect/cluster/RunnerStorage"));
var ShardingConfig = _interopRequireWildcard(require("@effect/cluster/ShardingConfig"));
var SqlMessageStorage = _interopRequireWildcard(require("@effect/cluster/SqlMessageStorage"));
var SqlRunnerStorage = _interopRequireWildcard(require("@effect/cluster/SqlRunnerStorage"));
var RpcSerialization = _interopRequireWildcard(require("@effect/rpc/RpcSerialization"));
var Effect = _interopRequireWildcard(require("effect/Effect"));
var Layer = _interopRequireWildcard(require("effect/Layer"));
var Option = _interopRequireWildcard(require("effect/Option"));
var _nodeHttp = require("node:http");
var _NodeClusterSocket = require("./NodeClusterSocket.js");
var NodeHttpClient = _interopRequireWildcard(require("./NodeHttpClient.js"));
var NodeHttpServer = _interopRequireWildcard(require("./NodeHttpServer.js"));
var NodeSocket = _interopRequireWildcard(require("./NodeSocket.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category Layers
 */
const layer = options => {
  const layer = options.clientOnly
  // client only
  ? options.transport === "http" ? Layer.provide(HttpRunner.layerHttpClientOnly, NodeHttpClient.layerUndici) : Layer.provide(HttpRunner.layerWebsocketClientOnly, NodeSocket.layerWebSocketConstructor)
  // with server
  : options.transport === "http" ? Layer.provide(HttpRunner.layerHttp, [layerHttpServer, NodeHttpClient.layerUndici]) : Layer.provide(HttpRunner.layerWebsocket, [layerHttpServer, NodeSocket.layerWebSocketConstructor]);
  const runnerHealth = options?.clientOnly ? Layer.empty : options?.runnerHealth === "k8s" ? RunnerHealth.layerK8s(options.runnerHealthK8s).pipe(Layer.provide(_NodeClusterSocket.layerK8sHttpClient)) : RunnerHealth.layerPing.pipe(Layer.provide(Runners.layerRpc), Layer.provide(options.transport === "http" ? HttpRunner.layerClientProtocolHttpDefault.pipe(Layer.provide(NodeHttpClient.layerUndici)) : HttpRunner.layerClientProtocolWebsocketDefault.pipe(Layer.provide(NodeSocket.layerWebSocketConstructor))));
  return layer.pipe(Layer.provide(runnerHealth), Layer.provideMerge(options?.storage === "local" ? MessageStorage.layerNoop : options?.storage === "byo" ? Layer.empty : Layer.orDie(SqlMessageStorage.layer)), Layer.provide(options?.storage === "local" ? RunnerStorage.layerMemory : options?.storage === "byo" ? Layer.empty : Layer.orDie(SqlRunnerStorage.layer)), Layer.provide(ShardingConfig.layerFromEnv(options?.shardingConfig)), Layer.provide(options?.serialization === "ndjson" ? RpcSerialization.layerNdjson : RpcSerialization.layerMsgPack));
};
/**
 * @since 1.0.0
 * @category Layers
 */
exports.layer = layer;
const layerHttpServer = exports.layerHttpServer = /*#__PURE__*/Effect.gen(function* () {
  const config = yield* ShardingConfig.ShardingConfig;
  const listenAddress = Option.orElse(config.runnerListenAddress, () => config.runnerAddress);
  if (listenAddress._tag === "None") {
    return yield* Effect.die("NodeClusterHttp.layerHttpServer: ShardingConfig.runnerAddress is None");
  }
  return NodeHttpServer.layer(_nodeHttp.createServer, listenAddress.value);
}).pipe(Layer.unwrapEffect);
//# sourceMappingURL=NodeClusterHttp.js.map