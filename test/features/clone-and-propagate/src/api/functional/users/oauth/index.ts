/**
 * @packageDocumentation
 * @module api.functional.users.oauth
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type {
  IConnection,
  Resolved,
  IPropagation,
  HttpError,
} from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IAuthentication } from "../../../structures/IAuthentication";

/**
 * - When namespaced DTO type comes, `@nestia/sdk` had taken a mistake that writing only the deepest type even in the top or middle level namespaced types.
 * - When `clone` mode being used in SDK generator, it was not possible to clone recursive DTO type.
 * @throws 404
 *
 * @controller UsersController.getOauthProfile
 * @path GET /users/:user_id/oauth
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getOauthProfile(
  connection: IConnection,
  user_id: string,
  query: getOauthProfile.Query,
): Promise<getOauthProfile.Output> {
  return !!connection.simulate
    ? getOauthProfile.simulate(connection, user_id, query)
    : PlainFetcher.propagate(connection, {
        ...getOauthProfile.METADATA,
        path: getOauthProfile.path(user_id, query),
      });
}
export namespace getOauthProfile {
  export type Query = Resolved<IAuthentication>;
  export type Output = IPropagation<{
    200: IAuthentication.IProfile;
    404: "404 Not Found";
  }>;

  export const METADATA = {
    method: "GET",
    path: "/users/:user_id/oauth",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (user_id: string, query: getOauthProfile.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/users/${encodeURIComponent(user_id ?? "null")}/oauth`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<IAuthentication.IProfile> =>
    typia.random<IAuthentication.IProfile>(g);
  export const simulate = (
    connection: IConnection,
    user_id: string,
    query: getOauthProfile.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(user_id, query),
      contentType: "application/json",
    });
    try {
      assert.param("user_id")(() => typia.assert(user_id));
      assert.query(() => typia.assert(query));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    };
  };
}
