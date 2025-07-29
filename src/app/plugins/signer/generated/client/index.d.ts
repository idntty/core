
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserChallenge
 * 
 */
export type UserChallenge = $Result.DefaultSelection<Prisma.$UserChallengePayload>
/**
 * Model UserData
 * 
 */
export type UserData = $Result.DefaultSelection<Prisma.$UserDataPayload>
/**
 * Model AuthenticatorDevice
 * 
 */
export type AuthenticatorDevice = $Result.DefaultSelection<Prisma.$AuthenticatorDevicePayload>
/**
 * Model AuthenticatorTransport
 * 
 */
export type AuthenticatorTransport = $Result.DefaultSelection<Prisma.$AuthenticatorTransportPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthenticatorTransportFuture: {
  ble: 'ble',
  cable: 'cable',
  hybrid: 'hybrid',
  internal: 'internal',
  nfc: 'nfc',
  smart_card: 'smart_card',
  usb: 'usb'
};

export type AuthenticatorTransportFuture = (typeof AuthenticatorTransportFuture)[keyof typeof AuthenticatorTransportFuture]

}

export type AuthenticatorTransportFuture = $Enums.AuthenticatorTransportFuture

export const AuthenticatorTransportFuture: typeof $Enums.AuthenticatorTransportFuture

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChallenge`: Exposes CRUD operations for the **UserChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChallenges
    * const userChallenges = await prisma.userChallenge.findMany()
    * ```
    */
  get userChallenge(): Prisma.UserChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userData`: Exposes CRUD operations for the **UserData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserData
    * const userData = await prisma.userData.findMany()
    * ```
    */
  get userData(): Prisma.UserDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticatorDevice`: Exposes CRUD operations for the **AuthenticatorDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthenticatorDevices
    * const authenticatorDevices = await prisma.authenticatorDevice.findMany()
    * ```
    */
  get authenticatorDevice(): Prisma.AuthenticatorDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticatorTransport`: Exposes CRUD operations for the **AuthenticatorTransport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthenticatorTransports
    * const authenticatorTransports = await prisma.authenticatorTransport.findMany()
    * ```
    */
  get authenticatorTransport(): Prisma.AuthenticatorTransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    UserChallenge: 'UserChallenge',
    UserData: 'UserData',
    AuthenticatorDevice: 'AuthenticatorDevice',
    AuthenticatorTransport: 'AuthenticatorTransport',
    Notification: 'Notification'
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
      modelProps: "user" | "userChallenge" | "userData" | "authenticatorDevice" | "authenticatorTransport" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserChallenge: {
        payload: Prisma.$UserChallengePayload<ExtArgs>
        fields: Prisma.UserChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findFirst: {
            args: Prisma.UserChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findMany: {
            args: Prisma.UserChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          create: {
            args: Prisma.UserChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          createMany: {
            args: Prisma.UserChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          delete: {
            args: Prisma.UserChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          update: {
            args: Prisma.UserChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          deleteMany: {
            args: Prisma.UserChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          upsert: {
            args: Prisma.UserChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          aggregate: {
            args: Prisma.UserChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChallenge>
          }
          groupBy: {
            args: Prisma.UserChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeCountAggregateOutputType> | number
          }
        }
      }
      UserData: {
        payload: Prisma.$UserDataPayload<ExtArgs>
        fields: Prisma.UserDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findFirst: {
            args: Prisma.UserDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          findMany: {
            args: Prisma.UserDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          create: {
            args: Prisma.UserDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          createMany: {
            args: Prisma.UserDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          delete: {
            args: Prisma.UserDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          update: {
            args: Prisma.UserDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          deleteMany: {
            args: Prisma.UserDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>[]
          }
          upsert: {
            args: Prisma.UserDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDataPayload>
          }
          aggregate: {
            args: Prisma.UserDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserData>
          }
          groupBy: {
            args: Prisma.UserDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserDataCountAggregateOutputType> | number
          }
        }
      }
      AuthenticatorDevice: {
        payload: Prisma.$AuthenticatorDevicePayload<ExtArgs>
        fields: Prisma.AuthenticatorDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          findMany: {
            args: Prisma.AuthenticatorDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>[]
          }
          create: {
            args: Prisma.AuthenticatorDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          createMany: {
            args: Prisma.AuthenticatorDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticatorDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>[]
          }
          delete: {
            args: Prisma.AuthenticatorDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          update: {
            args: Prisma.AuthenticatorDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticatorDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>[]
          }
          upsert: {
            args: Prisma.AuthenticatorDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorDevicePayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticatorDevice>
          }
          groupBy: {
            args: Prisma.AuthenticatorDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorDeviceCountAggregateOutputType> | number
          }
        }
      }
      AuthenticatorTransport: {
        payload: Prisma.$AuthenticatorTransportPayload<ExtArgs>
        fields: Prisma.AuthenticatorTransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorTransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorTransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorTransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorTransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorTransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorTransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorTransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticatorTransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>[]
          }
          delete: {
            args: Prisma.AuthenticatorTransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          update: {
            args: Prisma.AuthenticatorTransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorTransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorTransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticatorTransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>[]
          }
          upsert: {
            args: Prisma.AuthenticatorTransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorTransportPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorTransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticatorTransport>
          }
          groupBy: {
            args: Prisma.AuthenticatorTransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorTransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorTransportCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorTransportCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    userChallenge?: UserChallengeOmit
    userData?: UserDataOmit
    authenticatorDevice?: AuthenticatorDeviceOmit
    authenticatorTransport?: AuthenticatorTransportOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    devices: number
    userData: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    userData?: boolean | UserCountOutputTypeCountUserDataArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
  }


  /**
   * Count Type AuthenticatorDeviceCountOutputType
   */

  export type AuthenticatorDeviceCountOutputType = {
    transports: number
  }

  export type AuthenticatorDeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transports?: boolean | AuthenticatorDeviceCountOutputTypeCountTransportsArgs
  }

  // Custom InputTypes
  /**
   * AuthenticatorDeviceCountOutputType without action
   */
  export type AuthenticatorDeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDeviceCountOutputType
     */
    select?: AuthenticatorDeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthenticatorDeviceCountOutputType without action
   */
  export type AuthenticatorDeviceCountOutputTypeCountTransportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorTransportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    public_key: string | null
    address: string | null
    username: string | null
    isAuthority: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    public_key: string | null
    address: string | null
    username: string | null
    isAuthority: boolean | null
  }

  export type UserCountAggregateOutputType = {
    public_key: number
    address: number
    username: number
    layout: number
    isAuthority: number
    badge_collections: number
    badge_tags: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    public_key?: true
    address?: true
    username?: true
    isAuthority?: true
  }

  export type UserMaxAggregateInputType = {
    public_key?: true
    address?: true
    username?: true
    isAuthority?: true
  }

  export type UserCountAggregateInputType = {
    public_key?: true
    address?: true
    username?: true
    layout?: true
    isAuthority?: true
    badge_collections?: true
    badge_tags?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    public_key: string
    address: string
    username: string
    layout: JsonValue
    isAuthority: boolean
    badge_collections: string[]
    badge_tags: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    address?: boolean
    username?: boolean
    layout?: boolean
    isAuthority?: boolean
    badge_collections?: boolean
    badge_tags?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    userData?: boolean | User$userDataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    address?: boolean
    username?: boolean
    layout?: boolean
    isAuthority?: boolean
    badge_collections?: boolean
    badge_tags?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    address?: boolean
    username?: boolean
    layout?: boolean
    isAuthority?: boolean
    badge_collections?: boolean
    badge_tags?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    public_key?: boolean
    address?: boolean
    username?: boolean
    layout?: boolean
    isAuthority?: boolean
    badge_collections?: boolean
    badge_tags?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"public_key" | "address" | "username" | "layout" | "isAuthority" | "badge_collections" | "badge_tags", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | User$devicesArgs<ExtArgs>
    userData?: boolean | User$userDataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      devices: Prisma.$AuthenticatorDevicePayload<ExtArgs>[]
      userData: Prisma.$UserDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      public_key: string
      address: string
      username: string
      layout: Prisma.JsonValue
      isAuthority: boolean
      badge_collections: string[]
      badge_tags: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `public_key`
     * const userWithPublic_keyOnly = await prisma.user.findMany({ select: { public_key: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `public_key`
     * const userWithPublic_keyOnly = await prisma.user.createManyAndReturn({
     *   select: { public_key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `public_key`
     * const userWithPublic_keyOnly = await prisma.user.updateManyAndReturn({
     *   select: { public_key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userData<T extends User$userDataArgs<ExtArgs> = {}>(args?: Subset<T, User$userDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly public_key: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly layout: FieldRef<"User", 'Json'>
    readonly isAuthority: FieldRef<"User", 'Boolean'>
    readonly badge_collections: FieldRef<"User", 'String[]'>
    readonly badge_tags: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    where?: AuthenticatorDeviceWhereInput
    orderBy?: AuthenticatorDeviceOrderByWithRelationInput | AuthenticatorDeviceOrderByWithRelationInput[]
    cursor?: AuthenticatorDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorDeviceScalarFieldEnum | AuthenticatorDeviceScalarFieldEnum[]
  }

  /**
   * User.userData
   */
  export type User$userDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    cursor?: UserDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserChallenge
   */

  export type AggregateUserChallenge = {
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  export type UserChallengeAvgAggregateOutputType = {
    id: number | null
  }

  export type UserChallengeSumAggregateOutputType = {
    id: number | null
  }

  export type UserChallengeMinAggregateOutputType = {
    id: number | null
    public_key: string | null
    challenge: string | null
  }

  export type UserChallengeMaxAggregateOutputType = {
    id: number | null
    public_key: string | null
    challenge: string | null
  }

  export type UserChallengeCountAggregateOutputType = {
    id: number
    public_key: number
    challenge: number
    _all: number
  }


  export type UserChallengeAvgAggregateInputType = {
    id?: true
  }

  export type UserChallengeSumAggregateInputType = {
    id?: true
  }

  export type UserChallengeMinAggregateInputType = {
    id?: true
    public_key?: true
    challenge?: true
  }

  export type UserChallengeMaxAggregateInputType = {
    id?: true
    public_key?: true
    challenge?: true
  }

  export type UserChallengeCountAggregateInputType = {
    id?: true
    public_key?: true
    challenge?: true
    _all?: true
  }

  export type UserChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenge to aggregate.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChallenges
    **/
    _count?: true | UserChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChallengeMaxAggregateInputType
  }

  export type GetUserChallengeAggregateType<T extends UserChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChallenge[P]>
      : GetScalarType<T[P], AggregateUserChallenge[P]>
  }




  export type UserChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithAggregationInput | UserChallengeOrderByWithAggregationInput[]
    by: UserChallengeScalarFieldEnum[] | UserChallengeScalarFieldEnum
    having?: UserChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChallengeCountAggregateInputType | true
    _avg?: UserChallengeAvgAggregateInputType
    _sum?: UserChallengeSumAggregateInputType
    _min?: UserChallengeMinAggregateInputType
    _max?: UserChallengeMaxAggregateInputType
  }

  export type UserChallengeGroupByOutputType = {
    id: number
    public_key: string
    challenge: string | null
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  type GetUserChallengeGroupByPayload<T extends UserChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
        }
      >
    >


  export type UserChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    challenge?: boolean
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    challenge?: boolean
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    challenge?: boolean
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectScalar = {
    id?: boolean
    public_key?: boolean
    challenge?: boolean
  }

  export type UserChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "public_key" | "challenge", ExtArgs["result"]["userChallenge"]>

  export type $UserChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChallenge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      public_key: string
      challenge: string | null
    }, ExtArgs["result"]["userChallenge"]>
    composites: {}
  }

  type UserChallengeGetPayload<S extends boolean | null | undefined | UserChallengeDefaultArgs> = $Result.GetResult<Prisma.$UserChallengePayload, S>

  type UserChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChallengeCountAggregateInputType | true
    }

  export interface UserChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChallenge'], meta: { name: 'UserChallenge' } }
    /**
     * Find zero or one UserChallenge that matches the filter.
     * @param {UserChallengeFindUniqueArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChallengeFindUniqueArgs>(args: SelectSubset<T, UserChallengeFindUniqueArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChallengeFindUniqueOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChallengeFindFirstArgs>(args?: SelectSubset<T, UserChallengeFindFirstArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany()
     * 
     * // Get first 10 UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChallengeFindManyArgs>(args?: SelectSubset<T, UserChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChallenge.
     * @param {UserChallengeCreateArgs} args - Arguments to create a UserChallenge.
     * @example
     * // Create one UserChallenge
     * const UserChallenge = await prisma.userChallenge.create({
     *   data: {
     *     // ... data to create a UserChallenge
     *   }
     * })
     * 
     */
    create<T extends UserChallengeCreateArgs>(args: SelectSubset<T, UserChallengeCreateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChallenges.
     * @param {UserChallengeCreateManyArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChallengeCreateManyArgs>(args?: SelectSubset<T, UserChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserChallenges and returns the data saved in the database.
     * @param {UserChallengeCreateManyAndReturnArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserChallenge.
     * @param {UserChallengeDeleteArgs} args - Arguments to delete one UserChallenge.
     * @example
     * // Delete one UserChallenge
     * const UserChallenge = await prisma.userChallenge.delete({
     *   where: {
     *     // ... filter to delete one UserChallenge
     *   }
     * })
     * 
     */
    delete<T extends UserChallengeDeleteArgs>(args: SelectSubset<T, UserChallengeDeleteArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChallenge.
     * @param {UserChallengeUpdateArgs} args - Arguments to update one UserChallenge.
     * @example
     * // Update one UserChallenge
     * const userChallenge = await prisma.userChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChallengeUpdateArgs>(args: SelectSubset<T, UserChallengeUpdateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChallenges.
     * @param {UserChallengeDeleteManyArgs} args - Arguments to filter UserChallenges to delete.
     * @example
     * // Delete a few UserChallenges
     * const { count } = await prisma.userChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChallengeDeleteManyArgs>(args?: SelectSubset<T, UserChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChallengeUpdateManyArgs>(args: SelectSubset<T, UserChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges and returns the data updated in the database.
     * @param {UserChallengeUpdateManyAndReturnArgs} args - Arguments to update many UserChallenges.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserChallenge.
     * @param {UserChallengeUpsertArgs} args - Arguments to update or create a UserChallenge.
     * @example
     * // Update or create a UserChallenge
     * const userChallenge = await prisma.userChallenge.upsert({
     *   create: {
     *     // ... data to create a UserChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChallenge we want to update
     *   }
     * })
     */
    upsert<T extends UserChallengeUpsertArgs>(args: SelectSubset<T, UserChallengeUpsertArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeCountArgs} args - Arguments to filter UserChallenges to count.
     * @example
     * // Count the number of UserChallenges
     * const count = await prisma.userChallenge.count({
     *   where: {
     *     // ... the filter for the UserChallenges we want to count
     *   }
     * })
    **/
    count<T extends UserChallengeCountArgs>(
      args?: Subset<T, UserChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserChallengeAggregateArgs>(args: Subset<T, UserChallengeAggregateArgs>): Prisma.PrismaPromise<GetUserChallengeAggregateType<T>>

    /**
     * Group by UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeGroupByArgs} args - Group by arguments.
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
      T extends UserChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChallengeGroupByArgs['orderBy'] }
        : { orderBy?: UserChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChallenge model
   */
  readonly fields: UserChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserChallenge model
   */
  interface UserChallengeFieldRefs {
    readonly id: FieldRef<"UserChallenge", 'Int'>
    readonly public_key: FieldRef<"UserChallenge", 'String'>
    readonly challenge: FieldRef<"UserChallenge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserChallenge findUnique
   */
  export type UserChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findUniqueOrThrow
   */
  export type UserChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findFirst
   */
  export type UserChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findFirstOrThrow
   */
  export type UserChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findMany
   */
  export type UserChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter, which UserChallenges to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge create
   */
  export type UserChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data needed to create a UserChallenge.
     */
    data: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
  }

  /**
   * UserChallenge createMany
   */
  export type UserChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge createManyAndReturn
   */
  export type UserChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge update
   */
  export type UserChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data needed to update a UserChallenge.
     */
    data: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
    /**
     * Choose, which UserChallenge to update.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge updateMany
   */
  export type UserChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
  }

  /**
   * UserChallenge updateManyAndReturn
   */
  export type UserChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
  }

  /**
   * UserChallenge upsert
   */
  export type UserChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The filter to search for the UserChallenge to update in case it exists.
     */
    where: UserChallengeWhereUniqueInput
    /**
     * In case the UserChallenge found by the `where` argument doesn't exist, create a new UserChallenge with this data.
     */
    create: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
    /**
     * In case the UserChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
  }

  /**
   * UserChallenge delete
   */
  export type UserChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Filter which UserChallenge to delete.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge deleteMany
   */
  export type UserChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenges to delete
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to delete.
     */
    limit?: number
  }

  /**
   * UserChallenge without action
   */
  export type UserChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
  }


  /**
   * Model UserData
   */

  export type AggregateUserData = {
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  export type UserDataAvgAggregateOutputType = {
    id: number | null
  }

  export type UserDataSumAggregateOutputType = {
    id: number | null
  }

  export type UserDataMinAggregateOutputType = {
    id: number | null
    public_key: string | null
    address: string | null
    domain: string | null
    label: string | null
    value: string | null
    nonce: string | null
  }

  export type UserDataMaxAggregateOutputType = {
    id: number | null
    public_key: string | null
    address: string | null
    domain: string | null
    label: string | null
    value: string | null
    nonce: string | null
  }

  export type UserDataCountAggregateOutputType = {
    id: number
    public_key: number
    address: number
    domain: number
    label: number
    value: number
    nonce: number
    _all: number
  }


  export type UserDataAvgAggregateInputType = {
    id?: true
  }

  export type UserDataSumAggregateInputType = {
    id?: true
  }

  export type UserDataMinAggregateInputType = {
    id?: true
    public_key?: true
    address?: true
    domain?: true
    label?: true
    value?: true
    nonce?: true
  }

  export type UserDataMaxAggregateInputType = {
    id?: true
    public_key?: true
    address?: true
    domain?: true
    label?: true
    value?: true
    nonce?: true
  }

  export type UserDataCountAggregateInputType = {
    id?: true
    public_key?: true
    address?: true
    domain?: true
    label?: true
    value?: true
    nonce?: true
    _all?: true
  }

  export type UserDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to aggregate.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserData
    **/
    _count?: true | UserDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDataMaxAggregateInputType
  }

  export type GetUserDataAggregateType<T extends UserDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserData[P]>
      : GetScalarType<T[P], AggregateUserData[P]>
  }




  export type UserDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDataWhereInput
    orderBy?: UserDataOrderByWithAggregationInput | UserDataOrderByWithAggregationInput[]
    by: UserDataScalarFieldEnum[] | UserDataScalarFieldEnum
    having?: UserDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDataCountAggregateInputType | true
    _avg?: UserDataAvgAggregateInputType
    _sum?: UserDataSumAggregateInputType
    _min?: UserDataMinAggregateInputType
    _max?: UserDataMaxAggregateInputType
  }

  export type UserDataGroupByOutputType = {
    id: number
    public_key: string
    address: string
    domain: string | null
    label: string
    value: string
    nonce: string
    _count: UserDataCountAggregateOutputType | null
    _avg: UserDataAvgAggregateOutputType | null
    _sum: UserDataSumAggregateOutputType | null
    _min: UserDataMinAggregateOutputType | null
    _max: UserDataMaxAggregateOutputType | null
  }

  type GetUserDataGroupByPayload<T extends UserDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserDataGroupByOutputType[P]>
        }
      >
    >


  export type UserDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    address?: boolean
    domain?: boolean
    label?: boolean
    value?: boolean
    nonce?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    address?: boolean
    domain?: boolean
    label?: boolean
    value?: boolean
    nonce?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    address?: boolean
    domain?: boolean
    label?: boolean
    value?: boolean
    nonce?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userData"]>

  export type UserDataSelectScalar = {
    id?: boolean
    public_key?: boolean
    address?: boolean
    domain?: boolean
    label?: boolean
    value?: boolean
    nonce?: boolean
  }

  export type UserDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "public_key" | "address" | "domain" | "label" | "value" | "nonce", ExtArgs["result"]["userData"]>
  export type UserDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      public_key: string
      address: string
      domain: string | null
      label: string
      value: string
      nonce: string
    }, ExtArgs["result"]["userData"]>
    composites: {}
  }

  type UserDataGetPayload<S extends boolean | null | undefined | UserDataDefaultArgs> = $Result.GetResult<Prisma.$UserDataPayload, S>

  type UserDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDataCountAggregateInputType | true
    }

  export interface UserDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserData'], meta: { name: 'UserData' } }
    /**
     * Find zero or one UserData that matches the filter.
     * @param {UserDataFindUniqueArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDataFindUniqueArgs>(args: SelectSubset<T, UserDataFindUniqueArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDataFindUniqueOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDataFindFirstArgs>(args?: SelectSubset<T, UserDataFindFirstArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindFirstOrThrowArgs} args - Arguments to find a UserData
     * @example
     * // Get one UserData
     * const userData = await prisma.userData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserData
     * const userData = await prisma.userData.findMany()
     * 
     * // Get first 10 UserData
     * const userData = await prisma.userData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDataWithIdOnly = await prisma.userData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDataFindManyArgs>(args?: SelectSubset<T, UserDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserData.
     * @param {UserDataCreateArgs} args - Arguments to create a UserData.
     * @example
     * // Create one UserData
     * const UserData = await prisma.userData.create({
     *   data: {
     *     // ... data to create a UserData
     *   }
     * })
     * 
     */
    create<T extends UserDataCreateArgs>(args: SelectSubset<T, UserDataCreateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserData.
     * @param {UserDataCreateManyArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDataCreateManyArgs>(args?: SelectSubset<T, UserDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserData and returns the data saved in the database.
     * @param {UserDataCreateManyAndReturnArgs} args - Arguments to create many UserData.
     * @example
     * // Create many UserData
     * const userData = await prisma.userData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserData.
     * @param {UserDataDeleteArgs} args - Arguments to delete one UserData.
     * @example
     * // Delete one UserData
     * const UserData = await prisma.userData.delete({
     *   where: {
     *     // ... filter to delete one UserData
     *   }
     * })
     * 
     */
    delete<T extends UserDataDeleteArgs>(args: SelectSubset<T, UserDataDeleteArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserData.
     * @param {UserDataUpdateArgs} args - Arguments to update one UserData.
     * @example
     * // Update one UserData
     * const userData = await prisma.userData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDataUpdateArgs>(args: SelectSubset<T, UserDataUpdateArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserData.
     * @param {UserDataDeleteManyArgs} args - Arguments to filter UserData to delete.
     * @example
     * // Delete a few UserData
     * const { count } = await prisma.userData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDataDeleteManyArgs>(args?: SelectSubset<T, UserDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDataUpdateManyArgs>(args: SelectSubset<T, UserDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserData and returns the data updated in the database.
     * @param {UserDataUpdateManyAndReturnArgs} args - Arguments to update many UserData.
     * @example
     * // Update many UserData
     * const userData = await prisma.userData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserData and only return the `id`
     * const userDataWithIdOnly = await prisma.userData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserData.
     * @param {UserDataUpsertArgs} args - Arguments to update or create a UserData.
     * @example
     * // Update or create a UserData
     * const userData = await prisma.userData.upsert({
     *   create: {
     *     // ... data to create a UserData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserData we want to update
     *   }
     * })
     */
    upsert<T extends UserDataUpsertArgs>(args: SelectSubset<T, UserDataUpsertArgs<ExtArgs>>): Prisma__UserDataClient<$Result.GetResult<Prisma.$UserDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataCountArgs} args - Arguments to filter UserData to count.
     * @example
     * // Count the number of UserData
     * const count = await prisma.userData.count({
     *   where: {
     *     // ... the filter for the UserData we want to count
     *   }
     * })
    **/
    count<T extends UserDataCountArgs>(
      args?: Subset<T, UserDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDataAggregateArgs>(args: Subset<T, UserDataAggregateArgs>): Prisma.PrismaPromise<GetUserDataAggregateType<T>>

    /**
     * Group by UserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDataGroupByArgs} args - Group by arguments.
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
      T extends UserDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDataGroupByArgs['orderBy'] }
        : { orderBy?: UserDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserData model
   */
  readonly fields: UserDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserData model
   */
  interface UserDataFieldRefs {
    readonly id: FieldRef<"UserData", 'Int'>
    readonly public_key: FieldRef<"UserData", 'String'>
    readonly address: FieldRef<"UserData", 'String'>
    readonly domain: FieldRef<"UserData", 'String'>
    readonly label: FieldRef<"UserData", 'String'>
    readonly value: FieldRef<"UserData", 'String'>
    readonly nonce: FieldRef<"UserData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserData findUnique
   */
  export type UserDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findUniqueOrThrow
   */
  export type UserDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData findFirst
   */
  export type UserDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findFirstOrThrow
   */
  export type UserDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserData.
     */
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData findMany
   */
  export type UserDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter, which UserData to fetch.
     */
    where?: UserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserData to fetch.
     */
    orderBy?: UserDataOrderByWithRelationInput | UserDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserData.
     */
    cursor?: UserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserData.
     */
    skip?: number
    distinct?: UserDataScalarFieldEnum | UserDataScalarFieldEnum[]
  }

  /**
   * UserData create
   */
  export type UserDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserData.
     */
    data: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
  }

  /**
   * UserData createMany
   */
  export type UserDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserData createManyAndReturn
   */
  export type UserDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to create many UserData.
     */
    data: UserDataCreateManyInput | UserDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData update
   */
  export type UserDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserData.
     */
    data: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
    /**
     * Choose, which UserData to update.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData updateMany
   */
  export type UserDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
  }

  /**
   * UserData updateManyAndReturn
   */
  export type UserDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * The data used to update UserData.
     */
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyInput>
    /**
     * Filter which UserData to update
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserData upsert
   */
  export type UserDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserData to update in case it exists.
     */
    where: UserDataWhereUniqueInput
    /**
     * In case the UserData found by the `where` argument doesn't exist, create a new UserData with this data.
     */
    create: XOR<UserDataCreateInput, UserDataUncheckedCreateInput>
    /**
     * In case the UserData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDataUpdateInput, UserDataUncheckedUpdateInput>
  }

  /**
   * UserData delete
   */
  export type UserDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
    /**
     * Filter which UserData to delete.
     */
    where: UserDataWhereUniqueInput
  }

  /**
   * UserData deleteMany
   */
  export type UserDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserData to delete
     */
    where?: UserDataWhereInput
    /**
     * Limit how many UserData to delete.
     */
    limit?: number
  }

  /**
   * UserData without action
   */
  export type UserDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserData
     */
    select?: UserDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserData
     */
    omit?: UserDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDataInclude<ExtArgs> | null
  }


  /**
   * Model AuthenticatorDevice
   */

  export type AggregateAuthenticatorDevice = {
    _count: AuthenticatorDeviceCountAggregateOutputType | null
    _avg: AuthenticatorDeviceAvgAggregateOutputType | null
    _sum: AuthenticatorDeviceSumAggregateOutputType | null
    _min: AuthenticatorDeviceMinAggregateOutputType | null
    _max: AuthenticatorDeviceMaxAggregateOutputType | null
  }

  export type AuthenticatorDeviceAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorDeviceSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorDeviceMinAggregateOutputType = {
    credential_id: Uint8Array | null
    credential_public_key: Uint8Array | null
    counter: number | null
    public_key: string | null
  }

  export type AuthenticatorDeviceMaxAggregateOutputType = {
    credential_id: Uint8Array | null
    credential_public_key: Uint8Array | null
    counter: number | null
    public_key: string | null
  }

  export type AuthenticatorDeviceCountAggregateOutputType = {
    credential_id: number
    credential_public_key: number
    counter: number
    public_key: number
    _all: number
  }


  export type AuthenticatorDeviceAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorDeviceSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorDeviceMinAggregateInputType = {
    credential_id?: true
    credential_public_key?: true
    counter?: true
    public_key?: true
  }

  export type AuthenticatorDeviceMaxAggregateInputType = {
    credential_id?: true
    credential_public_key?: true
    counter?: true
    public_key?: true
  }

  export type AuthenticatorDeviceCountAggregateInputType = {
    credential_id?: true
    credential_public_key?: true
    counter?: true
    public_key?: true
    _all?: true
  }

  export type AuthenticatorDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatorDevice to aggregate.
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorDevices to fetch.
     */
    orderBy?: AuthenticatorDeviceOrderByWithRelationInput | AuthenticatorDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthenticatorDevices
    **/
    _count?: true | AuthenticatorDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorDeviceMaxAggregateInputType
  }

  export type GetAuthenticatorDeviceAggregateType<T extends AuthenticatorDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticatorDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticatorDevice[P]>
      : GetScalarType<T[P], AggregateAuthenticatorDevice[P]>
  }




  export type AuthenticatorDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorDeviceWhereInput
    orderBy?: AuthenticatorDeviceOrderByWithAggregationInput | AuthenticatorDeviceOrderByWithAggregationInput[]
    by: AuthenticatorDeviceScalarFieldEnum[] | AuthenticatorDeviceScalarFieldEnum
    having?: AuthenticatorDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorDeviceCountAggregateInputType | true
    _avg?: AuthenticatorDeviceAvgAggregateInputType
    _sum?: AuthenticatorDeviceSumAggregateInputType
    _min?: AuthenticatorDeviceMinAggregateInputType
    _max?: AuthenticatorDeviceMaxAggregateInputType
  }

  export type AuthenticatorDeviceGroupByOutputType = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    public_key: string
    _count: AuthenticatorDeviceCountAggregateOutputType | null
    _avg: AuthenticatorDeviceAvgAggregateOutputType | null
    _sum: AuthenticatorDeviceSumAggregateOutputType | null
    _min: AuthenticatorDeviceMinAggregateOutputType | null
    _max: AuthenticatorDeviceMaxAggregateOutputType | null
  }

  type GetAuthenticatorDeviceGroupByPayload<T extends AuthenticatorDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorDeviceGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    credential_public_key?: boolean
    counter?: boolean
    public_key?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transports?: boolean | AuthenticatorDevice$transportsArgs<ExtArgs>
    _count?: boolean | AuthenticatorDeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorDevice"]>

  export type AuthenticatorDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    credential_public_key?: boolean
    counter?: boolean
    public_key?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorDevice"]>

  export type AuthenticatorDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    credential_public_key?: boolean
    counter?: boolean
    public_key?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorDevice"]>

  export type AuthenticatorDeviceSelectScalar = {
    credential_id?: boolean
    credential_public_key?: boolean
    counter?: boolean
    public_key?: boolean
  }

  export type AuthenticatorDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credential_id" | "credential_public_key" | "counter" | "public_key", ExtArgs["result"]["authenticatorDevice"]>
  export type AuthenticatorDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transports?: boolean | AuthenticatorDevice$transportsArgs<ExtArgs>
    _count?: boolean | AuthenticatorDeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthenticatorDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthenticatorDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transports: Prisma.$AuthenticatorTransportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      credential_id: Uint8Array
      credential_public_key: Uint8Array
      counter: number
      public_key: string
    }, ExtArgs["result"]["authenticatorDevice"]>
    composites: {}
  }

  type AuthenticatorDeviceGetPayload<S extends boolean | null | undefined | AuthenticatorDeviceDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorDevicePayload, S>

  type AuthenticatorDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorDeviceCountAggregateInputType | true
    }

  export interface AuthenticatorDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthenticatorDevice'], meta: { name: 'AuthenticatorDevice' } }
    /**
     * Find zero or one AuthenticatorDevice that matches the filter.
     * @param {AuthenticatorDeviceFindUniqueArgs} args - Arguments to find a AuthenticatorDevice
     * @example
     * // Get one AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorDeviceFindUniqueArgs>(args: SelectSubset<T, AuthenticatorDeviceFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthenticatorDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorDeviceFindUniqueOrThrowArgs} args - Arguments to find a AuthenticatorDevice
     * @example
     * // Get one AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatorDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceFindFirstArgs} args - Arguments to find a AuthenticatorDevice
     * @example
     * // Get one AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorDeviceFindFirstArgs>(args?: SelectSubset<T, AuthenticatorDeviceFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatorDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceFindFirstOrThrowArgs} args - Arguments to find a AuthenticatorDevice
     * @example
     * // Get one AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthenticatorDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthenticatorDevices
     * const authenticatorDevices = await prisma.authenticatorDevice.findMany()
     * 
     * // Get first 10 AuthenticatorDevices
     * const authenticatorDevices = await prisma.authenticatorDevice.findMany({ take: 10 })
     * 
     * // Only select the `credential_id`
     * const authenticatorDeviceWithCredential_idOnly = await prisma.authenticatorDevice.findMany({ select: { credential_id: true } })
     * 
     */
    findMany<T extends AuthenticatorDeviceFindManyArgs>(args?: SelectSubset<T, AuthenticatorDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthenticatorDevice.
     * @param {AuthenticatorDeviceCreateArgs} args - Arguments to create a AuthenticatorDevice.
     * @example
     * // Create one AuthenticatorDevice
     * const AuthenticatorDevice = await prisma.authenticatorDevice.create({
     *   data: {
     *     // ... data to create a AuthenticatorDevice
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorDeviceCreateArgs>(args: SelectSubset<T, AuthenticatorDeviceCreateArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthenticatorDevices.
     * @param {AuthenticatorDeviceCreateManyArgs} args - Arguments to create many AuthenticatorDevices.
     * @example
     * // Create many AuthenticatorDevices
     * const authenticatorDevice = await prisma.authenticatorDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorDeviceCreateManyArgs>(args?: SelectSubset<T, AuthenticatorDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthenticatorDevices and returns the data saved in the database.
     * @param {AuthenticatorDeviceCreateManyAndReturnArgs} args - Arguments to create many AuthenticatorDevices.
     * @example
     * // Create many AuthenticatorDevices
     * const authenticatorDevice = await prisma.authenticatorDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthenticatorDevices and only return the `credential_id`
     * const authenticatorDeviceWithCredential_idOnly = await prisma.authenticatorDevice.createManyAndReturn({
     *   select: { credential_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticatorDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticatorDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthenticatorDevice.
     * @param {AuthenticatorDeviceDeleteArgs} args - Arguments to delete one AuthenticatorDevice.
     * @example
     * // Delete one AuthenticatorDevice
     * const AuthenticatorDevice = await prisma.authenticatorDevice.delete({
     *   where: {
     *     // ... filter to delete one AuthenticatorDevice
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeviceDeleteArgs>(args: SelectSubset<T, AuthenticatorDeviceDeleteArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthenticatorDevice.
     * @param {AuthenticatorDeviceUpdateArgs} args - Arguments to update one AuthenticatorDevice.
     * @example
     * // Update one AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorDeviceUpdateArgs>(args: SelectSubset<T, AuthenticatorDeviceUpdateArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthenticatorDevices.
     * @param {AuthenticatorDeviceDeleteManyArgs} args - Arguments to filter AuthenticatorDevices to delete.
     * @example
     * // Delete a few AuthenticatorDevices
     * const { count } = await prisma.authenticatorDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeviceDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthenticatorDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthenticatorDevices
     * const authenticatorDevice = await prisma.authenticatorDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorDeviceUpdateManyArgs>(args: SelectSubset<T, AuthenticatorDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthenticatorDevices and returns the data updated in the database.
     * @param {AuthenticatorDeviceUpdateManyAndReturnArgs} args - Arguments to update many AuthenticatorDevices.
     * @example
     * // Update many AuthenticatorDevices
     * const authenticatorDevice = await prisma.authenticatorDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthenticatorDevices and only return the `credential_id`
     * const authenticatorDeviceWithCredential_idOnly = await prisma.authenticatorDevice.updateManyAndReturn({
     *   select: { credential_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticatorDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticatorDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthenticatorDevice.
     * @param {AuthenticatorDeviceUpsertArgs} args - Arguments to update or create a AuthenticatorDevice.
     * @example
     * // Update or create a AuthenticatorDevice
     * const authenticatorDevice = await prisma.authenticatorDevice.upsert({
     *   create: {
     *     // ... data to create a AuthenticatorDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthenticatorDevice we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorDeviceUpsertArgs>(args: SelectSubset<T, AuthenticatorDeviceUpsertArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthenticatorDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceCountArgs} args - Arguments to filter AuthenticatorDevices to count.
     * @example
     * // Count the number of AuthenticatorDevices
     * const count = await prisma.authenticatorDevice.count({
     *   where: {
     *     // ... the filter for the AuthenticatorDevices we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorDeviceCountArgs>(
      args?: Subset<T, AuthenticatorDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthenticatorDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticatorDeviceAggregateArgs>(args: Subset<T, AuthenticatorDeviceAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorDeviceAggregateType<T>>

    /**
     * Group by AuthenticatorDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorDeviceGroupByArgs} args - Group by arguments.
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
      T extends AuthenticatorDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorDeviceGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticatorDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthenticatorDevice model
   */
  readonly fields: AuthenticatorDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthenticatorDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transports<T extends AuthenticatorDevice$transportsArgs<ExtArgs> = {}>(args?: Subset<T, AuthenticatorDevice$transportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AuthenticatorDevice model
   */
  interface AuthenticatorDeviceFieldRefs {
    readonly credential_id: FieldRef<"AuthenticatorDevice", 'Bytes'>
    readonly credential_public_key: FieldRef<"AuthenticatorDevice", 'Bytes'>
    readonly counter: FieldRef<"AuthenticatorDevice", 'Int'>
    readonly public_key: FieldRef<"AuthenticatorDevice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthenticatorDevice findUnique
   */
  export type AuthenticatorDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorDevice to fetch.
     */
    where: AuthenticatorDeviceWhereUniqueInput
  }

  /**
   * AuthenticatorDevice findUniqueOrThrow
   */
  export type AuthenticatorDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorDevice to fetch.
     */
    where: AuthenticatorDeviceWhereUniqueInput
  }

  /**
   * AuthenticatorDevice findFirst
   */
  export type AuthenticatorDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorDevice to fetch.
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorDevices to fetch.
     */
    orderBy?: AuthenticatorDeviceOrderByWithRelationInput | AuthenticatorDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatorDevices.
     */
    cursor?: AuthenticatorDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatorDevices.
     */
    distinct?: AuthenticatorDeviceScalarFieldEnum | AuthenticatorDeviceScalarFieldEnum[]
  }

  /**
   * AuthenticatorDevice findFirstOrThrow
   */
  export type AuthenticatorDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorDevice to fetch.
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorDevices to fetch.
     */
    orderBy?: AuthenticatorDeviceOrderByWithRelationInput | AuthenticatorDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatorDevices.
     */
    cursor?: AuthenticatorDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatorDevices.
     */
    distinct?: AuthenticatorDeviceScalarFieldEnum | AuthenticatorDeviceScalarFieldEnum[]
  }

  /**
   * AuthenticatorDevice findMany
   */
  export type AuthenticatorDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorDevices to fetch.
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorDevices to fetch.
     */
    orderBy?: AuthenticatorDeviceOrderByWithRelationInput | AuthenticatorDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthenticatorDevices.
     */
    cursor?: AuthenticatorDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorDevices.
     */
    skip?: number
    distinct?: AuthenticatorDeviceScalarFieldEnum | AuthenticatorDeviceScalarFieldEnum[]
  }

  /**
   * AuthenticatorDevice create
   */
  export type AuthenticatorDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthenticatorDevice.
     */
    data: XOR<AuthenticatorDeviceCreateInput, AuthenticatorDeviceUncheckedCreateInput>
  }

  /**
   * AuthenticatorDevice createMany
   */
  export type AuthenticatorDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthenticatorDevices.
     */
    data: AuthenticatorDeviceCreateManyInput | AuthenticatorDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthenticatorDevice createManyAndReturn
   */
  export type AuthenticatorDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many AuthenticatorDevices.
     */
    data: AuthenticatorDeviceCreateManyInput | AuthenticatorDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthenticatorDevice update
   */
  export type AuthenticatorDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthenticatorDevice.
     */
    data: XOR<AuthenticatorDeviceUpdateInput, AuthenticatorDeviceUncheckedUpdateInput>
    /**
     * Choose, which AuthenticatorDevice to update.
     */
    where: AuthenticatorDeviceWhereUniqueInput
  }

  /**
   * AuthenticatorDevice updateMany
   */
  export type AuthenticatorDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthenticatorDevices.
     */
    data: XOR<AuthenticatorDeviceUpdateManyMutationInput, AuthenticatorDeviceUncheckedUpdateManyInput>
    /**
     * Filter which AuthenticatorDevices to update
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * Limit how many AuthenticatorDevices to update.
     */
    limit?: number
  }

  /**
   * AuthenticatorDevice updateManyAndReturn
   */
  export type AuthenticatorDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * The data used to update AuthenticatorDevices.
     */
    data: XOR<AuthenticatorDeviceUpdateManyMutationInput, AuthenticatorDeviceUncheckedUpdateManyInput>
    /**
     * Filter which AuthenticatorDevices to update
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * Limit how many AuthenticatorDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthenticatorDevice upsert
   */
  export type AuthenticatorDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthenticatorDevice to update in case it exists.
     */
    where: AuthenticatorDeviceWhereUniqueInput
    /**
     * In case the AuthenticatorDevice found by the `where` argument doesn't exist, create a new AuthenticatorDevice with this data.
     */
    create: XOR<AuthenticatorDeviceCreateInput, AuthenticatorDeviceUncheckedCreateInput>
    /**
     * In case the AuthenticatorDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorDeviceUpdateInput, AuthenticatorDeviceUncheckedUpdateInput>
  }

  /**
   * AuthenticatorDevice delete
   */
  export type AuthenticatorDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
    /**
     * Filter which AuthenticatorDevice to delete.
     */
    where: AuthenticatorDeviceWhereUniqueInput
  }

  /**
   * AuthenticatorDevice deleteMany
   */
  export type AuthenticatorDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatorDevices to delete
     */
    where?: AuthenticatorDeviceWhereInput
    /**
     * Limit how many AuthenticatorDevices to delete.
     */
    limit?: number
  }

  /**
   * AuthenticatorDevice.transports
   */
  export type AuthenticatorDevice$transportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    where?: AuthenticatorTransportWhereInput
    orderBy?: AuthenticatorTransportOrderByWithRelationInput | AuthenticatorTransportOrderByWithRelationInput[]
    cursor?: AuthenticatorTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorTransportScalarFieldEnum | AuthenticatorTransportScalarFieldEnum[]
  }

  /**
   * AuthenticatorDevice without action
   */
  export type AuthenticatorDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorDevice
     */
    select?: AuthenticatorDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorDevice
     */
    omit?: AuthenticatorDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorDeviceInclude<ExtArgs> | null
  }


  /**
   * Model AuthenticatorTransport
   */

  export type AggregateAuthenticatorTransport = {
    _count: AuthenticatorTransportCountAggregateOutputType | null
    _min: AuthenticatorTransportMinAggregateOutputType | null
    _max: AuthenticatorTransportMaxAggregateOutputType | null
  }

  export type AuthenticatorTransportMinAggregateOutputType = {
    device_id: Uint8Array | null
    transport: $Enums.AuthenticatorTransportFuture | null
  }

  export type AuthenticatorTransportMaxAggregateOutputType = {
    device_id: Uint8Array | null
    transport: $Enums.AuthenticatorTransportFuture | null
  }

  export type AuthenticatorTransportCountAggregateOutputType = {
    device_id: number
    transport: number
    _all: number
  }


  export type AuthenticatorTransportMinAggregateInputType = {
    device_id?: true
    transport?: true
  }

  export type AuthenticatorTransportMaxAggregateInputType = {
    device_id?: true
    transport?: true
  }

  export type AuthenticatorTransportCountAggregateInputType = {
    device_id?: true
    transport?: true
    _all?: true
  }

  export type AuthenticatorTransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatorTransport to aggregate.
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorTransports to fetch.
     */
    orderBy?: AuthenticatorTransportOrderByWithRelationInput | AuthenticatorTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthenticatorTransports
    **/
    _count?: true | AuthenticatorTransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorTransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorTransportMaxAggregateInputType
  }

  export type GetAuthenticatorTransportAggregateType<T extends AuthenticatorTransportAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticatorTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticatorTransport[P]>
      : GetScalarType<T[P], AggregateAuthenticatorTransport[P]>
  }




  export type AuthenticatorTransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorTransportWhereInput
    orderBy?: AuthenticatorTransportOrderByWithAggregationInput | AuthenticatorTransportOrderByWithAggregationInput[]
    by: AuthenticatorTransportScalarFieldEnum[] | AuthenticatorTransportScalarFieldEnum
    having?: AuthenticatorTransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorTransportCountAggregateInputType | true
    _min?: AuthenticatorTransportMinAggregateInputType
    _max?: AuthenticatorTransportMaxAggregateInputType
  }

  export type AuthenticatorTransportGroupByOutputType = {
    device_id: Uint8Array
    transport: $Enums.AuthenticatorTransportFuture
    _count: AuthenticatorTransportCountAggregateOutputType | null
    _min: AuthenticatorTransportMinAggregateOutputType | null
    _max: AuthenticatorTransportMaxAggregateOutputType | null
  }

  type GetAuthenticatorTransportGroupByPayload<T extends AuthenticatorTransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorTransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorTransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorTransportGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorTransportGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorTransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    transport?: boolean
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorTransport"]>

  export type AuthenticatorTransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    transport?: boolean
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorTransport"]>

  export type AuthenticatorTransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    transport?: boolean
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticatorTransport"]>

  export type AuthenticatorTransportSelectScalar = {
    device_id?: boolean
    transport?: boolean
  }

  export type AuthenticatorTransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"device_id" | "transport", ExtArgs["result"]["authenticatorTransport"]>
  export type AuthenticatorTransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }
  export type AuthenticatorTransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }
  export type AuthenticatorTransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | AuthenticatorDeviceDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorTransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthenticatorTransport"
    objects: {
      device: Prisma.$AuthenticatorDevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      device_id: Uint8Array
      transport: $Enums.AuthenticatorTransportFuture
    }, ExtArgs["result"]["authenticatorTransport"]>
    composites: {}
  }

  type AuthenticatorTransportGetPayload<S extends boolean | null | undefined | AuthenticatorTransportDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorTransportPayload, S>

  type AuthenticatorTransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorTransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorTransportCountAggregateInputType | true
    }

  export interface AuthenticatorTransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthenticatorTransport'], meta: { name: 'AuthenticatorTransport' } }
    /**
     * Find zero or one AuthenticatorTransport that matches the filter.
     * @param {AuthenticatorTransportFindUniqueArgs} args - Arguments to find a AuthenticatorTransport
     * @example
     * // Get one AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorTransportFindUniqueArgs>(args: SelectSubset<T, AuthenticatorTransportFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthenticatorTransport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorTransportFindUniqueOrThrowArgs} args - Arguments to find a AuthenticatorTransport
     * @example
     * // Get one AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorTransportFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorTransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatorTransport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportFindFirstArgs} args - Arguments to find a AuthenticatorTransport
     * @example
     * // Get one AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorTransportFindFirstArgs>(args?: SelectSubset<T, AuthenticatorTransportFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatorTransport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportFindFirstOrThrowArgs} args - Arguments to find a AuthenticatorTransport
     * @example
     * // Get one AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorTransportFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorTransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthenticatorTransports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthenticatorTransports
     * const authenticatorTransports = await prisma.authenticatorTransport.findMany()
     * 
     * // Get first 10 AuthenticatorTransports
     * const authenticatorTransports = await prisma.authenticatorTransport.findMany({ take: 10 })
     * 
     * // Only select the `device_id`
     * const authenticatorTransportWithDevice_idOnly = await prisma.authenticatorTransport.findMany({ select: { device_id: true } })
     * 
     */
    findMany<T extends AuthenticatorTransportFindManyArgs>(args?: SelectSubset<T, AuthenticatorTransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthenticatorTransport.
     * @param {AuthenticatorTransportCreateArgs} args - Arguments to create a AuthenticatorTransport.
     * @example
     * // Create one AuthenticatorTransport
     * const AuthenticatorTransport = await prisma.authenticatorTransport.create({
     *   data: {
     *     // ... data to create a AuthenticatorTransport
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorTransportCreateArgs>(args: SelectSubset<T, AuthenticatorTransportCreateArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthenticatorTransports.
     * @param {AuthenticatorTransportCreateManyArgs} args - Arguments to create many AuthenticatorTransports.
     * @example
     * // Create many AuthenticatorTransports
     * const authenticatorTransport = await prisma.authenticatorTransport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorTransportCreateManyArgs>(args?: SelectSubset<T, AuthenticatorTransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthenticatorTransports and returns the data saved in the database.
     * @param {AuthenticatorTransportCreateManyAndReturnArgs} args - Arguments to create many AuthenticatorTransports.
     * @example
     * // Create many AuthenticatorTransports
     * const authenticatorTransport = await prisma.authenticatorTransport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthenticatorTransports and only return the `device_id`
     * const authenticatorTransportWithDevice_idOnly = await prisma.authenticatorTransport.createManyAndReturn({
     *   select: { device_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticatorTransportCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticatorTransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthenticatorTransport.
     * @param {AuthenticatorTransportDeleteArgs} args - Arguments to delete one AuthenticatorTransport.
     * @example
     * // Delete one AuthenticatorTransport
     * const AuthenticatorTransport = await prisma.authenticatorTransport.delete({
     *   where: {
     *     // ... filter to delete one AuthenticatorTransport
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorTransportDeleteArgs>(args: SelectSubset<T, AuthenticatorTransportDeleteArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthenticatorTransport.
     * @param {AuthenticatorTransportUpdateArgs} args - Arguments to update one AuthenticatorTransport.
     * @example
     * // Update one AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorTransportUpdateArgs>(args: SelectSubset<T, AuthenticatorTransportUpdateArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthenticatorTransports.
     * @param {AuthenticatorTransportDeleteManyArgs} args - Arguments to filter AuthenticatorTransports to delete.
     * @example
     * // Delete a few AuthenticatorTransports
     * const { count } = await prisma.authenticatorTransport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorTransportDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorTransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthenticatorTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthenticatorTransports
     * const authenticatorTransport = await prisma.authenticatorTransport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorTransportUpdateManyArgs>(args: SelectSubset<T, AuthenticatorTransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthenticatorTransports and returns the data updated in the database.
     * @param {AuthenticatorTransportUpdateManyAndReturnArgs} args - Arguments to update many AuthenticatorTransports.
     * @example
     * // Update many AuthenticatorTransports
     * const authenticatorTransport = await prisma.authenticatorTransport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthenticatorTransports and only return the `device_id`
     * const authenticatorTransportWithDevice_idOnly = await prisma.authenticatorTransport.updateManyAndReturn({
     *   select: { device_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticatorTransportUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticatorTransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthenticatorTransport.
     * @param {AuthenticatorTransportUpsertArgs} args - Arguments to update or create a AuthenticatorTransport.
     * @example
     * // Update or create a AuthenticatorTransport
     * const authenticatorTransport = await prisma.authenticatorTransport.upsert({
     *   create: {
     *     // ... data to create a AuthenticatorTransport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthenticatorTransport we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorTransportUpsertArgs>(args: SelectSubset<T, AuthenticatorTransportUpsertArgs<ExtArgs>>): Prisma__AuthenticatorTransportClient<$Result.GetResult<Prisma.$AuthenticatorTransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthenticatorTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportCountArgs} args - Arguments to filter AuthenticatorTransports to count.
     * @example
     * // Count the number of AuthenticatorTransports
     * const count = await prisma.authenticatorTransport.count({
     *   where: {
     *     // ... the filter for the AuthenticatorTransports we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorTransportCountArgs>(
      args?: Subset<T, AuthenticatorTransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorTransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthenticatorTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticatorTransportAggregateArgs>(args: Subset<T, AuthenticatorTransportAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorTransportAggregateType<T>>

    /**
     * Group by AuthenticatorTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorTransportGroupByArgs} args - Group by arguments.
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
      T extends AuthenticatorTransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorTransportGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorTransportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticatorTransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthenticatorTransport model
   */
  readonly fields: AuthenticatorTransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthenticatorTransport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorTransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends AuthenticatorDeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthenticatorDeviceDefaultArgs<ExtArgs>>): Prisma__AuthenticatorDeviceClient<$Result.GetResult<Prisma.$AuthenticatorDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthenticatorTransport model
   */
  interface AuthenticatorTransportFieldRefs {
    readonly device_id: FieldRef<"AuthenticatorTransport", 'Bytes'>
    readonly transport: FieldRef<"AuthenticatorTransport", 'AuthenticatorTransportFuture'>
  }
    

  // Custom InputTypes
  /**
   * AuthenticatorTransport findUnique
   */
  export type AuthenticatorTransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorTransport to fetch.
     */
    where: AuthenticatorTransportWhereUniqueInput
  }

  /**
   * AuthenticatorTransport findUniqueOrThrow
   */
  export type AuthenticatorTransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorTransport to fetch.
     */
    where: AuthenticatorTransportWhereUniqueInput
  }

  /**
   * AuthenticatorTransport findFirst
   */
  export type AuthenticatorTransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorTransport to fetch.
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorTransports to fetch.
     */
    orderBy?: AuthenticatorTransportOrderByWithRelationInput | AuthenticatorTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatorTransports.
     */
    cursor?: AuthenticatorTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatorTransports.
     */
    distinct?: AuthenticatorTransportScalarFieldEnum | AuthenticatorTransportScalarFieldEnum[]
  }

  /**
   * AuthenticatorTransport findFirstOrThrow
   */
  export type AuthenticatorTransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorTransport to fetch.
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorTransports to fetch.
     */
    orderBy?: AuthenticatorTransportOrderByWithRelationInput | AuthenticatorTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatorTransports.
     */
    cursor?: AuthenticatorTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatorTransports.
     */
    distinct?: AuthenticatorTransportScalarFieldEnum | AuthenticatorTransportScalarFieldEnum[]
  }

  /**
   * AuthenticatorTransport findMany
   */
  export type AuthenticatorTransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter, which AuthenticatorTransports to fetch.
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatorTransports to fetch.
     */
    orderBy?: AuthenticatorTransportOrderByWithRelationInput | AuthenticatorTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthenticatorTransports.
     */
    cursor?: AuthenticatorTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatorTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatorTransports.
     */
    skip?: number
    distinct?: AuthenticatorTransportScalarFieldEnum | AuthenticatorTransportScalarFieldEnum[]
  }

  /**
   * AuthenticatorTransport create
   */
  export type AuthenticatorTransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthenticatorTransport.
     */
    data: XOR<AuthenticatorTransportCreateInput, AuthenticatorTransportUncheckedCreateInput>
  }

  /**
   * AuthenticatorTransport createMany
   */
  export type AuthenticatorTransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthenticatorTransports.
     */
    data: AuthenticatorTransportCreateManyInput | AuthenticatorTransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthenticatorTransport createManyAndReturn
   */
  export type AuthenticatorTransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * The data used to create many AuthenticatorTransports.
     */
    data: AuthenticatorTransportCreateManyInput | AuthenticatorTransportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthenticatorTransport update
   */
  export type AuthenticatorTransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthenticatorTransport.
     */
    data: XOR<AuthenticatorTransportUpdateInput, AuthenticatorTransportUncheckedUpdateInput>
    /**
     * Choose, which AuthenticatorTransport to update.
     */
    where: AuthenticatorTransportWhereUniqueInput
  }

  /**
   * AuthenticatorTransport updateMany
   */
  export type AuthenticatorTransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthenticatorTransports.
     */
    data: XOR<AuthenticatorTransportUpdateManyMutationInput, AuthenticatorTransportUncheckedUpdateManyInput>
    /**
     * Filter which AuthenticatorTransports to update
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * Limit how many AuthenticatorTransports to update.
     */
    limit?: number
  }

  /**
   * AuthenticatorTransport updateManyAndReturn
   */
  export type AuthenticatorTransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * The data used to update AuthenticatorTransports.
     */
    data: XOR<AuthenticatorTransportUpdateManyMutationInput, AuthenticatorTransportUncheckedUpdateManyInput>
    /**
     * Filter which AuthenticatorTransports to update
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * Limit how many AuthenticatorTransports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthenticatorTransport upsert
   */
  export type AuthenticatorTransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthenticatorTransport to update in case it exists.
     */
    where: AuthenticatorTransportWhereUniqueInput
    /**
     * In case the AuthenticatorTransport found by the `where` argument doesn't exist, create a new AuthenticatorTransport with this data.
     */
    create: XOR<AuthenticatorTransportCreateInput, AuthenticatorTransportUncheckedCreateInput>
    /**
     * In case the AuthenticatorTransport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorTransportUpdateInput, AuthenticatorTransportUncheckedUpdateInput>
  }

  /**
   * AuthenticatorTransport delete
   */
  export type AuthenticatorTransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
    /**
     * Filter which AuthenticatorTransport to delete.
     */
    where: AuthenticatorTransportWhereUniqueInput
  }

  /**
   * AuthenticatorTransport deleteMany
   */
  export type AuthenticatorTransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatorTransports to delete
     */
    where?: AuthenticatorTransportWhereInput
    /**
     * Limit how many AuthenticatorTransports to delete.
     */
    limit?: number
  }

  /**
   * AuthenticatorTransport without action
   */
  export type AuthenticatorTransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatorTransport
     */
    select?: AuthenticatorTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatorTransport
     */
    omit?: AuthenticatorTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorTransportInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    public_key: string | null
    for_public_key: string | null
    type: string | null
    timestamp: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    public_key: string | null
    for_public_key: string | null
    type: string | null
    timestamp: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    public_key: number
    for_public_key: number
    type: number
    data: number
    timestamp: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    public_key?: true
    for_public_key?: true
    type?: true
    timestamp?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    public_key?: true
    for_public_key?: true
    type?: true
    timestamp?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    public_key?: true
    for_public_key?: true
    type?: true
    data?: true
    timestamp?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    public_key: string
    for_public_key: string | null
    type: string
    data: JsonValue
    timestamp: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    for_public_key?: boolean
    type?: boolean
    data?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    for_public_key?: boolean
    type?: boolean
    data?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_key?: boolean
    for_public_key?: boolean
    type?: boolean
    data?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    public_key?: boolean
    for_public_key?: boolean
    type?: boolean
    data?: boolean
    timestamp?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "public_key" | "for_public_key" | "type" | "data" | "timestamp", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      public_key: string
      for_public_key: string | null
      type: string
      data: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly public_key: FieldRef<"Notification", 'String'>
    readonly for_public_key: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly timestamp: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    public_key: 'public_key',
    address: 'address',
    username: 'username',
    layout: 'layout',
    isAuthority: 'isAuthority',
    badge_collections: 'badge_collections',
    badge_tags: 'badge_tags'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserChallengeScalarFieldEnum: {
    id: 'id',
    public_key: 'public_key',
    challenge: 'challenge'
  };

  export type UserChallengeScalarFieldEnum = (typeof UserChallengeScalarFieldEnum)[keyof typeof UserChallengeScalarFieldEnum]


  export const UserDataScalarFieldEnum: {
    id: 'id',
    public_key: 'public_key',
    address: 'address',
    domain: 'domain',
    label: 'label',
    value: 'value',
    nonce: 'nonce'
  };

  export type UserDataScalarFieldEnum = (typeof UserDataScalarFieldEnum)[keyof typeof UserDataScalarFieldEnum]


  export const AuthenticatorDeviceScalarFieldEnum: {
    credential_id: 'credential_id',
    credential_public_key: 'credential_public_key',
    counter: 'counter',
    public_key: 'public_key'
  };

  export type AuthenticatorDeviceScalarFieldEnum = (typeof AuthenticatorDeviceScalarFieldEnum)[keyof typeof AuthenticatorDeviceScalarFieldEnum]


  export const AuthenticatorTransportScalarFieldEnum: {
    device_id: 'device_id',
    transport: 'transport'
  };

  export type AuthenticatorTransportScalarFieldEnum = (typeof AuthenticatorTransportScalarFieldEnum)[keyof typeof AuthenticatorTransportScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    public_key: 'public_key',
    for_public_key: 'for_public_key',
    type: 'type',
    data: 'data',
    timestamp: 'timestamp'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'AuthenticatorTransportFuture'
   */
  export type EnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticatorTransportFuture'>
    


  /**
   * Reference to a field of type 'AuthenticatorTransportFuture[]'
   */
  export type ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticatorTransportFuture[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    public_key?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    layout?: JsonFilter<"User">
    isAuthority?: BoolFilter<"User"> | boolean
    badge_collections?: StringNullableListFilter<"User">
    badge_tags?: StringNullableListFilter<"User">
    devices?: AuthenticatorDeviceListRelationFilter
    userData?: UserDataListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    public_key?: SortOrder
    address?: SortOrder
    username?: SortOrder
    layout?: SortOrder
    isAuthority?: SortOrder
    badge_collections?: SortOrder
    badge_tags?: SortOrder
    devices?: AuthenticatorDeviceOrderByRelationAggregateInput
    userData?: UserDataOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    public_key?: string
    address?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    layout?: JsonFilter<"User">
    isAuthority?: BoolFilter<"User"> | boolean
    badge_collections?: StringNullableListFilter<"User">
    badge_tags?: StringNullableListFilter<"User">
    devices?: AuthenticatorDeviceListRelationFilter
    userData?: UserDataListRelationFilter
  }, "public_key" | "address">

  export type UserOrderByWithAggregationInput = {
    public_key?: SortOrder
    address?: SortOrder
    username?: SortOrder
    layout?: SortOrder
    isAuthority?: SortOrder
    badge_collections?: SortOrder
    badge_tags?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    public_key?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    layout?: JsonWithAggregatesFilter<"User">
    isAuthority?: BoolWithAggregatesFilter<"User"> | boolean
    badge_collections?: StringNullableListFilter<"User">
    badge_tags?: StringNullableListFilter<"User">
  }

  export type UserChallengeWhereInput = {
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    id?: IntFilter<"UserChallenge"> | number
    public_key?: StringFilter<"UserChallenge"> | string
    challenge?: StringNullableFilter<"UserChallenge"> | string | null
  }

  export type UserChallengeOrderByWithRelationInput = {
    id?: SortOrder
    public_key?: SortOrder
    challenge?: SortOrderInput | SortOrder
  }

  export type UserChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    public_key?: string
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    challenge?: StringNullableFilter<"UserChallenge"> | string | null
  }, "id" | "public_key">

  export type UserChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    public_key?: SortOrder
    challenge?: SortOrderInput | SortOrder
    _count?: UserChallengeCountOrderByAggregateInput
    _avg?: UserChallengeAvgOrderByAggregateInput
    _max?: UserChallengeMaxOrderByAggregateInput
    _min?: UserChallengeMinOrderByAggregateInput
    _sum?: UserChallengeSumOrderByAggregateInput
  }

  export type UserChallengeScalarWhereWithAggregatesInput = {
    AND?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    OR?: UserChallengeScalarWhereWithAggregatesInput[]
    NOT?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserChallenge"> | number
    public_key?: StringWithAggregatesFilter<"UserChallenge"> | string
    challenge?: StringNullableWithAggregatesFilter<"UserChallenge"> | string | null
  }

  export type UserDataWhereInput = {
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    id?: IntFilter<"UserData"> | number
    public_key?: StringFilter<"UserData"> | string
    address?: StringFilter<"UserData"> | string
    domain?: StringNullableFilter<"UserData"> | string | null
    label?: StringFilter<"UserData"> | string
    value?: StringFilter<"UserData"> | string
    nonce?: StringFilter<"UserData"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDataOrderByWithRelationInput = {
    id?: SortOrder
    public_key?: SortOrder
    address?: SortOrder
    domain?: SortOrderInput | SortOrder
    label?: SortOrder
    value?: SortOrder
    nonce?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDataWhereInput | UserDataWhereInput[]
    OR?: UserDataWhereInput[]
    NOT?: UserDataWhereInput | UserDataWhereInput[]
    public_key?: StringFilter<"UserData"> | string
    address?: StringFilter<"UserData"> | string
    domain?: StringNullableFilter<"UserData"> | string | null
    label?: StringFilter<"UserData"> | string
    value?: StringFilter<"UserData"> | string
    nonce?: StringFilter<"UserData"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserDataOrderByWithAggregationInput = {
    id?: SortOrder
    public_key?: SortOrder
    address?: SortOrder
    domain?: SortOrderInput | SortOrder
    label?: SortOrder
    value?: SortOrder
    nonce?: SortOrder
    _count?: UserDataCountOrderByAggregateInput
    _avg?: UserDataAvgOrderByAggregateInput
    _max?: UserDataMaxOrderByAggregateInput
    _min?: UserDataMinOrderByAggregateInput
    _sum?: UserDataSumOrderByAggregateInput
  }

  export type UserDataScalarWhereWithAggregatesInput = {
    AND?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    OR?: UserDataScalarWhereWithAggregatesInput[]
    NOT?: UserDataScalarWhereWithAggregatesInput | UserDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserData"> | number
    public_key?: StringWithAggregatesFilter<"UserData"> | string
    address?: StringWithAggregatesFilter<"UserData"> | string
    domain?: StringNullableWithAggregatesFilter<"UserData"> | string | null
    label?: StringWithAggregatesFilter<"UserData"> | string
    value?: StringWithAggregatesFilter<"UserData"> | string
    nonce?: StringWithAggregatesFilter<"UserData"> | string
  }

  export type AuthenticatorDeviceWhereInput = {
    AND?: AuthenticatorDeviceWhereInput | AuthenticatorDeviceWhereInput[]
    OR?: AuthenticatorDeviceWhereInput[]
    NOT?: AuthenticatorDeviceWhereInput | AuthenticatorDeviceWhereInput[]
    credential_id?: BytesFilter<"AuthenticatorDevice"> | Uint8Array
    credential_public_key?: BytesFilter<"AuthenticatorDevice"> | Uint8Array
    counter?: IntFilter<"AuthenticatorDevice"> | number
    public_key?: StringFilter<"AuthenticatorDevice"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transports?: AuthenticatorTransportListRelationFilter
  }

  export type AuthenticatorDeviceOrderByWithRelationInput = {
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    public_key?: SortOrder
    user?: UserOrderByWithRelationInput
    transports?: AuthenticatorTransportOrderByRelationAggregateInput
  }

  export type AuthenticatorDeviceWhereUniqueInput = Prisma.AtLeast<{
    credential_id?: Uint8Array
    AND?: AuthenticatorDeviceWhereInput | AuthenticatorDeviceWhereInput[]
    OR?: AuthenticatorDeviceWhereInput[]
    NOT?: AuthenticatorDeviceWhereInput | AuthenticatorDeviceWhereInput[]
    credential_public_key?: BytesFilter<"AuthenticatorDevice"> | Uint8Array
    counter?: IntFilter<"AuthenticatorDevice"> | number
    public_key?: StringFilter<"AuthenticatorDevice"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transports?: AuthenticatorTransportListRelationFilter
  }, "credential_id">

  export type AuthenticatorDeviceOrderByWithAggregationInput = {
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    public_key?: SortOrder
    _count?: AuthenticatorDeviceCountOrderByAggregateInput
    _avg?: AuthenticatorDeviceAvgOrderByAggregateInput
    _max?: AuthenticatorDeviceMaxOrderByAggregateInput
    _min?: AuthenticatorDeviceMinOrderByAggregateInput
    _sum?: AuthenticatorDeviceSumOrderByAggregateInput
  }

  export type AuthenticatorDeviceScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorDeviceScalarWhereWithAggregatesInput | AuthenticatorDeviceScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorDeviceScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorDeviceScalarWhereWithAggregatesInput | AuthenticatorDeviceScalarWhereWithAggregatesInput[]
    credential_id?: BytesWithAggregatesFilter<"AuthenticatorDevice"> | Uint8Array
    credential_public_key?: BytesWithAggregatesFilter<"AuthenticatorDevice"> | Uint8Array
    counter?: IntWithAggregatesFilter<"AuthenticatorDevice"> | number
    public_key?: StringWithAggregatesFilter<"AuthenticatorDevice"> | string
  }

  export type AuthenticatorTransportWhereInput = {
    AND?: AuthenticatorTransportWhereInput | AuthenticatorTransportWhereInput[]
    OR?: AuthenticatorTransportWhereInput[]
    NOT?: AuthenticatorTransportWhereInput | AuthenticatorTransportWhereInput[]
    device_id?: BytesFilter<"AuthenticatorTransport"> | Uint8Array
    transport?: EnumAuthenticatorTransportFutureFilter<"AuthenticatorTransport"> | $Enums.AuthenticatorTransportFuture
    device?: XOR<AuthenticatorDeviceScalarRelationFilter, AuthenticatorDeviceWhereInput>
  }

  export type AuthenticatorTransportOrderByWithRelationInput = {
    device_id?: SortOrder
    transport?: SortOrder
    device?: AuthenticatorDeviceOrderByWithRelationInput
  }

  export type AuthenticatorTransportWhereUniqueInput = Prisma.AtLeast<{
    device_id_transport?: AuthenticatorTransportDevice_idTransportCompoundUniqueInput
    AND?: AuthenticatorTransportWhereInput | AuthenticatorTransportWhereInput[]
    OR?: AuthenticatorTransportWhereInput[]
    NOT?: AuthenticatorTransportWhereInput | AuthenticatorTransportWhereInput[]
    device_id?: BytesFilter<"AuthenticatorTransport"> | Uint8Array
    transport?: EnumAuthenticatorTransportFutureFilter<"AuthenticatorTransport"> | $Enums.AuthenticatorTransportFuture
    device?: XOR<AuthenticatorDeviceScalarRelationFilter, AuthenticatorDeviceWhereInput>
  }, "device_id_transport">

  export type AuthenticatorTransportOrderByWithAggregationInput = {
    device_id?: SortOrder
    transport?: SortOrder
    _count?: AuthenticatorTransportCountOrderByAggregateInput
    _max?: AuthenticatorTransportMaxOrderByAggregateInput
    _min?: AuthenticatorTransportMinOrderByAggregateInput
  }

  export type AuthenticatorTransportScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorTransportScalarWhereWithAggregatesInput | AuthenticatorTransportScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorTransportScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorTransportScalarWhereWithAggregatesInput | AuthenticatorTransportScalarWhereWithAggregatesInput[]
    device_id?: BytesWithAggregatesFilter<"AuthenticatorTransport"> | Uint8Array
    transport?: EnumAuthenticatorTransportFutureWithAggregatesFilter<"AuthenticatorTransport"> | $Enums.AuthenticatorTransportFuture
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    public_key?: StringFilter<"Notification"> | string
    for_public_key?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    data?: JsonFilter<"Notification">
    timestamp?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    public_key?: SortOrder
    for_public_key?: SortOrderInput | SortOrder
    type?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    public_key?: StringFilter<"Notification"> | string
    for_public_key?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    data?: JsonFilter<"Notification">
    timestamp?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    public_key?: SortOrder
    for_public_key?: SortOrderInput | SortOrder
    type?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    public_key?: StringWithAggregatesFilter<"Notification"> | string
    for_public_key?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonWithAggregatesFilter<"Notification">
    timestamp?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceCreateNestedManyWithoutUserInput
    userData?: UserDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUncheckedCreateNestedManyWithoutUserInput
    userData?: UserDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUpdateManyWithoutUserNestedInput
    userData?: UserDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUncheckedUpdateManyWithoutUserNestedInput
    userData?: UserDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
  }

  export type UserChallengeCreateInput = {
    public_key: string
    challenge?: string | null
  }

  export type UserChallengeUncheckedCreateInput = {
    id?: number
    public_key: string
    challenge?: string | null
  }

  export type UserChallengeUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserChallengeCreateManyInput = {
    id?: number
    public_key: string
    challenge?: string | null
  }

  export type UserChallengeUpdateManyMutationInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDataCreateInput = {
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
    user: UserCreateNestedOneWithoutUserDataInput
  }

  export type UserDataUncheckedCreateInput = {
    id?: number
    public_key: string
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
  }

  export type UserDataUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserDataNestedInput
  }

  export type UserDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type UserDataCreateManyInput = {
    id?: number
    public_key: string
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
  }

  export type UserDataUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type UserDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticatorDeviceCreateInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    user: UserCreateNestedOneWithoutDevicesInput
    transports?: AuthenticatorTransportCreateNestedManyWithoutDeviceInput
  }

  export type AuthenticatorDeviceUncheckedCreateInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    public_key: string
    transports?: AuthenticatorTransportUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type AuthenticatorDeviceUpdateInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    transports?: AuthenticatorTransportUpdateManyWithoutDeviceNestedInput
  }

  export type AuthenticatorDeviceUncheckedUpdateInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    transports?: AuthenticatorTransportUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type AuthenticatorDeviceCreateManyInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    public_key: string
  }

  export type AuthenticatorDeviceUpdateManyMutationInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
  }

  export type AuthenticatorDeviceUncheckedUpdateManyInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticatorTransportCreateInput = {
    transport: $Enums.AuthenticatorTransportFuture
    device: AuthenticatorDeviceCreateNestedOneWithoutTransportsInput
  }

  export type AuthenticatorTransportUncheckedCreateInput = {
    device_id: Uint8Array
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUpdateInput = {
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
    device?: AuthenticatorDeviceUpdateOneRequiredWithoutTransportsNestedInput
  }

  export type AuthenticatorTransportUncheckedUpdateInput = {
    device_id?: BytesFieldUpdateOperationsInput | Uint8Array
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportCreateManyInput = {
    device_id: Uint8Array
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUpdateManyMutationInput = {
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUncheckedUpdateManyInput = {
    device_id?: BytesFieldUpdateOperationsInput | Uint8Array
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
  }

  export type NotificationCreateInput = {
    public_key: string
    for_public_key?: string | null
    type: string
    data: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    public_key: string
    for_public_key?: string | null
    type: string
    data: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type NotificationUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    for_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    for_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    public_key: string
    for_public_key?: string | null
    type: string
    data: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    for_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
    for_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AuthenticatorDeviceListRelationFilter = {
    every?: AuthenticatorDeviceWhereInput
    some?: AuthenticatorDeviceWhereInput
    none?: AuthenticatorDeviceWhereInput
  }

  export type UserDataListRelationFilter = {
    every?: UserDataWhereInput
    some?: UserDataWhereInput
    none?: UserDataWhereInput
  }

  export type AuthenticatorDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    public_key?: SortOrder
    address?: SortOrder
    username?: SortOrder
    layout?: SortOrder
    isAuthority?: SortOrder
    badge_collections?: SortOrder
    badge_tags?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    public_key?: SortOrder
    address?: SortOrder
    username?: SortOrder
    isAuthority?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    public_key?: SortOrder
    address?: SortOrder
    username?: SortOrder
    isAuthority?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    challenge?: SortOrder
  }

  export type UserChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    challenge?: SortOrder
  }

  export type UserChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    challenge?: SortOrder
  }

  export type UserChallengeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDataCountOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    address?: SortOrder
    domain?: SortOrder
    label?: SortOrder
    value?: SortOrder
    nonce?: SortOrder
  }

  export type UserDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserDataMaxOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    address?: SortOrder
    domain?: SortOrder
    label?: SortOrder
    value?: SortOrder
    nonce?: SortOrder
  }

  export type UserDataMinOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    address?: SortOrder
    domain?: SortOrder
    label?: SortOrder
    value?: SortOrder
    nonce?: SortOrder
  }

  export type UserDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type AuthenticatorTransportListRelationFilter = {
    every?: AuthenticatorTransportWhereInput
    some?: AuthenticatorTransportWhereInput
    none?: AuthenticatorTransportWhereInput
  }

  export type AuthenticatorTransportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorDeviceCountOrderByAggregateInput = {
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    public_key?: SortOrder
  }

  export type AuthenticatorDeviceAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorDeviceMaxOrderByAggregateInput = {
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    public_key?: SortOrder
  }

  export type AuthenticatorDeviceMinOrderByAggregateInput = {
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    public_key?: SortOrder
  }

  export type AuthenticatorDeviceSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type EnumAuthenticatorTransportFutureFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticatorTransportFuture | EnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel> | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorDeviceScalarRelationFilter = {
    is?: AuthenticatorDeviceWhereInput
    isNot?: AuthenticatorDeviceWhereInput
  }

  export type AuthenticatorTransportDevice_idTransportCompoundUniqueInput = {
    device_id: Uint8Array
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportCountOrderByAggregateInput = {
    device_id?: SortOrder
    transport?: SortOrder
  }

  export type AuthenticatorTransportMaxOrderByAggregateInput = {
    device_id?: SortOrder
    transport?: SortOrder
  }

  export type AuthenticatorTransportMinOrderByAggregateInput = {
    device_id?: SortOrder
    transport?: SortOrder
  }

  export type EnumAuthenticatorTransportFutureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticatorTransportFuture | EnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticatorTransportFutureWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticatorTransportFuture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel>
    _max?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    for_public_key?: SortOrder
    type?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    for_public_key?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    public_key?: SortOrder
    for_public_key?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreatebadge_collectionsInput = {
    set: string[]
  }

  export type UserCreatebadge_tagsInput = {
    set: string[]
  }

  export type AuthenticatorDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput> | AuthenticatorDeviceCreateWithoutUserInput[] | AuthenticatorDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutUserInput | AuthenticatorDeviceCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorDeviceCreateManyUserInputEnvelope
    connect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
  }

  export type UserDataCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput> | UserDataCreateWithoutUserInput[] | UserDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput | UserDataCreateOrConnectWithoutUserInput[]
    createMany?: UserDataCreateManyUserInputEnvelope
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
  }

  export type AuthenticatorDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput> | AuthenticatorDeviceCreateWithoutUserInput[] | AuthenticatorDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutUserInput | AuthenticatorDeviceCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorDeviceCreateManyUserInputEnvelope
    connect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
  }

  export type UserDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput> | UserDataCreateWithoutUserInput[] | UserDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput | UserDataCreateOrConnectWithoutUserInput[]
    createMany?: UserDataCreateManyUserInputEnvelope
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdatebadge_collectionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatebadge_tagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AuthenticatorDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput> | AuthenticatorDeviceCreateWithoutUserInput[] | AuthenticatorDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutUserInput | AuthenticatorDeviceCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorDeviceUpsertWithWhereUniqueWithoutUserInput | AuthenticatorDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorDeviceCreateManyUserInputEnvelope
    set?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    disconnect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    delete?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    connect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    update?: AuthenticatorDeviceUpdateWithWhereUniqueWithoutUserInput | AuthenticatorDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorDeviceUpdateManyWithWhereWithoutUserInput | AuthenticatorDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorDeviceScalarWhereInput | AuthenticatorDeviceScalarWhereInput[]
  }

  export type UserDataUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput> | UserDataCreateWithoutUserInput[] | UserDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput | UserDataCreateOrConnectWithoutUserInput[]
    upsert?: UserDataUpsertWithWhereUniqueWithoutUserInput | UserDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDataCreateManyUserInputEnvelope
    set?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    disconnect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    delete?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    update?: UserDataUpdateWithWhereUniqueWithoutUserInput | UserDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDataUpdateManyWithWhereWithoutUserInput | UserDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
  }

  export type AuthenticatorDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput> | AuthenticatorDeviceCreateWithoutUserInput[] | AuthenticatorDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutUserInput | AuthenticatorDeviceCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorDeviceUpsertWithWhereUniqueWithoutUserInput | AuthenticatorDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorDeviceCreateManyUserInputEnvelope
    set?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    disconnect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    delete?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    connect?: AuthenticatorDeviceWhereUniqueInput | AuthenticatorDeviceWhereUniqueInput[]
    update?: AuthenticatorDeviceUpdateWithWhereUniqueWithoutUserInput | AuthenticatorDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorDeviceUpdateManyWithWhereWithoutUserInput | AuthenticatorDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorDeviceScalarWhereInput | AuthenticatorDeviceScalarWhereInput[]
  }

  export type UserDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput> | UserDataCreateWithoutUserInput[] | UserDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDataCreateOrConnectWithoutUserInput | UserDataCreateOrConnectWithoutUserInput[]
    upsert?: UserDataUpsertWithWhereUniqueWithoutUserInput | UserDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDataCreateManyUserInputEnvelope
    set?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    disconnect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    delete?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    connect?: UserDataWhereUniqueInput | UserDataWhereUniqueInput[]
    update?: UserDataUpdateWithWhereUniqueWithoutUserInput | UserDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDataUpdateManyWithWhereWithoutUserInput | UserDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutUserDataInput = {
    create?: XOR<UserCreateWithoutUserDataInput, UserUncheckedCreateWithoutUserDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserDataNestedInput = {
    create?: XOR<UserCreateWithoutUserDataInput, UserUncheckedCreateWithoutUserDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDataInput
    upsert?: UserUpsertWithoutUserDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDataInput, UserUpdateWithoutUserDataInput>, UserUncheckedUpdateWithoutUserDataInput>
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type AuthenticatorTransportCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput> | AuthenticatorTransportCreateWithoutDeviceInput[] | AuthenticatorTransportUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AuthenticatorTransportCreateOrConnectWithoutDeviceInput | AuthenticatorTransportCreateOrConnectWithoutDeviceInput[]
    createMany?: AuthenticatorTransportCreateManyDeviceInputEnvelope
    connect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
  }

  export type AuthenticatorTransportUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput> | AuthenticatorTransportCreateWithoutDeviceInput[] | AuthenticatorTransportUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AuthenticatorTransportCreateOrConnectWithoutDeviceInput | AuthenticatorTransportCreateOrConnectWithoutDeviceInput[]
    createMany?: AuthenticatorTransportCreateManyDeviceInputEnvelope
    connect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type AuthenticatorTransportUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput> | AuthenticatorTransportCreateWithoutDeviceInput[] | AuthenticatorTransportUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AuthenticatorTransportCreateOrConnectWithoutDeviceInput | AuthenticatorTransportCreateOrConnectWithoutDeviceInput[]
    upsert?: AuthenticatorTransportUpsertWithWhereUniqueWithoutDeviceInput | AuthenticatorTransportUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AuthenticatorTransportCreateManyDeviceInputEnvelope
    set?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    disconnect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    delete?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    connect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    update?: AuthenticatorTransportUpdateWithWhereUniqueWithoutDeviceInput | AuthenticatorTransportUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AuthenticatorTransportUpdateManyWithWhereWithoutDeviceInput | AuthenticatorTransportUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AuthenticatorTransportScalarWhereInput | AuthenticatorTransportScalarWhereInput[]
  }

  export type AuthenticatorTransportUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput> | AuthenticatorTransportCreateWithoutDeviceInput[] | AuthenticatorTransportUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AuthenticatorTransportCreateOrConnectWithoutDeviceInput | AuthenticatorTransportCreateOrConnectWithoutDeviceInput[]
    upsert?: AuthenticatorTransportUpsertWithWhereUniqueWithoutDeviceInput | AuthenticatorTransportUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AuthenticatorTransportCreateManyDeviceInputEnvelope
    set?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    disconnect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    delete?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    connect?: AuthenticatorTransportWhereUniqueInput | AuthenticatorTransportWhereUniqueInput[]
    update?: AuthenticatorTransportUpdateWithWhereUniqueWithoutDeviceInput | AuthenticatorTransportUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AuthenticatorTransportUpdateManyWithWhereWithoutDeviceInput | AuthenticatorTransportUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AuthenticatorTransportScalarWhereInput | AuthenticatorTransportScalarWhereInput[]
  }

  export type AuthenticatorDeviceCreateNestedOneWithoutTransportsInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutTransportsInput, AuthenticatorDeviceUncheckedCreateWithoutTransportsInput>
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutTransportsInput
    connect?: AuthenticatorDeviceWhereUniqueInput
  }

  export type EnumAuthenticatorTransportFutureFieldUpdateOperationsInput = {
    set?: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorDeviceUpdateOneRequiredWithoutTransportsNestedInput = {
    create?: XOR<AuthenticatorDeviceCreateWithoutTransportsInput, AuthenticatorDeviceUncheckedCreateWithoutTransportsInput>
    connectOrCreate?: AuthenticatorDeviceCreateOrConnectWithoutTransportsInput
    upsert?: AuthenticatorDeviceUpsertWithoutTransportsInput
    connect?: AuthenticatorDeviceWhereUniqueInput
    update?: XOR<XOR<AuthenticatorDeviceUpdateToOneWithWhereWithoutTransportsInput, AuthenticatorDeviceUpdateWithoutTransportsInput>, AuthenticatorDeviceUncheckedUpdateWithoutTransportsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticatorTransportFuture | EnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel> | $Enums.AuthenticatorTransportFuture
  }

  export type NestedEnumAuthenticatorTransportFutureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticatorTransportFuture | EnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticatorTransportFuture[] | ListEnumAuthenticatorTransportFutureFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticatorTransportFutureWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticatorTransportFuture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel>
    _max?: NestedEnumAuthenticatorTransportFutureFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AuthenticatorDeviceCreateWithoutUserInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    transports?: AuthenticatorTransportCreateNestedManyWithoutDeviceInput
  }

  export type AuthenticatorDeviceUncheckedCreateWithoutUserInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    transports?: AuthenticatorTransportUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type AuthenticatorDeviceCreateOrConnectWithoutUserInput = {
    where: AuthenticatorDeviceWhereUniqueInput
    create: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorDeviceCreateManyUserInputEnvelope = {
    data: AuthenticatorDeviceCreateManyUserInput | AuthenticatorDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDataCreateWithoutUserInput = {
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
  }

  export type UserDataUncheckedCreateWithoutUserInput = {
    id?: number
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
  }

  export type UserDataCreateOrConnectWithoutUserInput = {
    where: UserDataWhereUniqueInput
    create: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
  }

  export type UserDataCreateManyUserInputEnvelope = {
    data: UserDataCreateManyUserInput | UserDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorDeviceWhereUniqueInput
    update: XOR<AuthenticatorDeviceUpdateWithoutUserInput, AuthenticatorDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorDeviceCreateWithoutUserInput, AuthenticatorDeviceUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorDeviceWhereUniqueInput
    data: XOR<AuthenticatorDeviceUpdateWithoutUserInput, AuthenticatorDeviceUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorDeviceUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorDeviceScalarWhereInput
    data: XOR<AuthenticatorDeviceUpdateManyMutationInput, AuthenticatorDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorDeviceScalarWhereInput = {
    AND?: AuthenticatorDeviceScalarWhereInput | AuthenticatorDeviceScalarWhereInput[]
    OR?: AuthenticatorDeviceScalarWhereInput[]
    NOT?: AuthenticatorDeviceScalarWhereInput | AuthenticatorDeviceScalarWhereInput[]
    credential_id?: BytesFilter<"AuthenticatorDevice"> | Uint8Array
    credential_public_key?: BytesFilter<"AuthenticatorDevice"> | Uint8Array
    counter?: IntFilter<"AuthenticatorDevice"> | number
    public_key?: StringFilter<"AuthenticatorDevice"> | string
  }

  export type UserDataUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDataWhereUniqueInput
    update: XOR<UserDataUpdateWithoutUserInput, UserDataUncheckedUpdateWithoutUserInput>
    create: XOR<UserDataCreateWithoutUserInput, UserDataUncheckedCreateWithoutUserInput>
  }

  export type UserDataUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDataWhereUniqueInput
    data: XOR<UserDataUpdateWithoutUserInput, UserDataUncheckedUpdateWithoutUserInput>
  }

  export type UserDataUpdateManyWithWhereWithoutUserInput = {
    where: UserDataScalarWhereInput
    data: XOR<UserDataUpdateManyMutationInput, UserDataUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDataScalarWhereInput = {
    AND?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
    OR?: UserDataScalarWhereInput[]
    NOT?: UserDataScalarWhereInput | UserDataScalarWhereInput[]
    id?: IntFilter<"UserData"> | number
    public_key?: StringFilter<"UserData"> | string
    address?: StringFilter<"UserData"> | string
    domain?: StringNullableFilter<"UserData"> | string | null
    label?: StringFilter<"UserData"> | string
    value?: StringFilter<"UserData"> | string
    nonce?: StringFilter<"UserData"> | string
  }

  export type UserCreateWithoutUserDataInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserDataInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDataInput, UserUncheckedCreateWithoutUserDataInput>
  }

  export type UserUpsertWithoutUserDataInput = {
    update: XOR<UserUpdateWithoutUserDataInput, UserUncheckedUpdateWithoutUserDataInput>
    create: XOR<UserCreateWithoutUserDataInput, UserUncheckedCreateWithoutUserDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDataInput, UserUncheckedUpdateWithoutUserDataInput>
  }

  export type UserUpdateWithoutUserDataInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDataInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    devices?: AuthenticatorDeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDevicesInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    userData?: UserDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    public_key: string
    address: string
    username: string
    layout: JsonNullValueInput | InputJsonValue
    isAuthority: boolean
    badge_collections?: UserCreatebadge_collectionsInput | string[]
    badge_tags?: UserCreatebadge_tagsInput | string[]
    userData?: UserDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type AuthenticatorTransportCreateWithoutDeviceInput = {
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUncheckedCreateWithoutDeviceInput = {
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportCreateOrConnectWithoutDeviceInput = {
    where: AuthenticatorTransportWhereUniqueInput
    create: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput>
  }

  export type AuthenticatorTransportCreateManyDeviceInputEnvelope = {
    data: AuthenticatorTransportCreateManyDeviceInput | AuthenticatorTransportCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    userData?: UserDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    layout?: JsonNullValueInput | InputJsonValue
    isAuthority?: BoolFieldUpdateOperationsInput | boolean
    badge_collections?: UserUpdatebadge_collectionsInput | string[]
    badge_tags?: UserUpdatebadge_tagsInput | string[]
    userData?: UserDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthenticatorTransportUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AuthenticatorTransportWhereUniqueInput
    update: XOR<AuthenticatorTransportUpdateWithoutDeviceInput, AuthenticatorTransportUncheckedUpdateWithoutDeviceInput>
    create: XOR<AuthenticatorTransportCreateWithoutDeviceInput, AuthenticatorTransportUncheckedCreateWithoutDeviceInput>
  }

  export type AuthenticatorTransportUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AuthenticatorTransportWhereUniqueInput
    data: XOR<AuthenticatorTransportUpdateWithoutDeviceInput, AuthenticatorTransportUncheckedUpdateWithoutDeviceInput>
  }

  export type AuthenticatorTransportUpdateManyWithWhereWithoutDeviceInput = {
    where: AuthenticatorTransportScalarWhereInput
    data: XOR<AuthenticatorTransportUpdateManyMutationInput, AuthenticatorTransportUncheckedUpdateManyWithoutDeviceInput>
  }

  export type AuthenticatorTransportScalarWhereInput = {
    AND?: AuthenticatorTransportScalarWhereInput | AuthenticatorTransportScalarWhereInput[]
    OR?: AuthenticatorTransportScalarWhereInput[]
    NOT?: AuthenticatorTransportScalarWhereInput | AuthenticatorTransportScalarWhereInput[]
    device_id?: BytesFilter<"AuthenticatorTransport"> | Uint8Array
    transport?: EnumAuthenticatorTransportFutureFilter<"AuthenticatorTransport"> | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorDeviceCreateWithoutTransportsInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type AuthenticatorDeviceUncheckedCreateWithoutTransportsInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
    public_key: string
  }

  export type AuthenticatorDeviceCreateOrConnectWithoutTransportsInput = {
    where: AuthenticatorDeviceWhereUniqueInput
    create: XOR<AuthenticatorDeviceCreateWithoutTransportsInput, AuthenticatorDeviceUncheckedCreateWithoutTransportsInput>
  }

  export type AuthenticatorDeviceUpsertWithoutTransportsInput = {
    update: XOR<AuthenticatorDeviceUpdateWithoutTransportsInput, AuthenticatorDeviceUncheckedUpdateWithoutTransportsInput>
    create: XOR<AuthenticatorDeviceCreateWithoutTransportsInput, AuthenticatorDeviceUncheckedCreateWithoutTransportsInput>
    where?: AuthenticatorDeviceWhereInput
  }

  export type AuthenticatorDeviceUpdateToOneWithWhereWithoutTransportsInput = {
    where?: AuthenticatorDeviceWhereInput
    data: XOR<AuthenticatorDeviceUpdateWithoutTransportsInput, AuthenticatorDeviceUncheckedUpdateWithoutTransportsInput>
  }

  export type AuthenticatorDeviceUpdateWithoutTransportsInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type AuthenticatorDeviceUncheckedUpdateWithoutTransportsInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    public_key?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticatorDeviceCreateManyUserInput = {
    credential_id: Uint8Array
    credential_public_key: Uint8Array
    counter: number
  }

  export type UserDataCreateManyUserInput = {
    id?: number
    address: string
    domain?: string | null
    label: string
    value: string
    nonce: string
  }

  export type AuthenticatorDeviceUpdateWithoutUserInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    transports?: AuthenticatorTransportUpdateManyWithoutDeviceNestedInput
  }

  export type AuthenticatorDeviceUncheckedUpdateWithoutUserInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
    transports?: AuthenticatorTransportUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type AuthenticatorDeviceUncheckedUpdateManyWithoutUserInput = {
    credential_id?: BytesFieldUpdateOperationsInput | Uint8Array
    credential_public_key?: BytesFieldUpdateOperationsInput | Uint8Array
    counter?: IntFieldUpdateOperationsInput | number
  }

  export type UserDataUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type UserDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type UserDataUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticatorTransportCreateManyDeviceInput = {
    transport: $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUpdateWithoutDeviceInput = {
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUncheckedUpdateWithoutDeviceInput = {
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
  }

  export type AuthenticatorTransportUncheckedUpdateManyWithoutDeviceInput = {
    transport?: EnumAuthenticatorTransportFutureFieldUpdateOperationsInput | $Enums.AuthenticatorTransportFuture
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