
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
 * Model FamilyTree
 * 
 */
export type FamilyTree = $Result.DefaultSelection<Prisma.$FamilyTreePayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model Relationship
 * 
 */
export type Relationship = $Result.DefaultSelection<Prisma.$RelationshipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RelationshipType: {
  SPOUSE: 'SPOUSE',
  PARENT_OF: 'PARENT_OF'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]


export const PrivacyLevel: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC'
};

export type PrivacyLevel = (typeof PrivacyLevel)[keyof typeof PrivacyLevel]

}

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

export type PrivacyLevel = $Enums.PrivacyLevel

export const PrivacyLevel: typeof $Enums.PrivacyLevel

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
   * `prisma.familyTree`: Exposes CRUD operations for the **FamilyTree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyTrees
    * const familyTrees = await prisma.familyTree.findMany()
    * ```
    */
  get familyTree(): Prisma.FamilyTreeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationship`: Exposes CRUD operations for the **Relationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationships
    * const relationships = await prisma.relationship.findMany()
    * ```
    */
  get relationship(): Prisma.RelationshipDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    FamilyTree: 'FamilyTree',
    Node: 'Node',
    Relationship: 'Relationship'
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
      modelProps: "user" | "familyTree" | "node" | "relationship"
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
      FamilyTree: {
        payload: Prisma.$FamilyTreePayload<ExtArgs>
        fields: Prisma.FamilyTreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyTreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyTreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          findFirst: {
            args: Prisma.FamilyTreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyTreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          findMany: {
            args: Prisma.FamilyTreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>[]
          }
          create: {
            args: Prisma.FamilyTreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          createMany: {
            args: Prisma.FamilyTreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilyTreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>[]
          }
          delete: {
            args: Prisma.FamilyTreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          update: {
            args: Prisma.FamilyTreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          deleteMany: {
            args: Prisma.FamilyTreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyTreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FamilyTreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>[]
          }
          upsert: {
            args: Prisma.FamilyTreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyTreePayload>
          }
          aggregate: {
            args: Prisma.FamilyTreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyTree>
          }
          groupBy: {
            args: Prisma.FamilyTreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyTreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyTreeCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyTreeCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      Relationship: {
        payload: Prisma.$RelationshipPayload<ExtArgs>
        fields: Prisma.RelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findFirst: {
            args: Prisma.RelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findMany: {
            args: Prisma.RelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          create: {
            args: Prisma.RelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          createMany: {
            args: Prisma.RelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          delete: {
            args: Prisma.RelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          update: {
            args: Prisma.RelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          deleteMany: {
            args: Prisma.RelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          upsert: {
            args: Prisma.RelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          aggregate: {
            args: Prisma.RelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationship>
          }
          groupBy: {
            args: Prisma.RelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<RelationshipCountAggregateOutputType> | number
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
    familyTree?: FamilyTreeOmit
    node?: NodeOmit
    relationship?: RelationshipOmit
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
    familyTrees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyTrees?: boolean | UserCountOutputTypeCountFamilyTreesArgs
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
  export type UserCountOutputTypeCountFamilyTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyTreeWhereInput
  }


  /**
   * Count Type FamilyTreeCountOutputType
   */

  export type FamilyTreeCountOutputType = {
    nodes: number
  }

  export type FamilyTreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | FamilyTreeCountOutputTypeCountNodesArgs
  }

  // Custom InputTypes
  /**
   * FamilyTreeCountOutputType without action
   */
  export type FamilyTreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTreeCountOutputType
     */
    select?: FamilyTreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyTreeCountOutputType without action
   */
  export type FamilyTreeCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }


  /**
   * Count Type NodeCountOutputType
   */

  export type NodeCountOutputType = {
    relationshipsAsPerson1: number
    relationshipsAsPerson2: number
  }

  export type NodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relationshipsAsPerson1?: boolean | NodeCountOutputTypeCountRelationshipsAsPerson1Args
    relationshipsAsPerson2?: boolean | NodeCountOutputTypeCountRelationshipsAsPerson2Args
  }

  // Custom InputTypes
  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeCountOutputType
     */
    select?: NodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountRelationshipsAsPerson1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountRelationshipsAsPerson2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
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
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
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
    email: string
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
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyTrees?: boolean | User$familyTreesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyTrees?: boolean | User$familyTreesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      familyTrees: Prisma.$FamilyTreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    familyTrees<T extends User$familyTreesArgs<ExtArgs> = {}>(args?: Subset<T, User$familyTreesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
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
   * User.familyTrees
   */
  export type User$familyTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    where?: FamilyTreeWhereInput
    orderBy?: FamilyTreeOrderByWithRelationInput | FamilyTreeOrderByWithRelationInput[]
    cursor?: FamilyTreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyTreeScalarFieldEnum | FamilyTreeScalarFieldEnum[]
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
   * Model FamilyTree
   */

  export type AggregateFamilyTree = {
    _count: FamilyTreeCountAggregateOutputType | null
    _min: FamilyTreeMinAggregateOutputType | null
    _max: FamilyTreeMaxAggregateOutputType | null
  }

  export type FamilyTreeMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    treeName: string | null
    description: string | null
    countryOfOrigin: string | null
    privacyLevel: $Enums.PrivacyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyTreeMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    treeName: string | null
    description: string | null
    countryOfOrigin: string | null
    privacyLevel: $Enums.PrivacyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyTreeCountAggregateOutputType = {
    id: number
    ownerId: number
    treeName: number
    description: number
    countryOfOrigin: number
    privacyLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamilyTreeMinAggregateInputType = {
    id?: true
    ownerId?: true
    treeName?: true
    description?: true
    countryOfOrigin?: true
    privacyLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyTreeMaxAggregateInputType = {
    id?: true
    ownerId?: true
    treeName?: true
    description?: true
    countryOfOrigin?: true
    privacyLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyTreeCountAggregateInputType = {
    id?: true
    ownerId?: true
    treeName?: true
    description?: true
    countryOfOrigin?: true
    privacyLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamilyTreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyTree to aggregate.
     */
    where?: FamilyTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyTrees to fetch.
     */
    orderBy?: FamilyTreeOrderByWithRelationInput | FamilyTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyTrees
    **/
    _count?: true | FamilyTreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyTreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyTreeMaxAggregateInputType
  }

  export type GetFamilyTreeAggregateType<T extends FamilyTreeAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyTree[P]>
      : GetScalarType<T[P], AggregateFamilyTree[P]>
  }




  export type FamilyTreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyTreeWhereInput
    orderBy?: FamilyTreeOrderByWithAggregationInput | FamilyTreeOrderByWithAggregationInput[]
    by: FamilyTreeScalarFieldEnum[] | FamilyTreeScalarFieldEnum
    having?: FamilyTreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyTreeCountAggregateInputType | true
    _min?: FamilyTreeMinAggregateInputType
    _max?: FamilyTreeMaxAggregateInputType
  }

  export type FamilyTreeGroupByOutputType = {
    id: string
    ownerId: string
    treeName: string
    description: string | null
    countryOfOrigin: string | null
    privacyLevel: $Enums.PrivacyLevel
    createdAt: Date
    updatedAt: Date
    _count: FamilyTreeCountAggregateOutputType | null
    _min: FamilyTreeMinAggregateOutputType | null
    _max: FamilyTreeMaxAggregateOutputType | null
  }

  type GetFamilyTreeGroupByPayload<T extends FamilyTreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyTreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyTreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyTreeGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyTreeGroupByOutputType[P]>
        }
      >
    >


  export type FamilyTreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    treeName?: boolean
    description?: boolean
    countryOfOrigin?: boolean
    privacyLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | FamilyTree$nodesArgs<ExtArgs>
    _count?: boolean | FamilyTreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyTree"]>

  export type FamilyTreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    treeName?: boolean
    description?: boolean
    countryOfOrigin?: boolean
    privacyLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyTree"]>

  export type FamilyTreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    treeName?: boolean
    description?: boolean
    countryOfOrigin?: boolean
    privacyLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyTree"]>

  export type FamilyTreeSelectScalar = {
    id?: boolean
    ownerId?: boolean
    treeName?: boolean
    description?: boolean
    countryOfOrigin?: boolean
    privacyLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamilyTreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "treeName" | "description" | "countryOfOrigin" | "privacyLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["familyTree"]>
  export type FamilyTreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | FamilyTree$nodesArgs<ExtArgs>
    _count?: boolean | FamilyTreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamilyTreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FamilyTreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FamilyTreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyTree"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      nodes: Prisma.$NodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      treeName: string
      description: string | null
      countryOfOrigin: string | null
      privacyLevel: $Enums.PrivacyLevel
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["familyTree"]>
    composites: {}
  }

  type FamilyTreeGetPayload<S extends boolean | null | undefined | FamilyTreeDefaultArgs> = $Result.GetResult<Prisma.$FamilyTreePayload, S>

  type FamilyTreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyTreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyTreeCountAggregateInputType | true
    }

  export interface FamilyTreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyTree'], meta: { name: 'FamilyTree' } }
    /**
     * Find zero or one FamilyTree that matches the filter.
     * @param {FamilyTreeFindUniqueArgs} args - Arguments to find a FamilyTree
     * @example
     * // Get one FamilyTree
     * const familyTree = await prisma.familyTree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyTreeFindUniqueArgs>(args: SelectSubset<T, FamilyTreeFindUniqueArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FamilyTree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyTreeFindUniqueOrThrowArgs} args - Arguments to find a FamilyTree
     * @example
     * // Get one FamilyTree
     * const familyTree = await prisma.familyTree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyTreeFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyTreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyTree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeFindFirstArgs} args - Arguments to find a FamilyTree
     * @example
     * // Get one FamilyTree
     * const familyTree = await prisma.familyTree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyTreeFindFirstArgs>(args?: SelectSubset<T, FamilyTreeFindFirstArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyTree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeFindFirstOrThrowArgs} args - Arguments to find a FamilyTree
     * @example
     * // Get one FamilyTree
     * const familyTree = await prisma.familyTree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyTreeFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyTreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FamilyTrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyTrees
     * const familyTrees = await prisma.familyTree.findMany()
     * 
     * // Get first 10 FamilyTrees
     * const familyTrees = await prisma.familyTree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyTreeWithIdOnly = await prisma.familyTree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyTreeFindManyArgs>(args?: SelectSubset<T, FamilyTreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FamilyTree.
     * @param {FamilyTreeCreateArgs} args - Arguments to create a FamilyTree.
     * @example
     * // Create one FamilyTree
     * const FamilyTree = await prisma.familyTree.create({
     *   data: {
     *     // ... data to create a FamilyTree
     *   }
     * })
     * 
     */
    create<T extends FamilyTreeCreateArgs>(args: SelectSubset<T, FamilyTreeCreateArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FamilyTrees.
     * @param {FamilyTreeCreateManyArgs} args - Arguments to create many FamilyTrees.
     * @example
     * // Create many FamilyTrees
     * const familyTree = await prisma.familyTree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyTreeCreateManyArgs>(args?: SelectSubset<T, FamilyTreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FamilyTrees and returns the data saved in the database.
     * @param {FamilyTreeCreateManyAndReturnArgs} args - Arguments to create many FamilyTrees.
     * @example
     * // Create many FamilyTrees
     * const familyTree = await prisma.familyTree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FamilyTrees and only return the `id`
     * const familyTreeWithIdOnly = await prisma.familyTree.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilyTreeCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilyTreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FamilyTree.
     * @param {FamilyTreeDeleteArgs} args - Arguments to delete one FamilyTree.
     * @example
     * // Delete one FamilyTree
     * const FamilyTree = await prisma.familyTree.delete({
     *   where: {
     *     // ... filter to delete one FamilyTree
     *   }
     * })
     * 
     */
    delete<T extends FamilyTreeDeleteArgs>(args: SelectSubset<T, FamilyTreeDeleteArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FamilyTree.
     * @param {FamilyTreeUpdateArgs} args - Arguments to update one FamilyTree.
     * @example
     * // Update one FamilyTree
     * const familyTree = await prisma.familyTree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyTreeUpdateArgs>(args: SelectSubset<T, FamilyTreeUpdateArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FamilyTrees.
     * @param {FamilyTreeDeleteManyArgs} args - Arguments to filter FamilyTrees to delete.
     * @example
     * // Delete a few FamilyTrees
     * const { count } = await prisma.familyTree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyTreeDeleteManyArgs>(args?: SelectSubset<T, FamilyTreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyTrees
     * const familyTree = await prisma.familyTree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyTreeUpdateManyArgs>(args: SelectSubset<T, FamilyTreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyTrees and returns the data updated in the database.
     * @param {FamilyTreeUpdateManyAndReturnArgs} args - Arguments to update many FamilyTrees.
     * @example
     * // Update many FamilyTrees
     * const familyTree = await prisma.familyTree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FamilyTrees and only return the `id`
     * const familyTreeWithIdOnly = await prisma.familyTree.updateManyAndReturn({
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
    updateManyAndReturn<T extends FamilyTreeUpdateManyAndReturnArgs>(args: SelectSubset<T, FamilyTreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FamilyTree.
     * @param {FamilyTreeUpsertArgs} args - Arguments to update or create a FamilyTree.
     * @example
     * // Update or create a FamilyTree
     * const familyTree = await prisma.familyTree.upsert({
     *   create: {
     *     // ... data to create a FamilyTree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyTree we want to update
     *   }
     * })
     */
    upsert<T extends FamilyTreeUpsertArgs>(args: SelectSubset<T, FamilyTreeUpsertArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FamilyTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeCountArgs} args - Arguments to filter FamilyTrees to count.
     * @example
     * // Count the number of FamilyTrees
     * const count = await prisma.familyTree.count({
     *   where: {
     *     // ... the filter for the FamilyTrees we want to count
     *   }
     * })
    **/
    count<T extends FamilyTreeCountArgs>(
      args?: Subset<T, FamilyTreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyTreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyTreeAggregateArgs>(args: Subset<T, FamilyTreeAggregateArgs>): Prisma.PrismaPromise<GetFamilyTreeAggregateType<T>>

    /**
     * Group by FamilyTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyTreeGroupByArgs} args - Group by arguments.
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
      T extends FamilyTreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyTreeGroupByArgs['orderBy'] }
        : { orderBy?: FamilyTreeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyTreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyTree model
   */
  readonly fields: FamilyTreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyTree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyTreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends FamilyTree$nodesArgs<ExtArgs> = {}>(args?: Subset<T, FamilyTree$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FamilyTree model
   */
  interface FamilyTreeFieldRefs {
    readonly id: FieldRef<"FamilyTree", 'String'>
    readonly ownerId: FieldRef<"FamilyTree", 'String'>
    readonly treeName: FieldRef<"FamilyTree", 'String'>
    readonly description: FieldRef<"FamilyTree", 'String'>
    readonly countryOfOrigin: FieldRef<"FamilyTree", 'String'>
    readonly privacyLevel: FieldRef<"FamilyTree", 'PrivacyLevel'>
    readonly createdAt: FieldRef<"FamilyTree", 'DateTime'>
    readonly updatedAt: FieldRef<"FamilyTree", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FamilyTree findUnique
   */
  export type FamilyTreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter, which FamilyTree to fetch.
     */
    where: FamilyTreeWhereUniqueInput
  }

  /**
   * FamilyTree findUniqueOrThrow
   */
  export type FamilyTreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter, which FamilyTree to fetch.
     */
    where: FamilyTreeWhereUniqueInput
  }

  /**
   * FamilyTree findFirst
   */
  export type FamilyTreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter, which FamilyTree to fetch.
     */
    where?: FamilyTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyTrees to fetch.
     */
    orderBy?: FamilyTreeOrderByWithRelationInput | FamilyTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyTrees.
     */
    cursor?: FamilyTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyTrees.
     */
    distinct?: FamilyTreeScalarFieldEnum | FamilyTreeScalarFieldEnum[]
  }

  /**
   * FamilyTree findFirstOrThrow
   */
  export type FamilyTreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter, which FamilyTree to fetch.
     */
    where?: FamilyTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyTrees to fetch.
     */
    orderBy?: FamilyTreeOrderByWithRelationInput | FamilyTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyTrees.
     */
    cursor?: FamilyTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyTrees.
     */
    distinct?: FamilyTreeScalarFieldEnum | FamilyTreeScalarFieldEnum[]
  }

  /**
   * FamilyTree findMany
   */
  export type FamilyTreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter, which FamilyTrees to fetch.
     */
    where?: FamilyTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyTrees to fetch.
     */
    orderBy?: FamilyTreeOrderByWithRelationInput | FamilyTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyTrees.
     */
    cursor?: FamilyTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyTrees.
     */
    skip?: number
    distinct?: FamilyTreeScalarFieldEnum | FamilyTreeScalarFieldEnum[]
  }

  /**
   * FamilyTree create
   */
  export type FamilyTreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyTree.
     */
    data: XOR<FamilyTreeCreateInput, FamilyTreeUncheckedCreateInput>
  }

  /**
   * FamilyTree createMany
   */
  export type FamilyTreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyTrees.
     */
    data: FamilyTreeCreateManyInput | FamilyTreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FamilyTree createManyAndReturn
   */
  export type FamilyTreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * The data used to create many FamilyTrees.
     */
    data: FamilyTreeCreateManyInput | FamilyTreeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FamilyTree update
   */
  export type FamilyTreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyTree.
     */
    data: XOR<FamilyTreeUpdateInput, FamilyTreeUncheckedUpdateInput>
    /**
     * Choose, which FamilyTree to update.
     */
    where: FamilyTreeWhereUniqueInput
  }

  /**
   * FamilyTree updateMany
   */
  export type FamilyTreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyTrees.
     */
    data: XOR<FamilyTreeUpdateManyMutationInput, FamilyTreeUncheckedUpdateManyInput>
    /**
     * Filter which FamilyTrees to update
     */
    where?: FamilyTreeWhereInput
    /**
     * Limit how many FamilyTrees to update.
     */
    limit?: number
  }

  /**
   * FamilyTree updateManyAndReturn
   */
  export type FamilyTreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * The data used to update FamilyTrees.
     */
    data: XOR<FamilyTreeUpdateManyMutationInput, FamilyTreeUncheckedUpdateManyInput>
    /**
     * Filter which FamilyTrees to update
     */
    where?: FamilyTreeWhereInput
    /**
     * Limit how many FamilyTrees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FamilyTree upsert
   */
  export type FamilyTreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyTree to update in case it exists.
     */
    where: FamilyTreeWhereUniqueInput
    /**
     * In case the FamilyTree found by the `where` argument doesn't exist, create a new FamilyTree with this data.
     */
    create: XOR<FamilyTreeCreateInput, FamilyTreeUncheckedCreateInput>
    /**
     * In case the FamilyTree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyTreeUpdateInput, FamilyTreeUncheckedUpdateInput>
  }

  /**
   * FamilyTree delete
   */
  export type FamilyTreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
    /**
     * Filter which FamilyTree to delete.
     */
    where: FamilyTreeWhereUniqueInput
  }

  /**
   * FamilyTree deleteMany
   */
  export type FamilyTreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyTrees to delete
     */
    where?: FamilyTreeWhereInput
    /**
     * Limit how many FamilyTrees to delete.
     */
    limit?: number
  }

  /**
   * FamilyTree.nodes
   */
  export type FamilyTree$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * FamilyTree without action
   */
  export type FamilyTreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyTree
     */
    select?: FamilyTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyTree
     */
    omit?: FamilyTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyTreeInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    familyTreeId: string | null
    firstName: string | null
    lastName: string | null
    maidenName: string | null
    gender: string | null
    bio: string | null
    profileImageUrl: string | null
    dateOfBirth: Date | null
    dateOfDeath: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    familyTreeId: string | null
    firstName: string | null
    lastName: string | null
    maidenName: string | null
    gender: string | null
    bio: string | null
    profileImageUrl: string | null
    dateOfBirth: Date | null
    dateOfDeath: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    familyTreeId: number
    firstName: number
    lastName: number
    maidenName: number
    gender: number
    bio: number
    profileImageUrl: number
    dateOfBirth: number
    dateOfDeath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeMinAggregateInputType = {
    id?: true
    familyTreeId?: true
    firstName?: true
    lastName?: true
    maidenName?: true
    gender?: true
    bio?: true
    profileImageUrl?: true
    dateOfBirth?: true
    dateOfDeath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    familyTreeId?: true
    firstName?: true
    lastName?: true
    maidenName?: true
    gender?: true
    bio?: true
    profileImageUrl?: true
    dateOfBirth?: true
    dateOfDeath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    familyTreeId?: true
    firstName?: true
    lastName?: true
    maidenName?: true
    gender?: true
    bio?: true
    profileImageUrl?: true
    dateOfBirth?: true
    dateOfDeath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    familyTreeId: string
    firstName: string
    lastName: string | null
    maidenName: string | null
    gender: string | null
    bio: string | null
    profileImageUrl: string | null
    dateOfBirth: Date | null
    dateOfDeath: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyTreeId?: boolean
    firstName?: boolean
    lastName?: boolean
    maidenName?: boolean
    gender?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    dateOfBirth?: boolean
    dateOfDeath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
    relationshipsAsPerson1?: boolean | Node$relationshipsAsPerson1Args<ExtArgs>
    relationshipsAsPerson2?: boolean | Node$relationshipsAsPerson2Args<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyTreeId?: boolean
    firstName?: boolean
    lastName?: boolean
    maidenName?: boolean
    gender?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    dateOfBirth?: boolean
    dateOfDeath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyTreeId?: boolean
    firstName?: boolean
    lastName?: boolean
    maidenName?: boolean
    gender?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    dateOfBirth?: boolean
    dateOfDeath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    familyTreeId?: boolean
    firstName?: boolean
    lastName?: boolean
    maidenName?: boolean
    gender?: boolean
    bio?: boolean
    profileImageUrl?: boolean
    dateOfBirth?: boolean
    dateOfDeath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyTreeId" | "firstName" | "lastName" | "maidenName" | "gender" | "bio" | "profileImageUrl" | "dateOfBirth" | "dateOfDeath" | "createdAt" | "updatedAt", ExtArgs["result"]["node"]>
  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
    relationshipsAsPerson1?: boolean | Node$relationshipsAsPerson1Args<ExtArgs>
    relationshipsAsPerson2?: boolean | Node$relationshipsAsPerson2Args<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyTree?: boolean | FamilyTreeDefaultArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      familyTree: Prisma.$FamilyTreePayload<ExtArgs>
      relationshipsAsPerson1: Prisma.$RelationshipPayload<ExtArgs>[]
      relationshipsAsPerson2: Prisma.$RelationshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyTreeId: string
      firstName: string
      lastName: string | null
      maidenName: string | null
      gender: string | null
      bio: string | null
      profileImageUrl: string | null
      dateOfBirth: Date | null
      dateOfDeath: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodeUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.updateManyAndReturn({
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
    updateManyAndReturn<T extends NodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyTree<T extends FamilyTreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyTreeDefaultArgs<ExtArgs>>): Prisma__FamilyTreeClient<$Result.GetResult<Prisma.$FamilyTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relationshipsAsPerson1<T extends Node$relationshipsAsPerson1Args<ExtArgs> = {}>(args?: Subset<T, Node$relationshipsAsPerson1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relationshipsAsPerson2<T extends Node$relationshipsAsPerson2Args<ExtArgs> = {}>(args?: Subset<T, Node$relationshipsAsPerson2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Node model
   */
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly familyTreeId: FieldRef<"Node", 'String'>
    readonly firstName: FieldRef<"Node", 'String'>
    readonly lastName: FieldRef<"Node", 'String'>
    readonly maidenName: FieldRef<"Node", 'String'>
    readonly gender: FieldRef<"Node", 'String'>
    readonly bio: FieldRef<"Node", 'String'>
    readonly profileImageUrl: FieldRef<"Node", 'String'>
    readonly dateOfBirth: FieldRef<"Node", 'DateTime'>
    readonly dateOfDeath: FieldRef<"Node", 'DateTime'>
    readonly createdAt: FieldRef<"Node", 'DateTime'>
    readonly updatedAt: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Node updateManyAndReturn
   */
  export type NodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Node.relationshipsAsPerson1
   */
  export type Node$relationshipsAsPerson1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Node.relationshipsAsPerson2
   */
  export type Node$relationshipsAsPerson2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model Relationship
   */

  export type AggregateRelationship = {
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  export type RelationshipAvgAggregateOutputType = {
    id: number | null
  }

  export type RelationshipSumAggregateOutputType = {
    id: number | null
  }

  export type RelationshipMinAggregateOutputType = {
    id: number | null
    person1Id: string | null
    person2Id: string | null
    relationshipType: $Enums.RelationshipType | null
    startDate: Date | null
    endDate: Date | null
  }

  export type RelationshipMaxAggregateOutputType = {
    id: number | null
    person1Id: string | null
    person2Id: string | null
    relationshipType: $Enums.RelationshipType | null
    startDate: Date | null
    endDate: Date | null
  }

  export type RelationshipCountAggregateOutputType = {
    id: number
    person1Id: number
    person2Id: number
    relationshipType: number
    startDate: number
    endDate: number
    _all: number
  }


  export type RelationshipAvgAggregateInputType = {
    id?: true
  }

  export type RelationshipSumAggregateInputType = {
    id?: true
  }

  export type RelationshipMinAggregateInputType = {
    id?: true
    person1Id?: true
    person2Id?: true
    relationshipType?: true
    startDate?: true
    endDate?: true
  }

  export type RelationshipMaxAggregateInputType = {
    id?: true
    person1Id?: true
    person2Id?: true
    relationshipType?: true
    startDate?: true
    endDate?: true
  }

  export type RelationshipCountAggregateInputType = {
    id?: true
    person1Id?: true
    person2Id?: true
    relationshipType?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type RelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship to aggregate.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationships
    **/
    _count?: true | RelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelationshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelationshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationshipMaxAggregateInputType
  }

  export type GetRelationshipAggregateType<T extends RelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship[P]>
      : GetScalarType<T[P], AggregateRelationship[P]>
  }




  export type RelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithAggregationInput | RelationshipOrderByWithAggregationInput[]
    by: RelationshipScalarFieldEnum[] | RelationshipScalarFieldEnum
    having?: RelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationshipCountAggregateInputType | true
    _avg?: RelationshipAvgAggregateInputType
    _sum?: RelationshipSumAggregateInputType
    _min?: RelationshipMinAggregateInputType
    _max?: RelationshipMaxAggregateInputType
  }

  export type RelationshipGroupByOutputType = {
    id: number
    person1Id: string
    person2Id: string
    relationshipType: $Enums.RelationshipType
    startDate: Date | null
    endDate: Date | null
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  type GetRelationshipGroupByPayload<T extends RelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
        }
      >
    >


  export type RelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person1Id?: boolean
    person2Id?: boolean
    relationshipType?: boolean
    startDate?: boolean
    endDate?: boolean
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person1Id?: boolean
    person2Id?: boolean
    relationshipType?: boolean
    startDate?: boolean
    endDate?: boolean
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person1Id?: boolean
    person2Id?: boolean
    relationshipType?: boolean
    startDate?: boolean
    endDate?: boolean
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectScalar = {
    id?: boolean
    person1Id?: boolean
    person2Id?: boolean
    relationshipType?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type RelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "person1Id" | "person2Id" | "relationshipType" | "startDate" | "endDate", ExtArgs["result"]["relationship"]>
  export type RelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }
  export type RelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }
  export type RelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person1?: boolean | NodeDefaultArgs<ExtArgs>
    person2?: boolean | NodeDefaultArgs<ExtArgs>
  }

  export type $RelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship"
    objects: {
      person1: Prisma.$NodePayload<ExtArgs>
      person2: Prisma.$NodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      person1Id: string
      person2Id: string
      relationshipType: $Enums.RelationshipType
      startDate: Date | null
      endDate: Date | null
    }, ExtArgs["result"]["relationship"]>
    composites: {}
  }

  type RelationshipGetPayload<S extends boolean | null | undefined | RelationshipDefaultArgs> = $Result.GetResult<Prisma.$RelationshipPayload, S>

  type RelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationshipCountAggregateInputType | true
    }

  export interface RelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship'], meta: { name: 'Relationship' } }
    /**
     * Find zero or one Relationship that matches the filter.
     * @param {RelationshipFindUniqueArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationshipFindUniqueArgs>(args: SelectSubset<T, RelationshipFindUniqueArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationshipFindUniqueOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationshipFindFirstArgs>(args?: SelectSubset<T, RelationshipFindFirstArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationships
     * const relationships = await prisma.relationship.findMany()
     * 
     * // Get first 10 Relationships
     * const relationships = await prisma.relationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationshipWithIdOnly = await prisma.relationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationshipFindManyArgs>(args?: SelectSubset<T, RelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relationship.
     * @param {RelationshipCreateArgs} args - Arguments to create a Relationship.
     * @example
     * // Create one Relationship
     * const Relationship = await prisma.relationship.create({
     *   data: {
     *     // ... data to create a Relationship
     *   }
     * })
     * 
     */
    create<T extends RelationshipCreateArgs>(args: SelectSubset<T, RelationshipCreateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relationships.
     * @param {RelationshipCreateManyArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationshipCreateManyArgs>(args?: SelectSubset<T, RelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relationships and returns the data saved in the database.
     * @param {RelationshipCreateManyAndReturnArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relationship.
     * @param {RelationshipDeleteArgs} args - Arguments to delete one Relationship.
     * @example
     * // Delete one Relationship
     * const Relationship = await prisma.relationship.delete({
     *   where: {
     *     // ... filter to delete one Relationship
     *   }
     * })
     * 
     */
    delete<T extends RelationshipDeleteArgs>(args: SelectSubset<T, RelationshipDeleteArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relationship.
     * @param {RelationshipUpdateArgs} args - Arguments to update one Relationship.
     * @example
     * // Update one Relationship
     * const relationship = await prisma.relationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationshipUpdateArgs>(args: SelectSubset<T, RelationshipUpdateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relationships.
     * @param {RelationshipDeleteManyArgs} args - Arguments to filter Relationships to delete.
     * @example
     * // Delete a few Relationships
     * const { count } = await prisma.relationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationshipDeleteManyArgs>(args?: SelectSubset<T, RelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationshipUpdateManyArgs>(args: SelectSubset<T, RelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships and returns the data updated in the database.
     * @param {RelationshipUpdateManyAndReturnArgs} args - Arguments to update many Relationships.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relationship.
     * @param {RelationshipUpsertArgs} args - Arguments to update or create a Relationship.
     * @example
     * // Update or create a Relationship
     * const relationship = await prisma.relationship.upsert({
     *   create: {
     *     // ... data to create a Relationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship we want to update
     *   }
     * })
     */
    upsert<T extends RelationshipUpsertArgs>(args: SelectSubset<T, RelationshipUpsertArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipCountArgs} args - Arguments to filter Relationships to count.
     * @example
     * // Count the number of Relationships
     * const count = await prisma.relationship.count({
     *   where: {
     *     // ... the filter for the Relationships we want to count
     *   }
     * })
    **/
    count<T extends RelationshipCountArgs>(
      args?: Subset<T, RelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationshipAggregateArgs>(args: Subset<T, RelationshipAggregateArgs>): Prisma.PrismaPromise<GetRelationshipAggregateType<T>>

    /**
     * Group by Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipGroupByArgs} args - Group by arguments.
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
      T extends RelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationshipGroupByArgs['orderBy'] }
        : { orderBy?: RelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship model
   */
  readonly fields: RelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person1<T extends NodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodeDefaultArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person2<T extends NodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodeDefaultArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Relationship model
   */
  interface RelationshipFieldRefs {
    readonly id: FieldRef<"Relationship", 'Int'>
    readonly person1Id: FieldRef<"Relationship", 'String'>
    readonly person2Id: FieldRef<"Relationship", 'String'>
    readonly relationshipType: FieldRef<"Relationship", 'RelationshipType'>
    readonly startDate: FieldRef<"Relationship", 'DateTime'>
    readonly endDate: FieldRef<"Relationship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Relationship findUnique
   */
  export type RelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findUniqueOrThrow
   */
  export type RelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findFirst
   */
  export type RelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findFirstOrThrow
   */
  export type RelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findMany
   */
  export type RelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationships to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship create
   */
  export type RelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship.
     */
    data: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
  }

  /**
   * Relationship createMany
   */
  export type RelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relationship createManyAndReturn
   */
  export type RelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship update
   */
  export type RelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship.
     */
    data: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
    /**
     * Choose, which Relationship to update.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship updateMany
   */
  export type RelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
  }

  /**
   * Relationship updateManyAndReturn
   */
  export type RelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship upsert
   */
  export type RelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship to update in case it exists.
     */
    where: RelationshipWhereUniqueInput
    /**
     * In case the Relationship found by the `where` argument doesn't exist, create a new Relationship with this data.
     */
    create: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
    /**
     * In case the Relationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
  }

  /**
   * Relationship delete
   */
  export type RelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter which Relationship to delete.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship deleteMany
   */
  export type RelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationships to delete
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to delete.
     */
    limit?: number
  }

  /**
   * Relationship without action
   */
  export type RelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
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
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FamilyTreeScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    treeName: 'treeName',
    description: 'description',
    countryOfOrigin: 'countryOfOrigin',
    privacyLevel: 'privacyLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamilyTreeScalarFieldEnum = (typeof FamilyTreeScalarFieldEnum)[keyof typeof FamilyTreeScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    familyTreeId: 'familyTreeId',
    firstName: 'firstName',
    lastName: 'lastName',
    maidenName: 'maidenName',
    gender: 'gender',
    bio: 'bio',
    profileImageUrl: 'profileImageUrl',
    dateOfBirth: 'dateOfBirth',
    dateOfDeath: 'dateOfDeath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const RelationshipScalarFieldEnum: {
    id: 'id',
    person1Id: 'person1Id',
    person2Id: 'person2Id',
    relationshipType: 'relationshipType',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type RelationshipScalarFieldEnum = (typeof RelationshipScalarFieldEnum)[keyof typeof RelationshipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PrivacyLevel'
   */
  export type EnumPrivacyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyLevel'>
    


  /**
   * Reference to a field of type 'PrivacyLevel[]'
   */
  export type ListEnumPrivacyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    familyTrees?: FamilyTreeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyTrees?: FamilyTreeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    familyTrees?: FamilyTreeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FamilyTreeWhereInput = {
    AND?: FamilyTreeWhereInput | FamilyTreeWhereInput[]
    OR?: FamilyTreeWhereInput[]
    NOT?: FamilyTreeWhereInput | FamilyTreeWhereInput[]
    id?: StringFilter<"FamilyTree"> | string
    ownerId?: StringFilter<"FamilyTree"> | string
    treeName?: StringFilter<"FamilyTree"> | string
    description?: StringNullableFilter<"FamilyTree"> | string | null
    countryOfOrigin?: StringNullableFilter<"FamilyTree"> | string | null
    privacyLevel?: EnumPrivacyLevelFilter<"FamilyTree"> | $Enums.PrivacyLevel
    createdAt?: DateTimeFilter<"FamilyTree"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyTree"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
  }

  export type FamilyTreeOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    treeName?: SortOrder
    description?: SortOrderInput | SortOrder
    countryOfOrigin?: SortOrderInput | SortOrder
    privacyLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    nodes?: NodeOrderByRelationAggregateInput
  }

  export type FamilyTreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyTreeWhereInput | FamilyTreeWhereInput[]
    OR?: FamilyTreeWhereInput[]
    NOT?: FamilyTreeWhereInput | FamilyTreeWhereInput[]
    ownerId?: StringFilter<"FamilyTree"> | string
    treeName?: StringFilter<"FamilyTree"> | string
    description?: StringNullableFilter<"FamilyTree"> | string | null
    countryOfOrigin?: StringNullableFilter<"FamilyTree"> | string | null
    privacyLevel?: EnumPrivacyLevelFilter<"FamilyTree"> | $Enums.PrivacyLevel
    createdAt?: DateTimeFilter<"FamilyTree"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyTree"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
  }, "id">

  export type FamilyTreeOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    treeName?: SortOrder
    description?: SortOrderInput | SortOrder
    countryOfOrigin?: SortOrderInput | SortOrder
    privacyLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamilyTreeCountOrderByAggregateInput
    _max?: FamilyTreeMaxOrderByAggregateInput
    _min?: FamilyTreeMinOrderByAggregateInput
  }

  export type FamilyTreeScalarWhereWithAggregatesInput = {
    AND?: FamilyTreeScalarWhereWithAggregatesInput | FamilyTreeScalarWhereWithAggregatesInput[]
    OR?: FamilyTreeScalarWhereWithAggregatesInput[]
    NOT?: FamilyTreeScalarWhereWithAggregatesInput | FamilyTreeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FamilyTree"> | string
    ownerId?: StringWithAggregatesFilter<"FamilyTree"> | string
    treeName?: StringWithAggregatesFilter<"FamilyTree"> | string
    description?: StringNullableWithAggregatesFilter<"FamilyTree"> | string | null
    countryOfOrigin?: StringNullableWithAggregatesFilter<"FamilyTree"> | string | null
    privacyLevel?: EnumPrivacyLevelWithAggregatesFilter<"FamilyTree"> | $Enums.PrivacyLevel
    createdAt?: DateTimeWithAggregatesFilter<"FamilyTree"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FamilyTree"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    familyTreeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    maidenName?: StringNullableFilter<"Node"> | string | null
    gender?: StringNullableFilter<"Node"> | string | null
    bio?: StringNullableFilter<"Node"> | string | null
    profileImageUrl?: StringNullableFilter<"Node"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Node"> | Date | string | null
    dateOfDeath?: DateTimeNullableFilter<"Node"> | Date | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    familyTree?: XOR<FamilyTreeScalarRelationFilter, FamilyTreeWhereInput>
    relationshipsAsPerson1?: RelationshipListRelationFilter
    relationshipsAsPerson2?: RelationshipListRelationFilter
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    familyTreeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    maidenName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    dateOfDeath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyTree?: FamilyTreeOrderByWithRelationInput
    relationshipsAsPerson1?: RelationshipOrderByRelationAggregateInput
    relationshipsAsPerson2?: RelationshipOrderByRelationAggregateInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    familyTreeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    maidenName?: StringNullableFilter<"Node"> | string | null
    gender?: StringNullableFilter<"Node"> | string | null
    bio?: StringNullableFilter<"Node"> | string | null
    profileImageUrl?: StringNullableFilter<"Node"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Node"> | Date | string | null
    dateOfDeath?: DateTimeNullableFilter<"Node"> | Date | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    familyTree?: XOR<FamilyTreeScalarRelationFilter, FamilyTreeWhereInput>
    relationshipsAsPerson1?: RelationshipListRelationFilter
    relationshipsAsPerson2?: RelationshipListRelationFilter
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    familyTreeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    maidenName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    dateOfDeath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    familyTreeId?: StringWithAggregatesFilter<"Node"> | string
    firstName?: StringWithAggregatesFilter<"Node"> | string
    lastName?: StringNullableWithAggregatesFilter<"Node"> | string | null
    maidenName?: StringNullableWithAggregatesFilter<"Node"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Node"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Node"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"Node"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Node"> | Date | string | null
    dateOfDeath?: DateTimeNullableWithAggregatesFilter<"Node"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type RelationshipWhereInput = {
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    id?: IntFilter<"Relationship"> | number
    person1Id?: StringFilter<"Relationship"> | string
    person2Id?: StringFilter<"Relationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"Relationship"> | $Enums.RelationshipType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    person1?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    person2?: XOR<NodeScalarRelationFilter, NodeWhereInput>
  }

  export type RelationshipOrderByWithRelationInput = {
    id?: SortOrder
    person1Id?: SortOrder
    person2Id?: SortOrder
    relationshipType?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    person1?: NodeOrderByWithRelationInput
    person2?: NodeOrderByWithRelationInput
  }

  export type RelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    person1Id_person2Id_relationshipType?: RelationshipPerson1IdPerson2IdRelationshipTypeCompoundUniqueInput
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    person1Id?: StringFilter<"Relationship"> | string
    person2Id?: StringFilter<"Relationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"Relationship"> | $Enums.RelationshipType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    person1?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    person2?: XOR<NodeScalarRelationFilter, NodeWhereInput>
  }, "id" | "person1Id_person2Id_relationshipType">

  export type RelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    person1Id?: SortOrder
    person2Id?: SortOrder
    relationshipType?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: RelationshipCountOrderByAggregateInput
    _avg?: RelationshipAvgOrderByAggregateInput
    _max?: RelationshipMaxOrderByAggregateInput
    _min?: RelationshipMinOrderByAggregateInput
    _sum?: RelationshipSumOrderByAggregateInput
  }

  export type RelationshipScalarWhereWithAggregatesInput = {
    AND?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    OR?: RelationshipScalarWhereWithAggregatesInput[]
    NOT?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relationship"> | number
    person1Id?: StringWithAggregatesFilter<"Relationship"> | string
    person2Id?: StringWithAggregatesFilter<"Relationship"> | string
    relationshipType?: EnumRelationshipTypeWithAggregatesFilter<"Relationship"> | $Enums.RelationshipType
    startDate?: DateTimeNullableWithAggregatesFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Relationship"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    familyTrees?: FamilyTreeCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    familyTrees?: FamilyTreeUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyTrees?: FamilyTreeUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyTrees?: FamilyTreeUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyTreeCreateInput = {
    id?: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFamilyTreesInput
    nodes?: NodeCreateNestedManyWithoutFamilyTreeInput
  }

  export type FamilyTreeUncheckedCreateInput = {
    id?: string
    ownerId: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutFamilyTreeInput
  }

  export type FamilyTreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFamilyTreesNestedInput
    nodes?: NodeUpdateManyWithoutFamilyTreeNestedInput
  }

  export type FamilyTreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutFamilyTreeNestedInput
  }

  export type FamilyTreeCreateManyInput = {
    id?: string
    ownerId: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyTreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyTreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyTree: FamilyTreeCreateNestedOneWithoutNodesInput
    relationshipsAsPerson1?: RelationshipCreateNestedManyWithoutPerson1Input
    relationshipsAsPerson2?: RelationshipCreateNestedManyWithoutPerson2Input
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    familyTreeId: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationshipsAsPerson1?: RelationshipUncheckedCreateNestedManyWithoutPerson1Input
    relationshipsAsPerson2?: RelationshipUncheckedCreateNestedManyWithoutPerson2Input
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyTree?: FamilyTreeUpdateOneRequiredWithoutNodesNestedInput
    relationshipsAsPerson1?: RelationshipUpdateManyWithoutPerson1NestedInput
    relationshipsAsPerson2?: RelationshipUpdateManyWithoutPerson2NestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyTreeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationshipsAsPerson1?: RelationshipUncheckedUpdateManyWithoutPerson1NestedInput
    relationshipsAsPerson2?: RelationshipUncheckedUpdateManyWithoutPerson2NestedInput
  }

  export type NodeCreateManyInput = {
    id?: string
    familyTreeId: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyTreeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipCreateInput = {
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
    person1: NodeCreateNestedOneWithoutRelationshipsAsPerson1Input
    person2: NodeCreateNestedOneWithoutRelationshipsAsPerson2Input
  }

  export type RelationshipUncheckedCreateInput = {
    id?: number
    person1Id: string
    person2Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipUpdateInput = {
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person1?: NodeUpdateOneRequiredWithoutRelationshipsAsPerson1NestedInput
    person2?: NodeUpdateOneRequiredWithoutRelationshipsAsPerson2NestedInput
  }

  export type RelationshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    person1Id?: StringFieldUpdateOperationsInput | string
    person2Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelationshipCreateManyInput = {
    id?: number
    person1Id: string
    person2Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipUpdateManyMutationInput = {
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelationshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    person1Id?: StringFieldUpdateOperationsInput | string
    person2Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type FamilyTreeListRelationFilter = {
    every?: FamilyTreeWhereInput
    some?: FamilyTreeWhereInput
    none?: FamilyTreeWhereInput
  }

  export type FamilyTreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyTreeCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    treeName?: SortOrder
    description?: SortOrder
    countryOfOrigin?: SortOrder
    privacyLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyTreeMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    treeName?: SortOrder
    description?: SortOrder
    countryOfOrigin?: SortOrder
    privacyLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyTreeMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    treeName?: SortOrder
    description?: SortOrder
    countryOfOrigin?: SortOrder
    privacyLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>
    _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FamilyTreeScalarRelationFilter = {
    is?: FamilyTreeWhereInput
    isNot?: FamilyTreeWhereInput
  }

  export type RelationshipListRelationFilter = {
    every?: RelationshipWhereInput
    some?: RelationshipWhereInput
    none?: RelationshipWhereInput
  }

  export type RelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    familyTreeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maidenName?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    dateOfBirth?: SortOrder
    dateOfDeath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    familyTreeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maidenName?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    dateOfBirth?: SortOrder
    dateOfDeath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    familyTreeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maidenName?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    profileImageUrl?: SortOrder
    dateOfBirth?: SortOrder
    dateOfDeath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NodeScalarRelationFilter = {
    is?: NodeWhereInput
    isNot?: NodeWhereInput
  }

  export type RelationshipPerson1IdPerson2IdRelationshipTypeCompoundUniqueInput = {
    person1Id: string
    person2Id: string
    relationshipType: $Enums.RelationshipType
  }

  export type RelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    person1Id?: SortOrder
    person2Id?: SortOrder
    relationshipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type RelationshipAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    person1Id?: SortOrder
    person2Id?: SortOrder
    relationshipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type RelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    person1Id?: SortOrder
    person2Id?: SortOrder
    relationshipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type RelationshipSumOrderByAggregateInput = {
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

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type FamilyTreeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput> | FamilyTreeCreateWithoutOwnerInput[] | FamilyTreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutOwnerInput | FamilyTreeCreateOrConnectWithoutOwnerInput[]
    createMany?: FamilyTreeCreateManyOwnerInputEnvelope
    connect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
  }

  export type FamilyTreeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput> | FamilyTreeCreateWithoutOwnerInput[] | FamilyTreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutOwnerInput | FamilyTreeCreateOrConnectWithoutOwnerInput[]
    createMany?: FamilyTreeCreateManyOwnerInputEnvelope
    connect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FamilyTreeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput> | FamilyTreeCreateWithoutOwnerInput[] | FamilyTreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutOwnerInput | FamilyTreeCreateOrConnectWithoutOwnerInput[]
    upsert?: FamilyTreeUpsertWithWhereUniqueWithoutOwnerInput | FamilyTreeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FamilyTreeCreateManyOwnerInputEnvelope
    set?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    disconnect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    delete?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    connect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    update?: FamilyTreeUpdateWithWhereUniqueWithoutOwnerInput | FamilyTreeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FamilyTreeUpdateManyWithWhereWithoutOwnerInput | FamilyTreeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FamilyTreeScalarWhereInput | FamilyTreeScalarWhereInput[]
  }

  export type FamilyTreeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput> | FamilyTreeCreateWithoutOwnerInput[] | FamilyTreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutOwnerInput | FamilyTreeCreateOrConnectWithoutOwnerInput[]
    upsert?: FamilyTreeUpsertWithWhereUniqueWithoutOwnerInput | FamilyTreeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FamilyTreeCreateManyOwnerInputEnvelope
    set?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    disconnect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    delete?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    connect?: FamilyTreeWhereUniqueInput | FamilyTreeWhereUniqueInput[]
    update?: FamilyTreeUpdateWithWhereUniqueWithoutOwnerInput | FamilyTreeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FamilyTreeUpdateManyWithWhereWithoutOwnerInput | FamilyTreeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FamilyTreeScalarWhereInput | FamilyTreeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFamilyTreesInput = {
    create?: XOR<UserCreateWithoutFamilyTreesInput, UserUncheckedCreateWithoutFamilyTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyTreesInput
    connect?: UserWhereUniqueInput
  }

  export type NodeCreateNestedManyWithoutFamilyTreeInput = {
    create?: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput> | NodeCreateWithoutFamilyTreeInput[] | NodeUncheckedCreateWithoutFamilyTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutFamilyTreeInput | NodeCreateOrConnectWithoutFamilyTreeInput[]
    createMany?: NodeCreateManyFamilyTreeInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutFamilyTreeInput = {
    create?: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput> | NodeCreateWithoutFamilyTreeInput[] | NodeUncheckedCreateWithoutFamilyTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutFamilyTreeInput | NodeCreateOrConnectWithoutFamilyTreeInput[]
    createMany?: NodeCreateManyFamilyTreeInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPrivacyLevelFieldUpdateOperationsInput = {
    set?: $Enums.PrivacyLevel
  }

  export type UserUpdateOneRequiredWithoutFamilyTreesNestedInput = {
    create?: XOR<UserCreateWithoutFamilyTreesInput, UserUncheckedCreateWithoutFamilyTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyTreesInput
    upsert?: UserUpsertWithoutFamilyTreesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFamilyTreesInput, UserUpdateWithoutFamilyTreesInput>, UserUncheckedUpdateWithoutFamilyTreesInput>
  }

  export type NodeUpdateManyWithoutFamilyTreeNestedInput = {
    create?: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput> | NodeCreateWithoutFamilyTreeInput[] | NodeUncheckedCreateWithoutFamilyTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutFamilyTreeInput | NodeCreateOrConnectWithoutFamilyTreeInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutFamilyTreeInput | NodeUpsertWithWhereUniqueWithoutFamilyTreeInput[]
    createMany?: NodeCreateManyFamilyTreeInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutFamilyTreeInput | NodeUpdateWithWhereUniqueWithoutFamilyTreeInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutFamilyTreeInput | NodeUpdateManyWithWhereWithoutFamilyTreeInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutFamilyTreeNestedInput = {
    create?: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput> | NodeCreateWithoutFamilyTreeInput[] | NodeUncheckedCreateWithoutFamilyTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutFamilyTreeInput | NodeCreateOrConnectWithoutFamilyTreeInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutFamilyTreeInput | NodeUpsertWithWhereUniqueWithoutFamilyTreeInput[]
    createMany?: NodeCreateManyFamilyTreeInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutFamilyTreeInput | NodeUpdateWithWhereUniqueWithoutFamilyTreeInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutFamilyTreeInput | NodeUpdateManyWithWhereWithoutFamilyTreeInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type FamilyTreeCreateNestedOneWithoutNodesInput = {
    create?: XOR<FamilyTreeCreateWithoutNodesInput, FamilyTreeUncheckedCreateWithoutNodesInput>
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutNodesInput
    connect?: FamilyTreeWhereUniqueInput
  }

  export type RelationshipCreateNestedManyWithoutPerson1Input = {
    create?: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input> | RelationshipCreateWithoutPerson1Input[] | RelationshipUncheckedCreateWithoutPerson1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson1Input | RelationshipCreateOrConnectWithoutPerson1Input[]
    createMany?: RelationshipCreateManyPerson1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutPerson2Input = {
    create?: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input> | RelationshipCreateWithoutPerson2Input[] | RelationshipUncheckedCreateWithoutPerson2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson2Input | RelationshipCreateOrConnectWithoutPerson2Input[]
    createMany?: RelationshipCreateManyPerson2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutPerson1Input = {
    create?: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input> | RelationshipCreateWithoutPerson1Input[] | RelationshipUncheckedCreateWithoutPerson1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson1Input | RelationshipCreateOrConnectWithoutPerson1Input[]
    createMany?: RelationshipCreateManyPerson1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutPerson2Input = {
    create?: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input> | RelationshipCreateWithoutPerson2Input[] | RelationshipUncheckedCreateWithoutPerson2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson2Input | RelationshipCreateOrConnectWithoutPerson2Input[]
    createMany?: RelationshipCreateManyPerson2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FamilyTreeUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<FamilyTreeCreateWithoutNodesInput, FamilyTreeUncheckedCreateWithoutNodesInput>
    connectOrCreate?: FamilyTreeCreateOrConnectWithoutNodesInput
    upsert?: FamilyTreeUpsertWithoutNodesInput
    connect?: FamilyTreeWhereUniqueInput
    update?: XOR<XOR<FamilyTreeUpdateToOneWithWhereWithoutNodesInput, FamilyTreeUpdateWithoutNodesInput>, FamilyTreeUncheckedUpdateWithoutNodesInput>
  }

  export type RelationshipUpdateManyWithoutPerson1NestedInput = {
    create?: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input> | RelationshipCreateWithoutPerson1Input[] | RelationshipUncheckedCreateWithoutPerson1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson1Input | RelationshipCreateOrConnectWithoutPerson1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutPerson1Input | RelationshipUpsertWithWhereUniqueWithoutPerson1Input[]
    createMany?: RelationshipCreateManyPerson1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutPerson1Input | RelationshipUpdateWithWhereUniqueWithoutPerson1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutPerson1Input | RelationshipUpdateManyWithWhereWithoutPerson1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutPerson2NestedInput = {
    create?: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input> | RelationshipCreateWithoutPerson2Input[] | RelationshipUncheckedCreateWithoutPerson2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson2Input | RelationshipCreateOrConnectWithoutPerson2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutPerson2Input | RelationshipUpsertWithWhereUniqueWithoutPerson2Input[]
    createMany?: RelationshipCreateManyPerson2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutPerson2Input | RelationshipUpdateWithWhereUniqueWithoutPerson2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutPerson2Input | RelationshipUpdateManyWithWhereWithoutPerson2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutPerson1NestedInput = {
    create?: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input> | RelationshipCreateWithoutPerson1Input[] | RelationshipUncheckedCreateWithoutPerson1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson1Input | RelationshipCreateOrConnectWithoutPerson1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutPerson1Input | RelationshipUpsertWithWhereUniqueWithoutPerson1Input[]
    createMany?: RelationshipCreateManyPerson1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutPerson1Input | RelationshipUpdateWithWhereUniqueWithoutPerson1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutPerson1Input | RelationshipUpdateManyWithWhereWithoutPerson1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutPerson2NestedInput = {
    create?: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input> | RelationshipCreateWithoutPerson2Input[] | RelationshipUncheckedCreateWithoutPerson2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutPerson2Input | RelationshipCreateOrConnectWithoutPerson2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutPerson2Input | RelationshipUpsertWithWhereUniqueWithoutPerson2Input[]
    createMany?: RelationshipCreateManyPerson2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutPerson2Input | RelationshipUpdateWithWhereUniqueWithoutPerson2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutPerson2Input | RelationshipUpdateManyWithWhereWithoutPerson2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type NodeCreateNestedOneWithoutRelationshipsAsPerson1Input = {
    create?: XOR<NodeCreateWithoutRelationshipsAsPerson1Input, NodeUncheckedCreateWithoutRelationshipsAsPerson1Input>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationshipsAsPerson1Input
    connect?: NodeWhereUniqueInput
  }

  export type NodeCreateNestedOneWithoutRelationshipsAsPerson2Input = {
    create?: XOR<NodeCreateWithoutRelationshipsAsPerson2Input, NodeUncheckedCreateWithoutRelationshipsAsPerson2Input>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationshipsAsPerson2Input
    connect?: NodeWhereUniqueInput
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type NodeUpdateOneRequiredWithoutRelationshipsAsPerson1NestedInput = {
    create?: XOR<NodeCreateWithoutRelationshipsAsPerson1Input, NodeUncheckedCreateWithoutRelationshipsAsPerson1Input>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationshipsAsPerson1Input
    upsert?: NodeUpsertWithoutRelationshipsAsPerson1Input
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutRelationshipsAsPerson1Input, NodeUpdateWithoutRelationshipsAsPerson1Input>, NodeUncheckedUpdateWithoutRelationshipsAsPerson1Input>
  }

  export type NodeUpdateOneRequiredWithoutRelationshipsAsPerson2NestedInput = {
    create?: XOR<NodeCreateWithoutRelationshipsAsPerson2Input, NodeUncheckedCreateWithoutRelationshipsAsPerson2Input>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationshipsAsPerson2Input
    upsert?: NodeUpsertWithoutRelationshipsAsPerson2Input
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutRelationshipsAsPerson2Input, NodeUpdateWithoutRelationshipsAsPerson2Input>, NodeUncheckedUpdateWithoutRelationshipsAsPerson2Input>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel
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

  export type NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>
    _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
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

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type FamilyTreeCreateWithoutOwnerInput = {
    id?: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeCreateNestedManyWithoutFamilyTreeInput
  }

  export type FamilyTreeUncheckedCreateWithoutOwnerInput = {
    id?: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutFamilyTreeInput
  }

  export type FamilyTreeCreateOrConnectWithoutOwnerInput = {
    where: FamilyTreeWhereUniqueInput
    create: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput>
  }

  export type FamilyTreeCreateManyOwnerInputEnvelope = {
    data: FamilyTreeCreateManyOwnerInput | FamilyTreeCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FamilyTreeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FamilyTreeWhereUniqueInput
    update: XOR<FamilyTreeUpdateWithoutOwnerInput, FamilyTreeUncheckedUpdateWithoutOwnerInput>
    create: XOR<FamilyTreeCreateWithoutOwnerInput, FamilyTreeUncheckedCreateWithoutOwnerInput>
  }

  export type FamilyTreeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FamilyTreeWhereUniqueInput
    data: XOR<FamilyTreeUpdateWithoutOwnerInput, FamilyTreeUncheckedUpdateWithoutOwnerInput>
  }

  export type FamilyTreeUpdateManyWithWhereWithoutOwnerInput = {
    where: FamilyTreeScalarWhereInput
    data: XOR<FamilyTreeUpdateManyMutationInput, FamilyTreeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FamilyTreeScalarWhereInput = {
    AND?: FamilyTreeScalarWhereInput | FamilyTreeScalarWhereInput[]
    OR?: FamilyTreeScalarWhereInput[]
    NOT?: FamilyTreeScalarWhereInput | FamilyTreeScalarWhereInput[]
    id?: StringFilter<"FamilyTree"> | string
    ownerId?: StringFilter<"FamilyTree"> | string
    treeName?: StringFilter<"FamilyTree"> | string
    description?: StringNullableFilter<"FamilyTree"> | string | null
    countryOfOrigin?: StringNullableFilter<"FamilyTree"> | string | null
    privacyLevel?: EnumPrivacyLevelFilter<"FamilyTree"> | $Enums.PrivacyLevel
    createdAt?: DateTimeFilter<"FamilyTree"> | Date | string
    updatedAt?: DateTimeFilter<"FamilyTree"> | Date | string
  }

  export type UserCreateWithoutFamilyTreesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFamilyTreesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFamilyTreesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyTreesInput, UserUncheckedCreateWithoutFamilyTreesInput>
  }

  export type NodeCreateWithoutFamilyTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationshipsAsPerson1?: RelationshipCreateNestedManyWithoutPerson1Input
    relationshipsAsPerson2?: RelationshipCreateNestedManyWithoutPerson2Input
  }

  export type NodeUncheckedCreateWithoutFamilyTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationshipsAsPerson1?: RelationshipUncheckedCreateNestedManyWithoutPerson1Input
    relationshipsAsPerson2?: RelationshipUncheckedCreateNestedManyWithoutPerson2Input
  }

  export type NodeCreateOrConnectWithoutFamilyTreeInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput>
  }

  export type NodeCreateManyFamilyTreeInputEnvelope = {
    data: NodeCreateManyFamilyTreeInput | NodeCreateManyFamilyTreeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFamilyTreesInput = {
    update: XOR<UserUpdateWithoutFamilyTreesInput, UserUncheckedUpdateWithoutFamilyTreesInput>
    create: XOR<UserCreateWithoutFamilyTreesInput, UserUncheckedCreateWithoutFamilyTreesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFamilyTreesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFamilyTreesInput, UserUncheckedUpdateWithoutFamilyTreesInput>
  }

  export type UserUpdateWithoutFamilyTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFamilyTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUpsertWithWhereUniqueWithoutFamilyTreeInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutFamilyTreeInput, NodeUncheckedUpdateWithoutFamilyTreeInput>
    create: XOR<NodeCreateWithoutFamilyTreeInput, NodeUncheckedCreateWithoutFamilyTreeInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutFamilyTreeInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutFamilyTreeInput, NodeUncheckedUpdateWithoutFamilyTreeInput>
  }

  export type NodeUpdateManyWithWhereWithoutFamilyTreeInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutFamilyTreeInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    familyTreeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    maidenName?: StringNullableFilter<"Node"> | string | null
    gender?: StringNullableFilter<"Node"> | string | null
    bio?: StringNullableFilter<"Node"> | string | null
    profileImageUrl?: StringNullableFilter<"Node"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Node"> | Date | string | null
    dateOfDeath?: DateTimeNullableFilter<"Node"> | Date | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
  }

  export type FamilyTreeCreateWithoutNodesInput = {
    id?: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFamilyTreesInput
  }

  export type FamilyTreeUncheckedCreateWithoutNodesInput = {
    id?: string
    ownerId: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyTreeCreateOrConnectWithoutNodesInput = {
    where: FamilyTreeWhereUniqueInput
    create: XOR<FamilyTreeCreateWithoutNodesInput, FamilyTreeUncheckedCreateWithoutNodesInput>
  }

  export type RelationshipCreateWithoutPerson1Input = {
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
    person2: NodeCreateNestedOneWithoutRelationshipsAsPerson2Input
  }

  export type RelationshipUncheckedCreateWithoutPerson1Input = {
    id?: number
    person2Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipCreateOrConnectWithoutPerson1Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input>
  }

  export type RelationshipCreateManyPerson1InputEnvelope = {
    data: RelationshipCreateManyPerson1Input | RelationshipCreateManyPerson1Input[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutPerson2Input = {
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
    person1: NodeCreateNestedOneWithoutRelationshipsAsPerson1Input
  }

  export type RelationshipUncheckedCreateWithoutPerson2Input = {
    id?: number
    person1Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipCreateOrConnectWithoutPerson2Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input>
  }

  export type RelationshipCreateManyPerson2InputEnvelope = {
    data: RelationshipCreateManyPerson2Input | RelationshipCreateManyPerson2Input[]
    skipDuplicates?: boolean
  }

  export type FamilyTreeUpsertWithoutNodesInput = {
    update: XOR<FamilyTreeUpdateWithoutNodesInput, FamilyTreeUncheckedUpdateWithoutNodesInput>
    create: XOR<FamilyTreeCreateWithoutNodesInput, FamilyTreeUncheckedCreateWithoutNodesInput>
    where?: FamilyTreeWhereInput
  }

  export type FamilyTreeUpdateToOneWithWhereWithoutNodesInput = {
    where?: FamilyTreeWhereInput
    data: XOR<FamilyTreeUpdateWithoutNodesInput, FamilyTreeUncheckedUpdateWithoutNodesInput>
  }

  export type FamilyTreeUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFamilyTreesNestedInput
  }

  export type FamilyTreeUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUpsertWithWhereUniqueWithoutPerson1Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutPerson1Input, RelationshipUncheckedUpdateWithoutPerson1Input>
    create: XOR<RelationshipCreateWithoutPerson1Input, RelationshipUncheckedCreateWithoutPerson1Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutPerson1Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutPerson1Input, RelationshipUncheckedUpdateWithoutPerson1Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutPerson1Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutPerson1Input>
  }

  export type RelationshipScalarWhereInput = {
    AND?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    OR?: RelationshipScalarWhereInput[]
    NOT?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    id?: IntFilter<"Relationship"> | number
    person1Id?: StringFilter<"Relationship"> | string
    person2Id?: StringFilter<"Relationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"Relationship"> | $Enums.RelationshipType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
  }

  export type RelationshipUpsertWithWhereUniqueWithoutPerson2Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutPerson2Input, RelationshipUncheckedUpdateWithoutPerson2Input>
    create: XOR<RelationshipCreateWithoutPerson2Input, RelationshipUncheckedCreateWithoutPerson2Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutPerson2Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutPerson2Input, RelationshipUncheckedUpdateWithoutPerson2Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutPerson2Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutPerson2Input>
  }

  export type NodeCreateWithoutRelationshipsAsPerson1Input = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyTree: FamilyTreeCreateNestedOneWithoutNodesInput
    relationshipsAsPerson2?: RelationshipCreateNestedManyWithoutPerson2Input
  }

  export type NodeUncheckedCreateWithoutRelationshipsAsPerson1Input = {
    id?: string
    familyTreeId: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationshipsAsPerson2?: RelationshipUncheckedCreateNestedManyWithoutPerson2Input
  }

  export type NodeCreateOrConnectWithoutRelationshipsAsPerson1Input = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutRelationshipsAsPerson1Input, NodeUncheckedCreateWithoutRelationshipsAsPerson1Input>
  }

  export type NodeCreateWithoutRelationshipsAsPerson2Input = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyTree: FamilyTreeCreateNestedOneWithoutNodesInput
    relationshipsAsPerson1?: RelationshipCreateNestedManyWithoutPerson1Input
  }

  export type NodeUncheckedCreateWithoutRelationshipsAsPerson2Input = {
    id?: string
    familyTreeId: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationshipsAsPerson1?: RelationshipUncheckedCreateNestedManyWithoutPerson1Input
  }

  export type NodeCreateOrConnectWithoutRelationshipsAsPerson2Input = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutRelationshipsAsPerson2Input, NodeUncheckedCreateWithoutRelationshipsAsPerson2Input>
  }

  export type NodeUpsertWithoutRelationshipsAsPerson1Input = {
    update: XOR<NodeUpdateWithoutRelationshipsAsPerson1Input, NodeUncheckedUpdateWithoutRelationshipsAsPerson1Input>
    create: XOR<NodeCreateWithoutRelationshipsAsPerson1Input, NodeUncheckedCreateWithoutRelationshipsAsPerson1Input>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutRelationshipsAsPerson1Input = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutRelationshipsAsPerson1Input, NodeUncheckedUpdateWithoutRelationshipsAsPerson1Input>
  }

  export type NodeUpdateWithoutRelationshipsAsPerson1Input = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyTree?: FamilyTreeUpdateOneRequiredWithoutNodesNestedInput
    relationshipsAsPerson2?: RelationshipUpdateManyWithoutPerson2NestedInput
  }

  export type NodeUncheckedUpdateWithoutRelationshipsAsPerson1Input = {
    id?: StringFieldUpdateOperationsInput | string
    familyTreeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationshipsAsPerson2?: RelationshipUncheckedUpdateManyWithoutPerson2NestedInput
  }

  export type NodeUpsertWithoutRelationshipsAsPerson2Input = {
    update: XOR<NodeUpdateWithoutRelationshipsAsPerson2Input, NodeUncheckedUpdateWithoutRelationshipsAsPerson2Input>
    create: XOR<NodeCreateWithoutRelationshipsAsPerson2Input, NodeUncheckedCreateWithoutRelationshipsAsPerson2Input>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutRelationshipsAsPerson2Input = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutRelationshipsAsPerson2Input, NodeUncheckedUpdateWithoutRelationshipsAsPerson2Input>
  }

  export type NodeUpdateWithoutRelationshipsAsPerson2Input = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyTree?: FamilyTreeUpdateOneRequiredWithoutNodesNestedInput
    relationshipsAsPerson1?: RelationshipUpdateManyWithoutPerson1NestedInput
  }

  export type NodeUncheckedUpdateWithoutRelationshipsAsPerson2Input = {
    id?: StringFieldUpdateOperationsInput | string
    familyTreeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationshipsAsPerson1?: RelationshipUncheckedUpdateManyWithoutPerson1NestedInput
  }

  export type FamilyTreeCreateManyOwnerInput = {
    id?: string
    treeName: string
    description?: string | null
    countryOfOrigin?: string | null
    privacyLevel?: $Enums.PrivacyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyTreeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUpdateManyWithoutFamilyTreeNestedInput
  }

  export type FamilyTreeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutFamilyTreeNestedInput
  }

  export type FamilyTreeUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyFamilyTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    maidenName?: string | null
    gender?: string | null
    bio?: string | null
    profileImageUrl?: string | null
    dateOfBirth?: Date | string | null
    dateOfDeath?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateWithoutFamilyTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationshipsAsPerson1?: RelationshipUpdateManyWithoutPerson1NestedInput
    relationshipsAsPerson2?: RelationshipUpdateManyWithoutPerson2NestedInput
  }

  export type NodeUncheckedUpdateWithoutFamilyTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationshipsAsPerson1?: RelationshipUncheckedUpdateManyWithoutPerson1NestedInput
    relationshipsAsPerson2?: RelationshipUncheckedUpdateManyWithoutPerson2NestedInput
  }

  export type NodeUncheckedUpdateManyWithoutFamilyTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    maidenName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfDeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipCreateManyPerson1Input = {
    id?: number
    person2Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipCreateManyPerson2Input = {
    id?: number
    person1Id: string
    relationshipType: $Enums.RelationshipType
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type RelationshipUpdateWithoutPerson1Input = {
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person2?: NodeUpdateOneRequiredWithoutRelationshipsAsPerson2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutPerson1Input = {
    id?: IntFieldUpdateOperationsInput | number
    person2Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutPerson1Input = {
    id?: IntFieldUpdateOperationsInput | number
    person2Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelationshipUpdateWithoutPerson2Input = {
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person1?: NodeUpdateOneRequiredWithoutRelationshipsAsPerson1NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutPerson2Input = {
    id?: IntFieldUpdateOperationsInput | number
    person1Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutPerson2Input = {
    id?: IntFieldUpdateOperationsInput | number
    person1Id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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