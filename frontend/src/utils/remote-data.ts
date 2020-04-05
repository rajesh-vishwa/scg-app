import { Option, some, none } from "fp-ts/lib/Option";
import { Lazy } from "fp-ts/lib/function";

export type RemoteProgress = {
  readonly loaded: number;
  readonly total: Option<number>;
};

export type RemoteInitial = {
  readonly _tag: "RemoteInitial";
};

export type RemotePending = {
  readonly _tag: "RemotePending";
  readonly progress: Option<RemoteProgress>;
};

export type RemoteFailure<E> = {
  readonly _tag: "RemoteFailure";
  readonly error: E;
};

export type RemoteSuccess<A> = {
  readonly _tag: "RemoteSuccess";
  readonly value: A;
};

//Represents a value of one of four possible types (a disjoint union)
export type RemoteData<E, A> =
  | RemoteInitial
  | RemotePending
  | RemoteFailure<E>
  | RemoteSuccess<A>;

//constructors
export const failure = <E>(error: E): RemoteData<E, never> => ({
  _tag: "RemoteFailure",
  error
});

export const success = <A>(value: A): RemoteData<never, A> => ({
  _tag: "RemoteSuccess",
  value
});

export const pending: RemoteData<never, never> = {
  _tag: "RemotePending",
  progress: none
};

export const progress = (
  progress: RemoteProgress
): RemoteData<never, never> => ({
  _tag: "RemotePending",
  progress: some(progress)
});

export const initial: RemoteData<never, never> = {
  _tag: "RemoteInitial"
};

//filters
/**
 * Returns true only if {@link RemoteData} is {@link RemoteFailure}
 */
export const isFailure = <E>(
  data: RemoteData<E, unknown>
): data is RemoteFailure<E> => data._tag === "RemoteFailure";

/**
 * Returns true only if {@link RemoteData} is {@link RemoteSuccess}
 */
export const isSuccess = <A>(
  data: RemoteData<unknown, A>
): data is RemoteSuccess<A> => data._tag === "RemoteSuccess";

/**
 * Returns true only if {@link RemoteData} is {@link RemotePending}
 */
export const isPending = (
  data: RemoteData<unknown, unknown>
): data is RemotePending => data._tag === "RemotePending";

/**
 * Returns true only if {@link RemoteData} is {@link RemoteInitial}
 */
export const isInitial = (
  data: RemoteData<unknown, unknown>
): data is RemoteInitial => data._tag === "RemoteInitial";

/**
 * Takes a default value as an argument.
 * If this {@link RemoteData} is "Left" part it will return default value.
 * If this {@link RemoteData} is {@link RemoteSuccess} it will return it's value ("wrapped" value, not default value)
 *
 * Note: Default value should be the same type as {@link RemoteData} (internal) value, if you want to pass different type as default, use {@link fold}.
 *
 * @example
 * getOrElse(() => 999)(some(1)) // 1
 * getOrElseValue(() => 999)(initial) // 999
 */
export const getOrElse = <L, A>(f: Lazy<A>) => (ma: RemoteData<L, A>): A => (isSuccess(ma) ? ma.value : f());