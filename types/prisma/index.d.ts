
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model UserStory
 * 
 */
export type UserStory = $Result.DefaultSelection<Prisma.$UserStoryPayload>
/**
 * Model PersonalizedAudio
 * 
 */
export type PersonalizedAudio = $Result.DefaultSelection<Prisma.$PersonalizedAudioPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>
/**
 * Model AppBanners
 * 
 */
export type AppBanners = $Result.DefaultSelection<Prisma.$AppBannersPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssignmentStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const SubscriptionPlatform: {
  GOOGLE_PLAY: 'GOOGLE_PLAY',
  IOS_APP_STORE: 'IOS_APP_STORE',
  STRIPE: 'STRIPE'
};

export type SubscriptionPlatform = (typeof SubscriptionPlatform)[keyof typeof SubscriptionPlatform]


export const SubscriptionInterval: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  SEMI_ANNUAL: 'SEMI_ANNUAL',
  ANNUAL: 'ANNUAL'
};

export type SubscriptionInterval = (typeof SubscriptionInterval)[keyof typeof SubscriptionInterval]

}

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type SubscriptionPlatform = $Enums.SubscriptionPlatform

export const SubscriptionPlatform: typeof $Enums.SubscriptionPlatform

export type SubscriptionInterval = $Enums.SubscriptionInterval

export const SubscriptionInterval: typeof $Enums.SubscriptionInterval

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStory`: Exposes CRUD operations for the **UserStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStories
    * const userStories = await prisma.userStory.findMany()
    * ```
    */
  get userStory(): Prisma.UserStoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalizedAudio`: Exposes CRUD operations for the **PersonalizedAudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalizedAudios
    * const personalizedAudios = await prisma.personalizedAudio.findMany()
    * ```
    */
  get personalizedAudio(): Prisma.PersonalizedAudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appBanners`: Exposes CRUD operations for the **AppBanners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppBanners
    * const appBanners = await prisma.appBanners.findMany()
    * ```
    */
  get appBanners(): Prisma.AppBannersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Subscription: 'Subscription',
    History: 'History',
    UserStory: 'UserStory',
    PersonalizedAudio: 'PersonalizedAudio',
    Config: 'Config',
    AppBanners: 'AppBanners',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription" | "history" | "userStory" | "personalizedAudio" | "config" | "appBanners" | "adminUser"
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
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      UserStory: {
        payload: Prisma.$UserStoryPayload<ExtArgs>
        fields: Prisma.UserStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          findFirst: {
            args: Prisma.UserStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          findMany: {
            args: Prisma.UserStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>[]
          }
          create: {
            args: Prisma.UserStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          createMany: {
            args: Prisma.UserStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          update: {
            args: Prisma.UserStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          deleteMany: {
            args: Prisma.UserStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          aggregate: {
            args: Prisma.UserStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStory>
          }
          groupBy: {
            args: Prisma.UserStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserStoryCountAggregateOutputType> | number
          }
        }
      }
      PersonalizedAudio: {
        payload: Prisma.$PersonalizedAudioPayload<ExtArgs>
        fields: Prisma.PersonalizedAudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalizedAudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalizedAudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          findFirst: {
            args: Prisma.PersonalizedAudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalizedAudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          findMany: {
            args: Prisma.PersonalizedAudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>[]
          }
          create: {
            args: Prisma.PersonalizedAudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          createMany: {
            args: Prisma.PersonalizedAudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonalizedAudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          update: {
            args: Prisma.PersonalizedAudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          deleteMany: {
            args: Prisma.PersonalizedAudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalizedAudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonalizedAudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalizedAudioPayload>
          }
          aggregate: {
            args: Prisma.PersonalizedAudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalizedAudio>
          }
          groupBy: {
            args: Prisma.PersonalizedAudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalizedAudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalizedAudioCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalizedAudioCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
          }
        }
      }
      AppBanners: {
        payload: Prisma.$AppBannersPayload<ExtArgs>
        fields: Prisma.AppBannersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppBannersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppBannersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          findFirst: {
            args: Prisma.AppBannersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppBannersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          findMany: {
            args: Prisma.AppBannersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>[]
          }
          create: {
            args: Prisma.AppBannersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          createMany: {
            args: Prisma.AppBannersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppBannersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          update: {
            args: Prisma.AppBannersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          deleteMany: {
            args: Prisma.AppBannersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppBannersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppBannersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppBannersPayload>
          }
          aggregate: {
            args: Prisma.AppBannersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppBanners>
          }
          groupBy: {
            args: Prisma.AppBannersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppBannersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppBannersCountArgs<ExtArgs>
            result: $Utils.Optional<AppBannersCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscription?: SubscriptionOmit
    history?: HistoryOmit
    userStory?: UserStoryOmit
    personalizedAudio?: PersonalizedAudioOmit
    config?: ConfigOmit
    appBanners?: AppBannersOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    stories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stories?: boolean | UserCountOutputTypeCountStoriesArgs
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
  export type UserCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    users: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SubscriptionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type HistoryCountOutputType
   */

  export type HistoryCountOutputType = {
    banners: number
    purchases: number
    availableAudios: number
  }

  export type HistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banners?: boolean | HistoryCountOutputTypeCountBannersArgs
    purchases?: boolean | HistoryCountOutputTypeCountPurchasesArgs
    availableAudios?: boolean | HistoryCountOutputTypeCountAvailableAudiosArgs
  }

  // Custom InputTypes
  /**
   * HistoryCountOutputType without action
   */
  export type HistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCountOutputType
     */
    select?: HistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HistoryCountOutputType without action
   */
  export type HistoryCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppBannersWhereInput
  }

  /**
   * HistoryCountOutputType without action
   */
  export type HistoryCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
  }

  /**
   * HistoryCountOutputType without action
   */
  export type HistoryCountOutputTypeCountAvailableAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalizedAudioWhereInput
  }


  /**
   * Count Type PersonalizedAudioCountOutputType
   */

  export type PersonalizedAudioCountOutputType = {
    assignedTo: number
  }

  export type PersonalizedAudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | PersonalizedAudioCountOutputTypeCountAssignedToArgs
  }

  // Custom InputTypes
  /**
   * PersonalizedAudioCountOutputType without action
   */
  export type PersonalizedAudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudioCountOutputType
     */
    select?: PersonalizedAudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalizedAudioCountOutputType without action
   */
  export type PersonalizedAudioCountOutputTypeCountAssignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
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
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    profileImage: string | null
    pushToken: string | null
    isPremium: boolean | null
    premiumEnd: Date | null
    subscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    profileImage: string | null
    pushToken: string | null
    isPremium: boolean | null
    premiumEnd: Date | null
    subscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    googleId: number
    profileImage: number
    pushToken: number
    isPremium: number
    premiumEnd: number
    subscriptionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profileImage?: true
    pushToken?: true
    isPremium?: true
    premiumEnd?: true
    subscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profileImage?: true
    pushToken?: true
    isPremium?: true
    premiumEnd?: true
    subscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profileImage?: true
    pushToken?: true
    isPremium?: true
    premiumEnd?: true
    subscriptionId?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    name: string | null
    email: string
    googleId: string | null
    profileImage: string | null
    pushToken: string | null
    isPremium: boolean
    premiumEnd: Date | null
    subscriptionId: string | null
    createdAt: Date
    updatedAt: Date
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
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profileImage?: boolean
    pushToken?: boolean
    isPremium?: boolean
    premiumEnd?: boolean
    subscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profileImage?: boolean
    pushToken?: boolean
    isPremium?: boolean
    premiumEnd?: boolean
    subscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "googleId" | "profileImage" | "pushToken" | "isPremium" | "premiumEnd" | "subscriptionId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      stories: Prisma.$UserStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      googleId: string | null
      profileImage: string | null
      pushToken: string | null
      isPremium: boolean
      premiumEnd: Date | null
      subscriptionId: string | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stories<T extends User$storiesArgs<ExtArgs> = {}>(args?: Subset<T, User$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly pushToken: FieldRef<"User", 'String'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly premiumEnd: FieldRef<"User", 'DateTime'>
    readonly subscriptionId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.stories
   */
  export type User$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    cursor?: UserStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
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
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    platform: $Enums.SubscriptionPlatform | null
    purchaseToken: string | null
    orderId: string | null
    productId: string | null
    interval: $Enums.SubscriptionInterval | null
    isActive: boolean | null
    autoRenewing: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    platform: $Enums.SubscriptionPlatform | null
    purchaseToken: string | null
    orderId: string | null
    productId: string | null
    interval: $Enums.SubscriptionInterval | null
    isActive: boolean | null
    autoRenewing: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    platform: number
    purchaseToken: number
    orderId: number
    productId: number
    interval: number
    isActive: number
    autoRenewing: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    platform?: true
    purchaseToken?: true
    orderId?: true
    productId?: true
    interval?: true
    isActive?: true
    autoRenewing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    platform?: true
    purchaseToken?: true
    orderId?: true
    productId?: true
    interval?: true
    isActive?: true
    autoRenewing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    platform?: true
    purchaseToken?: true
    orderId?: true
    productId?: true
    interval?: true
    isActive?: true
    autoRenewing?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    platform: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId: string | null
    productId: string
    interval: $Enums.SubscriptionInterval | null
    isActive: boolean
    autoRenewing: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    purchaseToken?: boolean
    orderId?: boolean
    productId?: boolean
    interval?: boolean
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Subscription$usersArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    platform?: boolean
    purchaseToken?: boolean
    orderId?: boolean
    productId?: boolean
    interval?: boolean
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "purchaseToken" | "orderId" | "productId" | "interval" | "isActive" | "autoRenewing" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Subscription$usersArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: $Enums.SubscriptionPlatform
      purchaseToken: string
      orderId: string | null
      productId: string
      interval: $Enums.SubscriptionInterval | null
      isActive: boolean
      autoRenewing: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Subscription$usersArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly platform: FieldRef<"Subscription", 'SubscriptionPlatform'>
    readonly purchaseToken: FieldRef<"Subscription", 'String'>
    readonly orderId: FieldRef<"Subscription", 'String'>
    readonly productId: FieldRef<"Subscription", 'String'>
    readonly interval: FieldRef<"Subscription", 'SubscriptionInterval'>
    readonly isActive: FieldRef<"Subscription", 'Boolean'>
    readonly autoRenewing: FieldRef<"Subscription", 'Boolean'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.users
   */
  export type Subscription$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    type: number | null
  }

  export type HistorySumAggregateOutputType = {
    type: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: string | null
    name_es: string | null
    name_en: string | null
    name_pt: string | null
    description_es: string | null
    description_en: string | null
    description_pt: string | null
    cover: string | null
    poster: string | null
    youtube: string | null
    type: number | null
    song: string | null
    active: boolean | null
    isPremium: boolean | null
    googleProductId: string | null
    dominant: string | null
    average: string | null
    vibrant: string | null
    darkVibrant: string | null
    lightVibrant: string | null
    darkMuted: string | null
    lightMuted: string | null
    muted: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: string | null
    name_es: string | null
    name_en: string | null
    name_pt: string | null
    description_es: string | null
    description_en: string | null
    description_pt: string | null
    cover: string | null
    poster: string | null
    youtube: string | null
    type: number | null
    song: string | null
    active: boolean | null
    isPremium: boolean | null
    googleProductId: string | null
    dominant: string | null
    average: string | null
    vibrant: string | null
    darkVibrant: string | null
    lightVibrant: string | null
    darkMuted: string | null
    lightMuted: string | null
    muted: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    name_es: number
    name_en: number
    name_pt: number
    description_es: number
    description_en: number
    description_pt: number
    cover: number
    poster: number
    youtube: number
    type: number
    song: number
    active: number
    isPremium: number
    googleProductId: number
    dominant: number
    average: number
    vibrant: number
    darkVibrant: number
    lightVibrant: number
    darkMuted: number
    lightMuted: number
    muted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    type?: true
  }

  export type HistorySumAggregateInputType = {
    type?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    name_es?: true
    name_en?: true
    name_pt?: true
    description_es?: true
    description_en?: true
    description_pt?: true
    cover?: true
    poster?: true
    youtube?: true
    type?: true
    song?: true
    active?: true
    isPremium?: true
    googleProductId?: true
    dominant?: true
    average?: true
    vibrant?: true
    darkVibrant?: true
    lightVibrant?: true
    darkMuted?: true
    lightMuted?: true
    muted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    name_es?: true
    name_en?: true
    name_pt?: true
    description_es?: true
    description_en?: true
    description_pt?: true
    cover?: true
    poster?: true
    youtube?: true
    type?: true
    song?: true
    active?: true
    isPremium?: true
    googleProductId?: true
    dominant?: true
    average?: true
    vibrant?: true
    darkVibrant?: true
    lightVibrant?: true
    darkMuted?: true
    lightMuted?: true
    muted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    name_es?: true
    name_en?: true
    name_pt?: true
    description_es?: true
    description_en?: true
    description_pt?: true
    cover?: true
    poster?: true
    youtube?: true
    type?: true
    song?: true
    active?: true
    isPremium?: true
    googleProductId?: true
    dominant?: true
    average?: true
    vibrant?: true
    darkVibrant?: true
    lightVibrant?: true
    darkMuted?: true
    lightMuted?: true
    muted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: string
    name_es: string
    name_en: string
    name_pt: string | null
    description_es: string
    description_en: string
    description_pt: string | null
    cover: string
    poster: string | null
    youtube: string | null
    type: number
    song: string | null
    active: boolean
    isPremium: boolean
    googleProductId: string | null
    dominant: string | null
    average: string | null
    vibrant: string | null
    darkVibrant: string | null
    lightVibrant: string | null
    darkMuted: string | null
    lightMuted: string | null
    muted: string | null
    createdAt: Date
    updatedAt: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_es?: boolean
    name_en?: boolean
    name_pt?: boolean
    description_es?: boolean
    description_en?: boolean
    description_pt?: boolean
    cover?: boolean
    poster?: boolean
    youtube?: boolean
    type?: boolean
    song?: boolean
    active?: boolean
    isPremium?: boolean
    googleProductId?: boolean
    dominant?: boolean
    average?: boolean
    vibrant?: boolean
    darkVibrant?: boolean
    lightVibrant?: boolean
    darkMuted?: boolean
    lightMuted?: boolean
    muted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    banners?: boolean | History$bannersArgs<ExtArgs>
    purchases?: boolean | History$purchasesArgs<ExtArgs>
    availableAudios?: boolean | History$availableAudiosArgs<ExtArgs>
    _count?: boolean | HistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>



  export type HistorySelectScalar = {
    id?: boolean
    name_es?: boolean
    name_en?: boolean
    name_pt?: boolean
    description_es?: boolean
    description_en?: boolean
    description_pt?: boolean
    cover?: boolean
    poster?: boolean
    youtube?: boolean
    type?: boolean
    song?: boolean
    active?: boolean
    isPremium?: boolean
    googleProductId?: boolean
    dominant?: boolean
    average?: boolean
    vibrant?: boolean
    darkVibrant?: boolean
    lightVibrant?: boolean
    darkMuted?: boolean
    lightMuted?: boolean
    muted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_es" | "name_en" | "name_pt" | "description_es" | "description_en" | "description_pt" | "cover" | "poster" | "youtube" | "type" | "song" | "active" | "isPremium" | "googleProductId" | "dominant" | "average" | "vibrant" | "darkVibrant" | "lightVibrant" | "darkMuted" | "lightMuted" | "muted" | "createdAt" | "updatedAt", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banners?: boolean | History$bannersArgs<ExtArgs>
    purchases?: boolean | History$purchasesArgs<ExtArgs>
    availableAudios?: boolean | History$availableAudiosArgs<ExtArgs>
    _count?: boolean | HistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      banners: Prisma.$AppBannersPayload<ExtArgs>[]
      purchases: Prisma.$UserStoryPayload<ExtArgs>[]
      availableAudios: Prisma.$PersonalizedAudioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_es: string
      name_en: string
      name_pt: string | null
      description_es: string
      description_en: string
      description_pt: string | null
      cover: string
      poster: string | null
      youtube: string | null
      type: number
      song: string | null
      active: boolean
      isPremium: boolean
      googleProductId: string | null
      dominant: string | null
      average: string | null
      vibrant: string | null
      darkVibrant: string | null
      lightVibrant: string | null
      darkMuted: string | null
      lightMuted: string | null
      muted: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banners<T extends History$bannersArgs<ExtArgs> = {}>(args?: Subset<T, History$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends History$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, History$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availableAudios<T extends History$availableAudiosArgs<ExtArgs> = {}>(args?: Subset<T, History$availableAudiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'String'>
    readonly name_es: FieldRef<"History", 'String'>
    readonly name_en: FieldRef<"History", 'String'>
    readonly name_pt: FieldRef<"History", 'String'>
    readonly description_es: FieldRef<"History", 'String'>
    readonly description_en: FieldRef<"History", 'String'>
    readonly description_pt: FieldRef<"History", 'String'>
    readonly cover: FieldRef<"History", 'String'>
    readonly poster: FieldRef<"History", 'String'>
    readonly youtube: FieldRef<"History", 'String'>
    readonly type: FieldRef<"History", 'Int'>
    readonly song: FieldRef<"History", 'String'>
    readonly active: FieldRef<"History", 'Boolean'>
    readonly isPremium: FieldRef<"History", 'Boolean'>
    readonly googleProductId: FieldRef<"History", 'String'>
    readonly dominant: FieldRef<"History", 'String'>
    readonly average: FieldRef<"History", 'String'>
    readonly vibrant: FieldRef<"History", 'String'>
    readonly darkVibrant: FieldRef<"History", 'String'>
    readonly lightVibrant: FieldRef<"History", 'String'>
    readonly darkMuted: FieldRef<"History", 'String'>
    readonly lightMuted: FieldRef<"History", 'String'>
    readonly muted: FieldRef<"History", 'String'>
    readonly createdAt: FieldRef<"History", 'DateTime'>
    readonly updatedAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History.banners
   */
  export type History$bannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    where?: AppBannersWhereInput
    orderBy?: AppBannersOrderByWithRelationInput | AppBannersOrderByWithRelationInput[]
    cursor?: AppBannersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppBannersScalarFieldEnum | AppBannersScalarFieldEnum[]
  }

  /**
   * History.purchases
   */
  export type History$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    cursor?: UserStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }

  /**
   * History.availableAudios
   */
  export type History$availableAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    where?: PersonalizedAudioWhereInput
    orderBy?: PersonalizedAudioOrderByWithRelationInput | PersonalizedAudioOrderByWithRelationInput[]
    cursor?: PersonalizedAudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalizedAudioScalarFieldEnum | PersonalizedAudioScalarFieldEnum[]
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model UserStory
   */

  export type AggregateUserStory = {
    _count: UserStoryCountAggregateOutputType | null
    _min: UserStoryMinAggregateOutputType | null
    _max: UserStoryMaxAggregateOutputType | null
  }

  export type UserStoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    historyId: string | null
    requestedName: string | null
    audioId: string | null
    purchaseToken: string | null
    googleOrderId: string | null
    status: $Enums.AssignmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    historyId: string | null
    requestedName: string | null
    audioId: string | null
    purchaseToken: string | null
    googleOrderId: string | null
    status: $Enums.AssignmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStoryCountAggregateOutputType = {
    id: number
    userId: number
    historyId: number
    requestedName: number
    audioId: number
    purchaseToken: number
    googleOrderId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStoryMinAggregateInputType = {
    id?: true
    userId?: true
    historyId?: true
    requestedName?: true
    audioId?: true
    purchaseToken?: true
    googleOrderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStoryMaxAggregateInputType = {
    id?: true
    userId?: true
    historyId?: true
    requestedName?: true
    audioId?: true
    purchaseToken?: true
    googleOrderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStoryCountAggregateInputType = {
    id?: true
    userId?: true
    historyId?: true
    requestedName?: true
    audioId?: true
    purchaseToken?: true
    googleOrderId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStory to aggregate.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStories
    **/
    _count?: true | UserStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStoryMaxAggregateInputType
  }

  export type GetUserStoryAggregateType<T extends UserStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStory[P]>
      : GetScalarType<T[P], AggregateUserStory[P]>
  }




  export type UserStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithAggregationInput | UserStoryOrderByWithAggregationInput[]
    by: UserStoryScalarFieldEnum[] | UserStoryScalarFieldEnum
    having?: UserStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStoryCountAggregateInputType | true
    _min?: UserStoryMinAggregateInputType
    _max?: UserStoryMaxAggregateInputType
  }

  export type UserStoryGroupByOutputType = {
    id: string
    userId: string
    historyId: string
    requestedName: string
    audioId: string | null
    purchaseToken: string | null
    googleOrderId: string | null
    status: $Enums.AssignmentStatus
    createdAt: Date
    updatedAt: Date
    _count: UserStoryCountAggregateOutputType | null
    _min: UserStoryMinAggregateOutputType | null
    _max: UserStoryMaxAggregateOutputType | null
  }

  type GetUserStoryGroupByPayload<T extends UserStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserStoryGroupByOutputType[P]>
        }
      >
    >


  export type UserStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    historyId?: boolean
    requestedName?: boolean
    audioId?: boolean
    purchaseToken?: boolean
    googleOrderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | HistoryDefaultArgs<ExtArgs>
    audio?: boolean | UserStory$audioArgs<ExtArgs>
  }, ExtArgs["result"]["userStory"]>



  export type UserStorySelectScalar = {
    id?: boolean
    userId?: boolean
    historyId?: boolean
    requestedName?: boolean
    audioId?: boolean
    purchaseToken?: boolean
    googleOrderId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "historyId" | "requestedName" | "audioId" | "purchaseToken" | "googleOrderId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userStory"]>
  export type UserStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | HistoryDefaultArgs<ExtArgs>
    audio?: boolean | UserStory$audioArgs<ExtArgs>
  }

  export type $UserStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      history: Prisma.$HistoryPayload<ExtArgs>
      audio: Prisma.$PersonalizedAudioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      historyId: string
      requestedName: string
      audioId: string | null
      purchaseToken: string | null
      googleOrderId: string | null
      status: $Enums.AssignmentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStory"]>
    composites: {}
  }

  type UserStoryGetPayload<S extends boolean | null | undefined | UserStoryDefaultArgs> = $Result.GetResult<Prisma.$UserStoryPayload, S>

  type UserStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStoryCountAggregateInputType | true
    }

  export interface UserStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStory'], meta: { name: 'UserStory' } }
    /**
     * Find zero or one UserStory that matches the filter.
     * @param {UserStoryFindUniqueArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStoryFindUniqueArgs>(args: SelectSubset<T, UserStoryFindUniqueArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStoryFindUniqueOrThrowArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindFirstArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStoryFindFirstArgs>(args?: SelectSubset<T, UserStoryFindFirstArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindFirstOrThrowArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStories
     * const userStories = await prisma.userStory.findMany()
     * 
     * // Get first 10 UserStories
     * const userStories = await prisma.userStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStoryWithIdOnly = await prisma.userStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStoryFindManyArgs>(args?: SelectSubset<T, UserStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStory.
     * @param {UserStoryCreateArgs} args - Arguments to create a UserStory.
     * @example
     * // Create one UserStory
     * const UserStory = await prisma.userStory.create({
     *   data: {
     *     // ... data to create a UserStory
     *   }
     * })
     * 
     */
    create<T extends UserStoryCreateArgs>(args: SelectSubset<T, UserStoryCreateArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStories.
     * @param {UserStoryCreateManyArgs} args - Arguments to create many UserStories.
     * @example
     * // Create many UserStories
     * const userStory = await prisma.userStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStoryCreateManyArgs>(args?: SelectSubset<T, UserStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStory.
     * @param {UserStoryDeleteArgs} args - Arguments to delete one UserStory.
     * @example
     * // Delete one UserStory
     * const UserStory = await prisma.userStory.delete({
     *   where: {
     *     // ... filter to delete one UserStory
     *   }
     * })
     * 
     */
    delete<T extends UserStoryDeleteArgs>(args: SelectSubset<T, UserStoryDeleteArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStory.
     * @param {UserStoryUpdateArgs} args - Arguments to update one UserStory.
     * @example
     * // Update one UserStory
     * const userStory = await prisma.userStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStoryUpdateArgs>(args: SelectSubset<T, UserStoryUpdateArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStories.
     * @param {UserStoryDeleteManyArgs} args - Arguments to filter UserStories to delete.
     * @example
     * // Delete a few UserStories
     * const { count } = await prisma.userStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStoryDeleteManyArgs>(args?: SelectSubset<T, UserStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStories
     * const userStory = await prisma.userStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStoryUpdateManyArgs>(args: SelectSubset<T, UserStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStory.
     * @param {UserStoryUpsertArgs} args - Arguments to update or create a UserStory.
     * @example
     * // Update or create a UserStory
     * const userStory = await prisma.userStory.upsert({
     *   create: {
     *     // ... data to create a UserStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStory we want to update
     *   }
     * })
     */
    upsert<T extends UserStoryUpsertArgs>(args: SelectSubset<T, UserStoryUpsertArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryCountArgs} args - Arguments to filter UserStories to count.
     * @example
     * // Count the number of UserStories
     * const count = await prisma.userStory.count({
     *   where: {
     *     // ... the filter for the UserStories we want to count
     *   }
     * })
    **/
    count<T extends UserStoryCountArgs>(
      args?: Subset<T, UserStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStoryAggregateArgs>(args: Subset<T, UserStoryAggregateArgs>): Prisma.PrismaPromise<GetUserStoryAggregateType<T>>

    /**
     * Group by UserStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryGroupByArgs} args - Group by arguments.
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
      T extends UserStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStoryGroupByArgs['orderBy'] }
        : { orderBy?: UserStoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStory model
   */
  readonly fields: UserStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends HistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoryDefaultArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audio<T extends UserStory$audioArgs<ExtArgs> = {}>(args?: Subset<T, UserStory$audioArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserStory model
   */
  interface UserStoryFieldRefs {
    readonly id: FieldRef<"UserStory", 'String'>
    readonly userId: FieldRef<"UserStory", 'String'>
    readonly historyId: FieldRef<"UserStory", 'String'>
    readonly requestedName: FieldRef<"UserStory", 'String'>
    readonly audioId: FieldRef<"UserStory", 'String'>
    readonly purchaseToken: FieldRef<"UserStory", 'String'>
    readonly googleOrderId: FieldRef<"UserStory", 'String'>
    readonly status: FieldRef<"UserStory", 'AssignmentStatus'>
    readonly createdAt: FieldRef<"UserStory", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStory findUnique
   */
  export type UserStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where: UserStoryWhereUniqueInput
  }

  /**
   * UserStory findUniqueOrThrow
   */
  export type UserStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where: UserStoryWhereUniqueInput
  }

  /**
   * UserStory findFirst
   */
  export type UserStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStories.
     */
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }

  /**
   * UserStory findFirstOrThrow
   */
  export type UserStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStories.
     */
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }

  /**
   * UserStory findMany
   */
  export type UserStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStories to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }

  /**
   * UserStory create
   */
  export type UserStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStory.
     */
    data: XOR<UserStoryCreateInput, UserStoryUncheckedCreateInput>
  }

  /**
   * UserStory createMany
   */
  export type UserStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStories.
     */
    data: UserStoryCreateManyInput | UserStoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStory update
   */
  export type UserStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStory.
     */
    data: XOR<UserStoryUpdateInput, UserStoryUncheckedUpdateInput>
    /**
     * Choose, which UserStory to update.
     */
    where: UserStoryWhereUniqueInput
  }

  /**
   * UserStory updateMany
   */
  export type UserStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStories.
     */
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyInput>
    /**
     * Filter which UserStories to update
     */
    where?: UserStoryWhereInput
    /**
     * Limit how many UserStories to update.
     */
    limit?: number
  }

  /**
   * UserStory upsert
   */
  export type UserStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStory to update in case it exists.
     */
    where: UserStoryWhereUniqueInput
    /**
     * In case the UserStory found by the `where` argument doesn't exist, create a new UserStory with this data.
     */
    create: XOR<UserStoryCreateInput, UserStoryUncheckedCreateInput>
    /**
     * In case the UserStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStoryUpdateInput, UserStoryUncheckedUpdateInput>
  }

  /**
   * UserStory delete
   */
  export type UserStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter which UserStory to delete.
     */
    where: UserStoryWhereUniqueInput
  }

  /**
   * UserStory deleteMany
   */
  export type UserStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStories to delete
     */
    where?: UserStoryWhereInput
    /**
     * Limit how many UserStories to delete.
     */
    limit?: number
  }

  /**
   * UserStory.audio
   */
  export type UserStory$audioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    where?: PersonalizedAudioWhereInput
  }

  /**
   * UserStory without action
   */
  export type UserStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
  }


  /**
   * Model PersonalizedAudio
   */

  export type AggregatePersonalizedAudio = {
    _count: PersonalizedAudioCountAggregateOutputType | null
    _avg: PersonalizedAudioAvgAggregateOutputType | null
    _sum: PersonalizedAudioSumAggregateOutputType | null
    _min: PersonalizedAudioMinAggregateOutputType | null
    _max: PersonalizedAudioMaxAggregateOutputType | null
  }

  export type PersonalizedAudioAvgAggregateOutputType = {
    duration: number | null
  }

  export type PersonalizedAudioSumAggregateOutputType = {
    duration: number | null
  }

  export type PersonalizedAudioMinAggregateOutputType = {
    id: string | null
    url: string | null
    duration: number | null
    childName: string | null
    historyId: string | null
    createdAt: Date | null
  }

  export type PersonalizedAudioMaxAggregateOutputType = {
    id: string | null
    url: string | null
    duration: number | null
    childName: string | null
    historyId: string | null
    createdAt: Date | null
  }

  export type PersonalizedAudioCountAggregateOutputType = {
    id: number
    url: number
    duration: number
    childName: number
    historyId: number
    createdAt: number
    _all: number
  }


  export type PersonalizedAudioAvgAggregateInputType = {
    duration?: true
  }

  export type PersonalizedAudioSumAggregateInputType = {
    duration?: true
  }

  export type PersonalizedAudioMinAggregateInputType = {
    id?: true
    url?: true
    duration?: true
    childName?: true
    historyId?: true
    createdAt?: true
  }

  export type PersonalizedAudioMaxAggregateInputType = {
    id?: true
    url?: true
    duration?: true
    childName?: true
    historyId?: true
    createdAt?: true
  }

  export type PersonalizedAudioCountAggregateInputType = {
    id?: true
    url?: true
    duration?: true
    childName?: true
    historyId?: true
    createdAt?: true
    _all?: true
  }

  export type PersonalizedAudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalizedAudio to aggregate.
     */
    where?: PersonalizedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalizedAudios to fetch.
     */
    orderBy?: PersonalizedAudioOrderByWithRelationInput | PersonalizedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalizedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalizedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalizedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalizedAudios
    **/
    _count?: true | PersonalizedAudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalizedAudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalizedAudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalizedAudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalizedAudioMaxAggregateInputType
  }

  export type GetPersonalizedAudioAggregateType<T extends PersonalizedAudioAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalizedAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalizedAudio[P]>
      : GetScalarType<T[P], AggregatePersonalizedAudio[P]>
  }




  export type PersonalizedAudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalizedAudioWhereInput
    orderBy?: PersonalizedAudioOrderByWithAggregationInput | PersonalizedAudioOrderByWithAggregationInput[]
    by: PersonalizedAudioScalarFieldEnum[] | PersonalizedAudioScalarFieldEnum
    having?: PersonalizedAudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalizedAudioCountAggregateInputType | true
    _avg?: PersonalizedAudioAvgAggregateInputType
    _sum?: PersonalizedAudioSumAggregateInputType
    _min?: PersonalizedAudioMinAggregateInputType
    _max?: PersonalizedAudioMaxAggregateInputType
  }

  export type PersonalizedAudioGroupByOutputType = {
    id: string
    url: string
    duration: number | null
    childName: string
    historyId: string
    createdAt: Date
    _count: PersonalizedAudioCountAggregateOutputType | null
    _avg: PersonalizedAudioAvgAggregateOutputType | null
    _sum: PersonalizedAudioSumAggregateOutputType | null
    _min: PersonalizedAudioMinAggregateOutputType | null
    _max: PersonalizedAudioMaxAggregateOutputType | null
  }

  type GetPersonalizedAudioGroupByPayload<T extends PersonalizedAudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalizedAudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalizedAudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalizedAudioGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalizedAudioGroupByOutputType[P]>
        }
      >
    >


  export type PersonalizedAudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    duration?: boolean
    childName?: boolean
    historyId?: boolean
    createdAt?: boolean
    history?: boolean | HistoryDefaultArgs<ExtArgs>
    assignedTo?: boolean | PersonalizedAudio$assignedToArgs<ExtArgs>
    _count?: boolean | PersonalizedAudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalizedAudio"]>



  export type PersonalizedAudioSelectScalar = {
    id?: boolean
    url?: boolean
    duration?: boolean
    childName?: boolean
    historyId?: boolean
    createdAt?: boolean
  }

  export type PersonalizedAudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "duration" | "childName" | "historyId" | "createdAt", ExtArgs["result"]["personalizedAudio"]>
  export type PersonalizedAudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | HistoryDefaultArgs<ExtArgs>
    assignedTo?: boolean | PersonalizedAudio$assignedToArgs<ExtArgs>
    _count?: boolean | PersonalizedAudioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PersonalizedAudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalizedAudio"
    objects: {
      history: Prisma.$HistoryPayload<ExtArgs>
      assignedTo: Prisma.$UserStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      duration: number | null
      childName: string
      historyId: string
      createdAt: Date
    }, ExtArgs["result"]["personalizedAudio"]>
    composites: {}
  }

  type PersonalizedAudioGetPayload<S extends boolean | null | undefined | PersonalizedAudioDefaultArgs> = $Result.GetResult<Prisma.$PersonalizedAudioPayload, S>

  type PersonalizedAudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalizedAudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalizedAudioCountAggregateInputType | true
    }

  export interface PersonalizedAudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalizedAudio'], meta: { name: 'PersonalizedAudio' } }
    /**
     * Find zero or one PersonalizedAudio that matches the filter.
     * @param {PersonalizedAudioFindUniqueArgs} args - Arguments to find a PersonalizedAudio
     * @example
     * // Get one PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalizedAudioFindUniqueArgs>(args: SelectSubset<T, PersonalizedAudioFindUniqueArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalizedAudio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalizedAudioFindUniqueOrThrowArgs} args - Arguments to find a PersonalizedAudio
     * @example
     * // Get one PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalizedAudioFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalizedAudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalizedAudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioFindFirstArgs} args - Arguments to find a PersonalizedAudio
     * @example
     * // Get one PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalizedAudioFindFirstArgs>(args?: SelectSubset<T, PersonalizedAudioFindFirstArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalizedAudio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioFindFirstOrThrowArgs} args - Arguments to find a PersonalizedAudio
     * @example
     * // Get one PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalizedAudioFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalizedAudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalizedAudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalizedAudios
     * const personalizedAudios = await prisma.personalizedAudio.findMany()
     * 
     * // Get first 10 PersonalizedAudios
     * const personalizedAudios = await prisma.personalizedAudio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalizedAudioWithIdOnly = await prisma.personalizedAudio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalizedAudioFindManyArgs>(args?: SelectSubset<T, PersonalizedAudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalizedAudio.
     * @param {PersonalizedAudioCreateArgs} args - Arguments to create a PersonalizedAudio.
     * @example
     * // Create one PersonalizedAudio
     * const PersonalizedAudio = await prisma.personalizedAudio.create({
     *   data: {
     *     // ... data to create a PersonalizedAudio
     *   }
     * })
     * 
     */
    create<T extends PersonalizedAudioCreateArgs>(args: SelectSubset<T, PersonalizedAudioCreateArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalizedAudios.
     * @param {PersonalizedAudioCreateManyArgs} args - Arguments to create many PersonalizedAudios.
     * @example
     * // Create many PersonalizedAudios
     * const personalizedAudio = await prisma.personalizedAudio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalizedAudioCreateManyArgs>(args?: SelectSubset<T, PersonalizedAudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PersonalizedAudio.
     * @param {PersonalizedAudioDeleteArgs} args - Arguments to delete one PersonalizedAudio.
     * @example
     * // Delete one PersonalizedAudio
     * const PersonalizedAudio = await prisma.personalizedAudio.delete({
     *   where: {
     *     // ... filter to delete one PersonalizedAudio
     *   }
     * })
     * 
     */
    delete<T extends PersonalizedAudioDeleteArgs>(args: SelectSubset<T, PersonalizedAudioDeleteArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalizedAudio.
     * @param {PersonalizedAudioUpdateArgs} args - Arguments to update one PersonalizedAudio.
     * @example
     * // Update one PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalizedAudioUpdateArgs>(args: SelectSubset<T, PersonalizedAudioUpdateArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalizedAudios.
     * @param {PersonalizedAudioDeleteManyArgs} args - Arguments to filter PersonalizedAudios to delete.
     * @example
     * // Delete a few PersonalizedAudios
     * const { count } = await prisma.personalizedAudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalizedAudioDeleteManyArgs>(args?: SelectSubset<T, PersonalizedAudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalizedAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalizedAudios
     * const personalizedAudio = await prisma.personalizedAudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalizedAudioUpdateManyArgs>(args: SelectSubset<T, PersonalizedAudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonalizedAudio.
     * @param {PersonalizedAudioUpsertArgs} args - Arguments to update or create a PersonalizedAudio.
     * @example
     * // Update or create a PersonalizedAudio
     * const personalizedAudio = await prisma.personalizedAudio.upsert({
     *   create: {
     *     // ... data to create a PersonalizedAudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalizedAudio we want to update
     *   }
     * })
     */
    upsert<T extends PersonalizedAudioUpsertArgs>(args: SelectSubset<T, PersonalizedAudioUpsertArgs<ExtArgs>>): Prisma__PersonalizedAudioClient<$Result.GetResult<Prisma.$PersonalizedAudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalizedAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioCountArgs} args - Arguments to filter PersonalizedAudios to count.
     * @example
     * // Count the number of PersonalizedAudios
     * const count = await prisma.personalizedAudio.count({
     *   where: {
     *     // ... the filter for the PersonalizedAudios we want to count
     *   }
     * })
    **/
    count<T extends PersonalizedAudioCountArgs>(
      args?: Subset<T, PersonalizedAudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalizedAudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalizedAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalizedAudioAggregateArgs>(args: Subset<T, PersonalizedAudioAggregateArgs>): Prisma.PrismaPromise<GetPersonalizedAudioAggregateType<T>>

    /**
     * Group by PersonalizedAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizedAudioGroupByArgs} args - Group by arguments.
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
      T extends PersonalizedAudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalizedAudioGroupByArgs['orderBy'] }
        : { orderBy?: PersonalizedAudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalizedAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalizedAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalizedAudio model
   */
  readonly fields: PersonalizedAudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalizedAudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalizedAudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends HistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoryDefaultArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends PersonalizedAudio$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, PersonalizedAudio$assignedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PersonalizedAudio model
   */
  interface PersonalizedAudioFieldRefs {
    readonly id: FieldRef<"PersonalizedAudio", 'String'>
    readonly url: FieldRef<"PersonalizedAudio", 'String'>
    readonly duration: FieldRef<"PersonalizedAudio", 'Int'>
    readonly childName: FieldRef<"PersonalizedAudio", 'String'>
    readonly historyId: FieldRef<"PersonalizedAudio", 'String'>
    readonly createdAt: FieldRef<"PersonalizedAudio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalizedAudio findUnique
   */
  export type PersonalizedAudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter, which PersonalizedAudio to fetch.
     */
    where: PersonalizedAudioWhereUniqueInput
  }

  /**
   * PersonalizedAudio findUniqueOrThrow
   */
  export type PersonalizedAudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter, which PersonalizedAudio to fetch.
     */
    where: PersonalizedAudioWhereUniqueInput
  }

  /**
   * PersonalizedAudio findFirst
   */
  export type PersonalizedAudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter, which PersonalizedAudio to fetch.
     */
    where?: PersonalizedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalizedAudios to fetch.
     */
    orderBy?: PersonalizedAudioOrderByWithRelationInput | PersonalizedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalizedAudios.
     */
    cursor?: PersonalizedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalizedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalizedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalizedAudios.
     */
    distinct?: PersonalizedAudioScalarFieldEnum | PersonalizedAudioScalarFieldEnum[]
  }

  /**
   * PersonalizedAudio findFirstOrThrow
   */
  export type PersonalizedAudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter, which PersonalizedAudio to fetch.
     */
    where?: PersonalizedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalizedAudios to fetch.
     */
    orderBy?: PersonalizedAudioOrderByWithRelationInput | PersonalizedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalizedAudios.
     */
    cursor?: PersonalizedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalizedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalizedAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalizedAudios.
     */
    distinct?: PersonalizedAudioScalarFieldEnum | PersonalizedAudioScalarFieldEnum[]
  }

  /**
   * PersonalizedAudio findMany
   */
  export type PersonalizedAudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter, which PersonalizedAudios to fetch.
     */
    where?: PersonalizedAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalizedAudios to fetch.
     */
    orderBy?: PersonalizedAudioOrderByWithRelationInput | PersonalizedAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalizedAudios.
     */
    cursor?: PersonalizedAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalizedAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalizedAudios.
     */
    skip?: number
    distinct?: PersonalizedAudioScalarFieldEnum | PersonalizedAudioScalarFieldEnum[]
  }

  /**
   * PersonalizedAudio create
   */
  export type PersonalizedAudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalizedAudio.
     */
    data: XOR<PersonalizedAudioCreateInput, PersonalizedAudioUncheckedCreateInput>
  }

  /**
   * PersonalizedAudio createMany
   */
  export type PersonalizedAudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalizedAudios.
     */
    data: PersonalizedAudioCreateManyInput | PersonalizedAudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalizedAudio update
   */
  export type PersonalizedAudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalizedAudio.
     */
    data: XOR<PersonalizedAudioUpdateInput, PersonalizedAudioUncheckedUpdateInput>
    /**
     * Choose, which PersonalizedAudio to update.
     */
    where: PersonalizedAudioWhereUniqueInput
  }

  /**
   * PersonalizedAudio updateMany
   */
  export type PersonalizedAudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalizedAudios.
     */
    data: XOR<PersonalizedAudioUpdateManyMutationInput, PersonalizedAudioUncheckedUpdateManyInput>
    /**
     * Filter which PersonalizedAudios to update
     */
    where?: PersonalizedAudioWhereInput
    /**
     * Limit how many PersonalizedAudios to update.
     */
    limit?: number
  }

  /**
   * PersonalizedAudio upsert
   */
  export type PersonalizedAudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalizedAudio to update in case it exists.
     */
    where: PersonalizedAudioWhereUniqueInput
    /**
     * In case the PersonalizedAudio found by the `where` argument doesn't exist, create a new PersonalizedAudio with this data.
     */
    create: XOR<PersonalizedAudioCreateInput, PersonalizedAudioUncheckedCreateInput>
    /**
     * In case the PersonalizedAudio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalizedAudioUpdateInput, PersonalizedAudioUncheckedUpdateInput>
  }

  /**
   * PersonalizedAudio delete
   */
  export type PersonalizedAudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
    /**
     * Filter which PersonalizedAudio to delete.
     */
    where: PersonalizedAudioWhereUniqueInput
  }

  /**
   * PersonalizedAudio deleteMany
   */
  export type PersonalizedAudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalizedAudios to delete
     */
    where?: PersonalizedAudioWhereInput
    /**
     * Limit how many PersonalizedAudios to delete.
     */
    limit?: number
  }

  /**
   * PersonalizedAudio.assignedTo
   */
  export type PersonalizedAudio$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStory
     */
    omit?: UserStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoryInclude<ExtArgs> | null
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    cursor?: UserStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }

  /**
   * PersonalizedAudio without action
   */
  export type PersonalizedAudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalizedAudio
     */
    select?: PersonalizedAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalizedAudio
     */
    omit?: PersonalizedAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalizedAudioInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigMinAggregateOutputType = {
    id: string | null
    adsMasterSwitch: boolean | null
    adsBannerEnabled: boolean | null
    adsInterstitialEnabled: boolean | null
    loginMasterSwitch: boolean | null
    googleLoginEnabled: boolean | null
    facebookLoginEnabled: boolean | null
    surprisesModuleEnabled: boolean | null
    forceUpdate: boolean | null
    latestVersion: string | null
    adsLoginEnabled: boolean | null
    menuText1_es: string | null
    menuText1_en: string | null
    menuText1_pt: string | null
    menuText2_es: string | null
    menuText2_en: string | null
    menuText2_pt: string | null
    menuText3_es: string | null
    menuText3_en: string | null
    menuText3_pt: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: string | null
    adsMasterSwitch: boolean | null
    adsBannerEnabled: boolean | null
    adsInterstitialEnabled: boolean | null
    loginMasterSwitch: boolean | null
    googleLoginEnabled: boolean | null
    facebookLoginEnabled: boolean | null
    surprisesModuleEnabled: boolean | null
    forceUpdate: boolean | null
    latestVersion: string | null
    adsLoginEnabled: boolean | null
    menuText1_es: string | null
    menuText1_en: string | null
    menuText1_pt: string | null
    menuText2_es: string | null
    menuText2_en: string | null
    menuText2_pt: string | null
    menuText3_es: string | null
    menuText3_en: string | null
    menuText3_pt: string | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    adsMasterSwitch: number
    adsBannerEnabled: number
    adsInterstitialEnabled: number
    loginMasterSwitch: number
    googleLoginEnabled: number
    facebookLoginEnabled: number
    surprisesModuleEnabled: number
    forceUpdate: number
    latestVersion: number
    termsData: number
    adsLoginEnabled: number
    menuText1_es: number
    menuText1_en: number
    menuText1_pt: number
    menuText2_es: number
    menuText2_en: number
    menuText2_pt: number
    menuText3_es: number
    menuText3_en: number
    menuText3_pt: number
    _all: number
  }


  export type ConfigMinAggregateInputType = {
    id?: true
    adsMasterSwitch?: true
    adsBannerEnabled?: true
    adsInterstitialEnabled?: true
    loginMasterSwitch?: true
    googleLoginEnabled?: true
    facebookLoginEnabled?: true
    surprisesModuleEnabled?: true
    forceUpdate?: true
    latestVersion?: true
    adsLoginEnabled?: true
    menuText1_es?: true
    menuText1_en?: true
    menuText1_pt?: true
    menuText2_es?: true
    menuText2_en?: true
    menuText2_pt?: true
    menuText3_es?: true
    menuText3_en?: true
    menuText3_pt?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    adsMasterSwitch?: true
    adsBannerEnabled?: true
    adsInterstitialEnabled?: true
    loginMasterSwitch?: true
    googleLoginEnabled?: true
    facebookLoginEnabled?: true
    surprisesModuleEnabled?: true
    forceUpdate?: true
    latestVersion?: true
    adsLoginEnabled?: true
    menuText1_es?: true
    menuText1_en?: true
    menuText1_pt?: true
    menuText2_es?: true
    menuText2_en?: true
    menuText2_pt?: true
    menuText3_es?: true
    menuText3_en?: true
    menuText3_pt?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    adsMasterSwitch?: true
    adsBannerEnabled?: true
    adsInterstitialEnabled?: true
    loginMasterSwitch?: true
    googleLoginEnabled?: true
    facebookLoginEnabled?: true
    surprisesModuleEnabled?: true
    forceUpdate?: true
    latestVersion?: true
    termsData?: true
    adsLoginEnabled?: true
    menuText1_es?: true
    menuText1_en?: true
    menuText1_pt?: true
    menuText2_es?: true
    menuText2_en?: true
    menuText2_pt?: true
    menuText3_es?: true
    menuText3_en?: true
    menuText3_pt?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: string
    adsMasterSwitch: boolean
    adsBannerEnabled: boolean
    adsInterstitialEnabled: boolean
    loginMasterSwitch: boolean
    googleLoginEnabled: boolean
    facebookLoginEnabled: boolean
    surprisesModuleEnabled: boolean
    forceUpdate: boolean
    latestVersion: string
    termsData: JsonValue | null
    adsLoginEnabled: boolean
    menuText1_es: string
    menuText1_en: string
    menuText1_pt: string
    menuText2_es: string
    menuText2_en: string
    menuText2_pt: string
    menuText3_es: string
    menuText3_en: string
    menuText3_pt: string
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adsMasterSwitch?: boolean
    adsBannerEnabled?: boolean
    adsInterstitialEnabled?: boolean
    loginMasterSwitch?: boolean
    googleLoginEnabled?: boolean
    facebookLoginEnabled?: boolean
    surprisesModuleEnabled?: boolean
    forceUpdate?: boolean
    latestVersion?: boolean
    termsData?: boolean
    adsLoginEnabled?: boolean
    menuText1_es?: boolean
    menuText1_en?: boolean
    menuText1_pt?: boolean
    menuText2_es?: boolean
    menuText2_en?: boolean
    menuText2_pt?: boolean
    menuText3_es?: boolean
    menuText3_en?: boolean
    menuText3_pt?: boolean
  }, ExtArgs["result"]["config"]>



  export type ConfigSelectScalar = {
    id?: boolean
    adsMasterSwitch?: boolean
    adsBannerEnabled?: boolean
    adsInterstitialEnabled?: boolean
    loginMasterSwitch?: boolean
    googleLoginEnabled?: boolean
    facebookLoginEnabled?: boolean
    surprisesModuleEnabled?: boolean
    forceUpdate?: boolean
    latestVersion?: boolean
    termsData?: boolean
    adsLoginEnabled?: boolean
    menuText1_es?: boolean
    menuText1_en?: boolean
    menuText1_pt?: boolean
    menuText2_es?: boolean
    menuText2_en?: boolean
    menuText2_pt?: boolean
    menuText3_es?: boolean
    menuText3_en?: boolean
    menuText3_pt?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adsMasterSwitch" | "adsBannerEnabled" | "adsInterstitialEnabled" | "loginMasterSwitch" | "googleLoginEnabled" | "facebookLoginEnabled" | "surprisesModuleEnabled" | "forceUpdate" | "latestVersion" | "termsData" | "adsLoginEnabled" | "menuText1_es" | "menuText1_en" | "menuText1_pt" | "menuText2_es" | "menuText2_en" | "menuText2_pt" | "menuText3_es" | "menuText3_en" | "menuText3_pt", ExtArgs["result"]["config"]>

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adsMasterSwitch: boolean
      adsBannerEnabled: boolean
      adsInterstitialEnabled: boolean
      loginMasterSwitch: boolean
      googleLoginEnabled: boolean
      facebookLoginEnabled: boolean
      surprisesModuleEnabled: boolean
      forceUpdate: boolean
      latestVersion: string
      termsData: Prisma.JsonValue | null
      adsLoginEnabled: boolean
      menuText1_es: string
      menuText1_en: string
      menuText1_pt: string
      menuText2_es: string
      menuText2_en: string
      menuText2_pt: string
      menuText3_es: string
      menuText3_en: string
      menuText3_pt: string
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'String'>
    readonly adsMasterSwitch: FieldRef<"Config", 'Boolean'>
    readonly adsBannerEnabled: FieldRef<"Config", 'Boolean'>
    readonly adsInterstitialEnabled: FieldRef<"Config", 'Boolean'>
    readonly loginMasterSwitch: FieldRef<"Config", 'Boolean'>
    readonly googleLoginEnabled: FieldRef<"Config", 'Boolean'>
    readonly facebookLoginEnabled: FieldRef<"Config", 'Boolean'>
    readonly surprisesModuleEnabled: FieldRef<"Config", 'Boolean'>
    readonly forceUpdate: FieldRef<"Config", 'Boolean'>
    readonly latestVersion: FieldRef<"Config", 'String'>
    readonly termsData: FieldRef<"Config", 'Json'>
    readonly adsLoginEnabled: FieldRef<"Config", 'Boolean'>
    readonly menuText1_es: FieldRef<"Config", 'String'>
    readonly menuText1_en: FieldRef<"Config", 'String'>
    readonly menuText1_pt: FieldRef<"Config", 'String'>
    readonly menuText2_es: FieldRef<"Config", 'String'>
    readonly menuText2_en: FieldRef<"Config", 'String'>
    readonly menuText2_pt: FieldRef<"Config", 'String'>
    readonly menuText3_es: FieldRef<"Config", 'String'>
    readonly menuText3_en: FieldRef<"Config", 'String'>
    readonly menuText3_pt: FieldRef<"Config", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data?: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
  }


  /**
   * Model AppBanners
   */

  export type AggregateAppBanners = {
    _count: AppBannersCountAggregateOutputType | null
    _min: AppBannersMinAggregateOutputType | null
    _max: AppBannersMaxAggregateOutputType | null
  }

  export type AppBannersMinAggregateOutputType = {
    id: string | null
    isPromo: boolean | null
    title: string | null
    description: string | null
    playImage: string | null
    externalUrl: string | null
    historyId: string | null
  }

  export type AppBannersMaxAggregateOutputType = {
    id: string | null
    isPromo: boolean | null
    title: string | null
    description: string | null
    playImage: string | null
    externalUrl: string | null
    historyId: string | null
  }

  export type AppBannersCountAggregateOutputType = {
    id: number
    isPromo: number
    title: number
    description: number
    playImage: number
    externalUrl: number
    historyId: number
    _all: number
  }


  export type AppBannersMinAggregateInputType = {
    id?: true
    isPromo?: true
    title?: true
    description?: true
    playImage?: true
    externalUrl?: true
    historyId?: true
  }

  export type AppBannersMaxAggregateInputType = {
    id?: true
    isPromo?: true
    title?: true
    description?: true
    playImage?: true
    externalUrl?: true
    historyId?: true
  }

  export type AppBannersCountAggregateInputType = {
    id?: true
    isPromo?: true
    title?: true
    description?: true
    playImage?: true
    externalUrl?: true
    historyId?: true
    _all?: true
  }

  export type AppBannersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppBanners to aggregate.
     */
    where?: AppBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppBanners to fetch.
     */
    orderBy?: AppBannersOrderByWithRelationInput | AppBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppBanners
    **/
    _count?: true | AppBannersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppBannersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppBannersMaxAggregateInputType
  }

  export type GetAppBannersAggregateType<T extends AppBannersAggregateArgs> = {
        [P in keyof T & keyof AggregateAppBanners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppBanners[P]>
      : GetScalarType<T[P], AggregateAppBanners[P]>
  }




  export type AppBannersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppBannersWhereInput
    orderBy?: AppBannersOrderByWithAggregationInput | AppBannersOrderByWithAggregationInput[]
    by: AppBannersScalarFieldEnum[] | AppBannersScalarFieldEnum
    having?: AppBannersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppBannersCountAggregateInputType | true
    _min?: AppBannersMinAggregateInputType
    _max?: AppBannersMaxAggregateInputType
  }

  export type AppBannersGroupByOutputType = {
    id: string
    isPromo: boolean
    title: string
    description: string
    playImage: string | null
    externalUrl: string | null
    historyId: string | null
    _count: AppBannersCountAggregateOutputType | null
    _min: AppBannersMinAggregateOutputType | null
    _max: AppBannersMaxAggregateOutputType | null
  }

  type GetAppBannersGroupByPayload<T extends AppBannersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppBannersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppBannersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppBannersGroupByOutputType[P]>
            : GetScalarType<T[P], AppBannersGroupByOutputType[P]>
        }
      >
    >


  export type AppBannersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPromo?: boolean
    title?: boolean
    description?: boolean
    playImage?: boolean
    externalUrl?: boolean
    historyId?: boolean
    history?: boolean | AppBanners$historyArgs<ExtArgs>
  }, ExtArgs["result"]["appBanners"]>



  export type AppBannersSelectScalar = {
    id?: boolean
    isPromo?: boolean
    title?: boolean
    description?: boolean
    playImage?: boolean
    externalUrl?: boolean
    historyId?: boolean
  }

  export type AppBannersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isPromo" | "title" | "description" | "playImage" | "externalUrl" | "historyId", ExtArgs["result"]["appBanners"]>
  export type AppBannersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | AppBanners$historyArgs<ExtArgs>
  }

  export type $AppBannersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppBanners"
    objects: {
      history: Prisma.$HistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isPromo: boolean
      title: string
      description: string
      playImage: string | null
      externalUrl: string | null
      historyId: string | null
    }, ExtArgs["result"]["appBanners"]>
    composites: {}
  }

  type AppBannersGetPayload<S extends boolean | null | undefined | AppBannersDefaultArgs> = $Result.GetResult<Prisma.$AppBannersPayload, S>

  type AppBannersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppBannersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppBannersCountAggregateInputType | true
    }

  export interface AppBannersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppBanners'], meta: { name: 'AppBanners' } }
    /**
     * Find zero or one AppBanners that matches the filter.
     * @param {AppBannersFindUniqueArgs} args - Arguments to find a AppBanners
     * @example
     * // Get one AppBanners
     * const appBanners = await prisma.appBanners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppBannersFindUniqueArgs>(args: SelectSubset<T, AppBannersFindUniqueArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppBanners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppBannersFindUniqueOrThrowArgs} args - Arguments to find a AppBanners
     * @example
     * // Get one AppBanners
     * const appBanners = await prisma.appBanners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppBannersFindUniqueOrThrowArgs>(args: SelectSubset<T, AppBannersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersFindFirstArgs} args - Arguments to find a AppBanners
     * @example
     * // Get one AppBanners
     * const appBanners = await prisma.appBanners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppBannersFindFirstArgs>(args?: SelectSubset<T, AppBannersFindFirstArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppBanners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersFindFirstOrThrowArgs} args - Arguments to find a AppBanners
     * @example
     * // Get one AppBanners
     * const appBanners = await prisma.appBanners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppBannersFindFirstOrThrowArgs>(args?: SelectSubset<T, AppBannersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppBanners
     * const appBanners = await prisma.appBanners.findMany()
     * 
     * // Get first 10 AppBanners
     * const appBanners = await prisma.appBanners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appBannersWithIdOnly = await prisma.appBanners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppBannersFindManyArgs>(args?: SelectSubset<T, AppBannersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppBanners.
     * @param {AppBannersCreateArgs} args - Arguments to create a AppBanners.
     * @example
     * // Create one AppBanners
     * const AppBanners = await prisma.appBanners.create({
     *   data: {
     *     // ... data to create a AppBanners
     *   }
     * })
     * 
     */
    create<T extends AppBannersCreateArgs>(args: SelectSubset<T, AppBannersCreateArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppBanners.
     * @param {AppBannersCreateManyArgs} args - Arguments to create many AppBanners.
     * @example
     * // Create many AppBanners
     * const appBanners = await prisma.appBanners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppBannersCreateManyArgs>(args?: SelectSubset<T, AppBannersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppBanners.
     * @param {AppBannersDeleteArgs} args - Arguments to delete one AppBanners.
     * @example
     * // Delete one AppBanners
     * const AppBanners = await prisma.appBanners.delete({
     *   where: {
     *     // ... filter to delete one AppBanners
     *   }
     * })
     * 
     */
    delete<T extends AppBannersDeleteArgs>(args: SelectSubset<T, AppBannersDeleteArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppBanners.
     * @param {AppBannersUpdateArgs} args - Arguments to update one AppBanners.
     * @example
     * // Update one AppBanners
     * const appBanners = await prisma.appBanners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppBannersUpdateArgs>(args: SelectSubset<T, AppBannersUpdateArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppBanners.
     * @param {AppBannersDeleteManyArgs} args - Arguments to filter AppBanners to delete.
     * @example
     * // Delete a few AppBanners
     * const { count } = await prisma.appBanners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppBannersDeleteManyArgs>(args?: SelectSubset<T, AppBannersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppBanners
     * const appBanners = await prisma.appBanners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppBannersUpdateManyArgs>(args: SelectSubset<T, AppBannersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppBanners.
     * @param {AppBannersUpsertArgs} args - Arguments to update or create a AppBanners.
     * @example
     * // Update or create a AppBanners
     * const appBanners = await prisma.appBanners.upsert({
     *   create: {
     *     // ... data to create a AppBanners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppBanners we want to update
     *   }
     * })
     */
    upsert<T extends AppBannersUpsertArgs>(args: SelectSubset<T, AppBannersUpsertArgs<ExtArgs>>): Prisma__AppBannersClient<$Result.GetResult<Prisma.$AppBannersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersCountArgs} args - Arguments to filter AppBanners to count.
     * @example
     * // Count the number of AppBanners
     * const count = await prisma.appBanners.count({
     *   where: {
     *     // ... the filter for the AppBanners we want to count
     *   }
     * })
    **/
    count<T extends AppBannersCountArgs>(
      args?: Subset<T, AppBannersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppBannersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppBannersAggregateArgs>(args: Subset<T, AppBannersAggregateArgs>): Prisma.PrismaPromise<GetAppBannersAggregateType<T>>

    /**
     * Group by AppBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppBannersGroupByArgs} args - Group by arguments.
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
      T extends AppBannersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppBannersGroupByArgs['orderBy'] }
        : { orderBy?: AppBannersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppBannersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppBannersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppBanners model
   */
  readonly fields: AppBannersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppBanners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppBannersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends AppBanners$historyArgs<ExtArgs> = {}>(args?: Subset<T, AppBanners$historyArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppBanners model
   */
  interface AppBannersFieldRefs {
    readonly id: FieldRef<"AppBanners", 'String'>
    readonly isPromo: FieldRef<"AppBanners", 'Boolean'>
    readonly title: FieldRef<"AppBanners", 'String'>
    readonly description: FieldRef<"AppBanners", 'String'>
    readonly playImage: FieldRef<"AppBanners", 'String'>
    readonly externalUrl: FieldRef<"AppBanners", 'String'>
    readonly historyId: FieldRef<"AppBanners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppBanners findUnique
   */
  export type AppBannersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter, which AppBanners to fetch.
     */
    where: AppBannersWhereUniqueInput
  }

  /**
   * AppBanners findUniqueOrThrow
   */
  export type AppBannersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter, which AppBanners to fetch.
     */
    where: AppBannersWhereUniqueInput
  }

  /**
   * AppBanners findFirst
   */
  export type AppBannersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter, which AppBanners to fetch.
     */
    where?: AppBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppBanners to fetch.
     */
    orderBy?: AppBannersOrderByWithRelationInput | AppBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppBanners.
     */
    cursor?: AppBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppBanners.
     */
    distinct?: AppBannersScalarFieldEnum | AppBannersScalarFieldEnum[]
  }

  /**
   * AppBanners findFirstOrThrow
   */
  export type AppBannersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter, which AppBanners to fetch.
     */
    where?: AppBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppBanners to fetch.
     */
    orderBy?: AppBannersOrderByWithRelationInput | AppBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppBanners.
     */
    cursor?: AppBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppBanners.
     */
    distinct?: AppBannersScalarFieldEnum | AppBannersScalarFieldEnum[]
  }

  /**
   * AppBanners findMany
   */
  export type AppBannersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter, which AppBanners to fetch.
     */
    where?: AppBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppBanners to fetch.
     */
    orderBy?: AppBannersOrderByWithRelationInput | AppBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppBanners.
     */
    cursor?: AppBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppBanners.
     */
    skip?: number
    distinct?: AppBannersScalarFieldEnum | AppBannersScalarFieldEnum[]
  }

  /**
   * AppBanners create
   */
  export type AppBannersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * The data needed to create a AppBanners.
     */
    data: XOR<AppBannersCreateInput, AppBannersUncheckedCreateInput>
  }

  /**
   * AppBanners createMany
   */
  export type AppBannersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppBanners.
     */
    data: AppBannersCreateManyInput | AppBannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppBanners update
   */
  export type AppBannersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * The data needed to update a AppBanners.
     */
    data: XOR<AppBannersUpdateInput, AppBannersUncheckedUpdateInput>
    /**
     * Choose, which AppBanners to update.
     */
    where: AppBannersWhereUniqueInput
  }

  /**
   * AppBanners updateMany
   */
  export type AppBannersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppBanners.
     */
    data: XOR<AppBannersUpdateManyMutationInput, AppBannersUncheckedUpdateManyInput>
    /**
     * Filter which AppBanners to update
     */
    where?: AppBannersWhereInput
    /**
     * Limit how many AppBanners to update.
     */
    limit?: number
  }

  /**
   * AppBanners upsert
   */
  export type AppBannersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * The filter to search for the AppBanners to update in case it exists.
     */
    where: AppBannersWhereUniqueInput
    /**
     * In case the AppBanners found by the `where` argument doesn't exist, create a new AppBanners with this data.
     */
    create: XOR<AppBannersCreateInput, AppBannersUncheckedCreateInput>
    /**
     * In case the AppBanners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppBannersUpdateInput, AppBannersUncheckedUpdateInput>
  }

  /**
   * AppBanners delete
   */
  export type AppBannersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
    /**
     * Filter which AppBanners to delete.
     */
    where: AppBannersWhereUniqueInput
  }

  /**
   * AppBanners deleteMany
   */
  export type AppBannersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppBanners to delete
     */
    where?: AppBannersWhereInput
    /**
     * Limit how many AppBanners to delete.
     */
    limit?: number
  }

  /**
   * AppBanners.history
   */
  export type AppBanners$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
  }

  /**
   * AppBanners without action
   */
  export type AppBannersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppBanners
     */
    select?: AppBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppBanners
     */
    omit?: AppBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppBannersInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    email: 'email',
    googleId: 'googleId',
    profileImage: 'profileImage',
    pushToken: 'pushToken',
    isPremium: 'isPremium',
    premiumEnd: 'premiumEnd',
    subscriptionId: 'subscriptionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    purchaseToken: 'purchaseToken',
    orderId: 'orderId',
    productId: 'productId',
    interval: 'interval',
    isActive: 'isActive',
    autoRenewing: 'autoRenewing',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    name_es: 'name_es',
    name_en: 'name_en',
    name_pt: 'name_pt',
    description_es: 'description_es',
    description_en: 'description_en',
    description_pt: 'description_pt',
    cover: 'cover',
    poster: 'poster',
    youtube: 'youtube',
    type: 'type',
    song: 'song',
    active: 'active',
    isPremium: 'isPremium',
    googleProductId: 'googleProductId',
    dominant: 'dominant',
    average: 'average',
    vibrant: 'vibrant',
    darkVibrant: 'darkVibrant',
    lightVibrant: 'lightVibrant',
    darkMuted: 'darkMuted',
    lightMuted: 'lightMuted',
    muted: 'muted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const UserStoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    historyId: 'historyId',
    requestedName: 'requestedName',
    audioId: 'audioId',
    purchaseToken: 'purchaseToken',
    googleOrderId: 'googleOrderId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStoryScalarFieldEnum = (typeof UserStoryScalarFieldEnum)[keyof typeof UserStoryScalarFieldEnum]


  export const PersonalizedAudioScalarFieldEnum: {
    id: 'id',
    url: 'url',
    duration: 'duration',
    childName: 'childName',
    historyId: 'historyId',
    createdAt: 'createdAt'
  };

  export type PersonalizedAudioScalarFieldEnum = (typeof PersonalizedAudioScalarFieldEnum)[keyof typeof PersonalizedAudioScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    adsMasterSwitch: 'adsMasterSwitch',
    adsBannerEnabled: 'adsBannerEnabled',
    adsInterstitialEnabled: 'adsInterstitialEnabled',
    loginMasterSwitch: 'loginMasterSwitch',
    googleLoginEnabled: 'googleLoginEnabled',
    facebookLoginEnabled: 'facebookLoginEnabled',
    surprisesModuleEnabled: 'surprisesModuleEnabled',
    forceUpdate: 'forceUpdate',
    latestVersion: 'latestVersion',
    termsData: 'termsData',
    adsLoginEnabled: 'adsLoginEnabled',
    menuText1_es: 'menuText1_es',
    menuText1_en: 'menuText1_en',
    menuText1_pt: 'menuText1_pt',
    menuText2_es: 'menuText2_es',
    menuText2_en: 'menuText2_en',
    menuText2_pt: 'menuText2_pt',
    menuText3_es: 'menuText3_es',
    menuText3_en: 'menuText3_en',
    menuText3_pt: 'menuText3_pt'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const AppBannersScalarFieldEnum: {
    id: 'id',
    isPromo: 'isPromo',
    title: 'title',
    description: 'description',
    playImage: 'playImage',
    externalUrl: 'externalUrl',
    historyId: 'historyId'
  };

  export type AppBannersScalarFieldEnum = (typeof AppBannersScalarFieldEnum)[keyof typeof AppBannersScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    googleId: 'googleId',
    profileImage: 'profileImage',
    pushToken: 'pushToken',
    subscriptionId: 'subscriptionId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    purchaseToken: 'purchaseToken',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const HistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name_es: 'name_es',
    name_en: 'name_en',
    name_pt: 'name_pt',
    description_es: 'description_es',
    description_en: 'description_en',
    description_pt: 'description_pt',
    cover: 'cover',
    poster: 'poster',
    youtube: 'youtube',
    song: 'song',
    googleProductId: 'googleProductId',
    dominant: 'dominant',
    average: 'average',
    vibrant: 'vibrant',
    darkVibrant: 'darkVibrant',
    lightVibrant: 'lightVibrant',
    darkMuted: 'darkMuted',
    lightMuted: 'lightMuted',
    muted: 'muted'
  };

  export type HistoryOrderByRelevanceFieldEnum = (typeof HistoryOrderByRelevanceFieldEnum)[keyof typeof HistoryOrderByRelevanceFieldEnum]


  export const UserStoryOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    historyId: 'historyId',
    requestedName: 'requestedName',
    audioId: 'audioId',
    purchaseToken: 'purchaseToken',
    googleOrderId: 'googleOrderId'
  };

  export type UserStoryOrderByRelevanceFieldEnum = (typeof UserStoryOrderByRelevanceFieldEnum)[keyof typeof UserStoryOrderByRelevanceFieldEnum]


  export const PersonalizedAudioOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    childName: 'childName',
    historyId: 'historyId'
  };

  export type PersonalizedAudioOrderByRelevanceFieldEnum = (typeof PersonalizedAudioOrderByRelevanceFieldEnum)[keyof typeof PersonalizedAudioOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ConfigOrderByRelevanceFieldEnum: {
    id: 'id',
    latestVersion: 'latestVersion',
    menuText1_es: 'menuText1_es',
    menuText1_en: 'menuText1_en',
    menuText1_pt: 'menuText1_pt',
    menuText2_es: 'menuText2_es',
    menuText2_en: 'menuText2_en',
    menuText2_pt: 'menuText2_pt',
    menuText3_es: 'menuText3_es',
    menuText3_en: 'menuText3_en',
    menuText3_pt: 'menuText3_pt'
  };

  export type ConfigOrderByRelevanceFieldEnum = (typeof ConfigOrderByRelevanceFieldEnum)[keyof typeof ConfigOrderByRelevanceFieldEnum]


  export const AppBannersOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    playImage: 'playImage',
    externalUrl: 'externalUrl',
    historyId: 'historyId'
  };

  export type AppBannersOrderByRelevanceFieldEnum = (typeof AppBannersOrderByRelevanceFieldEnum)[keyof typeof AppBannersOrderByRelevanceFieldEnum]


  export const AdminUserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SubscriptionPlatform'
   */
  export type EnumSubscriptionPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlatform'>
    


  /**
   * Reference to a field of type 'SubscriptionInterval'
   */
  export type EnumSubscriptionIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionInterval'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    pushToken?: StringNullableFilter<"User"> | string | null
    isPremium?: BoolFilter<"User"> | boolean
    premiumEnd?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    stories?: UserStoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    googleId?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    pushToken?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premiumEnd?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    stories?: UserStoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    pushToken?: StringNullableFilter<"User"> | string | null
    isPremium?: BoolFilter<"User"> | boolean
    premiumEnd?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    stories?: UserStoryListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    googleId?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    pushToken?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premiumEnd?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    pushToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    premiumEnd?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    platform?: EnumSubscriptionPlatformFilter<"Subscription"> | $Enums.SubscriptionPlatform
    purchaseToken?: StringFilter<"Subscription"> | string
    orderId?: StringNullableFilter<"Subscription"> | string | null
    productId?: StringFilter<"Subscription"> | string
    interval?: EnumSubscriptionIntervalNullableFilter<"Subscription"> | $Enums.SubscriptionInterval | null
    isActive?: BoolFilter<"Subscription"> | boolean
    autoRenewing?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    users?: UserListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    purchaseToken?: SortOrder
    orderId?: SortOrderInput | SortOrder
    productId?: SortOrder
    interval?: SortOrderInput | SortOrder
    isActive?: SortOrder
    autoRenewing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    platform?: EnumSubscriptionPlatformFilter<"Subscription"> | $Enums.SubscriptionPlatform
    purchaseToken?: StringFilter<"Subscription"> | string
    orderId?: StringNullableFilter<"Subscription"> | string | null
    productId?: StringFilter<"Subscription"> | string
    interval?: EnumSubscriptionIntervalNullableFilter<"Subscription"> | $Enums.SubscriptionInterval | null
    isActive?: BoolFilter<"Subscription"> | boolean
    autoRenewing?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    purchaseToken?: SortOrder
    orderId?: SortOrderInput | SortOrder
    productId?: SortOrder
    interval?: SortOrderInput | SortOrder
    isActive?: SortOrder
    autoRenewing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    platform?: EnumSubscriptionPlatformWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlatform
    purchaseToken?: StringWithAggregatesFilter<"Subscription"> | string
    orderId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    productId?: StringWithAggregatesFilter<"Subscription"> | string
    interval?: EnumSubscriptionIntervalNullableWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionInterval | null
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
    autoRenewing?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: StringFilter<"History"> | string
    name_es?: StringFilter<"History"> | string
    name_en?: StringFilter<"History"> | string
    name_pt?: StringNullableFilter<"History"> | string | null
    description_es?: StringFilter<"History"> | string
    description_en?: StringFilter<"History"> | string
    description_pt?: StringNullableFilter<"History"> | string | null
    cover?: StringFilter<"History"> | string
    poster?: StringNullableFilter<"History"> | string | null
    youtube?: StringNullableFilter<"History"> | string | null
    type?: IntFilter<"History"> | number
    song?: StringNullableFilter<"History"> | string | null
    active?: BoolFilter<"History"> | boolean
    isPremium?: BoolFilter<"History"> | boolean
    googleProductId?: StringNullableFilter<"History"> | string | null
    dominant?: StringNullableFilter<"History"> | string | null
    average?: StringNullableFilter<"History"> | string | null
    vibrant?: StringNullableFilter<"History"> | string | null
    darkVibrant?: StringNullableFilter<"History"> | string | null
    lightVibrant?: StringNullableFilter<"History"> | string | null
    darkMuted?: StringNullableFilter<"History"> | string | null
    lightMuted?: StringNullableFilter<"History"> | string | null
    muted?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    updatedAt?: DateTimeFilter<"History"> | Date | string
    banners?: AppBannersListRelationFilter
    purchases?: UserStoryListRelationFilter
    availableAudios?: PersonalizedAudioListRelationFilter
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    name_es?: SortOrder
    name_en?: SortOrder
    name_pt?: SortOrderInput | SortOrder
    description_es?: SortOrder
    description_en?: SortOrder
    description_pt?: SortOrderInput | SortOrder
    cover?: SortOrder
    poster?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    type?: SortOrder
    song?: SortOrderInput | SortOrder
    active?: SortOrder
    isPremium?: SortOrder
    googleProductId?: SortOrderInput | SortOrder
    dominant?: SortOrderInput | SortOrder
    average?: SortOrderInput | SortOrder
    vibrant?: SortOrderInput | SortOrder
    darkVibrant?: SortOrderInput | SortOrder
    lightVibrant?: SortOrderInput | SortOrder
    darkMuted?: SortOrderInput | SortOrder
    lightMuted?: SortOrderInput | SortOrder
    muted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    banners?: AppBannersOrderByRelationAggregateInput
    purchases?: UserStoryOrderByRelationAggregateInput
    availableAudios?: PersonalizedAudioOrderByRelationAggregateInput
    _relevance?: HistoryOrderByRelevanceInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    name_es?: StringFilter<"History"> | string
    name_en?: StringFilter<"History"> | string
    name_pt?: StringNullableFilter<"History"> | string | null
    description_es?: StringFilter<"History"> | string
    description_en?: StringFilter<"History"> | string
    description_pt?: StringNullableFilter<"History"> | string | null
    cover?: StringFilter<"History"> | string
    poster?: StringNullableFilter<"History"> | string | null
    youtube?: StringNullableFilter<"History"> | string | null
    type?: IntFilter<"History"> | number
    song?: StringNullableFilter<"History"> | string | null
    active?: BoolFilter<"History"> | boolean
    isPremium?: BoolFilter<"History"> | boolean
    googleProductId?: StringNullableFilter<"History"> | string | null
    dominant?: StringNullableFilter<"History"> | string | null
    average?: StringNullableFilter<"History"> | string | null
    vibrant?: StringNullableFilter<"History"> | string | null
    darkVibrant?: StringNullableFilter<"History"> | string | null
    lightVibrant?: StringNullableFilter<"History"> | string | null
    darkMuted?: StringNullableFilter<"History"> | string | null
    lightMuted?: StringNullableFilter<"History"> | string | null
    muted?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    updatedAt?: DateTimeFilter<"History"> | Date | string
    banners?: AppBannersListRelationFilter
    purchases?: UserStoryListRelationFilter
    availableAudios?: PersonalizedAudioListRelationFilter
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    name_es?: SortOrder
    name_en?: SortOrder
    name_pt?: SortOrderInput | SortOrder
    description_es?: SortOrder
    description_en?: SortOrder
    description_pt?: SortOrderInput | SortOrder
    cover?: SortOrder
    poster?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    type?: SortOrder
    song?: SortOrderInput | SortOrder
    active?: SortOrder
    isPremium?: SortOrder
    googleProductId?: SortOrderInput | SortOrder
    dominant?: SortOrderInput | SortOrder
    average?: SortOrderInput | SortOrder
    vibrant?: SortOrderInput | SortOrder
    darkVibrant?: SortOrderInput | SortOrder
    lightVibrant?: SortOrderInput | SortOrder
    darkMuted?: SortOrderInput | SortOrder
    lightMuted?: SortOrderInput | SortOrder
    muted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"History"> | string
    name_es?: StringWithAggregatesFilter<"History"> | string
    name_en?: StringWithAggregatesFilter<"History"> | string
    name_pt?: StringNullableWithAggregatesFilter<"History"> | string | null
    description_es?: StringWithAggregatesFilter<"History"> | string
    description_en?: StringWithAggregatesFilter<"History"> | string
    description_pt?: StringNullableWithAggregatesFilter<"History"> | string | null
    cover?: StringWithAggregatesFilter<"History"> | string
    poster?: StringNullableWithAggregatesFilter<"History"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"History"> | string | null
    type?: IntWithAggregatesFilter<"History"> | number
    song?: StringNullableWithAggregatesFilter<"History"> | string | null
    active?: BoolWithAggregatesFilter<"History"> | boolean
    isPremium?: BoolWithAggregatesFilter<"History"> | boolean
    googleProductId?: StringNullableWithAggregatesFilter<"History"> | string | null
    dominant?: StringNullableWithAggregatesFilter<"History"> | string | null
    average?: StringNullableWithAggregatesFilter<"History"> | string | null
    vibrant?: StringNullableWithAggregatesFilter<"History"> | string | null
    darkVibrant?: StringNullableWithAggregatesFilter<"History"> | string | null
    lightVibrant?: StringNullableWithAggregatesFilter<"History"> | string | null
    darkMuted?: StringNullableWithAggregatesFilter<"History"> | string | null
    lightMuted?: StringNullableWithAggregatesFilter<"History"> | string | null
    muted?: StringNullableWithAggregatesFilter<"History"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
  }

  export type UserStoryWhereInput = {
    AND?: UserStoryWhereInput | UserStoryWhereInput[]
    OR?: UserStoryWhereInput[]
    NOT?: UserStoryWhereInput | UserStoryWhereInput[]
    id?: StringFilter<"UserStory"> | string
    userId?: StringFilter<"UserStory"> | string
    historyId?: StringFilter<"UserStory"> | string
    requestedName?: StringFilter<"UserStory"> | string
    audioId?: StringNullableFilter<"UserStory"> | string | null
    purchaseToken?: StringNullableFilter<"UserStory"> | string | null
    googleOrderId?: StringNullableFilter<"UserStory"> | string | null
    status?: EnumAssignmentStatusFilter<"UserStory"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    updatedAt?: DateTimeFilter<"UserStory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: XOR<HistoryScalarRelationFilter, HistoryWhereInput>
    audio?: XOR<PersonalizedAudioNullableScalarRelationFilter, PersonalizedAudioWhereInput> | null
  }

  export type UserStoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    historyId?: SortOrder
    requestedName?: SortOrder
    audioId?: SortOrderInput | SortOrder
    purchaseToken?: SortOrderInput | SortOrder
    googleOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    history?: HistoryOrderByWithRelationInput
    audio?: PersonalizedAudioOrderByWithRelationInput
    _relevance?: UserStoryOrderByRelevanceInput
  }

  export type UserStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserStoryWhereInput | UserStoryWhereInput[]
    OR?: UserStoryWhereInput[]
    NOT?: UserStoryWhereInput | UserStoryWhereInput[]
    userId?: StringFilter<"UserStory"> | string
    historyId?: StringFilter<"UserStory"> | string
    requestedName?: StringFilter<"UserStory"> | string
    audioId?: StringNullableFilter<"UserStory"> | string | null
    purchaseToken?: StringNullableFilter<"UserStory"> | string | null
    googleOrderId?: StringNullableFilter<"UserStory"> | string | null
    status?: EnumAssignmentStatusFilter<"UserStory"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    updatedAt?: DateTimeFilter<"UserStory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: XOR<HistoryScalarRelationFilter, HistoryWhereInput>
    audio?: XOR<PersonalizedAudioNullableScalarRelationFilter, PersonalizedAudioWhereInput> | null
  }, "id">

  export type UserStoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    historyId?: SortOrder
    requestedName?: SortOrder
    audioId?: SortOrderInput | SortOrder
    purchaseToken?: SortOrderInput | SortOrder
    googleOrderId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStoryCountOrderByAggregateInput
    _max?: UserStoryMaxOrderByAggregateInput
    _min?: UserStoryMinOrderByAggregateInput
  }

  export type UserStoryScalarWhereWithAggregatesInput = {
    AND?: UserStoryScalarWhereWithAggregatesInput | UserStoryScalarWhereWithAggregatesInput[]
    OR?: UserStoryScalarWhereWithAggregatesInput[]
    NOT?: UserStoryScalarWhereWithAggregatesInput | UserStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStory"> | string
    userId?: StringWithAggregatesFilter<"UserStory"> | string
    historyId?: StringWithAggregatesFilter<"UserStory"> | string
    requestedName?: StringWithAggregatesFilter<"UserStory"> | string
    audioId?: StringNullableWithAggregatesFilter<"UserStory"> | string | null
    purchaseToken?: StringNullableWithAggregatesFilter<"UserStory"> | string | null
    googleOrderId?: StringNullableWithAggregatesFilter<"UserStory"> | string | null
    status?: EnumAssignmentStatusWithAggregatesFilter<"UserStory"> | $Enums.AssignmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserStory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStory"> | Date | string
  }

  export type PersonalizedAudioWhereInput = {
    AND?: PersonalizedAudioWhereInput | PersonalizedAudioWhereInput[]
    OR?: PersonalizedAudioWhereInput[]
    NOT?: PersonalizedAudioWhereInput | PersonalizedAudioWhereInput[]
    id?: StringFilter<"PersonalizedAudio"> | string
    url?: StringFilter<"PersonalizedAudio"> | string
    duration?: IntNullableFilter<"PersonalizedAudio"> | number | null
    childName?: StringFilter<"PersonalizedAudio"> | string
    historyId?: StringFilter<"PersonalizedAudio"> | string
    createdAt?: DateTimeFilter<"PersonalizedAudio"> | Date | string
    history?: XOR<HistoryScalarRelationFilter, HistoryWhereInput>
    assignedTo?: UserStoryListRelationFilter
  }

  export type PersonalizedAudioOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    duration?: SortOrderInput | SortOrder
    childName?: SortOrder
    historyId?: SortOrder
    createdAt?: SortOrder
    history?: HistoryOrderByWithRelationInput
    assignedTo?: UserStoryOrderByRelationAggregateInput
    _relevance?: PersonalizedAudioOrderByRelevanceInput
  }

  export type PersonalizedAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    historyId_childName?: PersonalizedAudioHistoryIdChildNameCompoundUniqueInput
    AND?: PersonalizedAudioWhereInput | PersonalizedAudioWhereInput[]
    OR?: PersonalizedAudioWhereInput[]
    NOT?: PersonalizedAudioWhereInput | PersonalizedAudioWhereInput[]
    url?: StringFilter<"PersonalizedAudio"> | string
    duration?: IntNullableFilter<"PersonalizedAudio"> | number | null
    childName?: StringFilter<"PersonalizedAudio"> | string
    historyId?: StringFilter<"PersonalizedAudio"> | string
    createdAt?: DateTimeFilter<"PersonalizedAudio"> | Date | string
    history?: XOR<HistoryScalarRelationFilter, HistoryWhereInput>
    assignedTo?: UserStoryListRelationFilter
  }, "id" | "historyId_childName">

  export type PersonalizedAudioOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    duration?: SortOrderInput | SortOrder
    childName?: SortOrder
    historyId?: SortOrder
    createdAt?: SortOrder
    _count?: PersonalizedAudioCountOrderByAggregateInput
    _avg?: PersonalizedAudioAvgOrderByAggregateInput
    _max?: PersonalizedAudioMaxOrderByAggregateInput
    _min?: PersonalizedAudioMinOrderByAggregateInput
    _sum?: PersonalizedAudioSumOrderByAggregateInput
  }

  export type PersonalizedAudioScalarWhereWithAggregatesInput = {
    AND?: PersonalizedAudioScalarWhereWithAggregatesInput | PersonalizedAudioScalarWhereWithAggregatesInput[]
    OR?: PersonalizedAudioScalarWhereWithAggregatesInput[]
    NOT?: PersonalizedAudioScalarWhereWithAggregatesInput | PersonalizedAudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalizedAudio"> | string
    url?: StringWithAggregatesFilter<"PersonalizedAudio"> | string
    duration?: IntNullableWithAggregatesFilter<"PersonalizedAudio"> | number | null
    childName?: StringWithAggregatesFilter<"PersonalizedAudio"> | string
    historyId?: StringWithAggregatesFilter<"PersonalizedAudio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalizedAudio"> | Date | string
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: StringFilter<"Config"> | string
    adsMasterSwitch?: BoolFilter<"Config"> | boolean
    adsBannerEnabled?: BoolFilter<"Config"> | boolean
    adsInterstitialEnabled?: BoolFilter<"Config"> | boolean
    loginMasterSwitch?: BoolFilter<"Config"> | boolean
    googleLoginEnabled?: BoolFilter<"Config"> | boolean
    facebookLoginEnabled?: BoolFilter<"Config"> | boolean
    surprisesModuleEnabled?: BoolFilter<"Config"> | boolean
    forceUpdate?: BoolFilter<"Config"> | boolean
    latestVersion?: StringFilter<"Config"> | string
    termsData?: JsonNullableFilter<"Config">
    adsLoginEnabled?: BoolFilter<"Config"> | boolean
    menuText1_es?: StringFilter<"Config"> | string
    menuText1_en?: StringFilter<"Config"> | string
    menuText1_pt?: StringFilter<"Config"> | string
    menuText2_es?: StringFilter<"Config"> | string
    menuText2_en?: StringFilter<"Config"> | string
    menuText2_pt?: StringFilter<"Config"> | string
    menuText3_es?: StringFilter<"Config"> | string
    menuText3_en?: StringFilter<"Config"> | string
    menuText3_pt?: StringFilter<"Config"> | string
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    adsMasterSwitch?: SortOrder
    adsBannerEnabled?: SortOrder
    adsInterstitialEnabled?: SortOrder
    loginMasterSwitch?: SortOrder
    googleLoginEnabled?: SortOrder
    facebookLoginEnabled?: SortOrder
    surprisesModuleEnabled?: SortOrder
    forceUpdate?: SortOrder
    latestVersion?: SortOrder
    termsData?: SortOrderInput | SortOrder
    adsLoginEnabled?: SortOrder
    menuText1_es?: SortOrder
    menuText1_en?: SortOrder
    menuText1_pt?: SortOrder
    menuText2_es?: SortOrder
    menuText2_en?: SortOrder
    menuText2_pt?: SortOrder
    menuText3_es?: SortOrder
    menuText3_en?: SortOrder
    menuText3_pt?: SortOrder
    _relevance?: ConfigOrderByRelevanceInput
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    adsMasterSwitch?: BoolFilter<"Config"> | boolean
    adsBannerEnabled?: BoolFilter<"Config"> | boolean
    adsInterstitialEnabled?: BoolFilter<"Config"> | boolean
    loginMasterSwitch?: BoolFilter<"Config"> | boolean
    googleLoginEnabled?: BoolFilter<"Config"> | boolean
    facebookLoginEnabled?: BoolFilter<"Config"> | boolean
    surprisesModuleEnabled?: BoolFilter<"Config"> | boolean
    forceUpdate?: BoolFilter<"Config"> | boolean
    latestVersion?: StringFilter<"Config"> | string
    termsData?: JsonNullableFilter<"Config">
    adsLoginEnabled?: BoolFilter<"Config"> | boolean
    menuText1_es?: StringFilter<"Config"> | string
    menuText1_en?: StringFilter<"Config"> | string
    menuText1_pt?: StringFilter<"Config"> | string
    menuText2_es?: StringFilter<"Config"> | string
    menuText2_en?: StringFilter<"Config"> | string
    menuText2_pt?: StringFilter<"Config"> | string
    menuText3_es?: StringFilter<"Config"> | string
    menuText3_en?: StringFilter<"Config"> | string
    menuText3_pt?: StringFilter<"Config"> | string
  }, "id">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    adsMasterSwitch?: SortOrder
    adsBannerEnabled?: SortOrder
    adsInterstitialEnabled?: SortOrder
    loginMasterSwitch?: SortOrder
    googleLoginEnabled?: SortOrder
    facebookLoginEnabled?: SortOrder
    surprisesModuleEnabled?: SortOrder
    forceUpdate?: SortOrder
    latestVersion?: SortOrder
    termsData?: SortOrderInput | SortOrder
    adsLoginEnabled?: SortOrder
    menuText1_es?: SortOrder
    menuText1_en?: SortOrder
    menuText1_pt?: SortOrder
    menuText2_es?: SortOrder
    menuText2_en?: SortOrder
    menuText2_pt?: SortOrder
    menuText3_es?: SortOrder
    menuText3_en?: SortOrder
    menuText3_pt?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Config"> | string
    adsMasterSwitch?: BoolWithAggregatesFilter<"Config"> | boolean
    adsBannerEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    adsInterstitialEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    loginMasterSwitch?: BoolWithAggregatesFilter<"Config"> | boolean
    googleLoginEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    facebookLoginEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    surprisesModuleEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    forceUpdate?: BoolWithAggregatesFilter<"Config"> | boolean
    latestVersion?: StringWithAggregatesFilter<"Config"> | string
    termsData?: JsonNullableWithAggregatesFilter<"Config">
    adsLoginEnabled?: BoolWithAggregatesFilter<"Config"> | boolean
    menuText1_es?: StringWithAggregatesFilter<"Config"> | string
    menuText1_en?: StringWithAggregatesFilter<"Config"> | string
    menuText1_pt?: StringWithAggregatesFilter<"Config"> | string
    menuText2_es?: StringWithAggregatesFilter<"Config"> | string
    menuText2_en?: StringWithAggregatesFilter<"Config"> | string
    menuText2_pt?: StringWithAggregatesFilter<"Config"> | string
    menuText3_es?: StringWithAggregatesFilter<"Config"> | string
    menuText3_en?: StringWithAggregatesFilter<"Config"> | string
    menuText3_pt?: StringWithAggregatesFilter<"Config"> | string
  }

  export type AppBannersWhereInput = {
    AND?: AppBannersWhereInput | AppBannersWhereInput[]
    OR?: AppBannersWhereInput[]
    NOT?: AppBannersWhereInput | AppBannersWhereInput[]
    id?: StringFilter<"AppBanners"> | string
    isPromo?: BoolFilter<"AppBanners"> | boolean
    title?: StringFilter<"AppBanners"> | string
    description?: StringFilter<"AppBanners"> | string
    playImage?: StringNullableFilter<"AppBanners"> | string | null
    externalUrl?: StringNullableFilter<"AppBanners"> | string | null
    historyId?: StringNullableFilter<"AppBanners"> | string | null
    history?: XOR<HistoryNullableScalarRelationFilter, HistoryWhereInput> | null
  }

  export type AppBannersOrderByWithRelationInput = {
    id?: SortOrder
    isPromo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    playImage?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    historyId?: SortOrderInput | SortOrder
    history?: HistoryOrderByWithRelationInput
    _relevance?: AppBannersOrderByRelevanceInput
  }

  export type AppBannersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppBannersWhereInput | AppBannersWhereInput[]
    OR?: AppBannersWhereInput[]
    NOT?: AppBannersWhereInput | AppBannersWhereInput[]
    isPromo?: BoolFilter<"AppBanners"> | boolean
    title?: StringFilter<"AppBanners"> | string
    description?: StringFilter<"AppBanners"> | string
    playImage?: StringNullableFilter<"AppBanners"> | string | null
    externalUrl?: StringNullableFilter<"AppBanners"> | string | null
    historyId?: StringNullableFilter<"AppBanners"> | string | null
    history?: XOR<HistoryNullableScalarRelationFilter, HistoryWhereInput> | null
  }, "id">

  export type AppBannersOrderByWithAggregationInput = {
    id?: SortOrder
    isPromo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    playImage?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    historyId?: SortOrderInput | SortOrder
    _count?: AppBannersCountOrderByAggregateInput
    _max?: AppBannersMaxOrderByAggregateInput
    _min?: AppBannersMinOrderByAggregateInput
  }

  export type AppBannersScalarWhereWithAggregatesInput = {
    AND?: AppBannersScalarWhereWithAggregatesInput | AppBannersScalarWhereWithAggregatesInput[]
    OR?: AppBannersScalarWhereWithAggregatesInput[]
    NOT?: AppBannersScalarWhereWithAggregatesInput | AppBannersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppBanners"> | string
    isPromo?: BoolWithAggregatesFilter<"AppBanners"> | boolean
    title?: StringWithAggregatesFilter<"AppBanners"> | string
    description?: StringWithAggregatesFilter<"AppBanners"> | string
    playImage?: StringNullableWithAggregatesFilter<"AppBanners"> | string | null
    externalUrl?: StringNullableWithAggregatesFilter<"AppBanners"> | string | null
    historyId?: StringNullableWithAggregatesFilter<"AppBanners"> | string | null
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUsersInput
    stories?: UserStoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    subscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: UserStoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUsersNestedInput
    stories?: UserStoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: UserStoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    subscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    platform?: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId?: string | null
    productId: string
    interval?: $Enums.SubscriptionInterval | null
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    platform?: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId?: string | null
    productId: string
    interval?: $Enums.SubscriptionInterval | null
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    platform?: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId?: string | null
    productId: string
    interval?: $Enums.SubscriptionInterval | null
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersCreateNestedManyWithoutHistoryInput
    purchases?: UserStoryCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioCreateNestedManyWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersUncheckedCreateNestedManyWithoutHistoryInput
    purchases?: UserStoryUncheckedCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUpdateManyWithoutHistoryNestedInput
    purchases?: UserStoryUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUpdateManyWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUncheckedUpdateManyWithoutHistoryNestedInput
    purchases?: UserStoryUncheckedUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type HistoryCreateManyInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryCreateInput = {
    id?: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
    history: HistoryCreateNestedOneWithoutPurchasesInput
    audio?: PersonalizedAudioCreateNestedOneWithoutAssignedToInput
  }

  export type UserStoryUncheckedCreateInput = {
    id?: string
    userId: string
    historyId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
    history?: HistoryUpdateOneRequiredWithoutPurchasesNestedInput
    audio?: PersonalizedAudioUpdateOneWithoutAssignedToNestedInput
  }

  export type UserStoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryCreateManyInput = {
    id?: string
    userId: string
    historyId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalizedAudioCreateInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    createdAt?: Date | string
    history: HistoryCreateNestedOneWithoutAvailableAudiosInput
    assignedTo?: UserStoryCreateNestedManyWithoutAudioInput
  }

  export type PersonalizedAudioUncheckedCreateInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    historyId: string
    createdAt?: Date | string
    assignedTo?: UserStoryUncheckedCreateNestedManyWithoutAudioInput
  }

  export type PersonalizedAudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoryUpdateOneRequiredWithoutAvailableAudiosNestedInput
    assignedTo?: UserStoryUpdateManyWithoutAudioNestedInput
  }

  export type PersonalizedAudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserStoryUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type PersonalizedAudioCreateManyInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    historyId: string
    createdAt?: Date | string
  }

  export type PersonalizedAudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalizedAudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateInput = {
    id?: string
    adsMasterSwitch?: boolean
    adsBannerEnabled?: boolean
    adsInterstitialEnabled?: boolean
    loginMasterSwitch?: boolean
    googleLoginEnabled?: boolean
    facebookLoginEnabled?: boolean
    surprisesModuleEnabled?: boolean
    forceUpdate?: boolean
    latestVersion?: string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: boolean
    menuText1_es?: string
    menuText1_en?: string
    menuText1_pt?: string
    menuText2_es?: string
    menuText2_en?: string
    menuText2_pt?: string
    menuText3_es?: string
    menuText3_en?: string
    menuText3_pt?: string
  }

  export type ConfigUncheckedCreateInput = {
    id?: string
    adsMasterSwitch?: boolean
    adsBannerEnabled?: boolean
    adsInterstitialEnabled?: boolean
    loginMasterSwitch?: boolean
    googleLoginEnabled?: boolean
    facebookLoginEnabled?: boolean
    surprisesModuleEnabled?: boolean
    forceUpdate?: boolean
    latestVersion?: string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: boolean
    menuText1_es?: string
    menuText1_en?: string
    menuText1_pt?: string
    menuText2_es?: string
    menuText2_en?: string
    menuText2_pt?: string
    menuText3_es?: string
    menuText3_en?: string
    menuText3_pt?: string
  }

  export type ConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adsMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    adsBannerEnabled?: BoolFieldUpdateOperationsInput | boolean
    adsInterstitialEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    googleLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    facebookLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    surprisesModuleEnabled?: BoolFieldUpdateOperationsInput | boolean
    forceUpdate?: BoolFieldUpdateOperationsInput | boolean
    latestVersion?: StringFieldUpdateOperationsInput | string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    menuText1_es?: StringFieldUpdateOperationsInput | string
    menuText1_en?: StringFieldUpdateOperationsInput | string
    menuText1_pt?: StringFieldUpdateOperationsInput | string
    menuText2_es?: StringFieldUpdateOperationsInput | string
    menuText2_en?: StringFieldUpdateOperationsInput | string
    menuText2_pt?: StringFieldUpdateOperationsInput | string
    menuText3_es?: StringFieldUpdateOperationsInput | string
    menuText3_en?: StringFieldUpdateOperationsInput | string
    menuText3_pt?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adsMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    adsBannerEnabled?: BoolFieldUpdateOperationsInput | boolean
    adsInterstitialEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    googleLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    facebookLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    surprisesModuleEnabled?: BoolFieldUpdateOperationsInput | boolean
    forceUpdate?: BoolFieldUpdateOperationsInput | boolean
    latestVersion?: StringFieldUpdateOperationsInput | string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    menuText1_es?: StringFieldUpdateOperationsInput | string
    menuText1_en?: StringFieldUpdateOperationsInput | string
    menuText1_pt?: StringFieldUpdateOperationsInput | string
    menuText2_es?: StringFieldUpdateOperationsInput | string
    menuText2_en?: StringFieldUpdateOperationsInput | string
    menuText2_pt?: StringFieldUpdateOperationsInput | string
    menuText3_es?: StringFieldUpdateOperationsInput | string
    menuText3_en?: StringFieldUpdateOperationsInput | string
    menuText3_pt?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigCreateManyInput = {
    id?: string
    adsMasterSwitch?: boolean
    adsBannerEnabled?: boolean
    adsInterstitialEnabled?: boolean
    loginMasterSwitch?: boolean
    googleLoginEnabled?: boolean
    facebookLoginEnabled?: boolean
    surprisesModuleEnabled?: boolean
    forceUpdate?: boolean
    latestVersion?: string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: boolean
    menuText1_es?: string
    menuText1_en?: string
    menuText1_pt?: string
    menuText2_es?: string
    menuText2_en?: string
    menuText2_pt?: string
    menuText3_es?: string
    menuText3_en?: string
    menuText3_pt?: string
  }

  export type ConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adsMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    adsBannerEnabled?: BoolFieldUpdateOperationsInput | boolean
    adsInterstitialEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    googleLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    facebookLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    surprisesModuleEnabled?: BoolFieldUpdateOperationsInput | boolean
    forceUpdate?: BoolFieldUpdateOperationsInput | boolean
    latestVersion?: StringFieldUpdateOperationsInput | string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    menuText1_es?: StringFieldUpdateOperationsInput | string
    menuText1_en?: StringFieldUpdateOperationsInput | string
    menuText1_pt?: StringFieldUpdateOperationsInput | string
    menuText2_es?: StringFieldUpdateOperationsInput | string
    menuText2_en?: StringFieldUpdateOperationsInput | string
    menuText2_pt?: StringFieldUpdateOperationsInput | string
    menuText3_es?: StringFieldUpdateOperationsInput | string
    menuText3_en?: StringFieldUpdateOperationsInput | string
    menuText3_pt?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adsMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    adsBannerEnabled?: BoolFieldUpdateOperationsInput | boolean
    adsInterstitialEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginMasterSwitch?: BoolFieldUpdateOperationsInput | boolean
    googleLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    facebookLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    surprisesModuleEnabled?: BoolFieldUpdateOperationsInput | boolean
    forceUpdate?: BoolFieldUpdateOperationsInput | boolean
    latestVersion?: StringFieldUpdateOperationsInput | string
    termsData?: NullableJsonNullValueInput | InputJsonValue
    adsLoginEnabled?: BoolFieldUpdateOperationsInput | boolean
    menuText1_es?: StringFieldUpdateOperationsInput | string
    menuText1_en?: StringFieldUpdateOperationsInput | string
    menuText1_pt?: StringFieldUpdateOperationsInput | string
    menuText2_es?: StringFieldUpdateOperationsInput | string
    menuText2_en?: StringFieldUpdateOperationsInput | string
    menuText2_pt?: StringFieldUpdateOperationsInput | string
    menuText3_es?: StringFieldUpdateOperationsInput | string
    menuText3_en?: StringFieldUpdateOperationsInput | string
    menuText3_pt?: StringFieldUpdateOperationsInput | string
  }

  export type AppBannersCreateInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
    history?: HistoryCreateNestedOneWithoutBannersInput
  }

  export type AppBannersUncheckedCreateInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
    historyId?: string | null
  }

  export type AppBannersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    history?: HistoryUpdateOneWithoutBannersNestedInput
  }

  export type AppBannersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppBannersCreateManyInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
    historyId?: string | null
  }

  export type AppBannersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppBannersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type UserStoryListRelationFilter = {
    every?: UserStoryWhereInput
    some?: UserStoryWhereInput
    none?: UserStoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserStoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profileImage?: SortOrder
    pushToken?: SortOrder
    isPremium?: SortOrder
    premiumEnd?: SortOrder
    subscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profileImage?: SortOrder
    pushToken?: SortOrder
    isPremium?: SortOrder
    premiumEnd?: SortOrder
    subscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profileImage?: SortOrder
    pushToken?: SortOrder
    isPremium?: SortOrder
    premiumEnd?: SortOrder
    subscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSubscriptionPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlatform | EnumSubscriptionPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlatform[]
    notIn?: $Enums.SubscriptionPlatform[]
    not?: NestedEnumSubscriptionPlatformFilter<$PrismaModel> | $Enums.SubscriptionPlatform
  }

  export type EnumSubscriptionIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionInterval | EnumSubscriptionIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubscriptionInterval[] | null
    notIn?: $Enums.SubscriptionInterval[] | null
    not?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel> | $Enums.SubscriptionInterval | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    purchaseToken?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    autoRenewing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    purchaseToken?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    autoRenewing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    purchaseToken?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    autoRenewing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlatform | EnumSubscriptionPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlatform[]
    notIn?: $Enums.SubscriptionPlatform[]
    not?: NestedEnumSubscriptionPlatformWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlatformFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlatformFilter<$PrismaModel>
  }

  export type EnumSubscriptionIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionInterval | EnumSubscriptionIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubscriptionInterval[] | null
    notIn?: $Enums.SubscriptionInterval[] | null
    not?: NestedEnumSubscriptionIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel>
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

  export type AppBannersListRelationFilter = {
    every?: AppBannersWhereInput
    some?: AppBannersWhereInput
    none?: AppBannersWhereInput
  }

  export type PersonalizedAudioListRelationFilter = {
    every?: PersonalizedAudioWhereInput
    some?: PersonalizedAudioWhereInput
    none?: PersonalizedAudioWhereInput
  }

  export type AppBannersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalizedAudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelevanceInput = {
    fields: HistoryOrderByRelevanceFieldEnum | HistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    name_es?: SortOrder
    name_en?: SortOrder
    name_pt?: SortOrder
    description_es?: SortOrder
    description_en?: SortOrder
    description_pt?: SortOrder
    cover?: SortOrder
    poster?: SortOrder
    youtube?: SortOrder
    type?: SortOrder
    song?: SortOrder
    active?: SortOrder
    isPremium?: SortOrder
    googleProductId?: SortOrder
    dominant?: SortOrder
    average?: SortOrder
    vibrant?: SortOrder
    darkVibrant?: SortOrder
    lightVibrant?: SortOrder
    darkMuted?: SortOrder
    lightMuted?: SortOrder
    muted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    type?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name_es?: SortOrder
    name_en?: SortOrder
    name_pt?: SortOrder
    description_es?: SortOrder
    description_en?: SortOrder
    description_pt?: SortOrder
    cover?: SortOrder
    poster?: SortOrder
    youtube?: SortOrder
    type?: SortOrder
    song?: SortOrder
    active?: SortOrder
    isPremium?: SortOrder
    googleProductId?: SortOrder
    dominant?: SortOrder
    average?: SortOrder
    vibrant?: SortOrder
    darkVibrant?: SortOrder
    lightVibrant?: SortOrder
    darkMuted?: SortOrder
    lightMuted?: SortOrder
    muted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    name_es?: SortOrder
    name_en?: SortOrder
    name_pt?: SortOrder
    description_es?: SortOrder
    description_en?: SortOrder
    description_pt?: SortOrder
    cover?: SortOrder
    poster?: SortOrder
    youtube?: SortOrder
    type?: SortOrder
    song?: SortOrder
    active?: SortOrder
    isPremium?: SortOrder
    googleProductId?: SortOrder
    dominant?: SortOrder
    average?: SortOrder
    vibrant?: SortOrder
    darkVibrant?: SortOrder
    lightVibrant?: SortOrder
    darkMuted?: SortOrder
    lightMuted?: SortOrder
    muted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    type?: SortOrder
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

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HistoryScalarRelationFilter = {
    is?: HistoryWhereInput
    isNot?: HistoryWhereInput
  }

  export type PersonalizedAudioNullableScalarRelationFilter = {
    is?: PersonalizedAudioWhereInput | null
    isNot?: PersonalizedAudioWhereInput | null
  }

  export type UserStoryOrderByRelevanceInput = {
    fields: UserStoryOrderByRelevanceFieldEnum | UserStoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserStoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    historyId?: SortOrder
    requestedName?: SortOrder
    audioId?: SortOrder
    purchaseToken?: SortOrder
    googleOrderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    historyId?: SortOrder
    requestedName?: SortOrder
    audioId?: SortOrder
    purchaseToken?: SortOrder
    googleOrderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    historyId?: SortOrder
    requestedName?: SortOrder
    audioId?: SortOrder
    purchaseToken?: SortOrder
    googleOrderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
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

  export type PersonalizedAudioOrderByRelevanceInput = {
    fields: PersonalizedAudioOrderByRelevanceFieldEnum | PersonalizedAudioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PersonalizedAudioHistoryIdChildNameCompoundUniqueInput = {
    historyId: string
    childName: string
  }

  export type PersonalizedAudioCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    childName?: SortOrder
    historyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonalizedAudioAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type PersonalizedAudioMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    childName?: SortOrder
    historyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonalizedAudioMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    childName?: SortOrder
    historyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonalizedAudioSumOrderByAggregateInput = {
    duration?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConfigOrderByRelevanceInput = {
    fields: ConfigOrderByRelevanceFieldEnum | ConfigOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    adsMasterSwitch?: SortOrder
    adsBannerEnabled?: SortOrder
    adsInterstitialEnabled?: SortOrder
    loginMasterSwitch?: SortOrder
    googleLoginEnabled?: SortOrder
    facebookLoginEnabled?: SortOrder
    surprisesModuleEnabled?: SortOrder
    forceUpdate?: SortOrder
    latestVersion?: SortOrder
    termsData?: SortOrder
    adsLoginEnabled?: SortOrder
    menuText1_es?: SortOrder
    menuText1_en?: SortOrder
    menuText1_pt?: SortOrder
    menuText2_es?: SortOrder
    menuText2_en?: SortOrder
    menuText2_pt?: SortOrder
    menuText3_es?: SortOrder
    menuText3_en?: SortOrder
    menuText3_pt?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    adsMasterSwitch?: SortOrder
    adsBannerEnabled?: SortOrder
    adsInterstitialEnabled?: SortOrder
    loginMasterSwitch?: SortOrder
    googleLoginEnabled?: SortOrder
    facebookLoginEnabled?: SortOrder
    surprisesModuleEnabled?: SortOrder
    forceUpdate?: SortOrder
    latestVersion?: SortOrder
    adsLoginEnabled?: SortOrder
    menuText1_es?: SortOrder
    menuText1_en?: SortOrder
    menuText1_pt?: SortOrder
    menuText2_es?: SortOrder
    menuText2_en?: SortOrder
    menuText2_pt?: SortOrder
    menuText3_es?: SortOrder
    menuText3_en?: SortOrder
    menuText3_pt?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    adsMasterSwitch?: SortOrder
    adsBannerEnabled?: SortOrder
    adsInterstitialEnabled?: SortOrder
    loginMasterSwitch?: SortOrder
    googleLoginEnabled?: SortOrder
    facebookLoginEnabled?: SortOrder
    surprisesModuleEnabled?: SortOrder
    forceUpdate?: SortOrder
    latestVersion?: SortOrder
    adsLoginEnabled?: SortOrder
    menuText1_es?: SortOrder
    menuText1_en?: SortOrder
    menuText1_pt?: SortOrder
    menuText2_es?: SortOrder
    menuText2_en?: SortOrder
    menuText2_pt?: SortOrder
    menuText3_es?: SortOrder
    menuText3_en?: SortOrder
    menuText3_pt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type HistoryNullableScalarRelationFilter = {
    is?: HistoryWhereInput | null
    isNot?: HistoryWhereInput | null
  }

  export type AppBannersOrderByRelevanceInput = {
    fields: AppBannersOrderByRelevanceFieldEnum | AppBannersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppBannersCountOrderByAggregateInput = {
    id?: SortOrder
    isPromo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    playImage?: SortOrder
    externalUrl?: SortOrder
    historyId?: SortOrder
  }

  export type AppBannersMaxOrderByAggregateInput = {
    id?: SortOrder
    isPromo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    playImage?: SortOrder
    externalUrl?: SortOrder
    historyId?: SortOrder
  }

  export type AppBannersMinOrderByAggregateInput = {
    id?: SortOrder
    isPromo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    playImage?: SortOrder
    externalUrl?: SortOrder
    historyId?: SortOrder
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type SubscriptionCreateNestedOneWithoutUsersInput = {
    create?: XOR<SubscriptionCreateWithoutUsersInput, SubscriptionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsersInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserStoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type UserStoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUsersInput, SubscriptionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsersInput
    upsert?: SubscriptionUpsertWithoutUsersInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUsersInput, SubscriptionUpdateWithoutUsersInput>, SubscriptionUncheckedUpdateWithoutUsersInput>
  }

  export type UserStoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutUserInput | UserStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutUserInput | UserStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutUserInput | UserStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type UserStoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutUserInput | UserStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutUserInput | UserStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutUserInput | UserStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput> | UserCreateWithoutSubscriptionInput[] | UserUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput | UserCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserCreateManySubscriptionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput> | UserCreateWithoutSubscriptionInput[] | UserUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput | UserCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserCreateManySubscriptionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumSubscriptionPlatformFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlatform
  }

  export type NullableEnumSubscriptionIntervalFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionInterval | null
  }

  export type UserUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput> | UserCreateWithoutSubscriptionInput[] | UserUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput | UserCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionInput | UserUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserCreateManySubscriptionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSubscriptionInput | UserUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSubscriptionInput | UserUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput> | UserCreateWithoutSubscriptionInput[] | UserUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput | UserCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionInput | UserUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserCreateManySubscriptionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSubscriptionInput | UserUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSubscriptionInput | UserUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AppBannersCreateNestedManyWithoutHistoryInput = {
    create?: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput> | AppBannersCreateWithoutHistoryInput[] | AppBannersUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: AppBannersCreateOrConnectWithoutHistoryInput | AppBannersCreateOrConnectWithoutHistoryInput[]
    createMany?: AppBannersCreateManyHistoryInputEnvelope
    connect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
  }

  export type UserStoryCreateNestedManyWithoutHistoryInput = {
    create?: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput> | UserStoryCreateWithoutHistoryInput[] | UserStoryUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutHistoryInput | UserStoryCreateOrConnectWithoutHistoryInput[]
    createMany?: UserStoryCreateManyHistoryInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type PersonalizedAudioCreateNestedManyWithoutHistoryInput = {
    create?: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput> | PersonalizedAudioCreateWithoutHistoryInput[] | PersonalizedAudioUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutHistoryInput | PersonalizedAudioCreateOrConnectWithoutHistoryInput[]
    createMany?: PersonalizedAudioCreateManyHistoryInputEnvelope
    connect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
  }

  export type AppBannersUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput> | AppBannersCreateWithoutHistoryInput[] | AppBannersUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: AppBannersCreateOrConnectWithoutHistoryInput | AppBannersCreateOrConnectWithoutHistoryInput[]
    createMany?: AppBannersCreateManyHistoryInputEnvelope
    connect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
  }

  export type UserStoryUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput> | UserStoryCreateWithoutHistoryInput[] | UserStoryUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutHistoryInput | UserStoryCreateOrConnectWithoutHistoryInput[]
    createMany?: UserStoryCreateManyHistoryInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type PersonalizedAudioUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput> | PersonalizedAudioCreateWithoutHistoryInput[] | PersonalizedAudioUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutHistoryInput | PersonalizedAudioCreateOrConnectWithoutHistoryInput[]
    createMany?: PersonalizedAudioCreateManyHistoryInputEnvelope
    connect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppBannersUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput> | AppBannersCreateWithoutHistoryInput[] | AppBannersUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: AppBannersCreateOrConnectWithoutHistoryInput | AppBannersCreateOrConnectWithoutHistoryInput[]
    upsert?: AppBannersUpsertWithWhereUniqueWithoutHistoryInput | AppBannersUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: AppBannersCreateManyHistoryInputEnvelope
    set?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    disconnect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    delete?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    connect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    update?: AppBannersUpdateWithWhereUniqueWithoutHistoryInput | AppBannersUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: AppBannersUpdateManyWithWhereWithoutHistoryInput | AppBannersUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: AppBannersScalarWhereInput | AppBannersScalarWhereInput[]
  }

  export type UserStoryUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput> | UserStoryCreateWithoutHistoryInput[] | UserStoryUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutHistoryInput | UserStoryCreateOrConnectWithoutHistoryInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutHistoryInput | UserStoryUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: UserStoryCreateManyHistoryInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutHistoryInput | UserStoryUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutHistoryInput | UserStoryUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type PersonalizedAudioUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput> | PersonalizedAudioCreateWithoutHistoryInput[] | PersonalizedAudioUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutHistoryInput | PersonalizedAudioCreateOrConnectWithoutHistoryInput[]
    upsert?: PersonalizedAudioUpsertWithWhereUniqueWithoutHistoryInput | PersonalizedAudioUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: PersonalizedAudioCreateManyHistoryInputEnvelope
    set?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    disconnect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    delete?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    connect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    update?: PersonalizedAudioUpdateWithWhereUniqueWithoutHistoryInput | PersonalizedAudioUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: PersonalizedAudioUpdateManyWithWhereWithoutHistoryInput | PersonalizedAudioUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: PersonalizedAudioScalarWhereInput | PersonalizedAudioScalarWhereInput[]
  }

  export type AppBannersUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput> | AppBannersCreateWithoutHistoryInput[] | AppBannersUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: AppBannersCreateOrConnectWithoutHistoryInput | AppBannersCreateOrConnectWithoutHistoryInput[]
    upsert?: AppBannersUpsertWithWhereUniqueWithoutHistoryInput | AppBannersUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: AppBannersCreateManyHistoryInputEnvelope
    set?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    disconnect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    delete?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    connect?: AppBannersWhereUniqueInput | AppBannersWhereUniqueInput[]
    update?: AppBannersUpdateWithWhereUniqueWithoutHistoryInput | AppBannersUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: AppBannersUpdateManyWithWhereWithoutHistoryInput | AppBannersUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: AppBannersScalarWhereInput | AppBannersScalarWhereInput[]
  }

  export type UserStoryUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput> | UserStoryCreateWithoutHistoryInput[] | UserStoryUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutHistoryInput | UserStoryCreateOrConnectWithoutHistoryInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutHistoryInput | UserStoryUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: UserStoryCreateManyHistoryInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutHistoryInput | UserStoryUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutHistoryInput | UserStoryUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type PersonalizedAudioUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput> | PersonalizedAudioCreateWithoutHistoryInput[] | PersonalizedAudioUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutHistoryInput | PersonalizedAudioCreateOrConnectWithoutHistoryInput[]
    upsert?: PersonalizedAudioUpsertWithWhereUniqueWithoutHistoryInput | PersonalizedAudioUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: PersonalizedAudioCreateManyHistoryInputEnvelope
    set?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    disconnect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    delete?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    connect?: PersonalizedAudioWhereUniqueInput | PersonalizedAudioWhereUniqueInput[]
    update?: PersonalizedAudioUpdateWithWhereUniqueWithoutHistoryInput | PersonalizedAudioUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: PersonalizedAudioUpdateManyWithWhereWithoutHistoryInput | PersonalizedAudioUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: PersonalizedAudioScalarWhereInput | PersonalizedAudioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoriesInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type HistoryCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<HistoryCreateWithoutPurchasesInput, HistoryUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutPurchasesInput
    connect?: HistoryWhereUniqueInput
  }

  export type PersonalizedAudioCreateNestedOneWithoutAssignedToInput = {
    create?: XOR<PersonalizedAudioCreateWithoutAssignedToInput, PersonalizedAudioUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutAssignedToInput
    connect?: PersonalizedAudioWhereUniqueInput
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type UserUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    upsert?: UserUpsertWithoutStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoriesInput, UserUpdateWithoutStoriesInput>, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type HistoryUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<HistoryCreateWithoutPurchasesInput, HistoryUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutPurchasesInput
    upsert?: HistoryUpsertWithoutPurchasesInput
    connect?: HistoryWhereUniqueInput
    update?: XOR<XOR<HistoryUpdateToOneWithWhereWithoutPurchasesInput, HistoryUpdateWithoutPurchasesInput>, HistoryUncheckedUpdateWithoutPurchasesInput>
  }

  export type PersonalizedAudioUpdateOneWithoutAssignedToNestedInput = {
    create?: XOR<PersonalizedAudioCreateWithoutAssignedToInput, PersonalizedAudioUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: PersonalizedAudioCreateOrConnectWithoutAssignedToInput
    upsert?: PersonalizedAudioUpsertWithoutAssignedToInput
    disconnect?: PersonalizedAudioWhereInput | boolean
    delete?: PersonalizedAudioWhereInput | boolean
    connect?: PersonalizedAudioWhereUniqueInput
    update?: XOR<XOR<PersonalizedAudioUpdateToOneWithWhereWithoutAssignedToInput, PersonalizedAudioUpdateWithoutAssignedToInput>, PersonalizedAudioUncheckedUpdateWithoutAssignedToInput>
  }

  export type HistoryCreateNestedOneWithoutAvailableAudiosInput = {
    create?: XOR<HistoryCreateWithoutAvailableAudiosInput, HistoryUncheckedCreateWithoutAvailableAudiosInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutAvailableAudiosInput
    connect?: HistoryWhereUniqueInput
  }

  export type UserStoryCreateNestedManyWithoutAudioInput = {
    create?: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput> | UserStoryCreateWithoutAudioInput[] | UserStoryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutAudioInput | UserStoryCreateOrConnectWithoutAudioInput[]
    createMany?: UserStoryCreateManyAudioInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type UserStoryUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput> | UserStoryCreateWithoutAudioInput[] | UserStoryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutAudioInput | UserStoryCreateOrConnectWithoutAudioInput[]
    createMany?: UserStoryCreateManyAudioInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistoryUpdateOneRequiredWithoutAvailableAudiosNestedInput = {
    create?: XOR<HistoryCreateWithoutAvailableAudiosInput, HistoryUncheckedCreateWithoutAvailableAudiosInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutAvailableAudiosInput
    upsert?: HistoryUpsertWithoutAvailableAudiosInput
    connect?: HistoryWhereUniqueInput
    update?: XOR<XOR<HistoryUpdateToOneWithWhereWithoutAvailableAudiosInput, HistoryUpdateWithoutAvailableAudiosInput>, HistoryUncheckedUpdateWithoutAvailableAudiosInput>
  }

  export type UserStoryUpdateManyWithoutAudioNestedInput = {
    create?: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput> | UserStoryCreateWithoutAudioInput[] | UserStoryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutAudioInput | UserStoryCreateOrConnectWithoutAudioInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutAudioInput | UserStoryUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: UserStoryCreateManyAudioInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutAudioInput | UserStoryUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutAudioInput | UserStoryUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type UserStoryUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput> | UserStoryCreateWithoutAudioInput[] | UserStoryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutAudioInput | UserStoryCreateOrConnectWithoutAudioInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutAudioInput | UserStoryUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: UserStoryCreateManyAudioInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutAudioInput | UserStoryUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutAudioInput | UserStoryUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type HistoryCreateNestedOneWithoutBannersInput = {
    create?: XOR<HistoryCreateWithoutBannersInput, HistoryUncheckedCreateWithoutBannersInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutBannersInput
    connect?: HistoryWhereUniqueInput
  }

  export type HistoryUpdateOneWithoutBannersNestedInput = {
    create?: XOR<HistoryCreateWithoutBannersInput, HistoryUncheckedCreateWithoutBannersInput>
    connectOrCreate?: HistoryCreateOrConnectWithoutBannersInput
    upsert?: HistoryUpsertWithoutBannersInput
    disconnect?: HistoryWhereInput | boolean
    delete?: HistoryWhereInput | boolean
    connect?: HistoryWhereUniqueInput
    update?: XOR<XOR<HistoryUpdateToOneWithWhereWithoutBannersInput, HistoryUpdateWithoutBannersInput>, HistoryUncheckedUpdateWithoutBannersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlatform | EnumSubscriptionPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlatform[]
    notIn?: $Enums.SubscriptionPlatform[]
    not?: NestedEnumSubscriptionPlatformFilter<$PrismaModel> | $Enums.SubscriptionPlatform
  }

  export type NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionInterval | EnumSubscriptionIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubscriptionInterval[] | null
    notIn?: $Enums.SubscriptionInterval[] | null
    not?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel> | $Enums.SubscriptionInterval | null
  }

  export type NestedEnumSubscriptionPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlatform | EnumSubscriptionPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlatform[]
    notIn?: $Enums.SubscriptionPlatform[]
    not?: NestedEnumSubscriptionPlatformWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlatformFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlatformFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionInterval | EnumSubscriptionIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SubscriptionInterval[] | null
    notIn?: $Enums.SubscriptionInterval[] | null
    not?: NestedEnumSubscriptionIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionIntervalNullableFilter<$PrismaModel>
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

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubscriptionCreateWithoutUsersInput = {
    id?: string
    platform?: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId?: string | null
    productId: string
    interval?: $Enums.SubscriptionInterval | null
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUsersInput = {
    id?: string
    platform?: $Enums.SubscriptionPlatform
    purchaseToken: string
    orderId?: string | null
    productId: string
    interval?: $Enums.SubscriptionInterval | null
    isActive?: boolean
    autoRenewing?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUsersInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUsersInput, SubscriptionUncheckedCreateWithoutUsersInput>
  }

  export type UserStoryCreateWithoutUserInput = {
    id?: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    history: HistoryCreateNestedOneWithoutPurchasesInput
    audio?: PersonalizedAudioCreateNestedOneWithoutAssignedToInput
  }

  export type UserStoryUncheckedCreateWithoutUserInput = {
    id?: string
    historyId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryCreateOrConnectWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput>
  }

  export type UserStoryCreateManyUserInputEnvelope = {
    data: UserStoryCreateManyUserInput | UserStoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUsersInput = {
    update: XOR<SubscriptionUpdateWithoutUsersInput, SubscriptionUncheckedUpdateWithoutUsersInput>
    create: XOR<SubscriptionCreateWithoutUsersInput, SubscriptionUncheckedCreateWithoutUsersInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUsersInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUsersInput, SubscriptionUncheckedUpdateWithoutUsersInput>
  }

  export type SubscriptionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumSubscriptionPlatformFieldUpdateOperationsInput | $Enums.SubscriptionPlatform
    purchaseToken?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    interval?: NullableEnumSubscriptionIntervalFieldUpdateOperationsInput | $Enums.SubscriptionInterval | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoRenewing?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    update: XOR<UserStoryUpdateWithoutUserInput, UserStoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput>
  }

  export type UserStoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    data: XOR<UserStoryUpdateWithoutUserInput, UserStoryUncheckedUpdateWithoutUserInput>
  }

  export type UserStoryUpdateManyWithWhereWithoutUserInput = {
    where: UserStoryScalarWhereInput
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStoryScalarWhereInput = {
    AND?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
    OR?: UserStoryScalarWhereInput[]
    NOT?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
    id?: StringFilter<"UserStory"> | string
    userId?: StringFilter<"UserStory"> | string
    historyId?: StringFilter<"UserStory"> | string
    requestedName?: StringFilter<"UserStory"> | string
    audioId?: StringNullableFilter<"UserStory"> | string | null
    purchaseToken?: StringNullableFilter<"UserStory"> | string | null
    googleOrderId?: StringNullableFilter<"UserStory"> | string | null
    status?: EnumAssignmentStatusFilter<"UserStory"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    updatedAt?: DateTimeFilter<"UserStory"> | Date | string
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: UserStoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: UserStoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserCreateManySubscriptionInputEnvelope = {
    data: UserCreateManySubscriptionInput | UserCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateManyWithWhereWithoutSubscriptionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    pushToken?: StringNullableFilter<"User"> | string | null
    isPremium?: BoolFilter<"User"> | boolean
    premiumEnd?: DateTimeNullableFilter<"User"> | Date | string | null
    subscriptionId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type AppBannersCreateWithoutHistoryInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
  }

  export type AppBannersUncheckedCreateWithoutHistoryInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
  }

  export type AppBannersCreateOrConnectWithoutHistoryInput = {
    where: AppBannersWhereUniqueInput
    create: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput>
  }

  export type AppBannersCreateManyHistoryInputEnvelope = {
    data: AppBannersCreateManyHistoryInput | AppBannersCreateManyHistoryInput[]
    skipDuplicates?: boolean
  }

  export type UserStoryCreateWithoutHistoryInput = {
    id?: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
    audio?: PersonalizedAudioCreateNestedOneWithoutAssignedToInput
  }

  export type UserStoryUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryCreateOrConnectWithoutHistoryInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput>
  }

  export type UserStoryCreateManyHistoryInputEnvelope = {
    data: UserStoryCreateManyHistoryInput | UserStoryCreateManyHistoryInput[]
    skipDuplicates?: boolean
  }

  export type PersonalizedAudioCreateWithoutHistoryInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    createdAt?: Date | string
    assignedTo?: UserStoryCreateNestedManyWithoutAudioInput
  }

  export type PersonalizedAudioUncheckedCreateWithoutHistoryInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    createdAt?: Date | string
    assignedTo?: UserStoryUncheckedCreateNestedManyWithoutAudioInput
  }

  export type PersonalizedAudioCreateOrConnectWithoutHistoryInput = {
    where: PersonalizedAudioWhereUniqueInput
    create: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput>
  }

  export type PersonalizedAudioCreateManyHistoryInputEnvelope = {
    data: PersonalizedAudioCreateManyHistoryInput | PersonalizedAudioCreateManyHistoryInput[]
    skipDuplicates?: boolean
  }

  export type AppBannersUpsertWithWhereUniqueWithoutHistoryInput = {
    where: AppBannersWhereUniqueInput
    update: XOR<AppBannersUpdateWithoutHistoryInput, AppBannersUncheckedUpdateWithoutHistoryInput>
    create: XOR<AppBannersCreateWithoutHistoryInput, AppBannersUncheckedCreateWithoutHistoryInput>
  }

  export type AppBannersUpdateWithWhereUniqueWithoutHistoryInput = {
    where: AppBannersWhereUniqueInput
    data: XOR<AppBannersUpdateWithoutHistoryInput, AppBannersUncheckedUpdateWithoutHistoryInput>
  }

  export type AppBannersUpdateManyWithWhereWithoutHistoryInput = {
    where: AppBannersScalarWhereInput
    data: XOR<AppBannersUpdateManyMutationInput, AppBannersUncheckedUpdateManyWithoutHistoryInput>
  }

  export type AppBannersScalarWhereInput = {
    AND?: AppBannersScalarWhereInput | AppBannersScalarWhereInput[]
    OR?: AppBannersScalarWhereInput[]
    NOT?: AppBannersScalarWhereInput | AppBannersScalarWhereInput[]
    id?: StringFilter<"AppBanners"> | string
    isPromo?: BoolFilter<"AppBanners"> | boolean
    title?: StringFilter<"AppBanners"> | string
    description?: StringFilter<"AppBanners"> | string
    playImage?: StringNullableFilter<"AppBanners"> | string | null
    externalUrl?: StringNullableFilter<"AppBanners"> | string | null
    historyId?: StringNullableFilter<"AppBanners"> | string | null
  }

  export type UserStoryUpsertWithWhereUniqueWithoutHistoryInput = {
    where: UserStoryWhereUniqueInput
    update: XOR<UserStoryUpdateWithoutHistoryInput, UserStoryUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserStoryCreateWithoutHistoryInput, UserStoryUncheckedCreateWithoutHistoryInput>
  }

  export type UserStoryUpdateWithWhereUniqueWithoutHistoryInput = {
    where: UserStoryWhereUniqueInput
    data: XOR<UserStoryUpdateWithoutHistoryInput, UserStoryUncheckedUpdateWithoutHistoryInput>
  }

  export type UserStoryUpdateManyWithWhereWithoutHistoryInput = {
    where: UserStoryScalarWhereInput
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyWithoutHistoryInput>
  }

  export type PersonalizedAudioUpsertWithWhereUniqueWithoutHistoryInput = {
    where: PersonalizedAudioWhereUniqueInput
    update: XOR<PersonalizedAudioUpdateWithoutHistoryInput, PersonalizedAudioUncheckedUpdateWithoutHistoryInput>
    create: XOR<PersonalizedAudioCreateWithoutHistoryInput, PersonalizedAudioUncheckedCreateWithoutHistoryInput>
  }

  export type PersonalizedAudioUpdateWithWhereUniqueWithoutHistoryInput = {
    where: PersonalizedAudioWhereUniqueInput
    data: XOR<PersonalizedAudioUpdateWithoutHistoryInput, PersonalizedAudioUncheckedUpdateWithoutHistoryInput>
  }

  export type PersonalizedAudioUpdateManyWithWhereWithoutHistoryInput = {
    where: PersonalizedAudioScalarWhereInput
    data: XOR<PersonalizedAudioUpdateManyMutationInput, PersonalizedAudioUncheckedUpdateManyWithoutHistoryInput>
  }

  export type PersonalizedAudioScalarWhereInput = {
    AND?: PersonalizedAudioScalarWhereInput | PersonalizedAudioScalarWhereInput[]
    OR?: PersonalizedAudioScalarWhereInput[]
    NOT?: PersonalizedAudioScalarWhereInput | PersonalizedAudioScalarWhereInput[]
    id?: StringFilter<"PersonalizedAudio"> | string
    url?: StringFilter<"PersonalizedAudio"> | string
    duration?: IntNullableFilter<"PersonalizedAudio"> | number | null
    childName?: StringFilter<"PersonalizedAudio"> | string
    historyId?: StringFilter<"PersonalizedAudio"> | string
    createdAt?: DateTimeFilter<"PersonalizedAudio"> | Date | string
  }

  export type UserCreateWithoutStoriesInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutStoriesInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    subscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
  }

  export type HistoryCreateWithoutPurchasesInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioCreateNestedManyWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersUncheckedCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type HistoryCreateOrConnectWithoutPurchasesInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutPurchasesInput, HistoryUncheckedCreateWithoutPurchasesInput>
  }

  export type PersonalizedAudioCreateWithoutAssignedToInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    createdAt?: Date | string
    history: HistoryCreateNestedOneWithoutAvailableAudiosInput
  }

  export type PersonalizedAudioUncheckedCreateWithoutAssignedToInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    historyId: string
    createdAt?: Date | string
  }

  export type PersonalizedAudioCreateOrConnectWithoutAssignedToInput = {
    where: PersonalizedAudioWhereUniqueInput
    create: XOR<PersonalizedAudioCreateWithoutAssignedToInput, PersonalizedAudioUncheckedCreateWithoutAssignedToInput>
  }

  export type UserUpsertWithoutStoriesInput = {
    update: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUpsertWithoutPurchasesInput = {
    update: XOR<HistoryUpdateWithoutPurchasesInput, HistoryUncheckedUpdateWithoutPurchasesInput>
    create: XOR<HistoryCreateWithoutPurchasesInput, HistoryUncheckedCreateWithoutPurchasesInput>
    where?: HistoryWhereInput
  }

  export type HistoryUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: HistoryWhereInput
    data: XOR<HistoryUpdateWithoutPurchasesInput, HistoryUncheckedUpdateWithoutPurchasesInput>
  }

  export type HistoryUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUpdateManyWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUncheckedUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type PersonalizedAudioUpsertWithoutAssignedToInput = {
    update: XOR<PersonalizedAudioUpdateWithoutAssignedToInput, PersonalizedAudioUncheckedUpdateWithoutAssignedToInput>
    create: XOR<PersonalizedAudioCreateWithoutAssignedToInput, PersonalizedAudioUncheckedCreateWithoutAssignedToInput>
    where?: PersonalizedAudioWhereInput
  }

  export type PersonalizedAudioUpdateToOneWithWhereWithoutAssignedToInput = {
    where?: PersonalizedAudioWhereInput
    data: XOR<PersonalizedAudioUpdateWithoutAssignedToInput, PersonalizedAudioUncheckedUpdateWithoutAssignedToInput>
  }

  export type PersonalizedAudioUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoryUpdateOneRequiredWithoutAvailableAudiosNestedInput
  }

  export type PersonalizedAudioUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateWithoutAvailableAudiosInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersCreateNestedManyWithoutHistoryInput
    purchases?: UserStoryCreateNestedManyWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutAvailableAudiosInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banners?: AppBannersUncheckedCreateNestedManyWithoutHistoryInput
    purchases?: UserStoryUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type HistoryCreateOrConnectWithoutAvailableAudiosInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutAvailableAudiosInput, HistoryUncheckedCreateWithoutAvailableAudiosInput>
  }

  export type UserStoryCreateWithoutAudioInput = {
    id?: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
    history: HistoryCreateNestedOneWithoutPurchasesInput
  }

  export type UserStoryUncheckedCreateWithoutAudioInput = {
    id?: string
    userId: string
    historyId: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryCreateOrConnectWithoutAudioInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput>
  }

  export type UserStoryCreateManyAudioInputEnvelope = {
    data: UserStoryCreateManyAudioInput | UserStoryCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithoutAvailableAudiosInput = {
    update: XOR<HistoryUpdateWithoutAvailableAudiosInput, HistoryUncheckedUpdateWithoutAvailableAudiosInput>
    create: XOR<HistoryCreateWithoutAvailableAudiosInput, HistoryUncheckedCreateWithoutAvailableAudiosInput>
    where?: HistoryWhereInput
  }

  export type HistoryUpdateToOneWithWhereWithoutAvailableAudiosInput = {
    where?: HistoryWhereInput
    data: XOR<HistoryUpdateWithoutAvailableAudiosInput, HistoryUncheckedUpdateWithoutAvailableAudiosInput>
  }

  export type HistoryUpdateWithoutAvailableAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUpdateManyWithoutHistoryNestedInput
    purchases?: UserStoryUpdateManyWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutAvailableAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banners?: AppBannersUncheckedUpdateManyWithoutHistoryNestedInput
    purchases?: UserStoryUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type UserStoryUpsertWithWhereUniqueWithoutAudioInput = {
    where: UserStoryWhereUniqueInput
    update: XOR<UserStoryUpdateWithoutAudioInput, UserStoryUncheckedUpdateWithoutAudioInput>
    create: XOR<UserStoryCreateWithoutAudioInput, UserStoryUncheckedCreateWithoutAudioInput>
  }

  export type UserStoryUpdateWithWhereUniqueWithoutAudioInput = {
    where: UserStoryWhereUniqueInput
    data: XOR<UserStoryUpdateWithoutAudioInput, UserStoryUncheckedUpdateWithoutAudioInput>
  }

  export type UserStoryUpdateManyWithWhereWithoutAudioInput = {
    where: UserStoryScalarWhereInput
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyWithoutAudioInput>
  }

  export type HistoryCreateWithoutBannersInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: UserStoryCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioCreateNestedManyWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutBannersInput = {
    id?: string
    name_es: string
    name_en: string
    name_pt?: string | null
    description_es: string
    description_en: string
    description_pt?: string | null
    cover: string
    poster?: string | null
    youtube?: string | null
    type?: number
    song?: string | null
    active?: boolean
    isPremium?: boolean
    googleProductId?: string | null
    dominant?: string | null
    average?: string | null
    vibrant?: string | null
    darkVibrant?: string | null
    lightVibrant?: string | null
    darkMuted?: string | null
    lightMuted?: string | null
    muted?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: UserStoryUncheckedCreateNestedManyWithoutHistoryInput
    availableAudios?: PersonalizedAudioUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type HistoryCreateOrConnectWithoutBannersInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutBannersInput, HistoryUncheckedCreateWithoutBannersInput>
  }

  export type HistoryUpsertWithoutBannersInput = {
    update: XOR<HistoryUpdateWithoutBannersInput, HistoryUncheckedUpdateWithoutBannersInput>
    create: XOR<HistoryCreateWithoutBannersInput, HistoryUncheckedCreateWithoutBannersInput>
    where?: HistoryWhereInput
  }

  export type HistoryUpdateToOneWithWhereWithoutBannersInput = {
    where?: HistoryWhereInput
    data: XOR<HistoryUpdateWithoutBannersInput, HistoryUncheckedUpdateWithoutBannersInput>
  }

  export type HistoryUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: UserStoryUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUpdateManyWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_es?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    name_pt?: NullableStringFieldUpdateOperationsInput | string | null
    description_es?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_pt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    song?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    googleProductId?: NullableStringFieldUpdateOperationsInput | string | null
    dominant?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableStringFieldUpdateOperationsInput | string | null
    vibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    lightVibrant?: NullableStringFieldUpdateOperationsInput | string | null
    darkMuted?: NullableStringFieldUpdateOperationsInput | string | null
    lightMuted?: NullableStringFieldUpdateOperationsInput | string | null
    muted?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: UserStoryUncheckedUpdateManyWithoutHistoryNestedInput
    availableAudios?: PersonalizedAudioUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type UserStoryCreateManyUserInput = {
    id?: string
    historyId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoryUpdateOneRequiredWithoutPurchasesNestedInput
    audio?: PersonalizedAudioUpdateOneWithoutAssignedToNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManySubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    googleId?: string | null
    profileImage?: string | null
    pushToken?: string | null
    isPremium?: boolean
    premiumEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: UserStoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: UserStoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppBannersCreateManyHistoryInput = {
    id?: string
    isPromo?: boolean
    title: string
    description: string
    playImage?: string | null
    externalUrl?: string | null
  }

  export type UserStoryCreateManyHistoryInput = {
    id?: string
    userId: string
    requestedName: string
    audioId?: string | null
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalizedAudioCreateManyHistoryInput = {
    id?: string
    url: string
    duration?: number | null
    childName: string
    createdAt?: Date | string
  }

  export type AppBannersUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppBannersUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppBannersUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    playImage?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserStoryUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
    audio?: PersonalizedAudioUpdateOneWithoutAssignedToNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalizedAudioUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserStoryUpdateManyWithoutAudioNestedInput
  }

  export type PersonalizedAudioUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserStoryUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type PersonalizedAudioUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    childName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryCreateManyAudioInput = {
    id?: string
    userId: string
    historyId: string
    requestedName: string
    purchaseToken?: string | null
    googleOrderId?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoryUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
    history?: HistoryUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoryUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    requestedName?: StringFieldUpdateOperationsInput | string
    purchaseToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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