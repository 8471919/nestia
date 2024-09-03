/**
 * @packageDocumentation
 * @module api.functional.health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

/**
 * @controller HealthController.get
 * @path GET /health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<void> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(),
      });
}
export namespace get {
  export const METADATA = {
    method: "GET",
    path: "/health",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/health";
  export const random = (g?: Partial<typia.IRandomGenerator>): Resolved<void> =>
    typia.random<void>(g);
  export const simulate = (connection: IConnection): void => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
