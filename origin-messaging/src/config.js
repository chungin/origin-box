require('dotenv').config()

module.exports = Object.freeze({
  GLOBAL_KEYS: `${process.env.MESSAGING_NAMESPACE}:global`,
  CONV_INIT_PREFIX: `${process.env.MESSAGING_NAMESPACE}:convo-init-`,
  CONV: `${process.env.MESSAGING_NAMESPACE}:conv`,

  IPFS_ADDRESS: process.env.IPFS_ADDRESS || null,
  IPFS_PORT: process.env.IPFS_PORT || '5001',

  IPFS_MAX_CONNECTIONS: process.env.IPFS_MAX_CONNECTIONS ?
    Number(process.env.MAX_CONNECTIONS) : 2048,
  IPFS_WS_ADDRESS: process.env.IPFS_WS_ADDRESS || '/ip4/0.0.0.0/tcp/9012/ws',

  RPC_SERVER: process.env.RPC_SERVER
})