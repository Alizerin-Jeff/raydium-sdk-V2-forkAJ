import { TransactionInstruction } from '@solana/web3.js';
import { RouteSwapInstructionParams, RouteSwapInFixedInInstructionParams, RouteSwapOutFixedInInstructionParams } from './type.js';
import '../../bignumber-cbebe552.js';
import 'bn.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../token/type.js';
import '../../common/logger.js';
import 'pino';
import '../liquidity/type.js';
import '../../type-665453b6.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
import '../account/types.js';
import '../account/layout.js';
import '../../common/accountInfo.js';

declare function makeRouteSwapInstruction(params: RouteSwapInstructionParams): TransactionInstruction[];
declare function makeSwapInFixedInInstruction({ fromPoolKeys, toPoolKeys, userKeys, amountIn, amountOut, }: RouteSwapInFixedInInstructionParams): TransactionInstruction;
declare function makeSwapOutFixedInInstruction({ fromPoolKeys, toPoolKeys, userKeys, }: RouteSwapOutFixedInInstructionParams): TransactionInstruction;

export { makeRouteSwapInstruction, makeSwapInFixedInInstruction, makeSwapOutFixedInInstruction };