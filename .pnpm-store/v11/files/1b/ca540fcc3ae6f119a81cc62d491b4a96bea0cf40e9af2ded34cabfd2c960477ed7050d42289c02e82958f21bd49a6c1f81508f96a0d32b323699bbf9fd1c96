"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layer = void 0;
Object.defineProperty(exports, "layerClientProtocol", {
  enumerable: true,
  get: function () {
    return _NodeClusterSocket.layerClientProtocol;
  }
});
exports.layerK8sHttpClient = exports.layerDispatcherK8s = void 0;
Object.defineProperty(exports, "layerSocketServer", {
  enumerable: true,
  get: function () {
    return _NodeClusterSocket.layerSocketServer;
  }
});
var K8sHttpClient = _interopRequireWildcard(require("@effect/cluster/K8sHttpClient"));
var MessageStorage = _interopRequireWildcard(require("@effect/cluster/MessageStorage"));
var RunnerHealth = _interopRequireWildcard(require("@effect/cluster/RunnerHealth"));
var Runners = _interopRequireWildcard(require("@effect/cluster/Runners"));
var RunnerStorage = _interopRequireWildcard(require("@effect/cluster/RunnerStorage"));
var ShardingConfig = _interopRequireWildcard(require("@effect/cluster/ShardingConfig"));
var SocketRunner = _interopRequireWildcard(require("@effect/cluster/SocketRunner"));
var SqlMessageStorage = _interopRequireWildcard(require("@effect/cluster/SqlMessageStorage"));
var SqlRunnerStorage = _interopRequireWildcard(require("@effect/cluster/SqlRunnerStorage"));
var _NodeClusterSocket = require("@effect/platform-node-shared/NodeClusterSocket");
var FileSystem = _interopRequireWildcard(require("@effect/platform/FileSystem"));
var RpcSerialization = _interopRequireWildcard(require("@effect/rpc/RpcSerialization"));
var Effect = _interopRequireWildcard(require("effect/Effect"));
var Layer = _interopRequireWildcard(require("effect/Layer"));
var NodeFileSystem = _interopRequireWildcard(require("./NodeFileSystem.js"));
var NodeHttpClient = _interopRequireWildcard(require("./NodeHttpClient.js"));
var Undici = _interopRequireWildcard(require("./Undici.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category Layers
 */
const layer = options => {
  const layer = options?.clientOnly
  // client only
  ? Layer.provide(SocketRunner.layerClientOnly, _NodeClusterSocket.layerClientProtocol)
  // with server
  : Layer.provide(SocketRunner.layer, [_NodeClusterSocket.layerSocketServer, _NodeClusterSocket.layerClientProtocol]);
  const runnerHealth = options?.clientOnly ? Layer.empty : options?.runnerHealth === "k8s" ? RunnerHealth.layerK8s(options.runnerHealthK8s).pipe(Layer.provide(layerK8sHttpClient)) : RunnerHealth.layerPing.pipe(Layer.provide(Runners.layerRpc), Layer.provide(_NodeClusterSocket.layerClientProtocol));
  return layer.pipe(Layer.provide(runnerHealth), Layer.provideMerge(options?.storage === "local" ? MessageStorage.layerNoop : options?.storage === "byo" ? Layer.empty : Layer.orDie(SqlMessageStorage.layer)), Layer.provide(options?.storage === "local" ? RunnerStorage.layerMemory : options?.storage === "byo" ? Layer.empty : Layer.orDie(SqlRunnerStorage.layer)), Layer.provide(ShardingConfig.layerFromEnv(options?.shardingConfig)), Layer.provide(options?.serialization === "ndjson" ? RpcSerialization.layerNdjson : RpcSerialization.layerMsgPack));
};
/**
 * @since 1.0.0
 * @category Layers
 */
exports.layer = layer;
const layerDispatcherK8s = exports.layerDispatcherK8s = /*#__PURE__*/Layer.scoped(NodeHttpClient.Dispatcher)(Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const caCertOption = yield* fs.readFileString("/var/run/secrets/kubernetes.io/serviceaccount/ca.crt").pipe(Effect.option);
  if (caCertOption._tag === "Some") {
    return yield* Effect.acquireRelease(Effect.sync(() => new Undici.Agent({
      connect: {
        ca: caCertOption.value
      }
    })), agent => Effect.promise(() => agent.destroy()));
  }
  return yield* NodeHttpClient.makeDispatcher;
})).pipe(/*#__PURE__*/Layer.provide(NodeFileSystem.layer));
/**
 * @since 1.0.0
 * @category Layers
 */
const layerK8sHttpClient = exports.layerK8sHttpClient = /*#__PURE__*/K8sHttpClient.layer.pipe(/*#__PURE__*/Layer.provide(/*#__PURE__*/Layer.fresh(NodeHttpClient.layerUndiciWithoutDispatcher)), /*#__PURE__*/Layer.provide(layerDispatcherK8s), /*#__PURE__*/Layer.provide(NodeFileSystem.layer));
//# sourceMappingURL=NodeClusterSocket.js.map