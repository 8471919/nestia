/**
 * @packageDocumentation
 * @module api.functional.headers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IBbsArticle } from "../../structures/IBbsArticle";
import type { IHeaders } from "../../structures/IHeaders";

/**
 * @controller HeadersController.emplace
 * @path PATCH /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function emplace(
  connection: IConnection<emplace.Headers>,
  section: string,
): Promise<emplace.Output> {
  return !!connection.simulate
    ? emplace.simulate(connection, section)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...emplace.METADATA,
          template: emplace.METADATA.path,
          path: emplace.path(section),
        },
      );
}
export namespace emplace {
  export type Headers = Resolved<IHeaders>;
  export type Output = Primitive<IHeaders>;

  export const METADATA = {
    method: "PATCH",
    path: "/headers/:section",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string) =>
    `/headers/${encodeURIComponent(section ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IHeaders>> => typia.random<Primitive<IHeaders>>(g);
  export const simulate = (
    connection: IConnection<emplace.Headers>,
    section: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(section),
      contentType: "application/json",
    });
    assert.param("section")(() => typia.assert(section));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * @controller HeadersController.store
 * @path POST /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection<store.Headers>,
  section: string,
  input: store.Input,
): Promise<store.Output> {
  return !!connection.simulate
    ? store.simulate(connection, section, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...store.METADATA,
          template: store.METADATA.path,
          path: store.path(section),
        },
        input,
      );
}
export namespace store {
  export type Headers = Resolved<IHeaders>;
  export type Input = Resolved<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/headers/:section",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = (section: string) =>
    `/headers/${encodeURIComponent(section ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IBbsArticle>> =>
    typia.random<Primitive<IBbsArticle>>(g);
  export const simulate = (
    connection: IConnection<store.Headers>,
    section: string,
    input: store.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(section),
      contentType: "application/json",
    });
    assert.param("section")(() => typia.assert(section));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
