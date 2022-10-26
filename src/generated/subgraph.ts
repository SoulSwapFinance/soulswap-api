export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: any
  Bytes: any
}

export interface Bundle {
  readonly __typename?: 'Bundle'
  readonly avaxPrice: Scalars['BigDecimal']
  readonly id: Scalars['ID']
}

export interface Burn {
  readonly __typename?: 'Burn'
  readonly amount0?: Maybe<Scalars['BigDecimal']>
  readonly amount1?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>
  readonly feeTo?: Maybe<Scalars['Bytes']>
  readonly id: Scalars['ID']
  readonly liquidity: Scalars['BigDecimal']
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly pair: Pair
  readonly sender?: Maybe<Scalars['Bytes']>
  readonly timestamp: Scalars['BigInt']
  readonly to?: Maybe<Scalars['Bytes']>
  readonly transaction: Transaction
}

export interface LiquidityPosition {
  readonly __typename?: 'LiquidityPosition'
  readonly id: Scalars['ID']
  readonly liquidityTokenBalance: Scalars['BigDecimal']
  readonly pair: Pair
  readonly poolOwnership?: Maybe<Scalars['BigDecimal']>
  readonly user: User
}

export interface Mint {
  readonly __typename?: 'Mint'
  readonly amount0?: Maybe<Scalars['BigDecimal']>
  readonly amount1?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>
  readonly feeTo?: Maybe<Scalars['Bytes']>
  readonly id: Scalars['ID']
  readonly liquidity: Scalars['BigDecimal']
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly pair: Pair
  readonly sender?: Maybe<Scalars['Bytes']>
  readonly timestamp: Scalars['BigInt']
  readonly to: Scalars['Bytes']
  readonly transaction: Transaction
}

export interface Pair {
  readonly __typename?: 'Pair'
  readonly burns?: Maybe<readonly Burn[]>
  readonly createdAtBlockNumber: Scalars['BigInt']
  readonly createdAtTimestamp: Scalars['BigInt']
  readonly factory: SoulSwapFactory
  readonly id: Scalars['ID']
  readonly liquidityPositions?: Maybe<readonly LiquidityPosition[]>
  readonly mints?: Maybe<readonly Mint[]>
  readonly reserve0: Scalars['BigDecimal']
  readonly reserve1: Scalars['BigDecimal']
  readonly reserveAVAX: Scalars['BigDecimal']
  readonly reserveUSD: Scalars['BigDecimal']
  readonly swaps?: Maybe<readonly Swap[]>
  readonly token0: Token
  readonly token0Price: Scalars['BigDecimal']
  readonly token1: Token
  readonly token1Price: Scalars['BigDecimal']
  readonly totalSupply: Scalars['BigDecimal']
  readonly trackedReserveAVAX: Scalars['BigDecimal']
  readonly txCount: Scalars['BigInt']
  readonly volumeToken0: Scalars['BigDecimal']
  readonly volumeToken1: Scalars['BigDecimal']
  readonly volumeUSD: Scalars['BigDecimal']
}

export interface PairBurnsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BurnOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BurnFilter>
}

export interface PairLiquidityPositionsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<LiquidityPositionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<LiquidityPositionFilter>
}

export interface PairMintsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<MintOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<MintFilter>
}

export interface PairSwapsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SwapOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SwapFilter>
}

export interface PairDayData {
  readonly __typename?: 'PairDayData'
  readonly dailyTxns: Scalars['BigInt']
  readonly dailyVolumeToken0: Scalars['BigDecimal']
  readonly dailyVolumeToken1: Scalars['BigDecimal']
  readonly dailyVolumeUSD: Scalars['BigDecimal']
  readonly date: Scalars['Int']
  readonly id: Scalars['ID']
  readonly pairAddress: Scalars['Bytes']
  readonly reserve0: Scalars['BigDecimal']
  readonly reserve1: Scalars['BigDecimal']
  readonly reserveUSD: Scalars['BigDecimal']
  readonly token0: Token
  readonly token1: Token
}

export interface Query {
  readonly __typename?: 'Query'
  readonly bundle?: Maybe<Bundle>
  readonly bundles: readonly Bundle[]
  readonly burn?: Maybe<Burn>
  readonly burns: readonly Burn[]
  readonly liquidityPosition?: Maybe<LiquidityPosition>
  readonly liquidityPositions: readonly LiquidityPosition[]
  readonly mint?: Maybe<Mint>
  readonly mints: readonly Mint[]
  readonly pair?: Maybe<Pair>
  readonly pairDayData?: Maybe<PairDayData>
  readonly pairDayDatas: readonly PairDayData[]
  readonly pairs: readonly Pair[]
  readonly swap?: Maybe<Swap>
  readonly swaps: readonly Swap[]
  readonly token?: Maybe<Token>
  readonly tokenDayData?: Maybe<TokenDayData>
  readonly tokenDayDatas: readonly TokenDayData[]
  readonly tokens: readonly Token[]
  readonly transaction?: Maybe<Transaction>
  readonly transactions: readonly Transaction[]
  readonly soulswapDayData?: Maybe<SoulSwapDayData>
  readonly soulswapDayDatas: readonly SoulSwapDayData[]
  readonly soulswapFactories: readonly SoulSwapFactory[]
  readonly soulswapFactory?: Maybe<SoulSwapFactory>
  readonly user?: Maybe<User>
  readonly users: readonly User[]
}

export interface QueryBundleArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryBundlesArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BundleOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BundleFiler>
}

export interface QueryBurnArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryBurnsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BurnOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BurnFilter>
}

export interface QueryLiquidityPositionArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryLiquidityPositionsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<LiquidityPositionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<LiquidityPositionFilter>
}

export interface QueryMintArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryMintsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<MintOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<MintFilter>
}

export interface QueryPairArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryPairDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryPairDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairDayDataFilter>
}

export interface QueryPairsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairFilter>
}

export interface QuerySwapArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QuerySwapsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SwapOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SwapFilter>
}

export interface QueryTokenArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryTokenDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryTokenDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenDayDataFilter>
}

export interface QueryTokensArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenFilter>
}

export interface QueryTransactionArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryTransactionsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransactionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TransactionFilter>
}

export interface QuerySoulSwapDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QuerySoulSwapDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SoulSwapDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SoulSwapDayDataFilter>
}

export interface QuerySoulSwapFactoriesArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SoulSwapFactoryOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SoulSwapFactoryFilter>
}

export interface QuerySoulSwapFactoryArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryUserArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface QueryUsersArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<UserOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<UserFilter>
}

export interface Subscription {
  readonly __typename?: 'Subscription'
  readonly bundle?: Maybe<Bundle>
  readonly bundles: readonly Bundle[]
  readonly burn?: Maybe<Burn>
  readonly burns: readonly Burn[]
  readonly liquidityPosition?: Maybe<LiquidityPosition>
  readonly liquidityPositions: readonly LiquidityPosition[]
  readonly mint?: Maybe<Mint>
  readonly mints: readonly Mint[]
  readonly pair?: Maybe<Pair>
  readonly pairDayData?: Maybe<PairDayData>
  readonly pairDayDatas: readonly PairDayData[]
  readonly pairs: readonly Pair[]
  readonly swap?: Maybe<Swap>
  readonly swaps: readonly Swap[]
  readonly token?: Maybe<Token>
  readonly tokenDayData?: Maybe<TokenDayData>
  readonly tokenDayDatas: readonly TokenDayData[]
  readonly tokens: readonly Token[]
  readonly transaction?: Maybe<Transaction>
  readonly transactions: readonly Transaction[]
  readonly soulswapDayData?: Maybe<SoulSwapDayData>
  readonly soulswapDayDatas: readonly SoulSwapDayData[]
  readonly soulswapFactories: readonly SoulSwapFactory[]
  readonly soulswapFactory?: Maybe<SoulSwapFactory>
  readonly user?: Maybe<User>
  readonly users: readonly User[]
}

export interface SubscriptionBundleArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionBundlesArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BundleOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BundleFiler>
}

export interface SubscriptionBurnArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionBurnsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BurnOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BurnFilter>
}

export interface SubscriptionLiquidityPositionArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionLiquidityPositionsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<LiquidityPositionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<LiquidityPositionFilter>
}

export interface SubscriptionMintArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionMintsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<MintOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<MintFilter>
}

export interface SubscriptionPairArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionPairDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionPairDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairDayDataFilter>
}

export interface SubscriptionPairsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairFilter>
}

export interface SubscriptionSwapArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionSwapsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SwapOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SwapFilter>
}

export interface SubscriptionTokenArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionTokenDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionTokenDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenDayDataFilter>
}

export interface SubscriptionTokensArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenFilter>
}

export interface SubscriptionTransactionArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionTransactionsArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TransactionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TransactionFilter>
}

export interface SubscriptionSoulSwapDayDataArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionSoulSwapDayDatasArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SoulSwapDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SoulSwapDayDataFilter>
}

export interface SubscriptionSoulSwapFactoriesArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SoulSwapFactoryOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SoulSwapFactoryFilter>
}

export interface SubscriptionSoulSwapFactoryArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionUserArgs {
  block?: Maybe<BlockHeight>
  id: Scalars['ID']
}

export interface SubscriptionUsersArgs {
  block?: Maybe<BlockHeight>
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<UserOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<UserFilter>
}

export interface Swap {
  readonly __typename?: 'Swap'
  readonly amount0In: Scalars['BigDecimal']
  readonly amount0Out: Scalars['BigDecimal']
  readonly amount1In: Scalars['BigDecimal']
  readonly amount1Out: Scalars['BigDecimal']
  readonly amountUSD: Scalars['BigDecimal']
  readonly id: Scalars['ID']
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly pair: Pair
  readonly sender: Scalars['Bytes']
  readonly timestamp: Scalars['BigInt']
  readonly to: Scalars['Bytes']
  readonly transaction: Transaction
}

export interface Token {
  readonly __typename?: 'Token'
  readonly allPairs?: Maybe<readonly Pair[]>
  readonly decimals: Scalars['BigInt']
  readonly derivedAVAX?: Maybe<Scalars['BigDecimal']>
  readonly id: Scalars['ID']
  readonly mostLiquidPairs: readonly Maybe<PairDayData>[]
  readonly name: Scalars['String']
  readonly symbol: Scalars['String']
  readonly totalLiquidity: Scalars['BigDecimal']
  readonly tradeVolume: Scalars['BigDecimal']
  readonly tradeVolumeUSD: Scalars['BigDecimal']
  readonly txCount: Scalars['BigInt']
}

export interface TokenAllPairsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairFilter>
}

export interface TokenMostLiquidPairsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairDayDataFilter>
}

export interface TokenDayData {
  readonly __typename?: 'TokenDayData'
  readonly dailyTxns: Scalars['BigInt']
  readonly dailyVolumeAVAX: Scalars['BigDecimal']
  readonly dailyVolumeToken: Scalars['BigDecimal']
  readonly dailyVolumeUSD: Scalars['BigDecimal']
  readonly date: Scalars['Int']
  readonly id: Scalars['ID']
  readonly maxStored: Scalars['Int']
  readonly mostLiquidPairs: readonly PairDayData[]
  readonly priceUSD: Scalars['BigDecimal']
  readonly token: Token
  readonly totalLiquidityAVAX: Scalars['BigDecimal']
  readonly totalLiquidityToken: Scalars['BigDecimal']
  readonly totalLiquidityUSD: Scalars['BigDecimal']
}

export interface TokenDayDataMostLiquidPairsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairDayDataFilter>
}

export interface Transaction {
  readonly __typename?: 'Transaction'
  readonly blockNumber: Scalars['BigInt']
  readonly burns: readonly Maybe<Burn>[]
  readonly id: Scalars['ID']
  readonly mints: readonly Maybe<Mint>[]
  readonly swaps: readonly Maybe<Swap>[]
  readonly timestamp: Scalars['BigInt']
}

export interface TransactionBurnsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<BurnOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<BurnFilter>
}

export interface TransactionMintsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<MintOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<MintFilter>
}

export interface TransactionSwapsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<SwapOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<SwapFilter>
}

export interface SoulSwapDayData {
  readonly __typename?: 'SoulSwapDayData'
  readonly dailyVolumeAVAX: Scalars['BigDecimal']
  readonly dailyVolumeUSD: Scalars['BigDecimal']
  readonly date: Scalars['Int']
  readonly id: Scalars['ID']
  readonly maxStored?: Maybe<Scalars['Int']>
  readonly mostLiquidTokens: readonly TokenDayData[]
  readonly totalLiquidityAVAX: Scalars['BigDecimal']
  readonly totalLiquidityUSD: Scalars['BigDecimal']
  readonly totalVolumeAVAX: Scalars['BigDecimal']
  readonly totalVolumeUSD: Scalars['BigDecimal']
  readonly txCount: Scalars['BigInt']
}

export interface SoulSwapDayDataMostLiquidTokensArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenDayDataFilter>
}

export interface SoulSwapFactory {
  readonly __typename?: 'SoulSwapFactory'
  readonly id: Scalars['ID']
  readonly mostLiquidTokens: readonly TokenDayData[]
  readonly pairCount: Scalars['Int']
  readonly pairs: readonly Maybe<Pair>[]
  readonly totalLiquidityAVAX: Scalars['BigDecimal']
  readonly totalLiquidityUSD: Scalars['BigDecimal']
  readonly totalVolumeAVAX: Scalars['BigDecimal']
  readonly totalVolumeUSD: Scalars['BigDecimal']
  readonly txCount: Scalars['BigInt']
}

export interface SoulSwapFactoryMostLiquidTokensArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<TokenDayDataOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<TokenDayDataFilter>
}

export interface SoulSwapFactoryPairsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<PairOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PairFilter>
}

export interface User {
  readonly __typename?: 'User'
  readonly id: Scalars['ID']
  readonly liquidityPositions?: Maybe<readonly LiquidityPosition[]>
}

export interface UserLiquidityPositionsArgs {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<LiquidityPositionOrderBy>
  orderDirection?: Maybe<OrderDirection>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<LiquidityPositionFilter>
}

export enum BundleOrderBy {
  AvaxPrice = 'avaxPrice',
  Id = 'id'
}

export enum BurnOrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  FeeLiquidity = 'feeLiquidity',
  FeeTo = 'feeTo',
  Id = 'id',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export enum LiquidityPositionOrderBy {
  Id = 'id',
  LiquidityTokenBalance = 'liquidityTokenBalance',
  Pair = 'pair',
  PoolOwnership = 'poolOwnership',
  User = 'user'
}

export enum MintOrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  FeeLiquidity = 'feeLiquidity',
  FeeTo = 'feeTo',
  Id = 'id',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PairDayDataOrderBy {
  DailyTxns = 'dailyTxns',
  DailyVolumeToken0 = 'dailyVolumeToken0',
  DailyVolumeToken1 = 'dailyVolumeToken1',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
  Id = 'id',
  PairAddress = 'pairAddress',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  Token0 = 'token0',
  Token1 = 'token1'
}

export enum PairOrderBy {
  Burns = 'burns',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Factory = 'factory',
  Id = 'id',
  LiquidityPositions = 'liquidityPositions',
  Mints = 'mints',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveAvax = 'reserveAVAX',
  ReserveUsd = 'reserveUSD',
  Swaps = 'swaps',
  Token0 = 'token0',
  Token0Price = 'token0Price',
  Token1 = 'token1',
  Token1Price = 'token1Price',
  TotalSupply = 'totalSupply',
  TrackedReserveAvax = 'trackedReserveAVAX',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export enum SwapOrderBy {
  Amount0In = 'amount0In',
  Amount0Out = 'amount0Out',
  Amount1In = 'amount1In',
  Amount1Out = 'amount1Out',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export enum TokenDayDataOrderBy {
  DailyTxns = 'dailyTxns',
  DailyVolumeAvax = 'dailyVolumeAVAX',
  DailyVolumeToken = 'dailyVolumeToken',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
  Id = 'id',
  MaxStored = 'maxStored',
  MostLiquidPairs = 'mostLiquidPairs',
  PriceUsd = 'priceUSD',
  Token = 'token',
  TotalLiquidityAvax = 'totalLiquidityAVAX',
  TotalLiquidityToken = 'totalLiquidityToken',
  TotalLiquidityUsd = 'totalLiquidityUSD'
}

export enum TokenOrderBy {
  AllPairs = 'allPairs',
  Decimals = 'decimals',
  DerivedAvax = 'derivedAVAX',
  Id = 'id',
  MostLiquidPairs = 'mostLiquidPairs',
  Name = 'name',
  Symbol = 'symbol',
  TotalLiquidity = 'totalLiquidity',
  TradeVolume = 'tradeVolume',
  TradeVolumeUsd = 'tradeVolumeUSD',
  TxCount = 'txCount'
}

export enum TransactionOrderBy {
  BlockNumber = 'blockNumber',
  Burns = 'burns',
  Id = 'id',
  Mints = 'mints',
  Swaps = 'swaps',
  Timestamp = 'timestamp'
}

export enum SoulSwapDayDataOrderBy {
  DailyVolumeAvax = 'dailyVolumeAVAX',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
  Id = 'id',
  MaxStored = 'maxStored',
  MostLiquidTokens = 'mostLiquidTokens',
  TotalLiquidityAvax = 'totalLiquidityAVAX',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolumeAvax = 'totalVolumeAVAX',
  TotalVolumeUsd = 'totalVolumeUSD',
  TxCount = 'txCount'
}

export enum SoulSwapFactoryOrderBy {
  Id = 'id',
  MostLiquidTokens = 'mostLiquidTokens',
  PairCount = 'pairCount',
  Pairs = 'pairs',
  TotalLiquidityAvax = 'totalLiquidityAVAX',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolumeAvax = 'totalVolumeAVAX',
  TotalVolumeUsd = 'totalVolumeUSD',
  TxCount = 'txCount'
}

export enum UserOrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions'
}

export interface BlockHeight {
  readonly hash?: Maybe<Scalars['Bytes']>
  readonly number?: Maybe<Scalars['Int']>
}

export interface BundleFiler {
  readonly avaxPrice?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_gt?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_gte?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly avaxPrice_lt?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_lte?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_not?: Maybe<Scalars['BigDecimal']>
  readonly avaxPrice_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
}

export interface BurnFilter {
  readonly amount0?: Maybe<Scalars['BigDecimal']>
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>
  readonly amount0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1?: Maybe<Scalars['BigDecimal']>
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>
  readonly amount1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeTo?: Maybe<Scalars['Bytes']>
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>
  readonly feeTo_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly feeTo_not?: Maybe<Scalars['Bytes']>
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>
  readonly feeTo_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly liquidity?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>
  readonly logIndex_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>
  readonly logIndex_not?: Maybe<Scalars['BigInt']>
  readonly logIndex_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly pair?: Maybe<Scalars['String']>
  readonly pair_contains?: Maybe<Scalars['String']>
  readonly pair_ends_with?: Maybe<Scalars['String']>
  readonly pair_gt?: Maybe<Scalars['String']>
  readonly pair_gte?: Maybe<Scalars['String']>
  readonly pair_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_lt?: Maybe<Scalars['String']>
  readonly pair_lte?: Maybe<Scalars['String']>
  readonly pair_not?: Maybe<Scalars['String']>
  readonly pair_not_contains?: Maybe<Scalars['String']>
  readonly pair_not_ends_with?: Maybe<Scalars['String']>
  readonly pair_not_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_not_starts_with?: Maybe<Scalars['String']>
  readonly pair_starts_with?: Maybe<Scalars['String']>
  readonly sender?: Maybe<Scalars['Bytes']>
  readonly sender_contains?: Maybe<Scalars['Bytes']>
  readonly sender_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly sender_not?: Maybe<Scalars['Bytes']>
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>
  readonly sender_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly timestamp?: Maybe<Scalars['BigInt']>
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>
  readonly timestamp_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>
  readonly timestamp_not?: Maybe<Scalars['BigInt']>
  readonly timestamp_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly to?: Maybe<Scalars['Bytes']>
  readonly to_contains?: Maybe<Scalars['Bytes']>
  readonly to_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly to_not?: Maybe<Scalars['Bytes']>
  readonly to_not_contains?: Maybe<Scalars['Bytes']>
  readonly to_not_in?: Maybe<readonly Scalars['Bytes'][]>
}

export interface LiquidityPositionFilter {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>
  readonly liquidityTokenBalance_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly pair?: Maybe<Scalars['String']>
  readonly pair_contains?: Maybe<Scalars['String']>
  readonly pair_ends_with?: Maybe<Scalars['String']>
  readonly pair_gt?: Maybe<Scalars['String']>
  readonly pair_gte?: Maybe<Scalars['String']>
  readonly pair_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_lt?: Maybe<Scalars['String']>
  readonly pair_lte?: Maybe<Scalars['String']>
  readonly pair_not?: Maybe<Scalars['String']>
  readonly pair_not_contains?: Maybe<Scalars['String']>
  readonly pair_not_ends_with?: Maybe<Scalars['String']>
  readonly pair_not_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_not_starts_with?: Maybe<Scalars['String']>
  readonly pair_starts_with?: Maybe<Scalars['String']>
  readonly poolOwnership?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_gt?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_gte?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly poolOwnership_lt?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_lte?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_not?: Maybe<Scalars['BigDecimal']>
  readonly poolOwnership_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly user?: Maybe<Scalars['String']>
  readonly user_contains?: Maybe<Scalars['String']>
  readonly user_ends_with?: Maybe<Scalars['String']>
  readonly user_gt?: Maybe<Scalars['String']>
  readonly user_gte?: Maybe<Scalars['String']>
  readonly user_in?: Maybe<readonly Scalars['String'][]>
  readonly user_lt?: Maybe<Scalars['String']>
  readonly user_lte?: Maybe<Scalars['String']>
  readonly user_not?: Maybe<Scalars['String']>
  readonly user_not_contains?: Maybe<Scalars['String']>
  readonly user_not_ends_with?: Maybe<Scalars['String']>
  readonly user_not_in?: Maybe<readonly Scalars['String'][]>
  readonly user_not_starts_with?: Maybe<Scalars['String']>
  readonly user_starts_with?: Maybe<Scalars['String']>
}

export interface MintFilter {
  readonly amount0?: Maybe<Scalars['BigDecimal']>
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>
  readonly amount0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1?: Maybe<Scalars['BigDecimal']>
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>
  readonly amount1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>
  readonly feeLiquidity_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly feeTo?: Maybe<Scalars['Bytes']>
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>
  readonly feeTo_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly feeTo_not?: Maybe<Scalars['Bytes']>
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>
  readonly feeTo_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly liquidity?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>
  readonly liquidity_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>
  readonly logIndex_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>
  readonly logIndex_not?: Maybe<Scalars['BigInt']>
  readonly logIndex_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly pair?: Maybe<Scalars['String']>
  readonly pair_contains?: Maybe<Scalars['String']>
  readonly pair_ends_with?: Maybe<Scalars['String']>
  readonly pair_gt?: Maybe<Scalars['String']>
  readonly pair_gte?: Maybe<Scalars['String']>
  readonly pair_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_lt?: Maybe<Scalars['String']>
  readonly pair_lte?: Maybe<Scalars['String']>
  readonly pair_not?: Maybe<Scalars['String']>
  readonly pair_not_contains?: Maybe<Scalars['String']>
  readonly pair_not_ends_with?: Maybe<Scalars['String']>
  readonly pair_not_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_not_starts_with?: Maybe<Scalars['String']>
  readonly pair_starts_with?: Maybe<Scalars['String']>
  readonly sender?: Maybe<Scalars['Bytes']>
  readonly sender_contains?: Maybe<Scalars['Bytes']>
  readonly sender_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly sender_not?: Maybe<Scalars['Bytes']>
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>
  readonly sender_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly timestamp?: Maybe<Scalars['BigInt']>
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>
  readonly timestamp_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>
  readonly timestamp_not?: Maybe<Scalars['BigInt']>
  readonly timestamp_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly to?: Maybe<Scalars['Bytes']>
  readonly to_contains?: Maybe<Scalars['Bytes']>
  readonly to_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly to_not?: Maybe<Scalars['Bytes']>
  readonly to_not_contains?: Maybe<Scalars['Bytes']>
  readonly to_not_in?: Maybe<readonly Scalars['Bytes'][]>
}

export interface PairDayDataFilter {
  readonly dailyTxns?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly dailyVolumeToken0?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeToken1?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly date?: Maybe<Scalars['Int']>
  readonly date_gt?: Maybe<Scalars['Int']>
  readonly date_gte?: Maybe<Scalars['Int']>
  readonly date_in?: Maybe<readonly Scalars['Int'][]>
  readonly date_lt?: Maybe<Scalars['Int']>
  readonly date_lte?: Maybe<Scalars['Int']>
  readonly date_not?: Maybe<Scalars['Int']>
  readonly date_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly pairAddress?: Maybe<Scalars['Bytes']>
  readonly pairAddress_contains?: Maybe<Scalars['Bytes']>
  readonly pairAddress_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly pairAddress_not?: Maybe<Scalars['Bytes']>
  readonly pairAddress_not_contains?: Maybe<Scalars['Bytes']>
  readonly pairAddress_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly reserve0?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve1?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token0?: Maybe<Scalars['String']>
  readonly token0_contains?: Maybe<Scalars['String']>
  readonly token0_ends_with?: Maybe<Scalars['String']>
  readonly token0_gt?: Maybe<Scalars['String']>
  readonly token0_gte?: Maybe<Scalars['String']>
  readonly token0_in?: Maybe<readonly Scalars['String'][]>
  readonly token0_lt?: Maybe<Scalars['String']>
  readonly token0_lte?: Maybe<Scalars['String']>
  readonly token0_not?: Maybe<Scalars['String']>
  readonly token0_not_contains?: Maybe<Scalars['String']>
  readonly token0_not_ends_with?: Maybe<Scalars['String']>
  readonly token0_not_in?: Maybe<readonly Scalars['String'][]>
  readonly token0_not_starts_with?: Maybe<Scalars['String']>
  readonly token0_starts_with?: Maybe<Scalars['String']>
  readonly token1?: Maybe<Scalars['String']>
  readonly token1_contains?: Maybe<Scalars['String']>
  readonly token1_ends_with?: Maybe<Scalars['String']>
  readonly token1_gt?: Maybe<Scalars['String']>
  readonly token1_gte?: Maybe<Scalars['String']>
  readonly token1_in?: Maybe<readonly Scalars['String'][]>
  readonly token1_lt?: Maybe<Scalars['String']>
  readonly token1_lte?: Maybe<Scalars['String']>
  readonly token1_not?: Maybe<Scalars['String']>
  readonly token1_not_contains?: Maybe<Scalars['String']>
  readonly token1_not_ends_with?: Maybe<Scalars['String']>
  readonly token1_not_in?: Maybe<readonly Scalars['String'][]>
  readonly token1_not_starts_with?: Maybe<Scalars['String']>
  readonly token1_starts_with?: Maybe<Scalars['String']>
}

export interface PairFilter {
  readonly createdAtBlockNumber?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>
  readonly createdAtBlockNumber_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly createdAtTimestamp?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_not?: Maybe<Scalars['BigInt']>
  readonly createdAtTimestamp_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly reserve0?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>
  readonly reserve0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve1?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>
  readonly reserve1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveAVAX?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly reserveAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly reserveUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token0?: Maybe<Scalars['String']>
  readonly token0Price?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_gt?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_gte?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token0Price_lt?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_lte?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_not?: Maybe<Scalars['BigDecimal']>
  readonly token0Price_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token0_contains?: Maybe<Scalars['String']>
  readonly token0_ends_with?: Maybe<Scalars['String']>
  readonly token0_gt?: Maybe<Scalars['String']>
  readonly token0_gte?: Maybe<Scalars['String']>
  readonly token0_in?: Maybe<readonly Scalars['String'][]>
  readonly token0_lt?: Maybe<Scalars['String']>
  readonly token0_lte?: Maybe<Scalars['String']>
  readonly token0_not?: Maybe<Scalars['String']>
  readonly token0_not_contains?: Maybe<Scalars['String']>
  readonly token0_not_ends_with?: Maybe<Scalars['String']>
  readonly token0_not_in?: Maybe<readonly Scalars['String'][]>
  readonly token0_not_starts_with?: Maybe<Scalars['String']>
  readonly token0_starts_with?: Maybe<Scalars['String']>
  readonly token1?: Maybe<Scalars['String']>
  readonly token1Price?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_gt?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_gte?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token1Price_lt?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_lte?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_not?: Maybe<Scalars['BigDecimal']>
  readonly token1Price_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token1_contains?: Maybe<Scalars['String']>
  readonly token1_ends_with?: Maybe<Scalars['String']>
  readonly token1_gt?: Maybe<Scalars['String']>
  readonly token1_gte?: Maybe<Scalars['String']>
  readonly token1_in?: Maybe<readonly Scalars['String'][]>
  readonly token1_lt?: Maybe<Scalars['String']>
  readonly token1_lte?: Maybe<Scalars['String']>
  readonly token1_not?: Maybe<Scalars['String']>
  readonly token1_not_contains?: Maybe<Scalars['String']>
  readonly token1_not_ends_with?: Maybe<Scalars['String']>
  readonly token1_not_in?: Maybe<readonly Scalars['String'][]>
  readonly token1_not_starts_with?: Maybe<Scalars['String']>
  readonly token1_starts_with?: Maybe<Scalars['String']>
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>
  readonly totalSupply_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly trackedReserveAVAX?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly trackedReserveAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly trackedReserveAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly txCount?: Maybe<Scalars['BigInt']>
  readonly txCount_gt?: Maybe<Scalars['BigInt']>
  readonly txCount_gte?: Maybe<Scalars['BigInt']>
  readonly txCount_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly txCount_lt?: Maybe<Scalars['BigInt']>
  readonly txCount_lte?: Maybe<Scalars['BigInt']>
  readonly txCount_not?: Maybe<Scalars['BigInt']>
  readonly txCount_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly volumeToken0?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_gt?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_gte?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly volumeToken0_lt?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_lte?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_not?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken0_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly volumeToken1?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_gt?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_gte?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly volumeToken1_lt?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_lte?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_not?: Maybe<Scalars['BigDecimal']>
  readonly volumeToken1_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly volumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly volumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly volumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
}

export interface SwapFilter {
  readonly amount0In?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount0In_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_not?: Maybe<Scalars['BigDecimal']>
  readonly amount0In_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount0Out?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount0Out_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_not?: Maybe<Scalars['BigDecimal']>
  readonly amount0Out_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1In?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1In_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_not?: Maybe<Scalars['BigDecimal']>
  readonly amount1In_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1Out?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_gt?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_gte?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amount1Out_lt?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_lte?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_not?: Maybe<Scalars['BigDecimal']>
  readonly amount1Out_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly amountUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly logIndex?: Maybe<Scalars['BigInt']>
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>
  readonly logIndex_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>
  readonly logIndex_not?: Maybe<Scalars['BigInt']>
  readonly logIndex_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly pair?: Maybe<Scalars['String']>
  readonly pair_contains?: Maybe<Scalars['String']>
  readonly pair_ends_with?: Maybe<Scalars['String']>
  readonly pair_gt?: Maybe<Scalars['String']>
  readonly pair_gte?: Maybe<Scalars['String']>
  readonly pair_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_lt?: Maybe<Scalars['String']>
  readonly pair_lte?: Maybe<Scalars['String']>
  readonly pair_not?: Maybe<Scalars['String']>
  readonly pair_not_contains?: Maybe<Scalars['String']>
  readonly pair_not_ends_with?: Maybe<Scalars['String']>
  readonly pair_not_in?: Maybe<readonly Scalars['String'][]>
  readonly pair_not_starts_with?: Maybe<Scalars['String']>
  readonly pair_starts_with?: Maybe<Scalars['String']>
  readonly sender?: Maybe<Scalars['Bytes']>
  readonly sender_contains?: Maybe<Scalars['Bytes']>
  readonly sender_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly sender_not?: Maybe<Scalars['Bytes']>
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>
  readonly sender_not_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly timestamp?: Maybe<Scalars['BigInt']>
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>
  readonly timestamp_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>
  readonly timestamp_not?: Maybe<Scalars['BigInt']>
  readonly timestamp_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly to?: Maybe<Scalars['Bytes']>
  readonly to_contains?: Maybe<Scalars['Bytes']>
  readonly to_in?: Maybe<readonly Scalars['Bytes'][]>
  readonly to_not?: Maybe<Scalars['Bytes']>
  readonly to_not_contains?: Maybe<Scalars['Bytes']>
  readonly to_not_in?: Maybe<readonly Scalars['Bytes'][]>
}

export interface TokenDayDataFilter {
  readonly dailyTxns?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>
  readonly dailyTxns_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly dailyVolumeAVAX?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeToken?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeToken_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeToken_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly date?: Maybe<Scalars['Int']>
  readonly date_gt?: Maybe<Scalars['Int']>
  readonly date_gte?: Maybe<Scalars['Int']>
  readonly date_in?: Maybe<readonly Scalars['Int'][]>
  readonly date_lt?: Maybe<Scalars['Int']>
  readonly date_lte?: Maybe<Scalars['Int']>
  readonly date_not?: Maybe<Scalars['Int']>
  readonly date_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly maxStored?: Maybe<Scalars['Int']>
  readonly maxStored_gt?: Maybe<Scalars['Int']>
  readonly maxStored_gte?: Maybe<Scalars['Int']>
  readonly maxStored_in?: Maybe<readonly Scalars['Int'][]>
  readonly maxStored_lt?: Maybe<Scalars['Int']>
  readonly maxStored_lte?: Maybe<Scalars['Int']>
  readonly maxStored_not?: Maybe<Scalars['Int']>
  readonly maxStored_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly mostLiquidPairs?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_contains?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_not?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly priceUSD?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly priceUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly priceUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly token?: Maybe<Scalars['String']>
  readonly token_contains?: Maybe<Scalars['String']>
  readonly token_ends_with?: Maybe<Scalars['String']>
  readonly token_gt?: Maybe<Scalars['String']>
  readonly token_gte?: Maybe<Scalars['String']>
  readonly token_in?: Maybe<readonly Scalars['String'][]>
  readonly token_lt?: Maybe<Scalars['String']>
  readonly token_lte?: Maybe<Scalars['String']>
  readonly token_not?: Maybe<Scalars['String']>
  readonly token_not_contains?: Maybe<Scalars['String']>
  readonly token_not_ends_with?: Maybe<Scalars['String']>
  readonly token_not_in?: Maybe<readonly Scalars['String'][]>
  readonly token_not_starts_with?: Maybe<Scalars['String']>
  readonly token_starts_with?: Maybe<Scalars['String']>
  readonly totalLiquidityAVAX?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityToken?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityToken_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityToken_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
}

export interface TokenFilter {
  readonly allPairs?: Maybe<readonly Scalars['String'][]>
  readonly allPairs_contains?: Maybe<readonly Scalars['String'][]>
  readonly allPairs_not?: Maybe<readonly Scalars['String'][]>
  readonly allPairs_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly decimals?: Maybe<Scalars['BigInt']>
  readonly decimals_gt?: Maybe<Scalars['BigInt']>
  readonly decimals_gte?: Maybe<Scalars['BigInt']>
  readonly decimals_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly decimals_lt?: Maybe<Scalars['BigInt']>
  readonly decimals_lte?: Maybe<Scalars['BigInt']>
  readonly decimals_not?: Maybe<Scalars['BigInt']>
  readonly decimals_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly derivedAVAX?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly derivedAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly derivedAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly mostLiquidPairs?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_contains?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_not?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidPairs_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly name?: Maybe<Scalars['String']>
  readonly name_contains?: Maybe<Scalars['String']>
  readonly name_ends_with?: Maybe<Scalars['String']>
  readonly name_gt?: Maybe<Scalars['String']>
  readonly name_gte?: Maybe<Scalars['String']>
  readonly name_in?: Maybe<readonly Scalars['String'][]>
  readonly name_lt?: Maybe<Scalars['String']>
  readonly name_lte?: Maybe<Scalars['String']>
  readonly name_not?: Maybe<Scalars['String']>
  readonly name_not_contains?: Maybe<Scalars['String']>
  readonly name_not_ends_with?: Maybe<Scalars['String']>
  readonly name_not_in?: Maybe<readonly Scalars['String'][]>
  readonly name_not_starts_with?: Maybe<Scalars['String']>
  readonly name_starts_with?: Maybe<Scalars['String']>
  readonly symbol?: Maybe<Scalars['String']>
  readonly symbol_contains?: Maybe<Scalars['String']>
  readonly symbol_ends_with?: Maybe<Scalars['String']>
  readonly symbol_gt?: Maybe<Scalars['String']>
  readonly symbol_gte?: Maybe<Scalars['String']>
  readonly symbol_in?: Maybe<readonly Scalars['String'][]>
  readonly symbol_lt?: Maybe<Scalars['String']>
  readonly symbol_lte?: Maybe<Scalars['String']>
  readonly symbol_not?: Maybe<Scalars['String']>
  readonly symbol_not_contains?: Maybe<Scalars['String']>
  readonly symbol_not_ends_with?: Maybe<Scalars['String']>
  readonly symbol_not_in?: Maybe<readonly Scalars['String'][]>
  readonly symbol_not_starts_with?: Maybe<Scalars['String']>
  readonly symbol_starts_with?: Maybe<Scalars['String']>
  readonly totalLiquidity?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidity_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly tradeVolume?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly tradeVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly tradeVolume_gt?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolume_gte?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolume_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly tradeVolume_lt?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolume_lte?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolume_not?: Maybe<Scalars['BigDecimal']>
  readonly tradeVolume_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly txCount?: Maybe<Scalars['BigInt']>
  readonly txCount_gt?: Maybe<Scalars['BigInt']>
  readonly txCount_gte?: Maybe<Scalars['BigInt']>
  readonly txCount_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly txCount_lt?: Maybe<Scalars['BigInt']>
  readonly txCount_lte?: Maybe<Scalars['BigInt']>
  readonly txCount_not?: Maybe<Scalars['BigInt']>
  readonly txCount_not_in?: Maybe<readonly Scalars['BigInt'][]>
}

export interface TransactionFilter {
  readonly blockNumber?: Maybe<Scalars['BigInt']>
  readonly blockNumber_gt?: Maybe<Scalars['BigInt']>
  readonly blockNumber_gte?: Maybe<Scalars['BigInt']>
  readonly blockNumber_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly blockNumber_lt?: Maybe<Scalars['BigInt']>
  readonly blockNumber_lte?: Maybe<Scalars['BigInt']>
  readonly blockNumber_not?: Maybe<Scalars['BigInt']>
  readonly blockNumber_not_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly burns?: Maybe<readonly Scalars['String'][]>
  readonly burns_contains?: Maybe<readonly Scalars['String'][]>
  readonly burns_not?: Maybe<readonly Scalars['String'][]>
  readonly burns_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly mints?: Maybe<readonly Scalars['String'][]>
  readonly mints_contains?: Maybe<readonly Scalars['String'][]>
  readonly mints_not?: Maybe<readonly Scalars['String'][]>
  readonly mints_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly swaps?: Maybe<readonly Scalars['String'][]>
  readonly swaps_contains?: Maybe<readonly Scalars['String'][]>
  readonly swaps_not?: Maybe<readonly Scalars['String'][]>
  readonly swaps_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly timestamp?: Maybe<Scalars['BigInt']>
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>
  readonly timestamp_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>
  readonly timestamp_not?: Maybe<Scalars['BigInt']>
  readonly timestamp_not_in?: Maybe<readonly Scalars['BigInt'][]>
}

export interface SoulSwapDayDataFilter {
  readonly dailyVolumeAVAX?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly dailyVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly date?: Maybe<Scalars['Int']>
  readonly date_gt?: Maybe<Scalars['Int']>
  readonly date_gte?: Maybe<Scalars['Int']>
  readonly date_in?: Maybe<readonly Scalars['Int'][]>
  readonly date_lt?: Maybe<Scalars['Int']>
  readonly date_lte?: Maybe<Scalars['Int']>
  readonly date_not?: Maybe<Scalars['Int']>
  readonly date_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly maxStored?: Maybe<Scalars['Int']>
  readonly maxStored_gt?: Maybe<Scalars['Int']>
  readonly maxStored_gte?: Maybe<Scalars['Int']>
  readonly maxStored_in?: Maybe<readonly Scalars['Int'][]>
  readonly maxStored_lt?: Maybe<Scalars['Int']>
  readonly maxStored_lte?: Maybe<Scalars['Int']>
  readonly maxStored_not?: Maybe<Scalars['Int']>
  readonly maxStored_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly mostLiquidTokens?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_contains?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_not?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly totalLiquidityAVAX?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeAVAX?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly txCount?: Maybe<Scalars['BigInt']>
  readonly txCount_gt?: Maybe<Scalars['BigInt']>
  readonly txCount_gte?: Maybe<Scalars['BigInt']>
  readonly txCount_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly txCount_lt?: Maybe<Scalars['BigInt']>
  readonly txCount_lte?: Maybe<Scalars['BigInt']>
  readonly txCount_not?: Maybe<Scalars['BigInt']>
  readonly txCount_not_in?: Maybe<readonly Scalars['BigInt'][]>
}

export interface SoulSwapFactoryFilter {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
  readonly mostLiquidTokens?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_contains?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_not?: Maybe<readonly Scalars['String'][]>
  readonly mostLiquidTokens_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly pairCount?: Maybe<Scalars['Int']>
  readonly pairCount_gt?: Maybe<Scalars['Int']>
  readonly pairCount_gte?: Maybe<Scalars['Int']>
  readonly pairCount_in?: Maybe<readonly Scalars['Int'][]>
  readonly pairCount_lt?: Maybe<Scalars['Int']>
  readonly pairCount_lte?: Maybe<Scalars['Int']>
  readonly pairCount_not?: Maybe<Scalars['Int']>
  readonly pairCount_not_in?: Maybe<readonly Scalars['Int'][]>
  readonly pairs?: Maybe<readonly Scalars['String'][]>
  readonly pairs_contains?: Maybe<readonly Scalars['String'][]>
  readonly pairs_not?: Maybe<readonly Scalars['String'][]>
  readonly pairs_not_contains?: Maybe<readonly Scalars['String'][]>
  readonly totalLiquidityAVAX?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly totalLiquidityUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeAVAX?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeAVAX_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_not?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeAVAX_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>
  readonly totalVolumeUSD_not_in?: Maybe<readonly Scalars['BigDecimal'][]>
  readonly txCount?: Maybe<Scalars['BigInt']>
  readonly txCount_gt?: Maybe<Scalars['BigInt']>
  readonly txCount_gte?: Maybe<Scalars['BigInt']>
  readonly txCount_in?: Maybe<readonly Scalars['BigInt'][]>
  readonly txCount_lt?: Maybe<Scalars['BigInt']>
  readonly txCount_lte?: Maybe<Scalars['BigInt']>
  readonly txCount_not?: Maybe<Scalars['BigInt']>
  readonly txCount_not_in?: Maybe<readonly Scalars['BigInt'][]>
}

export interface UserFilter {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<readonly Scalars['ID'][]>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_not_in?: Maybe<readonly Scalars['ID'][]>
}

export type PairsVolumeQueryVariables = Exact<{
  limit: Scalars['Int']
  pairIds: readonly Scalars['ID'][]
}>

export type PairsVolumeQuery = { readonly __typename?: 'Query' } & {
  readonly pairVolumes: readonly ({ readonly __typename?: 'Pair' } & Pick<
    Pair,
    'id' | 'volumeToken0' | 'volumeToken1'
  >)[]
}

export type TokenInfoFragment = { readonly __typename?: 'Token' } & Pick<Token, 'id' | 'symbol' | 'name'>

export type TopPairsQueryVariables = Exact<{
  limit: Scalars['Int']
  excludeTokenIds: readonly Scalars['String'][]
}>

export type TopPairsQuery = { readonly __typename?: 'Query' } & {
  readonly pairs: readonly ({ readonly __typename?: 'Pair' } & Pick<
    Pair,
    'id' | 'reserve0' | 'reserve1' | 'volumeToken0' | 'volumeToken1' | 'reserveUSD'
  > & {
      readonly token0: { readonly __typename?: 'Token' } & TokenInfoFragment
      readonly token1: { readonly __typename?: 'Token' } & TokenInfoFragment
    })[]
}

export type PairReservesQueryVariables = Exact<{
  token0: Scalars['String']
  token1: Scalars['String']
}>

export type PairReservesQuery = { readonly __typename?: 'Query' } & {
  readonly pairs: readonly ({ readonly __typename?: 'Pair' } & Pick<Pair, 'reserve0' | 'reserve1'>)[]
}

export type SwapsByPairQueryVariables = Exact<{
  skip: Scalars['Int']
  timestamp: Scalars['BigInt']
  pairAddress: Scalars['String']
}>

export type SwapsByPairQuery = { readonly __typename?: 'Query' } & {
  readonly swaps: readonly ({ readonly __typename?: 'Swap' } & Pick<
    Swap,
    'id' | 'timestamp' | 'amount0In' | 'amount0Out' | 'amount1In' | 'amount1Out'
  >)[]
}

export type SwapsByTokensQueryVariables = Exact<{
  token0: Scalars['String']
  token1: Scalars['String']
}>

export type SwapsByTokensQuery = { readonly __typename?: 'Query' } & {
  readonly pairs: readonly ({ readonly __typename?: 'Pair' } & Pick<Pair, 'id'>)[]
}

export type TotalLiquidityQueryVariables = Exact<{
  totalLiquidityUSD: Scalars['String']
}>

export type TotalLiquidityQuery = { readonly __typename?: 'Query' } & {
  readonly soulswapFactories: readonly ({ readonly __typename?: 'SoulSwapFactory' } & Pick<
    SoulSwapFactory,
    'totalLiquidityUSD'
  >)[]
}
