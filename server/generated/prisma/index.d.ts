
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ativo
 * 
 */
export type Ativo = $Result.DefaultSelection<Prisma.$AtivoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model StatusAtivo
 * 
 */
export type StatusAtivo = $Result.DefaultSelection<Prisma.$StatusAtivoPayload>
/**
 * Model StatusManutencao
 * 
 */
export type StatusManutencao = $Result.DefaultSelection<Prisma.$StatusManutencaoPayload>
/**
 * Model Manutencao
 * 
 */
export type Manutencao = $Result.DefaultSelection<Prisma.$ManutencaoPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ativos
 * const ativos = await prisma.ativo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ativos
   * const ativos = await prisma.ativo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ativo`: Exposes CRUD operations for the **Ativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ativos
    * const ativos = await prisma.ativo.findMany()
    * ```
    */
  get ativo(): Prisma.AtivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusAtivo`: Exposes CRUD operations for the **StatusAtivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusAtivos
    * const statusAtivos = await prisma.statusAtivo.findMany()
    * ```
    */
  get statusAtivo(): Prisma.StatusAtivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusManutencao`: Exposes CRUD operations for the **StatusManutencao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusManutencaos
    * const statusManutencaos = await prisma.statusManutencao.findMany()
    * ```
    */
  get statusManutencao(): Prisma.StatusManutencaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manutencao`: Exposes CRUD operations for the **Manutencao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manutencaos
    * const manutencaos = await prisma.manutencao.findMany()
    * ```
    */
  get manutencao(): Prisma.ManutencaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ativo: 'Ativo',
    Usuario: 'Usuario',
    Cargo: 'Cargo',
    StatusAtivo: 'StatusAtivo',
    StatusManutencao: 'StatusManutencao',
    Manutencao: 'Manutencao',
    Localizacao: 'Localizacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ativo" | "usuario" | "cargo" | "statusAtivo" | "statusManutencao" | "manutencao" | "localizacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ativo: {
        payload: Prisma.$AtivoPayload<ExtArgs>
        fields: Prisma.AtivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findFirst: {
            args: Prisma.AtivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findMany: {
            args: Prisma.AtivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>[]
          }
          create: {
            args: Prisma.AtivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          createMany: {
            args: Prisma.AtivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          update: {
            args: Prisma.AtivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          deleteMany: {
            args: Prisma.AtivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          aggregate: {
            args: Prisma.AtivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtivo>
          }
          groupBy: {
            args: Prisma.AtivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtivoCountArgs<ExtArgs>
            result: $Utils.Optional<AtivoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      StatusAtivo: {
        payload: Prisma.$StatusAtivoPayload<ExtArgs>
        fields: Prisma.StatusAtivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusAtivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusAtivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          findFirst: {
            args: Prisma.StatusAtivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusAtivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          findMany: {
            args: Prisma.StatusAtivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>[]
          }
          create: {
            args: Prisma.StatusAtivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          createMany: {
            args: Prisma.StatusAtivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusAtivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          update: {
            args: Prisma.StatusAtivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          deleteMany: {
            args: Prisma.StatusAtivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusAtivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusAtivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtivoPayload>
          }
          aggregate: {
            args: Prisma.StatusAtivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusAtivo>
          }
          groupBy: {
            args: Prisma.StatusAtivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusAtivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusAtivoCountArgs<ExtArgs>
            result: $Utils.Optional<StatusAtivoCountAggregateOutputType> | number
          }
        }
      }
      StatusManutencao: {
        payload: Prisma.$StatusManutencaoPayload<ExtArgs>
        fields: Prisma.StatusManutencaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusManutencaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusManutencaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          findFirst: {
            args: Prisma.StatusManutencaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusManutencaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          findMany: {
            args: Prisma.StatusManutencaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>[]
          }
          create: {
            args: Prisma.StatusManutencaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          createMany: {
            args: Prisma.StatusManutencaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusManutencaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          update: {
            args: Prisma.StatusManutencaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          deleteMany: {
            args: Prisma.StatusManutencaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusManutencaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusManutencaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusManutencaoPayload>
          }
          aggregate: {
            args: Prisma.StatusManutencaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusManutencao>
          }
          groupBy: {
            args: Prisma.StatusManutencaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusManutencaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusManutencaoCountArgs<ExtArgs>
            result: $Utils.Optional<StatusManutencaoCountAggregateOutputType> | number
          }
        }
      }
      Manutencao: {
        payload: Prisma.$ManutencaoPayload<ExtArgs>
        fields: Prisma.ManutencaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManutencaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManutencaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          findFirst: {
            args: Prisma.ManutencaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManutencaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          findMany: {
            args: Prisma.ManutencaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>[]
          }
          create: {
            args: Prisma.ManutencaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          createMany: {
            args: Prisma.ManutencaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManutencaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          update: {
            args: Prisma.ManutencaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          deleteMany: {
            args: Prisma.ManutencaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManutencaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManutencaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManutencaoPayload>
          }
          aggregate: {
            args: Prisma.ManutencaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManutencao>
          }
          groupBy: {
            args: Prisma.ManutencaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManutencaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManutencaoCountArgs<ExtArgs>
            result: $Utils.Optional<ManutencaoCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ativo?: AtivoOmit
    usuario?: UsuarioOmit
    cargo?: CargoOmit
    statusAtivo?: StatusAtivoOmit
    statusManutencao?: StatusManutencaoOmit
    manutencao?: ManutencaoOmit
    localizacao?: LocalizacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    ativos: number
    manutencoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | UsuarioCountOutputTypeCountAtivosArgs
    manutencoes?: boolean | UsuarioCountOutputTypeCountManutencoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountManutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManutencaoWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    usuarios: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | CargoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type StatusAtivoCountOutputType
   */

  export type StatusAtivoCountOutputType = {
    ativos: number
  }

  export type StatusAtivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | StatusAtivoCountOutputTypeCountAtivosArgs
  }

  // Custom InputTypes
  /**
   * StatusAtivoCountOutputType without action
   */
  export type StatusAtivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivoCountOutputType
     */
    select?: StatusAtivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusAtivoCountOutputType without action
   */
  export type StatusAtivoCountOutputTypeCountAtivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
  }


  /**
   * Count Type StatusManutencaoCountOutputType
   */

  export type StatusManutencaoCountOutputType = {
    manutencoes: number
  }

  export type StatusManutencaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manutencoes?: boolean | StatusManutencaoCountOutputTypeCountManutencoesArgs
  }

  // Custom InputTypes
  /**
   * StatusManutencaoCountOutputType without action
   */
  export type StatusManutencaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencaoCountOutputType
     */
    select?: StatusManutencaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusManutencaoCountOutputType without action
   */
  export type StatusManutencaoCountOutputTypeCountManutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManutencaoWhereInput
  }


  /**
   * Count Type LocalizacaoCountOutputType
   */

  export type LocalizacaoCountOutputType = {
    ativos: number
  }

  export type LocalizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | LocalizacaoCountOutputTypeCountAtivosArgs
  }

  // Custom InputTypes
  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacaoCountOutputType
     */
    select?: LocalizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeCountAtivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ativo
   */

  export type AggregateAtivo = {
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  export type AtivoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    qtdReparos: number | null
    chaveStatus: number | null
    chaveLocalizacao: number | null
  }

  export type AtivoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    qtdReparos: number | null
    chaveStatus: number | null
    chaveLocalizacao: number | null
  }

  export type AtivoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    codInterno: string | null
    descricao: string | null
    valor: Decimal | null
    dataAquisicao: Date | null
    qtdReparos: number | null
    chaveStatus: number | null
    chaveResponsavel: string | null
    chaveLocalizacao: number | null
  }

  export type AtivoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    codInterno: string | null
    descricao: string | null
    valor: Decimal | null
    dataAquisicao: Date | null
    qtdReparos: number | null
    chaveStatus: number | null
    chaveResponsavel: string | null
    chaveLocalizacao: number | null
  }

  export type AtivoCountAggregateOutputType = {
    id: number
    nome: number
    codInterno: number
    descricao: number
    valor: number
    dataAquisicao: number
    qtdReparos: number
    chaveStatus: number
    chaveResponsavel: number
    chaveLocalizacao: number
    _all: number
  }


  export type AtivoAvgAggregateInputType = {
    id?: true
    valor?: true
    qtdReparos?: true
    chaveStatus?: true
    chaveLocalizacao?: true
  }

  export type AtivoSumAggregateInputType = {
    id?: true
    valor?: true
    qtdReparos?: true
    chaveStatus?: true
    chaveLocalizacao?: true
  }

  export type AtivoMinAggregateInputType = {
    id?: true
    nome?: true
    codInterno?: true
    descricao?: true
    valor?: true
    dataAquisicao?: true
    qtdReparos?: true
    chaveStatus?: true
    chaveResponsavel?: true
    chaveLocalizacao?: true
  }

  export type AtivoMaxAggregateInputType = {
    id?: true
    nome?: true
    codInterno?: true
    descricao?: true
    valor?: true
    dataAquisicao?: true
    qtdReparos?: true
    chaveStatus?: true
    chaveResponsavel?: true
    chaveLocalizacao?: true
  }

  export type AtivoCountAggregateInputType = {
    id?: true
    nome?: true
    codInterno?: true
    descricao?: true
    valor?: true
    dataAquisicao?: true
    qtdReparos?: true
    chaveStatus?: true
    chaveResponsavel?: true
    chaveLocalizacao?: true
    _all?: true
  }

  export type AtivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativo to aggregate.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ativos
    **/
    _count?: true | AtivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtivoMaxAggregateInputType
  }

  export type GetAtivoAggregateType<T extends AtivoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtivo[P]>
      : GetScalarType<T[P], AggregateAtivo[P]>
  }




  export type AtivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithAggregationInput | AtivoOrderByWithAggregationInput[]
    by: AtivoScalarFieldEnum[] | AtivoScalarFieldEnum
    having?: AtivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtivoCountAggregateInputType | true
    _avg?: AtivoAvgAggregateInputType
    _sum?: AtivoSumAggregateInputType
    _min?: AtivoMinAggregateInputType
    _max?: AtivoMaxAggregateInputType
  }

  export type AtivoGroupByOutputType = {
    id: number
    nome: string
    codInterno: string | null
    descricao: string | null
    valor: Decimal
    dataAquisicao: Date
    qtdReparos: number
    chaveStatus: number | null
    chaveResponsavel: string | null
    chaveLocalizacao: number | null
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  type GetAtivoGroupByPayload<T extends AtivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtivoGroupByOutputType[P]>
            : GetScalarType<T[P], AtivoGroupByOutputType[P]>
        }
      >
    >


  export type AtivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codInterno?: boolean
    descricao?: boolean
    valor?: boolean
    dataAquisicao?: boolean
    qtdReparos?: boolean
    chaveStatus?: boolean
    chaveResponsavel?: boolean
    chaveLocalizacao?: boolean
    status?: boolean | Ativo$statusArgs<ExtArgs>
    responsavel?: boolean | Ativo$responsavelArgs<ExtArgs>
    localizacao?: boolean | Ativo$localizacaoArgs<ExtArgs>
  }, ExtArgs["result"]["ativo"]>



  export type AtivoSelectScalar = {
    id?: boolean
    nome?: boolean
    codInterno?: boolean
    descricao?: boolean
    valor?: boolean
    dataAquisicao?: boolean
    qtdReparos?: boolean
    chaveStatus?: boolean
    chaveResponsavel?: boolean
    chaveLocalizacao?: boolean
  }

  export type AtivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codInterno" | "descricao" | "valor" | "dataAquisicao" | "qtdReparos" | "chaveStatus" | "chaveResponsavel" | "chaveLocalizacao", ExtArgs["result"]["ativo"]>
  export type AtivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | Ativo$statusArgs<ExtArgs>
    responsavel?: boolean | Ativo$responsavelArgs<ExtArgs>
    localizacao?: boolean | Ativo$localizacaoArgs<ExtArgs>
  }

  export type $AtivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ativo"
    objects: {
      status: Prisma.$StatusAtivoPayload<ExtArgs> | null
      responsavel: Prisma.$UsuarioPayload<ExtArgs> | null
      localizacao: Prisma.$LocalizacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      codInterno: string | null
      descricao: string | null
      valor: Prisma.Decimal
      dataAquisicao: Date
      qtdReparos: number
      chaveStatus: number | null
      chaveResponsavel: string | null
      chaveLocalizacao: number | null
    }, ExtArgs["result"]["ativo"]>
    composites: {}
  }

  type AtivoGetPayload<S extends boolean | null | undefined | AtivoDefaultArgs> = $Result.GetResult<Prisma.$AtivoPayload, S>

  type AtivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtivoCountAggregateInputType | true
    }

  export interface AtivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ativo'], meta: { name: 'Ativo' } }
    /**
     * Find zero or one Ativo that matches the filter.
     * @param {AtivoFindUniqueArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtivoFindUniqueArgs>(args: SelectSubset<T, AtivoFindUniqueArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtivoFindUniqueOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtivoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtivoFindFirstArgs>(args?: SelectSubset<T, AtivoFindFirstArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtivoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ativos
     * const ativos = await prisma.ativo.findMany()
     * 
     * // Get first 10 Ativos
     * const ativos = await prisma.ativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ativoWithIdOnly = await prisma.ativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtivoFindManyArgs>(args?: SelectSubset<T, AtivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ativo.
     * @param {AtivoCreateArgs} args - Arguments to create a Ativo.
     * @example
     * // Create one Ativo
     * const Ativo = await prisma.ativo.create({
     *   data: {
     *     // ... data to create a Ativo
     *   }
     * })
     * 
     */
    create<T extends AtivoCreateArgs>(args: SelectSubset<T, AtivoCreateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ativos.
     * @param {AtivoCreateManyArgs} args - Arguments to create many Ativos.
     * @example
     * // Create many Ativos
     * const ativo = await prisma.ativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtivoCreateManyArgs>(args?: SelectSubset<T, AtivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ativo.
     * @param {AtivoDeleteArgs} args - Arguments to delete one Ativo.
     * @example
     * // Delete one Ativo
     * const Ativo = await prisma.ativo.delete({
     *   where: {
     *     // ... filter to delete one Ativo
     *   }
     * })
     * 
     */
    delete<T extends AtivoDeleteArgs>(args: SelectSubset<T, AtivoDeleteArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ativo.
     * @param {AtivoUpdateArgs} args - Arguments to update one Ativo.
     * @example
     * // Update one Ativo
     * const ativo = await prisma.ativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtivoUpdateArgs>(args: SelectSubset<T, AtivoUpdateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ativos.
     * @param {AtivoDeleteManyArgs} args - Arguments to filter Ativos to delete.
     * @example
     * // Delete a few Ativos
     * const { count } = await prisma.ativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtivoDeleteManyArgs>(args?: SelectSubset<T, AtivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ativos
     * const ativo = await prisma.ativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtivoUpdateManyArgs>(args: SelectSubset<T, AtivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ativo.
     * @param {AtivoUpsertArgs} args - Arguments to update or create a Ativo.
     * @example
     * // Update or create a Ativo
     * const ativo = await prisma.ativo.upsert({
     *   create: {
     *     // ... data to create a Ativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ativo we want to update
     *   }
     * })
     */
    upsert<T extends AtivoUpsertArgs>(args: SelectSubset<T, AtivoUpsertArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoCountArgs} args - Arguments to filter Ativos to count.
     * @example
     * // Count the number of Ativos
     * const count = await prisma.ativo.count({
     *   where: {
     *     // ... the filter for the Ativos we want to count
     *   }
     * })
    **/
    count<T extends AtivoCountArgs>(
      args?: Subset<T, AtivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtivoAggregateArgs>(args: Subset<T, AtivoAggregateArgs>): Prisma.PrismaPromise<GetAtivoAggregateType<T>>

    /**
     * Group by Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtivoGroupByArgs['orderBy'] }
        : { orderBy?: AtivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ativo model
   */
  readonly fields: AtivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends Ativo$statusArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$statusArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends Ativo$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$responsavelArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    localizacao<T extends Ativo$localizacaoArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$localizacaoArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ativo model
   */
  interface AtivoFieldRefs {
    readonly id: FieldRef<"Ativo", 'Int'>
    readonly nome: FieldRef<"Ativo", 'String'>
    readonly codInterno: FieldRef<"Ativo", 'String'>
    readonly descricao: FieldRef<"Ativo", 'String'>
    readonly valor: FieldRef<"Ativo", 'Decimal'>
    readonly dataAquisicao: FieldRef<"Ativo", 'DateTime'>
    readonly qtdReparos: FieldRef<"Ativo", 'Int'>
    readonly chaveStatus: FieldRef<"Ativo", 'Int'>
    readonly chaveResponsavel: FieldRef<"Ativo", 'String'>
    readonly chaveLocalizacao: FieldRef<"Ativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ativo findUnique
   */
  export type AtivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findUniqueOrThrow
   */
  export type AtivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findFirst
   */
  export type AtivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findFirstOrThrow
   */
  export type AtivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findMany
   */
  export type AtivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativos to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo create
   */
  export type AtivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ativo.
     */
    data: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
  }

  /**
   * Ativo createMany
   */
  export type AtivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ativos.
     */
    data: AtivoCreateManyInput | AtivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ativo update
   */
  export type AtivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ativo.
     */
    data: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
    /**
     * Choose, which Ativo to update.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo updateMany
   */
  export type AtivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ativos.
     */
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyInput>
    /**
     * Filter which Ativos to update
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to update.
     */
    limit?: number
  }

  /**
   * Ativo upsert
   */
  export type AtivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ativo to update in case it exists.
     */
    where: AtivoWhereUniqueInput
    /**
     * In case the Ativo found by the `where` argument doesn't exist, create a new Ativo with this data.
     */
    create: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
    /**
     * In case the Ativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
  }

  /**
   * Ativo delete
   */
  export type AtivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter which Ativo to delete.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo deleteMany
   */
  export type AtivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativos to delete
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to delete.
     */
    limit?: number
  }

  /**
   * Ativo.status
   */
  export type Ativo$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    where?: StatusAtivoWhereInput
  }

  /**
   * Ativo.responsavel
   */
  export type Ativo$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Ativo.localizacao
   */
  export type Ativo$localizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
  }

  /**
   * Ativo without action
   */
  export type AtivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    chaveCargo: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    chaveCargo: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    login: string | null
    senha: string | null
    chaveCargo: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    login: string | null
    senha: string | null
    chaveCargo: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    login: number
    senha: number
    chaveCargo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    chaveCargo?: true
  }

  export type UsuarioSumAggregateInputType = {
    chaveCargo?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    login?: true
    senha?: true
    chaveCargo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    login?: true
    senha?: true
    chaveCargo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    login?: true
    senha?: true
    chaveCargo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    login: string
    senha: string
    chaveCargo: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    login?: boolean
    senha?: boolean
    chaveCargo?: boolean
    cargo?: boolean | Usuario$cargoArgs<ExtArgs>
    ativos?: boolean | Usuario$ativosArgs<ExtArgs>
    manutencoes?: boolean | Usuario$manutencoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    login?: boolean
    senha?: boolean
    chaveCargo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "login" | "senha" | "chaveCargo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | Usuario$cargoArgs<ExtArgs>
    ativos?: boolean | Usuario$ativosArgs<ExtArgs>
    manutencoes?: boolean | Usuario$manutencoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      cargo: Prisma.$CargoPayload<ExtArgs> | null
      ativos: Prisma.$AtivoPayload<ExtArgs>[]
      manutencoes: Prisma.$ManutencaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      login: string
      senha: string
      chaveCargo: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargo<T extends Usuario$cargoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cargoArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ativos<T extends Usuario$ativosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manutencoes<T extends Usuario$manutencoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$manutencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly login: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly chaveCargo: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.cargo
   */
  export type Usuario$cargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    where?: CargoWhereInput
  }

  /**
   * Usuario.ativos
   */
  export type Usuario$ativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    cursor?: AtivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Usuario.manutencoes
   */
  export type Usuario$manutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    where?: ManutencaoWhereInput
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    cursor?: ManutencaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    id: number | null
  }

  export type CargoSumAggregateOutputType = {
    id: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CargoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    id?: true
  }

  export type CargoSumAggregateInputType = {
    id?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: number
    nome: string
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarios?: boolean | Cargo$usuariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>



  export type CargoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Cargo$usuariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Cargo$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly id: FieldRef<"Cargo", 'Int'>
    readonly nome: FieldRef<"Cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.usuarios
   */
  export type Cargo$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model StatusAtivo
   */

  export type AggregateStatusAtivo = {
    _count: StatusAtivoCountAggregateOutputType | null
    _avg: StatusAtivoAvgAggregateOutputType | null
    _sum: StatusAtivoSumAggregateOutputType | null
    _min: StatusAtivoMinAggregateOutputType | null
    _max: StatusAtivoMaxAggregateOutputType | null
  }

  export type StatusAtivoAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusAtivoSumAggregateOutputType = {
    id: number | null
  }

  export type StatusAtivoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type StatusAtivoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type StatusAtivoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type StatusAtivoAvgAggregateInputType = {
    id?: true
  }

  export type StatusAtivoSumAggregateInputType = {
    id?: true
  }

  export type StatusAtivoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type StatusAtivoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type StatusAtivoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type StatusAtivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusAtivo to aggregate.
     */
    where?: StatusAtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtivos to fetch.
     */
    orderBy?: StatusAtivoOrderByWithRelationInput | StatusAtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusAtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusAtivos
    **/
    _count?: true | StatusAtivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAtivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusAtivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusAtivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusAtivoMaxAggregateInputType
  }

  export type GetStatusAtivoAggregateType<T extends StatusAtivoAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusAtivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusAtivo[P]>
      : GetScalarType<T[P], AggregateStatusAtivo[P]>
  }




  export type StatusAtivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusAtivoWhereInput
    orderBy?: StatusAtivoOrderByWithAggregationInput | StatusAtivoOrderByWithAggregationInput[]
    by: StatusAtivoScalarFieldEnum[] | StatusAtivoScalarFieldEnum
    having?: StatusAtivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusAtivoCountAggregateInputType | true
    _avg?: StatusAtivoAvgAggregateInputType
    _sum?: StatusAtivoSumAggregateInputType
    _min?: StatusAtivoMinAggregateInputType
    _max?: StatusAtivoMaxAggregateInputType
  }

  export type StatusAtivoGroupByOutputType = {
    id: number
    nome: string
    _count: StatusAtivoCountAggregateOutputType | null
    _avg: StatusAtivoAvgAggregateOutputType | null
    _sum: StatusAtivoSumAggregateOutputType | null
    _min: StatusAtivoMinAggregateOutputType | null
    _max: StatusAtivoMaxAggregateOutputType | null
  }

  type GetStatusAtivoGroupByPayload<T extends StatusAtivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusAtivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusAtivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusAtivoGroupByOutputType[P]>
            : GetScalarType<T[P], StatusAtivoGroupByOutputType[P]>
        }
      >
    >


  export type StatusAtivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativos?: boolean | StatusAtivo$ativosArgs<ExtArgs>
    _count?: boolean | StatusAtivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusAtivo"]>



  export type StatusAtivoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type StatusAtivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["statusAtivo"]>
  export type StatusAtivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | StatusAtivo$ativosArgs<ExtArgs>
    _count?: boolean | StatusAtivoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatusAtivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusAtivo"
    objects: {
      ativos: Prisma.$AtivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["statusAtivo"]>
    composites: {}
  }

  type StatusAtivoGetPayload<S extends boolean | null | undefined | StatusAtivoDefaultArgs> = $Result.GetResult<Prisma.$StatusAtivoPayload, S>

  type StatusAtivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusAtivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusAtivoCountAggregateInputType | true
    }

  export interface StatusAtivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusAtivo'], meta: { name: 'StatusAtivo' } }
    /**
     * Find zero or one StatusAtivo that matches the filter.
     * @param {StatusAtivoFindUniqueArgs} args - Arguments to find a StatusAtivo
     * @example
     * // Get one StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusAtivoFindUniqueArgs>(args: SelectSubset<T, StatusAtivoFindUniqueArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusAtivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusAtivoFindUniqueOrThrowArgs} args - Arguments to find a StatusAtivo
     * @example
     * // Get one StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusAtivoFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusAtivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusAtivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoFindFirstArgs} args - Arguments to find a StatusAtivo
     * @example
     * // Get one StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusAtivoFindFirstArgs>(args?: SelectSubset<T, StatusAtivoFindFirstArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusAtivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoFindFirstOrThrowArgs} args - Arguments to find a StatusAtivo
     * @example
     * // Get one StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusAtivoFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusAtivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusAtivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusAtivos
     * const statusAtivos = await prisma.statusAtivo.findMany()
     * 
     * // Get first 10 StatusAtivos
     * const statusAtivos = await prisma.statusAtivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusAtivoWithIdOnly = await prisma.statusAtivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusAtivoFindManyArgs>(args?: SelectSubset<T, StatusAtivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusAtivo.
     * @param {StatusAtivoCreateArgs} args - Arguments to create a StatusAtivo.
     * @example
     * // Create one StatusAtivo
     * const StatusAtivo = await prisma.statusAtivo.create({
     *   data: {
     *     // ... data to create a StatusAtivo
     *   }
     * })
     * 
     */
    create<T extends StatusAtivoCreateArgs>(args: SelectSubset<T, StatusAtivoCreateArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusAtivos.
     * @param {StatusAtivoCreateManyArgs} args - Arguments to create many StatusAtivos.
     * @example
     * // Create many StatusAtivos
     * const statusAtivo = await prisma.statusAtivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusAtivoCreateManyArgs>(args?: SelectSubset<T, StatusAtivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusAtivo.
     * @param {StatusAtivoDeleteArgs} args - Arguments to delete one StatusAtivo.
     * @example
     * // Delete one StatusAtivo
     * const StatusAtivo = await prisma.statusAtivo.delete({
     *   where: {
     *     // ... filter to delete one StatusAtivo
     *   }
     * })
     * 
     */
    delete<T extends StatusAtivoDeleteArgs>(args: SelectSubset<T, StatusAtivoDeleteArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusAtivo.
     * @param {StatusAtivoUpdateArgs} args - Arguments to update one StatusAtivo.
     * @example
     * // Update one StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusAtivoUpdateArgs>(args: SelectSubset<T, StatusAtivoUpdateArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusAtivos.
     * @param {StatusAtivoDeleteManyArgs} args - Arguments to filter StatusAtivos to delete.
     * @example
     * // Delete a few StatusAtivos
     * const { count } = await prisma.statusAtivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusAtivoDeleteManyArgs>(args?: SelectSubset<T, StatusAtivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusAtivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusAtivos
     * const statusAtivo = await prisma.statusAtivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusAtivoUpdateManyArgs>(args: SelectSubset<T, StatusAtivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusAtivo.
     * @param {StatusAtivoUpsertArgs} args - Arguments to update or create a StatusAtivo.
     * @example
     * // Update or create a StatusAtivo
     * const statusAtivo = await prisma.statusAtivo.upsert({
     *   create: {
     *     // ... data to create a StatusAtivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusAtivo we want to update
     *   }
     * })
     */
    upsert<T extends StatusAtivoUpsertArgs>(args: SelectSubset<T, StatusAtivoUpsertArgs<ExtArgs>>): Prisma__StatusAtivoClient<$Result.GetResult<Prisma.$StatusAtivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusAtivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoCountArgs} args - Arguments to filter StatusAtivos to count.
     * @example
     * // Count the number of StatusAtivos
     * const count = await prisma.statusAtivo.count({
     *   where: {
     *     // ... the filter for the StatusAtivos we want to count
     *   }
     * })
    **/
    count<T extends StatusAtivoCountArgs>(
      args?: Subset<T, StatusAtivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusAtivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusAtivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAtivoAggregateArgs>(args: Subset<T, StatusAtivoAggregateArgs>): Prisma.PrismaPromise<GetStatusAtivoAggregateType<T>>

    /**
     * Group by StatusAtivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusAtivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusAtivoGroupByArgs['orderBy'] }
        : { orderBy?: StatusAtivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusAtivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusAtivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusAtivo model
   */
  readonly fields: StatusAtivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusAtivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusAtivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativos<T extends StatusAtivo$ativosArgs<ExtArgs> = {}>(args?: Subset<T, StatusAtivo$ativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusAtivo model
   */
  interface StatusAtivoFieldRefs {
    readonly id: FieldRef<"StatusAtivo", 'Int'>
    readonly nome: FieldRef<"StatusAtivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusAtivo findUnique
   */
  export type StatusAtivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtivo to fetch.
     */
    where: StatusAtivoWhereUniqueInput
  }

  /**
   * StatusAtivo findUniqueOrThrow
   */
  export type StatusAtivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtivo to fetch.
     */
    where: StatusAtivoWhereUniqueInput
  }

  /**
   * StatusAtivo findFirst
   */
  export type StatusAtivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtivo to fetch.
     */
    where?: StatusAtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtivos to fetch.
     */
    orderBy?: StatusAtivoOrderByWithRelationInput | StatusAtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusAtivos.
     */
    cursor?: StatusAtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusAtivos.
     */
    distinct?: StatusAtivoScalarFieldEnum | StatusAtivoScalarFieldEnum[]
  }

  /**
   * StatusAtivo findFirstOrThrow
   */
  export type StatusAtivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtivo to fetch.
     */
    where?: StatusAtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtivos to fetch.
     */
    orderBy?: StatusAtivoOrderByWithRelationInput | StatusAtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusAtivos.
     */
    cursor?: StatusAtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusAtivos.
     */
    distinct?: StatusAtivoScalarFieldEnum | StatusAtivoScalarFieldEnum[]
  }

  /**
   * StatusAtivo findMany
   */
  export type StatusAtivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtivos to fetch.
     */
    where?: StatusAtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtivos to fetch.
     */
    orderBy?: StatusAtivoOrderByWithRelationInput | StatusAtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusAtivos.
     */
    cursor?: StatusAtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtivos.
     */
    skip?: number
    distinct?: StatusAtivoScalarFieldEnum | StatusAtivoScalarFieldEnum[]
  }

  /**
   * StatusAtivo create
   */
  export type StatusAtivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusAtivo.
     */
    data: XOR<StatusAtivoCreateInput, StatusAtivoUncheckedCreateInput>
  }

  /**
   * StatusAtivo createMany
   */
  export type StatusAtivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusAtivos.
     */
    data: StatusAtivoCreateManyInput | StatusAtivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusAtivo update
   */
  export type StatusAtivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusAtivo.
     */
    data: XOR<StatusAtivoUpdateInput, StatusAtivoUncheckedUpdateInput>
    /**
     * Choose, which StatusAtivo to update.
     */
    where: StatusAtivoWhereUniqueInput
  }

  /**
   * StatusAtivo updateMany
   */
  export type StatusAtivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusAtivos.
     */
    data: XOR<StatusAtivoUpdateManyMutationInput, StatusAtivoUncheckedUpdateManyInput>
    /**
     * Filter which StatusAtivos to update
     */
    where?: StatusAtivoWhereInput
    /**
     * Limit how many StatusAtivos to update.
     */
    limit?: number
  }

  /**
   * StatusAtivo upsert
   */
  export type StatusAtivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusAtivo to update in case it exists.
     */
    where: StatusAtivoWhereUniqueInput
    /**
     * In case the StatusAtivo found by the `where` argument doesn't exist, create a new StatusAtivo with this data.
     */
    create: XOR<StatusAtivoCreateInput, StatusAtivoUncheckedCreateInput>
    /**
     * In case the StatusAtivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusAtivoUpdateInput, StatusAtivoUncheckedUpdateInput>
  }

  /**
   * StatusAtivo delete
   */
  export type StatusAtivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
    /**
     * Filter which StatusAtivo to delete.
     */
    where: StatusAtivoWhereUniqueInput
  }

  /**
   * StatusAtivo deleteMany
   */
  export type StatusAtivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusAtivos to delete
     */
    where?: StatusAtivoWhereInput
    /**
     * Limit how many StatusAtivos to delete.
     */
    limit?: number
  }

  /**
   * StatusAtivo.ativos
   */
  export type StatusAtivo$ativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    cursor?: AtivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * StatusAtivo without action
   */
  export type StatusAtivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtivo
     */
    select?: StatusAtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtivo
     */
    omit?: StatusAtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtivoInclude<ExtArgs> | null
  }


  /**
   * Model StatusManutencao
   */

  export type AggregateStatusManutencao = {
    _count: StatusManutencaoCountAggregateOutputType | null
    _avg: StatusManutencaoAvgAggregateOutputType | null
    _sum: StatusManutencaoSumAggregateOutputType | null
    _min: StatusManutencaoMinAggregateOutputType | null
    _max: StatusManutencaoMaxAggregateOutputType | null
  }

  export type StatusManutencaoAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusManutencaoSumAggregateOutputType = {
    id: number | null
  }

  export type StatusManutencaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type StatusManutencaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type StatusManutencaoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type StatusManutencaoAvgAggregateInputType = {
    id?: true
  }

  export type StatusManutencaoSumAggregateInputType = {
    id?: true
  }

  export type StatusManutencaoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type StatusManutencaoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type StatusManutencaoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type StatusManutencaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusManutencao to aggregate.
     */
    where?: StatusManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusManutencaos to fetch.
     */
    orderBy?: StatusManutencaoOrderByWithRelationInput | StatusManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusManutencaos
    **/
    _count?: true | StatusManutencaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusManutencaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusManutencaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusManutencaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusManutencaoMaxAggregateInputType
  }

  export type GetStatusManutencaoAggregateType<T extends StatusManutencaoAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusManutencao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusManutencao[P]>
      : GetScalarType<T[P], AggregateStatusManutencao[P]>
  }




  export type StatusManutencaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusManutencaoWhereInput
    orderBy?: StatusManutencaoOrderByWithAggregationInput | StatusManutencaoOrderByWithAggregationInput[]
    by: StatusManutencaoScalarFieldEnum[] | StatusManutencaoScalarFieldEnum
    having?: StatusManutencaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusManutencaoCountAggregateInputType | true
    _avg?: StatusManutencaoAvgAggregateInputType
    _sum?: StatusManutencaoSumAggregateInputType
    _min?: StatusManutencaoMinAggregateInputType
    _max?: StatusManutencaoMaxAggregateInputType
  }

  export type StatusManutencaoGroupByOutputType = {
    id: number
    nome: string
    _count: StatusManutencaoCountAggregateOutputType | null
    _avg: StatusManutencaoAvgAggregateOutputType | null
    _sum: StatusManutencaoSumAggregateOutputType | null
    _min: StatusManutencaoMinAggregateOutputType | null
    _max: StatusManutencaoMaxAggregateOutputType | null
  }

  type GetStatusManutencaoGroupByPayload<T extends StatusManutencaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusManutencaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusManutencaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusManutencaoGroupByOutputType[P]>
            : GetScalarType<T[P], StatusManutencaoGroupByOutputType[P]>
        }
      >
    >


  export type StatusManutencaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    manutencoes?: boolean | StatusManutencao$manutencoesArgs<ExtArgs>
    _count?: boolean | StatusManutencaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusManutencao"]>



  export type StatusManutencaoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type StatusManutencaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["statusManutencao"]>
  export type StatusManutencaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manutencoes?: boolean | StatusManutencao$manutencoesArgs<ExtArgs>
    _count?: boolean | StatusManutencaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatusManutencaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusManutencao"
    objects: {
      manutencoes: Prisma.$ManutencaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["statusManutencao"]>
    composites: {}
  }

  type StatusManutencaoGetPayload<S extends boolean | null | undefined | StatusManutencaoDefaultArgs> = $Result.GetResult<Prisma.$StatusManutencaoPayload, S>

  type StatusManutencaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusManutencaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusManutencaoCountAggregateInputType | true
    }

  export interface StatusManutencaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusManutencao'], meta: { name: 'StatusManutencao' } }
    /**
     * Find zero or one StatusManutencao that matches the filter.
     * @param {StatusManutencaoFindUniqueArgs} args - Arguments to find a StatusManutencao
     * @example
     * // Get one StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusManutencaoFindUniqueArgs>(args: SelectSubset<T, StatusManutencaoFindUniqueArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusManutencao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusManutencaoFindUniqueOrThrowArgs} args - Arguments to find a StatusManutencao
     * @example
     * // Get one StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusManutencaoFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusManutencaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusManutencao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoFindFirstArgs} args - Arguments to find a StatusManutencao
     * @example
     * // Get one StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusManutencaoFindFirstArgs>(args?: SelectSubset<T, StatusManutencaoFindFirstArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusManutencao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoFindFirstOrThrowArgs} args - Arguments to find a StatusManutencao
     * @example
     * // Get one StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusManutencaoFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusManutencaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusManutencaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusManutencaos
     * const statusManutencaos = await prisma.statusManutencao.findMany()
     * 
     * // Get first 10 StatusManutencaos
     * const statusManutencaos = await prisma.statusManutencao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusManutencaoWithIdOnly = await prisma.statusManutencao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusManutencaoFindManyArgs>(args?: SelectSubset<T, StatusManutencaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusManutencao.
     * @param {StatusManutencaoCreateArgs} args - Arguments to create a StatusManutencao.
     * @example
     * // Create one StatusManutencao
     * const StatusManutencao = await prisma.statusManutencao.create({
     *   data: {
     *     // ... data to create a StatusManutencao
     *   }
     * })
     * 
     */
    create<T extends StatusManutencaoCreateArgs>(args: SelectSubset<T, StatusManutencaoCreateArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusManutencaos.
     * @param {StatusManutencaoCreateManyArgs} args - Arguments to create many StatusManutencaos.
     * @example
     * // Create many StatusManutencaos
     * const statusManutencao = await prisma.statusManutencao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusManutencaoCreateManyArgs>(args?: SelectSubset<T, StatusManutencaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusManutencao.
     * @param {StatusManutencaoDeleteArgs} args - Arguments to delete one StatusManutencao.
     * @example
     * // Delete one StatusManutencao
     * const StatusManutencao = await prisma.statusManutencao.delete({
     *   where: {
     *     // ... filter to delete one StatusManutencao
     *   }
     * })
     * 
     */
    delete<T extends StatusManutencaoDeleteArgs>(args: SelectSubset<T, StatusManutencaoDeleteArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusManutencao.
     * @param {StatusManutencaoUpdateArgs} args - Arguments to update one StatusManutencao.
     * @example
     * // Update one StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusManutencaoUpdateArgs>(args: SelectSubset<T, StatusManutencaoUpdateArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusManutencaos.
     * @param {StatusManutencaoDeleteManyArgs} args - Arguments to filter StatusManutencaos to delete.
     * @example
     * // Delete a few StatusManutencaos
     * const { count } = await prisma.statusManutencao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusManutencaoDeleteManyArgs>(args?: SelectSubset<T, StatusManutencaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusManutencaos
     * const statusManutencao = await prisma.statusManutencao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusManutencaoUpdateManyArgs>(args: SelectSubset<T, StatusManutencaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusManutencao.
     * @param {StatusManutencaoUpsertArgs} args - Arguments to update or create a StatusManutencao.
     * @example
     * // Update or create a StatusManutencao
     * const statusManutencao = await prisma.statusManutencao.upsert({
     *   create: {
     *     // ... data to create a StatusManutencao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusManutencao we want to update
     *   }
     * })
     */
    upsert<T extends StatusManutencaoUpsertArgs>(args: SelectSubset<T, StatusManutencaoUpsertArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusManutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoCountArgs} args - Arguments to filter StatusManutencaos to count.
     * @example
     * // Count the number of StatusManutencaos
     * const count = await prisma.statusManutencao.count({
     *   where: {
     *     // ... the filter for the StatusManutencaos we want to count
     *   }
     * })
    **/
    count<T extends StatusManutencaoCountArgs>(
      args?: Subset<T, StatusManutencaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusManutencaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusManutencaoAggregateArgs>(args: Subset<T, StatusManutencaoAggregateArgs>): Prisma.PrismaPromise<GetStatusManutencaoAggregateType<T>>

    /**
     * Group by StatusManutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusManutencaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusManutencaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusManutencaoGroupByArgs['orderBy'] }
        : { orderBy?: StatusManutencaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusManutencaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusManutencaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusManutencao model
   */
  readonly fields: StatusManutencaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusManutencao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusManutencaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manutencoes<T extends StatusManutencao$manutencoesArgs<ExtArgs> = {}>(args?: Subset<T, StatusManutencao$manutencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusManutencao model
   */
  interface StatusManutencaoFieldRefs {
    readonly id: FieldRef<"StatusManutencao", 'Int'>
    readonly nome: FieldRef<"StatusManutencao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusManutencao findUnique
   */
  export type StatusManutencaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which StatusManutencao to fetch.
     */
    where: StatusManutencaoWhereUniqueInput
  }

  /**
   * StatusManutencao findUniqueOrThrow
   */
  export type StatusManutencaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which StatusManutencao to fetch.
     */
    where: StatusManutencaoWhereUniqueInput
  }

  /**
   * StatusManutencao findFirst
   */
  export type StatusManutencaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which StatusManutencao to fetch.
     */
    where?: StatusManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusManutencaos to fetch.
     */
    orderBy?: StatusManutencaoOrderByWithRelationInput | StatusManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusManutencaos.
     */
    cursor?: StatusManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusManutencaos.
     */
    distinct?: StatusManutencaoScalarFieldEnum | StatusManutencaoScalarFieldEnum[]
  }

  /**
   * StatusManutencao findFirstOrThrow
   */
  export type StatusManutencaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which StatusManutencao to fetch.
     */
    where?: StatusManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusManutencaos to fetch.
     */
    orderBy?: StatusManutencaoOrderByWithRelationInput | StatusManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusManutencaos.
     */
    cursor?: StatusManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusManutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusManutencaos.
     */
    distinct?: StatusManutencaoScalarFieldEnum | StatusManutencaoScalarFieldEnum[]
  }

  /**
   * StatusManutencao findMany
   */
  export type StatusManutencaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which StatusManutencaos to fetch.
     */
    where?: StatusManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusManutencaos to fetch.
     */
    orderBy?: StatusManutencaoOrderByWithRelationInput | StatusManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusManutencaos.
     */
    cursor?: StatusManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusManutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusManutencaos.
     */
    skip?: number
    distinct?: StatusManutencaoScalarFieldEnum | StatusManutencaoScalarFieldEnum[]
  }

  /**
   * StatusManutencao create
   */
  export type StatusManutencaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusManutencao.
     */
    data: XOR<StatusManutencaoCreateInput, StatusManutencaoUncheckedCreateInput>
  }

  /**
   * StatusManutencao createMany
   */
  export type StatusManutencaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusManutencaos.
     */
    data: StatusManutencaoCreateManyInput | StatusManutencaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusManutencao update
   */
  export type StatusManutencaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusManutencao.
     */
    data: XOR<StatusManutencaoUpdateInput, StatusManutencaoUncheckedUpdateInput>
    /**
     * Choose, which StatusManutencao to update.
     */
    where: StatusManutencaoWhereUniqueInput
  }

  /**
   * StatusManutencao updateMany
   */
  export type StatusManutencaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusManutencaos.
     */
    data: XOR<StatusManutencaoUpdateManyMutationInput, StatusManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which StatusManutencaos to update
     */
    where?: StatusManutencaoWhereInput
    /**
     * Limit how many StatusManutencaos to update.
     */
    limit?: number
  }

  /**
   * StatusManutencao upsert
   */
  export type StatusManutencaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusManutencao to update in case it exists.
     */
    where: StatusManutencaoWhereUniqueInput
    /**
     * In case the StatusManutencao found by the `where` argument doesn't exist, create a new StatusManutencao with this data.
     */
    create: XOR<StatusManutencaoCreateInput, StatusManutencaoUncheckedCreateInput>
    /**
     * In case the StatusManutencao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusManutencaoUpdateInput, StatusManutencaoUncheckedUpdateInput>
  }

  /**
   * StatusManutencao delete
   */
  export type StatusManutencaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    /**
     * Filter which StatusManutencao to delete.
     */
    where: StatusManutencaoWhereUniqueInput
  }

  /**
   * StatusManutencao deleteMany
   */
  export type StatusManutencaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusManutencaos to delete
     */
    where?: StatusManutencaoWhereInput
    /**
     * Limit how many StatusManutencaos to delete.
     */
    limit?: number
  }

  /**
   * StatusManutencao.manutencoes
   */
  export type StatusManutencao$manutencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    where?: ManutencaoWhereInput
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    cursor?: ManutencaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * StatusManutencao without action
   */
  export type StatusManutencaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
  }


  /**
   * Model Manutencao
   */

  export type AggregateManutencao = {
    _count: ManutencaoCountAggregateOutputType | null
    _avg: ManutencaoAvgAggregateOutputType | null
    _sum: ManutencaoSumAggregateOutputType | null
    _min: ManutencaoMinAggregateOutputType | null
    _max: ManutencaoMaxAggregateOutputType | null
  }

  export type ManutencaoAvgAggregateOutputType = {
    id: number | null
    chaveStatus: number | null
  }

  export type ManutencaoSumAggregateOutputType = {
    id: number | null
    chaveStatus: number | null
  }

  export type ManutencaoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataEntrada: Date | null
    dataSaida: Date | null
    relatorio: string | null
    chaveResponsavel: string | null
    chaveStatus: number | null
  }

  export type ManutencaoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataEntrada: Date | null
    dataSaida: Date | null
    relatorio: string | null
    chaveResponsavel: string | null
    chaveStatus: number | null
  }

  export type ManutencaoCountAggregateOutputType = {
    id: number
    descricao: number
    dataEntrada: number
    dataSaida: number
    relatorio: number
    chaveResponsavel: number
    chaveStatus: number
    _all: number
  }


  export type ManutencaoAvgAggregateInputType = {
    id?: true
    chaveStatus?: true
  }

  export type ManutencaoSumAggregateInputType = {
    id?: true
    chaveStatus?: true
  }

  export type ManutencaoMinAggregateInputType = {
    id?: true
    descricao?: true
    dataEntrada?: true
    dataSaida?: true
    relatorio?: true
    chaveResponsavel?: true
    chaveStatus?: true
  }

  export type ManutencaoMaxAggregateInputType = {
    id?: true
    descricao?: true
    dataEntrada?: true
    dataSaida?: true
    relatorio?: true
    chaveResponsavel?: true
    chaveStatus?: true
  }

  export type ManutencaoCountAggregateInputType = {
    id?: true
    descricao?: true
    dataEntrada?: true
    dataSaida?: true
    relatorio?: true
    chaveResponsavel?: true
    chaveStatus?: true
    _all?: true
  }

  export type ManutencaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manutencao to aggregate.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manutencaos
    **/
    _count?: true | ManutencaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManutencaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManutencaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManutencaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManutencaoMaxAggregateInputType
  }

  export type GetManutencaoAggregateType<T extends ManutencaoAggregateArgs> = {
        [P in keyof T & keyof AggregateManutencao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManutencao[P]>
      : GetScalarType<T[P], AggregateManutencao[P]>
  }




  export type ManutencaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManutencaoWhereInput
    orderBy?: ManutencaoOrderByWithAggregationInput | ManutencaoOrderByWithAggregationInput[]
    by: ManutencaoScalarFieldEnum[] | ManutencaoScalarFieldEnum
    having?: ManutencaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManutencaoCountAggregateInputType | true
    _avg?: ManutencaoAvgAggregateInputType
    _sum?: ManutencaoSumAggregateInputType
    _min?: ManutencaoMinAggregateInputType
    _max?: ManutencaoMaxAggregateInputType
  }

  export type ManutencaoGroupByOutputType = {
    id: number
    descricao: string | null
    dataEntrada: Date
    dataSaida: Date | null
    relatorio: string | null
    chaveResponsavel: string
    chaveStatus: number
    _count: ManutencaoCountAggregateOutputType | null
    _avg: ManutencaoAvgAggregateOutputType | null
    _sum: ManutencaoSumAggregateOutputType | null
    _min: ManutencaoMinAggregateOutputType | null
    _max: ManutencaoMaxAggregateOutputType | null
  }

  type GetManutencaoGroupByPayload<T extends ManutencaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManutencaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManutencaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManutencaoGroupByOutputType[P]>
            : GetScalarType<T[P], ManutencaoGroupByOutputType[P]>
        }
      >
    >


  export type ManutencaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    relatorio?: boolean
    chaveResponsavel?: boolean
    chaveStatus?: boolean
    responsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | Manutencao$statusArgs<ExtArgs>
  }, ExtArgs["result"]["manutencao"]>



  export type ManutencaoSelectScalar = {
    id?: boolean
    descricao?: boolean
    dataEntrada?: boolean
    dataSaida?: boolean
    relatorio?: boolean
    chaveResponsavel?: boolean
    chaveStatus?: boolean
  }

  export type ManutencaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "dataEntrada" | "dataSaida" | "relatorio" | "chaveResponsavel" | "chaveStatus", ExtArgs["result"]["manutencao"]>
  export type ManutencaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | Manutencao$statusArgs<ExtArgs>
  }

  export type $ManutencaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manutencao"
    objects: {
      responsavel: Prisma.$UsuarioPayload<ExtArgs>
      status: Prisma.$StatusManutencaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string | null
      dataEntrada: Date
      dataSaida: Date | null
      relatorio: string | null
      chaveResponsavel: string
      chaveStatus: number
    }, ExtArgs["result"]["manutencao"]>
    composites: {}
  }

  type ManutencaoGetPayload<S extends boolean | null | undefined | ManutencaoDefaultArgs> = $Result.GetResult<Prisma.$ManutencaoPayload, S>

  type ManutencaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManutencaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManutencaoCountAggregateInputType | true
    }

  export interface ManutencaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manutencao'], meta: { name: 'Manutencao' } }
    /**
     * Find zero or one Manutencao that matches the filter.
     * @param {ManutencaoFindUniqueArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManutencaoFindUniqueArgs>(args: SelectSubset<T, ManutencaoFindUniqueArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manutencao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManutencaoFindUniqueOrThrowArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManutencaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ManutencaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manutencao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindFirstArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManutencaoFindFirstArgs>(args?: SelectSubset<T, ManutencaoFindFirstArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manutencao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindFirstOrThrowArgs} args - Arguments to find a Manutencao
     * @example
     * // Get one Manutencao
     * const manutencao = await prisma.manutencao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManutencaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ManutencaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manutencaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manutencaos
     * const manutencaos = await prisma.manutencao.findMany()
     * 
     * // Get first 10 Manutencaos
     * const manutencaos = await prisma.manutencao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manutencaoWithIdOnly = await prisma.manutencao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManutencaoFindManyArgs>(args?: SelectSubset<T, ManutencaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manutencao.
     * @param {ManutencaoCreateArgs} args - Arguments to create a Manutencao.
     * @example
     * // Create one Manutencao
     * const Manutencao = await prisma.manutencao.create({
     *   data: {
     *     // ... data to create a Manutencao
     *   }
     * })
     * 
     */
    create<T extends ManutencaoCreateArgs>(args: SelectSubset<T, ManutencaoCreateArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manutencaos.
     * @param {ManutencaoCreateManyArgs} args - Arguments to create many Manutencaos.
     * @example
     * // Create many Manutencaos
     * const manutencao = await prisma.manutencao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManutencaoCreateManyArgs>(args?: SelectSubset<T, ManutencaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manutencao.
     * @param {ManutencaoDeleteArgs} args - Arguments to delete one Manutencao.
     * @example
     * // Delete one Manutencao
     * const Manutencao = await prisma.manutencao.delete({
     *   where: {
     *     // ... filter to delete one Manutencao
     *   }
     * })
     * 
     */
    delete<T extends ManutencaoDeleteArgs>(args: SelectSubset<T, ManutencaoDeleteArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manutencao.
     * @param {ManutencaoUpdateArgs} args - Arguments to update one Manutencao.
     * @example
     * // Update one Manutencao
     * const manutencao = await prisma.manutencao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManutencaoUpdateArgs>(args: SelectSubset<T, ManutencaoUpdateArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manutencaos.
     * @param {ManutencaoDeleteManyArgs} args - Arguments to filter Manutencaos to delete.
     * @example
     * // Delete a few Manutencaos
     * const { count } = await prisma.manutencao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManutencaoDeleteManyArgs>(args?: SelectSubset<T, ManutencaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manutencaos
     * const manutencao = await prisma.manutencao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManutencaoUpdateManyArgs>(args: SelectSubset<T, ManutencaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manutencao.
     * @param {ManutencaoUpsertArgs} args - Arguments to update or create a Manutencao.
     * @example
     * // Update or create a Manutencao
     * const manutencao = await prisma.manutencao.upsert({
     *   create: {
     *     // ... data to create a Manutencao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manutencao we want to update
     *   }
     * })
     */
    upsert<T extends ManutencaoUpsertArgs>(args: SelectSubset<T, ManutencaoUpsertArgs<ExtArgs>>): Prisma__ManutencaoClient<$Result.GetResult<Prisma.$ManutencaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manutencaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoCountArgs} args - Arguments to filter Manutencaos to count.
     * @example
     * // Count the number of Manutencaos
     * const count = await prisma.manutencao.count({
     *   where: {
     *     // ... the filter for the Manutencaos we want to count
     *   }
     * })
    **/
    count<T extends ManutencaoCountArgs>(
      args?: Subset<T, ManutencaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManutencaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManutencaoAggregateArgs>(args: Subset<T, ManutencaoAggregateArgs>): Prisma.PrismaPromise<GetManutencaoAggregateType<T>>

    /**
     * Group by Manutencao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManutencaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManutencaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManutencaoGroupByArgs['orderBy'] }
        : { orderBy?: ManutencaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManutencaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManutencaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manutencao model
   */
  readonly fields: ManutencaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manutencao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManutencaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsavel<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends Manutencao$statusArgs<ExtArgs> = {}>(args?: Subset<T, Manutencao$statusArgs<ExtArgs>>): Prisma__StatusManutencaoClient<$Result.GetResult<Prisma.$StatusManutencaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manutencao model
   */
  interface ManutencaoFieldRefs {
    readonly id: FieldRef<"Manutencao", 'Int'>
    readonly descricao: FieldRef<"Manutencao", 'String'>
    readonly dataEntrada: FieldRef<"Manutencao", 'DateTime'>
    readonly dataSaida: FieldRef<"Manutencao", 'DateTime'>
    readonly relatorio: FieldRef<"Manutencao", 'String'>
    readonly chaveResponsavel: FieldRef<"Manutencao", 'String'>
    readonly chaveStatus: FieldRef<"Manutencao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Manutencao findUnique
   */
  export type ManutencaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao findUniqueOrThrow
   */
  export type ManutencaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao findFirst
   */
  export type ManutencaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manutencaos.
     */
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao findFirstOrThrow
   */
  export type ManutencaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencao to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manutencaos.
     */
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao findMany
   */
  export type ManutencaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter, which Manutencaos to fetch.
     */
    where?: ManutencaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manutencaos to fetch.
     */
    orderBy?: ManutencaoOrderByWithRelationInput | ManutencaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manutencaos.
     */
    cursor?: ManutencaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manutencaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manutencaos.
     */
    skip?: number
    distinct?: ManutencaoScalarFieldEnum | ManutencaoScalarFieldEnum[]
  }

  /**
   * Manutencao create
   */
  export type ManutencaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Manutencao.
     */
    data: XOR<ManutencaoCreateInput, ManutencaoUncheckedCreateInput>
  }

  /**
   * Manutencao createMany
   */
  export type ManutencaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manutencaos.
     */
    data: ManutencaoCreateManyInput | ManutencaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manutencao update
   */
  export type ManutencaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Manutencao.
     */
    data: XOR<ManutencaoUpdateInput, ManutencaoUncheckedUpdateInput>
    /**
     * Choose, which Manutencao to update.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao updateMany
   */
  export type ManutencaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manutencaos.
     */
    data: XOR<ManutencaoUpdateManyMutationInput, ManutencaoUncheckedUpdateManyInput>
    /**
     * Filter which Manutencaos to update
     */
    where?: ManutencaoWhereInput
    /**
     * Limit how many Manutencaos to update.
     */
    limit?: number
  }

  /**
   * Manutencao upsert
   */
  export type ManutencaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Manutencao to update in case it exists.
     */
    where: ManutencaoWhereUniqueInput
    /**
     * In case the Manutencao found by the `where` argument doesn't exist, create a new Manutencao with this data.
     */
    create: XOR<ManutencaoCreateInput, ManutencaoUncheckedCreateInput>
    /**
     * In case the Manutencao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManutencaoUpdateInput, ManutencaoUncheckedUpdateInput>
  }

  /**
   * Manutencao delete
   */
  export type ManutencaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
    /**
     * Filter which Manutencao to delete.
     */
    where: ManutencaoWhereUniqueInput
  }

  /**
   * Manutencao deleteMany
   */
  export type ManutencaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manutencaos to delete
     */
    where?: ManutencaoWhereInput
    /**
     * Limit how many Manutencaos to delete.
     */
    limit?: number
  }

  /**
   * Manutencao.status
   */
  export type Manutencao$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusManutencao
     */
    select?: StatusManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusManutencao
     */
    omit?: StatusManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusManutencaoInclude<ExtArgs> | null
    where?: StatusManutencaoWhereInput
  }

  /**
   * Manutencao without action
   */
  export type ManutencaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manutencao
     */
    select?: ManutencaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manutencao
     */
    omit?: ManutencaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManutencaoInclude<ExtArgs> | null
  }


  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: number | null
    endereco: string | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: number | null
    endereco: string | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    endereco: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    endereco?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    endereco?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    endereco?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: number
    endereco: string
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endereco?: boolean
    ativos?: boolean | Localizacao$ativosArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>



  export type LocalizacaoSelectScalar = {
    id?: boolean
    endereco?: boolean
  }

  export type LocalizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endereco", ExtArgs["result"]["localizacao"]>
  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | Localizacao$ativosArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      ativos: Prisma.$AtivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endereco: string
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacaoFindUniqueArgs>(args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacaoFindFirstArgs>(args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacaoFindManyArgs>(args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends LocalizacaoCreateArgs>(args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacaoCreateManyArgs>(args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends LocalizacaoDeleteArgs>(args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacaoUpdateArgs>(args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacaoDeleteManyArgs>(args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacaoUpdateManyArgs>(args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacaoUpsertArgs>(args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativos<T extends Localizacao$ativosArgs<ExtArgs> = {}>(args?: Subset<T, Localizacao$ativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localizacao model
   */
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'Int'>
    readonly endereco: FieldRef<"Localizacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }

  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }

  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to delete.
     */
    limit?: number
  }

  /**
   * Localizacao.ativos
   */
  export type Localizacao$ativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    cursor?: AtivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AtivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codInterno: 'codInterno',
    descricao: 'descricao',
    valor: 'valor',
    dataAquisicao: 'dataAquisicao',
    qtdReparos: 'qtdReparos',
    chaveStatus: 'chaveStatus',
    chaveResponsavel: 'chaveResponsavel',
    chaveLocalizacao: 'chaveLocalizacao'
  };

  export type AtivoScalarFieldEnum = (typeof AtivoScalarFieldEnum)[keyof typeof AtivoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    login: 'login',
    senha: 'senha',
    chaveCargo: 'chaveCargo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const StatusAtivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type StatusAtivoScalarFieldEnum = (typeof StatusAtivoScalarFieldEnum)[keyof typeof StatusAtivoScalarFieldEnum]


  export const StatusManutencaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type StatusManutencaoScalarFieldEnum = (typeof StatusManutencaoScalarFieldEnum)[keyof typeof StatusManutencaoScalarFieldEnum]


  export const ManutencaoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    dataEntrada: 'dataEntrada',
    dataSaida: 'dataSaida',
    relatorio: 'relatorio',
    chaveResponsavel: 'chaveResponsavel',
    chaveStatus: 'chaveStatus'
  };

  export type ManutencaoScalarFieldEnum = (typeof ManutencaoScalarFieldEnum)[keyof typeof ManutencaoScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    endereco: 'endereco'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AtivoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    codInterno: 'codInterno',
    descricao: 'descricao',
    chaveResponsavel: 'chaveResponsavel'
  };

  export type AtivoOrderByRelevanceFieldEnum = (typeof AtivoOrderByRelevanceFieldEnum)[keyof typeof AtivoOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    login: 'login',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const CargoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type CargoOrderByRelevanceFieldEnum = (typeof CargoOrderByRelevanceFieldEnum)[keyof typeof CargoOrderByRelevanceFieldEnum]


  export const StatusAtivoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type StatusAtivoOrderByRelevanceFieldEnum = (typeof StatusAtivoOrderByRelevanceFieldEnum)[keyof typeof StatusAtivoOrderByRelevanceFieldEnum]


  export const StatusManutencaoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type StatusManutencaoOrderByRelevanceFieldEnum = (typeof StatusManutencaoOrderByRelevanceFieldEnum)[keyof typeof StatusManutencaoOrderByRelevanceFieldEnum]


  export const ManutencaoOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    relatorio: 'relatorio',
    chaveResponsavel: 'chaveResponsavel'
  };

  export type ManutencaoOrderByRelevanceFieldEnum = (typeof ManutencaoOrderByRelevanceFieldEnum)[keyof typeof ManutencaoOrderByRelevanceFieldEnum]


  export const LocalizacaoOrderByRelevanceFieldEnum: {
    endereco: 'endereco'
  };

  export type LocalizacaoOrderByRelevanceFieldEnum = (typeof LocalizacaoOrderByRelevanceFieldEnum)[keyof typeof LocalizacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AtivoWhereInput = {
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    id?: IntFilter<"Ativo"> | number
    nome?: StringFilter<"Ativo"> | string
    codInterno?: StringNullableFilter<"Ativo"> | string | null
    descricao?: StringNullableFilter<"Ativo"> | string | null
    valor?: DecimalFilter<"Ativo"> | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFilter<"Ativo"> | Date | string
    qtdReparos?: IntFilter<"Ativo"> | number
    chaveStatus?: IntNullableFilter<"Ativo"> | number | null
    chaveResponsavel?: StringNullableFilter<"Ativo"> | string | null
    chaveLocalizacao?: IntNullableFilter<"Ativo"> | number | null
    status?: XOR<StatusAtivoNullableScalarRelationFilter, StatusAtivoWhereInput> | null
    responsavel?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, LocalizacaoWhereInput> | null
  }

  export type AtivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codInterno?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    dataAquisicao?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrderInput | SortOrder
    chaveResponsavel?: SortOrderInput | SortOrder
    chaveLocalizacao?: SortOrderInput | SortOrder
    status?: StatusAtivoOrderByWithRelationInput
    responsavel?: UsuarioOrderByWithRelationInput
    localizacao?: LocalizacaoOrderByWithRelationInput
    _relevance?: AtivoOrderByRelevanceInput
  }

  export type AtivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codInterno?: string
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    nome?: StringFilter<"Ativo"> | string
    descricao?: StringNullableFilter<"Ativo"> | string | null
    valor?: DecimalFilter<"Ativo"> | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFilter<"Ativo"> | Date | string
    qtdReparos?: IntFilter<"Ativo"> | number
    chaveStatus?: IntNullableFilter<"Ativo"> | number | null
    chaveResponsavel?: StringNullableFilter<"Ativo"> | string | null
    chaveLocalizacao?: IntNullableFilter<"Ativo"> | number | null
    status?: XOR<StatusAtivoNullableScalarRelationFilter, StatusAtivoWhereInput> | null
    responsavel?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, LocalizacaoWhereInput> | null
  }, "id" | "codInterno">

  export type AtivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codInterno?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    dataAquisicao?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrderInput | SortOrder
    chaveResponsavel?: SortOrderInput | SortOrder
    chaveLocalizacao?: SortOrderInput | SortOrder
    _count?: AtivoCountOrderByAggregateInput
    _avg?: AtivoAvgOrderByAggregateInput
    _max?: AtivoMaxOrderByAggregateInput
    _min?: AtivoMinOrderByAggregateInput
    _sum?: AtivoSumOrderByAggregateInput
  }

  export type AtivoScalarWhereWithAggregatesInput = {
    AND?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    OR?: AtivoScalarWhereWithAggregatesInput[]
    NOT?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ativo"> | number
    nome?: StringWithAggregatesFilter<"Ativo"> | string
    codInterno?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    valor?: DecimalWithAggregatesFilter<"Ativo"> | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeWithAggregatesFilter<"Ativo"> | Date | string
    qtdReparos?: IntWithAggregatesFilter<"Ativo"> | number
    chaveStatus?: IntNullableWithAggregatesFilter<"Ativo"> | number | null
    chaveResponsavel?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    chaveLocalizacao?: IntNullableWithAggregatesFilter<"Ativo"> | number | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    login?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    chaveCargo?: IntNullableFilter<"Usuario"> | number | null
    cargo?: XOR<CargoNullableScalarRelationFilter, CargoWhereInput> | null
    ativos?: AtivoListRelationFilter
    manutencoes?: ManutencaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    chaveCargo?: SortOrderInput | SortOrder
    cargo?: CargoOrderByWithRelationInput
    ativos?: AtivoOrderByRelationAggregateInput
    manutencoes?: ManutencaoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    login?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    chaveCargo?: IntNullableFilter<"Usuario"> | number | null
    cargo?: XOR<CargoNullableScalarRelationFilter, CargoWhereInput> | null
    ativos?: AtivoListRelationFilter
    manutencoes?: ManutencaoListRelationFilter
  }, "id" | "email" | "login">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    chaveCargo?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    login?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    chaveCargo?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    id?: IntFilter<"Cargo"> | number
    nome?: StringFilter<"Cargo"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: CargoOrderByRelevanceInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nome">

  export type CargoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cargo"> | number
    nome?: StringWithAggregatesFilter<"Cargo"> | string
  }

  export type StatusAtivoWhereInput = {
    AND?: StatusAtivoWhereInput | StatusAtivoWhereInput[]
    OR?: StatusAtivoWhereInput[]
    NOT?: StatusAtivoWhereInput | StatusAtivoWhereInput[]
    id?: IntFilter<"StatusAtivo"> | number
    nome?: StringFilter<"StatusAtivo"> | string
    ativos?: AtivoListRelationFilter
  }

  export type StatusAtivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativos?: AtivoOrderByRelationAggregateInput
    _relevance?: StatusAtivoOrderByRelevanceInput
  }

  export type StatusAtivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: StatusAtivoWhereInput | StatusAtivoWhereInput[]
    OR?: StatusAtivoWhereInput[]
    NOT?: StatusAtivoWhereInput | StatusAtivoWhereInput[]
    ativos?: AtivoListRelationFilter
  }, "id" | "nome">

  export type StatusAtivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: StatusAtivoCountOrderByAggregateInput
    _avg?: StatusAtivoAvgOrderByAggregateInput
    _max?: StatusAtivoMaxOrderByAggregateInput
    _min?: StatusAtivoMinOrderByAggregateInput
    _sum?: StatusAtivoSumOrderByAggregateInput
  }

  export type StatusAtivoScalarWhereWithAggregatesInput = {
    AND?: StatusAtivoScalarWhereWithAggregatesInput | StatusAtivoScalarWhereWithAggregatesInput[]
    OR?: StatusAtivoScalarWhereWithAggregatesInput[]
    NOT?: StatusAtivoScalarWhereWithAggregatesInput | StatusAtivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StatusAtivo"> | number
    nome?: StringWithAggregatesFilter<"StatusAtivo"> | string
  }

  export type StatusManutencaoWhereInput = {
    AND?: StatusManutencaoWhereInput | StatusManutencaoWhereInput[]
    OR?: StatusManutencaoWhereInput[]
    NOT?: StatusManutencaoWhereInput | StatusManutencaoWhereInput[]
    id?: IntFilter<"StatusManutencao"> | number
    nome?: StringFilter<"StatusManutencao"> | string
    manutencoes?: ManutencaoListRelationFilter
  }

  export type StatusManutencaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    manutencoes?: ManutencaoOrderByRelationAggregateInput
    _relevance?: StatusManutencaoOrderByRelevanceInput
  }

  export type StatusManutencaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: StatusManutencaoWhereInput | StatusManutencaoWhereInput[]
    OR?: StatusManutencaoWhereInput[]
    NOT?: StatusManutencaoWhereInput | StatusManutencaoWhereInput[]
    manutencoes?: ManutencaoListRelationFilter
  }, "id" | "nome">

  export type StatusManutencaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: StatusManutencaoCountOrderByAggregateInput
    _avg?: StatusManutencaoAvgOrderByAggregateInput
    _max?: StatusManutencaoMaxOrderByAggregateInput
    _min?: StatusManutencaoMinOrderByAggregateInput
    _sum?: StatusManutencaoSumOrderByAggregateInput
  }

  export type StatusManutencaoScalarWhereWithAggregatesInput = {
    AND?: StatusManutencaoScalarWhereWithAggregatesInput | StatusManutencaoScalarWhereWithAggregatesInput[]
    OR?: StatusManutencaoScalarWhereWithAggregatesInput[]
    NOT?: StatusManutencaoScalarWhereWithAggregatesInput | StatusManutencaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StatusManutencao"> | number
    nome?: StringWithAggregatesFilter<"StatusManutencao"> | string
  }

  export type ManutencaoWhereInput = {
    AND?: ManutencaoWhereInput | ManutencaoWhereInput[]
    OR?: ManutencaoWhereInput[]
    NOT?: ManutencaoWhereInput | ManutencaoWhereInput[]
    id?: IntFilter<"Manutencao"> | number
    descricao?: StringNullableFilter<"Manutencao"> | string | null
    dataEntrada?: DateTimeFilter<"Manutencao"> | Date | string
    dataSaida?: DateTimeNullableFilter<"Manutencao"> | Date | string | null
    relatorio?: StringNullableFilter<"Manutencao"> | string | null
    chaveResponsavel?: StringFilter<"Manutencao"> | string
    chaveStatus?: IntFilter<"Manutencao"> | number
    responsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    status?: XOR<StatusManutencaoNullableScalarRelationFilter, StatusManutencaoWhereInput> | null
  }

  export type ManutencaoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrderInput | SortOrder
    relatorio?: SortOrderInput | SortOrder
    chaveResponsavel?: SortOrder
    chaveStatus?: SortOrder
    responsavel?: UsuarioOrderByWithRelationInput
    status?: StatusManutencaoOrderByWithRelationInput
    _relevance?: ManutencaoOrderByRelevanceInput
  }

  export type ManutencaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManutencaoWhereInput | ManutencaoWhereInput[]
    OR?: ManutencaoWhereInput[]
    NOT?: ManutencaoWhereInput | ManutencaoWhereInput[]
    descricao?: StringNullableFilter<"Manutencao"> | string | null
    dataEntrada?: DateTimeFilter<"Manutencao"> | Date | string
    dataSaida?: DateTimeNullableFilter<"Manutencao"> | Date | string | null
    relatorio?: StringNullableFilter<"Manutencao"> | string | null
    chaveResponsavel?: StringFilter<"Manutencao"> | string
    chaveStatus?: IntFilter<"Manutencao"> | number
    responsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    status?: XOR<StatusManutencaoNullableScalarRelationFilter, StatusManutencaoWhereInput> | null
  }, "id">

  export type ManutencaoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrderInput | SortOrder
    relatorio?: SortOrderInput | SortOrder
    chaveResponsavel?: SortOrder
    chaveStatus?: SortOrder
    _count?: ManutencaoCountOrderByAggregateInput
    _avg?: ManutencaoAvgOrderByAggregateInput
    _max?: ManutencaoMaxOrderByAggregateInput
    _min?: ManutencaoMinOrderByAggregateInput
    _sum?: ManutencaoSumOrderByAggregateInput
  }

  export type ManutencaoScalarWhereWithAggregatesInput = {
    AND?: ManutencaoScalarWhereWithAggregatesInput | ManutencaoScalarWhereWithAggregatesInput[]
    OR?: ManutencaoScalarWhereWithAggregatesInput[]
    NOT?: ManutencaoScalarWhereWithAggregatesInput | ManutencaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manutencao"> | number
    descricao?: StringNullableWithAggregatesFilter<"Manutencao"> | string | null
    dataEntrada?: DateTimeWithAggregatesFilter<"Manutencao"> | Date | string
    dataSaida?: DateTimeNullableWithAggregatesFilter<"Manutencao"> | Date | string | null
    relatorio?: StringNullableWithAggregatesFilter<"Manutencao"> | string | null
    chaveResponsavel?: StringWithAggregatesFilter<"Manutencao"> | string
    chaveStatus?: IntWithAggregatesFilter<"Manutencao"> | number
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    endereco?: StringFilter<"Localizacao"> | string
    ativos?: AtivoListRelationFilter
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    endereco?: SortOrder
    ativos?: AtivoOrderByRelationAggregateInput
    _relevance?: LocalizacaoOrderByRelevanceInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    endereco?: string
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    ativos?: AtivoListRelationFilter
  }, "id" | "endereco">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    endereco?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacao"> | number
    endereco?: StringWithAggregatesFilter<"Localizacao"> | string
  }

  export type AtivoCreateInput = {
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    status?: StatusAtivoCreateNestedOneWithoutAtivosInput
    responsavel?: UsuarioCreateNestedOneWithoutAtivosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutAtivosInput
  }

  export type AtivoUncheckedCreateInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveResponsavel?: string | null
    chaveLocalizacao?: number | null
  }

  export type AtivoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    status?: StatusAtivoUpdateOneWithoutAtivosNestedInput
    responsavel?: UsuarioUpdateOneWithoutAtivosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutAtivosNestedInput
  }

  export type AtivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AtivoCreateManyInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveResponsavel?: string | null
    chaveLocalizacao?: number | null
  }

  export type AtivoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
  }

  export type AtivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    cargo?: CargoCreateNestedOneWithoutUsuariosInput
    ativos?: AtivoCreateNestedManyWithoutResponsavelInput
    manutencoes?: ManutencaoCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    chaveCargo?: number | null
    ativos?: AtivoUncheckedCreateNestedManyWithoutResponsavelInput
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: CargoUpdateOneWithoutUsuariosNestedInput
    ativos?: AtivoUpdateManyWithoutResponsavelNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    chaveCargo?: NullableIntFieldUpdateOperationsInput | number | null
    ativos?: AtivoUncheckedUpdateManyWithoutResponsavelNestedInput
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    chaveCargo?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    chaveCargo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CargoCreateInput = {
    nome: string
    usuarios?: UsuarioCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    id?: number
    nome: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    id?: number
    nome: string
  }

  export type CargoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CargoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtivoCreateInput = {
    nome: string
    ativos?: AtivoCreateNestedManyWithoutStatusInput
  }

  export type StatusAtivoUncheckedCreateInput = {
    id?: number
    nome: string
    ativos?: AtivoUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusAtivoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUpdateManyWithoutStatusNestedInput
  }

  export type StatusAtivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusAtivoCreateManyInput = {
    id?: number
    nome: string
  }

  export type StatusAtivoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusManutencaoCreateInput = {
    nome: string
    manutencoes?: ManutencaoCreateNestedManyWithoutStatusInput
  }

  export type StatusManutencaoUncheckedCreateInput = {
    id?: number
    nome: string
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusManutencaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    manutencoes?: ManutencaoUpdateManyWithoutStatusNestedInput
  }

  export type StatusManutencaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusManutencaoCreateManyInput = {
    id?: number
    nome: string
  }

  export type StatusManutencaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusManutencaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoCreateInput = {
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    responsavel: UsuarioCreateNestedOneWithoutManutencoesInput
    status?: StatusManutencaoCreateNestedOneWithoutManutencoesInput
  }

  export type ManutencaoUncheckedCreateInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveResponsavel: string
    chaveStatus: number
  }

  export type ManutencaoUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UsuarioUpdateOneRequiredWithoutManutencoesNestedInput
    status?: StatusManutencaoUpdateOneWithoutManutencoesNestedInput
  }

  export type ManutencaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveResponsavel?: StringFieldUpdateOperationsInput | string
    chaveStatus?: IntFieldUpdateOperationsInput | number
  }

  export type ManutencaoCreateManyInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveResponsavel: string
    chaveStatus: number
  }

  export type ManutencaoUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManutencaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveResponsavel?: StringFieldUpdateOperationsInput | string
    chaveStatus?: IntFieldUpdateOperationsInput | number
  }

  export type LocalizacaoCreateInput = {
    endereco: string
    ativos?: AtivoCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id?: number
    endereco: string
    ativos?: AtivoUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUpdateInput = {
    endereco?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoCreateManyInput = {
    id?: number
    endereco: string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StatusAtivoNullableScalarRelationFilter = {
    is?: StatusAtivoWhereInput | null
    isNot?: StatusAtivoWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type LocalizacaoNullableScalarRelationFilter = {
    is?: LocalizacaoWhereInput | null
    isNot?: LocalizacaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtivoOrderByRelevanceInput = {
    fields: AtivoOrderByRelevanceFieldEnum | AtivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codInterno?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    dataAquisicao?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrder
    chaveResponsavel?: SortOrder
    chaveLocalizacao?: SortOrder
  }

  export type AtivoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrder
    chaveLocalizacao?: SortOrder
  }

  export type AtivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codInterno?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    dataAquisicao?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrder
    chaveResponsavel?: SortOrder
    chaveLocalizacao?: SortOrder
  }

  export type AtivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codInterno?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    dataAquisicao?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrder
    chaveResponsavel?: SortOrder
    chaveLocalizacao?: SortOrder
  }

  export type AtivoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    qtdReparos?: SortOrder
    chaveStatus?: SortOrder
    chaveLocalizacao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CargoNullableScalarRelationFilter = {
    is?: CargoWhereInput | null
    isNot?: CargoWhereInput | null
  }

  export type AtivoListRelationFilter = {
    every?: AtivoWhereInput
    some?: AtivoWhereInput
    none?: AtivoWhereInput
  }

  export type ManutencaoListRelationFilter = {
    every?: ManutencaoWhereInput
    some?: ManutencaoWhereInput
    none?: ManutencaoWhereInput
  }

  export type AtivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManutencaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    chaveCargo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    chaveCargo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    chaveCargo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    chaveCargo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    chaveCargo?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargoOrderByRelevanceInput = {
    fields: CargoOrderByRelevanceFieldEnum | CargoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CargoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusAtivoOrderByRelevanceInput = {
    fields: StatusAtivoOrderByRelevanceFieldEnum | StatusAtivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StatusAtivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtivoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusAtivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtivoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusManutencaoOrderByRelevanceInput = {
    fields: StatusManutencaoOrderByRelevanceFieldEnum | StatusManutencaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StatusManutencaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusManutencaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusManutencaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusManutencaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StatusManutencaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type StatusManutencaoNullableScalarRelationFilter = {
    is?: StatusManutencaoWhereInput | null
    isNot?: StatusManutencaoWhereInput | null
  }

  export type ManutencaoOrderByRelevanceInput = {
    fields: ManutencaoOrderByRelevanceFieldEnum | ManutencaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManutencaoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    relatorio?: SortOrder
    chaveResponsavel?: SortOrder
    chaveStatus?: SortOrder
  }

  export type ManutencaoAvgOrderByAggregateInput = {
    id?: SortOrder
    chaveStatus?: SortOrder
  }

  export type ManutencaoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    relatorio?: SortOrder
    chaveResponsavel?: SortOrder
    chaveStatus?: SortOrder
  }

  export type ManutencaoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataEntrada?: SortOrder
    dataSaida?: SortOrder
    relatorio?: SortOrder
    chaveResponsavel?: SortOrder
    chaveStatus?: SortOrder
  }

  export type ManutencaoSumOrderByAggregateInput = {
    id?: SortOrder
    chaveStatus?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LocalizacaoOrderByRelevanceInput = {
    fields: LocalizacaoOrderByRelevanceFieldEnum | LocalizacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    endereco?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusAtivoCreateNestedOneWithoutAtivosInput = {
    create?: XOR<StatusAtivoCreateWithoutAtivosInput, StatusAtivoUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: StatusAtivoCreateOrConnectWithoutAtivosInput
    connect?: StatusAtivoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtivosInput = {
    create?: XOR<UsuarioCreateWithoutAtivosInput, UsuarioUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtivosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LocalizacaoCreateNestedOneWithoutAtivosInput = {
    create?: XOR<LocalizacaoCreateWithoutAtivosInput, LocalizacaoUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutAtivosInput
    connect?: LocalizacaoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StatusAtivoUpdateOneWithoutAtivosNestedInput = {
    create?: XOR<StatusAtivoCreateWithoutAtivosInput, StatusAtivoUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: StatusAtivoCreateOrConnectWithoutAtivosInput
    upsert?: StatusAtivoUpsertWithoutAtivosInput
    disconnect?: StatusAtivoWhereInput | boolean
    delete?: StatusAtivoWhereInput | boolean
    connect?: StatusAtivoWhereUniqueInput
    update?: XOR<XOR<StatusAtivoUpdateToOneWithWhereWithoutAtivosInput, StatusAtivoUpdateWithoutAtivosInput>, StatusAtivoUncheckedUpdateWithoutAtivosInput>
  }

  export type UsuarioUpdateOneWithoutAtivosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtivosInput, UsuarioUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtivosInput
    upsert?: UsuarioUpsertWithoutAtivosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtivosInput, UsuarioUpdateWithoutAtivosInput>, UsuarioUncheckedUpdateWithoutAtivosInput>
  }

  export type LocalizacaoUpdateOneWithoutAtivosNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutAtivosInput, LocalizacaoUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutAtivosInput
    upsert?: LocalizacaoUpsertWithoutAtivosInput
    disconnect?: LocalizacaoWhereInput | boolean
    delete?: LocalizacaoWhereInput | boolean
    connect?: LocalizacaoWhereUniqueInput
    update?: XOR<XOR<LocalizacaoUpdateToOneWithWhereWithoutAtivosInput, LocalizacaoUpdateWithoutAtivosInput>, LocalizacaoUncheckedUpdateWithoutAtivosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CargoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutUsuariosInput
    connect?: CargoWhereUniqueInput
  }

  export type AtivoCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput> | AtivoCreateWithoutResponsavelInput[] | AtivoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutResponsavelInput | AtivoCreateOrConnectWithoutResponsavelInput[]
    createMany?: AtivoCreateManyResponsavelInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type ManutencaoCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput> | ManutencaoCreateWithoutResponsavelInput[] | ManutencaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutResponsavelInput | ManutencaoCreateOrConnectWithoutResponsavelInput[]
    createMany?: ManutencaoCreateManyResponsavelInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type AtivoUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput> | AtivoCreateWithoutResponsavelInput[] | AtivoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutResponsavelInput | AtivoCreateOrConnectWithoutResponsavelInput[]
    createMany?: AtivoCreateManyResponsavelInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type ManutencaoUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput> | ManutencaoCreateWithoutResponsavelInput[] | ManutencaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutResponsavelInput | ManutencaoCreateOrConnectWithoutResponsavelInput[]
    createMany?: ManutencaoCreateManyResponsavelInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type CargoUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutUsuariosInput
    upsert?: CargoUpsertWithoutUsuariosInput
    disconnect?: CargoWhereInput | boolean
    delete?: CargoWhereInput | boolean
    connect?: CargoWhereUniqueInput
    update?: XOR<XOR<CargoUpdateToOneWithWhereWithoutUsuariosInput, CargoUpdateWithoutUsuariosInput>, CargoUncheckedUpdateWithoutUsuariosInput>
  }

  export type AtivoUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput> | AtivoCreateWithoutResponsavelInput[] | AtivoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutResponsavelInput | AtivoCreateOrConnectWithoutResponsavelInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutResponsavelInput | AtivoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: AtivoCreateManyResponsavelInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutResponsavelInput | AtivoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutResponsavelInput | AtivoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type ManutencaoUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput> | ManutencaoCreateWithoutResponsavelInput[] | ManutencaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutResponsavelInput | ManutencaoCreateOrConnectWithoutResponsavelInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutResponsavelInput | ManutencaoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ManutencaoCreateManyResponsavelInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutResponsavelInput | ManutencaoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutResponsavelInput | ManutencaoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type AtivoUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput> | AtivoCreateWithoutResponsavelInput[] | AtivoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutResponsavelInput | AtivoCreateOrConnectWithoutResponsavelInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutResponsavelInput | AtivoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: AtivoCreateManyResponsavelInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutResponsavelInput | AtivoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutResponsavelInput | AtivoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type ManutencaoUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput> | ManutencaoCreateWithoutResponsavelInput[] | ManutencaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutResponsavelInput | ManutencaoCreateOrConnectWithoutResponsavelInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutResponsavelInput | ManutencaoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ManutencaoCreateManyResponsavelInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutResponsavelInput | ManutencaoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutResponsavelInput | ManutencaoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutCargoInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutCargoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargoInput | UsuarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargoInput | UsuarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargoInput | UsuarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargoInput | UsuarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargoInput | UsuarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargoInput | UsuarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AtivoCreateNestedManyWithoutStatusInput = {
    create?: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput> | AtivoCreateWithoutStatusInput[] | AtivoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutStatusInput | AtivoCreateOrConnectWithoutStatusInput[]
    createMany?: AtivoCreateManyStatusInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AtivoUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput> | AtivoCreateWithoutStatusInput[] | AtivoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutStatusInput | AtivoCreateOrConnectWithoutStatusInput[]
    createMany?: AtivoCreateManyStatusInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AtivoUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput> | AtivoCreateWithoutStatusInput[] | AtivoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutStatusInput | AtivoCreateOrConnectWithoutStatusInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutStatusInput | AtivoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AtivoCreateManyStatusInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutStatusInput | AtivoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutStatusInput | AtivoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type AtivoUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput> | AtivoCreateWithoutStatusInput[] | AtivoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutStatusInput | AtivoCreateOrConnectWithoutStatusInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutStatusInput | AtivoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AtivoCreateManyStatusInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutStatusInput | AtivoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutStatusInput | AtivoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type ManutencaoCreateNestedManyWithoutStatusInput = {
    create?: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput> | ManutencaoCreateWithoutStatusInput[] | ManutencaoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutStatusInput | ManutencaoCreateOrConnectWithoutStatusInput[]
    createMany?: ManutencaoCreateManyStatusInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type ManutencaoUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput> | ManutencaoCreateWithoutStatusInput[] | ManutencaoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutStatusInput | ManutencaoCreateOrConnectWithoutStatusInput[]
    createMany?: ManutencaoCreateManyStatusInputEnvelope
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
  }

  export type ManutencaoUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput> | ManutencaoCreateWithoutStatusInput[] | ManutencaoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutStatusInput | ManutencaoCreateOrConnectWithoutStatusInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutStatusInput | ManutencaoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ManutencaoCreateManyStatusInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutStatusInput | ManutencaoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutStatusInput | ManutencaoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type ManutencaoUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput> | ManutencaoCreateWithoutStatusInput[] | ManutencaoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ManutencaoCreateOrConnectWithoutStatusInput | ManutencaoCreateOrConnectWithoutStatusInput[]
    upsert?: ManutencaoUpsertWithWhereUniqueWithoutStatusInput | ManutencaoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ManutencaoCreateManyStatusInputEnvelope
    set?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    disconnect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    delete?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    connect?: ManutencaoWhereUniqueInput | ManutencaoWhereUniqueInput[]
    update?: ManutencaoUpdateWithWhereUniqueWithoutStatusInput | ManutencaoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ManutencaoUpdateManyWithWhereWithoutStatusInput | ManutencaoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutManutencoesInput = {
    create?: XOR<UsuarioCreateWithoutManutencoesInput, UsuarioUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutManutencoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StatusManutencaoCreateNestedOneWithoutManutencoesInput = {
    create?: XOR<StatusManutencaoCreateWithoutManutencoesInput, StatusManutencaoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: StatusManutencaoCreateOrConnectWithoutManutencoesInput
    connect?: StatusManutencaoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutManutencoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutManutencoesInput, UsuarioUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutManutencoesInput
    upsert?: UsuarioUpsertWithoutManutencoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutManutencoesInput, UsuarioUpdateWithoutManutencoesInput>, UsuarioUncheckedUpdateWithoutManutencoesInput>
  }

  export type StatusManutencaoUpdateOneWithoutManutencoesNestedInput = {
    create?: XOR<StatusManutencaoCreateWithoutManutencoesInput, StatusManutencaoUncheckedCreateWithoutManutencoesInput>
    connectOrCreate?: StatusManutencaoCreateOrConnectWithoutManutencoesInput
    upsert?: StatusManutencaoUpsertWithoutManutencoesInput
    disconnect?: StatusManutencaoWhereInput | boolean
    delete?: StatusManutencaoWhereInput | boolean
    connect?: StatusManutencaoWhereUniqueInput
    update?: XOR<XOR<StatusManutencaoUpdateToOneWithWhereWithoutManutencoesInput, StatusManutencaoUpdateWithoutManutencoesInput>, StatusManutencaoUncheckedUpdateWithoutManutencoesInput>
  }

  export type AtivoCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput> | AtivoCreateWithoutLocalizacaoInput[] | AtivoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutLocalizacaoInput | AtivoCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: AtivoCreateManyLocalizacaoInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AtivoUncheckedCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput> | AtivoCreateWithoutLocalizacaoInput[] | AtivoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutLocalizacaoInput | AtivoCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: AtivoCreateManyLocalizacaoInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type AtivoUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput> | AtivoCreateWithoutLocalizacaoInput[] | AtivoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutLocalizacaoInput | AtivoCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutLocalizacaoInput | AtivoUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: AtivoCreateManyLocalizacaoInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutLocalizacaoInput | AtivoUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutLocalizacaoInput | AtivoUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type AtivoUncheckedUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput> | AtivoCreateWithoutLocalizacaoInput[] | AtivoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutLocalizacaoInput | AtivoCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutLocalizacaoInput | AtivoUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: AtivoCreateManyLocalizacaoInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutLocalizacaoInput | AtivoUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutLocalizacaoInput | AtivoUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StatusAtivoCreateWithoutAtivosInput = {
    nome: string
  }

  export type StatusAtivoUncheckedCreateWithoutAtivosInput = {
    id?: number
    nome: string
  }

  export type StatusAtivoCreateOrConnectWithoutAtivosInput = {
    where: StatusAtivoWhereUniqueInput
    create: XOR<StatusAtivoCreateWithoutAtivosInput, StatusAtivoUncheckedCreateWithoutAtivosInput>
  }

  export type UsuarioCreateWithoutAtivosInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    cargo?: CargoCreateNestedOneWithoutUsuariosInput
    manutencoes?: ManutencaoCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutAtivosInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    chaveCargo?: number | null
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutAtivosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtivosInput, UsuarioUncheckedCreateWithoutAtivosInput>
  }

  export type LocalizacaoCreateWithoutAtivosInput = {
    endereco: string
  }

  export type LocalizacaoUncheckedCreateWithoutAtivosInput = {
    id?: number
    endereco: string
  }

  export type LocalizacaoCreateOrConnectWithoutAtivosInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutAtivosInput, LocalizacaoUncheckedCreateWithoutAtivosInput>
  }

  export type StatusAtivoUpsertWithoutAtivosInput = {
    update: XOR<StatusAtivoUpdateWithoutAtivosInput, StatusAtivoUncheckedUpdateWithoutAtivosInput>
    create: XOR<StatusAtivoCreateWithoutAtivosInput, StatusAtivoUncheckedCreateWithoutAtivosInput>
    where?: StatusAtivoWhereInput
  }

  export type StatusAtivoUpdateToOneWithWhereWithoutAtivosInput = {
    where?: StatusAtivoWhereInput
    data: XOR<StatusAtivoUpdateWithoutAtivosInput, StatusAtivoUncheckedUpdateWithoutAtivosInput>
  }

  export type StatusAtivoUpdateWithoutAtivosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtivoUncheckedUpdateWithoutAtivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutAtivosInput = {
    update: XOR<UsuarioUpdateWithoutAtivosInput, UsuarioUncheckedUpdateWithoutAtivosInput>
    create: XOR<UsuarioCreateWithoutAtivosInput, UsuarioUncheckedCreateWithoutAtivosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtivosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtivosInput, UsuarioUncheckedUpdateWithoutAtivosInput>
  }

  export type UsuarioUpdateWithoutAtivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: CargoUpdateOneWithoutUsuariosNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    chaveCargo?: NullableIntFieldUpdateOperationsInput | number | null
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type LocalizacaoUpsertWithoutAtivosInput = {
    update: XOR<LocalizacaoUpdateWithoutAtivosInput, LocalizacaoUncheckedUpdateWithoutAtivosInput>
    create: XOR<LocalizacaoCreateWithoutAtivosInput, LocalizacaoUncheckedCreateWithoutAtivosInput>
    where?: LocalizacaoWhereInput
  }

  export type LocalizacaoUpdateToOneWithWhereWithoutAtivosInput = {
    where?: LocalizacaoWhereInput
    data: XOR<LocalizacaoUpdateWithoutAtivosInput, LocalizacaoUncheckedUpdateWithoutAtivosInput>
  }

  export type LocalizacaoUpdateWithoutAtivosInput = {
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoUncheckedUpdateWithoutAtivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type CargoCreateWithoutUsuariosInput = {
    nome: string
  }

  export type CargoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
  }

  export type CargoCreateOrConnectWithoutUsuariosInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
  }

  export type AtivoCreateWithoutResponsavelInput = {
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    status?: StatusAtivoCreateNestedOneWithoutAtivosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutAtivosInput
  }

  export type AtivoUncheckedCreateWithoutResponsavelInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveLocalizacao?: number | null
  }

  export type AtivoCreateOrConnectWithoutResponsavelInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput>
  }

  export type AtivoCreateManyResponsavelInputEnvelope = {
    data: AtivoCreateManyResponsavelInput | AtivoCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type ManutencaoCreateWithoutResponsavelInput = {
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    status?: StatusManutencaoCreateNestedOneWithoutManutencoesInput
  }

  export type ManutencaoUncheckedCreateWithoutResponsavelInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveStatus: number
  }

  export type ManutencaoCreateOrConnectWithoutResponsavelInput = {
    where: ManutencaoWhereUniqueInput
    create: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput>
  }

  export type ManutencaoCreateManyResponsavelInputEnvelope = {
    data: ManutencaoCreateManyResponsavelInput | ManutencaoCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type CargoUpsertWithoutUsuariosInput = {
    update: XOR<CargoUpdateWithoutUsuariosInput, CargoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    where?: CargoWhereInput
  }

  export type CargoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: CargoWhereInput
    data: XOR<CargoUpdateWithoutUsuariosInput, CargoUncheckedUpdateWithoutUsuariosInput>
  }

  export type CargoUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CargoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: AtivoWhereUniqueInput
    update: XOR<AtivoUpdateWithoutResponsavelInput, AtivoUncheckedUpdateWithoutResponsavelInput>
    create: XOR<AtivoCreateWithoutResponsavelInput, AtivoUncheckedCreateWithoutResponsavelInput>
  }

  export type AtivoUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: AtivoWhereUniqueInput
    data: XOR<AtivoUpdateWithoutResponsavelInput, AtivoUncheckedUpdateWithoutResponsavelInput>
  }

  export type AtivoUpdateManyWithWhereWithoutResponsavelInput = {
    where: AtivoScalarWhereInput
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type AtivoScalarWhereInput = {
    AND?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    OR?: AtivoScalarWhereInput[]
    NOT?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    id?: IntFilter<"Ativo"> | number
    nome?: StringFilter<"Ativo"> | string
    codInterno?: StringNullableFilter<"Ativo"> | string | null
    descricao?: StringNullableFilter<"Ativo"> | string | null
    valor?: DecimalFilter<"Ativo"> | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFilter<"Ativo"> | Date | string
    qtdReparos?: IntFilter<"Ativo"> | number
    chaveStatus?: IntNullableFilter<"Ativo"> | number | null
    chaveResponsavel?: StringNullableFilter<"Ativo"> | string | null
    chaveLocalizacao?: IntNullableFilter<"Ativo"> | number | null
  }

  export type ManutencaoUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: ManutencaoWhereUniqueInput
    update: XOR<ManutencaoUpdateWithoutResponsavelInput, ManutencaoUncheckedUpdateWithoutResponsavelInput>
    create: XOR<ManutencaoCreateWithoutResponsavelInput, ManutencaoUncheckedCreateWithoutResponsavelInput>
  }

  export type ManutencaoUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: ManutencaoWhereUniqueInput
    data: XOR<ManutencaoUpdateWithoutResponsavelInput, ManutencaoUncheckedUpdateWithoutResponsavelInput>
  }

  export type ManutencaoUpdateManyWithWhereWithoutResponsavelInput = {
    where: ManutencaoScalarWhereInput
    data: XOR<ManutencaoUpdateManyMutationInput, ManutencaoUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type ManutencaoScalarWhereInput = {
    AND?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
    OR?: ManutencaoScalarWhereInput[]
    NOT?: ManutencaoScalarWhereInput | ManutencaoScalarWhereInput[]
    id?: IntFilter<"Manutencao"> | number
    descricao?: StringNullableFilter<"Manutencao"> | string | null
    dataEntrada?: DateTimeFilter<"Manutencao"> | Date | string
    dataSaida?: DateTimeNullableFilter<"Manutencao"> | Date | string | null
    relatorio?: StringNullableFilter<"Manutencao"> | string | null
    chaveResponsavel?: StringFilter<"Manutencao"> | string
    chaveStatus?: IntFilter<"Manutencao"> | number
  }

  export type UsuarioCreateWithoutCargoInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    ativos?: AtivoCreateNestedManyWithoutResponsavelInput
    manutencoes?: ManutencaoCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutCargoInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    ativos?: AtivoUncheckedCreateNestedManyWithoutResponsavelInput
    manutencoes?: ManutencaoUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput>
  }

  export type UsuarioCreateManyCargoInputEnvelope = {
    data: UsuarioCreateManyCargoInput | UsuarioCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutCargoInput, UsuarioUncheckedUpdateWithoutCargoInput>
    create: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutCargoInput, UsuarioUncheckedUpdateWithoutCargoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutCargoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutCargoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    login?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    chaveCargo?: IntNullableFilter<"Usuario"> | number | null
  }

  export type AtivoCreateWithoutStatusInput = {
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    responsavel?: UsuarioCreateNestedOneWithoutAtivosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutAtivosInput
  }

  export type AtivoUncheckedCreateWithoutStatusInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveResponsavel?: string | null
    chaveLocalizacao?: number | null
  }

  export type AtivoCreateOrConnectWithoutStatusInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput>
  }

  export type AtivoCreateManyStatusInputEnvelope = {
    data: AtivoCreateManyStatusInput | AtivoCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type AtivoUpsertWithWhereUniqueWithoutStatusInput = {
    where: AtivoWhereUniqueInput
    update: XOR<AtivoUpdateWithoutStatusInput, AtivoUncheckedUpdateWithoutStatusInput>
    create: XOR<AtivoCreateWithoutStatusInput, AtivoUncheckedCreateWithoutStatusInput>
  }

  export type AtivoUpdateWithWhereUniqueWithoutStatusInput = {
    where: AtivoWhereUniqueInput
    data: XOR<AtivoUpdateWithoutStatusInput, AtivoUncheckedUpdateWithoutStatusInput>
  }

  export type AtivoUpdateManyWithWhereWithoutStatusInput = {
    where: AtivoScalarWhereInput
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyWithoutStatusInput>
  }

  export type ManutencaoCreateWithoutStatusInput = {
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    responsavel: UsuarioCreateNestedOneWithoutManutencoesInput
  }

  export type ManutencaoUncheckedCreateWithoutStatusInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveResponsavel: string
  }

  export type ManutencaoCreateOrConnectWithoutStatusInput = {
    where: ManutencaoWhereUniqueInput
    create: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput>
  }

  export type ManutencaoCreateManyStatusInputEnvelope = {
    data: ManutencaoCreateManyStatusInput | ManutencaoCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type ManutencaoUpsertWithWhereUniqueWithoutStatusInput = {
    where: ManutencaoWhereUniqueInput
    update: XOR<ManutencaoUpdateWithoutStatusInput, ManutencaoUncheckedUpdateWithoutStatusInput>
    create: XOR<ManutencaoCreateWithoutStatusInput, ManutencaoUncheckedCreateWithoutStatusInput>
  }

  export type ManutencaoUpdateWithWhereUniqueWithoutStatusInput = {
    where: ManutencaoWhereUniqueInput
    data: XOR<ManutencaoUpdateWithoutStatusInput, ManutencaoUncheckedUpdateWithoutStatusInput>
  }

  export type ManutencaoUpdateManyWithWhereWithoutStatusInput = {
    where: ManutencaoScalarWhereInput
    data: XOR<ManutencaoUpdateManyMutationInput, ManutencaoUncheckedUpdateManyWithoutStatusInput>
  }

  export type UsuarioCreateWithoutManutencoesInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    cargo?: CargoCreateNestedOneWithoutUsuariosInput
    ativos?: AtivoCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutManutencoesInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
    chaveCargo?: number | null
    ativos?: AtivoUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutManutencoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutManutencoesInput, UsuarioUncheckedCreateWithoutManutencoesInput>
  }

  export type StatusManutencaoCreateWithoutManutencoesInput = {
    nome: string
  }

  export type StatusManutencaoUncheckedCreateWithoutManutencoesInput = {
    id?: number
    nome: string
  }

  export type StatusManutencaoCreateOrConnectWithoutManutencoesInput = {
    where: StatusManutencaoWhereUniqueInput
    create: XOR<StatusManutencaoCreateWithoutManutencoesInput, StatusManutencaoUncheckedCreateWithoutManutencoesInput>
  }

  export type UsuarioUpsertWithoutManutencoesInput = {
    update: XOR<UsuarioUpdateWithoutManutencoesInput, UsuarioUncheckedUpdateWithoutManutencoesInput>
    create: XOR<UsuarioCreateWithoutManutencoesInput, UsuarioUncheckedCreateWithoutManutencoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutManutencoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutManutencoesInput, UsuarioUncheckedUpdateWithoutManutencoesInput>
  }

  export type UsuarioUpdateWithoutManutencoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: CargoUpdateOneWithoutUsuariosNestedInput
    ativos?: AtivoUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutManutencoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    chaveCargo?: NullableIntFieldUpdateOperationsInput | number | null
    ativos?: AtivoUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type StatusManutencaoUpsertWithoutManutencoesInput = {
    update: XOR<StatusManutencaoUpdateWithoutManutencoesInput, StatusManutencaoUncheckedUpdateWithoutManutencoesInput>
    create: XOR<StatusManutencaoCreateWithoutManutencoesInput, StatusManutencaoUncheckedCreateWithoutManutencoesInput>
    where?: StatusManutencaoWhereInput
  }

  export type StatusManutencaoUpdateToOneWithWhereWithoutManutencoesInput = {
    where?: StatusManutencaoWhereInput
    data: XOR<StatusManutencaoUpdateWithoutManutencoesInput, StatusManutencaoUncheckedUpdateWithoutManutencoesInput>
  }

  export type StatusManutencaoUpdateWithoutManutencoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusManutencaoUncheckedUpdateWithoutManutencoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoCreateWithoutLocalizacaoInput = {
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    status?: StatusAtivoCreateNestedOneWithoutAtivosInput
    responsavel?: UsuarioCreateNestedOneWithoutAtivosInput
  }

  export type AtivoUncheckedCreateWithoutLocalizacaoInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveResponsavel?: string | null
  }

  export type AtivoCreateOrConnectWithoutLocalizacaoInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput>
  }

  export type AtivoCreateManyLocalizacaoInputEnvelope = {
    data: AtivoCreateManyLocalizacaoInput | AtivoCreateManyLocalizacaoInput[]
    skipDuplicates?: boolean
  }

  export type AtivoUpsertWithWhereUniqueWithoutLocalizacaoInput = {
    where: AtivoWhereUniqueInput
    update: XOR<AtivoUpdateWithoutLocalizacaoInput, AtivoUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<AtivoCreateWithoutLocalizacaoInput, AtivoUncheckedCreateWithoutLocalizacaoInput>
  }

  export type AtivoUpdateWithWhereUniqueWithoutLocalizacaoInput = {
    where: AtivoWhereUniqueInput
    data: XOR<AtivoUpdateWithoutLocalizacaoInput, AtivoUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type AtivoUpdateManyWithWhereWithoutLocalizacaoInput = {
    where: AtivoScalarWhereInput
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyWithoutLocalizacaoInput>
  }

  export type AtivoCreateManyResponsavelInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveLocalizacao?: number | null
  }

  export type ManutencaoCreateManyResponsavelInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveStatus: number
  }

  export type AtivoUpdateWithoutResponsavelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    status?: StatusAtivoUpdateOneWithoutAtivosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutAtivosNestedInput
  }

  export type AtivoUncheckedUpdateWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AtivoUncheckedUpdateManyWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ManutencaoUpdateWithoutResponsavelInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StatusManutencaoUpdateOneWithoutManutencoesNestedInput
  }

  export type ManutencaoUncheckedUpdateWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveStatus?: IntFieldUpdateOperationsInput | number
  }

  export type ManutencaoUncheckedUpdateManyWithoutResponsavelInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveStatus?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyCargoInput = {
    id?: string
    nome: string
    email: string
    login: string
    senha: string
  }

  export type UsuarioUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUpdateManyWithoutResponsavelNestedInput
    manutencoes?: ManutencaoUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativos?: AtivoUncheckedUpdateManyWithoutResponsavelNestedInput
    manutencoes?: ManutencaoUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutCargoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoCreateManyStatusInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveResponsavel?: string | null
    chaveLocalizacao?: number | null
  }

  export type AtivoUpdateWithoutStatusInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    responsavel?: UsuarioUpdateOneWithoutAtivosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutAtivosNestedInput
  }

  export type AtivoUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AtivoUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    chaveLocalizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ManutencaoCreateManyStatusInput = {
    id?: number
    descricao?: string | null
    dataEntrada: Date | string
    dataSaida?: Date | string | null
    relatorio?: string | null
    chaveResponsavel: string
  }

  export type ManutencaoUpdateWithoutStatusInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UsuarioUpdateOneRequiredWithoutManutencoesNestedInput
  }

  export type ManutencaoUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveResponsavel?: StringFieldUpdateOperationsInput | string
  }

  export type ManutencaoUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatorio?: NullableStringFieldUpdateOperationsInput | string | null
    chaveResponsavel?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoCreateManyLocalizacaoInput = {
    id?: number
    nome: string
    codInterno?: string | null
    descricao?: string | null
    valor: Decimal | DecimalJsLike | number | string
    dataAquisicao: Date | string
    qtdReparos: number
    chaveStatus?: number | null
    chaveResponsavel?: string | null
  }

  export type AtivoUpdateWithoutLocalizacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    status?: StatusAtivoUpdateOneWithoutAtivosNestedInput
    responsavel?: UsuarioUpdateOneWithoutAtivosNestedInput
  }

  export type AtivoUncheckedUpdateWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtivoUncheckedUpdateManyWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codInterno?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAquisicao?: DateTimeFieldUpdateOperationsInput | Date | string
    qtdReparos?: IntFieldUpdateOperationsInput | number
    chaveStatus?: NullableIntFieldUpdateOperationsInput | number | null
    chaveResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}